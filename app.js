// IMG — removed (data now in Supabase)
const CIMG=["data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTdhNmUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZDMwMzAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4+Z77iPPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNjMDlhNGEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MDMwMTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn5WMPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyZTdkNGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTMwMjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4y/PC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkOTUzNGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2YTEwMTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4+vPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyNTYzZWIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTFhNjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4yKPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2YjRmYTAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyYTEwNTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4yEPC90ZXh0Pjwvc3ZnPg=="];
// ══ CONSTANTS ══
// Admin credentials: now managed via Supabase Auth (no client-side hardcoding).
const ATAGS=['Pet Friendly','Near Masjid','Veg/Non-veg OK','Near Metro','Gated Community','Near School','Near Hospital','Quiet Locality','Corner Unit'];
const AMENS=['Lift','Parking','Security','Power Backup','Swimming Pool','Gym','Club House','Play Area','Garden','Gas Pipeline','Intercom','CCTV'];
const PTYR=['Apartment','Flat','House','Villa','PG / Room'];
const PTYB=['Apartment','Flat','House','Villa','Plot'];
const BEDS=['1','2','3','4','5+'];
const FURN=['Unfurnished','Semi-Furnished','Fully Furnished'];
const POSS=['Ready to Move','Under Construction','Within 6 Months','Within 1 Year'];
const STYP=['New','Resale'];
const FACE=['North','South','East','West','North-East','North-West'];
const FLOR=['Ground','1st-2nd','3rd-5th','5th-10th','10th+'];

const CITIES=[
  {name:'Mumbai',img:'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80&auto=format&fit=crop',count:'4,200+'},
  {name:'Hyderabad',img:'https://images.unsplash.com/photo-1569511166187-f63a0a7ed7cf?w=600&q=80&auto=format&fit=crop',count:'3,100+'},
  {name:'Bengaluru',img:'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=600&q=80&auto=format&fit=crop',count:'2,800+'},
  {name:'Delhi',img:'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&auto=format&fit=crop',count:'1,900+'},
  {name:'Chennai',img:'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80&auto=format&fit=crop',count:'1,200+'},
  {name:'Pune',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',count:'980+'}
];

// SEED — removed (data now in Supabase)

// SEED_USERS — removed (data now in Supabase)

// SEED_EXTRA — removed (data now in Supabase)

// SEED_INQ — removed (data now in Supabase)

// SEED_RPT — removed (data now in Supabase)

const SEED_FAV=[
  {uid:2001,lid:13},
  {uid:2002,lid:15},
  {uid:2003,lid:17},
  {uid:2004,lid:20},
  {uid:2005,lid:22},
  {uid:2006,lid:24},
  {uid:2007,lid:27},
  {uid:2008,lid:29},
  {uid:2009,lid:31},
  {uid:2010,lid:34},
  {uid:2011,lid:36},
  {uid:2012,lid:38},
  {uid:2013,lid:41},
  {uid:2014,lid:43},
  {uid:2015,lid:45},
  {uid:2016,lid:48},
  {uid:2017,lid:50},
  {uid:2018,lid:52},
  {uid:2019,lid:55},
  {uid:2020,lid:57},
  {uid:2021,lid:59},
  {uid:2022,lid:62},
  {uid:2023,lid:64},
  {uid:2024,lid:66},
  {uid:2025,lid:69},
  {uid:2026,lid:12},
  {uid:2027,lid:14},
  {uid:2028,lid:16},
  {uid:2029,lid:19},
  {uid:2030,lid:21}
];

// ══ SUPABASE ══
const SUPABASE_URL='https://nzpuhmktxtexbicrszlr.supabase.co';
const SUPABASE_ANON='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVobWt0eHRleGJpY3JzemxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzgwMDUsImV4cCI6MjA5MTkxNDAwNX0.ij9vgnFl4DEBsr85b500YIBcEQ0JZQD4zd6ZZ2g-eEA';
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON);

// ══ TURNSTILE CAPTCHA ══
// Replace with your real sitekey from Cloudflare Dashboard → Turnstile → Add Widget
// Testing key (always passes): 1x00000000000000000000AA
// Get your real key: https://dash.cloudflare.com → Turnstile → Add Widget → set domain to ekmakan.com
const TURNSTILE_SITEKEY='0x4AAAAAAC_UAwS9hBj82k6c';
var _turnstileWidgetId=null;
var _turnstileToken=null;
var _turnstileLoginWidgetId=null;
var _turnstileLoginToken=null;
var _turnstileResetToken=null;

// Render Turnstile widget in a given container.
// containerId: 'turnstileWrap' for registration, 'turnstileLoginWrap' for login
function renderTurnstile(containerId,tokenSetter){
  var wrap=document.getElementById(containerId);
  if(!wrap)return;
  // Only render if Turnstile script has loaded
  if(!window.turnstile){
    setTimeout(function(){renderTurnstile(containerId,tokenSetter);},500);
    return;
  }
  // Remove existing widget before creating new one
  try{
    var existingId=(containerId==='turnstileWrap')?_turnstileWidgetId:(containerId==='turnstileLoginWrap')?_turnstileLoginWidgetId:null;
    if(existingId!==null){
      try{turnstile.remove(existingId);}catch(e){}
    }
  }catch(e){}
  // Clear container and reset widget ID
  wrap.innerHTML='';
  if(containerId==='turnstileWrap'){_turnstileWidgetId=null;_turnstileToken=null;}
  else if(containerId==='turnstileLoginWrap'){_turnstileLoginWidgetId=null;_turnstileLoginToken=null;}
  else{_turnstileResetToken=null;}
  // Render after a small delay to ensure DOM is ready (modal transition)
  setTimeout(function(){
    try{
      var widgetId=turnstile.render(wrap,{
        sitekey:TURNSTILE_SITEKEY,
        theme:'light',
        size:'flexible',
        callback:function(token){tokenSetter(token);},
        'expired-callback':function(){tokenSetter(null);},
        'error-callback':function(){tokenSetter(null);}
      });
      if(containerId==='turnstileWrap')_turnstileWidgetId=widgetId;
      else if(containerId==='turnstileLoginWrap')_turnstileLoginWidgetId=widgetId;
    }catch(e){
      // Retry once after 1 second if render fails
      setTimeout(function(){
        try{
          wrap.innerHTML='';
          var widgetId=turnstile.render(wrap,{
            sitekey:TURNSTILE_SITEKEY,
            theme:'light',
            size:'flexible',
            callback:function(token){tokenSetter(token);},
            'expired-callback':function(){tokenSetter(null);},
            'error-callback':function(){tokenSetter(null);}
          });
          if(containerId==='turnstileWrap')_turnstileWidgetId=widgetId;
          else if(containerId==='turnstileLoginWrap')_turnstileLoginWidgetId=widgetId;
        }catch(e2){}
      },1000);
    }
  },150);
}

// Map Supabase row → JS listing shape (keeps all existing pCard/viewL/etc. working)
function mapL(r){return{id:r.id,lf:r.listing_for,title:r.title,city:r.city,loc:r.locality||'',type:r.property_type||'Apartment',beds:String(r.beds||2),baths:r.baths||1,area:r.area_sqft||0,rent:r.rent||0,dep:r.deposit||0,price:r.price||0,stype:r.sale_type||'',poss:r.possession||'',rera:r.rera_no||'',contact:r.contact_phone||'',owner:r.owner_name||'',agency:r.agency_name||'',tags:r.tags||[],amens:r.amenities||[],verified:r.verified||false,status:r.status||'pending',images:r.images||[],desc:r.description||'',postedAt:r.posted_at?(r.posted_at+'').split('T')[0]:'',uid:r.user_id,urole:r.user_role||'owner',furnish:r.furnishing||'',floor:r.floor_range||'',facing:r.facing||'',avail:r.availability||''};}
// Map JS listing → Supabase row
function unmapL(l){return{listing_for:l.lf,title:l.title,city:l.city,locality:l.loc||'',property_type:l.type||'Apartment',beds:Number(l.beds)||2,baths:Number(l.baths)||1,area_sqft:Number(l.area)||0,rent:Number(l.rent)||0,deposit:Number(l.dep)||0,price:Number(l.price)||0,sale_type:l.stype||'',possession:l.poss||'',rera_no:l.rera||'',contact_phone:l.contact,owner_name:l.owner,agency_name:l.agency||'',description:l.desc||'',tags:l.tags||[],amenities:l.amens||[],images:l.images||[],verified:l.verified||false,status:l.status||'pending',user_id:l.uid||(cu?cu.id:null),user_role:l.urole||(cu?cu.role:'owner'),furnishing:l.furnish||'',floor_range:l.floor||'',facing:l.facing||'',availability:l.avail||''};}
function mapInq(r){return{id:r.id,listingId:r.listing_id,listingTitle:r.listing_title||'',listingCity:r.listing_city||'',lf:r.listing_for||'rent',contact:'',name:r.inquirer_name||'',phone:r.inquirer_phone||'',email:r.inquirer_email||'',message:r.message||'',uid:r.user_id,sentAt:r.sent_at?(r.sent_at+'').split('T')[0]:''};}
function mapUsr(r){return{id:r.id,name:r.name,email:r.email,phone:r.phone||'',role:r.role||'user',agency:r.agency||'',lic:r.license_no||'',joinedAt:r.joined_at?(r.joined_at+'').split('T')[0]:'',verified:r.verified||false};}
function mapRpt(r){return{id:r.id,listingId:r.listing_id,listingTitle:r.listing_title||'',type:r.report_type||'',desc:r.description||'',reporterName:r.reporter_name||'',reporterContact:r.reporter_contact||'',reporterUid:r.reporter_user_id,status:r.status||'open',submittedAt:r.submitted_at?(r.submitted_at+'').split('T')[0]:''};}

// In-memory caches (invalidated on writes). Avoids re-fetching on every render.
var _cacheL=null,_cacheI=null,_cacheU=null,_cacheR=null;
var _cacheTime={l:0,i:0,u:0,r:0};
var CACHE_TTL=30000; // 30 seconds — balance between freshness and performance
function _cacheValid(w){return _cacheTime[w]&&(Date.now()-_cacheTime[w])<CACHE_TTL;}
function _clr(w){if(!w||w==='l'){_cacheL=null;_cacheTime.l=0;}if(!w||w==='i'){_cacheI=null;_cacheTime.i=0;}if(!w||w==='u'){_cacheU=null;_cacheTime.u=0;}if(!w||w==='r'){_cacheR=null;_cacheTime.r=0;}}

// ══ STATE ══
let cu=null, bMode='rent', hMode='rent', lMode='rent', actL=null;
let upImgs=[], selTags=[], selAmens=[], favs=[];
let curAT='ov';
let fRT=[],fRB=[],fRF=[],fRA=[];
let fBT=[],fBB=[],fBF=[],fBA=[],fBPo=[],fBST=[],fBFc=[],fBFl=[];
let fVer=false, fRer=false;
let _cIdx={};
// Pagination
const PAGE_SIZE=30;
let _browseShown=0;       // How many listings currently rendered in browse grid
let _browseFiltered=[];   // Full filtered+sorted array for current browse view
let _adminPage={al:0,pd:0,ls:0,tn:0,ld:0}; // Per-tab page counters for admin
let _editingListingId=null; // When set, doSub updates instead of creates

// ══ UTILITIES ══
// HTML-escape any user-controlled string before it goes into innerHTML.
// Prevents XSS when listing titles, descriptions, inquiry messages, usernames, etc.
// contain HTML or script markup. Returns empty string for null/undefined.
function esc(s){
  if(s==null)return '';
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}
// Safer attribute-context escape (for values inside quoted attributes)
function escAttr(s){
  if(s==null)return '';
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

// ══ EMAIL VALIDATION ══
// Multi-tier email validation:
//   Tier 1: RFC-5322-lite regex (catches structural issues the old \S+@\S+\.\S+ missed)
//   Tier 2: Disposable domain blocklist
//   Tier 3: Typo-detection for popular domains, suggests correction
//   Tier 4: Async MX record lookup via Cloudflare DoH (Google DoH fallback).
//           Non-blocking — network failures never prevent registration.

// Tier 1: Stricter email format check
var _EMAIL_RE=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
function isEmailFormatValid(em){
  if(!em||em.length>254)return false;
  if(!_EMAIL_RE.test(em))return false;
  var parts=em.split('@');
  if(parts.length!==2)return false;
  var local=parts[0], domain=parts[1];
  if(local.length>64)return false;
  if(local.startsWith('.')||local.endsWith('.')||local.indexOf('..')>=0)return false;
  if(domain.indexOf('..')>=0)return false;
  return true;
}

// Tier 2: Common disposable / throwaway email providers
var _DISPOSABLE_DOMAINS={
  'mailinator.com':1,'tempmail.com':1,'10minutemail.com':1,'guerrillamail.com':1,
  'throwawaymail.com':1,'yopmail.com':1,'temp-mail.org':1,'fakeinbox.com':1,
  'sharklasers.com':1,'grr.la':1,'guerrillamail.net':1,'guerrillamail.org':1,
  'spam4.me':1,'maildrop.cc':1,'mohmal.com':1,'mytemp.email':1,
  'emailondeck.com':1,'tempmailaddress.com':1,'dispostable.com':1,
  'getnada.com':1,'tempail.com':1,'mailnesia.com':1,'trashmail.com':1,
  'mailcatch.com':1,'spambog.com':1,'discard.email':1,'mail-temp.com':1,
  'mintemail.com':1,'tempinbox.com':1,'tempmail.net':1,'tempmailo.com':1,
  'tempmail.plus':1,'10minemail.com':1,'fakemail.net':1,'harakirimail.com':1,
  'mailforspam.com':1,'nowmymail.com':1,'spamgourmet.com':1,'trbvm.com':1
};
function isDisposableEmail(em){
  var domain=(em.split('@')[1]||'').toLowerCase();
  return !!_DISPOSABLE_DOMAINS[domain];
}

// Tier 3: Typo correction for popular domains in India
var _POPULAR_DOMAINS=['gmail.com','yahoo.com','yahoo.co.in','outlook.com','hotmail.com',
                      'rediffmail.com','icloud.com','live.com','protonmail.com','zoho.com',
                      'rediff.com','in.com'];
// Levenshtein distance (small, bounded implementation)
function _lev(a,b){
  if(a===b)return 0;
  if(!a.length)return b.length;
  if(!b.length)return a.length;
  if(Math.abs(a.length-b.length)>2)return 3; // Short-circuit large diffs
  var prev=[],curr=[];
  for(var j=0;j<=b.length;j++)prev[j]=j;
  for(var i=1;i<=a.length;i++){
    curr[0]=i;
    for(var j=1;j<=b.length;j++){
      var cost=a.charAt(i-1)===b.charAt(j-1)?0:1;
      curr[j]=Math.min(curr[j-1]+1, prev[j]+1, prev[j-1]+cost);
    }
    prev=curr.slice();
  }
  return curr[b.length];
}
function suggestEmailDomain(em){
  var domain=(em.split('@')[1]||'').toLowerCase();
  if(!domain||_POPULAR_DOMAINS.indexOf(domain)>=0)return null;
  for(var i=0;i<_POPULAR_DOMAINS.length;i++){
    var d=_POPULAR_DOMAINS[i];
    // Only suggest if 1-2 edits away, and not too short a domain
    if(domain.length>=5&&_lev(domain,d)<=2){
      return em.split('@')[0]+'@'+d;
    }
  }
  return null;
}

// Tier 4: MX lookup via DNS-over-HTTPS (Cloudflare, with Google fallback).
// Returns a Promise<boolean|null>: true=MX exists, false=no MX, null=lookup failed/offline.
// Has a 4-second timeout so registration never hangs.
function checkMXRecord(em){
  var domain=(em.split('@')[1]||'').toLowerCase();
  if(!domain)return Promise.resolve(null);
  var endpoints=[
    'https://cloudflare-dns.com/dns-query?name='+encodeURIComponent(domain)+'&type=MX',
    'https://dns.google/resolve?name='+encodeURIComponent(domain)+'&type=MX'
  ];
  function tryEndpoint(url){
    // AbortController timeout for 4s
    var ctl=(typeof AbortController!=='undefined')?new AbortController():null;
    var to=setTimeout(function(){if(ctl)ctl.abort();},4000);
    var opts={headers:{'Accept':'application/dns-json'}};
    if(ctl)opts.signal=ctl.signal;
    return fetch(url,opts).then(function(r){
      clearTimeout(to);
      if(!r.ok)throw new Error('dns-http-'+r.status);
      return r.json();
    }).then(function(data){
      // Status 0 = NOERROR, Answer array present with type 15 (MX) = valid
      if(data.Status===0&&Array.isArray(data.Answer)){
        // Confirm at least one MX record exists
        var mx=data.Answer.filter(function(a){return a.type===15;});
        return mx.length>0;
      }
      // Status 3 = NXDOMAIN (domain doesn't exist)
      if(data.Status===3)return false;
      // Some DNS may return answers for A but not MX — fall back to checking if domain resolves at all
      return null;
    });
  }
  return tryEndpoint(endpoints[0]).catch(function(){
    return tryEndpoint(endpoints[1]);
  }).catch(function(){
    return null; // All endpoints failed — treat as "unknown" to avoid blocking legitimate users
  });
}

// ══ STORAGE ══

// SEED_INQ_EXTRA — removed (data now in Supabase)

// SEED_RPT_EXTRA — removed (data now in Supabase)

// ══ LOADING / ERROR HELPERS ══
function showLoading(elId,msg){
  var el=document.getElementById(elId);
  if(!el)return;
  el.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">'+(msg||'Loading…')+'</span></div>';
}
function showError(elId,retryFn){
  var el=document.getElementById(elId);
  if(!el)return;
  el.innerHTML='<div class="mk-error"><div class="mk-error-icon">&#9888;&#65039;</div>'
    +'<div class="mk-error-msg">Something went wrong while loading. Please check your connection and try again.</div>'
    +(retryFn?'<button class="mk-error-retry" onclick="'+retryFn+'">Retry</button>':'')
    +'</div>';
}
function showEmpty(elId,icon,title,sub){
  var el=document.getElementById(elId);
  if(!el)return;
  el.innerHTML='<div class="mk-empty"><div class="mk-empty-icon">'+(icon||'&#128194;')+'</div>'
    +'<div class="mk-empty-title">'+(title||'Nothing here yet')+'</div>'
    +'<div class="mk-empty-sub">'+(sub||'')+'</div></div>';
}

// ══ DATA ACCESS (Supabase) ══
async function gL(){
  if(_cacheL&&_cacheValid('l'))return _cacheL;
  var {data,error}=await sb.from('listings').select('id,listing_for,title,city,locality,property_type,beds,baths,area_sqft,rent,deposit,price,sale_type,possession,rera_no,contact_phone,owner_name,agency_name,tags,amenities,verified,status,images,description,posted_at,user_id,user_role,furnishing,floor_range,facing,availability').order('posted_at',{ascending:false});
  if(error){toast('Failed to load listings. Please refresh.','e');_cacheL=[];return[];}
  _cacheL=(data||[]).map(mapL);
  _cacheTime.l=Date.now();
  return _cacheL;
}
async function gInq(){
  if(_cacheI&&_cacheValid('i'))return _cacheI;
  var {data,error}=await sb.from('inquiries').select('id,listing_id,listing_title,listing_city,listing_for,inquirer_name,inquirer_phone,inquirer_email,message,user_id,sent_at').order('sent_at',{ascending:false});
  if(error){toast('Failed to load inquiries. Please refresh.','e');_cacheI=[];return[];}
  _cacheI=(data||[]).map(mapInq);
  _cacheTime.i=Date.now();
  return _cacheI;
}
async function createInquiry(obj){
  _clr('i');
  var row={listing_id:obj.listingId,listing_title:obj.listingTitle||'',listing_city:obj.listingCity||'',listing_for:obj.lf||'rent',inquirer_name:obj.name,inquirer_phone:obj.phone,inquirer_email:obj.email||'',message:obj.message||'',user_id:obj.uid||(cu?cu.id:null)};
  var {error}=await sb.from('inquiries').insert(row);
  if(error){toast('Failed to send inquiry: '+error.message,'e');return false;}
  return true;
}
// Legacy compatibility — some callers still use sInq pattern
async function sInq(d){/* no-op: individual writes now use createInquiry */}

// Favorites — loaded from Supabase after login
async function loadFavs(){
  if(!cu){favs=[];return;}
  var {data}=await sb.from('favorites').select('listing_id').eq('user_id',cu.id);
  favs=(data||[]).map(function(r){return r.listing_id;});
}

try{favs=[];}catch(e){favs=[];}


// ══ NAV ══
async function go(pg){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  var el=document.getElementById('pg-'+pg);
  if(el)el.classList.add('active');
  // Hide quick-action strip on browse (filter bar replaces it) and admin
  var qs=document.getElementById('qaStrip');
  if(qs)qs.style.display=pg==='home'?'block':'none';
  // Update URL hash (skip for home — keep URL clean)
  if(pg!=='home'&&window.history.replaceState)window.history.replaceState(null,null,'#'+pg);
  else if(pg==='home'&&window.location.hash&&window.history.replaceState)window.history.replaceState(null,null,window.location.pathname);
  window.scrollTo(0,0);
  // Force fresh data on admin/dashboard/lister — workflow-critical pages
  if(pg==='admin'||pg==='dashboard'||pg==='lister')_clr();
  if(pg==='home') await renderHome();
  else if(pg==='browse'){bldF();await renderBrowse();}
  else if(pg==='dashboard') await renderDash();
  else if(pg==='lister') await renderLister();
  else if(pg==='admin'){curAT='ov';document.querySelectorAll('.atab').forEach(function(b,i){b.classList.toggle('on',i===0);});await renderAdmin('ov');}
}
function upNav(){
  var show=function(id){var e=document.getElementById(id);if(e)e.style.display='';};
  var hide=function(id){var e=document.getElementById(id);if(e)e.style.display='none';};
  var set=function(id,h){var e=document.getElementById(id);if(e)e.innerHTML=h;};
  if(cu){
    hide('nLg');hide('nRg');show('nLo');show('nG');show('nB');show('nNotifWrap');
    set('nG','Hi, '+esc(cu.name));
    set('nB',cu.role==='broker'?'<span class="brk-b">&#127970; Broker</span>':cu.role==='owner'?'<span class="own-b">&#127969; Owner</span>':cu.role==='admin'?'<span style="background:rgba(240,208,112,.2);color:#f0d070;font-size:11px;font-weight:700;padding:2px 9px;border-radius:50px;">Admin</span>':'');
    hide('nD');hide('nL');hide('nA');
    if(cu.role==='user'){show('nD');hide('nPost');}
    else if(cu.role==='broker'||cu.role==='owner'){show('nL');show('nPost');}
    else if(cu.role==='admin'){show('nA');hide('nPost');}
  } else {
    show('nLg');show('nRg');hide('nLo');hide('nG');hide('nB');hide('nNotifWrap');
    hide('nD');hide('nL');hide('nA');show('nPost');
  }
}

// ══ AUTH ══
function togglePw(id,btn){
  var inp=document.getElementById(id);if(!inp)return;
  inp.type=inp.type==='password'?'text':'password';
  btn.innerHTML=inp.type==='password'?'&#128065;':'&#128064;';
}

function checkPwStr(inp){
  var pw=inp.value;
  var el=document.getElementById('pwStr');
  if(!el)return;
  if(!pw){el.style.display='none';return;}
  el.style.display='block';
  var score=0;
  if(pw.length>=8)score++;
  if(/[A-Z]/.test(pw))score++;
  if(/[0-9]/.test(pw))score++;
  if(/[^A-Za-z0-9]/.test(pw))score++;
  var cols=['#e05c1a','#e05c1a','var(--g)','var(--gr)'];
  var lbls=['Weak','Fair','Good','Strong'];
  [1,2,3,4].forEach(function(i){
    var b=document.getElementById('ps'+i);
    if(b)b.style.background=i<=score?cols[score-1]:'var(--sa)';
  });
  var lbl=document.getElementById('psLbl');
  if(lbl){lbl.textContent=lbls[score-1]||'';lbl.style.color=cols[score-1]||'var(--mu)';}
}

function setAT(t){
  var lf=document.getElementById('lFrm'),rf=document.getElementById('rFrm'),prf=document.getElementById('pwResetFrm');
  var al=document.getElementById('atL'),ar=document.getElementById('atR');
  var ae=document.getElementById('aErr');
  if(lf)lf.style.display=t==='login'?'':'none';
  if(rf){rf.style.display=t==='reg'?'':'none';if(t==='reg'&&!rf.dataset.role)rf.dataset.role='user';}
  if(prf)prf.style.display=t==='reset'?'':'none';
  if(al)al.classList.toggle('on',t==='login');
  if(ar)ar.classList.toggle('on',t==='reg');
  if(ae)ae.style.display='none';
  // Render Turnstile when login or registration tab is shown
  if(t==='login')renderTurnstile('turnstileLoginWrap',function(tk){_turnstileLoginToken=tk;});
  if(t==='reg')renderTurnstile('turnstileWrap',function(tk){_turnstileToken=tk;});
  if(t==='reset')renderTurnstile('turnstileResetWrap',function(tk){_turnstileResetToken=tk;});
}

function setRR(r){
  ['rrU','rrO','rrB'].forEach(function(id){var e=document.getElementById(id);if(e)e.classList.remove('on');});
  var bt=document.getElementById('rr'+r[0].toUpperCase());if(bt)bt.classList.add('on');
  var rf=document.getElementById('rFrm');if(rf)rf.dataset.role=r;
  var ag=document.getElementById('rAg'),lc=document.getElementById('rLc');
  if(ag)ag.style.display=r==='broker'?'':'none';
  if(lc)lc.style.display=r==='broker'?'':'none';
  var nt=document.getElementById('rNote');
  if(nt){
    if(r==='broker'){nt.className='al alp';nt.textContent='Broker portal: photo uploads, lead tracking and CSV exports.';}
    else if(r==='owner'){nt.className='al alw';nt.textContent='List directly — no broker needed. Simple owner dashboard included.';}
    else{nt.className='al ali';nt.textContent='Browse, save and contact listings for renting or buying. Free forever.';}
  }
}

async function doLogin(){
  var ae=document.getElementById('aErr');if(ae)ae.style.display='none';
  var em=document.getElementById('lEm').value.trim();
  var pw=document.getElementById('lPw').value;
  if(!em||!pw){if(ae){ae.style.display='';ae.textContent='Please enter your email and password.';}return;}
  // Turnstile token check (required when Supabase CAPTCHA is enabled)
  if(!_turnstileLoginToken){
    if(ae){ae.style.display='';ae.textContent='Please complete the verification challenge.';}
    return;
  }
  try{
    var {data,error}=await sb.auth.signInWithPassword({email:em,password:pw,options:{captchaToken:_turnstileLoginToken}});
    if(error)throw error;
    var {data:profile,error:pErr}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified').eq('id',data.user.id).single();
    if(pErr)throw pErr;
    resetSessionState();
    cu={id:profile.id,name:profile.name,email:profile.email,phone:profile.phone||'',role:profile.role,agency:profile.agency||'',lic:profile.license_no||'',joinedAt:profile.joined_at?(profile.joined_at+'').split('T')[0]:'',verified:profile.verified||false};
    await loadFavs();
    await loadNotifs();
    closeM('authM');upNav();
    if(cu.role==='admin'){go('admin');toast('Welcome, Admin &#9881;');}
    else if(cu.role==='user'){go('dashboard');toast('Welcome back, '+esc(cu.name)+'! &#128075;');}
    else{go('lister');toast('Welcome back, '+esc(cu.name)+'! &#128075;');}
  }catch(err){
    var msg=err.message||'Sign-in failed.';
    if(msg.toLowerCase().includes('invalid login'))msg='Incorrect email or password. Please try again.';
    if(msg.toLowerCase().includes('captcha'))msg='Verification failed. Please try again.';
    if(ae){ae.style.display='';ae.textContent=msg;}
    // Reset Turnstile after failed attempt (tokens are single-use)
    renderTurnstile('turnstileLoginWrap',function(tk){_turnstileLoginToken=tk;});
  }
}

function doReg(){
  var nm=document.getElementById('rNm').value.trim();
  var em=document.getElementById('rEm').value.trim().toLowerCase();
  var ph=document.getElementById('rPh').value.trim();
  var pw=document.getElementById('rPw').value;
  var rf=document.getElementById('rFrm');
  var role=rf?rf.dataset.role||'user':'user';
  var ag=document.getElementById('rAn').value.trim();
  var lc=document.getElementById('rLn').value.trim();
  var ae=document.getElementById('aErr');
  if(ae)ae.style.display='none';
  if(!nm||!em||!ph||!pw){if(ae){ae.style.display='';ae.textContent='Please fill in all required fields.';}return;}
  // Turnstile CAPTCHA check
  if(!_turnstileToken){
    if(ae){ae.style.display='';ae.textContent='Please complete the verification challenge above.';}
    return;
  }
  // Tier 1: Stricter email format check
  if(!isEmailFormatValid(em)){if(ae){ae.style.display='';ae.textContent='Please enter a valid email address.';}return;}
  // Tier 2: Disposable / throwaway email rejection
  if(isDisposableEmail(em)){if(ae){ae.style.display='';ae.textContent='Disposable or temporary email addresses are not accepted. Please use a permanent email.';}return;}
  // Tier 3: Typo suggestion — show soft warning with "Use this" option
  var suggested=suggestEmailDomain(em);
  if(suggested&&suggested!==em){
    // Only show the suggestion once; if user has already confirmed, skip
    var suggEl=document.getElementById('rEmSugg');
    if(!suggEl||suggEl.dataset.confirmed!=='1'){
      if(ae){
        ae.style.display='';
        ae.innerHTML='Did you mean <strong style="cursor:pointer;text-decoration:underline;" onclick="_applyEmailSugg(\''+escAttr(suggested)+'\')">'+esc(suggested)+'</strong>? '
          +'<a href="#" onclick="event.preventDefault();_confirmEmailAs()" style="color:var(--t);font-size:12px;margin-left:8px;">Use anyway</a>';
      }
      return;
    }
  }
  if(ph.replace(/\D/g,'').length<10){if(ae){ae.style.display='';ae.textContent='Please enter a valid 10-digit mobile number.';}return;}
  if(pw.length<8){if(ae){ae.style.display='';ae.textContent='Password must be at least 8 characters.';}return;}
  // Supabase Auth sign-up (duplicate check is handled server-side)
  var btn=document.querySelector('#rFrm button.btn-bl')||null;
  var origBtnText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Creating account…';}
  var doSignup=async function(){
    try{
      var {data:authData,error:authErr}=await sb.auth.signUp({email:em,password:pw,options:{data:{name:nm,phone:ph,role:role,agency:ag,license_no:lc},captchaToken:_turnstileToken}});
      if(authErr)throw authErr;
      if(!authData.user)throw new Error('Sign-up failed.');
      // If email confirmation is enabled, there's no active session yet.
      // The database trigger will create the profile row using metadata.
      // Show the user a "check your inbox" message.
      if(!authData.session){
        if(btn){btn.disabled=false;btn.textContent=origBtnText;}
        closeM('authM');
        toast('Account created! Please check your email to verify your address, then sign in. &#128231;');
        return;
      }
      // Session exists — email confirmation is off or auto-confirmed.
      // Upsert profile (safe even if trigger already created it).
      var {error:profErr}=await sb.from('users').upsert({id:authData.user.id,name:nm,email:em,phone:ph,role:role,agency:ag,license_no:lc,verified:false},{onConflict:'id'});
      if(profErr)throw profErr;
      resetSessionState();
      cu={id:authData.user.id,name:nm,email:em,phone:ph,role:role,agency:ag,lic:lc,joinedAt:new Date().toISOString().split('T')[0],verified:false};
      _clr('u');
      if(btn){btn.disabled=false;btn.textContent=origBtnText;}
      closeM('authM');upNav();
      go(role==='user'?'dashboard':'lister');
      toast('Welcome to Ek Makān, '+esc(nm)+'! &#127881;');
    }catch(err){
      if(btn){btn.disabled=false;btn.textContent=origBtnText;}
      var msg=err.message||'Sign-up failed.';
      if(msg.toLowerCase().includes('already registered'))msg='An account with this email already exists. Try signing in.';
      if(msg.toLowerCase().includes('captcha'))msg='Verification failed. Please try again.';
      if(ae){ae.style.display='';ae.textContent=msg;}
      // Reset Turnstile after failed attempt (tokens are single-use)
      _turnstileToken=null;
      renderTurnstile('turnstileWrap',function(tk){_turnstileToken=tk;});
    }
  };
  // MX check first for non-popular domains
  var knownGood=(em.split('@')[1]||'').toLowerCase();
  if(_POPULAR_DOMAINS.indexOf(knownGood)>=0){doSignup();return;}
  checkMXRecord(em).then(function(result){
    if(result===false){
      if(btn){btn.disabled=false;btn.textContent=origBtnText;}
      if(ae){ae.style.display='';ae.textContent='This email domain does not appear to accept mail. Please check the address and try again.';}
      return;
    }
    doSignup();
  }).catch(function(){doSignup();});
}

// Helpers for email typo suggestion UX (called from the error banner)
function _applyEmailSugg(suggested){
  var inp=document.getElementById('rEm');
  if(inp){inp.value=suggested;}
  var ae=document.getElementById('aErr');
  if(ae)ae.style.display='none';
}
function _confirmEmailAs(){
  var inp=document.getElementById('rEm');
  if(!inp)return;
  // Mark confirmed so next doReg() call bypasses the suggestion
  inp.dataset.confirmed='1';
  // Stamp the marker into a hidden spot
  var marker=document.getElementById('rEmSugg');
  if(!marker){
    marker=document.createElement('span');
    marker.id='rEmSugg';
    marker.style.display='none';
    inp.parentNode.appendChild(marker);
  }
  marker.dataset.confirmed='1';
  var ae=document.getElementById('aErr');
  if(ae)ae.style.display='none';
  // Re-submit now that the user has explicitly confirmed their email
  doReg();
}


async function doLogout(){await sb.auth.signOut();resetSessionState();cu=null;upNav();go('home');toast('Logged out.');}

// ══ PASSWORD RESET ══
// Step 1: User enters email, we call Supabase to send the recovery email.
// The recovery email contains a link back to this site with a token in the URL hash.
async function doResetPw(){
  var ae=document.getElementById('aErr');
  var em=document.getElementById('resetEm').value.trim();
  var btn=document.getElementById('resetBtn');
  if(ae)ae.style.display='none';
  if(!em){if(ae){ae.style.display='';ae.textContent='Please enter your email address.';}return;}
  if(!isEmailFormatValid(em)){if(ae){ae.style.display='';ae.textContent='Please enter a valid email address.';}return;}
  var origText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Sending…';}
  try{
    // redirectTo tells Supabase where to send the user after they click the email link.
    // It must be your deployed site URL. Supabase appends #access_token=...&type=recovery
    var siteUrl=window.location.origin+window.location.pathname;
    var {error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:siteUrl,captchaToken:_turnstileResetToken});
    if(error)throw error;
    if(btn){btn.disabled=false;btn.textContent=origText;}
    // Show success message
    if(ae){
      ae.style.display='';
      ae.className='al ali';
      ae.innerHTML='&#9989; If an account exists for <strong>'+esc(em)+'</strong>, a password reset link has been sent. Please check your inbox (and spam folder).';
    }
  }catch(err){
    if(btn){btn.disabled=false;btn.textContent=origText;}
    if(ae){ae.style.display='';ae.className='al ale';ae.textContent=err.message||'Failed to send reset email. Please try again.';}
  }
}

// Step 2: User clicks the link in their email, lands back on the site.
// Supabase puts the session tokens in the URL hash. We detect this on page load
// and show the password update modal.
async function doUpdatePw(){
  var pw1=document.getElementById('newPw1').value;
  var pw2=document.getElementById('newPw2').value;
  var ae=document.getElementById('pwUpdateErr');
  var btn=document.getElementById('pwUpdateBtn');
  if(ae)ae.style.display='none';
  if(!pw1||!pw2){if(ae){ae.style.display='';ae.textContent='Please fill in both fields.';}return;}
  if(pw1!==pw2){if(ae){ae.style.display='';ae.textContent='Passwords do not match.';}return;}
  if(pw1.length<8){if(ae){ae.style.display='';ae.textContent='Password must be at least 8 characters.';}return;}
  var origText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Updating…';}
  try{
    var {error}=await sb.auth.updateUser({password:pw1});
    if(error)throw error;
    if(btn){btn.disabled=false;btn.textContent=origText;}
    closeM('pwUpdateM');
    toast('Password updated successfully! You can now sign in. &#128274;');
    // Clear the hash so reloading doesn't re-trigger
    if(window.history.replaceState)window.history.replaceState(null,null,window.location.pathname);
  }catch(err){
    if(btn){btn.disabled=false;btn.textContent=origText;}
    if(ae){ae.style.display='';ae.textContent=err.message||'Failed to update password. The link may have expired — please request a new one.';}
  }
}

// Detect recovery token in URL hash on page load.
// Supabase redirects back with: #access_token=...&type=recovery
// The Supabase client auto-picks up the token and establishes a session.
// We just need to detect 'type=recovery' and show the update modal.
function _checkRecoveryToken(){
  var hash=window.location.hash;
  if(!hash)return false;
  if(hash.indexOf('type=recovery')>=0||hash.indexOf('type=magiclink')>=0){
    return true;
  }
  return false;
}

// ══ PROFILE EDIT ══
function openEditProfile(){
  if(!cu)return;
  // Pre-fill fields with current values
  var nm=document.getElementById('profName');if(nm)nm.value=cu.name||'';
  var ph=document.getElementById('profPhone');if(ph)ph.value=cu.phone||'';
  var ag=document.getElementById('profAgency');if(ag)ag.value=cu.agency||'';
  var lc=document.getElementById('profLic');if(lc)lc.value=cu.lic||'';
  // Show agency/license fields only for brokers
  var agW=document.getElementById('profAgencyWrap');if(agW)agW.style.display=cu.role==='broker'?'':'none';
  var lcW=document.getElementById('profLicWrap');if(lcW)lcW.style.display=cu.role==='broker'?'':'none';
  // Clear password fields and messages
  var pw1=document.getElementById('profNewPw');if(pw1)pw1.value='';
  var pw2=document.getElementById('profConfPw');if(pw2)pw2.value='';
  var err=document.getElementById('profErr');if(err)err.style.display='none';
  var ok=document.getElementById('profOk');if(ok)ok.style.display='none';
  openM('profileM');
}

async function doUpdateProfile(){
  var err=document.getElementById('profErr');
  var ok=document.getElementById('profOk');
  var btn=document.getElementById('profSaveBtn');
  if(err)err.style.display='none';
  if(ok)ok.style.display='none';
  var nm=(document.getElementById('profName').value||'').trim();
  var ph=(document.getElementById('profPhone').value||'').trim();
  var ag=(document.getElementById('profAgency').value||'').trim();
  var lc=(document.getElementById('profLic').value||'').trim();
  if(!nm){if(err){err.style.display='';err.textContent='Name is required.';}return;}
  if(ph&&ph.replace(/\D/g,'').length<10){if(err){err.style.display='';err.textContent='Please enter a valid 10-digit phone number.';}return;}
  var origText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Saving…';}
  try{
    // Update public.users table
    var updates={name:nm,phone:ph};
    if(cu.role==='broker'){updates.agency=ag;updates.license_no=lc;}
    var {error}=await sb.from('users').update(updates).eq('id',cu.id);
    if(error)throw error;
    // Also update auth metadata so it stays in sync
    await sb.auth.updateUser({data:{name:nm,phone:ph,role:cu.role,agency:ag,license_no:lc}});
    // Update local state
    cu.name=nm;cu.phone=ph;
    if(cu.role==='broker'){cu.agency=ag;cu.lic=lc;}
    _clr('u');
    if(btn){btn.disabled=false;btn.textContent=origText;}
    if(ok){ok.style.display='';ok.textContent='Profile updated successfully.';}
    // Refresh the nav and current page
    upNav();
    var activePage=document.querySelector('.page.active');
    if(activePage){
      if(activePage.id==='pg-dashboard')await renderDash();
      else if(activePage.id==='pg-lister')await renderLister();
    }
  }catch(e){
    if(btn){btn.disabled=false;btn.textContent=origText;}
    if(err){err.style.display='';err.textContent=e.message||'Failed to update profile. Please try again.';}
  }
}

async function doChangePw(){
  var err=document.getElementById('profErr');
  var ok=document.getElementById('profOk');
  var btn=document.getElementById('profPwBtn');
  if(err)err.style.display='none';
  if(ok)ok.style.display='none';
  var pw1=(document.getElementById('profNewPw').value||'');
  var pw2=(document.getElementById('profConfPw').value||'');
  if(!pw1||!pw2){if(err){err.style.display='';err.textContent='Please fill in both password fields.';}return;}
  if(pw1!==pw2){if(err){err.style.display='';err.textContent='Passwords do not match.';}return;}
  if(pw1.length<8){if(err){err.style.display='';err.textContent='Password must be at least 8 characters.';}return;}
  var origText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Updating…';}
  try{
    var {error}=await sb.auth.updateUser({password:pw1});
    if(error)throw error;
    if(btn){btn.disabled=false;btn.textContent=origText;}
    // Clear password fields
    document.getElementById('profNewPw').value='';
    document.getElementById('profConfPw').value='';
    if(ok){ok.style.display='';ok.textContent='Password updated successfully.';}
  }catch(e){
    if(btn){btn.disabled=false;btn.textContent=origText;}
    if(err){err.style.display='';err.textContent=e.message||'Failed to update password. Please try again.';}
  }
}


// Clear all per-session state: filters, search inputs, form fields, favorites, selections.
// Runs on every login, logout, and registration so no one account sees another's ephemeral choices.
function resetSessionState(){
  // Filter arrays
  fRT=[];fRB=[];fRF=[];fRA=[];
  fBT=[];fBB=[];fBF=[];fBA=[];fBPo=[];fBST=[];fBFc=[];fBFl=[];
  fVer=false;fRer=false;
  // Browse/hero modes back to default
  bMode='rent';hMode='rent';lMode='rent';
  // Listing form and inquiry state
  upImgs=[];selTags=[];selAmens=[];actL=null;
  // Admin tab
  curAT='ov';
  // Image carousel positions
  _cIdx={};
  // Pagination
  _browseShown=0;_browseFiltered=[];
  _adminPage={al:0,pd:0,ls:0,tn:0,ld:0};
  _editingListingId=null;
  // Reset Turnstile CAPTCHA
  _turnstileToken=null;
  // Favorites: clear in-memory and remove any persisted favorites tied to previous user
  favs=[];
  // Favorites cleared in memory (loaded from Supabase on next login)
  // Clear every text/number/select input we use across the app
  var idsToClear=[
    // Browse filter sidebar
    'fCity','fRmn','fRmx','fAv','fBCity','fBmn','fBmx','fAmn','fAmx',
    // Search
    'bSearch',
    // Browse sort
    'bSort',
    // Hero rent search
    'hrc','hrt','hrb',
    // Hero buy search
    'hbc','hbt','hbb','hbd',
    // Listing form (addM)
    'lTl','lCy','lLo','lAr','lRt','lDp','lPr','lRe','lOw','lCt','lDs','lFl','lFc','lFn','lTp','lBd','lBt','lAv',
    // Login + register
    'lEm','lPw','rNm','rEm','rPh','rPw','rAn','rLn',
    // Password reset/update
    'resetEm','newPw1','newPw2',
    // Profile edit
    'profName','profPhone','profAgency','profLic','profNewPw','profConfPw',
    // Inquiry modal
    'cNm','cPh','cEm','cMsg',
    // Report modal
    'rptType','rptDesc','rptName','rptContact',
    // Contact page
    'ctName','ctEmail','ctSubject','ctMessage',
    // Leads date filters
    'ldf','ldt','ldft'
  ];
  idsToClear.forEach(function(id){
    var e=document.getElementById(id);
    if(!e)return;
    if(e.tagName==='SELECT'){e.selectedIndex=0;}
    else{e.value='';}
  });
  // Reset the max-rent stepper to its "No limit" default
  var hrr=document.getElementById('hrr');
  var hrrLbl=document.getElementById('hrrLbl');
  if(hrr)hrr.value='0';
  if(hrrLbl)hrrLbl.textContent='No limit';
  // Close any autocomplete dropdowns that might be open
  document.querySelectorAll('.ac-list').forEach(function(l){l.className='ac-list';l.innerHTML='';});
  // Close any open modals
  document.querySelectorAll('.mo.open').forEach(function(m){m.classList.remove('open');});
  // Rebuild filter chips UI to reflect cleared state
  if(typeof bldF==='function')bldF();
  // If we were on the browse page, refresh the grid so it reflects cleared state
  var activeBrowse=document.getElementById('pg-browse');
  if(activeBrowse&&activeBrowse.classList.contains('active')&&typeof renderBrowse==='function'){
    renderBrowse();
  }
}


// ══ HERO ══
function setHMode(m){
  hMode=m;
  var hmr=document.getElementById('hmr'),hmb=document.getElementById('hmb');
  var hfr=document.getElementById('hfr'),hfb=document.getElementById('hfb');
  if(hmr)hmr.className='mb-btn'+(m==='rent'?' ar':'');
  if(hmb)hmb.className='mb-btn'+(m==='buy'?' ab':'');
  if(hfr)hfr.style.display=m==='rent'?'':'none';
  if(hfb)hfb.style.display=m==='buy'?'':'none';
}
function setRentPreset(mn,mx){var fmn=document.getElementById('fRmn'),fmx=document.getElementById('fRmx');if(fmn)fmn.value=mn||'';if(fmx)fmx.value=mx||'';renderBrowse();}
function fmtRent(v){
  if(v<=0)return 'No limit';
  if(v>=10000000)return '\u20B9'+(v/10000000).toFixed(v%10000000===0?0:2).replace(/\.?0+$/,'')+' Cr';
  if(v>=100000)return '\u20B9'+(v/100000).toFixed(v%100000===0?0:2).replace(/\.?0+$/,'')+' L';
  return '\u20B9'+v.toLocaleString('en-IN');
}
function fmtPrice(v){
  if(v>=10000000)return '\u20B9'+(v/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';
  if(v>=100000)return '\u20B9'+(v/100000).toFixed(2).replace(/\.?0+$/,'')+' L';
  if(v>=1000)return '\u20B9'+(v/1000).toFixed(1).replace(/\.0$/,'')+' K';
  return '\u20B9'+v.toLocaleString('en-IN');
}
function fmtPriceHTML(v){
  if(v>=10000000)return '&#8377;'+(v/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';
  if(v>=100000)return '&#8377;'+(v/100000).toFixed(2).replace(/\.?0+$/,'')+' L';
  if(v>=1000)return '&#8377;'+(v/1000).toFixed(1).replace(/\.0$/,'')+' K';
  return '&#8377;'+v.toLocaleString('en-IN');
}
function stepRent(dir){
  var inp=document.getElementById('hrr');
  var lbl=document.getElementById('hrrLbl');
  if(!inp||!lbl)return;
  var cur=Number(inp.value)||0;
  var next=cur+(dir*25000);
  if(next<0)next=0;
  if(next>1000000000)next=1000000000;
  inp.value=next;
  lbl.textContent=fmtRent(next);
}
function doHS(){
  bMode=hMode;go('browse');
  if(hMode==='rent'){
    var c=document.getElementById('hrc').value;
    var t=document.getElementById('hrt').value;
    var r=document.getElementById('hrr').value;
    var b=document.getElementById('hrb').value;
    var fc=document.getElementById('fCity');if(fc&&c)fc.value=c;
    if(t)fRT=[t];
    var frx=document.getElementById('fRmx');if(frx&&r&&Number(r)>0)frx.value=r;
    if(b)fRB=[b];
  } else {
    var c2=document.getElementById('hbc').value;
    var t2=document.getElementById('hbt').value;
    var bg=document.getElementById('hbb').value;
    var b2=document.getElementById('hbd').value;
    var fc2=document.getElementById('fBCity');if(fc2&&c2)fc2.value=c2;
    if(t2)fBT=[t2];
    var fbx=document.getElementById('fBmx');if(fbx&&bg)fbx.value=bg;
    if(b2)fBB=[b2];
  }
  bldF();renderBrowse();
}

// ══ HOME ══
async function renderHome(){
  var cc=document.getElementById('cityCds');
  if(cc){
    cc.innerHTML=CITIES.map(function(c){
      return '<div class="city-cd" onclick="goCityBrowse(\''+c.name+'\')">'
        +'<img loading="lazy" decoding="async" src="'+c.img+'" alt="'+c.name+'"/>'
        +'<div class="city-ov"><span>'+c.name+'</span><small>'+c.count+' listings</small></div>'
        +'</div>';
    }).join('');
  }
  // Show loading in featured sections
  var hfr=document.getElementById('hFR');
  var hfb=document.getElementById('hFB');
  if(hfr)hfr.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading rentals…</span></div>';
  if(hfb)hfb.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading properties…</span></div>';
  var ls=(await gL()).filter(function(l){return l.status==='approved';});
  var rentals=ls.filter(function(l){return l.lf==='rent';});
  var sales=ls.filter(function(l){return l.lf==='buy';});
  if(hfr)hfr.innerHTML=rentals.length?rentals.slice(0,3).map(pCard).join('')
    :'<div class="mk-empty"><div class="mk-empty-icon">&#127968;</div><div class="mk-empty-title">No rental listings yet</div><div class="mk-empty-sub">Be the first to <span onclick="openM(\'addM\')" style="color:var(--t);cursor:pointer;font-weight:700;">post a rental listing</span>!</div></div>';
  if(hfb)hfb.innerHTML=sales.length?sales.slice(0,3).map(pCard).join('')
    :'<div class="mk-empty"><div class="mk-empty-icon">&#128273;</div><div class="mk-empty-title">No properties for sale yet</div><div class="mk-empty-sub">Be the first to <span onclick="openM(\'addM\')" style="color:var(--t);cursor:pointer;font-weight:700;">list a property for sale</span>!</div></div>';
}
function goCityBrowse(name){
  var fc=document.getElementById('fCity');if(fc)fc.value=name;
  setBMode('rent');go('browse');
}

// ══ BROWSE PAGINATION ══
// Appends the next PAGE_SIZE cards to the grid and adds/updates the Load More button.
function _appendBrowsePage(grid){
  if(!grid)grid=document.getElementById('bGrid');
  if(!grid)return;
  // Remove existing load-more button before appending new cards
  var existing=grid.querySelector('.mk-load-more');
  if(existing)existing.remove();
  // Slice the next batch
  var batch=_browseFiltered.slice(_browseShown,_browseShown+PAGE_SIZE);
  // Append cards as DOM (not innerHTML= which would destroy existing cards)
  var frag=document.createElement('div');
  frag.innerHTML=batch.map(pCard).join('');
  while(frag.firstChild)grid.appendChild(frag.firstChild);
  _browseShown+=batch.length;
  // Add Load More button if there are more listings
  var remaining=_browseFiltered.length-_browseShown;
  if(remaining>0){
    var lm=document.createElement('div');
    lm.className='mk-load-more';
    lm.innerHTML='<button onclick="loadMoreBrowse()">Load More ('+remaining+' remaining)</button>'
      +'<div class="mk-load-more-count">Showing '+_browseShown+' of '+_browseFiltered.length+'</div>';
    grid.appendChild(lm);
  } else if(_browseFiltered.length>PAGE_SIZE){
    // All loaded — show count
    var lm=document.createElement('div');
    lm.className='mk-load-more';
    lm.innerHTML='<div class="mk-load-more-count">All '+_browseFiltered.length+' listings shown</div>';
    grid.appendChild(lm);
  }
}
function loadMoreBrowse(){
  var grid=document.getElementById('bGrid');
  _appendBrowsePage(grid);
  // Scroll so the user sees the newly loaded cards (scroll to where load-more was)
}

// ══ GENERIC TABLE PAGINATION ══
// Used by admin tabs to paginate table rows.
// Returns {html, hasMore, showing, total}
function paginateRows(rows,page,pageSize){
  if(!pageSize)pageSize=PAGE_SIZE;
  var total=rows.length;
  var start=0;
  var end=Math.min((page+1)*pageSize,total);
  var showing=rows.slice(start,end);
  return {html:showing.join(''),hasMore:end<total,shown:end,total:total};
}
function adminLoadMore(tab){
  _adminPage[tab]=(_adminPage[tab]||0)+1;
  renderAdmin(curAT);
}

// ══ PROPERTY CARD — 99acres style ══
function pCard(l){
  var ir=l.lf==='rent';
  var fv=favs.indexOf(l.id)>=0;
  var hasImgs=l.images&&l.images.length>0;
  var disp=hasImgs?(cu?l.images:l.images.slice(0,2)):[];
  var showLock=hasImgs&&l.images.length>2&&!cu;

  // ── Image section ──
  var imgHTML='<div class="pc-no-img">&#127968;</div>';
  if(hasImgs){
    imgHTML='<img id="ci'+l.id+'" loading="lazy" decoding="async" src="'+disp[0]+'" style="width:100%;height:100%;object-fit:cover;display:block;" alt="'+esc(l.title)+'"/>';
    if(disp.length>1){
      imgHTML+='<button class="arr l" onclick="event.stopPropagation();cSlide('+l.id+',-1)" aria-label="Previous photo">&#8249;</button>';
      imgHTML+='<button class="arr r" onclick="event.stopPropagation();cSlide('+l.id+',1)" aria-label="Next photo">&#8250;</button>';
    }
    if(showLock){
      imgHTML+='<div class="pc-blur">'
        +'<div style="font-size:26px;">&#128274;</div>'
        +'<p>Sign up free to see all '+l.images.length+' photos &amp; contact details</p>'
        +'<button class="btn btn-sm" onclick="event.stopPropagation();openM(\'authM\')">Sign Up Free</button>'
        +'</div>';
    }
    // Status bar at bottom of image (like 99acres "Under Construction · Completion...")
    var statusLeft='';
    if(!ir){
      if(l.poss)statusLeft=l.poss;
      if(l.rera)statusLeft+=(statusLeft?' &middot; ':'')+('<span style="color:#7fffb0;">RERA &#10003;</span>');
    } else {
      statusLeft=l.avail?l.avail:'';
      if(l.furnish)statusLeft+=(statusLeft?' &middot; ':'')+l.furnish;
    }
    var visCount=cu?l.images.length:Math.min(2,l.images.length);
    imgHTML+='<div class="pc-status">'+(statusLeft?'<span class="pc-avail">'+statusLeft+'</span>':'')+'<span class="pc-cnt">&#128247; '+visCount+'/'+l.images.length+'</span></div>';
  }

  // ── Inline badge ──
  var badge='';
  if(!ir&&l.stype==='New')badge='<span class="pc-badge new">New Booking</span>';
  else if(l.verified)badge='<span class="pc-badge verified">&#10003; Verified</span>';
  if(!ir&&l.rera&&!badge)badge='<span class="pc-badge rera">RERA</span>';

  // ── BHK variants / price table ──
  var variantsHTML='';
  if(ir){
    // Rent: single price + deposit
    variantsHTML='<div class="pc-variants">'
      +'<div class="pc-var"><div class="pc-var-lbl">'+l.beds+' BHK &middot; '+l.area+' sq.ft</div>'
      +'<div class="pc-var-price">&#8377;'+l.rent.toLocaleString('en-IN')+'/mo</div></div>'
      +(l.dep?'<div class="pc-var"><div class="pc-var-lbl">Deposit</div><div class="pc-var-price">&#8377;'+l.dep.toLocaleString('en-IN')+'</div></div>':'')
      +(l.furnish?'<div class="pc-var"><div class="pc-var-lbl">Furnishing</div><div class="pc-var-price" style="font-size:11px;">'+esc(l.furnish)+'</div></div>':'')
      +'</div>';
  } else {
    // Buy: price per sqft style
    var priceL=fmtPriceHTML(l.price);
    var sqftPrice=l.area>0?'&#8377;'+Math.round(l.price/l.area).toLocaleString('en-IN'):'—';
    variantsHTML='<div class="pc-variants">'
      +'<div class="pc-var"><div class="pc-var-lbl">'+l.beds+' BHK &middot; '+esc(l.type)+'</div>'
      +'<div class="pc-var-price" style="color:var(--g);">'+priceL+'</div></div>'
      +'<div class="pc-var"><div class="pc-var-lbl">Area</div><div class="pc-var-price">'+l.area+' sq.ft</div></div>'
      +(sqftPrice!=='—'?'<div class="pc-var"><div class="pc-var-lbl">Per sq.ft</div><div class="pc-var-price">'+sqftPrice+'</div></div>':'')
      +'</div>';
  }

  // ── Tags ──
  var tagsHTML=l.tags.slice(0,2).map(function(t){return '<span class="tag">'+esc(t)+'</span>';}).join('');

  // ── Dual CTA footer ──
  var footerHTML='<div class="pc-footer">'
    +'<button class="btn-sec" onclick="event.stopPropagation();viewL('+l.id+')" style="flex:1;padding:12px;border:none;background:transparent;color:var(--t);font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;border-right:1px solid var(--sa);display:flex;align-items:center;justify-content:center;gap:5px;" onmouseover="this.style.background=\'var(--tl)\'" onmouseout="this.style.background=\'transparent\'">&#128065; View Details</button>'
    +'<button class="btn-pri'+(ir?'':' buy-pri')+'" onclick="event.stopPropagation();oCnt('+l.id+')" style="flex:1;padding:12px;border:none;background:'+(ir?'var(--t)':'var(--g)')+';color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:5px;">&#128222; '+(cu?'View Number':'Contact')+'</button>'
    +'<button onclick="event.stopPropagation();openReport('+l.id+')" aria-label="Report discrimination" style="padding:12px 14px;border:none;background:transparent;color:#aaa;cursor:pointer;border-left:1px solid var(--sa);font-size:14px;transition:color .15s;" title="Report discrimination" onmouseover="this.style.color=\'var(--red)\'" onmouseout="this.style.color=\'#aaa\'">&#128681;</button>'
    +'</div>';

  return '<div class="pc" onclick="viewL('+l.id+')">'
    // Image
    +'<div class="pc-img">'
    +'<div class="tbdg '+(ir?'rent':'buy')+'">'+(ir?'Rent':'Buy')+'</div>'
    +'<button class="fave-btn" onclick="event.stopPropagation();togFav('+l.id+',this)" aria-label="Save to favorites" aria-pressed="'+(fv?'true':'false')+'" style="color:'+(fv?'#d9534f':'#aaa')+'">&#9829;</button>'
    +imgHTML
    +'</div>'
    // Body
    +'<div class="pc-body">'
    +'<div class="pc-title-row"><div class="pt">'+esc(l.title)+'</div>'+badge+'</div>'
    +'<div class="ploc">&#128205; '+esc(l.loc)+', '+esc(l.city)+'</div>'
    +variantsHTML
    +(ir&&l.area?'<div class="pc-sqft">&#128207; <strong>&#8377;'+Math.round(l.rent/(l.area/1000)).toLocaleString('en-IN')+'/sq.ft</strong> approx</div>':'')
    +'<div class="tags-r">'+tagsHTML+'</div>'
    +'</div>'
    // Dual CTA
    +footerHTML
    +'</div>';
}

async function cSlide(id,dir){
  var l=(await gL()).find(function(x){return x.id===id;});
  if(!l||!l.images)return;
  var imgs=cu?l.images:l.images.slice(0,2);
  var len=imgs.length;if(len<=1)return;
  _cIdx[id]=((_cIdx[id]||0)+dir+len)%len;
  var img=document.getElementById('ci'+id);
  if(img){img.style.opacity='0.6';img.src=imgs[_cIdx[id]];setTimeout(function(){img.style.opacity='1';},150);}
}

// ══ BROWSE ══
// Debounced wrapper used by text/number filter inputs so typing doesn't trigger
// a full grid re-render on every keystroke. Non-input triggers (chips, selects,
// programmatic calls) still call renderBrowse() directly for instant feedback.
var _dRenderT=null;
function dRender(){
  if(_dRenderT)clearTimeout(_dRenderT);
  _dRenderT=setTimeout(async function(){_dRenderT=null;await renderBrowse();},200);
}

function setBMode(m){
  bMode=m;
  var bmr=document.getElementById('bmr'),bmb=document.getElementById('bmb');
  var rf=document.getElementById('rFilts'),bf=document.getElementById('bFilts');
  if(bmr)bmr.className='bm-btn'+(m==='rent'?' ar':'');
  if(bmb)bmb.className='bm-btn'+(m==='buy'?' ab':'');
  if(rf)rf.style.display=m==='rent'?'':'none';
  if(bf)bf.style.display=m==='buy'?'':'none';
  renderBrowse();
}

function mkChips(cid,opts,arr){
  var el=document.getElementById(cid);if(!el)return;
  el.innerHTML=opts.map(function(o){
    return '<div class="ck'+(arr.indexOf(o)>=0?' on':'')+'" onclick="togCk(\''+cid+'\',\''+o.replace(/'/g,"\\'")+'\')">'+(o)+'</div>';
  }).join('');
}
function mkAmen(cid,arr){
  var el=document.getElementById(cid);if(!el)return;
  el.innerHTML=AMENS.map(function(a){
    return '<div class="ac'+(arr.indexOf(a)>=0?' on':'')+'" onclick="togAm(\''+cid+'\',\''+a.replace(/'/g,"\\'")+'\')">'+(a)+'</div>';
  }).join('');
}

function bldF(){
  mkChips('fRT',PTYR,fRT);mkChips('fRB',BEDS,fRB);mkChips('fRF',FURN,fRF);mkAmen('fRA',fRA);
  mkChips('fBT',PTYB,fBT);mkChips('fBB',BEDS,fBB);mkChips('fBF',FURN,fBF);mkAmen('fBA',fBA);
  mkChips('fBPo',POSS,fBPo);mkChips('fBST',STYP,fBST);mkChips('fBFc',FACE,fBFc);mkChips('fBFl',FLOR,fBFl);
  var ckV=document.getElementById('ckV'),ckV2=document.getElementById('ckV2');
  var ckR=document.getElementById('ckR'),ckR2=document.getElementById('ckR2');
  if(ckV)ckV.classList.toggle('on',fVer);if(ckV2)ckV2.classList.toggle('on',fVer);
  if(ckR)ckR.classList.toggle('on',fRer);if(ckR2)ckR2.classList.toggle('on',fRer);
  setBMode(bMode);
}

function togCk(cid,val){
  var map={fRT:fRT,fRB:fRB,fRF:fRF,fBT:fBT,fBB:fBB,fBF:fBF,fBPo:fBPo,fBST:fBST,fBFc:fBFc,fBFl:fBFl};
  var arr=map[cid];if(!arr)return;
  var i=arr.indexOf(val);if(i>=0)arr.splice(i,1);else arr.push(val);
  bldF();renderBrowse();
}
function togAm(cid,val){
  var arr=cid.indexOf('B')>=0?fBA:fRA;
  var i=arr.indexOf(val);if(i>=0)arr.splice(i,1);else arr.push(val);
  mkAmen(cid,arr);renderBrowse();
}
function togBool(k,el){
  if(k==='ver')fVer=!fVer;
  if(k==='rer')fRer=!fRer;
  bldF();renderBrowse();
}
function clearAllF(){
  fRT=[];fRB=[];fRF=[];fRA=[];fBT=[];fBB=[];fBF=[];fBA=[];fBPo=[];fBST=[];fBFc=[];fBFl=[];fVer=false;fRer=false;
  ['fCity','fRmn','fRmx','fBCity','fBmn','fBmx','fAmn','fAmx','bSearch'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  var av=document.getElementById('fAv');if(av)av.value='';
  bldF();renderBrowse();
}

function gv(id){var e=document.getElementById(id);return e?e.value||'':""; }

async function renderBrowse(){
  // Show loading spinner immediately
  var grid=document.getElementById('bGrid');
  var bc=document.getElementById('bCount');
  if(grid&&!_cacheL)grid.innerHTML='<div class="mk-spinner" style="grid-column:1/-1;"><span class="mk-spinner-text">Loading listings…</span></div>';
  if(bc&&!_cacheL)bc.textContent='Loading…';
  var allApproved=(await gL()).filter(function(l){return l.status==='approved';});
  var ls=allApproved.filter(function(l){return l.lf===bMode;});
  var hasAnyFilters=false;
  // Keyword search — matches across title, city, locality, description, owner, type
  var sq=gv('bSearch').toLowerCase();
  if(sq){
    ls=ls.filter(function(l){
      return (l.title||'').toLowerCase().indexOf(sq)>=0
        ||(l.city||'').toLowerCase().indexOf(sq)>=0
        ||(l.loc||'').toLowerCase().indexOf(sq)>=0
        ||(l.desc||'').toLowerCase().indexOf(sq)>=0
        ||(l.owner||'').toLowerCase().indexOf(sq)>=0
        ||(l.type||'').toLowerCase().indexOf(sq)>=0
        ||(l.tags||[]).join(' ').toLowerCase().indexOf(sq)>=0;
    });
    hasAnyFilters=true;
  }
  if(bMode==='rent'){
    var c=gv('fCity'),mn=Number(gv('fRmn'))||0,mx=Number(gv('fRmx'))||Infinity;
    var av=gv('fAv');
    if(c){ls=ls.filter(function(l){return l.city.toLowerCase().indexOf(c.toLowerCase())>=0||l.loc.toLowerCase().indexOf(c.toLowerCase())>=0;});hasAnyFilters=true;}
    if(mn){ls=ls.filter(function(l){return l.rent>=mn;});hasAnyFilters=true;}
    if(mx!==Infinity){ls=ls.filter(function(l){return l.rent<=mx;});hasAnyFilters=true;}
    if(av){ls=ls.filter(function(l){return l.avail===av;});hasAnyFilters=true;}
    if(fRT.length){ls=ls.filter(function(l){return fRT.indexOf(l.type)>=0;});hasAnyFilters=true;}
    if(fRB.length){ls=ls.filter(function(l){return fRB.indexOf(l.beds)>=0;});hasAnyFilters=true;}
    if(fRF.length){ls=ls.filter(function(l){return fRF.indexOf(l.furnish)>=0;});hasAnyFilters=true;}
    if(fRA.length){ls=ls.filter(function(l){return fRA.every(function(a){return l.amens&&l.amens.indexOf(a)>=0;});});hasAnyFilters=true;}
  } else {
    var c2=gv('fBCity'),mn2=Number(gv('fBmn'))||0,mx2=Number(gv('fBmx'))||Infinity;
    var amn=Number(gv('fAmn'))||0,amx=Number(gv('fAmx'))||Infinity;
    if(c2){ls=ls.filter(function(l){return l.city.toLowerCase().indexOf(c2.toLowerCase())>=0||l.loc.toLowerCase().indexOf(c2.toLowerCase())>=0;});hasAnyFilters=true;}
    if(mn2){ls=ls.filter(function(l){return l.price>=mn2;});hasAnyFilters=true;}
    if(mx2!==Infinity){ls=ls.filter(function(l){return l.price<=mx2;});hasAnyFilters=true;}
    if(amn){ls=ls.filter(function(l){return l.area>=amn;});hasAnyFilters=true;}
    if(amx!==Infinity){ls=ls.filter(function(l){return l.area<=amx;});hasAnyFilters=true;}
    if(fBT.length){ls=ls.filter(function(l){return fBT.indexOf(l.type)>=0;});hasAnyFilters=true;}
    if(fBB.length){ls=ls.filter(function(l){return fBB.indexOf(l.beds)>=0;});hasAnyFilters=true;}
    if(fBF.length){ls=ls.filter(function(l){return fBF.indexOf(l.furnish)>=0;});hasAnyFilters=true;}
    if(fBPo.length){ls=ls.filter(function(l){return fBPo.indexOf(l.poss)>=0;});hasAnyFilters=true;}
    if(fBST.length){ls=ls.filter(function(l){return fBST.indexOf(l.stype)>=0;});hasAnyFilters=true;}
    if(fBFc.length){ls=ls.filter(function(l){return fBFc.indexOf(l.facing)>=0;});hasAnyFilters=true;}
    if(fBFl.length){ls=ls.filter(function(l){return fBFl.indexOf(l.floor)>=0;});hasAnyFilters=true;}
    if(fBA.length){ls=ls.filter(function(l){return fBA.every(function(a){return l.amens&&l.amens.indexOf(a)>=0;});});hasAnyFilters=true;}
    if(fRer){ls=ls.filter(function(l){return l.rera&&l.rera.trim();});hasAnyFilters=true;}
  }
  if(fVer){ls=ls.filter(function(l){return l.verified;});hasAnyFilters=true;}
  var srt=gv('bSort')||'new';
  if(srt==='pa')ls.sort(function(a,b){return bMode==='rent'?a.rent-b.rent:a.price-b.price;});
  else if(srt==='pd')ls.sort(function(a,b){return bMode==='rent'?b.rent-a.rent:b.price-a.price;});
  else if(srt==='aa')ls.sort(function(a,b){return (b.area||0)-(a.area||0);});
  else if(srt==='ad')ls.sort(function(a,b){return (a.area||0)-(b.area||0);});
  else ls.sort(function(a,b){return b.id-a.id;});
  var bc=document.getElementById('bCount');
  if(bc)bc.textContent=ls.length+' listing'+(ls.length!==1?'s':'')+' found';
  // Store filtered set and reset pagination
  _browseFiltered=ls;
  _browseShown=0;
  if(grid){
    if(ls.length){
      grid.innerHTML='';
      _appendBrowsePage(grid);
    } else if(hasAnyFilters){
      grid.innerHTML='<div class="mk-empty" style="grid-column:1/-1;"><div class="mk-empty-icon">&#128269;</div><div class="mk-empty-title">No listings match your filters</div><div class="mk-empty-sub">Try adjusting your criteria or <button onclick="clearAllF()" style="background:none;border:none;color:var(--t);cursor:pointer;font-weight:700;font-size:13px;font-family:\'DM Sans\',sans-serif;text-decoration:underline;">clearing all filters</button></div></div>';
    } else {
      var modeLbl=bMode==='rent'?'rental':'sale';
      grid.innerHTML='<div class="mk-empty" style="grid-column:1/-1;"><div class="mk-empty-icon">'+(bMode==='rent'?'&#127968;':'&#128273;')+'</div><div class="mk-empty-title">No '+modeLbl+' listings yet</div><div class="mk-empty-sub">Be the first to post! <span onclick="openM(\'addM\')" style="color:var(--t);cursor:pointer;font-weight:700;">List a property for free</span></div></div>';
    }
  }
  // Active chips
  var chips=[];
  // Search chip
  if(sq)chips.push({l:'&#128269; "'+esc(sq)+'"',x:function(){var e=document.getElementById('bSearch');if(e)e.value='';renderBrowse();}});
  if(bMode==='rent'){
    if(gv('fCity'))chips.push({l:'&#128205; '+gv('fCity'),x:function(){var e=document.getElementById('fCity');if(e)e.value='';renderBrowse();}});
    if(gv('fRmn'))chips.push({l:'&#8377;'+Number(gv('fRmn')).toLocaleString('en-IN')+'+ min',x:function(){var e=document.getElementById('fRmn');if(e)e.value='';renderBrowse();}});
    if(gv('fRmx'))chips.push({l:'&#8804;&#8377;'+Number(gv('fRmx')).toLocaleString('en-IN'),x:function(){var e=document.getElementById('fRmx');if(e)e.value='';renderBrowse();}});
    if(gv('fAv'))chips.push({l:'&#9201; '+gv('fAv'),x:function(){var e=document.getElementById('fAv');if(e)e.value='';renderBrowse();}});
    fRT.forEach(function(v){chips.push({l:v,x:function(){togCk('fRT',v);}});});
    fRB.forEach(function(v){chips.push({l:v+' BHK',x:function(){togCk('fRB',v);}});});
    fRF.forEach(function(v){chips.push({l:v,x:function(){togCk('fRF',v);}});});
    fRA.forEach(function(v){chips.push({l:v,x:function(){togAm('fRA',v);}});});
  } else {
    if(gv('fBCity'))chips.push({l:'&#128205; '+gv('fBCity'),x:function(){var e=document.getElementById('fBCity');if(e)e.value='';renderBrowse();}});
    if(gv('fBmn'))chips.push({l:fmtPriceHTML(Number(gv('fBmn')))+'+ min',x:function(){var e=document.getElementById('fBmn');if(e)e.value='';renderBrowse();}});
    if(gv('fBmx'))chips.push({l:'&#8804;'+fmtPriceHTML(Number(gv('fBmx'))),x:function(){var e=document.getElementById('fBmx');if(e)e.value='';renderBrowse();}});
    if(gv('fAmn'))chips.push({l:gv('fAmn')+'+ sq.ft',x:function(){var e=document.getElementById('fAmn');if(e)e.value='';renderBrowse();}});
    fBT.forEach(function(v){chips.push({l:v,x:function(){togCk('fBT',v);}});});
    fBB.forEach(function(v){chips.push({l:v+' BHK',x:function(){togCk('fBB',v);}});});
    fBF.forEach(function(v){chips.push({l:v,x:function(){togCk('fBF',v);}});});
    fBPo.forEach(function(v){chips.push({l:v,x:function(){togCk('fBPo',v);}});});
    fBST.forEach(function(v){chips.push({l:v,x:function(){togCk('fBST',v);}});});
    fBFc.forEach(function(v){chips.push({l:'&#8679; '+v,x:function(){togCk('fBFc',v);}});});
    fBFl.forEach(function(v){chips.push({l:'Floor: '+v,x:function(){togCk('fBFl',v);}});});
    fBA.forEach(function(v){chips.push({l:v,x:function(){togAm('fBA',v);}});});
    if(fRer)chips.push({l:'RERA &#10003;',x:function(){fRer=false;bldF();renderBrowse();}});
  }
  if(fVer)chips.push({l:'&#10003; Verified',x:function(){fVer=false;bldF();renderBrowse();}});
  window._chips=chips;
  var ac=document.getElementById('activeChips');
  if(ac){
    if(chips.length){
      ac.style.display='flex';
      var html=chips.map(function(c,i){return '<button class="chip" onclick="if(window._chips&&window._chips['+i+'])window._chips['+i+'].x()">'+c.l+' &#10005;</button>';}).join('');
      if(chips.length>1)html+='<button class="chip chip-clear-all" onclick="clearAllF()">Clear All &#10005;</button>';
      ac.innerHTML=html;
    } else {ac.style.display='none';}
  }
}

// ══ FAVORITES ══
async function togFav(id,btn){
  if(!cu){openM('authM');return;}
  var idx=favs.indexOf(id);
  if(idx>=0){
    await sb.from('favorites').delete().eq('user_id',cu.id).eq('listing_id',id);
    favs.splice(idx,1);
  }else{
    await sb.from('favorites').insert({user_id:cu.id,listing_id:id});
    favs.push(id);
  }
  if(btn)btn.style.color=favs.indexOf(id)>=0?'#d9534f':'#aaa';
  await renderBrowse();
}

// ══ VIEW DETAIL ══
async function viewL(id){
  // Show loading in detail modal
  var vTit=document.getElementById('vTit');
  var vCnt=document.getElementById('vCnt');
  if(vTit)vTit.textContent='Loading…';
  if(vCnt)vCnt.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading property details…</span></div>';
  openM('viewM');
  // Try cache first, then direct fetch for deep links
  var l=(await gL()).find(function(x){return x.id===id;});
  if(!l){
    // Direct fetch by ID — handles deep links before cache is warm
    try{
      var {data,error}=await sb.from('listings').select('id,listing_for,title,city,locality,property_type,beds,baths,area_sqft,rent,deposit,price,sale_type,possession,rera_no,contact_phone,owner_name,agency_name,tags,amenities,verified,status,images,description,posted_at,user_id,user_role,furnishing,floor_range,facing,availability').eq('id',id).eq('status','approved').single();
      if(data&&!error)l=mapL(data);
    }catch(e){}
  }
  if(!l){
    if(vTit)vTit.textContent='Not Found';
    if(vCnt)vCnt.innerHTML='<div class="mk-error"><div class="mk-error-icon">&#128533;</div><div class="mk-error-msg">This listing may have been removed or is no longer available.</div><button class="mk-error-retry" onclick="closeM(\'viewM\')">Go Back</button></div>';
    return;
  }
  var ir=l.lf==='rent';
  document.getElementById('vTit').textContent=l.title;
  var imgH='<div style="height:160px;background:linear-gradient(135deg,var(--tl),var(--sa));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:60px;margin-bottom:14px;">&#127968;</div>';
  if(l.images&&l.images.length>0){
    var disp=cu?l.images:l.images.slice(0,2);
    window._vI=disp;window._vIdx=0;
    imgH='<div class="dv-img" id="dvImgWrap">'
      +'<img src="'+disp[0]+'" id="vImg" alt="'+escAttr(l.title)+'" style="width:100%;height:100%;object-fit:cover;"/>'
      +(disp.length>1?'<button class="arr l" onclick="_vS(-1)" aria-label="Previous photo">&#8249;</button><button class="arr r" onclick="_vS(1)" aria-label="Next photo">&#8250;</button>':'')
      +'</div>'
      +'<div class="dv-img-counter" id="vImgCounter">'+(disp.length>1?'1 / '+disp.length:'')+'</div>';
    if(!cu&&l.images.length>2){
      imgH+='<div class="lock-box"><div style="font-size:30px;">&#128274;</div>'
        +'<p>'+( l.images.length-2)+' more photo'+(l.images.length-2>1?'s':'')+' unlock after free sign-up.</p>'
        +'<button class="btn btn-sm" onclick="openM(\'authM\')">Sign Up Free — Instant</button></div>';
    }
  }
  var cntH=cu
    ?'<div class="al alg" style="margin-bottom:13px;">&#128222; <strong>'+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+'</strong> &nbsp;|&nbsp; '+esc(l.contact)+'</div>'
    :'<div class="lock-box"><div style="font-size:30px;">&#128274;</div><p>Owner name, phone and agency visible after free sign-up.</p><button class="btn" onclick="openM(\'authM\')">Sign Up Free to Unlock</button></div>';
  var tagsH=l.tags.map(function(t){return '<span class="tag">'+esc(t)+'</span>';}).join('');
  if(l.rera)tagsH+='<span class="tag tag-g">RERA &#10003;</span>';
  var amH=l.amens&&l.amens.length?'<div style="margin-bottom:13px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px;">Amenities</div><div style="display:flex;gap:6px;flex-wrap:wrap;">'+l.amens.map(function(a){return '<span style="font-size:12px;padding:4px 10px;background:var(--cr);border-radius:6px;border:1px solid var(--sa);">'+esc(a)+'</span>';}).join('')+'</div></div>':'';
  document.getElementById('vCnt').innerHTML=imgH
    +'<div class="tags-r" style="margin-bottom:12px;">'+tagsH+'</div>'
    +'<div class="info-g">'
    +'<div class="ic"><div class="ll">'+(ir?'RENT':'PRICE')+'</div><strong style="color:'+(ir?'var(--t)':'var(--g)')+';">'+(ir?'&#8377;'+l.rent.toLocaleString('en-IN')+'/mo':fmtPriceHTML(l.price))+'</strong></div>'
    +(ir?'<div class="ic"><div class="ll">DEPOSIT</div><strong>&#8377;'+l.dep.toLocaleString('en-IN')+'</strong></div>':'')
    +'<div class="ic"><div class="ll">TYPE</div><strong>'+esc(l.type)+' &middot; '+l.beds+'BHK &middot; '+l.baths+'B</strong></div>'
    +'<div class="ic"><div class="ll">AREA</div><strong>'+l.area+' sq.ft</strong></div>'
    +'<div class="ic"><div class="ll">FURNISHING</div><strong>'+esc(l.furnish||'—')+'</strong></div>'
    +'<div class="ic"><div class="ll">FLOOR</div><strong>'+esc(l.floor||'—')+'</strong></div>'
    +'<div class="ic"><div class="ll">FACING</div><strong>'+esc(l.facing||'—')+'</strong></div>'
    +(ir?'<div class="ic"><div class="ll">AVAILABILITY</div><strong>'+esc(l.avail||'—')+'</strong></div>':'')
    +(!ir?'<div class="ic"><div class="ll">SALE TYPE</div><strong>'+esc(l.stype||'—')+'</strong></div>':'')
    +(!ir?'<div class="ic"><div class="ll">POSSESSION</div><strong>'+esc(l.poss||'—')+'</strong></div>':'')
    +(!ir&&l.rera?'<div class="ic" style="grid-column:1/-1;"><div class="ll">RERA NO.</div><strong style="color:var(--gr);">'+esc(l.rera)+'</strong></div>':'')
    +'</div>'
    +amH
    +'<p style="font-size:13px;line-height:1.75;margin-bottom:13px;">'+esc(l.desc)+'</p>'
    +'<div class="listing-map-wrap" id="listingMapWrap" style="display:none;"><h4>&#128205; Location</h4><div class="listing-map" id="listingMap"></div></div>'
    +cntH
    +'<button class="btn btn-bl" onclick="closeM(\'viewM\');oCnt('+l.id+')">&#128222; '+(cu?'Contact Directly':'Send Inquiry')+'</button>'
    +'<div style="display:flex;gap:8px;margin-top:10px;">'
    +'<button onclick="shareWhatsApp('+l.id+')" style="flex:1;padding:11px;background:#25D366;color:#fff;border:none;border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;">&#128172; Share on WhatsApp</button>'
    +'<button onclick="copyListingLink('+l.id+')" style="flex:1;padding:11px;background:var(--cr);color:var(--ink);border:1.5px solid var(--sa);border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;">&#128279; Copy Link</button>'
    +'</div>'
    +'<button onclick="openReport('+l.id+')" style="width:100%;margin-top:8px;padding:11px;background:transparent;border:1.5px solid #ffcccc;color:var(--red);border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;transition:background .18s;" onmouseover="this.style.background=\'#fff5f5\'" onmouseout="this.style.background=\'transparent\'">&#128681; Report Discrimination or Unfair Treatment</button>';
  openM('viewM');
  // Set URL hash for shareable deep link
  if(window.history.replaceState)window.history.replaceState(null,null,'#listing/'+id);
  // Init touch gestures on the image gallery
  _initGalleryTouch();
  // Show map for this listing's location
  showListingMap(l.city,l.loc,l.title);
}
window._vS=function(d){
  var len=window._vI.length;window._vIdx=(window._vIdx+d+len)%len;
  var img=document.getElementById('vImg');if(img)img.src=window._vI[window._vIdx];
  _applyZoom(1,50,50);
  var ctr=document.getElementById('vImgCounter');if(ctr&&len>1)ctr.textContent=(window._vIdx+1)+' / '+len;
};

// ══ TOUCH SWIPE + ZOOM ══
// Handles:
// - Single-finger horizontal swipe to navigate (mobile)
// - Two-finger pinch to zoom (mobile)
// - Mouse wheel to zoom at cursor position (desktop)
// - Double-click/tap to zoom at click point
// - Mouse drag to pan when zoomed (desktop)

var _touchState={startX:0,startY:0,startDist:0,swiping:false};
window._vZoom=1;
var _panState={dragging:false,startX:0,startY:0,originX:50,originY:50};

function _initGalleryTouch(){
  var wrap=document.getElementById('dvImgWrap');
  if(!wrap)return;
  // Remove old listeners
  wrap.removeEventListener('touchstart',_onTouchStart);
  wrap.removeEventListener('touchmove',_onTouchMove);
  wrap.removeEventListener('touchend',_onTouchEnd);
  wrap.removeEventListener('dblclick',_onDblTap);
  wrap.removeEventListener('wheel',_onWheel);
  wrap.removeEventListener('mousedown',_onMouseDown);
  wrap.removeEventListener('mousemove',_onMouseMove);
  wrap.removeEventListener('mouseup',_onMouseUp);
  wrap.removeEventListener('mouseleave',_onMouseUp);
  // Add listeners
  wrap.addEventListener('touchstart',_onTouchStart,{passive:false});
  wrap.addEventListener('touchmove',_onTouchMove,{passive:false});
  wrap.addEventListener('touchend',_onTouchEnd,{passive:true});
  wrap.addEventListener('dblclick',_onDblTap);
  wrap.addEventListener('wheel',_onWheel,{passive:false});
  wrap.addEventListener('mousedown',_onMouseDown);
  wrap.addEventListener('mousemove',_onMouseMove);
  wrap.addEventListener('mouseup',_onMouseUp);
  wrap.addEventListener('mouseleave',_onMouseUp);
}

// Get click/touch position as percentage of the image container
function _getOriginPct(e,wrap){
  var rect=wrap.getBoundingClientRect();
  var clientX=e.clientX||((e.touches&&e.touches[0])?e.touches[0].clientX:rect.left+rect.width/2);
  var clientY=e.clientY||((e.touches&&e.touches[0])?e.touches[0].clientY:rect.top+rect.height/2);
  return{
    x:Math.max(0,Math.min(100,((clientX-rect.left)/rect.width)*100)),
    y:Math.max(0,Math.min(100,((clientY-rect.top)/rect.height)*100))
  };
}

function _applyZoom(zoom,originX,originY){
  var img=document.getElementById('vImg');
  if(!img)return;
  window._vZoom=zoom;
  _panState.originX=originX;
  _panState.originY=originY;
  if(zoom<=1){
    window._vZoom=1;
    img.style.transformOrigin='center center';
    img.style.transform='scale(1)';
    img.classList.remove('zoomed');
    img.style.cursor='zoom-in';
  } else {
    img.style.transformOrigin=originX+'% '+originY+'%';
    img.style.transform='scale('+zoom+')';
    img.classList.add('zoomed');
    img.style.cursor='grab';
  }
}

// ── MOUSE WHEEL ZOOM (desktop) ──
function _onWheel(e){
  e.preventDefault();
  var wrap=document.getElementById('dvImgWrap');
  if(!wrap)return;
  var origin=_getOriginPct(e,wrap);
  var delta=e.deltaY>0?-0.3:0.3;
  var newZoom=Math.max(1,Math.min(4,window._vZoom+delta));
  _applyZoom(newZoom,origin.x,origin.y);
}

// ── MOUSE DRAG TO PAN (desktop, when zoomed) ──
function _onMouseDown(e){
  if(window._vZoom<=1)return;
  e.preventDefault();
  _panState.dragging=true;
  _panState.startX=e.clientX;
  _panState.startY=e.clientY;
  var img=document.getElementById('vImg');
  if(img)img.style.cursor='grabbing';
}
function _onMouseMove(e){
  if(!_panState.dragging||window._vZoom<=1)return;
  var wrap=document.getElementById('dvImgWrap');
  if(!wrap)return;
  var rect=wrap.getBoundingClientRect();
  // Convert pixel movement to percentage shift (inverted — drag right = origin moves left)
  var dx=(e.clientX-_panState.startX)/rect.width*100;
  var dy=(e.clientY-_panState.startY)/rect.height*100;
  var sensitivity=1.5/window._vZoom;
  var newX=Math.max(0,Math.min(100,_panState.originX-dx*sensitivity));
  var newY=Math.max(0,Math.min(100,_panState.originY-dy*sensitivity));
  var img=document.getElementById('vImg');
  if(img){
    img.style.transformOrigin=newX+'% '+newY+'%';
  }
  _panState.startX=e.clientX;
  _panState.startY=e.clientY;
  _panState.originX=newX;
  _panState.originY=newY;
}
function _onMouseUp(){
  _panState.dragging=false;
  var img=document.getElementById('vImg');
  if(img&&window._vZoom>1)img.style.cursor='grab';
}

// ── DOUBLE-CLICK/TAP ZOOM ──
function _onDblTap(e){
  e.preventDefault();
  var wrap=document.getElementById('dvImgWrap');
  if(!wrap)return;
  var origin=_getOriginPct(e,wrap);
  if(window._vZoom>1){
    _applyZoom(1,50,50);
  } else {
    _applyZoom(2.5,origin.x,origin.y);
  }
}

// ── TOUCH HELPERS ──
function _getTouchDist(touches){
  var dx=touches[0].clientX-touches[1].clientX;
  var dy=touches[0].clientY-touches[1].clientY;
  return Math.sqrt(dx*dx+dy*dy);
}

function _onTouchStart(e){
  if(e.touches.length===1){
    _touchState.startX=e.touches[0].clientX;
    _touchState.startY=e.touches[0].clientY;
    _touchState.swiping=true;
  }
  if(e.touches.length===2){
    _touchState.swiping=false;
    _touchState.startDist=_getTouchDist(e.touches);
    e.preventDefault();
  }
}

function _onTouchMove(e){
  if(e.touches.length===2){
    e.preventDefault();
    var wrap=document.getElementById('dvImgWrap');
    var dist=_getTouchDist(e.touches);
    var scale=dist/_touchState.startDist;
    var newZoom=Math.max(1,Math.min(4,window._vZoom*scale));
    // Pinch origin = midpoint of two fingers
    if(wrap){
      var rect=wrap.getBoundingClientRect();
      var mx=((e.touches[0].clientX+e.touches[1].clientX)/2-rect.left)/rect.width*100;
      var my=((e.touches[0].clientY+e.touches[1].clientY)/2-rect.top)/rect.height*100;
      var img=document.getElementById('vImg');
      if(img){
        img.style.transformOrigin=mx+'% '+my+'%';
        img.style.transform='scale('+newZoom+')';
      }
    }
  }
  if(e.touches.length===1&&_touchState.swiping&&window._vZoom<=1){
    var dx=e.touches[0].clientX-_touchState.startX;
    var dy=e.touches[0].clientY-_touchState.startY;
    if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>10){
      e.preventDefault();
    }
  }
}

function _onTouchEnd(e){
  if(e.changedTouches.length===1&&_touchState.swiping&&window._vZoom<=1){
    var dx=e.changedTouches[0].clientX-_touchState.startX;
    var dy=e.changedTouches[0].clientY-_touchState.startY;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){
      if(dx<0)_vS(1);
      else _vS(-1);
    }
  }
  if(_touchState.startDist>0){
    var img=document.getElementById('vImg');
    if(img){
      var current=img.style.transform.match(/scale\(([\d.]+)\)/);
      window._vZoom=current?parseFloat(current[1]):1;
      if(window._vZoom<1.1){_applyZoom(1,50,50);}
      else{img.classList.add('zoomed');}
    }
    _touchState.startDist=0;
  }
  _touchState.swiping=false;
}

// ══ LISTING MAP (Leaflet + Nominatim) ══
// Geocodes city+locality to lat/lng using OpenStreetMap's free Nominatim API,
// then renders a Leaflet map with a marker. No API key needed.
var _listingMap=null;

async function showListingMap(city,locality,title){
  var wrap=document.getElementById('listingMapWrap');
  var mapEl=document.getElementById('listingMap');
  if(!wrap||!mapEl)return;
  // Don't show map if no city
  if(!city){wrap.style.display='none';return;}
  // Build geocoding query — locality + city + India for best results
  var query=((locality?locality+', ':'')+city+', India').trim();
  try{
    var resp=await fetch('https://nominatim.openstreetmap.org/search?format=json&q='+encodeURIComponent(query)+'&limit=1&countrycodes=in',{
      headers:{'Accept':'application/json'}
    });
    var results=await resp.json();
    if(!results||!results.length){
      // Retry with just city if locality didn't match
      if(locality){
        resp=await fetch('https://nominatim.openstreetmap.org/search?format=json&q='+encodeURIComponent(city+', India')+'&limit=1&countrycodes=in',{
          headers:{'Accept':'application/json'}
        });
        results=await resp.json();
      }
    }
    if(!results||!results.length){wrap.style.display='none';return;}
    var lat=parseFloat(results[0].lat);
    var lng=parseFloat(results[0].lon);
    // Show the map container
    wrap.style.display='';
    // Destroy previous map instance if exists
    if(_listingMap){try{_listingMap.remove();}catch(e){}_listingMap=null;}
    // Wait for Leaflet to be available
    if(!window.L){wrap.style.display='none';return;}
    // Small delay for DOM to be ready
    setTimeout(function(){
      _listingMap=L.map('listingMap',{
        scrollWheelZoom:false,
        zoomControl:true,
        dragging:true,
        attributionControl:true
      }).setView([lat,lng],14);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
      }).addTo(_listingMap);
      // Custom marker with listing title
      L.marker([lat,lng]).addTo(_listingMap)
        .bindPopup('<strong>'+esc(title)+'</strong><br/>'+esc((locality?locality+', ':'')+city))
        .openPopup();
      // Fix Leaflet rendering issue in modals (tiles not loading fully)
      setTimeout(function(){_listingMap.invalidateSize();},300);
    },100);
  }catch(e){
    wrap.style.display='none';
  }
}

// Clean up map when modal closes
var _origCloseM=closeM;
// (closeM already handles viewM hash clearing — we piggyback map cleanup)

// ══ SHARE ══
function _listingUrl(id){
  return window.location.origin+window.location.pathname+'#listing/'+id;
}

async function shareWhatsApp(id){
  var l=(await gL()).find(function(x){return x.id===id;});
  if(!l)return;
  var ir=l.lf==='rent';
  var price=ir?'\u20B9'+l.rent.toLocaleString('en-IN')+'/mo':'\u20B9'+(l.price>=10000000?(l.price/10000000).toFixed(2)+' Cr':(l.price/100000).toFixed(2)+' L');
  var text=l.title+' \u2014 '+l.city;
  if(l.loc)text+=', '+l.loc;
  text+='\n'+price+' \u00B7 '+l.beds+' BHK \u00B7 '+(l.area?l.area+' sq.ft':'');
  text+='\n\nView on Ek Mak\u0101n: '+_listingUrl(id);
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}

function copyListingLink(id){
  var url=_listingUrl(id);
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){
      toast('Link copied to clipboard! &#128279;');
    }).catch(function(){
      _fallbackCopy(url);
    });
  } else {
    _fallbackCopy(url);
  }
}
function _fallbackCopy(text){
  var ta=document.createElement('textarea');
  ta.value=text;ta.style.position='fixed';ta.style.left='-9999px';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');toast('Link copied! &#128279;');}
  catch(e){toast('Copy failed. URL: '+text,'e');}
  document.body.removeChild(ta);
}

// ══ URL ROUTING ══
// Handles hash-based deep links: #listing/42, #browse, #dashboard, etc.
function handleHashRoute(){
  var hash=window.location.hash;
  if(!hash||hash==='#')return false;
  // Skip recovery tokens (handled by Supabase)
  if(hash.indexOf('access_token')>=0||hash.indexOf('type=recovery')>=0)return false;
  // Listing deep link: #listing/42
  var listingMatch=hash.match(/^#listing\/(\d+)$/);
  if(listingMatch){
    var lid=Number(listingMatch[1]);
    viewL(lid);
    return true;
  }
  // Page deep links: #browse, #dashboard, #lister, #admin
  var pageMatch=hash.match(/^#(home|browse|dashboard|lister|admin)$/);
  if(pageMatch){
    go(pageMatch[1]);
    return true;
  }
  return false;
}
// Listen for hash changes (back/forward navigation, manual URL entry)
window.addEventListener('hashchange',function(){handleHashRoute();});


// ══ NOTIFICATIONS ══
var _notifs=[];
var _notifOpen=false;

async function loadNotifs(){
  if(!cu)return;
  try{
    var {data,error}=await sb.from('notifications').select('id,type,title,body,link_id,read,created_at').eq('user_id',cu.id).order('created_at',{ascending:false}).limit(30);
    if(error||!data){_notifs=[];return;}
    _notifs=data;
    updateNotifBadge();
  }catch(e){_notifs=[];}
}

function updateNotifBadge(){
  var badge=document.getElementById('nNotifBadge');
  var unread=_notifs.filter(function(n){return !n.read;}).length;
  if(badge){
    if(unread>0){badge.style.display='';badge.textContent=unread>9?'9+':unread;}
    else{badge.style.display='none';}
  }
}

function toggleNotifPanel(){
  _notifOpen=!_notifOpen;
  var panel=document.getElementById('nNotifPanel');
  if(panel)panel.style.display=_notifOpen?'':'none';
  if(_notifOpen)renderNotifList();
}

function renderNotifList(){
  var list=document.getElementById('nNotifList');
  if(!list)return;
  if(!_notifs.length){
    list.innerHTML='<div style="padding:24px;text-align:center;color:var(--mu);font-size:13px;">No notifications yet</div>';
    return;
  }
  list.innerHTML=_notifs.map(function(n){
    var icon=n.type==='inquiry'?'&#128232;':n.type==='listing_approved'?'&#9989;':n.type==='listing_rejected'?'&#10060;':n.type==='report'?'&#128681;':'&#128276;';
    var bg=n.read?'':'background:rgba(18,90,81,.04);';
    var dot=n.read?'':'<div style="width:8px;height:8px;border-radius:50%;background:var(--t);flex-shrink:0;"></div>';
    var ago=_timeAgo(n.created_at);
    var click=n.link_id?'onclick="closeNotifPanel();viewL('+n.link_id+')" style="cursor:pointer;"':'';
    return '<div '+click+' style="padding:10px 16px;border-bottom:1px solid var(--cr);display:flex;gap:10px;align-items:flex-start;transition:background .15s;'+bg+'" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\''+(n.read?'':'rgba(18,90,81,.04)')+'\'">'
      +'<div style="font-size:20px;flex-shrink:0;margin-top:2px;">'+icon+'</div>'
      +'<div style="flex:1;min-width:0;">'
      +'<div style="font-size:13px;font-weight:'+(n.read?'400':'600')+';color:var(--ink);line-height:1.4;">'+esc(n.title)+'</div>'
      +'<div style="font-size:11px;color:var(--mu);margin-top:2px;">'+esc(n.body)+'</div>'
      +'<div style="font-size:10px;color:var(--mu);margin-top:4px;">'+ago+'</div>'
      +'</div>'
      +dot
      +'</div>';
  }).join('');
}

function closeNotifPanel(){
  _notifOpen=false;
  var panel=document.getElementById('nNotifPanel');
  if(panel)panel.style.display='none';
}

async function markAllNotifRead(){
  if(!cu||!_notifs.length)return;
  var unreadIds=_notifs.filter(function(n){return !n.read;}).map(function(n){return n.id;});
  if(!unreadIds.length)return;
  await sb.from('notifications').update({read:true}).in('id',unreadIds);
  _notifs.forEach(function(n){n.read=true;});
  updateNotifBadge();
  renderNotifList();
}

function _timeAgo(dateStr){
  var now=Date.now();
  var then=new Date(dateStr).getTime();
  var diff=Math.floor((now-then)/1000);
  if(diff<60)return 'Just now';
  if(diff<3600)return Math.floor(diff/60)+'m ago';
  if(diff<86400)return Math.floor(diff/3600)+'h ago';
  if(diff<604800)return Math.floor(diff/86400)+'d ago';
  return new Date(dateStr).toLocaleDateString('en-IN',{day:'numeric',month:'short'});
}

// Close notification panel when clicking outside
document.addEventListener('click',function(e){
  if(!_notifOpen)return;
  var wrap=document.getElementById('nNotifWrap');
  if(wrap&&!wrap.contains(e.target))closeNotifPanel();
});

// ══ CONTACT ══
async function oCnt(id){
  var l=(await gL()).find(function(x){return x.id===id;});if(!l)return;
  if(!cu){openM('authM');return;}
  actL=l;
  var ir=l.lf==='rent';
  var ci=document.getElementById('cInfo');
  if(ci)ci.innerHTML='<strong>'+esc(l.title)+'</strong><br/>'+esc(l.loc)+', '+esc(l.city)+' &middot; '+(ir?'&#8377;'+l.rent.toLocaleString('en-IN')+'/mo':fmtPriceHTML(l.price));
  var cc=document.getElementById('cCnt');if(cc)cc.textContent='Direct: '+esc(l.contact)+' · '+esc(l.owner)+(l.agency?' · '+esc(l.agency):'');
  var cn=document.getElementById('cNm'),cp=document.getElementById('cPh'),ce=document.getElementById('cEm');
  if(cn)cn.value=cu.name||'';if(cp)cp.value=cu.phone||'';if(ce)ce.value=cu.email||'';
  openM('cntM');
}
async function doInq(){
  var nm=document.getElementById('cNm').value.trim();
  var ph=document.getElementById('cPh').value.trim();
  var em=document.getElementById('cEm').value.trim();
  var msg=document.getElementById('cMsg').value.trim();
  if(!nm||!ph){toast('Please enter your name and phone.','e');return;}
  // Light email validation — format only (if provided)
  if(em&&!isEmailFormatValid(em)){toast('Please enter a valid email address.','e');return;}
  // Prevent duplicate inquiries — one per user per listing
  if(cu&&actL){
    var existing=(await gInq()).find(function(i){return i.uid===cu.id&&i.listingId===actL.id;});
    if(existing){
      closeM('cntM');
      toast('You have already sent an inquiry for this property on '+existing.sentAt+'.','e');
      return;
    }
  }
  var ok=await createInquiry({id:Date.now(),listingId:actL.id,listingTitle:actL.title,listingCity:actL.city,lf:actL.lf,contact:actL.contact,name:nm,phone:ph,email:em,message:msg,uid:cu?cu.id:null,sentAt:new Date().toISOString().split('T')[0]});
  if(!ok)return;
  closeM('cntM');var cm=document.getElementById('cMsg');if(cm)cm.value='';
  toast('Inquiry sent! The owner will contact you. &#128222;');
}

// ══ IMAGE UPLOAD ══
function dzOv(e){e.preventDefault();var d=document.getElementById('dz');if(d)d.classList.add('drag');}
function dzLv(){var d=document.getElementById('dz');if(d)d.classList.remove('drag');}
function dzDp(e){e.preventDefault();dzLv();hImgsArr(Array.from(e.dataTransfer.files));}
function hImgs(e){hImgsArr(Array.from(e.target.files));e.target.value='';}
function hImgsArr(files){
  var toProcess=files.slice(0,6-upImgs.length);
  if(!toProcess.length)return;
  toProcess.forEach(function(f){
    if(!f.type.startsWith('image/')){toast('Images only.','e');return;}
    if(f.size>10*1024*1024){toast('Max 10MB per image.','e');return;}
    compressImage(f).then(function(dataUrl){
      upImgs.push(dataUrl);
      rPv();
    }).catch(function(err){
      toast('Failed to process image: '+(err.message||'unknown error'),'e');
    });
  });
}

// ══ IMAGE COMPRESSION ══
// Resizes to max 1200px on longest side, converts to WebP (JPEG fallback),
// targets ~200KB. Uses Canvas API — no external libraries needed.
var IMG_MAX_DIM=1200;
var IMG_QUALITY=0.82;
var IMG_THUMB_DIM=400;

function compressImage(file){
  return new Promise(function(resolve,reject){
    var img=new Image();
    img.onload=function(){
      try{
        // Calculate new dimensions (maintain aspect ratio)
        var w=img.width,h=img.height;
        if(w>IMG_MAX_DIM||h>IMG_MAX_DIM){
          if(w>h){h=Math.round(h*(IMG_MAX_DIM/w));w=IMG_MAX_DIM;}
          else{w=Math.round(w*(IMG_MAX_DIM/h));h=IMG_MAX_DIM;}
        }
        // Draw to canvas
        var canvas=document.createElement('canvas');
        canvas.width=w;canvas.height=h;
        var ctx=canvas.getContext('2d');
        ctx.drawImage(img,0,0,w,h);
        // Try WebP first, fallback to JPEG
        var format='image/webp';
        var testUrl=canvas.toDataURL('image/webp',0.5);
        if(!testUrl||testUrl.indexOf('data:image/webp')<0)format='image/jpeg';
        // Convert to data URL at target quality
        var result=canvas.toDataURL(format,IMG_QUALITY);
        // If still too large (>500KB), reduce quality iteratively
        var q=IMG_QUALITY;
        while(result.length>700000&&q>0.3){
          q-=0.1;
          result=canvas.toDataURL(format,q);
        }
        URL.revokeObjectURL(img.src);
        resolve(result);
      }catch(e){reject(e);}
    };
    img.onerror=function(){reject(new Error('Could not load image'));};
    img.src=URL.createObjectURL(file);
  });
}

// Generate a smaller thumbnail (used for card views if needed in future)
function compressThumb(file){
  return new Promise(function(resolve,reject){
    var img=new Image();
    img.onload=function(){
      try{
        var w=img.width,h=img.height;
        if(w>IMG_THUMB_DIM||h>IMG_THUMB_DIM){
          if(w>h){h=Math.round(h*(IMG_THUMB_DIM/w));w=IMG_THUMB_DIM;}
          else{w=Math.round(w*(IMG_THUMB_DIM/h));h=IMG_THUMB_DIM;}
        }
        var canvas=document.createElement('canvas');
        canvas.width=w;canvas.height=h;
        var ctx=canvas.getContext('2d');
        ctx.drawImage(img,0,0,w,h);
        var format='image/webp';
        var testUrl=canvas.toDataURL('image/webp',0.5);
        if(!testUrl||testUrl.indexOf('data:image/webp')<0)format='image/jpeg';
        var result=canvas.toDataURL(format,0.65);
        URL.revokeObjectURL(img.src);
        resolve(result);
      }catch(e){reject(e);}
    };
    img.onerror=function(){reject(new Error('Could not load image'));};
    img.src=URL.createObjectURL(file);
  });
}

// ══ SUPABASE STORAGE UPLOAD ══
// Converts a base64 data URL to a Blob, uploads to Supabase Storage,
// and returns the public URL. Used in doSub() before saving the listing.
function dataUrlToBlob(dataUrl){
  var parts=dataUrl.split(',');
  var mime=parts[0].match(/:(.*?);/)[1];
  var raw=atob(parts[1]);
  var arr=new Uint8Array(raw.length);
  for(var i=0;i<raw.length;i++)arr[i]=raw.charCodeAt(i);
  return new Blob([arr],{type:mime});
}

async function uploadListingImages(images){
  if(!images||!images.length||!cu)return images;
  var uploaded=[];
  for(var i=0;i<images.length;i++){
    var img=images[i];
    // If it's already a URL (from edit mode), keep it as-is
    if(img.indexOf('data:')!==0){uploaded.push(img);continue;}
    try{
      var blob=dataUrlToBlob(img);
      var ext=blob.type==='image/webp'?'webp':blob.type==='image/png'?'png':'jpg';
      var path=cu.id+'/'+Date.now()+'_'+i+'.'+ext;
      var {data,error}=await sb.storage.from('listing-images').upload(path,blob,{
        cacheControl:'3600',
        contentType:blob.type,
        upsert:false
      });
      if(error){
        toast('Image '+(i+1)+' upload failed: '+error.message,'e');
        // Fall back to keeping the base64 (works but not ideal)
        uploaded.push(img);
        continue;
      }
      // Get public URL
      var {data:urlData}=sb.storage.from('listing-images').getPublicUrl(path);
      uploaded.push(urlData.publicUrl);
    }catch(e){
      toast('Image '+(i+1)+' upload failed.','e');
      uploaded.push(img);
    }
  }
  return uploaded;
}

function rPv(){
  var pv=document.getElementById('iPv');if(!pv)return;
  pv.innerHTML=upImgs.map(function(s,i){
    return '<div class="ip"><img src="'+s+'" alt="Uploaded photo '+(i+1)+'"/><button onclick="rmImg('+i+')" aria-label="Remove photo '+(i+1)+'">&#10005;</button>'+(i<2?'<div class="free-lbl">Free</div>':'')+'</div>';
  }).join('');
}
function rmImg(i){upImgs.splice(i,1);rPv();}

// ══ LISTING FORM ══
function setLM(m){
  lMode=m;
  var lr=document.getElementById('lmR'),lb=document.getElementById('lmB');
  if(lr)lr.classList.toggle('on',m==='rent');
  if(lb)lb.classList.toggle('on',m==='buy');
  ['lRW','lDW','lAvW'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=m==='rent'?'':'none';});
  ['lPrW','lStW','lPoW','lReW'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=m==='buy'?'':'none';});
}
function bldLA(){
  var el=document.getElementById('lAm');if(!el)return;
  el.innerHTML=AMENS.map(function(a){return '<div class="ac'+(selAmens.indexOf(a)>=0?' on':'')+'" onclick="togLA(\''+a.replace(/'/g,"\\'")+'\')">'+(a)+'</div>';}).join('');
}
function togLA(a){var i=selAmens.indexOf(a);if(i>=0)selAmens.splice(i,1);else selAmens.push(a);bldLA();}
function bldLT(){
  var el=document.getElementById('lTgs');if(!el)return;
  el.innerHTML=ATAGS.map(function(t){return '<div class="tg'+(selTags.indexOf(t)>=0?' on':'')+'" onclick="togLT(\''+t.replace(/'/g,"\\'")+'\')">'+(t)+'</div>';}).join('');
}
function togLT(t){var i=selTags.indexOf(t);if(i>=0)selTags.splice(i,1);else selTags.push(t);bldLT();}

// ══ LISTING EDIT ══
// Opens the addM modal pre-filled with existing listing data for editing.
async function editListing(id){
  var l=(await gL()).find(function(x){return x.id===id;});
  if(!l){toast('Listing not found.','e');return;}
  _editingListingId=id;
  // Set modal title and button text for edit mode
  var mt=document.getElementById('addMTitle');if(mt)mt.textContent='Edit Listing';
  var mb=document.getElementById('addMBtn');if(mb)mb.textContent='Save Changes';
  // Set listing mode (rent/buy)
  setLM(l.lf);
  // Pre-fill all fields
  var setVal=function(fid,v){var e=document.getElementById(fid);if(e)e.value=v||'';};
  setVal('lTl',l.title);
  setVal('lCy',l.city);
  setVal('lLo',l.loc);
  setVal('lAr',l.area||'');
  setVal('lRt',l.rent||'');
  setVal('lDp',l.dep||'');
  setVal('lPr',l.price||'');
  setVal('lRe',l.rera);
  setVal('lOw',l.owner);
  setVal('lCt',l.contact);
  setVal('lDs',l.desc);
  setVal('lFl',l.floor);
  setVal('lFc',l.facing);
  setVal('lFn',l.furnish);
  setVal('lAv',l.avail);
  // Set dropdowns
  var tp=document.getElementById('lTp');if(tp)tp.value=l.type||'Apartment';
  var bd=document.getElementById('lBd');if(bd)bd.value=l.beds||'2';
  var bt=document.getElementById('lBt');if(bt)bt.value=l.baths||'1';
  var po=document.getElementById('lPo');if(po)po.value=l.poss||'';
  var stEl=document.querySelector('#lStW select#lSt');if(stEl)stEl.value=l.stype||'';
  // Pre-fill tags and amenities
  selTags=l.tags?l.tags.slice():[];
  selAmens=l.amens?l.amens.slice():[];
  // Rebuild tag/amen chip UIs
  if(typeof mkTags==='function')mkTags('selT',selTags);
  if(typeof mkAmen==='function'){mkAmen('fRA',selAmens);mkAmen('fBA',selAmens);}
  // Pre-fill images
  upImgs=l.images?l.images.slice():[];
  if(typeof rPv==='function')rPv();
  // Open the modal
  openM('addM');
}

// Reset addM modal back to "new listing" mode
function resetAddModal(){
  _editingListingId=null;
  var mt=document.getElementById('addMTitle');if(mt)mt.textContent='New Property Listing';
  var mb=document.getElementById('addMBtn');if(mb)mb.textContent='Submit for Review';
}

async function doSub(){
  var getVal=function(id){var e=document.getElementById(id);return e&&e.value?String(e.value).trim():'';};
  var title=getVal('lTl');
  var city=getVal('lCy');
  var owner=getVal('lOw');
  var contact=getVal('lCt');
  var rv=Number(getVal('lRt'))||0;
  var pv=Number(getVal('lPr'))||0;
  var le=document.getElementById('lErr');
  var missing=[];
  if(!title)missing.push('Property Title');
  if(!city)missing.push('City');
  if(!owner)missing.push('Owner / Broker Name');
  if(!contact)missing.push('Contact Number');
  if(missing.length){if(le){le.style.display='';le.textContent='Please fill: '+missing.join(', ')+'.';}return;}
  if(contact.replace(/\D/g,'').length<10){if(le){le.style.display='';le.textContent='Please enter a valid 10-digit contact number.';}return;}
  if(lMode==='rent'&&!rv){if(le){le.style.display='';le.textContent='Please enter monthly rent.';}return;}
  if(lMode==='buy'&&!pv){if(le){le.style.display='';le.textContent='Please enter sale price.';}return;}
  if(le)le.style.display='none';
  var saleTypeEl=document.querySelector('#lStW select#lSt');
  var listingData={lf:lMode,title:title,city:city,
    loc:getVal('lLo'),
    type:getVal('lTp')||'Apartment',
    beds:getVal('lBd')||'2',
    baths:Number(getVal('lBt'))||1,
    area:Number(getVal('lAr'))||0,
    rent:rv,dep:Number(getVal('lDp'))||0,price:pv,
    stype:saleTypeEl?saleTypeEl.value:'',
    poss:getVal('lPo'),
    rera:getVal('lRe'),
    floor:getVal('lFl'),
    facing:getVal('lFc'),
    furnish:getVal('lFn'),
    avail:lMode==='rent'?getVal('lAv'):'',
    owner:owner,contact:contact,agency:cu?cu.agency||'':'',
    desc:getVal('lDs'),
    amens:selAmens.slice(),tags:selTags.slice(),
    images:upImgs.slice()
  };

  // Upload images to Supabase Storage (converts base64 → public URLs)
  var uploadBtn=document.getElementById('addMBtn');
  var origBtnTxt=uploadBtn?uploadBtn.textContent:'';
  if(uploadBtn&&listingData.images.some(function(img){return img.indexOf('data:')===0;})){
    uploadBtn.disabled=true;uploadBtn.textContent='Uploading images…';
  }
  listingData.images=await uploadListingImages(listingData.images);
  if(uploadBtn){uploadBtn.disabled=false;uploadBtn.textContent=origBtnTxt;}

  if(_editingListingId){
    // ── EDIT MODE: update existing listing, re-set to pending for re-approval ──
    var row=unmapL(listingData);
    row.status='pending';
    row.verified=false;
    var {error}=await sb.from('listings').update(row).eq('id',_editingListingId);
    if(error){toast('Failed to update listing: '+error.message,'e');return;}
    _clr('l');
    closeM('addM');resetAddModal();
    ['lTl','lCy','lLo','lAr','lRt','lDp','lPr','lRe','lOw','lCt','lDs','lFl','lFc','lFn'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
    upImgs=[];selTags=[];selAmens=[];
    toast('Listing updated! It will be re-reviewed by admin. &#10003;');
    if(cu&&(cu.role==='broker'||cu.role==='owner'))await renderLister();
  } else {
    // ── CREATE MODE: new listing ──
    listingData.id=Date.now();
    listingData.verified=false;
    listingData.status='pending';
    listingData.postedAt=new Date().toISOString().split('T')[0];
    listingData.uid=cu?cu.id:null;
    listingData.urole=cu?cu.role:'owner';
    await createListing(listingData);
    closeM('addM');resetAddModal();
    ['lTl','lCy','lLo','lAr','lRt','lDp','lPr','lRe','lOw','lCt','lDs','lFl','lFc','lFn'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});var lBdSel=document.getElementById('lBd');if(lBdSel)lBdSel.selectedIndex=1;var lBtSel=document.getElementById('lBt');if(lBtSel)lBtSel.selectedIndex=0;
    upImgs=[];selTags=[];selAmens=[];
    toast('Submitted! Admin reviews within 24 hrs. &#10003;');
    if(cu&&(cu.role==='broker'||cu.role==='owner'))await renderLister();
  }
}

// ══ USER DASH ══
async function renderDash(){
  if(!cu)return;
  var dg=document.getElementById('dG');if(dg)dg.textContent=cu.name+' · '+esc(cu.email)+(cu.phone?' · '+esc(cu.phone):'');
  // Show loading while data fetches
  var ds=document.getElementById('dSt');
  var di=document.getElementById('dInq');
  if(ds)ds.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading your account…</span></div>';
  if(di)di.innerHTML='';
  var inqs=(await gInq()).filter(function(i){return i.uid===cu.id;});
  // Sort newest-first
  inqs.sort(function(a,b){return (b.sentAt||'').localeCompare(a.sentAt||'');});
  var ls=await gL();
  var saved=ls.filter(function(l){return favs.indexOf(l.id)>=0&&l.status==='approved';});
  var ds=document.getElementById('dSt');
  if(ds)ds.innerHTML='<div class="card" style="text-align:center;background:var(--wh);border-radius:12px;padding:18px;border:1px solid var(--sa);"><div style="font-size:24px;">&#128232;</div><div style="font-family:\'Playfair Display\',serif;font-size:30px;font-weight:700;color:var(--t);">'+inqs.length+'</div><div style="font-size:12px;color:var(--mu);">Inquiries Sent</div></div><div class="card" style="text-align:center;background:var(--wh);border-radius:12px;padding:18px;border:1px solid var(--sa);"><div style="font-size:24px;">&#9829;</div><div style="font-family:\'Playfair Display\',serif;font-size:30px;font-weight:700;color:var(--t);">'+favs.length+'</div><div style="font-size:12px;color:var(--mu);">Saved</div></div>';
  var di=document.getElementById('dInq');
  if(di)di.innerHTML=inqs.length?inqs.map(function(i){
    var listingExists=ls.some(function(l){return l.id===i.listingId;});
    var icon=i.lf==='buy'?'&#128273;':'&#127968;';
    var typeLbl=i.lf==='buy'?'For Sale':'For Rent';
    var pillClass=i.lf==='buy'?'pill-y':'pill-b';
    var rowStyle=listingExists?'cursor:pointer;':'';
    var clickHandler=listingExists?'onclick="viewL('+i.listingId+')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'var(--wh)\'"':'';
    var titleHTML=listingExists
      ?'<strong style="color:var(--t);">'+esc(i.listingTitle)+' &#8599;</strong>'
      :'<strong style="color:var(--mu);text-decoration:line-through;">'+esc(i.listingTitle)+'</strong> <span style="font-size:10px;color:var(--red);font-weight:700;">(REMOVED)</span>';
    var actionBtn=listingExists
      ?'<button class="btn btn-sm btn-o" onclick="event.stopPropagation();viewL('+i.listingId+')">View Property</button>'
      :'<span style="font-size:11px;color:var(--mu);padding:6px 10px;">No longer listed</span>';
    return '<div class="li" style="'+rowStyle+'" '+clickHandler+'>'
      +'<div style="font-size:28px;">'+icon+'</div>'
      +'<div class="li-in">'+titleHTML
      +'<span>'+esc(i.listingCity||'')+' &middot; '+typeLbl+' &middot; Sent '+i.sentAt+'</span>'
      +'</div>'
      +'<span class="pill '+pillClass+'">'+typeLbl+'</span>'
      +'<div class="li-ac" onclick="event.stopPropagation()">'+actionBtn+'</div>'
      +'</div>';
  }).join(''):'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No inquiries yet. <span onclick="setBMode(\'rent\');go(\'browse\')" style="color:var(--t);cursor:pointer;font-weight:700;">Browse rentals</span> or <span onclick="setBMode(\'buy\');go(\'browse\')" style="color:var(--g);cursor:pointer;font-weight:700;">properties for sale</span> to get started.</div>';
  var dsav=document.getElementById('dSav');
  if(dsav)dsav.innerHTML=saved.length?'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:22px 0 12px;">Saved Properties</h2><div class="g3">'+saved.map(pCard).join('')+'</div>':'';
}

// ══ LISTER ══
async function renderLister(){
  if(!cu||(cu.role!=='broker'&&cu.role!=='owner'))return;
  var ib=cu.role==='broker';
  var lt=document.getElementById('lTit'),lb=document.getElementById('lBdg'),lg=document.getElementById('lGrt');
  if(lt)lt.textContent=ib?'Broker Portal':'Owner Portal';
  if(lb)lb.innerHTML=ib?'<span class="brk-b">&#127970; Broker</span>':'<span class="own-b">&#127969; Owner</span>';
  var pts=[cu.email];
  if(cu.phone)pts.unshift(cu.phone);
  if(cu.agency)pts.unshift((ib?'&#127970; ':'&#127969; ')+cu.agency);
  if(cu.lic)pts.push('RERA: '+cu.lic);
  if(lg)lg.innerHTML=pts.join(' &nbsp;&middot;&nbsp; ');
  // Show loading
  var lSt=document.getElementById('lStats');
  if(lSt)lSt.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading your listings…</span></div>';
  var myL=(await gL()).filter(function(l){return l.uid===cu.id;});
  var ap=myL.filter(function(l){return l.status==='approved';});
  var pn=myL.filter(function(l){return l.status==='pending';});
  var myLIds=myL.map(function(l){return l.id;});
  var allInqs=await gInq();
  // Pre-compute leads-per-listing map so the total matches the sum of per-listing
  var leadsByListing={};
  allInqs.forEach(function(i){
    if(myLIds.indexOf(i.listingId)>=0){
      leadsByListing[i.listingId]=(leadsByListing[i.listingId]||0)+1;
    }
  });
  var totalLeads=Object.keys(leadsByListing).reduce(function(s,k){return s+leadsByListing[k];},0);
  var st=document.getElementById('lStats');
  if(st)st.innerHTML=['<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;">&#127968;</div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--t);">'+myL.length+'</div><div style="font-size:12px;color:var(--mu);">Listed</div></div>',
    '<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;">&#10003;</div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--gr);">'+ap.length+'</div><div style="font-size:12px;color:var(--mu);">Approved</div></div>',
    '<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;">&#9201;</div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--g);">'+pn.length+'</div><div style="font-size:12px;color:var(--mu);">Pending</div></div>',
    '<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;">&#128222;</div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--pu);">'+totalLeads+'</div><div style="font-size:12px;color:var(--mu);">Leads</div></div>'].join('');
  var ll=document.getElementById('lLst');
  if(ll)ll.innerHTML=myL.length?myL.map(function(l){
    var thumbH=l.images&&l.images.length?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;"/>':'<div style="font-size:28px;">'+(l.lf==='buy'?'&#128273;':'&#127968;')+'</div>';
    var pr=l.lf==='rent'?'&#8377;'+l.rent.toLocaleString('en-IN')+'/mo':fmtPriceHTML(l.price);
    var lc=leadsByListing[l.id]||0;
    return '<div class="li" style="cursor:pointer;" onclick="viewL('+l.id+')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'var(--wh)\'">'
      +thumbH
      +'<div class="li-in"><strong>'+esc(l.title)+'</strong><span>'+esc(l.city)+' &middot; '+pr+' &middot; '+(l.images?l.images.length:0)+' photo(s)</span></div>'
      +'<span class="pill '+(l.status==='approved'?'pill-g':l.status==='pending'?'pill-y':'pill-r')+'">'+l.status+'</span>'
      +'<div class="li-ac" onclick="event.stopPropagation()">'
      +(l.status==='approved'?'<button class="btn-sm" onclick="event.stopPropagation();showLeads('+l.id+')" style="background:transparent;color:var(--t);border:1px solid var(--sa);border-radius:6px;padding:5px 11px;font-size:12px;font-weight:500;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all .15s;" onmouseover="this.style.background=\'var(--cr)\';this.style.borderColor=\'var(--tl)\'" onmouseout="this.style.background=\'transparent\';this.style.borderColor=\'var(--sa)\'">Leads ('+lc+')</button>':'')
      +'<button class="btn-sm" onclick="event.stopPropagation();editListing('+l.id+')" title="Edit listing" style="background:transparent;color:var(--t);border:1px solid var(--sa);border-radius:6px;padding:5px 9px;font-size:12px;font-weight:500;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all .15s;" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'transparent\'">&#9998; Edit</button>'
      +'<button class="btn-sm" onclick="event.stopPropagation();removeMyListing('+l.id+')" title="Delete listing" style="background:transparent;color:#999;border:1px solid transparent;border-radius:6px;padding:5px 9px;font-size:13px;font-weight:400;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:color .15s;" onmouseover="this.style.color=\'var(--red)\'" onmouseout="this.style.color=\'#999\'">&#128465;</button>'
      +'</div></div>';
  }).join(''):'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No listings yet. Click &ldquo;+ New Listing&rdquo; to get started.</div>';
}
async function removeMyListing(lid){
  if(!cu)return;
  var l=(await gL()).find(function(x){return x.id===lid;});
  if(!l||l.uid!==cu.id){toast('You can only remove your own listings.','e');return;}
  if(!confirm('Remove "'+esc(l.title)+'" permanently? This cannot be undone.'))return;
  await deleteListing(lid);
  _clr('i');
  await renderLister();
  toast('Listing removed.','e');
}
async function showLeads(lid){
  var inqs=(await gInq()).filter(function(i){return i.listingId===lid;});
  var l=(await gL()).find(function(x){return x.id===lid;});
  document.getElementById('vTit').textContent='Leads: '+l.title;
  document.getElementById('vCnt').innerHTML=inqs.length?'<div style="overflow-x:auto;"><table class="tbl"><thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Message</th><th>Date</th></tr></thead><tbody>'+inqs.map(function(i){return '<tr><td><strong>'+esc(i.name)+'</strong></td><td>'+esc(i.phone)+'</td><td>'+esc(i.email||'—')+'</td><td style="max-width:140px;font-size:12px;">'+esc(i.message||'—')+'</td><td>'+i.sentAt+'</td></tr>';}).join('')+'</tbody></table></div>':'<p style="text-align:center;color:var(--mu);padding:28px;">No leads yet.</p>';
  openM('viewM');
}

// ══ ADMIN ══
async function aTab(t,btn){document.querySelectorAll('.atab').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');curAT=t;await renderAdmin(t);}
async function renderAdmin(t){
  // Show loading in admin content area
  var el=document.getElementById('aC');
  if(el)el.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading admin data…</span></div>';
  var ls=await gL(),us=await gU(),inqs=await gInq();
  var pn=ls.filter(function(l){return l.status==='pending';});
  var ap=ls.filter(function(l){return l.status==='approved';});
  var brs=us.filter(function(u){return u.role==='broker';});
  var own=us.filter(function(u){return u.role==='owner';});
  var ten=us.filter(function(u){return u.role==='user';});
  var el=document.getElementById('aC');if(!el)return;

  if(t==='ov'){
    // Clickable stat cards — each navigates to the relevant tab
    var cards=[
      {label:'Listings',val:ls.length,col:'var(--t)',tab:'al'},
      {label:'Approved',val:ap.length,col:'var(--gr)',tab:'al'},
      {label:'Pending',val:pn.length,col:'var(--g)',tab:'pd'},
      {label:'Brokers',val:brs.length,col:'var(--pu)',tab:'ls'},
      {label:'Owners',val:own.length,col:'var(--g)',tab:'ls'},
      {label:'Tenants',val:ten.length,col:'var(--t)',tab:'tn'},
      {label:'Leads',val:inqs.length,col:'#e05c1a',tab:'ld'}
    ];
    var cardsHTML=cards.map(function(c){
      return '<div onclick="aTabById(\''+c.tab+'\')" style="background:var(--wh);border-radius:12px;padding:16px 18px;border:1px solid var(--sa);border-left:4px solid '+c.col+';cursor:pointer;transition:box-shadow .18s;position:relative;" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.1)\'" onmouseout="this.style.boxShadow=\'none\'">'
        +'<div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:'+c.col+';margin-bottom:2px;">'+c.val+'</div>'
        +'<div style="font-size:12px;color:var(--mu);">'+c.label+'</div>'
        +'<div style="position:absolute;top:12px;right:12px;font-size:11px;color:var(--mu);opacity:.5;">View &#8250;</div>'
        +'</div>';
    }).join('');
    el.innerHTML='<div class="g4" style="margin-bottom:24px;">'+cardsHTML+'</div>'
      +(pn.length
        ?'<h2 style="font-family:\'Playfair Display\',serif;font-size:17px;margin-bottom:12px;">&#9888; Needs Review ('+pn.length+')</h2>'+pn.map(aRow).join('')
        :'<div style="background:var(--wh);border-radius:12px;padding:24px;text-align:center;color:var(--mu);border:1px solid var(--sa);">&#10003; All listings reviewed.</div>');
  }

  // All Listings tab — paginated
  if(t==='al'){
    var page=_adminPage.al||0;
    var end=Math.min((page+1)*PAGE_SIZE,ls.length);
    var shown=ls.slice(0,end);
    var remaining=ls.length-end;
    el.innerHTML='<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin-bottom:14px;">All Listings ('+ls.length+')</h2>'
      +shown.map(aRow).join('')
      +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.al++;renderAdmin(\'al\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+ls.length+'</div></div>':'');
  }

  // Pending tab — full card with approve/reject
  if(t==='pd'){
    el.innerHTML='<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin-bottom:14px;">Pending Review ('+pn.length+')</h2>'
      +(pn.length?pn.map(function(l){
        var thumbH=l.images&&l.images.length
          ?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:80px;height:72px;object-fit:cover;border-radius:9px;flex-shrink:0;cursor:pointer;" onclick="viewL('+l.id+')" title="Click to preview"/>'
          :'<div style="width:72px;height:72px;background:var(--tl);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:30px;cursor:pointer;" onclick="viewL('+l.id+')">'+(l.lf==='buy'?'&#128273;':'&#127968;')+'</div>';
        var pr=l.lf==='rent'?'&#8377;'+l.rent.toLocaleString('en-IN')+'/mo':fmtPriceHTML(l.price);
        return '<div style="background:var(--wh);border-radius:13px;padding:18px;border:1px solid var(--sa);margin-bottom:13px;">'
          +'<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px;">'+thumbH
          +'<div style="flex:1;">'
          +'<h3 style="font-family:\'Playfair Display\',serif;font-size:16px;margin-bottom:3px;cursor:pointer;color:var(--t);" onclick="viewL('+l.id+')">'+esc(l.title)+' &#8599;</h3>'
          +'<p style="font-size:12px;color:var(--mu);">'+esc(l.loc)+', '+esc(l.city)+' &middot; '+esc(l.type)+' &middot; '+l.beds+'BHK &middot; '+(l.lf==='buy'?'FOR SALE':'FOR RENT')+'</p>'
          +'<p style="font-weight:700;font-size:14px;color:'+(l.lf==='buy'?'var(--g)':'var(--t)')+';">'+pr+'</p>'
          +'<p style="font-size:12px;margin-top:5px;line-height:1.5;">'+esc(l.desc)+'</p>'
          +'<p style="font-size:11px;color:var(--mu);margin-top:4px;">By: '+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+' &middot; '+esc(l.contact)+(l.rera?' &middot; RERA: '+esc(l.rera):'')+'</p>'
          +'<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:7px;">'+l.tags.map(function(tg){return '<span class="tag">'+esc(tg)+'</span>';}).join('')+'</div>'
          +'</div></div>'
          +'<div style="display:flex;gap:8px;">'
          +'<button class="btn btn-gr btn-sm" onclick="apL('+l.id+')">&#10003; Approve</button>'
          +'<button class="btn btn-r btn-sm" onclick="rjL('+l.id+')">&#10005; Reject</button>'
          +'<button class="btn btn-o btn-sm" onclick="viewL('+l.id+')">&#128065; Preview</button>'
          +'</div></div>';
      }).join(''):'<div style="background:var(--wh);border-radius:12px;padding:30px;text-align:center;color:var(--mu);border:1px solid var(--sa);">All caught up!</div>');
  }

  // Brokers & Owners tab — paginated rows clickable to show their listings
  if(t==='ls'){
    var all=brs.concat(own);
    var page=_adminPage.ls||0;
    var end=Math.min((page+1)*PAGE_SIZE,all.length);
    var shown=all.slice(0,end);
    var remaining=all.length-end;
    var rowsHtml=shown.map(function(u){
            var uListings=ls.filter(function(l){return l.uid===u.id;});
            var listCount=uListings.length;
            return '<tr style="cursor:pointer;" onclick="showUserListings(\''+u.id+'\')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'\'"><td><strong>'+esc(u.name)+'</strong></td>'
              +'<td><span class="pill '+(u.role==='broker'?'pill-p':'pill-y')+'">'+u.role+'</span></td>'
              +'<td>'+esc(u.email)+'</td><td>'+esc(u.phone)+'</td>'
              +'<td>'+esc(u.agency||'—')+'</td><td>'+esc(u.lic||'—')+'</td><td>'+esc(u.joinedAt)+'</td>'
              +'<td><span style="font-weight:700;color:var(--t);cursor:pointer;text-decoration:underline;">'+listCount+'</span></td></tr>';
          }).join('');
    el.innerHTML='<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin-bottom:14px;">Brokers & Owners ('+all.length+')</h2>'
      +(all.length
        ?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;">'
          +'<table class="tbl"><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Phone</th><th>Agency</th><th>RERA</th><th>Joined</th><th>Listings</th></tr></thead><tbody>'
          +rowsHtml
          +'</tbody></table></div></div>'
          +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.ls++;renderAdmin(\'ls\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+all.length+'</div></div>':'')
          +'<p style="font-size:11px;color:var(--mu);margin-top:8px;">&#128161; Click any row to see that user\'s listings</p>'
        :'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">None yet.</div>');
  }

  // Tenants tab — paginated rows clickable to show their inquiries
  if(t==='tn'){
    var page=_adminPage.tn||0;
    var end=Math.min((page+1)*PAGE_SIZE,ten.length);
    var shown=ten.slice(0,end);
    var remaining=ten.length-end;
    var rowsHtml=shown.map(function(u){
            var uInqs=inqs.filter(function(i){return i.uid===u.id;});
            return '<tr style="cursor:pointer;" onclick="showUserInquiries(\''+u.id+'\',\''+esc(u.name)+'\')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'\'"><td><strong>'+esc(u.name)+'</strong></td>'
              +'<td>'+esc(u.email)+'</td><td>'+esc(u.phone)+'</td><td>'+esc(u.joinedAt)+'</td>'
              +'<td><span style="font-weight:700;color:var(--t);cursor:pointer;text-decoration:underline;">'+uInqs.length+'</span></td></tr>';
          }).join('');
    el.innerHTML='<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin-bottom:14px;">Tenants ('+ten.length+')</h2>'
      +(ten.length
        ?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;">'
          +'<table class="tbl"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Joined</th><th>Inquiries</th></tr></thead><tbody>'
          +rowsHtml
          +'</tbody></table></div></div>'
          +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.tn++;renderAdmin(\'tn\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+ten.length+'</div></div>':'')
          +'<p style="font-size:11px;color:var(--mu);margin-top:8px;">&#128161; Click any row to see that tenant\'s inquiries</p>'
        :'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No tenants yet.</div>');
  }

  if(t==='ld')rLeads();
  if(t==='rp')rReports();
}

// Navigate to admin tab by ID (used by clickable overview cards)
async function aTabById(tabId){
  var tabMap={al:'All Listings',pd:'Pending',ls:'Brokers & Owners',tn:'Tenants',ld:'Leads & Export'};
  document.querySelectorAll('.atab').forEach(function(b){
    var matches=(b.textContent.trim()===tabMap[tabId]||(tabId==='al'&&b.textContent.trim()==='All Listings')||(tabId==='pd'&&b.textContent.trim()==='Pending')||(tabId==='ls'&&b.textContent.indexOf('Brokers')>=0)||(tabId==='tn'&&b.textContent.trim()==='Tenants')||(tabId==='ld'&&b.textContent.indexOf('Leads')>=0));
    b.classList.toggle('on',matches);
  });
  curAT=tabId;
  await renderAdmin(tabId);
}

// Show all listings for a specific broker/owner (click row in Brokers tab)
async function showUserListings(uid){
  var ls=(await gL()).filter(function(l){return l.uid===uid;});
  var u=(await gU()).find(function(u2){return u2.id===uid;});
  var el=document.getElementById('aC');if(!el)return;
  el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap;">'
    +'<button onclick="aTabById(\'ls\')" class="btn btn-o btn-sm">&#8592; Back</button>'
    +'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;">'+(u?esc(u.name)+'\'s':'')+' Listings ('+ls.length+')</h2>'
    +'</div>'
    +(ls.length?ls.map(aRow).join(''):'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No listings yet.</div>');
}

// Show all inquiries for a specific tenant (click row in Tenants tab)
async function showUserInquiries(uid,name){
  var inqs=await (await gInq()).filter(function(i){return i.uid===uid;});
  var el=document.getElementById('aC');if(!el)return;
  el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap;">'
    +'<button onclick="aTabById(\'tn\')" class="btn btn-o btn-sm">&#8592; Back</button>'
    +'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;">'+name+'\'s Inquiries ('+inqs.length+')</h2>'
    +'</div>'
    +(inqs.length
      ?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;">'
        +'<table class="tbl"><thead><tr><th>#</th><th>Listing</th><th>Type</th><th>City</th><th>Message</th><th>Date</th><th>Action</th></tr></thead><tbody>'
        +inqs.map(function(i,n){
          return '<tr><td>'+(n+1)+'</td>'
            +'<td style="font-size:12px;cursor:pointer;color:var(--t);font-weight:600;" onclick="viewL('+i.listingId+')">'+esc(i.listingTitle)+' &#8599;</td>'
            +'<td><span class="pill '+(i.lf==='buy'?'pill-y':'pill-b')+'">'+esc(i.lf||'rent')+'</span></td>'
            +'<td>'+esc(i.listingCity||'—')+'</td>'
            +'<td style="max-width:140px;font-size:12px;color:var(--mu);">'+esc(i.message||'—')+'</td>'
            +'<td style="white-space:nowrap;">'+i.sentAt+'</td>'
            +'<td><button class="btn btn-sm btn-o" onclick="viewL('+i.listingId+')">View</button></td>'
            +'</tr>';
        }).join('')
        +'</tbody></table></div></div>'
      :'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No inquiries yet.</div>');
}

function aRow(l){
  var thumbH=l.images&&l.images.length
    ?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:44px;height:44px;object-fit:cover;border-radius:7px;flex-shrink:0;cursor:pointer;" onclick="viewL('+l.id+')" title="Preview listing"/>'
    :'<div style="font-size:26px;cursor:pointer;" onclick="viewL('+l.id+')">'+(l.lf==='buy'?'&#128273;':'&#127968;')+'</div>';
  var pr=l.lf==='rent'?'&#8377;'+l.rent.toLocaleString('en-IN')+'/mo':fmtPriceHTML(l.price);
  return '<div class="li" style="cursor:default;">'
    +thumbH
    +'<div class="li-in" style="cursor:pointer;" onclick="viewL('+l.id+')">'
    +'<strong style="color:var(--t);">'+esc(l.title)+'</strong>'
    +'<span>'+esc(l.city)+' &middot; '+pr+' &middot; '+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+'</span>'
    +'</div>'
    +'<span class="pill '+(l.status==='approved'?'pill-g':l.status==='pending'?'pill-y':'pill-r')+'">'+l.status+'</span>'
    +'<span class="pill '+(l.lf==='rent'?'pill-b':'pill-y')+'" style="font-size:10px;">'+l.lf.toUpperCase()+'</span>'
    +'<div class="li-ac">'
    +'<button class="btn btn-sm btn-o" onclick="viewL('+l.id+')">&#128065; View</button>'
    +(l.status==='pending'?'<button class="btn btn-gr btn-sm" onclick="apL('+l.id+')" aria-label="Approve listing">&#10003;</button><button class="btn btn-r btn-sm" onclick="rjL('+l.id+')" aria-label="Reject listing">&#10005;</button>':'')
    +'<button style="background:transparent;color:var(--red);border:none;font-size:14px;cursor:pointer;padding:3px 5px;" onclick="dlL('+l.id+')" aria-label="Delete listing">&#128465;</button>'
    +'</div></div>';
}
async function apL(id){
  if(!confirm('Approve listing #'+id+'?'))return;
  var ok=await updateListing(id,{status:'approved',verified:true});
  if(ok){_clr('l');toast('Listing approved \u2714');await renderAdmin(curAT);}
}
async function rjL(id){
  if(!confirm('Reject listing #'+id+'?'))return;
  var ok=await updateListing(id,{status:'rejected'});
  if(ok){_clr('l');toast('Listing rejected.','e');await renderAdmin(curAT);}
}
async function dlL(id){
  if(!confirm('Permanently delete listing #'+id+'?'))return;
  var ok=await deleteListing(id);
  if(ok){_clr('l');_clr('i');toast('Listing deleted.','e');await renderAdmin(curAT);}
}

// ══ REPORTS ══
async function rReports(){
  var el=document.getElementById('aC');if(!el)return;
  var rpts=await gRpts();
  var open=rpts.filter(function(r){return r.status==='open';});
  var resolved=rpts.filter(function(r){return r.status==='resolved';});
  var ls=await gL();
  var html='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">'
    +'<div><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin-bottom:2px;">&#128681; Discrimination Reports</h2>'
    +'<p style="font-size:12px;color:var(--mu);">'+open.length+' open &middot; '+resolved.length+' resolved</p></div>'
    +'</div>';
  if(rpts.length===0){
    html+='<div style="background:var(--wh);border-radius:12px;padding:40px;text-align:center;border:1px solid var(--sa);">'
      +'<div style="font-size:40px;margin-bottom:10px;">&#128154;</div>'
      +'<h3 style="font-family:\'Playfair Display\',serif;margin-bottom:6px;">No reports yet</h3>'
      +'<p style="color:var(--mu);font-size:13px;">When users report discrimination, they will appear here for review.</p>'
      +'</div>';
  } else {
    rpts.slice().reverse().forEach(function(r){
      var isOpen=r.status==='open';
      var listingExists=ls.some(function(l){return l.id===r.listingId;});
      var borderCol=isOpen?'#ffcccc':'var(--sa)';
      var leftCol=isOpen?'var(--red)':'var(--gr)';
      var statusLabel=isOpen?'&#9888; Open':'&#10003; Resolved';
      var statusColor=isOpen?'var(--red)':'var(--gr)';
      var actions;
      if(isOpen){
        actions='<button class="btn btn-sm btn-gr" onclick="resolveReport('+r.id+')">&#10003; Mark Resolved</button>';
        if(listingExists)actions+='<button class="btn btn-sm btn-r" onclick="removeReportedListing('+r.listingId+','+r.id+')">Remove Listing &amp; Resolve</button>';
        else actions+='<span style="font-size:11px;color:var(--mu);padding:6px 10px;">Listing already removed</span>';
      } else {
        actions='<span style="font-size:12px;color:var(--gr);font-weight:700;">&#10003; Resolved</span>';
      }
      var listingLinkHTML=listingExists
        ?'<span style="color:var(--t);cursor:pointer;font-weight:600;" onclick="viewL('+r.listingId+')">'+esc(r.listingTitle)+' &#8599;</span>'
        :'<span style="color:var(--mu);font-weight:600;text-decoration:line-through;" title="Listing removed">'+esc(r.listingTitle)+'</span> <span style="font-size:10px;color:var(--red);font-weight:700;">(REMOVED)</span>';
      html+='<div style="background:var(--wh);border-radius:13px;border:1px solid '+borderCol+';border-left:4px solid '+leftCol+';padding:18px;margin-bottom:12px;">'
        +'<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:10px;">'
        +'<div>'
        +'<div style="font-size:11px;font-weight:700;color:'+statusColor+';text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px;">'+statusLabel+'</div>'
        +'<div style="font-weight:700;font-size:14px;margin-bottom:2px;">'+esc(r.type)+'</div>'
        +'<div style="font-size:12px;color:var(--mu);">Listing #'+r.listingId+': '+listingLinkHTML+'</div>'
        +'</div>'
        +'<div style="font-size:11px;color:var(--mu);text-align:right;">'+r.submittedAt+'<br/>Report #'+r.id+'</div>'
        +'</div>'
        +'<div style="background:var(--cr);border-radius:8px;padding:12px;font-size:13px;line-height:1.6;margin-bottom:10px;color:var(--ink);">'+esc(r.desc)+'</div>'
        +'<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">'
        +'<div style="font-size:12px;color:var(--mu);">By: <strong>'+esc(r.reporterName)+'</strong> &middot; '+esc(r.reporterContact)+'</div>'
        +'<div style="display:flex;gap:6px;flex-wrap:wrap;">'+actions+'</div>'
        +'</div>'
        +'</div>';
    });
  }
  el.innerHTML=html;
}

async function resolveReport(rptId){
  await updateReport(rptId,{status:'resolved'});
  rReports();toast('Marked as resolved &#10003;');
}
async function removeReportedListing(listingId,rptId){
  if(!confirm('Remove this listing permanently and mark report resolved?'))return;
  await deleteListing(listingId);
  await updateReport(rptId,{status:'resolved'});
  rReports();toast('Listing removed &#10003;','e');
}

// ══ LEADS ══
async function rLeads(){
  var el=document.getElementById('aC');if(!el)return;
  var inqs=await gInq();
  el.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">'
    +'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;">Leads ('+inqs.length+')</h2>'
    +'<div style="display:flex;gap:8px;"><button class="btn btn-gr btn-sm" onclick="expCSV(\'all\')">&#128229; Export All</button><button class="btn btn-sm" onclick="expCSV(\'today\')">&#128229; Today Only</button></div>'
    +'</div>'
    +'<div style="background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);margin-bottom:14px;">'
    +'<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;">'
    +'<div style="flex:1 1 120px;"><label class="flbl">From</label><input class="fi" type="date" id="ldf" onchange="flLeads()"/></div>'
    +'<div style="flex:1 1 120px;"><label class="flbl">To</label><input class="fi" type="date" id="ldt" onchange="flLeads()"/></div>'
    +'<div style="flex:1 1 120px;"><label class="flbl">Type</label><select class="fi" id="ldft" onchange="flLeads()"><option value="">All</option><option value="rent">Rent</option><option value="buy">Buy</option></select></div>'
    +'<button class="btn btn-o btn-sm" onclick="document.getElementById(\'ldf\').value=\'\';document.getElementById(\'ldt\').value=\'\';document.getElementById(\'ldft\').value=\'\';flLeads()">Clear</button>'
    +'</div></div>'
    +'<div id="lTbl"></div>';
  flLeads();
}
async function flLeads(){
  var from=(document.getElementById('ldf')||{}).value||'';
  var to=(document.getElementById('ldt')||{}).value||'';
  var ft=(document.getElementById('ldft')||{}).value||'';
  var inqs=await gInq();
  if(from)inqs=inqs.filter(function(i){return i.sentAt>=from;});
  if(to)inqs=inqs.filter(function(i){return i.sentAt<=to;});
  if(ft)inqs=inqs.filter(function(i){return i.lf===ft;});
  var el=document.getElementById('lTbl');if(!el)return;
  var ls=await gL();
  el.innerHTML=inqs.length?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;"><table class="tbl"><thead><tr><th>#</th><th>Name</th><th>Phone</th><th>Email</th><th>Listing</th><th>Type</th><th>City</th><th>Message</th><th>Date</th></tr></thead><tbody>'+inqs.map(function(i,n){return '<tr><td>'+(n+1)+'</td><td><strong>'+esc(i.name)+'</strong></td><td>'+esc(i.phone)+'</td><td>'+esc(i.email||'—')+'</td><td style="font-size:12px;">'+esc(i.listingTitle)+'</td><td><span class="pill '+(i.lf==='buy'?'pill-y':'pill-b')+'">'+esc(i.lf||'rent')+'</span></td><td>'+esc(i.listingCity||'—')+'</td><td style="max-width:140px;font-size:12px;color:var(--mu);">'+esc(i.message||'—')+'</td><td style="white-space:nowrap;">'+i.sentAt+'</td></tr>';}).join('')+'</tbody></table></div></div><p style="font-size:12px;color:var(--mu);margin-top:8px;">'+inqs.length+' lead(s)</p>':'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No leads for selected filters.</div>';
}
async function expCSV(mode){
  var inqs=await gInq();var ls=await gL();
  if(mode==='today'){var t=new Date().toISOString().split('T')[0];inqs=inqs.filter(function(i){return i.sentAt===t;});if(!inqs.length){toast('No leads today yet.','i');return;}}
  var rows=inqs.map(function(i,n){var l=ls.find(function(x){return x.id===i.listingId;});return[n+1,'"'+(i.name||'').replace(/"/g,'""')+'"','"'+(i.phone||'').replace(/"/g,'""')+'"','"'+(i.email||'').replace(/"/g,'""')+'"','"'+(i.listingTitle||'').replace(/"/g,'""')+'"','"'+esc(i.lf||'rent')+'"','"'+esc(i.listingCity||'').replace(/"/g,'""')+'"','"'+(l?l.contact:'—')+'"','"'+(i.message||'').replace(/"/g,'""').replace(/\n/g,' ')+'"','"'+i.sentAt+'"'].join(',');});
  var csv=['#,Name,Phone,Email,Listing,Type,City,Contact,Message,Date'].concat(rows).join('\n');
  var a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'}));
  a.download='makan-leads-'+(mode==='today'?'today-':'')+new Date().toISOString().split('T')[0]+'.csv';
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  toast('Exported '+inqs.length+' lead(s) &#10003;');
}

// ══ MODALS ══
function ovcM(e,id){if(e.target===e.currentTarget)closeM(id);}
function openM(id){
  if(id==='addM'){
    if(!cu){openM('authM');return;}
    if(cu.role==='user'){toast('Only owners and brokers can list properties.','e');return;}
    // Reset to "new listing" mode (editListing overrides this after openM)
    if(!_editingListingId){
      resetAddModal();
      selTags=[];selAmens=[];upImgs=[];
      bldLT();bldLA();rPv();setLM('rent');
      var lo=document.getElementById('lOw'),lc=document.getElementById('lCt'),le=document.getElementById('lErr');
      if(lo)lo.value=cu.agency?cu.name+' – '+esc(cu.agency):cu.name;
      if(lc)lc.value=cu.phone||'';
      if(le)le.style.display='none';
    }
  }
  var el=document.getElementById(id);if(el)el.classList.add('open');
}
function closeM(id){
  var el=document.getElementById(id);if(el)el.classList.remove('open');
  // Reset edit mode when closing listing modal
  if(id==='addM')resetAddModal();
  // Clear listing deep-link hash and destroy map when closing detail view
  if(id==='viewM'){
    if(window.location.hash.indexOf('#listing/')===0){
      if(window.history.replaceState)window.history.replaceState(null,null,window.location.pathname);
    }
    if(_listingMap){try{_listingMap.remove();}catch(e){}_listingMap=null;}
  }
}

// ══ TOAST ══
function toast(msg,type){
  type=type||'s';
  var el=document.getElementById('toast');if(!el)return;
  el.innerHTML=msg;el.className='show '+type;
  setTimeout(function(){el.className='';},3200);
}

// ══ QUICK ACTION HELPERS ══
function qaNewProjects(){fBST=['New'];bldF();setBMode('buy');go('browse');}
function qaPG(){fRT=['PG / Room'];bldF();setBMode('rent');go('browse');}
function qaRERA(){fRer=true;bldF();setBMode('buy');go('browse');}
function qaVerified(){fVer=true;bldF();setBMode('rent');go('browse');}

function toggleSMore(mode){
  var btn=document.getElementById('smore-'+mode);
  if(!btn)return;
  var container=btn.parentElement;
  var secs=container.querySelectorAll('.srow-sec');
  var open=btn.dataset.open==='1';
  secs.forEach(function(s){s.style.display=open?'none':'grid';});
  btn.dataset.open=open?'0':'1';
  btn.textContent=open?'+ More options':'- Fewer options';
}
// ══ CITY AUTOCOMPLETE ══
var INDIAN_CITIES=[
  {n:'Mumbai',s:'Maharashtra'},
  {n:'Andheri West',s:'Mumbai'},{n:'Andheri East',s:'Mumbai'},
  {n:'Bandra West',s:'Mumbai'},{n:'Bandra East',s:'Mumbai'},
  {n:'Juhu',s:'Mumbai'},{n:'Versova',s:'Mumbai'},{n:'Lokhandwala',s:'Mumbai'},
  {n:'Santacruz West',s:'Mumbai'},{n:'Santacruz East',s:'Mumbai'},
  {n:'Khar West',s:'Mumbai'},{n:'Khar East',s:'Mumbai'},
  {n:'Vile Parle West',s:'Mumbai'},{n:'Vile Parle East',s:'Mumbai'},
  {n:'Jogeshwari West',s:'Mumbai'},{n:'Jogeshwari East',s:'Mumbai'},
  {n:'Goregaon West',s:'Mumbai'},{n:'Goregaon East',s:'Mumbai'},
  {n:'Malad West',s:'Mumbai'},{n:'Malad East',s:'Mumbai'},
  {n:'Kandivali West',s:'Mumbai'},{n:'Kandivali East',s:'Mumbai'},
  {n:'Borivali West',s:'Mumbai'},{n:'Borivali East',s:'Mumbai'},
  {n:'Dahisar',s:'Mumbai'},{n:'Mira Road',s:'Mumbai'},
  {n:'Bhayander',s:'Mumbai'},{n:'Vasai',s:'Mumbai'},{n:'Virar',s:'Mumbai'},
  {n:'Dadar',s:'Mumbai'},{n:'Dadar West',s:'Mumbai'},{n:'Dadar East',s:'Mumbai'},
  {n:'Matunga',s:'Mumbai'},{n:'Sion',s:'Mumbai'},{n:'Dharavi',s:'Mumbai'},
  {n:'Kurla West',s:'Mumbai'},{n:'Kurla East',s:'Mumbai'},
  {n:'Ghatkopar West',s:'Mumbai'},{n:'Ghatkopar East',s:'Mumbai'},
  {n:'Vikhroli West',s:'Mumbai'},{n:'Vikhroli East',s:'Mumbai'},
  {n:'Kanjurmarg West',s:'Mumbai'},{n:'Kanjurmarg East',s:'Mumbai'},
  {n:'Bhandup West',s:'Mumbai'},{n:'Bhandup East',s:'Mumbai'},
  {n:'Mulund West',s:'Mumbai'},{n:'Mulund East',s:'Mumbai'},
  {n:'Thane West',s:'Mumbai'},{n:'Thane East',s:'Mumbai'},
  {n:'Dombivli',s:'Mumbai'},{n:'Kalyan',s:'Mumbai'},{n:'Ulhasnagar',s:'Mumbai'},
  {n:'Ambernath',s:'Mumbai'},{n:'Badlapur',s:'Mumbai'},
  {n:'Powai',s:'Mumbai'},{n:'Chandivali',s:'Mumbai'},{n:'Sakinaka',s:'Mumbai'},
  {n:'Lower Parel',s:'Mumbai'},{n:'Upper Parel',s:'Mumbai'},
  {n:'Prabhadevi',s:'Mumbai'},{n:'Worli',s:'Mumbai'},{n:'Worli Sea Face',s:'Mumbai'},
  {n:'Mahim',s:'Mumbai'},{n:'Parel',s:'Mumbai'},{n:'Sewri',s:'Mumbai'},
  {n:'Wadala',s:'Mumbai'},{n:'Chembur',s:'Mumbai'},{n:'Govandi',s:'Mumbai'},
  {n:'Mankhurd',s:'Mumbai'},{n:'Trombay',s:'Mumbai'},
  {n:'Marine Drive',s:'Mumbai'},{n:'Nariman Point',s:'Mumbai'},
  {n:'Churchgate',s:'Mumbai'},{n:'Fort',s:'Mumbai'},{n:'Colaba',s:'Mumbai'},
  {n:'Cuffe Parade',s:'Mumbai'},{n:'Walkeshwar',s:'Mumbai'},{n:'Malabar Hill',s:'Mumbai'},
  {n:'Pedder Road',s:'Mumbai'},{n:'Breach Candy',s:'Mumbai'},{n:'Tardeo',s:'Mumbai'},
  {n:'Grant Road',s:'Mumbai'},{n:'Charni Road',s:'Mumbai'},{n:'Mumbai Central',s:'Mumbai'},
  {n:'Nagpada',s:'Mumbai'},{n:'Byculla',s:'Mumbai'},{n:'Mazagaon',s:'Mumbai'},
  {n:'Dongri',s:'Mumbai'},{n:'Bhendi Bazaar',s:'Mumbai'},{n:'Crawford Market',s:'Mumbai'},
  {n:'Kalbadevi',s:'Mumbai'},{n:'Girgaon',s:'Mumbai'},{n:'Opera House',s:'Mumbai'},
  {n:'Kemps Corner',s:'Mumbai'},{n:'Masjid Bunder',s:'Mumbai'},{n:'CST',s:'Mumbai'},
  {n:'Navi Mumbai',s:'Maharashtra'},
  {n:'Vashi',s:'Navi Mumbai'},{n:'Nerul',s:'Navi Mumbai'},{n:'Belapur',s:'Navi Mumbai'},
  {n:'Kharghar',s:'Navi Mumbai'},{n:'Panvel',s:'Navi Mumbai'},{n:'Seawoods',s:'Navi Mumbai'},
  {n:'Airoli',s:'Navi Mumbai'},{n:'Ghansoli',s:'Navi Mumbai'},{n:'Kopar Khairane',s:'Navi Mumbai'},
  {n:'Sanpada',s:'Navi Mumbai'},{n:'Turbhe',s:'Navi Mumbai'},{n:'Juinagar',s:'Navi Mumbai'},
  {n:'Ulwe',s:'Navi Mumbai'},{n:'Dronagiri',s:'Navi Mumbai'},{n:'Taloja',s:'Navi Mumbai'},
  {n:'Hyderabad',s:'Telangana'},
  {n:'Jubilee Hills',s:'Hyderabad'},{n:'Banjara Hills',s:'Hyderabad'},
  {n:'Gachibowli',s:'Hyderabad'},{n:'Kondapur',s:'Hyderabad'},{n:'Madhapur',s:'Hyderabad'},
  {n:'Hitech City',s:'Hyderabad'},{n:'Kukatpally',s:'Hyderabad'},{n:'Miyapur',s:'Hyderabad'},
  {n:'Manikonda',s:'Hyderabad'},{n:'Mehdipatnam',s:'Hyderabad'},{n:'Tolichowki',s:'Hyderabad'},
  {n:'Secunderabad',s:'Hyderabad'},{n:'Begumpet',s:'Hyderabad'},{n:'Ameerpet',s:'Hyderabad'},
  {n:'Somajiguda',s:'Hyderabad'},{n:'Narayanguda',s:'Hyderabad'},{n:'Charminar',s:'Hyderabad'},
  {n:'Uppal',s:'Hyderabad'},{n:'LB Nagar',s:'Hyderabad'},{n:'Dilsukhnagar',s:'Hyderabad'},
  {n:'Kompally',s:'Hyderabad'},{n:'Nizampet',s:'Hyderabad'},{n:'Bachupally',s:'Hyderabad'},
  {n:'Bengaluru',s:'Karnataka'},{n:'Bangalore',s:'Karnataka'},
  {n:'Koramangala',s:'Bengaluru'},{n:'Indiranagar',s:'Bengaluru'},
  {n:'HSR Layout',s:'Bengaluru'},{n:'BTM Layout',s:'Bengaluru'},
  {n:'Whitefield',s:'Bengaluru'},{n:'Marathahalli',s:'Bengaluru'},
  {n:'Electronic City',s:'Bengaluru'},{n:'Sarjapur Road',s:'Bengaluru'},
  {n:'Bannerghatta Road',s:'Bengaluru'},{n:'JP Nagar',s:'Bengaluru'},
  {n:'Jayanagar',s:'Bengaluru'},{n:'Basavanagudi',s:'Bengaluru'},
  {n:'Malleshwaram',s:'Bengaluru'},{n:'Hebbal',s:'Bengaluru'},
  {n:'Yelahanka',s:'Bengaluru'},{n:'Bellandur',s:'Bengaluru'},
  {n:'Outer Ring Road',s:'Bengaluru'},{n:'Kadubeesanahalli',s:'Bengaluru'},
  {n:'Delhi',s:'NCR'},{n:'New Delhi',s:'NCR'},
  {n:'Dwarka',s:'Delhi'},{n:'Rohini',s:'Delhi'},{n:'Pitampura',s:'Delhi'},
  {n:'Lajpat Nagar',s:'Delhi'},{n:'Greater Kailash',s:'Delhi'},{n:'Vasant Kunj',s:'Delhi'},
  {n:'Saket',s:'Delhi'},{n:'Malviya Nagar',s:'Delhi'},{n:'Hauz Khas',s:'Delhi'},
  {n:'Green Park',s:'Delhi'},{n:'Karol Bagh',s:'Delhi'},{n:'Rajouri Garden',s:'Delhi'},
  {n:'Janakpuri',s:'Delhi'},{n:'Mayur Vihar',s:'Delhi'},{n:'Vasant Vihar',s:'Delhi'},
  {n:'Noida',s:'NCR'},{n:'Greater Noida',s:'NCR'},{n:'Gurgaon',s:'Haryana'},
  {n:'Gurugram',s:'Haryana'},{n:'Sohna Road',s:'Gurgaon'},{n:'Golf Course Road',s:'Gurgaon'},
  {n:'Ghaziabad',s:'NCR'},{n:'Faridabad',s:'Haryana'},
  {n:'Pune',s:'Maharashtra'},
  {n:'Kothrud',s:'Pune'},{n:'Wakad',s:'Pune'},{n:'Hinjewadi',s:'Pune'},
  {n:'Baner',s:'Pune'},{n:'Aundh',s:'Pune'},{n:'Viman Nagar',s:'Pune'},
  {n:'Kalyani Nagar',s:'Pune'},{n:'Koregaon Park',s:'Pune'},{n:'Hadapsar',s:'Pune'},
  {n:'Kharadi',s:'Pune'},{n:'Magarpatta',s:'Pune'},{n:'Wagholi',s:'Pune'},
  {n:'Pimple Saudagar',s:'Pune'},{n:'Bavdhan',s:'Pune'},{n:'Shivajinagar',s:'Pune'},
  {n:'Chennai',s:'Tamil Nadu'},
  {n:'Anna Nagar',s:'Chennai'},{n:'T. Nagar',s:'Chennai'},{n:'Adyar',s:'Chennai'},
  {n:'Velachery',s:'Chennai'},{n:'Porur',s:'Chennai'},{n:'Tambaram',s:'Chennai'},
  {n:'Sholinganallur',s:'Chennai'},{n:'OMR',s:'Chennai'},{n:'Perungudi',s:'Chennai'},
  {n:'Thiruvanmiyur',s:'Chennai'},{n:'Nungambakkam',s:'Chennai'},{n:'Egmore',s:'Chennai'},
  {n:'Mylapore',s:'Chennai'},{n:'Besant Nagar',s:'Chennai'},{n:'Kilpauk',s:'Chennai'},
  {n:'Kolkata',s:'West Bengal'},{n:'Salt Lake',s:'Kolkata'},{n:'New Town',s:'Kolkata'},
  {n:'Howrah',s:'West Bengal'},{n:'Ahmedabad',s:'Gujarat'},{n:'Surat',s:'Gujarat'},
  {n:'Jaipur',s:'Rajasthan'},{n:'Lucknow',s:'Uttar Pradesh'},{n:'Kanpur',s:'Uttar Pradesh'},
  {n:'Nagpur',s:'Maharashtra'},{n:'Indore',s:'Madhya Pradesh'},{n:'Bhopal',s:'Madhya Pradesh'},
  {n:'Visakhapatnam',s:'Andhra Pradesh'},{n:'Patna',s:'Bihar'},{n:'Vadodara',s:'Gujarat'},
  {n:'Ludhiana',s:'Punjab'},{n:'Agra',s:'Uttar Pradesh'},{n:'Nashik',s:'Maharashtra'},
  {n:'Rajkot',s:'Gujarat'},{n:'Varanasi',s:'Uttar Pradesh'},{n:'Aurangabad',s:'Maharashtra'},
  {n:'Amritsar',s:'Punjab'},{n:'Coimbatore',s:'Tamil Nadu'},{n:'Jodhpur',s:'Rajasthan'},
  {n:'Madurai',s:'Tamil Nadu'},{n:'Raipur',s:'Chhattisgarh'},{n:'Chandigarh',s:'Punjab'},
  {n:'Guwahati',s:'Assam'},{n:'Mysuru',s:'Karnataka'},{n:'Thiruvananthapuram',s:'Kerala'},
  {n:'Kochi',s:'Kerala'},{n:'Dehradun',s:'Uttarakhand'},{n:'Mangaluru',s:'Karnataka'},
  {n:'Bhubaneswar',s:'Odisha'},{n:'Kolhapur',s:'Maharashtra'},{n:'Udaipur',s:'Rajasthan'},
  {n:'Jalandhar',s:'Punjab'},{n:'Warangal',s:'Telangana'},{n:'Vijayawada',s:'Andhra Pradesh'},
  {n:'Ajmer',s:'Rajasthan'},{n:'Srinagar',s:'J&K'},{n:'Gwalior',s:'Madhya Pradesh'}
];

function acInit(inputId, listId, targetField){
  var inp = document.getElementById(inputId);
  var lst = document.getElementById(listId);
  if(!inp || !lst) return;
  var hiIdx = -1;
  inp.setAttribute('autocomplete','off');

  inp.addEventListener('input', function(){
    var q = inp.value.trim().toLowerCase();
    hiIdx = -1;
    if(!q){ lst.className='ac-list'; lst.innerHTML=''; return; }
    var matches = INDIAN_CITIES.filter(function(c){
      return c.n.toLowerCase().indexOf(q) >= 0;
    }).sort(function(a,b){
      var ai = a.n.toLowerCase().indexOf(q);
      var bi = b.n.toLowerCase().indexOf(q);
      // Starts-with gets priority 0, contains gets priority 1
      var ap = ai === 0 ? 0 : 1;
      var bp = bi === 0 ? 0 : 1;
      if(ap !== bp) return ap - bp;
      return a.n.localeCompare(b.n);
    }).slice(0,10);
    if(!matches.length){ lst.className='ac-list'; return; }
    lst.innerHTML = matches.map(function(c,i){
      return '<div class="ac-item" data-idx="' + i + '" data-val="' + c.n + '">'
        + '<span class="ac-pin">&#128205;</span>'
        + '<span class="ac-name">' + c.n + '</span>'
        + '<span class="ac-state">' + c.s + '</span>'
        + '</div>';
    }).join('');
    // Attach click handlers
    var items = lst.querySelectorAll('.ac-item');
    items.forEach(function(item){
      item.addEventListener('mousedown', function(e){
        e.preventDefault();
        acPick(inputId, listId, targetField, item.dataset.val);
      });
    });
    lst.className = 'ac-list open';
  });

  inp.addEventListener('keydown', function(e){
    var items = lst.querySelectorAll('.ac-item');
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      hiIdx = Math.min(hiIdx + 1, items.length - 1);
      items.forEach(function(x,i){ x.classList.toggle('hi', i === hiIdx); });
    } else if(e.key === 'ArrowUp'){
      e.preventDefault();
      hiIdx = Math.max(hiIdx - 1, 0);
      items.forEach(function(x,i){ x.classList.toggle('hi', i === hiIdx); });
    } else if(e.key === 'Enter' && hiIdx >= 0 && items[hiIdx]){
      e.preventDefault();
      acPick(inputId, listId, targetField, items[hiIdx].dataset.val);
    } else if(e.key === 'Escape'){
      lst.className = 'ac-list';
    }
  });

  inp.addEventListener('blur', function(){
    setTimeout(function(){ lst.className = 'ac-list'; }, 160);
  });
}

function acPick(inputId, listId, targetField, val){
  var inp = document.getElementById(inputId);
  var lst = document.getElementById(listId);
  if(inp) inp.value = val;
  if(lst){ lst.className = 'ac-list'; lst.innerHTML = ''; }
  if(targetField === 'fCity' || targetField === 'fBCity') renderBrowse();
}


// ══ CONTACT FORM ══
var _ce = atob('YWxpY29udHJhY3RvcmM5N0BnbWFpbC5jb20=');
function submitContact(e){
  e.preventDefault();
  var btn = document.getElementById('ctSubmit');
  var err = document.getElementById('contactErr');
  var suc = document.getElementById('contactSuccess');
  var form = document.getElementById('contactForm');
  if(err) err.style.display='none';
  var name = document.getElementById('ctName').value.trim();
  var email = document.getElementById('ctEmail').value.trim();
  var subject = document.getElementById('ctSubject').value;
  var message = document.getElementById('ctMessage').value.trim();
  if(!name||!email||!subject||!message){
    if(err){err.style.display='';err.textContent='Please fill in all fields.';}
    return;
  }
  if(!isEmailFormatValid(email)){
    if(err){err.style.display='';err.textContent='Please enter a valid email address.';}
    return;
  }
  if(btn){btn.disabled=true;btn.textContent='Opening email app…';}
  var body = 'Name: ' + name
    + '\nEmail: ' + email
    + '\nSubject: ' + subject
    + '\n\n' + message;
  var mailto = 'mailto:' + _ce
    + '?subject=' + encodeURIComponent('Ek Makān Contact: ' + subject)
    + '&body=' + encodeURIComponent(body);
  // Open mailto - works on all devices, no server needed
  var a = document.createElement('a');
  a.href = mailto;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Show success after short delay
  setTimeout(function(){
    if(form) form.style.display='none';
    if(suc){
      suc.style.display='';
      suc.innerHTML = '<strong>Your email app should have opened ✓</strong><br/>If not, please email us directly — we will respond within 2 working days.';
    }
    if(btn){btn.disabled=false;btn.textContent='Send Message';}
  }, 800);
}


// ══ REPORTS ══
// ══ REPORTS (Supabase) ══
async function gRpts(){
  if(_cacheR&&_cacheValid('r'))return _cacheR;
  var {data,error}=await sb.from('reports').select('id,listing_id,listing_title,report_type,description,reporter_name,reporter_contact,reporter_user_id,status,submitted_at').order('submitted_at',{ascending:false});
  if(error){toast('Failed to load reports. Please refresh.','e');_cacheR=[];return[];}
  _cacheR=(data||[]).map(mapRpt);
  _cacheTime.r=Date.now();
  return _cacheR;
}
async function sRpts(d){/* legacy no-op — use createReport/updateReport instead */}
async function createReport(rptObj){
  _clr('r');
  var row={listing_id:rptObj.listingId?Number(rptObj.listingId):null,listing_title:rptObj.listingTitle||'',report_type:rptObj.type,description:rptObj.desc||'',reporter_name:rptObj.reporterName||'',reporter_contact:rptObj.reporterContact||'',reporter_user_id:rptObj.reporterUid||(cu?cu.id:null)};
  var {error}=await sb.from('reports').insert(row);
  if(error){toast('Failed to submit report: '+error.message,'e');return false;}
  return true;
}
async function updateReport(id,updates){
  _clr('r');
  var {error}=await sb.from('reports').update(updates).eq('id',id);
  return !error;
}

// ══ USERS (Supabase) ══
async function gU(){
  if(_cacheU&&_cacheValid('u'))return _cacheU;
  var {data,error}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified').order('joined_at',{ascending:false});
  if(error){toast('Failed to load users. Please refresh.','e');_cacheU=[];return[];}
  _cacheU=(data||[]).map(mapUsr);
  _cacheTime.u=Date.now();
  return _cacheU;
}
function sU(d){/* legacy no-op — user creation via Supabase Auth */}

// ══ LISTINGS WRITE (Supabase) ══
async function sL(d){/* legacy no-op — use createListing/updateListing/deleteListing */}
async function createListing(obj){
  _clr('l');
  var row=unmapL(obj);
  var {data,error}=await sb.from('listings').insert(row).select().single();
  if(error){toast('Failed to create listing: '+error.message,'e');return null;}
  return mapL(data);
}
async function updateListing(id,updates){
  _clr('l');
  var {error}=await sb.from('listings').update(updates).eq('id',id);
  return !error;
}
async function deleteListing(id){
  _clr('l');
  var {error}=await sb.from('listings').delete().eq('id',id);
  return !error;
}

// ══ INIT ══
setAT('login');setRR('user');upNav();

// Init city autocomplete for all inputs that need it
acInit('hrc','ac-hrc','hrc');      // Hero rent
acInit('hbc','ac-hbc','hbc');      // Hero buy
acInit('fCity','ac-fCity','fCity'); // Browse rent
acInit('fBCity','ac-fBCity','fBCity'); // Browse buy
acInit('lCy','ac-lCy','lCy');     // Listing form city
acInit('lLo','ac-lLo','lLo');     // Listing form locality

// ══ BOOTSTRAP ══
// Restore Supabase Auth session, load favorites, then render homepage.
// Also detect password recovery tokens in the URL hash.
(async function(){
  try{
    // Check for recovery token BEFORE getSession — Supabase client
    // will auto-process the hash fragment and establish a session.
    var isRecovery=_checkRecoveryToken();

    var {data:{session}}=await sb.auth.getSession();
    if(session){
      var {data:profile}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified').eq('id',session.user.id).single();
      if(profile){
        cu={id:profile.id,name:profile.name,email:profile.email,phone:profile.phone||'',role:profile.role,agency:profile.agency||'',lic:profile.license_no||'',joinedAt:profile.joined_at?(profile.joined_at+'').split('T')[0]:'',verified:profile.verified||false};
        await loadFavs();
        await loadNotifs();
        upNav();
      }
    }
    // If this is a password recovery redirect, show the update modal
    if(isRecovery&&session){
      openM('pwUpdateM');
    }
  }catch(e){}
  // If there's a deep-link hash (e.g. #dashboard, #lister, #admin, #listing/42),
  // route to that page directly instead of rendering home first.
  var hasDeepLink=window.location.hash&&/^#(listing\/\d+|home|browse|dashboard|lister|admin)$/.test(window.location.hash);
  if(hasDeepLink){
    handleHashRoute();
  } else {
    await renderHome();
  }
})();
// Listen for auth state changes (token refresh, sign-out in another tab, recovery)
sb.auth.onAuthStateChange(function(ev,session){
  if(ev==='SIGNED_OUT'){cu=null;upNav();}
  if(ev==='PASSWORD_RECOVERY'){
    // Supabase fires this event when a recovery token is processed
    openM('pwUpdateM');
  }
});
// Poll for new notifications every 60 seconds
setInterval(function(){if(cu)loadNotifs();},60000);
