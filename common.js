// ============================================================================
// common.js — shared layer for Ek Makān (MPA refactor, Session 1)
//
// This file is loaded by every page. It owns:
//   • Supabase client (`sb`) — single source for DB + auth
//   • Current user state (`cu`) — read by upNav() and any page-specific code
//   • The auth state listener (token refresh, sign-out, password recovery)
//   • upNav() — the navbar Login/Dashboard toggle, kept exactly as before
//   • toast() — non-blocking notifications
//   • Route guard (requireAuth) — for protected pages added in later sessions
//   • Shared modal injection — auth, password update, report modals appear on
//     every page automatically, even pages that don't include them in HTML
//
// What lives here vs. app.js: anything that's needed BEFORE a specific page's
// logic boots, OR is shared across multiple pages, lives here. Page-specific
// rendering, wizards, dashboards, etc. stay in app.js (or future page modules).
//
// Loading order matters: common.js MUST be loaded before app.js so that `cu`,
// `sb`, and the helpers below are available as globals when app.js runs.
// ============================================================================

// ── SUPABASE CLIENT ─────────────────────────────────────────────────────────
const SUPABASE_URL='https://nzpuhmktxtexbicrszlr.supabase.co';
const SUPABASE_ANON='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVobWt0eHRleGJpY3JzemxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzgwMDUsImV4cCI6MjA5MTkxNDAwNX0.ij9vgnFl4DEBsr85b500YIBcEQ0JZQD4zd6ZZ2g-eEA';
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON);

// ── CURRENT USER STATE ──────────────────────────────────────────────────────
// `cu` is the single source of truth for "is someone signed in, and who?".
// Both common.js and app.js read/mutate this. Pages added in later sessions
// will inspect `cu` (via requireAuth) to decide whether to render or redirect.
let cu=null;

// ── TOAST ───────────────────────────────────────────────────────────────────
// Non-blocking notification. Renders into a #toast element that lives in the
// page's HTML. Type: 's' = success (default), 'e' = error.
function toast(msg,type){
  type=type||'s';
  var el=document.getElementById('toast');if(!el)return;
  el.innerHTML=msg;el.className='show '+type;
  setTimeout(function(){el.className='';},3200);
}

// ── ESCAPE HELPERS ──────────────────────────────────────────────────────────
// Used by upNav and modal handlers. Defined here so common.js doesn't depend
// on app.js. Identical behaviour to app.js's esc/escAttr.
function _escCommon(s){
  if(s==null)return '';
  return String(s).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

// ── NAVBAR ──────────────────────────────────────────────────────────────────
// Reads `cu` and toggles the navbar's Login/Sign Up vs Dashboard/Logout state.
// MUST be defined here so future pages (lister.html, listing.html) can call it
// after their own auth check, and so the auth state listener below can call it
// when a sign-out happens in another tab.
//
// The constraint is firm: when `cu` is non-null, the Login button must NEVER
// appear, and when `cu` is null, the Dashboard button must NEVER appear. That
// invariant is enforced here and nowhere else.

// Notification bell — inlined verbatim from index.html so extracted MPA pages
// (dashboard, lister, listing, browse) get the same bell + dropdown panel.
// Idempotent: if #nNotifWrap already exists in the page (as on index.html),
// we leave it alone.
function injectNotifBell(){
  if(document.getElementById('nNotifWrap'))return;
  // Find the nav container that holds the existing user menu items.
  // Insertion point: right before the avatar/Sign In group. We try a few
  // selectors to be robust against minor markup differences across pages.
  var anchor=document.getElementById('nLg')||document.getElementById('nLo')||document.getElementById('nG');
  if(!anchor||!anchor.parentNode)return;
  var wrap=document.createElement('div');
  wrap.id='nNotifWrap';
  wrap.style.cssText='display:none;position:relative;';
  wrap.innerHTML=
    '<button onclick="toggleNotifPanel()" style="background:none;border:none;cursor:pointer;padding:8px;position:relative;color:#fff;display:flex;align-items:center;" title="Notifications" aria-label="Notifications">'+
      '<svg class="icn icn-lg" aria-hidden="true"><use href="#i-bell"/></svg>'+
      '<span id="nNotifBadge" style="display:none;position:absolute;top:0;right:0;background:var(--red);color:#fff;font-size:10px;font-weight:700;border-radius:50%;min-width:18px;height:18px;line-height:18px;text-align:center;font-family:\'DM Sans\',sans-serif;"></span>'+
    '</button>'+
    '<div id="nNotifPanel" style="display:none;position:absolute;right:0;top:42px;width:360px;max-height:500px;overflow-y:auto;background:var(--wh);border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.18);border:1px solid var(--sa);z-index:100;">'+
      '<div style="padding:14px 18px;border-bottom:1px solid var(--sa);display:flex;justify-content:space-between;align-items:center;">'+
        '<strong style="font-family:\'Playfair Display\',serif;font-size:15px;color:var(--ink);">Notifications</strong>'+
        '<button onclick="closeNotifPanel()" style="background:none;border:none;cursor:pointer;color:var(--mu);padding:4px;" title="Close" aria-label="Close"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-close"/></svg></button>'+
      '</div>'+
      '<div id="nNotifList"></div>'+
    '</div>';
  anchor.parentNode.insertBefore(wrap,anchor);
}

function upNav(){
  var show=function(id){var e=document.getElementById(id);if(e)e.style.display='';};
  var hide=function(id){var e=document.getElementById(id);if(e)e.style.display='none';};
  var set=function(id,h){var e=document.getElementById(id);if(e)e.innerHTML=h;};
  // Make sure the notification bell HTML exists in this page's nav. The bell
  // was originally only inlined in index.html — extracted pages (dashboard,
  // lister, listing, browse) didn't get it, so notifications appeared to be
  // "missing" on those pages. injectNotifBell is idempotent: if the wrapper
  // already exists we skip.
  injectNotifBell();
  if(cu){
    hide('nLg');hide('nRg');show('nLo');show('nG');show('nB');show('nNotifWrap');
    set('nG','Hi, '+_escCommon(cu.name));
    set('nB',
      cu.role==='broker'?'<span class="brk-b"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-broker"/></svg> Broker</span>':
      cu.role==='owner'?'<span class="own-b"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-owner"/></svg> Owner</span>':
      cu.role==='builder'?'<span class="brk-b" style="background:rgba(218,165,32,.15);color:#c58600;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-sparkle"/></svg> Builder</span>':
      cu.role==='admin'?'<span style="background:rgba(240,208,112,.2);color:#f0d070;font-size:11px;font-weight:700;padding:2px 9px;border-radius:50px;">Admin</span>':'');
    hide('nD');hide('nL');hide('nA');
    if(cu.role==='user'){show('nD');hide('nPost');}
    else if(cu.role==='broker'||cu.role==='owner'||cu.role==='builder'){show('nL');show('nPost');}
    else if(cu.role==='admin'){show('nA');hide('nPost');}
  } else {
    show('nLg');show('nRg');hide('nLo');hide('nG');hide('nB');hide('nNotifWrap');
    hide('nD');hide('nL');hide('nA');show('nPost');
  }
}

// ── ROUTE GUARD ─────────────────────────────────────────────────────────────
// Used by future protected pages (dashboard.html, lister.html, etc.) at the
// very top of their boot sequence:
//
//     await requireAuth();          // any logged-in user
//     await requireAuth(['admin']); // only admins
//
// If the session check fails the user is sent to the homepage. The function
// returns a promise that resolves AFTER `cu` has been hydrated, so the caller
// can rely on `cu` being non-null when it continues. Pages that don't require
// auth simply don't call this.
//
// Since Session 1 still has only one page (index.html) which is publicly
// browseable, this is effectively dormant. Sessions 2+ will use it.
async function requireAuth(allowedRoles){
  // Wait for the initial auth bootstrap (defined below) to finish.
  await _authReady;
  if(!cu){
    // Not logged in — redirect to home and ask the SPA to pop the login modal.
    // The SPA's bootstrap reads ?openLogin=1 and ?next= to handle this. After
    // a successful sign-in, the user is bounced back to where they were.
    var here=window.location.pathname+window.location.search;
    var redirect='/?openLogin=1';
    if(here&&here!=='/'){
      redirect+='&next='+encodeURIComponent(here);
    }
    window.location.replace(redirect);
    // Throw to halt the caller's downstream code (the redirect is async-ish in browsers).
    throw new Error('requireAuth: redirecting to login');
  }
  if(allowedRoles&&allowedRoles.length&&allowedRoles.indexOf(cu.role)<0){
    if(typeof toast==='function')toast('You do not have access to that page.','e');
    window.location.replace('/');
    throw new Error('requireAuth: role not permitted');
  }
  return cu;
}

// ── AUTH BOOTSTRAP ──────────────────────────────────────────────────────────
// On every page load we need to (a) check whether there's an active Supabase
// session, (b) if yes, fetch the user's profile row to populate `cu`, and
// (c) call upNav so the navbar reflects the right state from the first paint.
//
// `_authReady` is a promise that resolves when this is done. Pages that call
// requireAuth await it; pages that don't, just let their own boot code race
// — `cu` may briefly be null on first paint, and that's fine for public pages.
let _authReady=(async function(){
  try {
    var {data:{session}}=await sb.auth.getSession();
    if(session&&session.user){
      var {data:profile}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified,is_trusted').eq('id',session.user.id).single();
      if(profile){
        cu={
          id:profile.id,
          email:profile.email,
          name:profile.name||(session.user.user_metadata||{}).name||'',
          phone:profile.phone||'',
          role:profile.role||'user',
          agency:profile.agency||'',
          lic:profile.license_no||'',
          joinedAt:profile.joined_at?(profile.joined_at+'').split('T')[0]:'',
          verified:profile.verified||false,
          trusted:!!profile.is_trusted
        };
      }
    }
  } catch(e) {
    console.warn('Auth bootstrap failed:',e&&e.message);
  }
  // Always update navbar after bootstrap, regardless of outcome.
  upNav();
})();

// ── AUTH STATE LISTENER ─────────────────────────────────────────────────────
// Supabase fires this when a token is refreshed, the user signs out (in any
// tab), or a password recovery flow is initiated. We re-sync `cu` and the
// navbar so every page stays in sync with the actual session.
sb.auth.onAuthStateChange(function(ev,session){
  if(ev==='SIGNED_OUT'){
    cu=null;
    upNav();
  }
  if(ev==='PASSWORD_RECOVERY'){
    // The user clicked a recovery email link. We need to show the password
    // update modal so they can set a new password. The modal is injected by
    // injectSharedModals() so it's available even on pages that don't ship
    // it inline.
    var m=document.getElementById('pwUpdateM');
    if(m)m.classList.add('open');
  }
});

// ── SHARED MODALS ───────────────────────────────────────────────────────────
// Inject the auth (login/register), password-update, and report modals into
// any page that doesn't already have them. We check for the presence of each
// modal's root element and only inject what's missing — this means index.html
// (which still has the modals inline) is unaffected, but future pages without
// the inline markup get the modals "for free" by just loading common.js.
//
// IMPORTANT: the inline `authM` / `pwUpdateM` modals in index.html are tied
// to the existing wizard logic in app.js (e.g. setAT, doReg, doLogin). Those
// handlers are still defined in app.js and will continue to drive the inline
// modals. We are NOT extracting the wizard logic in this session — that's a
// later session. We only inject the modal *shells* into pages that lack them.
//
// In Session 1 the only page is index.html (modals already present), so this
// function is effectively a no-op today. It's wired up now so Session 2+ pages
// (lister.html, listing.html) can rely on it without further changes here.
function injectSharedModals(){
  // ── Report Listing modal ──
  // index.html already has this. Inject only if missing.
  if(!document.getElementById('reportM')){
    var rpt=document.createElement('div');
    rpt.id='reportM';
    rpt.className='mo';
    rpt.setAttribute('onclick',"ovcM(event,'reportM')");
    rpt.innerHTML=
      '<div class="mb" style="max-width:500px;">'+
        '<div class="mh">'+
          '<div>'+
            '<h2 style="font-family:\'Playfair Display\',serif;color:var(--red);"><svg class="icn" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-flag"/></svg> Report Discrimination</h2>'+
            '<p style="font-size:12px;color:var(--mu);margin-top:2px;">Every report is reviewed within 48 hours. We take this seriously.</p>'+
          '</div>'+
          '<button class="mc" onclick="closeM(\'reportM\')" aria-label="Close dialog"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
        '</div>'+
        '<div id="reportSuccess" style="display:none;" class="al alg"><strong>Report submitted</strong><br/>Thank you. We will investigate within 48 hours and act swiftly. Bad actors are removed permanently.</div>'+
        '<div id="reportErr" class="al ale" style="display:none;margin-bottom:12px;"></div>'+
        '<form id="reportForm" style="display:flex;flex-direction:column;gap:13px;">'+
          '<div id="reportListingInfo" class="al ali" style="font-size:13px;"></div>'+
          '<div class="fg"><label class="flbl">What happened? *</label>'+
            '<select class="fi" id="rptType" required>'+
              '<option value="">Select incident type</option>'+
              '<option value="Rejected based on background">Rejected based on my background</option>'+
              '<option value="Rude or discriminatory language">Rude or discriminatory language from owner/broker</option>'+
              '<option value="Refused to show property">Refused to show me the property</option>'+
              '<option value="Suddenly unavailable after inquiry">Property suddenly became unavailable after my inquiry</option>'+
              '<option value="Demanded community proof">Asked for proof of community/religion/caste</option>'+
              '<option value="Other discrimination">Other form of discrimination</option>'+
            '</select>'+
          '</div>'+
          '<div class="fg"><label class="flbl">Describe what happened *</label>'+
            '<textarea class="fi" id="rptDesc" placeholder="Please describe the incident in as much detail as you can — what was said, when it happened, and how you were affected." style="height:110px;" required></textarea>'+
          '</div>'+
          '<div class="fg2">'+
            '<div class="fg"><label class="flbl">Your Name *</label><input class="fi" type="text" id="rptName" placeholder="Full name"/></div>'+
            '<div class="fg"><label class="flbl">Your Contact *</label><input class="fi" type="text" id="rptContact" placeholder="Email or phone"/></div>'+
          '</div>'+
          '<div style="background:var(--cr);border-radius:8px;padding:10px 12px;font-size:11px;color:var(--mu);line-height:1.5;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg> Your identity is kept confidential. Reports are only shared with our trust &amp; safety team.</div>'+
          '<button type="button" class="btn btn-r btn-bl" onclick="submitReport()">Submit Report</button>'+
        '</form>'+
      '</div>';
    document.body.appendChild(rpt);
  }

  // ── Contact / Inquiry modal ──
  // Used by oCnt() to send an inquiry to a listing's owner. Injected on
  // pages that don't ship it inline (index.html does, listing.html doesn't).
  // Field IDs (cInfo, cNm, cPh, cEm, cMsg, cCnt) match what app.js's oCnt()
  // and doInq() read — DO NOT rename.
  if(!document.getElementById('cntM')){
    var cnt=document.createElement('div');
    cnt.id='cntM';
    cnt.className='mo';
    cnt.setAttribute('onclick',"ovcM(event,'cntM')");
    cnt.innerHTML=
      '<div class="mb">'+
        '<div class="mh"><h2>Send Inquiry</h2><button class="mc" onclick="closeM(\'cntM\')" aria-label="Close dialog"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button></div>'+
        '<div id="cInfo" class="al ali" style="margin-bottom:14px;"></div>'+
        '<div class="fg"><label class="flbl">Your Name *</label><input class="fi" type="text" id="cNm"/></div>'+
        '<div class="fg"><label class="flbl">Phone *</label><input class="fi" type="tel" id="cPh"/></div>'+
        '<div class="fg"><label class="flbl">Email</label><input class="fi" type="email" id="cEm"/></div>'+
        '<div class="fg"><label class="flbl">Message</label><textarea class="fi" id="cMsg" placeholder="Hi, I\'m interested in this property…"></textarea></div>'+
        '<button class="btn btn-bl" onclick="doInq()">Send Inquiry</button>'+
        '<p id="cCnt" style="text-align:center;font-size:12px;color:var(--mu);margin-top:10px;"></p>'+
      '</div>';
    document.body.appendChild(cnt);
  }

  // ── Edit Profile modal ──
  // Inlined in index.html and lister.html. Inject on pages that don't ship it
  // (dashboard, listing, browse) so the "Edit Profile" button on those pages
  // actually works. Field IDs (profName, profPhone, profErr, profOk, etc.)
  // must match what app.js's openEditProfile / doUpdateProfile / doChangePw
  // read — DO NOT rename.
  if(!document.getElementById('profileM')){
    var prof=document.createElement('div');
    prof.id='profileM';
    prof.className='mo';
    prof.setAttribute('onclick',"ovcM(event,'profileM')");
    prof.innerHTML=
      '<div class="mb" style="max-width:480px;">'+
        '<div class="mh">'+
          '<div>'+
            '<h2 style="font-family:\'Playfair Display\',serif;">Edit Profile</h2>'+
            '<p style="font-size:12px;color:var(--mu);margin-top:2px;">Update your account details</p>'+
          '</div>'+
          '<button class="mc" onclick="closeM(\'profileM\')" aria-label="Close dialog"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
        '</div>'+
        '<div id="profErr" class="al ale" style="display:none;margin-bottom:12px;"></div>'+
        '<div id="profOk" class="al ali" style="display:none;margin-bottom:12px;"></div>'+
        '<div class="fg"><label class="flbl">Full Name</label><input class="fi" type="text" id="profName" placeholder="Your name"/></div>'+
        '<div class="fg"><label class="flbl">Phone Number</label><input class="fi" type="tel" id="profPhone" placeholder="10-digit mobile number"/></div>'+
        '<div class="fg" id="profAgencyWrap" style="display:none;"><label class="flbl">Agency / Company</label><input class="fi" type="text" id="profAgency" placeholder="e.g. Khan Properties"/></div>'+
        '<div class="fg" id="profLicWrap" style="display:none;"><label class="flbl">RERA / License No.</label><input class="fi" type="text" id="profLic" placeholder="RERA/MH/2024/001"/></div>'+
        '<button class="btn btn-bl" id="profSaveBtn" onclick="doUpdateProfile()" style="margin-bottom:24px;">Save Changes</button>'+
        '<div style="border-top:1px solid var(--sa);padding-top:20px;margin-top:8px;">'+
          '<h3 style="font-family:\'Playfair Display\',serif;font-size:16px;margin-bottom:12px;">Change Password</h3>'+
          '<div class="fg"><label class="flbl">New Password</label>'+
            '<div style="position:relative;">'+
              '<input class="fi" type="password" id="profNewPw" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" autocomplete="new-password" style="padding-right:44px;"/>'+
              '<button type="button" onclick="togglePw(\'profNewPw\',this)" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--mu);padding:4px;display:flex;align-items:center;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg></button>'+
            '</div>'+
          '</div>'+
          '<div class="fg"><label class="flbl">Confirm New Password</label>'+
            '<div style="position:relative;">'+
              '<input class="fi" type="password" id="profConfPw" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" autocomplete="new-password" style="padding-right:44px;"/>'+
              '<button type="button" onclick="togglePw(\'profConfPw\',this)" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--mu);padding:4px;display:flex;align-items:center;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg></button>'+
            '</div>'+
          '</div>'+
          '<button class="btn btn-o" id="profPwBtn" onclick="doChangePw()">Update Password</button>'+
        '</div>'+
      '</div>';
    document.body.appendChild(prof);
  }

  // ── Toast root ──
  // Required by toast() — make sure every page has one.
  if(!document.getElementById('toast')){
    var t=document.createElement('div');
    t.id='toast';
    document.body.appendChild(t);
  }
}

// ============================================================================
// DELETE ACCOUNT — danger zone in Edit Profile modal
// ============================================================================
// Three pieces here:
//   • injectDangerZone(): adds the destructive UI to profileM if missing
//   • openDeleteAccountConfirm(): renders the type-to-confirm step
//   • doDeleteAccount(): actually performs deletion (storage cleanup → RPC)
//
// The danger zone is injected lazily when openEditProfile runs, since profileM
// itself may have been injected by injectSharedModals just moments earlier.

function injectDangerZone(){
  var modal=document.getElementById('profileM');
  if(!modal)return;
  var mb=modal.querySelector('.mb');
  if(!mb)return;
  if(modal.querySelector('#profDangerZone'))return; // already added

  var zone=document.createElement('div');
  zone.id='profDangerZone';
  zone.style.cssText='border-top:1px solid #f8d7da;margin-top:24px;padding-top:20px;';
  zone.innerHTML=
    '<h3 style="font-family:\'Playfair Display\',serif;font-size:16px;margin-bottom:8px;color:var(--red);">Delete Account</h3>'+
    '<p style="font-size:12px;color:var(--mu);line-height:1.5;margin-bottom:12px;">'+
      'This permanently removes your account, your tenant profile, your uploaded documents, and your favorites. '+
      'Listings you posted will be marked deleted. Inquiries you sent or received are kept verbatim — brokers '+
      'who already have your contact info retain it from their lead history. <strong>This cannot be undone.</strong>'+
    '</p>'+
    '<button class="btn btn-o" style="border-color:var(--red);color:var(--red);" onclick="openDeleteAccountConfirm()">Delete my account</button>';
  mb.appendChild(zone);
}

// Renders an inline confirmation block inside profileM (rather than a separate
// modal stacked on top, which gets visually messy). The block has a text
// input the user must fill with their email, plus Confirm/Cancel buttons.
function openDeleteAccountConfirm(){
  if(!cu){toast('Not signed in.','e');return;}
  var modal=document.getElementById('profileM');
  if(!modal)return;
  // If already showing, bail
  if(document.getElementById('delConfirmBlock'))return;

  var zone=modal.querySelector('#profDangerZone');
  if(!zone)return;
  var block=document.createElement('div');
  block.id='delConfirmBlock';
  block.style.cssText='background:#fff5f5;border:1px solid var(--red);border-radius:8px;padding:14px;margin-top:12px;';
  block.innerHTML=
    '<p style="font-size:13px;color:var(--ink);line-height:1.5;margin-bottom:10px;">'+
      'To confirm, type your email address <strong>'+_escCommon(cu.email||'')+'</strong> below.'+
    '</p>'+
    '<input class="fi" type="text" id="delConfirmEmail" autocomplete="off" placeholder="your.email@example.com" style="margin-bottom:10px;"/>'+
    '<div style="display:flex;gap:8px;">'+
      '<button class="btn" id="delConfirmBtn" style="background:var(--red);color:#fff;border:0;flex:1;" onclick="doDeleteAccount()">Permanently delete account</button>'+
      '<button class="btn btn-o" onclick="cancelDeleteAccount()">Cancel</button>'+
    '</div>'+
    '<p id="delConfirmErr" style="display:none;color:var(--red);font-size:12px;margin-top:8px;"></p>';
  zone.appendChild(block);
  // Auto-focus the email input
  setTimeout(function(){var i=document.getElementById('delConfirmEmail');if(i)i.focus();},50);
}

function cancelDeleteAccount(){
  var b=document.getElementById('delConfirmBlock');
  if(b)b.remove();
}

async function doDeleteAccount(){
  var emailEl=document.getElementById('delConfirmEmail');
  var errEl=document.getElementById('delConfirmErr');
  var btn=document.getElementById('delConfirmBtn');
  if(!emailEl)return;
  var typed=(emailEl.value||'').trim();
  if(!typed){
    if(errEl){errEl.textContent='Please type your email to confirm.';errEl.style.display='';}
    return;
  }
  if(typed.toLowerCase()!==(cu.email||'').toLowerCase()){
    if(errEl){errEl.textContent='Email does not match. Type exactly: '+(cu.email||'');errEl.style.display='';}
    return;
  }
  if(errEl)errEl.style.display='none';
  if(btn){btn.disabled=true;btn.textContent='Deleting…';}

  // Step 1: enumerate user's tenant-docs files and delete them.
  // This MUST happen before the auth row drops, because the storage RLS
  // policy (tenant manages own folder) only authorizes the user themselves.
  try{
    var {data:files}=await sb.storage.from('tenant-docs').list(cu.id+'',{limit:100});
    if(files&&files.length){
      var paths=files.map(function(f){return cu.id+'/'+f.name;});
      var {error:rmErr}=await sb.storage.from('tenant-docs').remove(paths);
      if(rmErr){
        // Storage cleanup failure is logged but doesn't block deletion —
        // an admin can clean up orphan files later if needed. We surface
        // it so the user knows.
        console.warn('Storage cleanup partial:',rmErr.message);
      }
    }
  }catch(e){
    // Bucket might not exist for this user (no docs uploaded). That's fine.
    console.warn('Storage list failed:',e&&e.message);
  }

  // Step 2: call the RPC. This soft-deletes listings, writes audit log,
  // deletes auth.users (which cascades to public.users, notifications,
  // tenant tables, etc.), nulls out user_id on inquiries and reports.
  try{
    var {error}=await sb.rpc('delete_my_account',{p_confirmation:typed});
    if(error){
      if(errEl){errEl.textContent='Deletion failed: '+error.message;errEl.style.display='';}
      if(btn){btn.disabled=false;btn.textContent='Permanently delete account';}
      return;
    }
  }catch(e){
    if(errEl){errEl.textContent='Deletion failed: '+(e&&e.message||'unknown');errEl.style.display='';}
    if(btn){btn.disabled=false;btn.textContent='Permanently delete account';}
    return;
  }

  // Step 3: sign out and redirect. Even if signOut fails, the auth row is
  // already gone server-side — so the next request will 401 and be redirected
  // to login anyway. We force a hard reload to clear any cached cu state.
  try{await sb.auth.signOut();}catch(e){}
  cu=null;
  // Hide the modal first to avoid a flash of "edit profile" content
  if(typeof closeM==='function')closeM('profileM');
  // Show a final goodbye toast then redirect
  if(typeof toast==='function')toast('Account deleted. Redirecting…');
  setTimeout(function(){
    window.location.href='/?deleted=1';
  },1200);
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',injectSharedModals);
} else {
  injectSharedModals();
}

// ── REPORT LISTING MODAL HANDLERS ───────────────────────────────────────────
// `openReport(listingId)` is called from listing cards and detail views. It
// stashes the listing ID and pre-fills the contextual info box, then opens
// the modal. This was missing in app.js before — clicking the report flag on
// a listing card threw "openReport is not defined". Defining it here so every
// page (current and future) has it.
let _reportingLid=null;

async function openReport(listingId){
  _reportingLid=listingId;
  // Reset form state
  var sErr=document.getElementById('reportErr');if(sErr)sErr.style.display='none';
  var sOk=document.getElementById('reportSuccess');if(sOk)sOk.style.display='none';
  var f=document.getElementById('reportForm');if(f)f.style.display='';
  var info=document.getElementById('reportListingInfo');
  // Try to fetch the listing's title/city to give context. Use a single-row
  // direct query rather than the cached gL() — listings cache lives in app.js.
  if(info){
    info.innerHTML='Loading listing details…';
    try {
      var {data:l}=await sb.from('listings').select('title,city,locality,building_name').eq('id',listingId).single();
      if(l){
        var loc=[l.locality,l.city].filter(Boolean).join(', ');
        info.innerHTML='<strong>Reporting:</strong> '+_escCommon(l.title||'Listing')+(loc?' &middot; '+_escCommon(loc):'');
      } else {
        info.innerHTML='<strong>Reporting listing #'+listingId+'</strong>';
      }
    } catch(e) {
      info.innerHTML='<strong>Reporting listing #'+listingId+'</strong>';
    }
  }
  // Pre-fill name + contact from current user if logged in
  if(cu){
    var rn=document.getElementById('rptName');if(rn&&!rn.value)rn.value=cu.name||'';
    var rc=document.getElementById('rptContact');if(rc&&!rc.value)rc.value=cu.email||cu.phone||'';
  }
  var m=document.getElementById('reportM');if(m)m.classList.add('open');
}

async function submitReport(){
  var sErr=document.getElementById('reportErr');
  var showErr=function(msg){if(sErr){sErr.style.display='';sErr.textContent=msg;}};
  if(sErr)sErr.style.display='none';
  var type=(document.getElementById('rptType').value||'').trim();
  var desc=(document.getElementById('rptDesc').value||'').trim();
  var name=(document.getElementById('rptName').value||'').trim();
  var contact=(document.getElementById('rptContact').value||'').trim();
  if(!type){showErr('Please select what happened.');return;}
  if(desc.length<15){showErr('Please describe the incident in at least a couple of sentences (min. 15 characters).');return;}
  if(!name){showErr('Please enter your name.');return;}
  if(!contact){showErr('Please enter an email or phone where we can reach you.');return;}
  var btn=document.querySelector('#reportForm button[onclick="submitReport()"]');
  if(btn){btn.disabled=true;btn.textContent='Submitting…';}
  var row={
    listing_id:_reportingLid?Number(_reportingLid):null,
    report_type:type,
    description:desc,
    reporter_name:name,
    reporter_contact:contact,
    reporter_user_id:cu?cu.id:null,
    status:'open'
  };
  // Try to add the listing title for the admin's quick reference
  if(_reportingLid){
    try {
      var {data:l}=await sb.from('listings').select('title').eq('id',_reportingLid).single();
      if(l)row.listing_title=l.title;
    } catch(e) {}
  }
  var {error}=await sb.from('reports').insert(row);
  if(btn){btn.disabled=false;btn.textContent='Submit Report';}
  if(error){
    showErr('Failed to submit report: '+(error.message||'Unknown error'));
    return;
  }
  // Success — show the success banner, hide the form, reset fields
  var sOk=document.getElementById('reportSuccess');if(sOk)sOk.style.display='';
  var f=document.getElementById('reportForm');if(f)f.style.display='none';
  // Auto-close after 2.5 seconds
  setTimeout(function(){
    var m=document.getElementById('reportM');if(m)m.classList.remove('open');
    // Reset form fields for next time
    ['rptType','rptDesc','rptName','rptContact'].forEach(function(id){
      var e=document.getElementById(id);if(e)e.value='';
    });
    if(sOk)sOk.style.display='none';
    if(f)f.style.display='';
  },2500);
}

// ============================================================================
// TENANT PROFILE CONSENT FLOW (Stage 3)
// ============================================================================
// Used by doInq() in app.js. Shows the user exactly what data their tenant
// profile will share with the broker before the inquiry is created.
//
// Returns a Promise that resolves to:
//   {action: 'confirmed', shareProfile: true,  snapshot: {...}}  — proceed, share
//   {action: 'confirmed', shareProfile: false}                    — proceed, don't share
//   {action: 'cancelled'}                                          — back out, don't submit
//   {action: 'no_profile'}                                         — no profile worth sharing
//
// The snapshot stored alongside the access row captures the redacted profile
// at the moment of consent — so we can prove, even years later, what the
// tenant actually agreed to share, even if the schema or our redaction logic
// changes.
// ============================================================================

async function _buildConsentSnapshot(){
  // Read tenant_profile + landlord_refs and build the same shape that
  // get_redacted_tenant_profile would return. We mirror the SQL function's
  // logic in JS so the consent screen shows EXACTLY what the broker will see.
  if(!cu)return null;
  var {data:prof}=await sb.from('tenant_profiles').select('*').eq('user_id',cu.id).maybeSingle();
  if(!prof||prof.verification_level==='none')return null;
  var {data:refs}=await sb.from('tenant_landlord_refs').select('verified,verification_outcome').eq('user_id',cu.id);
  var refsArr=refs||[];
  var verified=refsArr.filter(function(r){return r.verified;}).length;
  var byOutcome={positive:0,mixed:0,negative:0};
  refsArr.forEach(function(r){
    if(r.verification_outcome&&byOutcome.hasOwnProperty(r.verification_outcome))byOutcome[r.verification_outcome]++;
  });
  var dv=prof.doc_verifications||{};
  // Income band — same logic as the SQL function
  var inc=prof.monthly_income;
  var band=null;
  if(inc!=null){
    if(inc<25000)band='Under ₹25k/mo';
    else if(inc<50000)band='₹25k – 50k/mo';
    else if(inc<100000)band='₹50k – 1L/mo';
    else if(inc<200000)band='₹1L – 2L/mo';
    else if(inc<500000)band='₹2L – 5L/mo';
    else band='Above ₹5L/mo';
  }
  // PAN mask — XXXXX + last chars
  var maskedPan=null;
  if(prof.pan_number&&prof.pan_number.length>=5){
    maskedPan='XXXXX'+prof.pan_number.slice(5);
  }
  return {
    verification_level:prof.verification_level,
    pan_masked:maskedPan,
    pan_verified:dv.pan_doc==='verified',
    num_occupants:prof.num_occupants,
    occupants_relationship:prof.occupants_relationship,
    marital_status:prof.marital_status,
    has_pets:prof.has_pets,
    pet_details:prof.pet_details,
    smokes:prof.smokes,
    employer_name:prof.employer_name,
    role_title:prof.role_title,
    employment_type:prof.employment_type,
    monthly_income_band:band,
    joined_date:prof.joined_date,
    docs:{
      employment_letter_verified:dv.employment_letter==='verified',
      salary_slips_verified:dv.salary_slip_1==='verified'||dv.salary_slip_2==='verified'||dv.salary_slip_3==='verified',
      itr_verified:dv.itr_y1==='verified'||dv.itr_y2==='verified'
    },
    landlord_refs:{
      total:refsArr.length,
      verified:verified,
      positive:byOutcome.positive,
      mixed:byOutcome.mixed,
      negative:byOutcome.negative
    },
    self_intro:prof.self_intro,
    profile_updated_at:prof.updated_at,
    admin_verified_at:prof.verified_at
  };
}

function _consentTierBadge(level){
  var colors={none:'#999',bronze:'#cd7f32',silver:'#999',gold:'#daa520',platinum:'#9b59b6'};
  var labels={none:'Not Verified',bronze:'Bronze',silver:'Silver',gold:'Gold',platinum:'Platinum'};
  return '<span style="display:inline-flex;align-items:center;gap:6px;background:'+(colors[level]||'#999')+';color:#fff;padding:4px 10px;border-radius:14px;font-size:12px;font-weight:700;">'+
    '<svg class="icn icn-sm" aria-hidden="true"><use href="#i-check"/></svg>'+
    (labels[level]||'Not Verified')+
  '</span>';
}

function _consentRow(label,value){
  // Skip undefined/null/empty-string. Booleans are always shown (even false).
  if(value==null||value==='')return '';
  if(value===true)value='Yes';
  if(value===false)value='No';
  return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--sa);"><span style="color:var(--mu);font-size:13px;">'+_escCommon(String(label))+'</span><span style="font-weight:600;font-size:13px;">'+_escCommon(String(value))+'</span></div>';
}

async function showInquiryConsent(opts){
  // Build a fresh snapshot of what the broker would see.
  var snapshot=await _buildConsentSnapshot();
  if(!snapshot){
    // No profile or no Bronze tier yet — proceed without sharing
    return {action:'no_profile'};
  }
  return new Promise(function(resolve){
    // Remove any existing consent modal so we don't stack
    var existing=document.getElementById('inquiryConsentM');
    if(existing)existing.remove();

    var verifBadge=_consentTierBadge(snapshot.verification_level);
    var maritalLabels={single:'Single',married:'Married',divorced:'Divorced',widowed:'Widowed',prefer_not:'Prefer not to say'};
    var empTypeLabels={full_time:'Full-time',part_time:'Part-time',contract:'Contract',self_employed:'Self-employed',student:'Student',unemployed:'Unemployed'};

    // Build the redacted preview rows. Empty values are omitted by _consentRow.
    var basicRows=
      _consentRow('Occupants',snapshot.num_occupants)+
      _consentRow('Relationship',snapshot.occupants_relationship)+
      _consentRow('Marital status',maritalLabels[snapshot.marital_status]||snapshot.marital_status)+
      _consentRow('Has pets',snapshot.has_pets)+
      (snapshot.has_pets&&snapshot.pet_details?_consentRow('Pet details',snapshot.pet_details):'')+
      _consentRow('Smokes',snapshot.smokes);

    var empRows=
      _consentRow('Employer',snapshot.employer_name)+
      _consentRow('Role',snapshot.role_title)+
      _consentRow('Employment type',empTypeLabels[snapshot.employment_type]||snapshot.employment_type)+
      _consentRow('Monthly income',snapshot.monthly_income_band)+
      _consentRow('Joined on',snapshot.joined_date);

    var idRows=
      _consentRow('PAN (masked)',snapshot.pan_masked)+
      _consentRow('PAN verified',snapshot.pan_verified);

    var docRows=
      _consentRow('Employment letter verified',snapshot.docs.employment_letter_verified)+
      _consentRow('Salary slips verified',snapshot.docs.salary_slips_verified)+
      _consentRow('ITR verified',snapshot.docs.itr_verified);

    var refRows=snapshot.landlord_refs.total>0?
      _consentRow('References on file',snapshot.landlord_refs.total)+
      _consentRow('Verified references',snapshot.landlord_refs.verified)
      :'';

    var introRow=snapshot.self_intro?
      '<div style="margin-top:10px;font-size:13px;background:var(--cr);padding:10px;border-radius:8px;"><strong>Your intro:</strong><br/>'+_escCommon(snapshot.self_intro)+'</div>'
      :'';

    var modalHTML=
      '<div id="inquiryConsentM" class="mo open" onclick="if(event.target===event.currentTarget)window._consentResolve&&window._consentResolve({action:\'cancelled\'});">'+
        '<div class="mb" style="max-width:560px;max-height:90vh;overflow-y:auto;">'+
          '<div class="mh">'+
            '<div>'+
              '<h2 style="font-family:Playfair Display,serif;font-size:20px;">Share your tenant profile?</h2>'+
              '<p style="font-size:12px;color:var(--mu);margin-top:2px;">Sending an inquiry to '+_escCommon(opts.listingTitle||'this listing')+'</p>'+
            '</div>'+
            '<button class="mc" onclick="window._consentResolve&&window._consentResolve({action:\'cancelled\'})" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
          '</div>'+
          '<div style="background:var(--cr);padding:14px;border-radius:10px;margin-bottom:14px;">'+
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">'+
              '<strong style="font-size:13px;">Your verification:</strong>'+verifBadge+
            '</div>'+
            '<p style="font-size:12px;color:var(--mu);line-height:1.5;margin:0;">The broker will see the redacted preview below. They will <strong>NOT</strong> see your religion, dietary preference, alcohol preference, exact income, full PAN, document files, or landlord phone numbers. You can revoke this access anytime from your dashboard.</p>'+
          '</div>'+
          (basicRows?'<details open style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Basic Information</summary><div>'+basicRows+'</div></details>':'')+
          (empRows?'<details open style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Employment</summary><div>'+empRows+'</div></details>':'')+
          (idRows?'<details style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Identity</summary><div>'+idRows+'</div></details>':'')+
          (docRows?'<details style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Documents</summary><div>'+docRows+'</div></details>':'')+
          (refRows?'<details style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Landlord References</summary><div>'+refRows+'</div></details>':'')+
          introRow+
          '<div class="al ali" style="margin:14px 0;font-size:12px;line-height:1.5;">'+
            '<strong><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg> What broker will see:</strong> the fields above only. '+
            '<strong>Never shared:</strong> religion, dietary preference, alcohol preference, exact income, full PAN, document files, landlord phone numbers.'+
          '</div>'+
          '<div style="display:flex;flex-direction:column;gap:8px;">'+
            '<button class="btn btn-bl" onclick="window._consentResolve&&window._consentResolve({action:\'confirmed\',shareProfile:true,snapshot:window._consentSnapshot})">Send inquiry &amp; share profile</button>'+
            '<button class="btn-link" style="background:none;border:none;color:var(--mu);font-size:13px;text-decoration:underline;cursor:pointer;font-family:DM Sans,sans-serif;padding:8px;" onclick="window._consentResolve&&window._consentResolve({action:\'cancelled\'})">Cancel — don\'t send the inquiry</button>'+
          '</div>'+
        '</div>'+
      '</div>';

    document.body.insertAdjacentHTML('beforeend',modalHTML);
    // Stash the snapshot so the buttons can attach it to the resolution.
    window._consentSnapshot=snapshot;
    // Wrap resolve to clean up on any path
    window._consentResolve=function(result){
      var m=document.getElementById('inquiryConsentM');
      if(m)m.remove();
      delete window._consentResolve;
      delete window._consentSnapshot;
      resolve(result);
    };
  });
}
