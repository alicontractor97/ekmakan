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

  // Public init: called from dashboard.html bootstrap.
  window.initTenantProfile = async function(){
    await loadProfile();
    render();
    await renderProfileAccess();
  };
})();
