// ============================================================================
// tenant-profile.js — Tenant Profile feature, Stage 2 of MPA refactor.
//
// Loaded by dashboard.html (after common.js + app.js). Renders the tenant
// profile form into #tenantProfileSection on /dashboard, handles save-as-you-
// go per section, file uploads to the tenant-docs Supabase bucket, and
// displays the live verification level badge.
//
// Design notes:
//   • Every field is optional. We never auto-INSERT an empty row — only
//     create a row when the user first saves something.
//   • Each section saves independently via UPSERT on tenant_profiles.user_id.
//   • Files go straight to storage. We save the storage path to the row, not
//     the file itself. After upload, doc_verifications[key] is set to 'pending'
//     so admin sees it in their queue.
//   • Religion/dietary/alcohol are stored but the form clearly labels them
//     "Admin-visible only — brokers NEVER see these". The DB enforces this
//     via the get_redacted_tenant_profile function (Stage 1 SQL).
//   • Verification level (bronze/silver/gold/platinum) is computed in the DB
//     by a trigger; we read it back after every save and update the badge.
//
// IMPORTANT: This file assumes `sb` (Supabase client) and `cu` (current user)
// are already defined globally by common.js. It does NOT make any assumptions
// about app.js helpers — the tenant profile is self-contained.
// ============================================================================

(function(){

  // ── State ──
  // The full profile row (or null if user hasn't saved anything yet).
  // Refreshed after every save.
  var _profile = null;
  var _landlordRefs = [];
  var _saving = {}; // section -> bool, prevents double-clicks during async save

  // ── Verification level config ──
  var TIERS = {
    none:     {label: 'Not Started',  color: '#999',   nextLabel: 'Bronze',   nextHelp: 'Fill in basic info (occupants, marital status, employer name) to reach Bronze.'},
    bronze:   {label: 'Bronze',       color: '#cd7f32', nextLabel: 'Silver',   nextHelp: 'Add full employment details and verify your PAN to reach Silver.'},
    silver:   {label: 'Silver',       color: '#999',    nextLabel: 'Gold',     nextHelp: 'Upload at least one income proof (salary slip, ITR, or employment letter) and have it verified to reach Gold.'},
    gold:     {label: 'Gold',         color: '#daa520', nextLabel: 'Platinum', nextHelp: 'Add a past landlord reference and have it verified to reach Platinum.'},
    platinum: {label: 'Platinum',     color: '#9b59b6', nextLabel: null,       nextHelp: 'You\'re fully verified. Brokers can see your verification badge alongside any inquiry you send.'}
  };

  // ── Helpers ──
  function _esc(s){
    if(s==null)return '';
    return String(s).replace(/[&<>"']/g,function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function _val(id){var e=document.getElementById(id);return e?(e.value||'').trim():'';}
  function _setVal(id,v){var e=document.getElementById(id);if(e&&v!=null)e.value=v;}
  function _setChecked(id,b){var e=document.getElementById(id);if(e)e.checked=!!b;}
  function _isChecked(id){var e=document.getElementById(id);return e?e.checked:false;}

  // Toast wrapper (toast() from common.js may not be present in all paths,
  // so be defensive)
  function _say(msg, type){
    if(typeof toast === 'function') toast(msg, type);
    else console.log('['+(type||'info')+']', msg);
  }

  // ── Data load ──
  // Pulls profile + refs from DB. Returns null if no profile row yet.
  async function loadProfile(){
    if(!cu){return null;}
    var {data: prof, error: pErr} = await sb
      .from('tenant_profiles')
      .select('*')
      .eq('user_id', cu.id)
      .maybeSingle();
    if(pErr){console.warn('Profile load error:', pErr.message);}
    _profile = prof || null;

    var {data: refs} = await sb
      .from('tenant_landlord_refs')
      .select('*')
      .eq('user_id', cu.id)
      .order('id', {ascending: true});
    _landlordRefs = refs || [];
    return _profile;
  }

  // ── Save section ──
  // Performs an UPSERT with just the fields touched in `patch`. We use upsert
  // because there may be no row yet on first save.
  async function saveSection(section, patch){
    if(!cu){_say('Sign in first.', 'e'); return false;}
    if(_saving[section]) return false;
    _saving[section] = true;
    try {
      var row = Object.assign({user_id: cu.id}, patch);
      var {error} = await sb
        .from('tenant_profiles')
        .upsert(row, {onConflict: 'user_id'});
      if(error){
        _say('Save failed: ' + error.message, 'e');
        return false;
      }
      _say('Saved.', 's');
      await loadProfile();
      // Re-render so the verification badge picks up any new tier
      render();
      return true;
    } catch(e){
      _say('Save failed: ' + e.message, 'e');
      return false;
    } finally {
      _saving[section] = false;
    }
  }

  // ── File upload ──
  // Uploads a file to tenant-docs/{user_id}/{slot}.{ext} and returns the
  // storage path. Also sets doc_verifications[slot]='pending' on the row.
  async function uploadDoc(slot, file){
    if(!cu){_say('Sign in first.', 'e'); return null;}
    if(!file){_say('No file selected.', 'e'); return null;}
    var maxBytes = 5 * 1024 * 1024; // 5 MB cap
    if(file.size > maxBytes){
      _say('File too large (max 5 MB).', 'e');
      return null;
    }
    var allowedTypes = ['application/pdf','image/jpeg','image/png','image/webp'];
    if(allowedTypes.indexOf(file.type) < 0){
      _say('File type not allowed. Use PDF, JPG, PNG, or WEBP.', 'e');
      return null;
    }
    var ext = (file.name.split('.').pop()||'pdf').toLowerCase();
    var path = cu.id + '/' + slot + '.' + ext;
    var {error: upErr} = await sb.storage.from('tenant-docs').upload(path, file, {upsert: true, contentType: file.type});
    if(upErr){
      _say('Upload failed: ' + upErr.message, 'e');
      return null;
    }
    // Update the corresponding URL column + mark doc_verifications[slot]='pending'
    var slotToUrlCol = {
      pan_doc: 'pan_doc_url',
      employment_letter: 'employment_letter_url',
      salary_slip_1: 'salary_slip_1_url',
      salary_slip_2: 'salary_slip_2_url',
      salary_slip_3: 'salary_slip_3_url',
      itr_y1: 'itr_y1_url',
      itr_y2: 'itr_y2_url'
    };
    var col = slotToUrlCol[slot];
    if(!col){_say('Unknown document slot.', 'e'); return null;}

    // Read current doc_verifications, add the slot, save back together with the URL
    var existingDocVer = (_profile && _profile.doc_verifications) || {};
    var nextDocVer = Object.assign({}, existingDocVer, {[slot]: 'pending'});

    var patch = {};
    patch[col] = path;
    patch.doc_verifications = nextDocVer;
    var ok = await saveSection('docs', patch);
    if(ok) _say('Uploaded. Awaiting admin review.', 's');
    return ok ? path : null;
  }

  // ── Render: top badge ──
  function renderBadge(){
    var level = (_profile && _profile.verification_level) || 'none';
    var t = TIERS[level] || TIERS.none;
    var pctMap = {none: 0, bronze: 25, silver: 50, gold: 75, platinum: 100};
    var pct = pctMap[level] || 0;

    // Admin notes from review (e.g. "Re-upload clearer scan of PAN").
    // Surface prominently so the tenant knows what to fix.
    var adminNotes = _profile && _profile.tenant_facing_notes;
    var notesHTML = adminNotes ? ''+
      '<div style="background:#fff3cd;border:1px solid #f0d080;border-radius:8px;padding:10px 12px;margin-top:12px;font-size:13px;line-height:1.5;color:#856404;">'+
        '<strong><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-flag"/></svg> Note from our review team:</strong><br/>'+
        '<span style="white-space:pre-wrap;">'+_esc(adminNotes)+'</span>'+
      '</div>' : '';

    return ''+
      '<div style="background:var(--wh);border-radius:14px;padding:22px 24px;margin-bottom:20px;border:1px solid var(--sa);">'+
        '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">'+
          '<div style="flex-shrink:0;display:inline-flex;align-items:center;gap:8px;background:'+t.color+';color:#fff;padding:8px 16px;border-radius:24px;font-weight:700;font-family:DM Sans,sans-serif;">'+
            '<svg class="icn icn-sm" aria-hidden="true"><use href="#i-check"/></svg>'+
            'Verification: ' + _esc(t.label) +
          '</div>'+
          '<div style="flex:1;min-width:200px;">'+
            '<div style="height:8px;background:var(--cr);border-radius:4px;overflow:hidden;">'+
              '<div style="height:100%;width:'+pct+'%;background:'+t.color+';transition:width .3s;"></div>'+
            '</div>'+
            (t.nextLabel ? '<p style="font-size:12px;color:var(--mu);margin-top:8px;line-height:1.4;">'+_esc(t.nextHelp)+'</p>' :
                            '<p style="font-size:12px;color:var(--g);font-weight:700;margin-top:8px;">'+_esc(t.nextHelp)+'</p>')+
          '</div>'+
        '</div>'+
        notesHTML +
      '</div>';
  }

  // ── Render: section wrapper ──
  function _section(id, title, contentHTML, opts){
    opts = opts || {};
    return ''+
      '<details id="'+id+'" '+(opts.open?'open':'')+' style="background:var(--wh);border:1px solid var(--sa);border-radius:12px;margin-bottom:14px;overflow:hidden;">'+
        '<summary style="padding:16px 20px;cursor:pointer;font-family:Playfair Display,serif;font-size:17px;font-weight:700;color:var(--ink);list-style:none;display:flex;align-items:center;justify-content:space-between;">'+
          '<span>' + _esc(title) + '</span>'+
          '<span style="font-size:12px;color:var(--mu);font-family:DM Sans,sans-serif;font-weight:400;">'+(opts.statusBadge||'')+'</span>'+
        '</summary>'+
        '<div style="padding:0 20px 20px;border-top:1px solid var(--sa);">'+contentHTML+'</div>'+
      '</details>';
  }

  // Helper: simple input row
  function _row(label, inputHTML, helpText){
    return ''+
      '<div class="fg" style="margin-top:14px;">'+
        '<label class="flbl">'+_esc(label)+'</label>'+
        inputHTML +
        (helpText ? '<p style="font-size:11px;color:var(--mu);margin-top:4px;">'+_esc(helpText)+'</p>' : '') +
      '</div>';
  }

  // ── Render: section 1 — Basic info ──
  function renderBasic(){
    var p = _profile || {};
    var html = ''+
      _row('Number of occupants',
        '<input class="fi" type="number" id="tpNumOcc" min="1" max="20" value="'+_esc(p.num_occupants)+'" placeholder="e.g. 2"/>') +
      _row('Relationship of occupants',
        '<input class="fi" type="text" id="tpOccRel" value="'+_esc(p.occupants_relationship)+'" placeholder="e.g. Spouse + 1 child, Roommates, Solo"/>') +
      _row('Marital status',
        '<select class="fi" id="tpMarital">'+
          '<option value="">—</option>'+
          ['single','married','divorced','widowed','prefer_not'].map(function(v){
            var lbl = v==='prefer_not' ? 'Prefer not to say' : v.charAt(0).toUpperCase()+v.slice(1);
            return '<option value="'+v+'"'+(p.marital_status===v?' selected':'')+'>'+lbl+'</option>';
          }).join('')+
        '</select>') +
      _row('Pets',
        '<label style="font-size:13px;display:flex;align-items:center;gap:8px;"><input type="checkbox" id="tpHasPets"'+(p.has_pets?' checked':'')+'/> I have pets</label>'+
        '<input class="fi" type="text" id="tpPetDetails" value="'+_esc(p.pet_details)+'" placeholder="e.g. 1 small dog, well-trained" style="margin-top:8px;"/>') +
      _row('Smoking',
        '<label style="font-size:13px;display:flex;align-items:center;gap:8px;"><input type="checkbox" id="tpSmokes"'+(p.smokes?' checked':'')+'/> I smoke</label>') +
      '<button class="btn btn-bl btn-sm" style="margin-top:18px;" onclick="window._tp_saveBasic()">Save</button>';

    return _section('tpSecBasic','Basic Information',html,{open:!_profile});
  }

  window._tp_saveBasic = async function(){
    await saveSection('basic', {
      num_occupants: _val('tpNumOcc') ? Number(_val('tpNumOcc')) : null,
      occupants_relationship: _val('tpOccRel') || null,
      marital_status: _val('tpMarital') || null,
      has_pets: _isChecked('tpHasPets'),
      pet_details: _val('tpPetDetails') || null,
      smokes: _isChecked('tpSmokes')
    });
  };

  // ── Render: section 2 — Lifestyle (admin-visible only) ──
  function renderLifestyle(){
    var p = _profile || {};
    var html = ''+
      '<div class="al ali" style="margin-top:14px;font-size:12px;line-height:1.5;">'+
        '<strong><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg> Visible to admin only.</strong> '+
        'Brokers and property owners <strong>NEVER</strong> see these answers. We use them to match you with similar tenants and to detect bias by listers (e.g. spotting brokers who consistently reject certain communities). You can leave them all blank.'+
      '</div>' +
      _row('Religion',
        '<select class="fi" id="tpReligion">'+
          '<option value="">—</option>'+
          ['hindu','muslim','christian','sikh','jain','buddhist','parsi','jewish','none','prefer_not','other'].map(function(v){
            var lbl = v==='prefer_not'?'Prefer not to say':v==='none'?'No religion':v==='other'?'Other':v.charAt(0).toUpperCase()+v.slice(1);
            return '<option value="'+v+'"'+(p.religion===v?' selected':'')+'>'+lbl+'</option>';
          }).join('')+
        '</select>') +
      _row('Dietary preference',
        '<select class="fi" id="tpDiet">'+
          '<option value="">—</option>'+
          ['veg','non_veg','eggetarian','vegan','jain','prefer_not'].map(function(v){
            var lbl = v==='non_veg'?'Non-veg':v==='prefer_not'?'Prefer not to say':v.charAt(0).toUpperCase()+v.slice(1);
            return '<option value="'+v+'"'+(p.dietary_preference===v?' selected':'')+'>'+lbl+'</option>';
          }).join('')+
        '</select>') +
      _row('Alcohol preference',
        '<select class="fi" id="tpAlcohol">'+
          '<option value="">—</option>'+
          ['none','occasional','regular','prefer_not'].map(function(v){
            var lbl = v==='prefer_not'?'Prefer not to say':v.charAt(0).toUpperCase()+v.slice(1);
            return '<option value="'+v+'"'+(p.alcohol_pref===v?' selected':'')+'>'+lbl+'</option>';
          }).join('')+
        '</select>') +
      '<button class="btn btn-bl btn-sm" style="margin-top:18px;" onclick="window._tp_saveLifestyle()">Save</button>';

    return _section('tpSecLife','Lifestyle (Admin-Only)',html,{statusBadge:'<span class="own-b" style="font-size:10px;padding:2px 8px;">Admin-only</span>'});
  }

  window._tp_saveLifestyle = async function(){
    await saveSection('lifestyle', {
      religion: _val('tpReligion') || null,
      dietary_preference: _val('tpDiet') || null,
      alcohol_pref: _val('tpAlcohol') || null
    });
  };

  // ── Render: section 3 — Employment ──
  function renderEmployment(){
    var p = _profile || {};
    var html = ''+
      _row('Employer name',
        '<input class="fi" type="text" id="tpEmployer" value="'+_esc(p.employer_name)+'" placeholder="e.g. Acme Corp"/>') +
      _row('Role / Job title',
        '<input class="fi" type="text" id="tpRole" value="'+_esc(p.role_title)+'" placeholder="e.g. Software Engineer"/>') +
      _row('Employment type',
        '<select class="fi" id="tpEmpType">'+
          '<option value="">—</option>'+
          [['full_time','Full-time'],['part_time','Part-time'],['contract','Contract'],['self_employed','Self-employed'],['student','Student'],['unemployed','Unemployed']].map(function(pair){
            return '<option value="'+pair[0]+'"'+(p.employment_type===pair[0]?' selected':'')+'>'+pair[1]+'</option>';
          }).join('')+
        '</select>') +
      _row('Monthly income (₹)',
        '<input class="fi" type="number" id="tpIncome" min="0" step="1000" value="'+_esc(p.monthly_income)+'" placeholder="e.g. 75000"/>',
        'Brokers will see this as a band (e.g. "₹50k – 1L/mo"), never the exact number.') +
      _row('Joined this employer on',
        '<input class="fi" type="date" id="tpJoined" value="'+_esc(p.joined_date)+'"/>') +
      '<button class="btn btn-bl btn-sm" style="margin-top:18px;" onclick="window._tp_saveEmployment()">Save</button>';

    return _section('tpSecEmp','Employment',html);
  }

  window._tp_saveEmployment = async function(){
    await saveSection('employment', {
      employer_name: _val('tpEmployer') || null,
      role_title: _val('tpRole') || null,
      employment_type: _val('tpEmpType') || null,
      monthly_income: _val('tpIncome') ? Number(_val('tpIncome')) : null,
      joined_date: _val('tpJoined') || null
    });
  };

  // ── Render: section 4 — Identity (PAN) ──
  function renderIdentity(){
    var p = _profile || {};
    var dv = (p.doc_verifications||{});
    var panState = dv.pan_doc || (p.pan_doc_url ? 'pending' : null);
    var html = ''+
      _row('PAN number',
        '<input class="fi" type="text" id="tpPan" value="'+_esc(p.pan_number)+'" placeholder="ABCDE1234F" style="text-transform:uppercase;" maxlength="10"/>',
        'Your PAN will be masked (XXXXX1234F) when shown to brokers.') +
      _row('PAN card scan',
        '<input class="fi" type="file" id="tpPanFile" accept="application/pdf,image/*"/>'+
        (p.pan_doc_url
          ? '<p style="font-size:12px;margin-top:6px;">Current: '+_docStatusBadge(panState)+' <button class="btn btn-o btn-sm" onclick="window._tp_uploadPan()" style="margin-left:8px;">Replace</button></p>'
          : '<button class="btn btn-bl btn-sm" style="margin-top:8px;" onclick="window._tp_uploadPan()">Upload</button>'),
        'PDF or image, max 5 MB. Stored privately and shown only to admin for verification.') +
      '<button class="btn btn-bl btn-sm" style="margin-top:18px;" onclick="window._tp_saveIdentity()">Save PAN number</button>';

    return _section('tpSecId','Identity (PAN)',html,{statusBadge: panState ? _docStatusBadge(panState) : ''});
  }

  function _docStatusBadge(state){
    if(state==='verified') return '<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✓ Verified</span>';
    if(state==='pending')  return '<span style="background:#fff3cd;color:#856404;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">⏳ Pending Review</span>';
    if(state==='rejected') return '<span style="background:#f8d7da;color:#721c24;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✗ Rejected — re-upload</span>';
    return '';
  }

  window._tp_saveIdentity = async function(){
    var pan = _val('tpPan').toUpperCase();
    if(pan && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)){
      _say('PAN format must be ABCDE1234F (5 letters, 4 digits, 1 letter).', 'e');
      return;
    }
    await saveSection('identity', {pan_number: pan || null});
  };

  window._tp_uploadPan = async function(){
    var f = document.getElementById('tpPanFile');
    if(!f||!f.files||!f.files[0]){_say('Choose a file first.', 'e'); return;}
    await uploadDoc('pan_doc', f.files[0]);
  };

  // ── Render: section 5 — Income proofs ──
  function renderIncome(){
    var p = _profile || {};
    var dv = p.doc_verifications || {};
    function _slot(slot, label, urlCol){
      var st = dv[slot] || (p[urlCol] ? 'pending' : null);
      return ''+
        '<div style="border:1px solid var(--sa);border-radius:8px;padding:12px;margin-top:10px;">'+
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">'+
            '<strong style="font-size:13px;">'+_esc(label)+'</strong>'+
            (st ? _docStatusBadge(st) : '<span style="font-size:11px;color:var(--mu);">Not uploaded</span>')+
          '</div>'+
          '<div style="display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap;">'+
            '<input class="fi" type="file" id="tpFile_'+slot+'" accept="application/pdf,image/*" style="flex:1;min-width:180px;"/>'+
            '<button class="btn btn-bl btn-sm" onclick="window._tp_uploadDoc(\''+slot+'\')">Upload</button>'+
          '</div>'+
        '</div>';
    }

    var html = ''+
      '<p style="font-size:12px;color:var(--mu);margin-top:14px;">'+
        'Upload at least one income proof to reach Gold tier. Files are private — only admin reviews them. Brokers see only a "Verified" badge, never the file.'+
      '</p>' +
      _slot('employment_letter', 'Employment / Offer Letter', 'employment_letter_url') +
      _slot('salary_slip_1', 'Latest Salary Slip', 'salary_slip_1_url') +
      _slot('salary_slip_2', 'Salary Slip — 2 months ago', 'salary_slip_2_url') +
      _slot('salary_slip_3', 'Salary Slip — 3 months ago', 'salary_slip_3_url') +
      _slot('itr_y1', 'ITR — Latest Financial Year', 'itr_y1_url') +
      _slot('itr_y2', 'ITR — Previous Financial Year', 'itr_y2_url');

    // Status badge for the section header: count how many are verified
    var verified = ['employment_letter','salary_slip_1','salary_slip_2','salary_slip_3','itr_y1','itr_y2']
      .filter(function(k){return dv[k]==='verified';}).length;
    var pending = ['employment_letter','salary_slip_1','salary_slip_2','salary_slip_3','itr_y1','itr_y2']
      .filter(function(k){return dv[k]==='pending';}).length;
    var statusBadge = '';
    if(verified) statusBadge = verified+' verified';
    if(pending) statusBadge += (statusBadge?', ':'')+pending+' pending';

    return _section('tpSecIncome','Income Proof',html,{statusBadge:statusBadge});
  }

  window._tp_uploadDoc = async function(slot){
    var f = document.getElementById('tpFile_' + slot);
    if(!f||!f.files||!f.files[0]){_say('Choose a file first.', 'e'); return;}
    await uploadDoc(slot, f.files[0]);
  };

  // ── Render: section 6 — Past landlord references ──
  function renderRefs(){
    var html = '<p style="font-size:12px;color:var(--mu);margin-top:14px;">Up to 3 past landlords. Admin will call to verify. Brokers see only the count of verified references and the overall outcome (positive / mixed / negative), never names or phone numbers.</p>';

    html += '<div id="tpRefList">' + _landlordRefs.map(_refRow).join('') + '</div>';

    if(_landlordRefs.length < 3){
      html += ''+
        '<div style="border:1px dashed var(--sa);border-radius:8px;padding:14px;margin-top:14px;">'+
          '<strong style="font-size:13px;">Add a landlord reference</strong>' +
          _row('Landlord name', '<input class="fi" type="text" id="tpRefName" placeholder="Mr. Sharma"/>') +
          _row('Landlord phone', '<input class="fi" type="tel" id="tpRefPhone" placeholder="+91 98765 43210"/>') +
          _row('Property address (optional)', '<input class="fi" type="text" id="tpRefAddr" placeholder="2 BHK, Andheri West, Mumbai"/>') +
          _row('Tenancy from', '<input class="fi" type="date" id="tpRefStart"/>') +
          _row('Tenancy to', '<input class="fi" type="date" id="tpRefEnd"/>') +
          _row('Monthly rent paid (₹, optional)', '<input class="fi" type="number" id="tpRefRent" min="0" step="1000"/>') +
          '<button class="btn btn-bl btn-sm" style="margin-top:14px;" onclick="window._tp_addRef()">Add Reference</button>'+
        '</div>';
    } else {
      html += '<p style="font-size:12px;color:var(--mu);margin-top:14px;">Maximum of 3 references.</p>';
    }

    var verifiedCount = _landlordRefs.filter(function(r){return r.verified;}).length;
    var statusBadge = _landlordRefs.length ? (verifiedCount + ' / ' + _landlordRefs.length + ' verified') : '';
    return _section('tpSecRefs','Past Landlord References',html,{statusBadge:statusBadge});
  }

  function _refRow(r){
    var statusBadge = r.verified
      ? '<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✓ Verified ('+_esc(r.verification_outcome||'')+')</span>'
      : '<span style="background:#fff3cd;color:#856404;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">⏳ Pending</span>';
    return ''+
      '<div style="border:1px solid var(--sa);border-radius:8px;padding:12px;margin-top:10px;">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">'+
          '<div>'+
            '<strong>'+_esc(r.landlord_name)+'</strong>'+
            '<div style="font-size:12px;color:var(--mu);">'+_esc(r.landlord_phone)+'</div>'+
            (r.property_addr ? '<div style="font-size:12px;color:var(--mu);">'+_esc(r.property_addr)+'</div>' : '')+
          '</div>'+
          '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">'+
            statusBadge+
            (r.verified ? '' : '<button class="btn btn-o btn-sm" onclick="window._tp_delRef('+r.id+')" style="font-size:11px;">Remove</button>')+
          '</div>'+
        '</div>'+
      '</div>';
  }

  window._tp_addRef = async function(){
    var name = _val('tpRefName');
    var phone = _val('tpRefPhone');
    if(!name || !phone){
      _say('Name and phone are required.', 'e');
      return;
    }
    if(_landlordRefs.length >= 3){
      _say('Maximum 3 references.', 'e');
      return;
    }
    var {error} = await sb.from('tenant_landlord_refs').insert({
      user_id: cu.id,
      landlord_name: name,
      landlord_phone: phone,
      property_addr: _val('tpRefAddr') || null,
      tenancy_start: _val('tpRefStart') || null,
      tenancy_end: _val('tpRefEnd') || null,
      rent_amount: _val('tpRefRent') ? Number(_val('tpRefRent')) : null
    });
    if(error){_say('Failed: ' + error.message, 'e'); return;}
    _say('Reference added. Admin will call to verify.', 's');
    await loadProfile();
    render();
  };

  window._tp_delRef = async function(refId){
    if(!confirm('Remove this reference?')) return;
    var {error} = await sb.from('tenant_landlord_refs').delete().eq('id', refId).eq('user_id', cu.id);
    if(error){_say('Failed: ' + error.message, 'e'); return;}
    await loadProfile();
    render();
  };

  // ── Render: section 7 — Self introduction ──
  function renderIntro(){
    var p = _profile || {};
    var html = ''+
      _row('Tell brokers about yourself',
        '<textarea class="fi" id="tpIntro" rows="4" maxlength="500" placeholder="e.g. \'IT professional working at TCS for 5 years. Looking for a quiet 2BHK near my office. Non-smoker, very tidy.\'">'+_esc(p.self_intro)+'</textarea>',
        'Up to 500 characters. Brokers see this in your profile preview.') +
      '<button class="btn btn-bl btn-sm" style="margin-top:18px;" onclick="window._tp_saveIntro()">Save</button>';
    return _section('tpSecIntro','About Me',html);
  }

  window._tp_saveIntro = async function(){
    await saveSection('intro', {self_intro: _val('tpIntro') || null});
  };

  // ── Render orchestration ──
  function render(){
    var host = document.getElementById('tenantProfileSection');
    if(!host) return;
    host.innerHTML = ''+
      '<h2 style="font-family:Playfair Display,serif;font-size:22px;margin:30px 0 6px;">Tenant Profile</h2>' +
      '<p style="font-size:13px;color:var(--mu);margin-bottom:18px;line-height:1.5;">' +
        'Optional. Brokers see a redacted version (income as a band, PAN masked) only after you send them an inquiry. ' +
        'You can revoke broker access anytime under <em>Profile Access</em>. ' +
        'Religion, dietary preference, and alcohol preference are <strong>never</strong> shown to brokers.' +
      '</p>' +
      renderBadge() +
      renderBasic() +
      renderEmployment() +
      renderIdentity() +
      renderIncome() +
      renderRefs() +
      renderIntro() +
      renderLifestyle();
  }

  // ── Profile Access panel (Stage 4) ──
  // Shows the tenant every active access row + lets them revoke.
  // Each row shows: which listing, which broker, when granted, view count,
  // last viewed. Revoke calls the revoke_profile_access RPC which sets
  // revoked_at; the broker's RPC view-attempts then return 'Access denied'.
  async function renderProfileAccess(){
    var host=document.getElementById('profileAccessSection');
    if(!host)return;
    if(!cu){host.innerHTML='';return;}

    // Fetch all access rows for this tenant (active + revoked).
    var {data:rows,error}=await sb.from('tenant_profile_access')
      .select('id,inquiry_id,broker_user_id,listing_id,granted_at,revoked_at,view_count,last_viewed_at')
      .eq('tenant_user_id',cu.id)
      .order('granted_at',{ascending:false});
    if(error){
      host.innerHTML='<p style="font-size:13px;color:var(--mu);">Could not load profile access list: '+_esc(error.message)+'</p>';
      return;
    }
    rows=rows||[];
    if(!rows.length){
      host.innerHTML='';
      return;
    }
    // Look up broker names + listing titles. We do bulk SELECTs to avoid an
    // N+1 storm — listings already cached, brokers we fetch in one query.
    var brokerIds=[];rows.forEach(function(r){if(r.broker_user_id&&brokerIds.indexOf(r.broker_user_id)<0)brokerIds.push(r.broker_user_id);});
    var brokerMap={};
    if(brokerIds.length){
      var {data:brokers}=await sb.from('users').select('id,name,role,agency').in('id',brokerIds);
      (brokers||[]).forEach(function(b){brokerMap[b.id]=b;});
    }
    // Listings: prefer the cached gL() if available
    var listingMap={};
    try{
      if(typeof gL==='function'){
        var allL=await gL();
        (allL||[]).forEach(function(l){listingMap[l.id]=l;});
      }
    }catch(e){}

    var active=rows.filter(function(r){return !r.revoked_at;});
    var revoked=rows.filter(function(r){return r.revoked_at;});

    function rowHTML(r,isRevoked){
      var b=brokerMap[r.broker_user_id]||{};
      var l=listingMap[r.listing_id]||{};
      var brokerName=b.name||'(broker)';
      var brokerLabel=b.role==='broker'?'Broker':b.role==='owner'?'Owner':b.role==='builder'?'Builder':'Lister';
      var listingTitle=l.title||'(listing)';
      var grantedFmt=r.granted_at?new Date(r.granted_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'';
      var lastViewedFmt=r.last_viewed_at?new Date(r.last_viewed_at).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'never';
      var statusBadge=isRevoked
        ?'<span style="background:#f8d7da;color:#721c24;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✗ Revoked '+(r.revoked_at?new Date(r.revoked_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short'}):'')+'</span>'
        :'<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✓ Active</span>';
      var revokeBtn=isRevoked?'':'<button class="btn btn-o btn-sm" style="margin-top:6px;font-size:11px;padding:4px 10px;" onclick="window._tp_revoke('+r.id+')">Revoke Access</button>';
      return ''+
        '<div style="border:1px solid var(--sa);border-radius:8px;padding:12px;margin-top:10px;background:'+(isRevoked?'#fafafa':'var(--wh)')+';">'+
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">'+
            '<div style="flex:1;min-width:0;">'+
              '<strong>'+_esc(brokerName)+'</strong> <span style="font-size:11px;color:var(--mu);">('+_esc(brokerLabel)+(b.agency?' · '+_esc(b.agency):'')+')</span>'+
              '<div style="font-size:12px;color:var(--mu);margin-top:2px;">Property: <a href="/listing?id='+r.listing_id+'" style="color:var(--t);">'+_esc(listingTitle)+'</a></div>'+
              '<div style="font-size:11px;color:var(--mu);margin-top:4px;">Shared on '+_esc(grantedFmt)+' &middot; viewed '+(r.view_count||0)+' times &middot; last '+_esc(lastViewedFmt)+'</div>'+
            '</div>'+
            '<div style="text-align:right;">'+statusBadge+'<br/>'+revokeBtn+'</div>'+
          '</div>'+
        '</div>';
    }

    var html=''+
      '<h2 style="font-family:Playfair Display,serif;font-size:22px;margin:30px 0 6px;">Profile Access</h2>'+
      '<p style="font-size:13px;color:var(--mu);margin-bottom:14px;line-height:1.5;">'+
        'Brokers and listers who have access to your tenant profile via inquiries you sent. You can revoke access at any time — once revoked, they can no longer see your shared profile.'+
      '</p>';
    if(active.length){
      html+='<h3 style="font-family:DM Sans,sans-serif;font-size:14px;font-weight:700;color:var(--ink);margin-top:18px;">Active access ('+active.length+')</h3>';
      html+=active.map(function(r){return rowHTML(r,false);}).join('');
    }
    if(revoked.length){
      html+='<details style="margin-top:18px;"><summary style="cursor:pointer;font-family:DM Sans,sans-serif;font-size:14px;font-weight:700;color:var(--mu);">Previously revoked ('+revoked.length+')</summary><div>';
      html+=revoked.map(function(r){return rowHTML(r,true);}).join('');
      html+='</div></details>';
    }
    host.innerHTML=html;
  }

  window._tp_revoke=async function(accessId){
    var reason=prompt('Optional: reason for revoking? (leave blank if you prefer)','');
    if(reason===null)return; // user cancelled the prompt
    var ok=confirm('Revoke access for this broker? They will no longer be able to view your shared profile via this inquiry.');
    if(!ok)return;
    try{
      var {data,error}=await sb.rpc('revoke_profile_access',{
        p_access_id:accessId,
        p_reason:reason||null
      });
      if(error){
        _say('Revoke failed: '+error.message,'e');
        return;
      }
      if(data===false){
        _say('Could not revoke (already revoked or not your row).','e');
      } else {
        _say('Access revoked.','s');
      }
      await renderProfileAccess();
    }catch(e){
      _say('Revoke failed: '+(e&&e.message||'unknown'),'e');
    }
  };

  // Expose so the dashboard bootstrap can call it.
  window.renderProfileAccess=renderProfileAccess;

  // ── Document Requests panel (Stage 6C) ──
  // Shows tenant the broker-initiated requests for full document access.
  // Tenant approves with their own subset selection or denies. Approved rows
  // show view/download counts + a Revoke button.
  //
  // Slot keys must match the SQL function whitelist exactly. Keep this in
  // sync with the broker-side _DOC_SLOT_LABELS in app.js.
  var _DOC_LABELS={
    pan_doc:'PAN Card',
    employment_letter:'Employment / Offer Letter',
    salary_slip_1:'Latest Salary Slip',
    salary_slip_2:'Salary Slip — 2 months ago',
    salary_slip_3:'Salary Slip — 3 months ago',
    itr_y1:'ITR — Latest FY',
    itr_y2:'ITR — Previous FY'
  };

  async function renderDocRequests(){
    var host=document.getElementById('docRequestsSection');
    if(!host)return;
    if(!cu){host.innerHTML='';return;}

    var {data:rows,error}=await sb.from('tenant_full_share_requests')
      .select('id,broker_user_id,inquiry_id,listing_id,requested_docs,approved_docs,request_message,denial_reason,status,requested_at,responded_at,revoked_at,view_count,download_count,last_viewed_at,last_downloaded_at')
      .eq('tenant_user_id',cu.id)
      .order('requested_at',{ascending:false});
    if(error){
      host.innerHTML='<p style="font-size:13px;color:var(--mu);">Could not load document requests: '+_esc(error.message)+'</p>';
      return;
    }
    rows=rows||[];
    if(!rows.length){host.innerHTML='';return;}

    // Look up brokers + listings (same shape as renderProfileAccess)
    var brokerIds=[];rows.forEach(function(r){if(r.broker_user_id&&brokerIds.indexOf(r.broker_user_id)<0)brokerIds.push(r.broker_user_id);});
    var brokerMap={};
    if(brokerIds.length){
      var {data:brokers}=await sb.from('users').select('id,name,role,agency').in('id',brokerIds);
      (brokers||[]).forEach(function(b){brokerMap[b.id]=b;});
    }
    var listingMap={};
    try{
      if(typeof gL==='function'){
        var allL=await gL();
        (allL||[]).forEach(function(l){listingMap[l.id]=l;});
      }
    }catch(e){}

    var pending=rows.filter(function(r){return r.status==='pending';});
    var approved=rows.filter(function(r){return r.status==='approved';});
    var resolved=rows.filter(function(r){return r.status==='denied'||r.status==='revoked';});

    function _docList(slots){
      if(!slots||!slots.length)return '<em style="color:var(--mu);">none</em>';
      return slots.map(function(s){return _esc(_DOC_LABELS[s]||s);}).join(', ');
    }

    function _brokerLine(r){
      var b=brokerMap[r.broker_user_id]||{};
      var l=listingMap[r.listing_id]||{};
      var brokerName=b.name||'(broker)';
      var listingTitle=l.title||'(listing)';
      var roleLabel=b.role==='broker'?'Broker':b.role==='owner'?'Owner':b.role==='builder'?'Builder':'Lister';
      return '<strong>'+_esc(brokerName)+'</strong> <span style="font-size:11px;color:var(--mu);">('+_esc(roleLabel)+(b.agency?' · '+_esc(b.agency):'')+')</span>'+
             '<div style="font-size:12px;color:var(--mu);margin-top:2px;">For: <a href="/listing?id='+r.listing_id+'" style="color:var(--t);">'+_esc(listingTitle)+'</a></div>';
    }

    function _pendingRow(r){
      var requestedAt=r.requested_at?new Date(r.requested_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'';
      return '<div style="border:2px solid #daa520;border-radius:8px;padding:14px;margin-top:10px;background:#fffaeb;">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">'+
          '<div style="flex:1;min-width:0;">'+
            _brokerLine(r)+
            '<div style="font-size:11px;color:var(--mu);margin-top:6px;">Requested on '+_esc(requestedAt)+'</div>'+
          '</div>'+
          '<span style="background:#daa520;color:#fff;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;">⏳ Awaiting your response</span>'+
        '</div>'+
        '<div style="margin-top:10px;font-size:13px;background:var(--wh);padding:10px;border-radius:6px;">'+
          '<strong>Documents requested:</strong> '+_docList(r.requested_docs)+
          (r.request_message?'<div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--sa);font-style:italic;">"'+_esc(r.request_message)+'"</div>':'')+
        '</div>'+
        '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;">'+
          '<button class="btn btn-bl btn-sm" onclick="window._tp_openApproveModal('+r.id+')" style="flex:1;">Review &amp; Approve</button>'+
          '<button class="btn btn-o btn-sm" onclick="window._tp_denyRequest('+r.id+')">Deny</button>'+
        '</div>'+
      '</div>';
    }

    function _approvedRow(r){
      var respondedAt=r.responded_at?new Date(r.responded_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'';
      var lastView=r.last_viewed_at?new Date(r.last_viewed_at).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'never';
      return '<div style="border:1px solid #28a745;border-radius:8px;padding:12px;margin-top:10px;background:#f4fbf6;">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">'+
          '<div style="flex:1;min-width:0;">'+
            _brokerLine(r)+
            '<div style="font-size:11px;color:var(--mu);margin-top:4px;">'+
              'Approved '+_esc(respondedAt)+' &middot; '+
              (r.view_count||0)+' views &middot; '+
              (r.download_count||0)+' downloads &middot; '+
              'last viewed '+_esc(lastView)+
            '</div>'+
            '<div style="font-size:12px;margin-top:6px;"><strong>Sharing:</strong> '+_docList(r.approved_docs)+'</div>'+
          '</div>'+
          '<div style="text-align:right;">'+
            '<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✓ Active</span><br/>'+
            '<button class="btn btn-o btn-sm" style="margin-top:6px;font-size:11px;padding:4px 10px;" onclick="window._tp_revokeFullShare('+r.id+')">Revoke</button>'+
          '</div>'+
        '</div>'+
      '</div>';
    }

    function _resolvedRow(r){
      var when=r.status==='denied'?r.responded_at:r.revoked_at;
      var whenFmt=when?new Date(when).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'';
      var label=r.status==='denied'?'Denied':'Revoked';
      var color=r.status==='denied'?'#7c1a1a':'#856404';
      var bg=r.status==='denied'?'#f8d7da':'#fff3cd';
      return '<div style="border:1px solid var(--sa);border-radius:8px;padding:10px;margin-top:8px;background:#fafafa;">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">'+
          '<div style="flex:1;min-width:0;font-size:12.5px;">'+
            _brokerLine(r)+
            '<div style="font-size:11px;color:var(--mu);margin-top:2px;">'+_esc(label)+' '+_esc(whenFmt)+'</div>'+
          '</div>'+
          '<span style="background:'+bg+';color:'+color+';padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">'+_esc(label)+'</span>'+
        '</div>'+
      '</div>';
    }

    var html='<h2 style="font-family:Playfair Display,serif;font-size:22px;margin:30px 0 6px;">Document Requests</h2>'+
             '<p style="font-size:13px;color:var(--mu);margin-bottom:14px;line-height:1.5;">'+
               'Brokers may request your full documents (PAN scan, salary slips, ITRs) when conversations get serious. You decide which to share. You can revoke approved access anytime, though brokers who already downloaded files may have local copies.'+
             '</p>';
    if(pending.length){
      html+='<h3 style="font-family:DM Sans,sans-serif;font-size:14px;font-weight:700;color:#856404;margin-top:14px;">Pending requests ('+pending.length+')</h3>';
      html+=pending.map(_pendingRow).join('');
    }
    if(approved.length){
      html+='<h3 style="font-family:DM Sans,sans-serif;font-size:14px;font-weight:700;color:#155724;margin-top:18px;">Active shares ('+approved.length+')</h3>';
      html+=approved.map(_approvedRow).join('');
    }
    if(resolved.length){
      html+='<details style="margin-top:18px;"><summary style="cursor:pointer;font-family:DM Sans,sans-serif;font-size:14px;font-weight:700;color:var(--mu);">History ('+resolved.length+')</summary><div>';
      html+=resolved.map(_resolvedRow).join('');
      html+='</div></details>';
    }
    host.innerHTML=html;
  }

  // ── Approve modal ──
  // Shows EVERY requested doc, even ones the tenant hasn't uploaded yet.
  // Uploaded docs are pre-checked; missing docs show an inline upload field
  // and a warning so the tenant can either upload now or uncheck and skip.
  // The SQL guard rejects approval if any approved slot has no file, so we
  // can't accidentally let through an "approved but not uploaded" share.
  window._tp_openApproveModal=async function(requestId){
    // Fetch the request fresh so we have the requested_docs list
    var {data:rows,error}=await sb.from('tenant_full_share_requests')
      .select('id,broker_user_id,listing_id,requested_docs,request_message,status')
      .eq('id',requestId)
      .limit(1);
    if(error||!rows||!rows.length){_say('Could not load request.','e');return;}
    var r=rows[0];
    if(r.status!=='pending'){_say('This request is no longer pending.','e');await renderDocRequests();return;}

    // Lookup broker name for the modal header
    var {data:brokers}=await sb.from('users').select('id,name').eq('id',r.broker_user_id).limit(1);
    var brokerName=(brokers&&brokers[0]&&brokers[0].name)||'broker';

    // Refresh profile data so we know which docs are uploaded right now.
    // _profile is the IIFE-scoped cache from loadProfile(); reload it.
    await loadProfile();
    var p=_profile||{};
    var slotToUrlCol={
      pan_doc:'pan_doc_url',
      employment_letter:'employment_letter_url',
      salary_slip_1:'salary_slip_1_url',
      salary_slip_2:'salary_slip_2_url',
      salary_slip_3:'salary_slip_3_url',
      itr_y1:'itr_y1_url',
      itr_y2:'itr_y2_url'
    };

    var existing=document.getElementById('tpApproveM');if(existing)existing.remove();
    var modal=document.createElement('div');
    modal.id='tpApproveM';
    modal.className='mo open';

    // For each requested slot: if uploaded, render checkbox pre-checked.
    // If missing, render warning + inline file input + Upload Now button.
    // The checkbox is unchecked and disabled until upload completes.
    var rowsHtml=(r.requested_docs||[]).map(function(s){
      var lbl=_DOC_LABELS[s]||s;
      var col=slotToUrlCol[s];
      var hasFile=col&&p[col];
      if(hasFile){
        return '<label style="display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--sa);border-radius:8px;margin-top:8px;cursor:pointer;">'+
          '<input type="checkbox" id="tpa_'+s+'" value="'+s+'" checked style="width:18px;height:18px;"/>'+
          '<span style="flex:1;font-size:13px;">'+_esc(lbl)+
            '<span style="font-size:10px;color:var(--gr);font-weight:700;margin-left:8px;background:#d4edda;padding:1px 6px;border-radius:8px;">✓ Uploaded</span>'+
          '</span>'+
        '</label>';
      } else {
        // Missing doc — show upload affordance
        return '<div style="border:2px dashed #d9534f;border-radius:8px;padding:10px;margin-top:8px;background:#fef5f5;" id="tpaRow_'+s+'">'+
          '<div style="display:flex;align-items:center;gap:10px;">'+
            '<input type="checkbox" id="tpa_'+s+'" value="'+s+'" disabled style="width:18px;height:18px;opacity:.4;"/>'+
            '<span style="flex:1;font-size:13px;">'+_esc(lbl)+
              '<span style="font-size:10px;color:#7c1a1a;font-weight:700;margin-left:8px;background:#fde2e2;padding:1px 6px;border-radius:8px;">Not uploaded yet</span>'+
            '</span>'+
          '</div>'+
          '<div style="margin-top:8px;padding-left:28px;display:flex;gap:6px;align-items:center;flex-wrap:wrap;">'+
            '<input type="file" id="tpaFile_'+s+'" accept="application/pdf,image/*" style="flex:1;min-width:120px;font-size:11px;"/>'+
            '<button class="btn btn-bl btn-sm" style="font-size:11px;padding:5px 10px;" onclick="window._tp_inlineUpload(\''+s+'\')">Upload now</button>'+
          '</div>'+
          '<p style="font-size:10px;color:var(--mu);margin:6px 0 0 28px;">Or leave unchecked to skip sharing this document.</p>'+
        '</div>';
      }
    }).join('');

    modal.innerHTML='<div class="mb" style="max-width:560px;max-height:90vh;overflow-y:auto;">'+
      '<div class="mh">'+
        '<div>'+
          '<h2 style="font-family:Playfair Display,serif;font-size:20px;">Review request from '+_esc(brokerName)+'</h2>'+
          '<p style="font-size:12px;color:var(--mu);margin-top:2px;">Choose which documents to share. You control everything.</p>'+
        '</div>'+
        '<button class="mc" onclick="window._tp_closeApproveModal()" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
      '</div>'+
      (r.request_message?'<div style="background:var(--cr);padding:10px;border-radius:8px;margin-bottom:14px;font-size:13px;font-style:italic;">"'+_esc(r.request_message)+'"</div>':'')+
      '<div class="al ali" style="margin-bottom:12px;font-size:12px;line-height:1.5;">'+
        '<strong>What approving means:</strong> The broker will see the actual files, your full PAN, exact monthly income, and employer details. Religion, dietary preference, and landlord phone numbers are <strong>still never shared</strong>. You can revoke anytime, but downloaded files may already be on the broker\'s device.'+
      '</div>'+
      '<p style="font-size:12px;color:var(--mu);margin-bottom:6px;">Documents requested:</p>'+
      '<div>'+(rowsHtml||'<em style="color:var(--mu);">No documents in this request.</em>')+'</div>'+
      '<div style="display:flex;gap:8px;margin-top:14px;">'+
        '<button class="btn btn-bl" onclick="window._tp_submitApprove('+requestId+')" style="flex:1;">Approve &amp; share selected</button>'+
        '<button class="btn btn-o" onclick="window._tp_closeApproveModal()">Cancel</button>'+
      '</div>'+
    '</div>';
    modal.onclick=function(e){if(e.target===modal)window._tp_closeApproveModal();};
    document.body.appendChild(modal);
    window._tp_currentRequestSlots=r.requested_docs||[];
  };

  // Inline upload from the approve modal — uploads the file, updates the
  // profile, then reloads the modal so the slot row flips to "uploaded".
  window._tp_inlineUpload=async function(slot){
    var f=document.getElementById('tpaFile_'+slot);
    if(!f||!f.files||!f.files[0]){_say('Choose a file first.','e');return;}
    var btn=document.querySelector('#tpaRow_'+slot+' button.btn-bl');
    if(btn){btn.disabled=true;btn.textContent='Uploading…';}
    var path=await uploadDoc(slot,f.files[0]);
    if(!path){
      if(btn){btn.disabled=false;btn.textContent='Upload now';}
      return;
    }
    // Successful upload — re-render the modal so this row flips to "uploaded"
    // and the checkbox becomes enabled + checked.
    // Stash the request id from a button to re-open
    var approveBtn=document.querySelector('#tpApproveM button.btn-bl[onclick*="_tp_submitApprove"]');
    var match=approveBtn&&approveBtn.getAttribute('onclick').match(/_tp_submitApprove\((\d+)\)/);
    var requestId=match?Number(match[1]):null;
    if(requestId)await window._tp_openApproveModal(requestId);
  };

  window._tp_closeApproveModal=function(){
    var m=document.getElementById('tpApproveM');
    if(m)m.remove();
    delete window._tp_currentRequestSlots;
  };

  window._tp_submitApprove=async function(requestId){
    var slots=window._tp_currentRequestSlots||[];
    var approved=slots.filter(function(s){
      var cb=document.getElementById('tpa_'+s);
      return cb&&cb.checked;
    });
    if(!approved.length){_say('Select at least one document to share, or use Deny instead.','e');return;}
    var btn=document.querySelector('#tpApproveM button.btn-bl');
    if(btn){btn.disabled=true;btn.textContent='Approving…';}
    try{
      var {error}=await sb.rpc('respond_full_share',{
        p_request_id:requestId,
        p_action:'approve',
        p_approved_docs:approved,
        p_denial_reason:null
      });
      if(error){
        _say('Approve failed: '+error.message,'e');
        if(btn){btn.disabled=false;btn.textContent='Approve & share selected';}
        return;
      }
      _say('Documents shared. The broker has been notified.','s');
      window._tp_closeApproveModal();
      await renderDocRequests();
    }catch(e){
      _say('Approve failed: '+(e&&e.message||'unknown'),'e');
      if(btn){btn.disabled=false;btn.textContent='Approve & share selected';}
    }
  };

  window._tp_denyRequest=async function(requestId){
    var reason=prompt('Optional reason for declining? (the broker will see this)','');
    if(reason===null)return;
    if(!confirm('Deny this document request?'))return;
    try{
      var {error}=await sb.rpc('respond_full_share',{
        p_request_id:requestId,
        p_action:'deny',
        p_approved_docs:null,
        p_denial_reason:reason||null
      });
      if(error){_say('Deny failed: '+error.message,'e');return;}
      _say('Request denied.','s');
      await renderDocRequests();
    }catch(e){_say('Deny failed: '+(e&&e.message||'unknown'),'e');}
  };

  window._tp_revokeFullShare=async function(requestId){
    var reason=prompt('Optional reason for revoking?','');
    if(reason===null)return;
    if(!confirm('Revoke document access?\n\nThe broker will no longer be able to view your files. However, if they already downloaded any documents, those copies remain on their device — revocation only stops future access.'))return;
    try{
      var {error}=await sb.rpc('revoke_full_share',{
        p_request_id:requestId,
        p_reason:reason||null
      });
      if(error){_say('Revoke failed: '+error.message,'e');return;}
      _say('Access revoked.','s');
      await renderDocRequests();
    }catch(e){_say('Revoke failed: '+(e&&e.message||'unknown'),'e');}
  };

  window.renderDocRequests=renderDocRequests;

  // ── Discoverability (banner + welcome modal) ──
  // Goals:
  //   • Users who haven't started their tenant profile should see a banner
  //     at the top of /dashboard nudging them to set it up.
  //   • First-time users who just landed on /dashboard should get a one-shot
  //     welcome modal explaining the feature and offering "Now / Later".
  //   • Banner is dismissable; dismissal persists for ~7 days (sessionStorage).
  //   • Welcome modal is one-time per session (sessionStorage flag) and only
  //     fires for role==='user' with no profile row yet.

  function _isUserRole(){
    return cu&&cu.role==='user';
  }
  // Profile is "started" if it exists at all. Even a Bronze tier means they've
  // engaged with the feature, so we stop nudging.
  function _profileIsStarted(){
    return _profile&&(_profile.verification_level||'none')!=='none';
  }

  function _scrollToProfile(){
    var sec=document.getElementById('tenantProfileSection');
    if(sec&&sec.scrollIntoView){
      sec.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }

  function renderProfilePrompt(){
    var host=document.getElementById('tenantProfilePrompt');
    if(!host)return;
    // Don't show the banner to brokers/owners/builders or to users who've started.
    if(!_isUserRole()||_profileIsStarted()){host.innerHTML='';return;}
    // Honor 7-day dismissal
    try{
      var dismissed=sessionStorage.getItem('tp_banner_dismissed_until');
      if(dismissed&&Date.now()<Number(dismissed)){host.innerHTML='';return;}
    }catch(e){}

    host.innerHTML=
      '<div id="tpBanner" style="background:linear-gradient(135deg,var(--tl),#e0f0ee);border:1px solid var(--t);border-radius:12px;padding:16px 20px;margin-bottom:18px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;">'+
        '<div style="flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--t);color:#fff;display:flex;align-items:center;justify-content:center;">'+
          '<svg class="icn icn-lg" aria-hidden="true"><use href="#i-shield-check"/></svg>'+
        '</div>'+
        '<div style="flex:1;min-width:200px;">'+
          '<strong style="font-family:Playfair Display,serif;font-size:16px;color:var(--td);display:block;margin-bottom:2px;">Set up your tenant profile</strong>'+
          '<span style="font-size:13px;color:var(--ink);line-height:1.4;">Brokers respond faster to verified tenants. Add your basic info, employment, and ID — takes about 5 minutes. You stay in control of what\'s shared.</span>'+
        '</div>'+
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+
          '<button class="btn btn-bl btn-sm" onclick="window._tp_startSetup()" style="white-space:nowrap;">Set up now</button>'+
          '<button class="btn btn-o btn-sm" onclick="window._tp_dismissBanner()" style="white-space:nowrap;">Later</button>'+
        '</div>'+
      '</div>';
  }

  window._tp_startSetup=function(){
    // Open the basic-info section (it's already open by default if no profile,
    // but make sure it is) and scroll to it
    var sec=document.getElementById('tpSecBasic');
    if(sec)sec.setAttribute('open','');
    _scrollToProfile();
  };

  window._tp_dismissBanner=function(){
    try{
      // Hide for 7 days (in session storage so it resets on browser quit)
      sessionStorage.setItem('tp_banner_dismissed_until',String(Date.now()+7*24*60*60*1000));
    }catch(e){}
    var b=document.getElementById('tpBanner');
    if(b)b.remove();
  };

  // ── Welcome modal (first-time on /dashboard) ──
  function _shouldShowWelcome(){
    if(!_isUserRole())return false;
    if(_profile)return false; // already started
    try{
      if(sessionStorage.getItem('tp_welcome_shown')==='1')return false;
    }catch(e){}
    return true;
  }

  function showTenantWelcome(){
    if(!_shouldShowWelcome())return;
    try{sessionStorage.setItem('tp_welcome_shown','1');}catch(e){}

    var existing=document.getElementById('tpWelcomeM');if(existing)existing.remove();
    var modal=document.createElement('div');
    modal.id='tpWelcomeM';
    modal.className='mo open';
    modal.innerHTML=
      '<div class="mb" style="max-width:520px;">'+
        '<div class="mh">'+
          '<div>'+
            '<h2 style="font-family:Playfair Display,serif;font-size:22px;">Welcome to Ek Makān</h2>'+
            '<p style="font-size:12px;color:var(--mu);margin-top:2px;">Let\'s get you ready to find a home.</p>'+
          '</div>'+
          '<button class="mc" onclick="window._tp_closeWelcome()" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
        '</div>'+
        '<div style="background:linear-gradient(135deg,var(--tl),#e0f0ee);border-radius:10px;padding:18px;margin-bottom:14px;">'+
          '<div style="display:flex;gap:12px;align-items:flex-start;">'+
            '<div style="flex-shrink:0;width:40px;height:40px;border-radius:50%;background:var(--t);color:#fff;display:flex;align-items:center;justify-content:center;">'+
              '<svg class="icn" aria-hidden="true"><use href="#i-shield-check"/></svg>'+
            '</div>'+
            '<div>'+
              '<strong style="font-family:Playfair Display,serif;font-size:16px;color:var(--td);display:block;margin-bottom:4px;">Your tenant profile (optional)</strong>'+
              '<p style="font-size:13px;color:var(--ink);line-height:1.5;">Brokers screen serious applicants faster when they can see your basics and verified employment. You upload once, you control who sees what, and you can revoke anytime. <strong>Religion, dietary preference, and alcohol preference are never shown to brokers.</strong></p>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<ul style="list-style:none;padding:0;margin:14px 0;font-size:13px;color:var(--ink);line-height:1.7;">'+
          '<li style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gr);flex-shrink:0;">✓</span> Basic info (occupants, marital status, pets) — under 1 minute</li>'+
          '<li style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gr);flex-shrink:0;">✓</span> Employment + monthly income — about 1 minute</li>'+
          '<li style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gr);flex-shrink:0;">✓</span> Upload PAN and salary slips for verification — about 3 minutes</li>'+
        '</ul>'+
        '<p style="font-size:12px;color:var(--mu);line-height:1.5;margin-bottom:14px;">All optional. Skip anything you\'re not ready to share. You can always come back to this from your dashboard.</p>'+
        '<div style="display:flex;gap:8px;">'+
          '<button class="btn btn-bl" onclick="window._tp_welcomeStart()" style="flex:1;">Set up now (~5 min)</button>'+
          '<button class="btn btn-o" onclick="window._tp_closeWelcome()">I\'ll do it later</button>'+
        '</div>'+
      '</div>';
    modal.onclick=function(e){if(e.target===modal)window._tp_closeWelcome();};
    document.body.appendChild(modal);
  }

  window._tp_closeWelcome=function(){
    var m=document.getElementById('tpWelcomeM');
    if(m)m.remove();
  };

  window._tp_welcomeStart=function(){
    window._tp_closeWelcome();
    setTimeout(_scrollToProfile,80);
  };

  // Public init: called from dashboard.html bootstrap.
  window.initTenantProfile = async function(){
    await loadProfile();
    render();
    renderProfilePrompt();
    await renderProfileAccess();
    await renderDocRequests();
    // Welcome modal — runs after everything else is rendered so the modal
    // appears over a settled dashboard rather than mid-load.
    setTimeout(showTenantWelcome,300);
  };
})();
