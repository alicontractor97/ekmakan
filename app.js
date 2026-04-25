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
function mapL(r){return{id:r.id,lf:r.listing_for,title:r.title,building:r.building_name||'',city:r.city,loc:r.locality||'',type:r.property_type||'Apartment',beds:String(r.beds||2),baths:r.baths||1,area:r.area_sqft||0,carpetArea:r.carpet_area||0,builtArea:r.built_up_area||0,superArea:r.super_built_up_area||0,age:r.property_age||'',furnDetails:r.furnishing_details||[],rent:r.rent||0,dep:r.deposit||0,price:r.price||0,stype:r.sale_type||'',poss:r.possession||'',rera:r.rera_no||'',contact:r.contact_phone||'',owner:r.owner_name||'',agency:r.agency_name||'',tags:r.tags||[],amens:r.amenities||[],verified:r.verified||false,status:r.status||'pending',rejectionReason:r.rejection_reason||'',images:r.images||[],desc:r.description||'',postedAt:r.posted_at?(r.posted_at+'').split('T')[0]:'',uid:r.user_id,urole:r.user_role||'owner',furnish:r.furnishing||'',floor:r.floor_range||'',floorNo:r.floor_no!=null?r.floor_no:null,totalFloors:r.total_floors||null,facing:r.facing||'',avail:r.availability||'',isProject:r.is_project||false,projectStatus:r.project_status||'',completion:r.completion_date||'',priceMin:r.price_range_min||0,priceMax:r.price_range_max||0,unitTypes:r.unit_types||[],txnType:r.transaction_type||'',ownership:r.ownership||'',water:r.water_source||'',backup:r.power_backup||'',landmarks:r.landmarks||[],videoUrl:r.video_url||''};}
// Map JS listing → Supabase row
function unmapL(l){return{listing_for:l.lf,title:l.title,building_name:l.building||'',city:l.city,locality:l.loc||'',property_type:l.type||'Apartment',beds:Number(l.beds)||2,baths:Number(l.baths)||1,area_sqft:Number(l.area)||0,carpet_area:Number(l.carpetArea)||0,built_up_area:Number(l.builtArea)||0,super_built_up_area:Number(l.superArea)||0,property_age:l.age||'',furnishing_details:l.furnDetails||[],rent:Number(l.rent)||0,deposit:Number(l.dep)||0,price:Number(l.price)||0,sale_type:l.stype||'',possession:l.poss||'',rera_no:l.rera||'',contact_phone:l.contact,owner_name:l.owner,agency_name:l.agency||'',description:l.desc||'',tags:l.tags||[],amenities:l.amens||[],images:l.images||[],verified:l.verified||false,status:l.status||'pending',user_id:l.uid||(cu?cu.id:null),user_role:l.urole||(cu?cu.role:'owner'),furnishing:l.furnish||'',floor_range:l.floor||'',floor_no:l.floorNo!=null&&l.floorNo!==''?Number(l.floorNo):null,total_floors:l.totalFloors?Number(l.totalFloors):null,facing:l.facing||'',availability:l.avail||'',is_project:l.isProject||false,project_status:l.projectStatus||'',completion_date:l.completion||null,price_range_min:Number(l.priceMin)||0,price_range_max:Number(l.priceMax)||0,unit_types:l.unitTypes||[],transaction_type:l.txnType||'',ownership:l.ownership||'',water_source:l.water||'',power_backup:l.backup||'',landmarks:l.landmarks||[],video_url:l.videoUrl||''};}
function mapInq(r){return{id:r.id,listingId:r.listing_id,listingTitle:r.listing_title||'',listingCity:r.listing_city||'',lf:r.listing_for||'rent',contact:'',name:r.inquirer_name||'',phone:r.inquirer_phone||'',email:r.inquirer_email||'',message:r.message||'',uid:r.user_id,sentAt:r.sent_at?(r.sent_at+'').split('T')[0]:''};}
function mapUsr(r){return{id:r.id,name:r.name,email:r.email,phone:r.phone||'',role:r.role||'user',agency:r.agency||'',lic:r.license_no||'',joinedAt:r.joined_at?(r.joined_at+'').split('T')[0]:'',verified:r.verified||false,trusted:r.is_trusted||false};}
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
let _projectsOnly=false;
let fVer=false, fRer=false;
let _cIdx={};
// Pagination
const PAGE_SIZE=30;
let _browseShown=0;       // How many listings currently rendered in browse grid
let _browseFiltered=[];   // Full filtered+sorted array for current browse view
let _adminPage={al:0,pd:0,rj:0,ls:0,bd:0,tn:0,ld:0}; // Per-tab page counters for admin
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
  el.innerHTML='<div class="mk-empty"><div class="mk-empty-icon">'+(icon||'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>'
    +'<div class="mk-empty-title">'+(title||'Nothing here yet')+'</div>'
    +'<div class="mk-empty-sub">'+(sub||'')+'</div></div>';
}

// ══ DATA ACCESS (Supabase) ══
async function gL(){
  if(_cacheL&&_cacheValid('l'))return _cacheL;
  var {data,error}=await sb.from('listings').select('id,listing_for,title,building_name,city,locality,property_type,beds,baths,area_sqft,rent,deposit,price,sale_type,possession,rera_no,contact_phone,owner_name,agency_name,tags,amenities,verified,status,rejection_reason,images,description,posted_at,user_id,user_role,furnishing,floor_range,facing,availability,is_project,project_status,completion_date,price_range_min,price_range_max,unit_types,carpet_area,built_up_area,super_built_up_area,property_age,furnishing_details,transaction_type,ownership,water_source,power_backup,floor_no,total_floors,landmarks,video_url').order('posted_at',{ascending:false});
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
  // Push a history entry so the browser Back button returns to the previous page.
  // Skip this when we're already responding to a Back/Forward event, or the hash isn't changing.
  var targetHash=pg==='home'?'':'#'+pg;
  var currentHash=window.location.hash||'';
  if(!_navFromHistory&&window.history&&window.history.pushState&&targetHash!==currentHash){
    window.history.pushState({pg:pg},'',targetHash||window.location.pathname);
  }
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

// ══ AUTH ══
function togglePw(id,btn){
  var inp=document.getElementById(id);if(!inp)return;
  inp.type=inp.type==='password'?'text':'password';
  btn.innerHTML=inp.type==='password'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg>';
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
  ['rrU','rrO','rrB','rrBd'].forEach(function(id){var e=document.getElementById(id);if(e)e.classList.remove('on');});
  var btnMap={'user':'rrU','owner':'rrO','broker':'rrB','builder':'rrBd'};
  var bt=document.getElementById(btnMap[r]||'rrU');if(bt)bt.classList.add('on');
  var rf=document.getElementById('rFrm');if(rf)rf.dataset.role=r;
  var ag=document.getElementById('rAg'),lc=document.getElementById('rLc');
  // Agency field shown for broker and builder; license shown only for broker (builders use RERA at project level)
  if(ag)ag.style.display=(r==='broker'||r==='builder')?'':'none';
  if(lc)lc.style.display=r==='broker'?'':'none';
  var agLabel=ag?ag.querySelector('.flbl'):null;
  if(agLabel)agLabel.textContent=r==='builder'?'Builder / Company Name *':'Agency Name';
  var nt=document.getElementById('rNote');
  if(nt){
    if(r==='broker'){nt.className='al alp';nt.textContent='Broker portal: photo uploads, lead tracking and CSV exports.';}
    else if(r==='builder'){nt.className='al alp';nt.textContent='Builder portal: launch new projects with multiple unit types, RERA details and brochures.';}
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
    var {data:profile,error:pErr}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified,is_trusted').eq('id',data.user.id).single();
    if(pErr)throw pErr;
    resetSessionState();
    cu={id:profile.id,name:profile.name,email:profile.email,phone:profile.phone||'',role:profile.role,agency:profile.agency||'',lic:profile.license_no||'',joinedAt:profile.joined_at?(profile.joined_at+'').split('T')[0]:'',verified:profile.verified||false};
    await loadFavs();
    await loadNotifs();
    closeM('authM');upNav();
    if(cu.role==='admin'){go('admin');toast('Welcome, Admin &#9881;');}
    else if(cu.role==='user'){go('dashboard');toast('Welcome back, '+esc(cu.name)+'! ');}
    else{go('lister');toast('Welcome back, '+esc(cu.name)+'! ');}
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
        toast('Account created! Please check your email to verify your address, then sign in. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg>');
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
      toast('Welcome to Ek Makān, '+esc(nm)+'! <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--g);"><use href="#i-sparkle"/></svg>');
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
    toast('Password updated successfully! You can now sign in. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg>');
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
  var agW=document.getElementById('profAgencyWrap');if(agW)agW.style.display=(cu.role==='broker'||cu.role==='builder')?'':'none';
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
    else if(cu.role==='builder'){updates.agency=ag;}
    var {error}=await sb.from('users').update(updates).eq('id',cu.id);
    if(error)throw error;
    // Also update auth metadata so it stays in sync
    await sb.auth.updateUser({data:{name:nm,phone:ph,role:cu.role,agency:ag,license_no:lc}});
    // Update local state
    cu.name=nm;cu.phone=ph;
    if(cu.role==='broker'){cu.agency=ag;cu.lic=lc;}
    else if(cu.role==='builder'){cu.agency=ag;}
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
  _projectsOnly=false;
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
  _adminPage={al:0,pd:0,rj:0,ls:0,bd:0,tn:0,ld:0};
  _editingListingId=null;
  // Reset Turnstile CAPTCHA
  _turnstileToken=null;
  // Favorites: clear in-memory and remove any persisted favorites tied to previous user
  favs=[];
  // Favorites cleared in memory (loaded from Supabase on next login)
  // Clear every text/number/select input we use across the app
  var idsToClear=[
    // Browse filter sidebar
    'fCity','fLoc','fRmn','fRmx','fAv','fBCity','fBLoc','fBmn','fBmx','fAmn','fAmx',
    // Search
    'bSearch',
    // Browse sort
    'bSort',
    // Hero rent search
    'hrc','hrt','hrb',
    // Hero buy search
    'hbc','hbbMin','hbbMax','hbd',
    // Listing form (addM)
    'lTl','lBn','lCy','lLo','lAr','lRt','lDp','lPr','lRe','lOw','lCt','lDs','lFl','lFc','lFn','lTp','lBd','lBt','lAv',
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
// Compact rent formatter: ₹45,000 → ₹45 K, ₹4,50,000 → ₹4.5 L, ₹1,50,00,000 → ₹1.5 Cr
function fmtRentHTML(v){
  if(!v||v<1000)return '&#8377;'+(v||0).toLocaleString('en-IN');
  if(v>=10000000)return '&#8377;'+(v/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';
  if(v>=100000)return '&#8377;'+(v/100000).toFixed(2).replace(/\.?0+$/,'')+' L';
  return '&#8377;'+Math.round(v/1000)+'K';
}
function fmtRent(v){
  if(!v||v<1000)return '\u20B9'+(v||0).toLocaleString('en-IN');
  if(v>=10000000)return '\u20B9'+(v/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';
  if(v>=100000)return '\u20B9'+(v/100000).toFixed(2).replace(/\.?0+$/,'')+' L';
  return '\u20B9'+Math.round(v/1000)+'K';
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
    // Multi-select types
    var tBoxes=document.querySelectorAll('#hbtMenu input[type="checkbox"]:checked');
    var types=[];tBoxes.forEach(function(cb){types.push(cb.value);});
    // Min/Max budget from dropdown values (exact numbers, -1 = 100Cr+ sentinel)
    var bgMin=Number(document.getElementById('hbbMin').value)||0;
    var bgMaxRaw=Number(document.getElementById('hbbMax').value)||0;
    var bgMax=bgMaxRaw===-1?Infinity:bgMaxRaw;
    var b2=document.getElementById('hbd').value;
    var fc2=document.getElementById('fBCity');if(fc2&&c2)fc2.value=c2;
    if(types.length)fBT=types;
    var fbmn=document.getElementById('fBmn');if(fbmn)fbmn.value=bgMin>0?bgMin:'';
    var fbx=document.getElementById('fBmx');if(fbx)fbx.value=bgMax===Infinity?'-1':(bgMax>0?bgMax:'');
    if(b2)fBB=[b2];
  }
  bldF();renderBrowse();
}

// ══ MULTI-SELECT DROPDOWN ══
function toggleMS(menuId){
  var menu=document.getElementById(menuId);
  if(!menu)return;
  var isOpen=menu.style.display!=='none';
  // Close all other menus
  document.querySelectorAll('.ms-menu').forEach(function(m){if(m!==menu)m.style.display='none';});
  document.querySelectorAll('.ms-btn').forEach(function(b){b.classList.remove('open');});
  // Toggle this one
  menu.style.display=isOpen?'none':'block';
  var btn=menu.previousElementSibling;
  if(btn&&btn.classList.contains('ms-btn'))btn.classList.toggle('open',!isOpen);
  // Wire change events once
  if(!menu.dataset.wired){
    menu.dataset.wired='1';
    menu.querySelectorAll('input[type="checkbox"]').forEach(function(cb){
      cb.addEventListener('change',function(){
        var labelEl=btn?btn.querySelector('span'):null;
        if(!labelEl)return;
        var selected=[];
        menu.querySelectorAll('input[type="checkbox"]:checked').forEach(function(c){selected.push(c.parentElement.textContent.trim());});
        if(!selected.length)labelEl.textContent='Any type';
        else if(selected.length===1)labelEl.textContent=selected[0];
        else labelEl.textContent=selected.length+' types selected';
      });
    });
  }
}
// Close ms menus when clicking outside
document.addEventListener('click',function(e){
  if(e.target.closest('.ms-wrap'))return;
  document.querySelectorAll('.ms-menu').forEach(function(m){m.style.display='none';});
  document.querySelectorAll('.ms-btn').forEach(function(b){b.classList.remove('open');});
});

// ══ BUDGET DROPDOWNS ══
// Build budget values per spec:
//   10L-1Cr step 10L, 1.5Cr-10Cr step 0.5Cr, 15Cr-100Cr step 5Cr, Max also has 100Cr+
var BUDGET_VALS=(function(){
  var vals=[];
  for(var v=1000000;v<=10000000;v+=1000000)vals.push(v);
  for(var v=15000000;v<=100000000;v+=5000000)vals.push(v);
  for(var v=150000000;v<=1000000000;v+=50000000)vals.push(v);
  return vals;
})();
function _fmtBudget(v){
  if(v>=10000000){
    var cr=v/10000000;
    return cr===Math.floor(cr)?cr+' Cr':cr.toFixed(1)+' Cr';
  }
  return Math.floor(v/100000)+' L';
}
function populateBudgetSelect(id,isMax){
  var el=document.getElementById(id);
  if(!el)return;
  var opts='<option value="">'+(isMax?'Max':'Min')+'</option>';
  BUDGET_VALS.forEach(function(v){opts+='<option value="'+v+'">\u20B9'+_fmtBudget(v)+'</option>';});
  if(isMax)opts+='<option value="-1">\u20B9100 Cr+</option>';
  el.innerHTML=opts;
}
// Populate all budget selects on page load
function initBudgetDropdowns(){
  populateBudgetSelect('hbbMin',false);
  populateBudgetSelect('hbbMax',true);
  populateBudgetSelect('fBmn',false);
  populateBudgetSelect('fBmx',true);
}
// Ensure Min <= Max. If user picks Min > current Max, bump Max. Vice versa.
function syncBudget(minId,maxId){
  var mn=document.getElementById(minId),mx=document.getElementById(maxId);
  if(!mn||!mx)return;
  var mnV=Number(mn.value)||0, mxV=Number(mx.value)||0;
  // -1 sentinel = "100Cr+" = Infinity
  var mxReal=mxV===-1?Infinity:mxV;
  if(mnV&&mxReal&&mnV>mxReal){
    // Adjust the one that wasn't just changed? Simplest: if min>max, clear max
    // But if the user changed min, they want that min — so bump max to match or beyond.
    // Pick the smallest budget option >= mnV
    var bumped=false;
    for(var i=0;i<BUDGET_VALS.length;i++){
      if(BUDGET_VALS[i]>=mnV){mx.value=BUDGET_VALS[i];bumped=true;break;}
    }
    if(!bumped)mx.value='-1'; // 100Cr+
  }
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
    :'<div class="mk-empty"><div class="mk-empty-icon"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg></div><div class="mk-empty-title">No rental listings yet</div><div class="mk-empty-sub">Be the first to <span onclick="openM(\'addM\')" style="color:var(--t);cursor:pointer;font-weight:700;">post a rental listing</span>!</div></div>';
  if(hfb)hfb.innerHTML=sales.length?sales.slice(0,3).map(pCard).join('')
    :'<div class="mk-empty"><div class="mk-empty-icon"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg></div><div class="mk-empty-title">No properties for sale yet</div><div class="mk-empty-sub">Be the first to <span onclick="openM(\'addM\')" style="color:var(--t);cursor:pointer;font-weight:700;">list a property for sale</span>!</div></div>';
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
  var isP=l.lf==='project'||l.isProject;
  var fv=favs.indexOf(l.id)>=0;
  var hasImgs=l.images&&l.images.length>0;
  var disp=hasImgs?(cu?l.images:l.images.slice(0,2)):[];
  var showLock=hasImgs&&l.images.length>2&&!cu;

  // ── Image section ──
  var imgHTML='<div class="pc-no-img"><svg class="icn icn-xl" aria-hidden="true" style="color:var(--mu);"><use href="#i-home"/></svg></div>';
  if(hasImgs){
    imgHTML='<img id="ci'+l.id+'" loading="lazy" decoding="async" src="'+disp[0]+'" alt="'+escAttr(l.title)+'"/>';
    if(disp.length>1){
      imgHTML+='<button class="arr l" onclick="event.stopPropagation();cSlide('+l.id+',-1)" aria-label="Previous photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-left"/></svg></button>';
      imgHTML+='<button class="arr r" onclick="event.stopPropagation();cSlide('+l.id+',1)" aria-label="Next photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-right"/></svg></button>';
    }
    if(showLock){
      imgHTML+='<div class="pc-blur">'
        +'<div style="font-size:26px;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-lock"/></svg></div>'
        +'<p>Sign up free to see all '+l.images.length+' photos &amp; contact details</p>'
        +'<button class="btn btn-sm" onclick="event.stopPropagation();openM(\'authM\')">Sign Up Free</button>'
        +'</div>';
    }
    var visCount=cu?l.images.length:Math.min(2,l.images.length);
    imgHTML+='<div class="pc-photo-cnt"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg> '+visCount+'/'+l.images.length+'</div>';
  }

  // ── Badges (top-right of info area) ──
  var badges=[];
  if(isP&&l.projectStatus==='New Launch')badges.push('<span class="pc-badge new-launch"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-sparkle"/></svg> New Launch</span>');
  else if(isP&&l.projectStatus)badges.push('<span class="pc-badge project">'+esc(l.projectStatus)+'</span>');
  if(l.verified)badges.push('<span class="pc-badge verified"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-check"/></svg> Verified</span>');
  if(!ir&&l.rera)badges.push('<span class="pc-badge rera">RERA</span>');
  if(!ir&&!isP&&l.stype==='New')badges.push('<span class="pc-badge new">New</span>');
  var badgesHTML=badges.length?'<div class="pc-badges">'+badges.join('')+'</div>':'';

  // ── Price block (compact, lakh/crore formatted) ──
  var priceHTML;
  if(isP){
    if(l.priceMax&&l.priceMax>l.priceMin){
      priceHTML='<div class="pc-price buy">'+fmtPriceHTML(l.priceMin)+' &ndash; '+fmtPriceHTML(l.priceMax)+'</div>';
    } else {
      priceHTML='<div class="pc-price buy">Starts '+fmtPriceHTML(l.priceMin||l.price)+'</div>';
    }
    if(l.completion){
      var cd=new Date(l.completion);
      if(!isNaN(cd))priceHTML+='<div class="pc-deposit">Possession: '+cd.toLocaleDateString('en-IN',{month:'short',year:'numeric'})+'</div>';
    }
  } else if(ir){
    priceHTML='<div class="pc-price">'+fmtRentHTML(l.rent)
      +'<span class="pc-price-unit">/mo</span></div>'
      +(l.dep?'<div class="pc-deposit">Deposit '+fmtRentHTML(l.dep)+'</div>':'');
  } else {
    priceHTML='<div class="pc-price buy">'+fmtPriceHTML(l.price)+'</div>'
      +(l.area>0?'<div class="pc-deposit">'+fmtPriceHTML(Math.round(l.price/l.area))+'/sq.ft</div>':'');
  }

  // ── Spec row (BHK · sq.ft · type) ──
  var specs=[];
  specs.push('<strong>'+l.beds+' BHK</strong>');
  if(l.area>0)specs.push('<strong>'+l.area+'</strong> sq.ft');
  if(l.type&&l.type!=='Apartment')specs.push(esc(l.type));
  else specs.push(esc(l.type));
  if(l.furnish)specs.push(esc(l.furnish));
  var specsHTML='<div class="pc-specs">'+specs.join('<span class="pc-dot">&middot;</span>')+'</div>';

  // ── Location line (building + locality + city) ──
  var locBits=[];
  if(l.building)locBits.push('<strong>'+esc(l.building)+'</strong>');
  if(l.loc)locBits.push(esc(l.loc));
  if(l.city)locBits.push(esc(l.city));
  var locHTML='<div class="pc-loc"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-pin"/></svg> '+locBits.join(', ')+'</div>';

  // ── Footer actions ──
  var footerHTML='<div class="pc-footer">'
    +'<button class="pc-btn-sec" onclick="event.stopPropagation();viewL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg> View Details</button>'
    +'<button class="pc-btn-pri '+(ir?'':'buy')+'" onclick="event.stopPropagation();oCnt('+l.id+')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg> '+(cu&&cu.id===l.uid?'View Number':'Send Inquiry')+'</button>'
    +'<button class="pc-btn-report" onclick="event.stopPropagation();openReport('+l.id+')" aria-label="Report discrimination" title="Report discrimination"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-flag"/></svg></button>'
    +'</div>';

  return '<a class="pc-link" href="'+_listingUrl(l.id)+'" onclick="return _cardClick(event,'+l.id+')" target="_blank" rel="noopener">'
    +'<div class="pc">'
    +'<div class="pc-img">'
      +'<div class="tbdg '+(isP?'proj':ir?'rent':'buy')+'">'+(isP?'New Project':ir?'For Rent':'For Sale')+'</div>'
      +'<button class="fave-btn" onclick="event.stopPropagation();event.preventDefault();togFav('+l.id+',this)" aria-label="Save to favorites" aria-pressed="'+(fv?'true':'false')+'"><svg class="icn icn-sm" aria-hidden="true"><use href="#'+(fv?'i-heart-fill':'i-heart')+'"/></svg></button>'
      +imgHTML
    +'</div>'
    +'<div class="pc-body">'
      +'<div class="pc-top">'
        +'<div class="pc-title">'+esc(l.title)+'</div>'
        +badgesHTML
      +'</div>'
      +locHTML
      +specsHTML
      +'<div class="pc-price-row">'+priceHTML+'</div>'
      +(l.tags.length?'<div class="pc-tags">'+l.tags.slice(0,3).map(function(t){return '<span class="pc-tag">'+esc(t)+'</span>';}).join('')+'</div>':'')
    +'</div>'
    +footerHTML
  +'</div></a>';
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
  _projectsOnly=false;
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
  _projectsOnly=false;
  ['fCity','fLoc','fRmn','fRmx','fBCity','fBLoc','fBmn','fBmx','fAmn','fAmx','bSearch'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
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
  // If "New Projects" mode is on, show only project listings; otherwise filter out projects from rent/buy
  var ls;
  if(_projectsOnly){
    ls=allApproved.filter(function(l){return l.lf==='project'||l.isProject;});
  } else {
    ls=allApproved.filter(function(l){return l.lf===bMode&&!l.isProject&&l.lf!=='project';});
  }
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
    var c=gv('fCity'),lo=gv('fLoc'),mn=Number(gv('fRmn'))||0,mx=Number(gv('fRmx'))||Infinity;
    var av=gv('fAv');
    if(c){ls=ls.filter(function(l){return l.city.toLowerCase().indexOf(c.toLowerCase())>=0;});hasAnyFilters=true;}
    if(lo){ls=ls.filter(function(l){return l.loc.toLowerCase().indexOf(lo.toLowerCase())>=0;});hasAnyFilters=true;}
    if(mn){ls=ls.filter(function(l){return l.rent>=mn;});hasAnyFilters=true;}
    if(mx!==Infinity){ls=ls.filter(function(l){return l.rent<=mx;});hasAnyFilters=true;}
    if(av){ls=ls.filter(function(l){return l.avail===av;});hasAnyFilters=true;}
    if(fRT.length){ls=ls.filter(function(l){return fRT.indexOf(l.type)>=0;});hasAnyFilters=true;}
    if(fRB.length){ls=ls.filter(function(l){return fRB.indexOf(l.beds)>=0;});hasAnyFilters=true;}
    if(fRF.length){ls=ls.filter(function(l){return fRF.indexOf(l.furnish)>=0;});hasAnyFilters=true;}
    if(fRA.length){ls=ls.filter(function(l){return fRA.every(function(a){return l.amens&&l.amens.indexOf(a)>=0;});});hasAnyFilters=true;}
  } else {
    var c2=gv('fBCity'),lo2=gv('fBLoc'),mn2=Number(gv('fBmn'))||0;
    var mx2raw=Number(gv('fBmx'))||0;
    var mx2=mx2raw===-1?Infinity:(mx2raw||Infinity);
    var amn=Number(gv('fAmn'))||0,amx=Number(gv('fAmx'))||Infinity;
    if(c2){ls=ls.filter(function(l){return l.city.toLowerCase().indexOf(c2.toLowerCase())>=0;});hasAnyFilters=true;}
    if(lo2){ls=ls.filter(function(l){return l.loc.toLowerCase().indexOf(lo2.toLowerCase())>=0;});hasAnyFilters=true;}
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
      grid.innerHTML='<div class="mk-empty" style="grid-column:1/-1;"><div class="mk-empty-icon"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-search"/></svg></div><div class="mk-empty-title">No listings match your filters</div><div class="mk-empty-sub">Try adjusting your criteria or <button onclick="clearAllF()" style="background:none;border:none;color:var(--t);cursor:pointer;font-weight:700;font-size:13px;font-family:\'DM Sans\',sans-serif;text-decoration:underline;">clearing all filters</button></div></div>';
    } else {
      var modeLbl=bMode==='rent'?'rental':'sale';
      grid.innerHTML='<div class="mk-empty" style="grid-column:1/-1;"><div class="mk-empty-icon">'+(bMode==='rent'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>')+'</div><div class="mk-empty-title">No '+modeLbl+' listings yet</div><div class="mk-empty-sub">Be the first to post! <span onclick="openM(\'addM\')" style="color:var(--t);cursor:pointer;font-weight:700;">List a property for free</span></div></div>';
    }
  }
  // Active chips
  var chips=[];
  // Search chip
  if(sq)chips.push({l:'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-search"/></svg> "'+esc(sq)+'"',x:function(){var e=document.getElementById('bSearch');if(e)e.value='';renderBrowse();}});
  if(bMode==='rent'){
    if(gv('fCity'))chips.push({l:'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg> '+gv('fCity'),x:function(){var e=document.getElementById('fCity');if(e)e.value='';renderBrowse();}});
    if(gv('fLoc'))chips.push({l:'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg> '+gv('fLoc'),x:function(){var e=document.getElementById('fLoc');if(e)e.value='';renderBrowse();}});
    if(gv('fRmn'))chips.push({l:'&#8377;'+Number(gv('fRmn')).toLocaleString('en-IN')+'+ min',x:function(){var e=document.getElementById('fRmn');if(e)e.value='';renderBrowse();}});
    if(gv('fRmx'))chips.push({l:'&#8804;&#8377;'+Number(gv('fRmx')).toLocaleString('en-IN'),x:function(){var e=document.getElementById('fRmx');if(e)e.value='';renderBrowse();}});
    if(gv('fAv'))chips.push({l:'&#9201; '+gv('fAv'),x:function(){var e=document.getElementById('fAv');if(e)e.value='';renderBrowse();}});
    fRT.forEach(function(v){chips.push({l:v,x:function(){togCk('fRT',v);}});});
    fRB.forEach(function(v){chips.push({l:v+' BHK',x:function(){togCk('fRB',v);}});});
    fRF.forEach(function(v){chips.push({l:v,x:function(){togCk('fRF',v);}});});
    fRA.forEach(function(v){chips.push({l:v,x:function(){togAm('fRA',v);}});});
  } else {
    if(gv('fBCity'))chips.push({l:'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg> '+gv('fBCity'),x:function(){var e=document.getElementById('fBCity');if(e)e.value='';renderBrowse();}});
    if(gv('fBLoc'))chips.push({l:'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg> '+gv('fBLoc'),x:function(){var e=document.getElementById('fBLoc');if(e)e.value='';renderBrowse();}});
    if(gv('fBmn'))chips.push({l:fmtPriceHTML(Number(gv('fBmn')))+'+ min',x:function(){var e=document.getElementById('fBmn');if(e)e.value='';renderBrowse();}});
    if(gv('fBmx')){
      var mxV=Number(gv('fBmx'));
      var mxLbl=mxV===-1?'\u20B9100 Cr+':'&#8804;'+fmtPriceHTML(mxV);
      chips.push({l:mxLbl,x:function(){var e=document.getElementById('fBmx');if(e)e.value='';renderBrowse();}});
    }
    if(gv('fAmn'))chips.push({l:gv('fAmn')+'+ sq.ft',x:function(){var e=document.getElementById('fAmn');if(e)e.value='';renderBrowse();}});
    fBT.forEach(function(v){chips.push({l:v,x:function(){togCk('fBT',v);}});});
    fBB.forEach(function(v){chips.push({l:v+' BHK',x:function(){togCk('fBB',v);}});});
    fBF.forEach(function(v){chips.push({l:v,x:function(){togCk('fBF',v);}});});
    fBPo.forEach(function(v){chips.push({l:v,x:function(){togCk('fBPo',v);}});});
    fBST.forEach(function(v){chips.push({l:v,x:function(){togCk('fBST',v);}});});
    fBFc.forEach(function(v){chips.push({l:'&#8679; '+v,x:function(){togCk('fBFc',v);}});});
    fBFl.forEach(function(v){chips.push({l:'Floor: '+v,x:function(){togCk('fBFl',v);}});});
    fBA.forEach(function(v){chips.push({l:v,x:function(){togAm('fBA',v);}});});
    if(fRer)chips.push({l:'RERA <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>',x:function(){fRer=false;bldF();renderBrowse();}});
  }
  if(fVer)chips.push({l:'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> Verified',x:function(){fVer=false;bldF();renderBrowse();}});
  window._chips=chips;
  var ac=document.getElementById('activeChips');
  if(ac){
    if(chips.length){
      ac.style.display='flex';
      var html=chips.map(function(c,i){return '<button class="chip" onclick="if(window._chips&&window._chips['+i+'])window._chips['+i+'].x()">'+c.l+' <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg></button>';}).join('');
      if(chips.length>1)html+='<button class="chip chip-clear-all" onclick="clearAllF()">Clear All <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg></button>';
      ac.innerHTML=html;
    } else {ac.style.display='none';}
  }
}

// ══ FAVORITES ══
// ══ SIMILAR PROPERTIES ══
// Score similarity by: same city > same locality > same type > same BHK > price within 30%
async function renderSimilarProperties(currentL){
  var container=document.getElementById('vSimilar');
  if(!container){
    // Inject the container at the bottom of vCnt
    var vCnt=document.getElementById('vCnt');
    if(!vCnt)return;
    var div=document.createElement('div');
    div.id='vSimilar';
    div.style.marginTop='30px';
    vCnt.appendChild(div);
    container=div;
  }
  container.innerHTML='<div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:10px;">Similar Properties</div><div style="font-size:12px;color:var(--mu);">Loading…</div>';
  try{
    var allApproved=(await gL()).filter(function(l){return l.status==='approved'&&l.id!==currentL.id;});
    // Score each candidate
    var scored=allApproved.map(function(l){
      var score=0;
      // Same listing-for type (rent vs buy vs project) is mandatory match
      if(l.lf!==currentL.lf)return null;
      if(l.city===currentL.city)score+=4;
      if(l.loc&&currentL.loc&&l.loc===currentL.loc)score+=3;
      if(l.type===currentL.type)score+=2;
      if(l.beds===currentL.beds)score+=2;
      // Price proximity
      var p=currentL.lf==='rent'?currentL.rent:currentL.price;
      var lp=currentL.lf==='rent'?l.rent:l.price;
      if(p&&lp){
        var ratio=Math.abs(p-lp)/p;
        if(ratio<0.15)score+=2;
        else if(ratio<0.3)score+=1;
      }
      // Same agency / lister bonus
      if(l.agency&&currentL.agency&&l.agency===currentL.agency)score+=1;
      return {l:l,score:score};
    }).filter(function(x){return x&&x.score>=2;}).sort(function(a,b){return b.score-a.score;}).slice(0,8);

    if(!scored.length){
      container.innerHTML='';
      return;
    }
    container.innerHTML='<div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:10px;">Similar Properties</div>'
      +'<div class="similar-strip">'
      +scored.map(function(s){return _similarCard(s.l);}).join('')
      +'</div>';
  }catch(e){
    console.error('renderSimilarProperties:',e);
    container.innerHTML='';
  }
}

function _similarCard(l){
  var ir=l.lf==='rent';
  var isProj=l.lf==='project'||l.isProject;
  var img=l.images&&l.images.length?l.images[0]:'';
  var price;
  if(isProj){
    if(l.priceMax&&l.priceMax>l.priceMin)price=fmtPriceHTML(l.priceMin)+' &ndash; '+fmtPriceHTML(l.priceMax);
    else price='Starts '+fmtPriceHTML(l.priceMin||l.price);
  } else if(ir){
    price=fmtRentHTML(l.rent)+'/mo';
  } else {
    price=fmtPriceHTML(l.price);
  }
  return '<a class="sim-link" href="'+_listingUrl(l.id)+'" target="_blank" rel="noopener">'
    +'<div class="sim-card">'
    +'<div class="sim-img">'+(img?'<img src="'+img+'" alt="'+escAttr(l.title)+'" loading="lazy"/>':'<div class="sim-no-img"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-home"/></svg></div>')+'</div>'
    +'<div class="sim-body">'
    +'<div class="sim-title">'+esc(l.title)+'</div>'
    +(l.building?'<div class="sim-bld">'+esc(l.building)+'</div>':'')
    +'<div class="sim-loc"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-pin"/></svg> '+esc(l.loc||l.city)+'</div>'
    +'<div class="sim-meta">'+l.beds+' BHK'+(l.area?' &middot; '+l.area+' sq.ft':'')+'</div>'
    +'<div class="sim-price '+(ir?'rent':'buy')+'">'+price+'</div>'
    +'</div></div></a>';
}

// ══ PRICE CALCULATOR ══
// Live preview of: per-sqft on carpet, est. govt charges, total cost to buyer
function updatePriceCalc(){
  var price=Number((document.getElementById('lPr')||{}).value)||0;
  var carpet=Number((document.getElementById('lArC')||{}).value)||0;
  var built=Number((document.getElementById('lAr')||{}).value)||0;
  var box=document.getElementById('lPrCalc');
  if(!box)return;
  if(!price){box.style.display='none';return;}
  box.style.display='';
  var lines=[];
  lines.push('<strong style="color:var(--ink);">Price breakdown preview</strong>');
  lines.push('Listed price: <strong>'+fmtPriceHTML(price)+'</strong>');
  if(carpet)lines.push('Per sq.ft (carpet): <strong>'+fmtPriceHTML(Math.round(price/carpet))+'</strong>');
  if(built&&built!==carpet)lines.push('Per sq.ft (built-up): <strong>'+fmtPriceHTML(Math.round(price/built))+'</strong>');
  // Govt charges estimate (Maharashtra typical: 6% stamp + 1% reg + 1% surcharge ≈ ~7%; plus GST 5% for under-construction)
  var stampAndReg=Math.round(price*0.07);
  var totalEst=price+stampAndReg;
  lines.push('Est. govt charges <span style="color:var(--mu);">(stamp duty + registration ≈ 7%)</span>: <strong>'+fmtPriceHTML(stampAndReg)+'</strong>');
  lines.push('<span style="color:var(--g);font-weight:700;">Estimated total cost: '+fmtPriceHTML(totalEst)+'</span>');
  lines.push('<span style="font-size:10px;color:var(--mu);">Note: GST (5% for under-construction) and other municipal charges may apply. Please consult a property advisor for exact figures.</span>');
  box.innerHTML=lines.join('<br/>');
}

// ══ PRICE COMPARISON ══
// Build a comparison panel showing price/sqft stats for the current listing's locality
async function buildPriceComparison(currentL){
  if(currentL.lf==='rent')return ''; // Only for sale/project
  var carpetA=currentL.carpetArea||currentL.builtArea||currentL.area||0;
  var basePrice=currentL.lf==='project'?(currentL.priceMin||currentL.price||0):(currentL.price||0);
  if(!basePrice||!carpetA)return ''; // Need both to compute per-sqft
  var thisPSF=Math.round(basePrice/carpetA);
  try{
    var allApproved=(await gL()).filter(function(l){
      if(l.id===currentL.id||l.status!=='approved')return false;
      if(l.lf==='rent')return false;
      var a=l.carpetArea||l.builtArea||l.area||0;
      var p=l.lf==='project'?(l.priceMin||l.price||0):(l.price||0);
      return a>0&&p>0;
    });
    // Same locality first; fall back to city if not enough data
    var sameLoc=allApproved.filter(function(l){return l.loc&&currentL.loc&&l.loc===currentL.loc;});
    var sameCity=allApproved.filter(function(l){return l.city===currentL.city;});
    var pool=sameLoc.length>=3?sameLoc:sameCity;
    var poolLabel=sameLoc.length>=3?(currentL.loc||'this locality'):(currentL.city||'this city');
    if(pool.length<3)return ''; // Not enough data to compare
    // Compute per-sqft for each
    var psfs=pool.map(function(l){
      var a=l.carpetArea||l.builtArea||l.area||0;
      var p=l.lf==='project'?(l.priceMin||l.price||0):(l.price||0);
      return Math.round(p/a);
    }).sort(function(a,b){return a-b;});
    var min=psfs[0], max=psfs[psfs.length-1];
    var avg=Math.round(psfs.reduce(function(s,v){return s+v;},0)/psfs.length);
    var median=psfs[Math.floor(psfs.length/2)];
    // Position of this listing on the scale (0-100%)
    var pct=max>min?Math.max(0,Math.min(100,Math.round(((thisPSF-min)/(max-min))*100))):50;
    // Verdict: above/below/at average
    var diff=thisPSF-avg;
    var diffPct=avg?Math.round((diff/avg)*100):0;
    var verdict, verdictColor;
    if(Math.abs(diffPct)<=5){verdict='Right at the average';verdictColor='var(--t)';}
    else if(diffPct>0){verdict=diffPct+'% above the average';verdictColor='#c55a00';}
    else{verdict=Math.abs(diffPct)+'% below the average — good deal';verdictColor='var(--gr)';}
    // Render
    return '<div style="margin-bottom:18px;background:#fff;border:1px solid var(--sa);border-radius:10px;padding:16px;">'
      +'<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;flex-wrap:wrap;gap:6px;">'
      +'<div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;">Price Comparison &middot; '+esc(poolLabel)+'</div>'
      +'<div style="font-size:11px;color:var(--mu);">Based on '+pool.length+' listing'+(pool.length>1?'s':'')+'</div>'
      +'</div>'
      +'<div style="font-size:13px;color:'+verdictColor+';font-weight:700;margin-bottom:14px;">This listing is '+verdict+'</div>'
      // Bar chart
      +'<div style="position:relative;height:8px;background:linear-gradient(to right,#e4f5ea,var(--cr),#fff5f5);border-radius:50px;margin-bottom:14px;">'
      +'<div style="position:absolute;left:'+pct+'%;top:-6px;transform:translateX(-50%);width:3px;height:20px;background:var(--ink);border-radius:50px;"></div>'
      +'<div style="position:absolute;left:'+pct+'%;top:24px;transform:translateX(-50%);background:var(--ink);color:#fff;padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;font-family:\'DM Sans\',sans-serif;white-space:nowrap;">This: &#8377;'+thisPSF.toLocaleString('en-IN')+'/sq.ft</div>'
      +'</div>'
      // Legend with min/avg/max
      +'<div style="display:flex;justify-content:space-between;margin-top:38px;font-size:11px;font-family:\'DM Sans\',sans-serif;">'
      +'<div><div style="color:var(--gr);font-weight:700;">Lowest</div><div style="font-size:13px;font-weight:700;color:var(--ink);">&#8377;'+min.toLocaleString('en-IN')+'</div></div>'
      +'<div style="text-align:center;"><div style="color:var(--mu);font-weight:700;">Average</div><div style="font-size:13px;font-weight:700;color:var(--ink);">&#8377;'+avg.toLocaleString('en-IN')+'</div></div>'
      +'<div style="text-align:center;"><div style="color:var(--mu);font-weight:700;">Median</div><div style="font-size:13px;font-weight:700;color:var(--ink);">&#8377;'+median.toLocaleString('en-IN')+'</div></div>'
      +'<div style="text-align:right;"><div style="color:#c55a00;font-weight:700;">Highest</div><div style="font-size:13px;font-weight:700;color:var(--ink);">&#8377;'+max.toLocaleString('en-IN')+'</div></div>'
      +'</div>'
      +'<p style="font-size:10px;color:var(--mu);margin-top:10px;line-height:1.5;">Based on listings currently active on Ek Makān. Per sq.ft computed on carpet area where available, else built-up area.</p>'
      +'</div>';
  }catch(e){
    console.error('buildPriceComparison error:',e);
    return '';
  }
}

// ══ LANDMARKS ══
// Each landmark: {category, name, distance}
var _landmarks=[];
var LM_ICONS={
  hospital:'🏥', school:'🎓', college:'📚', metro:'🚇', bus:'🚌',
  airport:'✈️', railway:'🚆', mall:'🛍️', market:'🛒', park:'🌳',
  restaurant:'🍽️', gym:'💪', bank:'🏦', temple:'🛕', office:'🏢', other:'📍'
};
var LM_LABELS={
  hospital:'Hospital', school:'School', college:'College', metro:'Metro',
  bus:'Bus', airport:'Airport', railway:'Railway', mall:'Mall',
  market:'Market', park:'Park', restaurant:'Restaurant', gym:'Gym',
  bank:'Bank/ATM', temple:'Place of Worship', office:'Office Hub', other:'Landmark'
};

function renderLandmarks(){
  var list=document.getElementById('lLandmarksList');
  if(!list)return;
  list.innerHTML=_landmarks.map(function(lm,i){
    var ico=LM_ICONS[lm.category]||'📍';
    return '<span class="lm-chip">'
      +'<span class="lm-chip-ico">'+ico+'</span>'
      +esc(lm.name)
      +(lm.distance?'<span class="lm-chip-dist">'+esc(lm.distance)+'</span>':'')
      +'<button type="button" class="lm-chip-rm" onclick="removeLandmark('+i+')" aria-label="Remove">&times;</button>'
    +'</span>';
  }).join('');
}

function addLandmark(){
  var catEl=document.getElementById('lLmCat');
  var nmEl=document.getElementById('lLmName');
  var dsEl=document.getElementById('lLmDist');
  if(!catEl||!nmEl)return;
  var name=(nmEl.value||'').trim();
  if(!name){toast('Please enter a landmark name.','e');nmEl.focus();return;}
  if(name.length>80){toast('Landmark name too long (max 80 chars).','e');return;}
  if(_landmarks.length>=20){toast('Maximum 20 landmarks.','e');return;}
  var dist=(dsEl?dsEl.value||'':'').trim();
  if(dist.length>20)dist=dist.substring(0,20);
  // De-dupe by name (case-insensitive) within same category
  var dupe=_landmarks.some(function(lm){
    return lm.category===catEl.value&&lm.name.toLowerCase()===name.toLowerCase();
  });
  if(dupe){toast('Already added.','e');return;}
  _landmarks.push({category:catEl.value,name:name,distance:dist});
  renderLandmarks();
  // Clear fields and refocus
  nmEl.value='';
  if(dsEl)dsEl.value='';
  nmEl.focus();
}

function removeLandmark(idx){
  if(idx>=0&&idx<_landmarks.length){
    _landmarks.splice(idx,1);
    renderLandmarks();
  }
}

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
  if(btn){
    var isFav=favs.indexOf(id)>=0;
    btn.style.color=isFav?'#d9534f':'#fff';
    btn.innerHTML='<svg class="icn icn-sm" aria-hidden="true"><use href="#'+(isFav?'i-heart-fill':'i-heart')+'"/></svg>';
    btn.setAttribute('aria-pressed',isFav?'true':'false');
  }
  // Sync detail-view shortlist button if it's open for this listing
  if(_currentDetailId===id)updateShortlistBtnState();
  // Re-render browse to show updated heart state on cards
  if(document.querySelector('.page#pg-browse.active'))await renderBrowse();
}

// ══ DETAIL-VIEW SHORTLIST ══
var _currentDetailId=null;
function togFavFromDetail(){
  if(!cu){openM('authM');return;}
  if(!_currentDetailId)return;
  togFav(_currentDetailId,null);
}
function updateShortlistBtnState(){
  var btn=document.getElementById('vShortlist');
  var lbl=document.getElementById('vShortlistLbl');
  if(!btn||!_currentDetailId)return;
  var on=favs.indexOf(_currentDetailId)>=0;
  btn.setAttribute('aria-pressed',on?'true':'false');
  var useEl=btn.querySelector('use');
  if(useEl)useEl.setAttribute('href',on?'#i-heart-fill':'#i-heart');
  if(lbl)lbl.textContent=on?'Shortlisted':'Shortlist';
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
      var {data,error}=await sb.from('listings').select('id,listing_for,title,building_name,city,locality,property_type,beds,baths,area_sqft,rent,deposit,price,sale_type,possession,rera_no,contact_phone,owner_name,agency_name,tags,amenities,verified,status,rejection_reason,images,description,posted_at,user_id,user_role,furnishing,floor_range,facing,availability,is_project,project_status,completion_date,price_range_min,price_range_max,unit_types,carpet_area,built_up_area,super_built_up_area,property_age,furnishing_details,transaction_type,ownership,water_source,power_backup,floor_no,total_floors,landmarks,video_url').eq('id',id).eq('status','approved').single();
      if(data&&!error)l=mapL(data);
    }catch(e){}
  }
  if(!l){
    if(vTit)vTit.textContent='Not Found';
    if(vCnt)vCnt.innerHTML='<div class="mk-error"><div class="mk-error-icon"><svg class="icn icn-xl" aria-hidden="true" style="color:var(--red);"><use href="#i-x"/></svg></div><div class="mk-error-msg">This listing may have been removed or is no longer available.</div><button class="mk-error-retry" onclick="closeM(\'viewM\')">Go Back</button></div>';
    return;
  }
  var ir=l.lf==='rent';
  document.getElementById('vTit').innerHTML=esc(l.title)+(l.building?'<div style="font-size:13px;font-weight:500;color:var(--mu);margin-top:4px;font-family:\'DM Sans\',sans-serif;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--t);"><use href="#i-broker"/></svg> '+esc(l.building)+'</div>':'');
  var imgH='<div style="height:160px;background:linear-gradient(135deg,var(--tl),var(--sa));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:60px;margin-bottom:14px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg></div>';
  if(l.images&&l.images.length>0){
    var disp=cu?l.images:l.images.slice(0,2);
    window._vI=disp;window._vIdx=0;
    imgH='<div class="dv-img" id="dvImgWrap" style="--dv-bg:url('+JSON.stringify(disp[0])+');">'
      +'<img src="'+disp[0]+'" id="vImg" alt="'+escAttr(l.title)+'"/>'
      +(disp.length>1?'<button class="arr l" onclick="_vS(-1)" aria-label="Previous photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-left"/></svg></button><button class="arr r" onclick="_vS(1)" aria-label="Next photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-right"/></svg></button>':'')
      +'</div>'
      +'<div class="dv-img-counter" id="vImgCounter">'+(disp.length>1?'1 / '+disp.length:'')+'</div>';
    if(!cu&&l.images.length>2){
      imgH+='<div class="lock-box"><div style="font-size:30px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg></div>'
        +'<p>'+( l.images.length-2)+' more photo'+(l.images.length-2>1?'s':'')+' unlock after free sign-up.</p>'
        +'<button class="btn btn-sm" onclick="openM(\'authM\')">Sign Up Free — Instant</button></div>';
    }
  }
  // Walk-through video — shown to signed-in users only (same gating as photos beyond first 2)
  if(l.videoUrl){
    if(cu){
      imgH+='<div style="margin-top:8px;margin-bottom:14px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--t);"><use href="#i-eye"/></svg> Walk-through Video</div>'
        +'<video src="'+escAttr(l.videoUrl)+'" controls preload="metadata" playsinline style="width:100%;max-height:420px;background:#000;border-radius:12px;"></video>'
        +'</div>';
    } else {
      imgH+='<div class="lock-box" style="margin-top:8px;"><div style="font-size:30px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg></div>'
        +'<p>Walk-through video unlocks after free sign-up.</p>'
        +'<button class="btn btn-sm" onclick="openM(\'authM\')">Sign Up Free</button></div>';
    }
  }
  // Contact details visibility:
  //   - Lister of this listing (they own it) → full contact info
  //   - Admin → full contact info (for moderation)
  //   - Anyone else (including signed-in renters/buyers) → name/agency only, no phone
  //     Tenants can only reach out via the inquiry form to generate leads.
  var canSeeFullContact=cu&&(cu.id===l.uid||cu.role==='admin');
  var cntH;
  if(!cu){
    cntH='<div class="lock-box"><div style="font-size:30px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg></div><p>Sign up free to send an inquiry and contact the '+(l.urole==='broker'?'broker':l.urole==='builder'?'builder':'owner')+'.</p><button class="btn" onclick="openM(\'authM\')">Sign Up Free</button></div>';
  } else if(canSeeFullContact){
    cntH='<div class="al alg" style="margin-bottom:13px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-phone"/></svg> <strong>'+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+'</strong> &nbsp;|&nbsp; '+esc(l.contact)+'</div>';
  } else {
    // Signed-in but not the lister — show name + agency, hide phone, prompt inquiry
    cntH='<div style="background:var(--tl);border:1px solid var(--t);border-radius:10px;padding:14px;margin-bottom:13px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">'
      +'<div style="flex:1;min-width:180px;"><div style="font-size:11px;color:var(--mu);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px;font-weight:700;">Listed by</div>'
      +'<strong style="font-size:15px;color:var(--td);">'+esc(l.owner)+'</strong>'
      +(l.agency?'<div style="font-size:12px;color:var(--mu);margin-top:2px;">'+esc(l.agency)+'</div>':'')
      +'</div>'
      +'<button class="btn" onclick="oCnt('+l.id+')" style="background:var(--t);color:#fff;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-family:\'DM Sans\',sans-serif;font-weight:700;font-size:13px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Send Inquiry</button>'
      +'</div>'
      +'<p style="font-size:11px;color:var(--mu);margin:-8px 0 13px;padding-left:4px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> For privacy, contact details are exchanged only through the inquiry system.</p>';
  }
  var tagsH=l.tags.map(function(t){return '<span class="tag">'+esc(t)+'</span>';}).join('');
  if(l.rera)tagsH+='<span class="tag tag-g">RERA <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg></span>';
  var amH=l.amens&&l.amens.length?'<div style="margin-bottom:13px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px;">Amenities</div><div style="display:flex;gap:6px;flex-wrap:wrap;">'+l.amens.map(function(a){return '<span style="font-size:12px;padding:4px 10px;background:var(--cr);border-radius:6px;border:1px solid var(--sa);">'+esc(a)+'</span>';}).join('')+'</div></div>':'';
  // For projects: custom price display + unit types table
  var isProj=l.lf==='project'||l.isProject;
  var priceDisplay;
  if(isProj){
    if(l.priceMax&&l.priceMax>l.priceMin){
      priceDisplay=fmtPriceHTML(l.priceMin)+' &ndash; '+fmtPriceHTML(l.priceMax);
    } else {
      priceDisplay='Starts '+fmtPriceHTML(l.priceMin||l.price);
    }
  } else if(ir){
    priceDisplay=fmtRentHTML(l.rent)+'/mo';
  } else {
    priceDisplay=fmtPriceHTML(l.price);
  }
  var priceLbl=isProj?'PRICE RANGE':(ir?'RENT':'PRICE');
  // Price breakdown panel (buy and projects only)
  var priceBreakdownHTML='';
  if(!ir){
    var basePrice=isProj?(l.priceMin||l.price||0):(l.price||0);
    if(basePrice>0){
      var carpetA=l.carpetArea||0, builtA=l.builtArea||l.area||0;
      var stamp=Math.round(basePrice*0.07);
      var totalEst=basePrice+stamp;
      var rows=[];
      rows.push('<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--sa);"><span style="color:var(--mu);font-size:12px;">Listed price</span><strong style="color:var(--g);">'+fmtPriceHTML(basePrice)+'</strong></div>');
      if(carpetA){
        rows.push('<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--sa);"><span style="color:var(--mu);font-size:12px;">Per sq.ft <span style="font-size:10px;">(carpet)</span></span><strong style="font-size:13px;">'+fmtPriceHTML(Math.round(basePrice/carpetA))+'</strong></div>');
      }
      if(builtA&&builtA!==carpetA){
        rows.push('<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--sa);"><span style="color:var(--mu);font-size:12px;">Per sq.ft <span style="font-size:10px;">(built-up)</span></span><strong style="font-size:13px;">'+fmtPriceHTML(Math.round(basePrice/builtA))+'</strong></div>');
      }
      rows.push('<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--sa);"><span style="color:var(--mu);font-size:12px;">Govt charges <span style="font-size:10px;">(stamp + reg ≈ 7%)</span></span><strong style="font-size:13px;">+ '+fmtPriceHTML(stamp)+'</strong></div>');
      rows.push('<div style="display:flex;justify-content:space-between;padding:10px 0 4px;"><span style="font-weight:700;color:var(--ink);">Estimated total</span><strong style="color:var(--g);font-size:16px;">'+fmtPriceHTML(totalEst)+'</strong></div>');
      priceBreakdownHTML='<div style="margin-bottom:18px;background:var(--cr);border:1px solid var(--sa);border-radius:10px;padding:14px 16px;">'
        +'<div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;">Price Breakdown</div>'
        +rows.join('')
        +'<p style="font-size:10.5px;color:var(--mu);margin-top:8px;line-height:1.5;">GST (5% for under-construction), maintenance deposit and other charges may apply. Consult a property advisor for exact figures.</p>'
        +'</div>';
    }
  }
  // Unit types table (for projects)
  var unitsTableHTML='';
  if(isProj&&l.unitTypes&&l.unitTypes.length){
    unitsTableHTML='<div style="margin-bottom:16px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;">Unit Configurations</div>'
      +'<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:13px;font-family:\'DM Sans\',sans-serif;border:1px solid var(--sa);border-radius:8px;overflow:hidden;">'
      +'<thead><tr style="background:var(--cr);text-align:left;"><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Configuration</th><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Area</th><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Price Range</th></tr></thead><tbody>'
      +l.unitTypes.map(function(u){
        var pr;
        if(u.priceMax&&u.priceMax>u.priceMin)pr=fmtPriceHTML(u.priceMin)+' &ndash; '+fmtPriceHTML(u.priceMax);
        else if(u.priceMin)pr=fmtPriceHTML(u.priceMin);
        else pr='—';
        return '<tr style="border-top:1px solid var(--sa);"><td style="padding:10px 14px;font-weight:700;color:var(--ink);">'+esc(u.bhk||'—')+'</td><td style="padding:10px 14px;color:var(--ink);">'+(u.area?u.area+' sq.ft':'—')+'</td><td style="padding:10px 14px;font-weight:700;color:var(--g);">'+pr+'</td></tr>';
      }).join('')
      +'</tbody></table></div></div>';
  }
  // Build area display — use specific values if present, fall back to old area_sqft
  var areaParts=[];
  if(l.carpetArea)areaParts.push('<div style="font-size:11px;"><span style="color:var(--mu);">Carpet</span> <strong>'+l.carpetArea+'</strong></div>');
  if(l.builtArea||l.area){var ba=l.builtArea||l.area;areaParts.push('<div style="font-size:11px;"><span style="color:var(--mu);">Built-up</span> <strong>'+ba+'</strong></div>');}
  if(l.superArea)areaParts.push('<div style="font-size:11px;"><span style="color:var(--mu);">Super</span> <strong>'+l.superArea+'</strong></div>');
  var areaHTML=areaParts.length
    ?'<div class="ic"><div class="ll">AREA (sq.ft)</div>'+(areaParts.length>1?'<div style="display:flex;flex-direction:column;gap:3px;margin-top:2px;">'+areaParts.join('')+'</div>':'<strong>'+(l.carpetArea||l.builtArea||l.superArea||l.area||'—')+' sq.ft</strong>')+'</div>'
    :'<div class="ic"><div class="ll">AREA</div><strong>'+(l.area||'—')+' sq.ft</strong></div>';
  // Furnishing details (icon grid, read-only)
  var furnDetH='';
  if(l.furnDetails&&l.furnDetails.length){
    furnDetH='<div style="margin-bottom:16px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;">What\'s Included</div>'
      +'<div class="furn-display">'
      +l.furnDetails.map(function(code){
        var it=FURN_MAP[code];
        if(!it)return '';
        return '<div class="furn-disp-item"><span class="furn-icon">'+it.icon+'</span><span>'+esc(it.label)+'</span></div>';
      }).join('')
      +'</div></div>';
  }
  // Landmarks display (read-only chips on detail view)
  var landmarksH='';
  if(l.landmarks&&l.landmarks.length){
    // Sort by category for grouping feel
    var sorted=l.landmarks.slice().sort(function(a,b){return (a.category||'').localeCompare(b.category||'');});
    landmarksH='<div style="margin-bottom:16px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--t);"><use href="#i-pin"/></svg> Nearby Landmarks</div>'
      +'<div class="lm-display">'
      +sorted.map(function(lm){
        var ico=LM_ICONS[lm.category]||'📍';
        return '<div class="lm-disp-item"><span>'+ico+'</span><span>'+esc(lm.name)+'</span>'+(lm.distance?'<span class="lm-chip-dist">'+esc(lm.distance)+'</span>':'')+'</div>';
      }).join('')
      +'</div></div>';
  }
  // Floor display: prefer specific floor_no/total_floors, fall back to old range
  var floorDisplay='—';
  if(l.floorNo!=null&&l.totalFloors){
    var fn=l.floorNo===0?'Ground':(l.floorNo+(l.floorNo===1?'st':l.floorNo===2?'nd':l.floorNo===3?'rd':'th'));
    floorDisplay=fn+' of '+l.totalFloors;
  } else if(l.floorNo!=null){
    floorDisplay=l.floorNo===0?'Ground':l.floorNo;
  } else if(l.floor){
    floorDisplay=esc(l.floor);
  }
  // Water source display
  var waterDisplay=l.water?l.water.split(',').map(function(w){
    if(w==='Municipal')return 'Municipal';
    if(w==='Borewell')return 'Borewell/Tank';
    if(w==='24x7')return '24x7 Water';
    return w;
  }).join(', '):'';
  document.getElementById('vCnt').innerHTML=imgH
    +(tagsH?'<div class="tags-r" style="margin-bottom:12px;">'+tagsH+'</div>':'')
    +'<div class="info-g">'
    +'<div class="ic"><div class="ll">'+priceLbl+'</div><strong style="color:'+(ir?'var(--t)':'var(--g)')+';">'+priceDisplay+'</strong></div>'
    +(ir?'<div class="ic"><div class="ll">DEPOSIT</div><strong>&#8377;'+l.dep.toLocaleString('en-IN')+'</strong></div>':'')
    +'<div class="ic"><div class="ll">TYPE</div><strong>'+esc(l.type)+' &middot; '+l.beds+'BHK &middot; '+l.baths+'B</strong></div>'
    +areaHTML
    +(l.age?'<div class="ic"><div class="ll">AGE</div><strong>'+esc(l.age)+'</strong></div>':'')
    +(isProj&&l.projectStatus?'<div class="ic"><div class="ll">PROJECT STATUS</div><strong style="color:#c58600;">'+esc(l.projectStatus)+'</strong></div>':'<div class="ic"><div class="ll">FURNISHING</div><strong>'+esc(l.furnish||'—')+'</strong></div>')
    +(isProj&&l.completion?'<div class="ic"><div class="ll">COMPLETION</div><strong>'+new Date(l.completion).toLocaleDateString('en-IN',{month:'long',year:'numeric'})+'</strong></div>':'<div class="ic"><div class="ll">FLOOR</div><strong>'+floorDisplay+'</strong></div>')
    +(!isProj?'<div class="ic"><div class="ll">FACING</div><strong>'+esc(l.facing||'—')+'</strong></div>':'')
    +(ir?'<div class="ic"><div class="ll">AVAILABILITY</div><strong>'+esc(l.avail||'—')+'</strong></div>':'')
    +(!ir&&!isProj&&l.txnType?'<div class="ic"><div class="ll">TRANSACTION</div><strong>'+esc(l.txnType)+'</strong></div>':'')
    +(l.ownership?'<div class="ic"><div class="ll">OWNERSHIP</div><strong>'+esc(l.ownership)+'</strong></div>':'')
    +(waterDisplay?'<div class="ic"><div class="ll">WATER</div><strong style="font-size:12px;">'+esc(waterDisplay)+'</strong></div>':'')
    +(l.backup?'<div class="ic"><div class="ll">POWER BACKUP</div><strong style="font-size:12px;">'+esc(l.backup)+'</strong></div>':'')
    +(!ir&&!isProj?'<div class="ic"><div class="ll">SALE TYPE</div><strong>'+esc(l.stype||'—')+'</strong></div>':'')
    +(!ir&&!isProj?'<div class="ic"><div class="ll">POSSESSION</div><strong>'+esc(l.poss||'—')+'</strong></div>':'')
    +(!ir&&l.rera?'<div class="ic" style="grid-column:1/-1;"><div class="ll">RERA NO.</div><strong style="color:var(--gr);">'+esc(l.rera)+'</strong></div>':'')
    +'</div>'
    +priceBreakdownHTML
    +'<div id="priceCompareSlot"></div>'
    +unitsTableHTML
    +furnDetH
    +landmarksH
    +amH
    +'<p style="font-size:13px;line-height:1.75;margin-bottom:13px;">'+esc(l.desc)+'</p>'
    +'<div class="listing-map-wrap" id="listingMapWrap" style="display:none;"><h4><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg> Location</h4><div class="listing-map" id="listingMap"></div></div>'
    +cntH
    +'<button class="btn btn-bl" onclick="closeM(\'viewM\');oCnt('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-phone"/></svg> '+(cu?'Contact Directly':'Send Inquiry')+'</button>'
    +'<div style="display:flex;gap:8px;margin-top:10px;">'
    +'<button onclick="shareWhatsApp('+l.id+')" style="flex:1;padding:11px;background:#25D366;color:#fff;border:none;border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-whatsapp"/></svg> Share on WhatsApp</button>'
    +'<button onclick="copyListingLink('+l.id+')" style="flex:1;padding:11px;background:var(--cr);color:var(--ink);border:1.5px solid var(--sa);border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-link"/></svg> Copy Link</button>'
    +'</div>'
    +'<button onclick="openReport('+l.id+')" style="width:100%;margin-top:8px;padding:11px;background:transparent;border:1.5px solid #ffcccc;color:var(--red);border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;transition:background .18s;" onmouseover="this.style.background=\'#fff5f5\'" onmouseout="this.style.background=\'transparent\'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-flag"/></svg> Report Discrimination or Unfair Treatment</button>';
  openM('viewM');
  // Track current detail id for the shortlist button
  _currentDetailId=id;
  updateShortlistBtnState();
  // Set URL hash for shareable deep link + push history so Back returns to where we came from.
  // Skip when we're responding to a Back/Forward event.
  var targetHash='#listing/'+id;
  if(!_navFromHistory&&window.history&&window.history.pushState&&window.location.hash!==targetHash){
    window.history.pushState({listing:id},'',targetHash);
  }
  // Init touch gestures on the image gallery
  _initGalleryTouch();
  // Show map for this listing's location
  showListingMap(l.city,l.loc,l.title);
  // Render similar properties horizontal scroll
  renderSimilarProperties(l);
  // Render price comparison panel (async — doesn't block initial render)
  buildPriceComparison(l).then(function(html){
    var slot=document.getElementById('priceCompareSlot');
    if(slot)slot.innerHTML=html;
  });
}
window._vS=function(d){
  var len=window._vI.length;window._vIdx=(window._vIdx+d+len)%len;
  var img=document.getElementById('vImg');if(img)img.src=window._vI[window._vIdx];
  var wrap=document.getElementById('dvImgWrap');
  if(wrap)wrap.style.setProperty('--dv-bg','url('+JSON.stringify(window._vI[window._vIdx])+')');
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
// Card click handler — let the anchor target="_blank" do its native job
// (opens in new tab on left-click, supports cmd/ctrl/middle-click natively).
// We just need to let the default action through. Returning true allows it.
function _cardClick(e,id){
  // Allow modifier-clicks, right-click, middle-click — browser handles those
  // For a plain left-click, the anchor's target="_blank" opens in new tab natively.
  // We return true to let the browser do its thing.
  return true;
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
      toast('Link copied to clipboard! <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-link"/></svg>');
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
  try{document.execCommand('copy');toast('Link copied! <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-link"/></svg>');}
  catch(e){toast('Copy failed. URL: '+text,'e');}
  document.body.removeChild(ta);
}

// ══ URL ROUTING ══
// Handles hash-based deep links: #listing/42, #browse, #dashboard, etc.
// Flag to suppress pushState while we're *responding* to a back/forward event.
// Without this, go() would push a new history entry on top of the one the user
// just popped — trapping them on the current page.
var _navFromHistory=false;

function handleHashRoute(){
  var hash=window.location.hash;
  // Skip recovery tokens (handled by Supabase)
  if(hash.indexOf('access_token')>=0||hash.indexOf('type=recovery')>=0)return false;
  // Empty hash = home page
  if(!hash||hash==='#'){
    _navFromHistory=true;
    go('home');
    _navFromHistory=false;
    return true;
  }
  // Listing deep link: #listing/42
  var listingMatch=hash.match(/^#listing\/(\d+)$/);
  if(listingMatch){
    var lid=Number(listingMatch[1]);
    _navFromHistory=true;
    viewL(lid);
    _navFromHistory=false;
    return true;
  }
  // Page deep links: #browse, #dashboard, #lister, #admin
  var pageMatch=hash.match(/^#(home|browse|dashboard|lister|admin)$/);
  if(pageMatch){
    _navFromHistory=true;
    go(pageMatch[1]);
    _navFromHistory=false;
    return true;
  }
  return false;
}
// Listen for hash changes (back/forward navigation, manual URL entry)
window.addEventListener('hashchange',function(){handleHashRoute();});

// Handle browser Back/Forward buttons via popstate
window.addEventListener('popstate',function(e){
  // If viewM is open but the hash is no longer #listing/, the user hit Back — close it
  var viewM=document.getElementById('viewM');
  if(viewM&&viewM.classList.contains('open')&&window.location.hash.indexOf('#listing/')!==0){
    viewM.classList.remove('open');
    if(_listingMap){try{_listingMap.remove();}catch(e){}_listingMap=null;}
  }
  // popstate usually fires *before* hashchange; hashchange will do the actual routing
  // But if the hash didn't change (e.g. state transition), we still need to route
  handleHashRoute();
});


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

async function toggleNotifPanel(){
  _notifOpen=!_notifOpen;
  var panel=document.getElementById('nNotifPanel');
  if(panel)panel.style.display=_notifOpen?'':'none';
  if(_notifOpen){
    document.body.classList.add('notif-open');
    // Fetch latest notifications every time the bell is opened — no stale data
    await loadNotifs();
    renderNotifList();
    // Auto mark-all-as-read after a 1.5s delay (user has time to see what's new)
    clearTimeout(_notifAutoReadT);
    _notifAutoReadT=setTimeout(function(){
      if(_notifOpen)markAllNotifRead();
    },1500);
  } else {
    document.body.classList.remove('notif-open');
    clearTimeout(_notifAutoReadT);
  }
}
var _notifAutoReadT=null;

function renderNotifList(){
  var list=document.getElementById('nNotifList');
  if(!list)return;
  if(!_notifs.length){
    list.innerHTML='<div style="padding:48px 24px;text-align:center;color:var(--mu);"><svg class="icn icn-xl" aria-hidden="true" style="opacity:.3;margin-bottom:12px;"><use href="#i-bell"/></svg><div style="font-size:14px;font-weight:600;color:var(--ink);margin-bottom:4px;">All caught up</div><div style="font-size:12px;">You\'ll see inquiries, approvals and updates here.</div></div>';
    return;
  }
  list.innerHTML=_notifs.map(function(n){
    // Clean, consistent icon set by notification type
    var iconHref,iconBg,iconColor;
    switch(n.type){
      case 'inquiry':        iconHref='#i-mail';     iconBg='#e8f4ff'; iconColor='#1a7ab8'; break;
      case 'listing_approved':iconHref='#i-check';   iconBg='#e4f5ea'; iconColor='var(--gr)'; break;
      case 'listing_rejected':iconHref='#i-x';       iconBg='#ffe8e8'; iconColor='var(--red)'; break;
      case 'listing_deleted': iconHref='#i-trash';   iconBg='#ffe8e8'; iconColor='var(--red)'; break;
      case 'report':          iconHref='#i-flag';    iconBg='#fff3e0'; iconColor='#c55a00'; break;
      default:                iconHref='#i-bell';    iconBg='var(--tl)'; iconColor='var(--t)';
    }
    var rowBg=n.read?'#fff':'rgba(18,90,81,.05)';
    var titleWeight=n.read?'500':'700';
    var ago=_timeAgo(n.created_at);
    var clickAttrs=n.link_id?'onclick="handleNotifClick('+n.id+','+n.link_id+')" style="cursor:pointer;background:'+rowBg+';"':'onclick="markNotifRead('+n.id+')" style="cursor:pointer;background:'+rowBg+';"';
    return '<div '+clickAttrs+' class="notif-row" data-id="'+n.id+'">'
      +'<div class="notif-ic" style="background:'+iconBg+';color:'+iconColor+';"><svg class="icn icn-sm" aria-hidden="true"><use href="'+iconHref+'"/></svg></div>'
      +'<div style="flex:1;min-width:0;">'
      +'<div class="notif-title" style="font-weight:'+titleWeight+';">'+esc(n.title)+'</div>'
      +(n.body?'<div class="notif-body">'+esc(n.body)+'</div>':'')
      +'<div class="notif-time">'+ago+'</div>'
      +'</div>'
      +(n.read?'':'<div class="notif-dot" title="Unread"></div>')
      +'</div>';
  }).join('');
}

// Mark a single notification as read (server-side)
async function markNotifRead(id){
  var n=_notifs.find(function(x){return x.id===id;});
  if(!n||n.read)return;
  try{
    await sb.from('notifications').update({read:true}).eq('id',id);
    n.read=true;
    updateNotifBadge();
    renderNotifList();
  }catch(e){console.error('mark read failed',e);}
}

// Click notification — mark as read and navigate
async function handleNotifClick(notifId,linkId){
  await markNotifRead(notifId);
  closeNotifPanel();
  if(linkId)viewL(linkId);
}

function closeNotifPanel(){
  _notifOpen=false;
  var panel=document.getElementById('nNotifPanel');
  if(panel)panel.style.display='none';
  document.body.classList.remove('notif-open');
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
  var cc=document.getElementById('cCnt');
  if(cc){
    // Only show direct number to the lister themselves or admin. Others see a privacy note.
    if(cu.id===l.uid||cu.role==='admin'){
      cc.innerHTML='Direct: '+esc(l.contact)+' &middot; '+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'');
    } else {
      cc.innerHTML='<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--t);"><use href="#i-shield-check"/></svg> Listed by <strong>'+esc(l.owner)+'</strong>'+(l.agency?' &middot; '+esc(l.agency):'')+'. Your inquiry is sent privately — the '+(l.urole==='broker'?'broker':l.urole==='builder'?'builder':'owner')+' will reach out directly.';
    }
  }
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
  toast('Inquiry sent! The owner will contact you. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-phone"/></svg>');
}

// ══ IMAGE UPLOAD ══
function dzOv(e){e.preventDefault();var d=document.getElementById('dz');if(d)d.classList.add('drag');}
function dzLv(){var d=document.getElementById('dz');if(d)d.classList.remove('drag');}
function dzDp(e){e.preventDefault();dzLv();hImgsArr(Array.from(e.dataTransfer.files));}
// ══ IMAGE & VIDEO UPLOAD ══
var MAX_IMAGES=15;
var MAX_VIDEO_MB=50;

function hImgs(e){hImgsArr(Array.from(e.target.files));e.target.value='';}
function hImgsArr(files){
  var slotsLeft=MAX_IMAGES-upImgs.length;
  if(slotsLeft<=0){toast('Max '+MAX_IMAGES+' photos per listing.','e');return;}
  var toProcess=files.slice(0,slotsLeft);
  if(files.length>slotsLeft)toast('Added the first '+slotsLeft+' photos. Max '+MAX_IMAGES+' total.');
  if(!toProcess.length)return;
  // Filter and validate
  var valid=toProcess.filter(function(f){
    if(!f.type.startsWith('image/')){toast('"'+f.name+'" is not an image.','e');return false;}
    if(f.size>15*1024*1024){toast('"'+f.name+'" exceeds 15MB.','e');return false;}
    return true;
  });
  if(!valid.length)return;
  // Show pending placeholders right away — feels instant
  valid.forEach(function(){upImgs.push('__PENDING__');});
  rPv();
  // Compress in parallel — much faster than serial
  var startIdx=upImgs.length-valid.length;
  valid.forEach(function(f,localIdx){
    var globalIdx=startIdx+localIdx;
    compressImage(f).then(function(dataUrl){
      upImgs[globalIdx]=dataUrl;
      rPv();
    }).catch(function(err){
      console.error('compress fail',err);
      // Remove the placeholder for this failed image
      upImgs.splice(globalIdx,1);
      rPv();
      toast('"'+f.name+'" failed to process.','e');
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
  if(!images||!images.length||!cu)return [];
  // Pre-pass: separate already-uploaded URLs from new base64 entries
  // Skip any leftover pending placeholders (shouldn't reach here but be safe)
  var clean=images.filter(function(im){return im&&im!=='__PENDING__';});
  var tasks=[];
  var resultMap=new Array(clean.length);
  for(var i=0;i<clean.length;i++){
    var im=clean[i];
    if(im.indexOf('data:')!==0){resultMap[i]=im;continue;} // Already a URL
    tasks.push({idx:i,dataUrl:im});
  }
  if(!tasks.length)return resultMap;
  // Show progress toast
  var totalCount=tasks.length;
  var doneCount=0;
  function tick(){
    doneCount++;
    if(doneCount<totalCount)toast('Uploading photos '+doneCount+' / '+totalCount+'…');
  }
  // Concurrent upload helper with one retry on transient errors
  async function uploadOne(task){
    var attempts=0, lastErr=null;
    while(attempts<2){
      attempts++;
      try{
        var blob=dataUrlToBlob(task.dataUrl);
        var ext=blob.type==='image/webp'?'webp':blob.type==='image/png'?'png':'jpg';
        var path=cu.id+'/'+Date.now()+'_'+task.idx+'_'+Math.random().toString(36).substring(2,7)+'.'+ext;
        var res=await sb.storage.from('listing-images').upload(path,blob,{
          cacheControl:'3600',
          contentType:blob.type,
          upsert:false
        });
        if(res.error)throw res.error;
        var urlRes=sb.storage.from('listing-images').getPublicUrl(path);
        return urlRes.data.publicUrl;
      }catch(e){
        lastErr=e;
        if(attempts<2){
          // Brief wait before retry
          await new Promise(function(r){setTimeout(r,500);});
        }
      }
    }
    throw lastErr||new Error('upload failed');
  }
  // Run with a concurrency cap of 4 so we don't overload mobile networks
  var CONCURRENCY=4;
  var failed=0;
  var nextTaskIdx=0;
  async function worker(){
    while(true){
      var myTask=null;
      if(nextTaskIdx<tasks.length){myTask=tasks[nextTaskIdx++];}
      if(!myTask)break;
      try{
        var url=await uploadOne(myTask);
        resultMap[myTask.idx]=url;
      }catch(e){
        failed++;
        console.error('upload fail for image '+(myTask.idx+1),e);
        // Mark as failed — we'll filter these out
        resultMap[myTask.idx]=null;
      }
      tick();
    }
  }
  var workers=[];
  for(var w=0;w<CONCURRENCY;w++)workers.push(worker());
  await Promise.all(workers);
  // Filter out nulls (failed uploads) and report any failures clearly
  var finalUrls=resultMap.filter(function(u){return u;});
  if(failed>0){
    toast(failed+' photo'+(failed>1?'s':'')+' failed to upload. The successful ones were saved.','e');
  }
  return finalUrls;
}

// ══ VIDEO UPLOAD ══
var _uploadingVideo=null; // currently selected file pending upload at submit time
var _existingVideoUrl=''; // URL preserved across edit mode

function hVideo(e){
  var f=e.target.files&&e.target.files[0];
  e.target.value='';
  if(!f)return;
  if(!f.type.startsWith('video/')){toast('Please select a video file.','e');return;}
  var sizeMB=f.size/(1024*1024);
  if(sizeMB>MAX_VIDEO_MB){toast('Video too large ('+sizeMB.toFixed(1)+'MB). Max '+MAX_VIDEO_MB+'MB.','e');return;}
  _uploadingVideo=f;
  _existingVideoUrl=''; // Replacing any existing video
  renderVideoPreview();
}
function clearVideo(){
  _uploadingVideo=null;
  _existingVideoUrl='';
  renderVideoPreview();
}
function renderVideoPreview(){
  var box=document.getElementById('vidPv');
  if(!box)return;
  if(_uploadingVideo){
    var url=URL.createObjectURL(_uploadingVideo);
    var sizeMB=(_uploadingVideo.size/(1024*1024)).toFixed(1);
    box.innerHTML='<div class="vid-pv-card"><video src="'+url+'" controls preload="metadata" style="width:100%;border-radius:8px;background:#000;"></video>'
      +'<div class="vid-pv-meta"><strong>'+esc(_uploadingVideo.name)+'</strong> &middot; '+sizeMB+' MB <span style="color:var(--mu);font-size:11px;">(will upload on submit)</span></div>'
      +'<button type="button" onclick="clearVideo()" class="vid-pv-rm">&times; Remove</button></div>';
  } else if(_existingVideoUrl){
    box.innerHTML='<div class="vid-pv-card"><video src="'+_existingVideoUrl+'" controls preload="metadata" style="width:100%;border-radius:8px;background:#000;"></video>'
      +'<div class="vid-pv-meta"><strong>Current video</strong> <span style="color:var(--mu);font-size:11px;">(uploaded earlier)</span></div>'
      +'<button type="button" onclick="clearVideo()" class="vid-pv-rm">&times; Remove</button></div>';
  } else {
    box.innerHTML='';
  }
}
async function uploadListingVideo(){
  // Returns the final video URL (existing or newly uploaded), or '' if cleared/none
  if(!_uploadingVideo)return _existingVideoUrl||'';
  if(!cu)return '';
  try{
    var f=_uploadingVideo;
    var ext=(f.name.split('.').pop()||'mp4').toLowerCase().replace(/[^a-z0-9]/g,'').substring(0,5)||'mp4';
    var path=cu.id+'/'+Date.now()+'_'+Math.random().toString(36).substring(2,7)+'.'+ext;
    toast('Uploading video…');
    var res=await sb.storage.from('listing-videos').upload(path,f,{
      cacheControl:'3600',
      contentType:f.type,
      upsert:false
    });
    if(res.error)throw res.error;
    var urlRes=sb.storage.from('listing-videos').getPublicUrl(path);
    return urlRes.data.publicUrl;
  }catch(e){
    console.error('video upload fail',e);
    toast('Video upload failed: '+(e.message||'unknown error'),'e');
    return _existingVideoUrl||''; // Keep existing if any
  }
}

function rPv(){
  var pv=document.getElementById('iPv');if(!pv)return;
  pv.innerHTML=upImgs.map(function(s,i){
    if(s==='__PENDING__'){
      return '<div class="ip ip-pending"><div class="ip-spinner"></div><div class="ip-pending-lbl">Processing…</div></div>';
    }
    return '<div class="ip"><img src="'+s+'" alt="Uploaded photo '+(i+1)+'"/><button onclick="rmImg('+i+')" aria-label="Remove photo '+(i+1)+'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg></button>'+(i<2?'<div class="free-lbl">Free</div>':'')+'</div>';
  }).join('');
  // Show count
  var dz=document.getElementById('dz');
  if(dz){
    var realCount=upImgs.filter(function(s){return s!=='__PENDING__';}).length;
    var pendCount=upImgs.length-realCount;
    var lblP=dz.querySelector('p:first-of-type');
    if(lblP)lblP.textContent=upImgs.length>0?(realCount+(pendCount?' (+'+pendCount+' processing)':'')+' / '+MAX_IMAGES+' photos'):'Click or drag & drop photos here';
  }
}
function rmImg(i){upImgs.splice(i,1);rPv();}

// ══ LISTING FORM ══
function setLM(m){
  lMode=m;
  var lr=document.getElementById('lmR'),lb=document.getElementById('lmB');
  if(lr)lr.classList.toggle('on',m==='rent');
  if(lb)lb.classList.toggle('on',m==='buy');
  // Wizard intent cards
  var wcR=document.getElementById('wizCardRent'),wcB=document.getElementById('wizCardBuy'),wcP=document.getElementById('wizCardProject');
  if(wcR)wcR.classList.toggle('on',m==='rent');
  if(wcB)wcB.classList.toggle('on',m==='buy');
  if(wcP)wcP.classList.toggle('on',m==='project');
  // Rent-specific fields
  ['lRW','lDW','lAvW'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=m==='rent'?'':'none';});
  // Buy-specific fields
  ['lPrW','lStW','lPoW','lReW','lTxnW'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=(m==='buy'||m==='project')?'':'none';});
  // Project-specific fields
  ['lProjW','lCompW','lPrMinW','lPrMaxW','lUnitsW'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=m==='project'?'':'none';});
}

// Toggle water source chip selection
var _selWater=[];
function togWaterLbl(lbl){
  var w=lbl.dataset.w;
  var i=_selWater.indexOf(w);
  if(i>=0){_selWater.splice(i,1);lbl.classList.remove('on');}
  else{_selWater.push(w);lbl.classList.add('on');}
}
function setWaterFromString(s){
  _selWater=s?s.split(',').map(function(x){return x.trim();}).filter(Boolean):[];
  document.querySelectorAll('#lWaterChips label[data-w]').forEach(function(lbl){
    lbl.classList.toggle('on',_selWater.indexOf(lbl.dataset.w)>=0);
  });
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
  setVal('lBn',l.building||'');
  setVal('lCy',l.city);
  setVal('lLo',l.loc);
  setVal('lAr',l.area||'');
  setVal('lRt',l.rent||'');
  setVal('lDp',l.dep||'');
  setVal('lPr',l.price||'');
  setVal('lPrMin',l.priceMin||'');
  setVal('lPrMax',l.priceMax||'');
  setVal('lRe',l.rera);
  setVal('lOw',l.owner);
  setVal('lCt',l.contact);
  setVal('lDs',l.desc);
  setVal('lFl',l.floor);
  setVal('lFlNo',l.floorNo!=null?l.floorNo:'');
  setVal('lFlTot',l.totalFloors||'');
  setVal('lFc',l.facing);
  setVal('lTxn',l.txnType||'');
  setVal('lOwn',l.ownership||'');
  setVal('lBackup',l.backup||'');
  setWaterFromString(l.water||'');
  _landmarks=l.landmarks?l.landmarks.slice():[];
  renderLandmarks();
  setVal('lFn',l.furnish);
  setVal('lAv',l.avail);
  // New fields: separate areas + age + furnishing details
  setVal('lArC',l.carpetArea||'');
  setVal('lArS',l.superArea||'');
  setVal('lAge',l.age||'');
  _selFurn=l.furnDetails?l.furnDetails.slice():[];
  renderFurnishingItems();
  // Project-specific
  if(l.completion)setVal('lComp',l.completion.substring(0,7));
  var projEl=document.getElementById('lProj');if(projEl)projEl.value=l.projectStatus||'New Launch';
  _unitTypes=l.unitTypes?l.unitTypes.slice():[];
  renderUnits();
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
  // Pre-fill video
  _uploadingVideo=null;
  _existingVideoUrl=l.videoUrl||'';
  renderVideoPreview();
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
  if(lMode==='project'&&!Number(getVal('lPrMin'))){if(le){le.style.display='';le.textContent='Please enter project starting price.';}return;}
  if(le)le.style.display='none';
  var saleTypeEl=document.querySelector('#lStW select#lSt');
  var isProject=lMode==='project';
  var listingData={lf:isProject?'project':lMode,title:title,building:getVal('lBn'),city:city,
    loc:getVal('lLo'),
    type:getVal('lTp')||'Apartment',
    beds:getVal('lBd')||'2',
    baths:Number(getVal('lBt'))||1,
    area:Number(getVal('lAr'))||0,
    carpetArea:Number(getVal('lArC'))||0,
    builtArea:Number(getVal('lAr'))||0,
    superArea:Number(getVal('lArS'))||0,
    age:getVal('lAge'),
    furnDetails:_selFurn.slice(),
    rent:rv,dep:Number(getVal('lDp'))||0,price:isProject?(Number(getVal('lPrMin'))||0):pv,
    stype:saleTypeEl?saleTypeEl.value:'',
    poss:getVal('lPo'),
    rera:getVal('lRe'),
    floor:getVal('lFl'),
    floorNo:getVal('lFlNo')!==''?Number(getVal('lFlNo')):null,
    totalFloors:getVal('lFlTot')?Number(getVal('lFlTot')):null,
    facing:getVal('lFc'),
    txnType:(lMode==='buy'||lMode==='project')?getVal('lTxn'):'',
    ownership:getVal('lOwn'),
    water:_selWater.join(','),
    backup:getVal('lBackup'),
    landmarks:_landmarks.slice(),
    furnish:getVal('lFn'),
    avail:lMode==='rent'?getVal('lAv'):'',
    owner:owner,contact:contact,agency:cu?cu.agency||'':'',
    desc:getVal('lDs'),
    amens:selAmens.slice(),tags:selTags.slice(),
    images:upImgs.slice(),
    videoUrl:_existingVideoUrl||'',
    // Project-specific fields
    isProject:isProject,
    projectStatus:isProject?getVal('lProj'):'',
    completion:isProject&&getVal('lComp')?getVal('lComp')+'-01':null,
    priceMin:isProject?(Number(getVal('lPrMin'))||0):0,
    priceMax:isProject?(Number(getVal('lPrMax'))||0):0,
    unitTypes:isProject?_unitTypes.slice():[]
  };

  // Filter out any pending placeholders before submitting (compression still in flight)
  var pendingCount=listingData.images.filter(function(im){return im==='__PENDING__';}).length;
  if(pendingCount>0){
    toast('Please wait — '+pendingCount+' photo'+(pendingCount>1?'s':'')+' still processing.','e');
    return;
  }
  // Upload images and video to Supabase Storage
  var uploadBtn=document.getElementById('addMBtn');
  var origBtnTxt=uploadBtn?uploadBtn.textContent:'';
  var hasNewMedia=listingData.images.some(function(img){return img&&img.indexOf('data:')===0;})||_uploadingVideo;
  if(uploadBtn&&hasNewMedia){
    uploadBtn.disabled=true;uploadBtn.textContent='Uploading…';
  }
  // Upload images and video in parallel — saves a lot of time on slow connections
  var uploadResults=await Promise.all([
    uploadListingImages(listingData.images),
    uploadListingVideo()
  ]);
  listingData.images=uploadResults[0];
  listingData.videoUrl=uploadResults[1];
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
    ['lTl','lBn','lCy','lLo','lAr','lArC','lArS','lAge','lRt','lDp','lPr','lPrMin','lPrMax','lRe','lOw','lCt','lDs','lFl','lFlNo','lFlTot','lFc','lFn','lComp','lTxn','lOwn','lBackup'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
    upImgs=[];selTags=[];selAmens=[];
    toast('Listing updated! It will be re-reviewed by admin. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>');
    if(cu&&(cu.role==='broker'||cu.role==='owner'||cu.role==='builder'))await renderLister();
  } else {
    // ── CREATE MODE: new listing ──
    // Note: id is auto-generated by Postgres IDENTITY — do NOT set it client-side
    listingData.verified=false;
    listingData.status='pending';
    listingData.postedAt=new Date().toISOString().split('T')[0];
    listingData.uid=cu?cu.id:null;
    listingData.urole=cu?cu.role:'owner';
    var created=await createListing(listingData);
    if(!created){
      // createListing already showed a toast with the error — do NOT show "submitted"
      return;
    }
    closeM('addM');resetAddModal();
    ['lTl','lBn','lCy','lLo','lAr','lArC','lArS','lAge','lRt','lDp','lPr','lPrMin','lPrMax','lRe','lOw','lCt','lDs','lFl','lFlNo','lFlTot','lFc','lFn','lComp','lTxn','lOwn','lBackup'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});var lBdSel=document.getElementById('lBd');if(lBdSel)lBdSel.selectedIndex=1;var lBtSel=document.getElementById('lBt');if(lBtSel)lBtSel.selectedIndex=0;
    upImgs=[];selTags=[];selAmens=[];
    toast('Submitted! Admin reviews within 24 hrs. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>');
    if(cu&&(cu.role==='broker'||cu.role==='owner'||cu.role==='builder'))await renderLister();
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
  if(ds)ds.innerHTML='<div class="card" style="text-align:center;background:var(--wh);border-radius:12px;padding:18px;border:1px solid var(--sa);"><div style="font-size:24px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg></div><div style="font-family:\'Playfair Display\',serif;font-size:30px;font-weight:700;color:var(--t);">'+inqs.length+'</div><div style="font-size:12px;color:var(--mu);">Inquiries Sent</div></div><div class="card" style="text-align:center;background:var(--wh);border-radius:12px;padding:18px;border:1px solid var(--sa);"><div style="font-size:24px;">&#9829;</div><div style="font-family:\'Playfair Display\',serif;font-size:30px;font-weight:700;color:var(--t);">'+favs.length+'</div><div style="font-size:12px;color:var(--mu);">Saved</div></div>';
  var di=document.getElementById('dInq');
  if(di)di.innerHTML=inqs.length?inqs.map(function(i){
    var listingExists=ls.some(function(l){return l.id===i.listingId;});
    var icon=i.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>';
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
  if(lb)lb.innerHTML=ib?'<span class="brk-b"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-broker"/></svg> Broker</span>':'<span class="own-b"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-owner"/></svg> Owner</span>';
  var pts=[cu.email];
  if(cu.phone)pts.unshift(cu.phone);
  if(cu.agency)pts.unshift((ib?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-broker"/></svg> ':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-owner"/></svg> ')+cu.agency);
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
  if(st)st.innerHTML=['<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg></div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--t);">'+myL.length+'</div><div style="font-size:12px;color:var(--mu);">Listed</div></div>',
    '<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg></div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--gr);">'+ap.length+'</div><div style="font-size:12px;color:var(--mu);">Approved</div></div>',
    '<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;">&#9201;</div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--g);">'+pn.length+'</div><div style="font-size:12px;color:var(--mu);">Pending</div></div>',
    '<div style="text-align:center;background:var(--wh);border-radius:12px;padding:16px;border:1px solid var(--sa);"><div style="font-size:20px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-phone"/></svg></div><div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:var(--pu);">'+totalLeads+'</div><div style="font-size:12px;color:var(--mu);">Leads</div></div>'].join('');
  var ll=document.getElementById('lLst');
  if(ll)ll.innerHTML=myL.length?myL.map(function(l){
    var thumbH=l.images&&l.images.length?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;"/>':'<div style="font-size:28px;">'+(l.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>';
    var pr=l.lf==='rent'?fmtRentHTML(l.rent)+'/mo':fmtPriceHTML(l.price);
    var lc=leadsByListing[l.id]||0;
    var isRejected=l.status==='rejected'&&l.rejectionReason;
    var rejectedBanner=isRejected?
      '<div style="background:#fff5f5;border:1px solid #ffcccc;border-left:3px solid var(--red);border-radius:6px;padding:9px 12px;margin-top:10px;font-size:12px;line-height:1.5;color:#7a2222;">'
        +'<div style="font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:6px;"><svg class="icn icn-sm" aria-hidden="true" style="color:var(--red);"><use href="#i-flag"/></svg> Rejected by admin</div>'
        +'<div style="color:#5a3a3a;">'+esc(l.rejectionReason)+'</div>'
        +'<button onclick="event.stopPropagation();editListing('+l.id+')" style="margin-top:8px;background:var(--t);color:#fff;border:none;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-edit"/></svg> Edit &amp; Resubmit</button>'
      +'</div>':'';
    return '<div class="li" style="cursor:pointer;flex-wrap:wrap;" onclick="viewL('+l.id+')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'var(--wh)\'">'
      +'<div style="display:flex;align-items:center;gap:12px;width:100%;">'
      +thumbH
      +'<div class="li-in"><strong>'+esc(l.title)+'</strong><span>'+esc(l.city)+' &middot; '+pr+' &middot; '+(l.images?l.images.length:0)+' photo(s)</span></div>'
      +'<span class="pill '+(l.status==='approved'?'pill-g':l.status==='pending'?'pill-y':'pill-r')+'">'+l.status+'</span>'
      +'<div class="li-ac" onclick="event.stopPropagation()">'
      +(l.status==='approved'?'<button class="btn-sm" onclick="event.stopPropagation();showLeads('+l.id+')" style="background:transparent;color:var(--t);border:1px solid var(--sa);border-radius:6px;padding:5px 11px;font-size:12px;font-weight:500;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all .15s;" onmouseover="this.style.background=\'var(--cr)\';this.style.borderColor=\'var(--tl)\'" onmouseout="this.style.background=\'transparent\';this.style.borderColor=\'var(--sa)\'">Leads ('+lc+')</button>':'')
      +'<button class="btn-sm" onclick="event.stopPropagation();editListing('+l.id+')" title="Edit listing" style="background:transparent;color:var(--t);border:1px solid var(--sa);border-radius:6px;padding:5px 9px;font-size:12px;font-weight:500;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all .15s;" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'transparent\'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-edit"/></svg> Edit</button>'
      +'<button class="btn-sm" onclick="event.stopPropagation();removeMyListing('+l.id+')" title="Delete listing" style="background:transparent;color:#999;border:1px solid transparent;border-radius:6px;padding:5px 9px;font-size:13px;font-weight:400;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:color .15s;" onmouseover="this.style.color=\'var(--red)\'" onmouseout="this.style.color=\'#999\'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-trash"/></svg></button>'
      +'</div></div>'
      +rejectedBanner
      +'</div>';
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
  var exportBtn=inqs.length?'<div style="text-align:right;margin-bottom:10px;"><button class="btn btn-o btn-sm" onclick="exportLeadsForListing('+lid+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Export to CSV</button></div>':'';
  document.getElementById('vCnt').innerHTML=inqs.length?exportBtn+'<div style="overflow-x:auto;"><table class="tbl"><thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Message</th><th>Date</th></tr></thead><tbody>'+inqs.map(function(i){return '<tr><td><strong>'+esc(i.name)+'</strong></td><td>'+esc(i.phone)+'</td><td>'+esc(i.email||'—')+'</td><td style="max-width:140px;font-size:12px;">'+esc(i.message||'—')+'</td><td>'+i.sentAt+'</td></tr>';}).join('')+'</tbody></table></div>':'<p style="text-align:center;color:var(--mu);padding:28px;">No leads yet.</p>';
  openM('viewM');
}

// ══ PROJECT UNIT TYPES ══
// Each unit: { bhk: '3 BHK', area: 1450, priceMin: 8500000, priceMax: 12000000 }
var _unitTypes=[];

function renderUnits(){
  var el=document.getElementById('lUnits');
  if(!el)return;
  if(!_unitTypes.length){
    el.innerHTML='<div style="font-size:12px;color:var(--mu);padding:10px 0;">No unit configurations added yet.</div>';
    return;
  }
  el.innerHTML=_unitTypes.map(function(u,i){
    return '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr auto;gap:6px;margin-bottom:6px;align-items:center;">'
      +'<input class="fi" type="text" placeholder="2 BHK" value="'+escAttr(u.bhk||'')+'" onchange="updateUnit('+i+',\'bhk\',this.value)" style="font-size:12px;padding:7px 9px;"/>'
      +'<input class="fi" type="number" placeholder="Area (sq.ft)" value="'+(u.area||'')+'" onchange="updateUnit('+i+',\'area\',Number(this.value)||0)" style="font-size:12px;padding:7px 9px;"/>'
      +'<input class="fi" type="number" placeholder="Min ₹" value="'+(u.priceMin||'')+'" onchange="updateUnit('+i+',\'priceMin\',Number(this.value)||0)" style="font-size:12px;padding:7px 9px;"/>'
      +'<input class="fi" type="number" placeholder="Max ₹" value="'+(u.priceMax||'')+'" onchange="updateUnit('+i+',\'priceMax\',Number(this.value)||0)" style="font-size:12px;padding:7px 9px;"/>'
      +'<button type="button" onclick="removeUnit('+i+')" aria-label="Remove" style="background:transparent;border:none;color:var(--red);cursor:pointer;padding:6px;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-trash"/></svg></button>'
    +'</div>';
  }).join('');
}
function addUnit(){
  _unitTypes.push({bhk:'',area:0,priceMin:0,priceMax:0});
  renderUnits();
}
function updateUnit(idx,key,val){
  if(_unitTypes[idx])_unitTypes[idx][key]=val;
}
function removeUnit(idx){
  _unitTypes.splice(idx,1);
  renderUnits();
}

// ══ FURNISHING CATALOG ══
// Each item: {code, label, icon (emoji fallback rendered via SVG #i-*)}
// Comprehensive list covering kitchen, bedroom, living, bathroom, tech, safety
var FURN_ITEMS=[
  // Appliances
  {code:'ac',label:'Air Conditioner',icon:'&#10052;&#65039;'},
  {code:'fan',label:'Ceiling Fan',icon:'&#128168;'},
  {code:'heater',label:'Water Heater / Geyser',icon:'&#128293;'},
  {code:'fridge',label:'Refrigerator',icon:'&#127849;'},
  {code:'washer',label:'Washing Machine',icon:'&#128250;'},
  {code:'dryer',label:'Dryer',icon:'&#128168;'},
  {code:'microwave',label:'Microwave',icon:'&#128250;'},
  {code:'oven',label:'Oven',icon:'&#128293;'},
  {code:'dishwasher',label:'Dishwasher',icon:'&#127869;&#65039;'},
  {code:'tv',label:'Television',icon:'&#128250;'},
  {code:'water_purifier',label:'Water Purifier',icon:'&#128167;'},
  // Kitchen
  {code:'modular_kitchen',label:'Modular Kitchen',icon:'&#127869;&#65039;'},
  {code:'chimney',label:'Chimney',icon:'&#128291;'},
  {code:'gas_stove',label:'Gas Stove',icon:'&#128293;'},
  {code:'induction',label:'Induction Hob',icon:'&#9889;'},
  // Living / Dining
  {code:'sofa',label:'Sofa',icon:'&#128719;'},
  {code:'dining',label:'Dining Table',icon:'&#127869;&#65039;'},
  {code:'tv_unit',label:'TV Unit',icon:'&#128250;'},
  {code:'bookshelf',label:'Bookshelf',icon:'&#128218;'},
  // Bedroom
  {code:'bed',label:'Bed',icon:'&#128719;'},
  {code:'mattress',label:'Mattress',icon:'&#128719;'},
  {code:'wardrobe',label:'Wardrobe',icon:'&#128090;'},
  {code:'dressing_table',label:'Dressing Table',icon:'&#128128;'},
  {code:'study_table',label:'Study Table',icon:'&#128187;'},
  // Bathroom
  {code:'exhaust_fan',label:'Exhaust Fan',icon:'&#128168;'},
  {code:'bathtub',label:'Bathtub',icon:'&#128704;'},
  {code:'shower',label:'Shower',icon:'&#128703;'},
  // Safety / Tech
  {code:'wifi',label:'Wi-Fi Router',icon:'&#128246;'},
  {code:'cctv',label:'CCTV',icon:'&#128065;&#65039;'},
  {code:'intercom',label:'Intercom',icon:'&#128222;'},
  {code:'smart_lock',label:'Smart Lock',icon:'&#128274;'},
  {code:'fire_alarm',label:'Fire Alarm',icon:'&#128680;'},
  // Window / Soft furnishings
  {code:'curtains',label:'Curtains',icon:'&#127912;'},
  {code:'blinds',label:'Window Blinds',icon:'&#127912;'},
  {code:'rugs',label:'Rugs / Carpets',icon:'&#127912;'},
  // Exterior
  {code:'balcony_furn',label:'Balcony Furniture',icon:'&#127795;'},
  // Utilities
  {code:'power_backup',label:'Power Backup',icon:'&#128268;'},
  {code:'inverter',label:'Inverter',icon:'&#128268;'},
  {code:'gas_pipeline',label:'Gas Pipeline',icon:'&#128293;'}
];
// Quick lookup by code for rendering
var FURN_MAP={};FURN_ITEMS.forEach(function(it){FURN_MAP[it.code]=it;});

// Selected furnishing codes for current listing
var _selFurn=[];

function renderFurnishingItems(){
  var sel=document.getElementById('lFn');
  var wrap=document.getElementById('lFnDetailsW');
  var grid=document.getElementById('lFnDetails');
  if(!sel||!wrap||!grid)return;
  var val=sel.value;
  // Show details only when Semi or Fully furnished
  if(val==='Semi-Furnished'||val==='Fully Furnished'){
    wrap.style.display='';
    grid.innerHTML=FURN_ITEMS.map(function(it){
      var on=_selFurn.indexOf(it.code)>=0;
      return '<label class="furn-chip'+(on?' on':'')+'" onclick="togFurn(\''+it.code+'\')" data-code="'+it.code+'">'
        +'<span class="furn-icon">'+it.icon+'</span>'
        +'<span class="furn-lbl">'+esc(it.label)+'</span>'
        +'</label>';
    }).join('');
  } else {
    wrap.style.display='none';
    // When Unfurnished or empty, clear selections
    if(val==='Unfurnished')_selFurn=[];
  }
}
function togFurn(code){
  var idx=_selFurn.indexOf(code);
  if(idx>=0)_selFurn.splice(idx,1);
  else _selFurn.push(code);
  // Toggle visual state without full re-render
  var chip=document.querySelector('.furn-chip[data-code="'+code+'"]');
  if(chip)chip.classList.toggle('on',_selFurn.indexOf(code)>=0);
}

// ══ LISTING FORM WIZARD ══
var _wizStep=1;
var _wizTotal=4;

function wizGoto(step){
  step=Math.max(1,Math.min(_wizTotal,step));
  _wizStep=step;
  // Update panes
  document.querySelectorAll('.wiz-pane').forEach(function(p){
    p.classList.toggle('on',Number(p.dataset.pane)===step);
  });
  // Update step indicators
  document.querySelectorAll('.wiz-step').forEach(function(s){
    var n=Number(s.dataset.step);
    s.classList.remove('on','done');
    if(n===step)s.classList.add('on');
    else if(n<step)s.classList.add('done');
  });
  // Show/hide nav buttons
  var prev=document.getElementById('wizPrev');
  var next=document.getElementById('wizNext');
  var submit=document.getElementById('addMBtn');
  if(prev)prev.style.display=step>1?'':'none';
  if(step===_wizTotal){
    if(next)next.style.display='none';
    if(submit)submit.style.display='';
  } else {
    if(next)next.style.display='';
    if(submit)submit.style.display='none';
  }
  // Clear any error when navigating
  var err=document.getElementById('lErr');
  if(err)err.style.display='none';
}

function wizGo(delta){
  var newStep=_wizStep+delta;
  // Validate current step before advancing
  if(delta>0&&!_wizValidate(_wizStep)){
    return;
  }
  wizGoto(newStep);
  // Scroll modal body to top
  var mb=document.querySelector('#addM .mb');
  if(mb)mb.scrollTop=0;
}

function _wizValidate(step){
  var err=document.getElementById('lErr');
  var showErr=function(msg){if(err){err.style.display='';err.textContent=msg;}};
  if(step===1){
    // Intent — already has default, always valid
    return true;
  }
  if(step===2){
    var title=(document.getElementById('lTl').value||'').trim();
    var city=(document.getElementById('lCy').value||'').trim();
    if(title.length<3){showErr('Please enter a property title (at least 3 characters).');return false;}
    if(city.length<2){showErr('Please enter a city.');return false;}
    return true;
  }
  if(step===3){
    var owner=(document.getElementById('lOw').value||'').trim();
    var contact=(document.getElementById('lCt').value||'').trim();
    if(owner.length<2){showErr('Please enter the owner/broker name.');return false;}
    if(contact.replace(/\D/g,'').length<10){showErr('Please enter a valid contact number (10 digits).');return false;}
    return true;
  }
  return true;
}

// ══ ADMIN EXPORT HELPERS ══
function _listingToRow(l){
  return {
    'ID':l.id,
    'Title':l.title||'',
    'Type':l.lf==='project'?'Project':(l.lf==='rent'?'Rent':'Sale'),
    'Status':l.status||'',
    'City':l.city||'',
    'Locality':l.loc||'',
    'Building':l.building||'',
    'Property Type':l.type||'',
    'Bedrooms':l.beds||'',
    'Bathrooms':l.baths||'',
    'Area (sq.ft)':l.area||0,
    'Rent (₹/mo)':l.rent||0,
    'Deposit (₹)':l.dep||0,
    'Price (₹)':l.price||0,
    'Price Min (₹)':l.priceMin||0,
    'Price Max (₹)':l.priceMax||0,
    'Project Status':l.projectStatus||'',
    'RERA':l.rera||'',
    'Owner Name':l.owner||'',
    'Agency':l.agency||'',
    'Contact':l.contact||'',
    'Verified':l.verified?'Yes':'No',
    'Rejection Reason':l.rejectionReason||'',
    'Posted':l.postedAt||'',
    'User ID':l.uid||''
  };
}
function _userToRow(u){
  return {
    'ID':u.id||'',
    'Name':u.name||'',
    'Role':u.role||'',
    'Email':u.email||'',
    'Phone':u.phone||'',
    'Agency':u.agency||'',
    'License (RERA)':u.lic||'',
    'Joined':u.joinedAt||'',
    'Verified':u.verified?'Yes':'No',
    'Trusted':u.trusted?'Yes':'No'
  };
}
function _leadToRow(i,lMap){
  var l=lMap[i.listingId]||{};
  return {
    'Date':i.sentAt||'',
    'Lead Name':i.name||'',
    'Lead Phone':i.phone||'',
    'Lead Email':i.email||'',
    'Message':i.message||'',
    'Property Title':l.title||'',
    'Property City':l.city||'',
    'Property Locality':l.loc||'',
    'Listing ID':i.listingId,
    'Property Type':l.type||'',
    'Bedrooms':l.beds||'',
    'Rent/Price':l.lf==='rent'?('Rent: \u20B9'+(l.rent||0)+'/mo'):('Sale: \u20B9'+(l.price||0))
  };
}
function _reportToRow(r){
  return {
    'ID':r.id||'',
    'Listing ID':r.listingId||'',
    'Reporter':r.reporterName||'',
    'Reporter Email':r.reporterEmail||'',
    'Category':r.category||'',
    'Description':r.description||'',
    'Status':r.status||'open',
    'Submitted':r.createdAt||''
  };
}
async function adminExport(kind){
  var date=new Date().toISOString().split('T')[0];
  try{
    if(kind==='al'){
      var ls=await gL();
      if(!ls.length){toast('No data to export.','e');return;}
      downloadCSV('ekmakan-all-listings-'+date+'.csv',ls.map(_listingToRow));
      toast('Exported '+ls.length+' listings.');
    } else if(kind==='pd'){
      var pn=(await gL()).filter(function(l){return l.status==='pending';});
      if(!pn.length){toast('No pending listings.','e');return;}
      downloadCSV('ekmakan-pending-listings-'+date+'.csv',pn.map(_listingToRow));
      toast('Exported '+pn.length+' pending listings.');
    } else if(kind==='rj'){
      var rj=(await gL()).filter(function(l){return l.status==='rejected';});
      if(!rj.length){toast('No rejected listings.','e');return;}
      downloadCSV('ekmakan-rejected-listings-'+date+'.csv',rj.map(_listingToRow));
      toast('Exported '+rj.length+' rejected listings.');
    } else if(kind==='ls'){
      var bo=(await gU()).filter(function(u){return u.role==='broker'||u.role==='owner';});
      if(!bo.length){toast('No brokers/owners.','e');return;}
      downloadCSV('ekmakan-brokers-owners-'+date+'.csv',bo.map(_userToRow));
      toast('Exported '+bo.length+' brokers & owners.');
    } else if(kind==='bd'){
      var bd=(await gU()).filter(function(u){return u.role==='builder';});
      if(!bd.length){toast('No builders.','e');return;}
      downloadCSV('ekmakan-builders-'+date+'.csv',bd.map(_userToRow));
      toast('Exported '+bd.length+' builders.');
    } else if(kind==='tn'){
      var tn=(await gU()).filter(function(u){return u.role==='user';});
      if(!tn.length){toast('No tenants.','e');return;}
      downloadCSV('ekmakan-tenants-'+date+'.csv',tn.map(_userToRow));
      toast('Exported '+tn.length+' tenants.');
    } else if(kind==='ld'){
      var inqs=await gInq();
      if(!inqs.length){toast('No leads.','e');return;}
      var ls=await gL();var lMap={};ls.forEach(function(l){lMap[l.id]=l;});
      downloadCSV('ekmakan-leads-'+date+'.csv',inqs.map(function(i){return _leadToRow(i,lMap);}));
      toast('Exported '+inqs.length+' leads.');
    } else if(kind==='rpt'){
      var rpts=await gRpts();
      if(!rpts.length){toast('No reports.','e');return;}
      downloadCSV('ekmakan-reports-'+date+'.csv',rpts.map(_reportToRow));
      toast('Exported '+rpts.length+' reports.');
    }
  }catch(e){
    console.error('Admin export error:',e);
    toast('Export failed: '+(e.message||'unknown error'),'e');
  }
}
// Helper: render consistent "Export to CSV" button for a tab
function _adminExportBtn(kind){
  return '<button class="btn btn-o btn-sm" onclick="adminExport(\''+kind+'\')" style="margin-left:auto;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Export to CSV</button>';
}

// ══ TRUSTED USER ══
async function toggleTrusted(uid,trusted){
  var confirmMsg=trusted
    ?'Mark this user as TRUSTED? Their future listings will auto-approve.'
    :'Revoke trusted status? Their future listings will need admin review.';
  if(!confirm(confirmMsg))return;
  try{
    var {error}=await sb.rpc('set_user_trusted',{p_user_id:uid,p_trusted:trusted});
    if(error)throw error;
    _clr('u');
    toast(trusted?'User marked as trusted.':'Trust revoked.');
    await renderAdmin(curAT);
  }catch(e){
    toast('Failed: '+(e.message||'unknown error'),'e');
  }
}

// ══ CSV EXPORT ══
// Converts an array of objects to CSV and triggers a download.
// Excel opens .csv files natively and handles unicode via BOM.
function _csvEscape(val){
  if(val===null||val===undefined)return '';
  var s=String(val);
  // If contains comma, quote, or newline — wrap in quotes and escape quotes
  if(/[",\n\r]/.test(s))return '"'+s.replace(/"/g,'""')+'"';
  return s;
}
function downloadCSV(filename,rows){
  if(!rows||!rows.length){toast('Nothing to export.','e');return;}
  var headers=Object.keys(rows[0]);
  var csv=headers.join(',')+'\r\n'+rows.map(function(r){
    return headers.map(function(h){return _csvEscape(r[h]);}).join(',');
  }).join('\r\n');
  // UTF-8 BOM for Excel to detect encoding
  var blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();
  setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);},100);
}

async function exportMyLeads(){
  if(!cu||(cu.role!=='broker'&&cu.role!=='owner'&&cu.role!=='builder')){toast('Not authorized.','e');return;}
  var myL=(await gL()).filter(function(l){return l.uid===cu.id;});
  var myLIds=myL.map(function(l){return l.id;});
  var allInqs=(await gInq()).filter(function(i){return myLIds.indexOf(i.listingId)>=0;});
  if(!allInqs.length){toast('No leads to export yet.','e');return;}
  // Open filter dialog
  openLeadExportDialog(myL,allInqs);
}

function openLeadExportDialog(myL,allInqs){
  // Build property options
  var propOpts='<option value="">All properties</option>'+myL.map(function(l){
    return '<option value="'+l.id+'">'+esc(l.title)+' — '+esc(l.city)+'</option>';
  }).join('');
  // Default date range: all-time (empty fields)
  var html='<div class="mh"><h2>Export Leads</h2><button class="mc" onclick="closeM(\'leadExpM\')" aria-label="Close dialog"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button></div>'
    +'<p style="font-size:13px;color:var(--mu);margin-bottom:14px;">Filter your leads before exporting. Leave fields blank to export all leads.</p>'
    +'<div class="fg2">'
    +'<div class="fg"><label class="flbl">From Date</label><input class="fi" type="date" id="leadExpFrom"/></div>'
    +'<div class="fg"><label class="flbl">To Date</label><input class="fi" type="date" id="leadExpTo"/></div>'
    +'<div class="fg s2"><label class="flbl">Property</label><select class="fi" id="leadExpProp">'+propOpts+'</select></div>'
    +'</div>'
    +'<div id="leadExpCount" style="font-size:12px;color:var(--mu);margin-top:10px;padding:10px;background:var(--cr);border-radius:8px;"></div>'
    +'<div style="display:flex;gap:8px;margin-top:14px;">'
    +'<button type="button" class="btn btn-o" onclick="closeM(\'leadExpM\')" style="flex:1;">Cancel</button>'
    +'<button type="button" class="btn btn-bl" onclick="doLeadExport()" style="flex:1;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Download CSV</button>'
    +'</div>';
  // Create modal if it doesn't exist
  var m=document.getElementById('leadExpM');
  if(!m){
    m=document.createElement('div');
    m.id='leadExpM';m.className='mo';
    m.onclick=function(e){ovcM(e,'leadExpM');};
    var mb=document.createElement('div');
    mb.className='mb';
    mb.onclick=function(e){e.stopPropagation();};
    m.appendChild(mb);
    document.body.appendChild(m);
  }
  m.querySelector('.mb').innerHTML=html;
  // Stash for doLeadExport
  window._leadExpMyL=myL;
  window._leadExpAllInqs=allInqs;
  // Wire live count update
  ['leadExpFrom','leadExpTo','leadExpProp'].forEach(function(id){
    var el=document.getElementById(id);
    if(el)el.addEventListener('change',updateLeadExpCount);
  });
  updateLeadExpCount();
  openM('leadExpM');
}

function _filterLeadsForExport(){
  var from=document.getElementById('leadExpFrom');
  var to=document.getElementById('leadExpTo');
  var prop=document.getElementById('leadExpProp');
  var fromDate=from&&from.value?new Date(from.value):null;
  var toDate=to&&to.value?new Date(to.value+'T23:59:59'):null;
  var propId=prop&&prop.value?Number(prop.value):null;
  return window._leadExpAllInqs.filter(function(i){
    if(propId&&i.listingId!==propId)return false;
    var d=new Date(i.sentAt);
    if(fromDate&&d<fromDate)return false;
    if(toDate&&d>toDate)return false;
    return true;
  });
}

function updateLeadExpCount(){
  var cnt=document.getElementById('leadExpCount');
  if(!cnt)return;
  var filtered=_filterLeadsForExport();
  cnt.innerHTML=filtered.length===window._leadExpAllInqs.length
    ?'<strong>'+filtered.length+'</strong> lead'+(filtered.length!==1?'s':'')+' will be exported.'
    :'<strong>'+filtered.length+'</strong> of '+window._leadExpAllInqs.length+' leads match these filters.';
}

function doLeadExport(){
  var filtered=_filterLeadsForExport();
  if(!filtered.length){toast('No leads match these filters.','e');return;}
  var lMap={};window._leadExpMyL.forEach(function(l){lMap[l.id]=l;});
  var rows=filtered.map(function(i){
    var l=lMap[i.listingId]||{};
    return {
      'Date':i.sentAt||'',
      'Lead Name':i.name||'',
      'Lead Phone':i.phone||'',
      'Lead Email':i.email||'',
      'Message':i.message||'',
      'Property Title':l.title||'',
      'Property City':l.city||'',
      'Property Locality':l.loc||'',
      'Property Type':l.type||'',
      'Bedrooms':l.beds||'',
      'Rent/Price':l.lf==='rent'?('Rent: \u20B9'+(l.rent||0)+'/mo'):('Sale: \u20B9'+(l.price||0)),
      'Listing ID':i.listingId
    };
  });
  var date=new Date().toISOString().split('T')[0];
  downloadCSV('ekmakan-leads-'+date+'.csv',rows);
  closeM('leadExpM');
  toast('Exported '+rows.length+' lead'+(rows.length>1?'s':'')+'.');
}

async function exportLeadsForListing(lid){
  var inqs=(await gInq()).filter(function(i){return i.listingId===lid;});
  var l=(await gL()).find(function(x){return x.id===lid;});
  if(!inqs.length){toast('No leads yet.','e');return;}
  var rows=inqs.map(function(i){
    return {
      'Date':i.sentAt||'',
      'Name':i.name||'',
      'Phone':i.phone||'',
      'Email':i.email||'',
      'Message':i.message||''
    };
  });
  var slug=(l?l.title:'listing').replace(/[^a-z0-9]+/gi,'-').toLowerCase().slice(0,40);
  downloadCSV('ekmakan-leads-'+slug+'.csv',rows);
  toast('Exported '+rows.length+' lead'+(rows.length>1?'s':'')+'.');
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
  var rj=ls.filter(function(l){return l.status==='rejected';});
  var brs=us.filter(function(u){return u.role==='broker';});
  var own=us.filter(function(u){return u.role==='owner';});
  var bld=us.filter(function(u){return u.role==='builder';});
  var ten=us.filter(function(u){return u.role==='user';});
  var el=document.getElementById('aC');if(!el)return;

  if(t==='ov'){
    // Clickable stat cards — each navigates to the relevant tab
    var cards=[
      {label:'Listings',val:ls.length,col:'var(--t)',tab:'al'},
      {label:'Approved',val:ap.length,col:'var(--gr)',tab:'al'},
      {label:'Pending',val:pn.length,col:'var(--g)',tab:'pd'},
      {label:'Rejected',val:rj.length,col:'var(--red)',tab:'rj'},
      {label:'Brokers',val:brs.length,col:'var(--pu)',tab:'ls'},
      {label:'Owners',val:own.length,col:'var(--g)',tab:'ls'},
      {label:'Builders',val:bld.length,col:'#c58600',tab:'bd'},
      {label:'Tenants',val:ten.length,col:'var(--t)',tab:'tn'},
      {label:'Leads',val:inqs.length,col:'#e05c1a',tab:'ld'}
    ];
    var cardsHTML=cards.map(function(c){
      return '<div onclick="aTabById(\''+c.tab+'\')" style="background:var(--wh);border-radius:12px;padding:16px 18px;border:1px solid var(--sa);border-left:4px solid '+c.col+';cursor:pointer;transition:box-shadow .18s;position:relative;" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.1)\'" onmouseout="this.style.boxShadow=\'none\'">'
        +'<div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:700;color:'+c.col+';margin-bottom:2px;">'+c.val+'</div>'
        +'<div style="font-size:12px;color:var(--mu);">'+c.label+'</div>'
        +'<div style="position:absolute;top:12px;right:12px;font-size:11px;color:var(--mu);opacity:.5;">View <svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-right"/></svg></div>'
        +'</div>';
    }).join('');
    el.innerHTML='<div class="g4" style="margin-bottom:24px;">'+cardsHTML+'</div>'
      +(pn.length
        ?'<h2 style="font-family:\'Playfair Display\',serif;font-size:17px;margin-bottom:12px;">&#9888; Needs Review ('+pn.length+')</h2>'+pn.map(aRow).join('')
        :'<div style="background:var(--wh);border-radius:12px;padding:24px;text-align:center;color:var(--mu);border:1px solid var(--sa);"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> All listings reviewed.</div>');
  }

  // All Listings tab — paginated
  if(t==='al'){
    var page=_adminPage.al||0;
    var end=Math.min((page+1)*PAGE_SIZE,ls.length);
    var shown=ls.slice(0,end);
    var remaining=ls.length-end;
    el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;"><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;">All Listings ('+ls.length+')</h2>'+_adminExportBtn('al')+'</div>'
      +shown.map(aRow).join('')
      +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.al++;renderAdmin(\'al\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+ls.length+'</div></div>':'');
  }

  // Pending tab — full card with approve/reject
  if(t==='pd'){
    el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;"><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;">Pending Review ('+pn.length+')</h2>'+_adminExportBtn('pd')+'</div>'
      +(pn.length?pn.map(function(l){
        var thumbH=l.images&&l.images.length
          ?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:80px;height:72px;object-fit:cover;border-radius:9px;flex-shrink:0;cursor:pointer;" onclick="viewL('+l.id+')" title="Click to preview"/>'
          :'<div style="width:72px;height:72px;background:var(--tl);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:30px;cursor:pointer;" onclick="viewL('+l.id+')">'+(l.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>';
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
          +'<button class="btn btn-gr btn-sm" onclick="apL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> Approve</button>'
          +'<button class="btn btn-r btn-sm" onclick="rjL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg> Reject</button>'
          +'<button class="btn btn-o btn-sm" onclick="viewL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg> Preview</button>'
          +'</div></div>';
      }).join(''):'<div style="background:var(--wh);border-radius:12px;padding:30px;text-align:center;color:var(--mu);border:1px solid var(--sa);">All caught up!</div>');
  }

  // Rejected tab
  if(t==='rj'){
    el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;"><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;color:var(--red);"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg> Rejected Listings ('+rj.length+')</h2>'+_adminExportBtn('rj')+'</div>'
      +(rj.length?'<div style="display:flex;flex-direction:column;gap:10px;">'+rj.map(aRow).join('')+'</div>':'<div style="background:var(--wh);border-radius:12px;padding:30px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No rejected listings.</div>');
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
            var trustBadge=u.trusted?'<span style="background:#e4f5ea;color:var(--gr);font-size:10px;font-weight:700;padding:2px 8px;border-radius:50px;margin-left:6px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> Trusted</span>':'';
            var trustBtn=u.trusted
              ?'<button onclick="event.stopPropagation();toggleTrusted(\''+u.id+'\',false)" style="background:transparent;color:#999;border:1px solid var(--sa);border-radius:6px;padding:4px 9px;font-size:11px;font-weight:600;cursor:pointer;font-family:\'DM Sans\',sans-serif;" title="Revoke trusted status">Revoke Trust</button>'
              :'<button onclick="event.stopPropagation();toggleTrusted(\''+u.id+'\',true)" style="background:var(--gr);color:#fff;border:none;border-radius:6px;padding:4px 9px;font-size:11px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;" title="Auto-approve this user\'s listings"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> Trust</button>';
            return '<tr style="cursor:pointer;" onclick="showUserListings(\''+u.id+'\')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'\'"><td><strong>'+esc(u.name)+'</strong>'+trustBadge+'</td>'
              +'<td><span class="pill '+(u.role==='broker'?'pill-p':'pill-y')+'">'+u.role+'</span></td>'
              +'<td>'+esc(u.email)+'</td><td>'+esc(u.phone)+'</td>'
              +'<td>'+esc(u.agency||'—')+'</td><td>'+esc(u.lic||'—')+'</td><td>'+esc(u.joinedAt)+'</td>'
              +'<td><span style="font-weight:700;color:var(--t);cursor:pointer;text-decoration:underline;">'+listCount+'</span></td>'
              +'<td>'+trustBtn+'</td></tr>';
          }).join('');
    el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;"><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;">Brokers & Owners ('+all.length+')</h2>'+_adminExportBtn('ls')+'</div>'
      +(all.length
        ?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;">'
          +'<table class="tbl"><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Phone</th><th>Agency</th><th>RERA</th><th>Joined</th><th>Listings</th><th>Trust</th></tr></thead><tbody>'
          +rowsHtml
          +'</tbody></table></div></div>'
          +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.ls++;renderAdmin(\'ls\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+all.length+'</div></div>':'')
          +'<p style="font-size:11px;color:var(--mu);margin-top:8px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-sparkle"/></svg> Click any row to see that user\'s listings</p>'
        :'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">None yet.</div>');
  }

  // Tenants tab — paginated rows clickable to show their inquiries
  // Builders tab
  if(t==='bd'){
    var page=_adminPage.bd||0;
    var end=Math.min((page+1)*PAGE_SIZE,bld.length);
    var shown=bld.slice(0,end);
    var remaining=bld.length-end;
    var rowsHtml=shown.map(function(u){
            var uListings=ls.filter(function(l){return l.uid===u.id;});
            var projCount=uListings.filter(function(l){return l.lf==='project'||l.isProject;}).length;
            var trustBadge=u.trusted?'<span style="background:#e4f5ea;color:var(--gr);font-size:10px;font-weight:700;padding:2px 8px;border-radius:50px;margin-left:6px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> Trusted</span>':'';
            var trustBtn=u.trusted
              ?'<button onclick="event.stopPropagation();toggleTrusted(\''+u.id+'\',false)" style="background:transparent;color:#999;border:1px solid var(--sa);border-radius:6px;padding:4px 9px;font-size:11px;font-weight:600;cursor:pointer;font-family:\'DM Sans\',sans-serif;">Revoke Trust</button>'
              :'<button onclick="event.stopPropagation();toggleTrusted(\''+u.id+'\',true)" style="background:var(--gr);color:#fff;border:none;border-radius:6px;padding:4px 9px;font-size:11px;font-weight:700;cursor:pointer;font-family:\'DM Sans\',sans-serif;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> Trust</button>';
            return '<tr style="cursor:pointer;" onclick="showUserListings(\''+u.id+'\')" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'\'"><td><strong>'+esc(u.name)+'</strong>'+trustBadge+'</td>'
              +'<td>'+esc(u.agency||'—')+'</td>'
              +'<td>'+esc(u.email)+'</td><td>'+esc(u.phone)+'</td><td>'+esc(u.joinedAt)+'</td>'
              +'<td><span style="font-weight:700;color:#c58600;">'+projCount+'</span></td>'
              +'<td>'+trustBtn+'</td></tr>';
          }).join('');
    el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;"><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:#c58600;"><use href="#i-sparkle"/></svg> Builders ('+bld.length+')</h2>'+_adminExportBtn('bd')+'</div>'
      +(bld.length
        ?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;">'
          +'<table class="tbl"><thead><tr><th>Name</th><th>Company</th><th>Email</th><th>Phone</th><th>Joined</th><th>Projects</th><th>Trust</th></tr></thead><tbody>'
          +rowsHtml
          +'</tbody></table></div></div>'
          +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.bd++;renderAdmin(\'bd\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+bld.length+'</div></div>':'')
          +'<p style="font-size:11px;color:var(--mu);margin-top:8px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-sparkle"/></svg> Trusted builders\' new projects auto-approve on submission</p>'
        :'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No builders yet.</div>');
  }

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
    el.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;"><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;">Tenants ('+ten.length+')</h2>'+_adminExportBtn('tn')+'</div>'
      +(ten.length
        ?'<div style="overflow-x:auto;"><div style="background:var(--wh);border-radius:12px;border:1px solid var(--sa);overflow:hidden;">'
          +'<table class="tbl"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Joined</th><th>Inquiries</th></tr></thead><tbody>'
          +rowsHtml
          +'</tbody></table></div></div>'
          +(remaining>0?'<div class="mk-load-more"><button onclick="_adminPage.tn++;renderAdmin(\'tn\')">Load More ('+remaining+' remaining)</button><div class="mk-load-more-count">Showing '+end+' of '+ten.length+'</div></div>':'')
          +'<p style="font-size:11px;color:var(--mu);margin-top:8px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-sparkle"/></svg> Click any row to see that tenant\'s inquiries</p>'
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
    :'<div style="font-size:26px;cursor:pointer;" onclick="viewL('+l.id+')">'+(l.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>';
  var pr=l.lf==='rent'?fmtRentHTML(l.rent)+'/mo':fmtPriceHTML(l.price);
  var statusPill='<span class="pill '+(l.status==='approved'?'pill-g':l.status==='pending'?'pill-y':'pill-r')+'"'+(l.status==='rejected'&&l.rejectionReason?' title="Rejection reason: '+escAttr(l.rejectionReason)+'" style="cursor:help;"':'')+'>'+l.status+'</span>';
  var rejectedNote='';
  if(l.status==='rejected'&&l.rejectionReason){
    rejectedNote='<div style="flex-basis:100%;background:#fff5f5;border-left:3px solid var(--red);border-radius:4px;padding:6px 10px;margin-top:8px;font-size:11px;color:#7a2222;line-height:1.4;"><strong>Rejection reason:</strong> '+esc(l.rejectionReason)+'</div>';
  } else if(l.status==='pending'&&l.rejectionReason){
    rejectedNote='<div style="flex-basis:100%;background:#fffbe6;border-left:3px solid #e6a800;border-radius:4px;padding:6px 10px;margin-top:8px;font-size:11px;color:#7a5c00;line-height:1.4;"><strong>Previously rejected:</strong> '+esc(l.rejectionReason)+' <span style="color:var(--t);font-weight:700;margin-left:6px;">&mdash; Resubmitted for review</span></div>';
  }
  return '<div class="li" style="cursor:default;flex-wrap:wrap;">'
    +'<div style="display:flex;align-items:center;gap:12px;width:100%;">'
    +thumbH
    +'<div class="li-in" style="cursor:pointer;" onclick="viewL('+l.id+')">'
    +'<strong style="color:var(--t);">'+esc(l.title)+'</strong>'
    +'<span>'+esc(l.city)+' &middot; '+pr+' &middot; '+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+'</span>'
    +'</div>'
    +statusPill
    +'<span class="pill '+(l.lf==='rent'?'pill-b':'pill-y')+'" style="font-size:10px;">'+l.lf.toUpperCase()+'</span>'
    +'<div class="li-ac">'
    +'<button class="btn btn-sm btn-o" onclick="viewL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg> View</button>'
    +(l.status==='pending'?'<button class="btn btn-gr btn-sm" onclick="apL('+l.id+')" aria-label="Approve listing"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg></button><button class="btn btn-r btn-sm" onclick="rjL('+l.id+')" aria-label="Reject listing"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg></button>':'')
    +'<button style="background:transparent;color:var(--red);border:none;font-size:14px;cursor:pointer;padding:3px 5px;" onclick="dlL('+l.id+')" aria-label="Delete listing"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-trash"/></svg></button>'
    +'</div>'
    +'</div>'
    +rejectedNote
    +'</div>';
}
async function apL(id){
  if(!confirm('Approve listing #'+id+'?'))return;
  var ok=await updateListing(id,{status:'approved',verified:true});
  if(ok){_clr('l');toast('Listing approved \u2714');await renderAdmin(curAT);}
}
async function rjL(id){
  var reason=prompt('Reason for rejecting this listing?\n\nThis will be shown to the broker/owner so they can fix the issue and resubmit.','');
  if(reason===null)return; // Admin cancelled
  reason=reason.trim();
  if(!reason){
    alert('Please provide a reason so the broker knows what to fix.');
    return;
  }
  if(reason.length>500){
    alert('Please keep the reason under 500 characters.');
    return;
  }
  var ok=await updateListing(id,{status:'rejected',rejection_reason:reason});
  if(ok){_clr('l');toast('Listing rejected with reason.','e');await renderAdmin(curAT);}
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
    +'<div><h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin-bottom:2px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-flag"/></svg> Discrimination Reports</h2>'
    +'<p style="font-size:12px;color:var(--mu);">'+open.length+' open &middot; '+resolved.length+' resolved</p></div>'
    +(rpts.length?_adminExportBtn('rpt'):'')
    +'</div>';
  if(rpts.length===0){
    html+='<div style="background:var(--wh);border-radius:12px;padding:40px;text-align:center;border:1px solid var(--sa);">'
      +'<div style="font-size:40px;margin-bottom:10px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--gr);"><use href="#i-heart-fill"/></svg></div>'
      +'<h3 style="font-family:\'Playfair Display\',serif;margin-bottom:6px;">No reports yet</h3>'
      +'<p style="color:var(--mu);font-size:13px;">When users report discrimination, they will appear here for review.</p>'
      +'</div>';
  } else {
    rpts.slice().reverse().forEach(function(r){
      var isOpen=r.status==='open';
      var listingExists=ls.some(function(l){return l.id===r.listingId;});
      var borderCol=isOpen?'#ffcccc':'var(--sa)';
      var leftCol=isOpen?'var(--red)':'var(--gr)';
      var statusLabel=isOpen?'&#9888; Open':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> Resolved';
      var statusColor=isOpen?'var(--red)':'var(--gr)';
      var actions;
      if(isOpen){
        actions='<button class="btn btn-sm btn-gr" onclick="resolveReport('+r.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> Mark Resolved</button>';
        if(listingExists)actions+='<button class="btn btn-sm btn-r" onclick="removeReportedListing('+r.listingId+','+r.id+')">Remove Listing &amp; Resolve</button>';
        else actions+='<span style="font-size:11px;color:var(--mu);padding:6px 10px;">Listing already removed</span>';
      } else {
        actions='<span style="font-size:12px;color:var(--gr);font-weight:700;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> Resolved</span>';
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
  rReports();toast('Marked as resolved <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>');
}
async function removeReportedListing(listingId,rptId){
  if(!confirm('Remove this listing permanently and mark report resolved?'))return;
  await deleteListing(listingId);
  await updateReport(rptId,{status:'resolved'});
  rReports();toast('Listing removed <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>','e');
}

// ══ LEADS ══
async function rLeads(){
  var el=document.getElementById('aC');if(!el)return;
  var inqs=await gInq();
  el.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">'
    +'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;">Leads ('+inqs.length+')</h2>'
    +'<div style="display:flex;gap:8px;"><button class="btn btn-gr btn-sm" onclick="expCSV(\'all\')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Export All</button><button class="btn btn-sm" onclick="expCSV(\'today\')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Today Only</button></div>'
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
  toast('Exported '+inqs.length+' lead(s) <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>');
}

// ══ MODALS ══
function ovcM(e,id){if(e.target===e.currentTarget)closeM(id);}
function openM(id){
  if(id==='addM'){
    if(!cu){openM('authM');return;}
    if(cu.role!=='owner'&&cu.role!=='broker'&&cu.role!=='builder'&&cu.role!=='admin'){toast('Only owners, brokers and builders can list properties.','e');return;}
    // Reset to "new listing" mode (editListing overrides this after openM)
    if(!_editingListingId){
      resetAddModal();
      selTags=[];selAmens=[];upImgs=[];
      bldLT();bldLA();rPv();
      // Builders default to 'project' mode and see the Project card
      var wcP=document.getElementById('wizCardProject');
      if(wcP)wcP.style.display=cu.role==='builder'?'':'none';
      _unitTypes=[];renderUnits();
      _selFurn=[];renderFurnishingItems();
      _selWater=[];setWaterFromString('');
      _landmarks=[];renderLandmarks();
      _uploadingVideo=null;_existingVideoUrl='';renderVideoPreview();
      setLM(cu.role==='builder'?'project':'rent');
      var lo=document.getElementById('lOw'),lc=document.getElementById('lCt'),le=document.getElementById('lErr');
      if(lo)lo.value=cu.agency?cu.name+' – '+esc(cu.agency):cu.name;
      if(lc)lc.value=cu.phone||'';
      if(le)le.style.display='none';
      wizGoto(1);
    }
  }
  // If opening addM in edit mode, start on step 2 (skip intent)
  if(id==='addM'&&_editingListingId){
    wizGoto(2);
  }
  var el=document.getElementById(id);if(el)el.classList.add('open');
}
function closeM(id){
  var el=document.getElementById(id);if(el)el.classList.remove('open');
  // Reset edit mode when closing listing modal
  if(id==='addM')resetAddModal();
  // Clear listing deep-link hash and destroy map when closing detail view
  if(id==='viewM'){
    _currentDetailId=null;
    // Clear listing deep-link hash (back button still works via popstate handler)
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
function qaNewProjects(){_projectsOnly=true;bldF();setBMode('buy');go('browse');}
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
  // Additional Mumbai localities — comprehensive coverage
  // Western Suburbs - Andheri/Jogeshwari cluster
  {n:'Oshiwara',s:'Mumbai'},{n:'Four Bungalows',s:'Mumbai'},{n:'Seven Bungalows',s:'Mumbai'},
  {n:'D N Nagar',s:'Mumbai'},{n:'Yari Road',s:'Mumbai'},{n:'Amboli',s:'Mumbai'},
  {n:'Madh Island',s:'Mumbai'},{n:'Madh',s:'Mumbai'},{n:'Marol',s:'Mumbai'},
  {n:'MIDC Andheri',s:'Mumbai'},{n:'Saki Naka',s:'Mumbai'},{n:'JB Nagar',s:'Mumbai'},
  {n:'Chakala',s:'Mumbai'},{n:'SEEPZ',s:'Mumbai'},{n:'Mahakali Caves Road',s:'Mumbai'},
  // Bandra cluster
  {n:'Pali Hill',s:'Mumbai'},{n:'Pali Naka',s:'Mumbai'},{n:'Bandstand',s:'Mumbai'},
  {n:'Carter Road',s:'Mumbai'},{n:'Hill Road',s:'Mumbai'},{n:'Linking Road',s:'Mumbai'},
  {n:'Turner Road',s:'Mumbai'},{n:'Perry Cross Road',s:'Mumbai'},{n:'Ranwar',s:'Mumbai'},
  {n:'Chuim Village',s:'Mumbai'},{n:'Bandra Kurla Complex',s:'Mumbai'},{n:'BKC',s:'Mumbai'},
  // Khar/Santacruz cluster  
  {n:'Pali Village',s:'Mumbai'},{n:'14th Road Khar',s:'Mumbai'},
  // Goregaon/Malad cluster
  {n:'Aarey Colony',s:'Mumbai'},{n:'Film City',s:'Mumbai'},
  {n:'Bangur Nagar',s:'Mumbai'},{n:'Mindspace',s:'Mumbai'},{n:'Evershine Nagar',s:'Mumbai'},
  {n:'Inorbit Mall Malad',s:'Mumbai'},{n:'Sundar Nagar',s:'Mumbai'},
  // Kandivali/Borivali cluster
  {n:'Charkop',s:'Mumbai'},{n:'Thakur Complex',s:'Mumbai'},{n:'Thakur Village',s:'Mumbai'},
  {n:'Lokhandwala Kandivali',s:'Mumbai'},{n:'Mahavir Nagar',s:'Mumbai'},
  {n:'IC Colony',s:'Mumbai'},{n:'Gorai',s:'Mumbai'},{n:'Eksar',s:'Mumbai'},
  {n:'Shimpoli',s:'Mumbai'},{n:'LT Road Borivali',s:'Mumbai'},
  // South Mumbai - upscale
  {n:'Altamount Road',s:'Mumbai'},{n:'Carmichael Road',s:'Mumbai'},{n:'Napean Sea Road',s:'Mumbai'},
  {n:'Hughes Road',s:'Mumbai'},{n:'Cumballa Hill',s:'Mumbai'},{n:'Gamdevi',s:'Mumbai'},
  {n:'Babulnath',s:'Mumbai'},{n:'August Kranti Marg',s:'Mumbai'},
  {n:'Warden Road',s:'Mumbai'},{n:'Chowpatty',s:'Mumbai'},{n:'Marine Lines',s:'Mumbai'},
  // South Mumbai - business / commercial
  {n:'Ballard Estate',s:'Mumbai'},{n:'Horniman Circle',s:'Mumbai'},{n:'Flora Fountain',s:'Mumbai'},
  {n:'Kala Ghoda',s:'Mumbai'},{n:'Fort Market',s:'Mumbai'},{n:'D N Road',s:'Mumbai'},
  {n:'Hutatma Chowk',s:'Mumbai'},{n:'Mint Road',s:'Mumbai'},{n:'Kamala Mills',s:'Mumbai'},
  {n:'Todi Mills',s:'Mumbai'},{n:'Phoenix Mills',s:'Mumbai'},
  // South Central - Parel/Lower Parel area
  {n:'Lalbaug',s:'Mumbai'},{n:'Dadar TT',s:'Mumbai'},{n:'Elphinstone',s:'Mumbai'},
  {n:'Mahalaxmi',s:'Mumbai'},{n:'Mahalaxmi Racecourse',s:'Mumbai'},{n:'Haji Ali',s:'Mumbai'},
  {n:'Kalachowki',s:'Mumbai'},{n:'Reay Road',s:'Mumbai'},
  // Dadar/Matunga
  {n:'Shivaji Park',s:'Mumbai'},{n:'Hindu Colony',s:'Mumbai'},{n:'Five Gardens',s:'Mumbai'},
  {n:'King Circle',s:'Mumbai'},{n:'Matunga East',s:'Mumbai'},{n:'Matunga West',s:'Mumbai'},
  {n:'Ruia College',s:'Mumbai'},
  // Eastern Suburbs
  {n:'Kalina',s:'Mumbai'},{n:'Vakola',s:'Mumbai'},{n:'Kurla Nehru Nagar',s:'Mumbai'},
  {n:'Tilak Nagar',s:'Mumbai'},{n:'Vidya Vihar',s:'Mumbai'},{n:'Bhandup Complex',s:'Mumbai'},
  {n:'Pant Nagar',s:'Mumbai'},{n:'Hiranandani Powai',s:'Mumbai'},{n:'IIT Powai',s:'Mumbai'},
  {n:'Mahim West',s:'Mumbai'},{n:'Mahim East',s:'Mumbai'},
  // Chembur/Govandi
  {n:'Deonar',s:'Mumbai'},{n:'Shell Colony',s:'Mumbai'},{n:'Tilak Nagar Chembur',s:'Mumbai'},
  {n:'Sion Trombay Road',s:'Mumbai'},{n:'Bainganwadi',s:'Mumbai'},
  // Thane area additions
  {n:'Ghodbunder Road',s:'Mumbai'},{n:'Majiwada',s:'Mumbai'},{n:'Naupada',s:'Mumbai'},
  {n:'Vartak Nagar',s:'Mumbai'},{n:'Kasarvadavali',s:'Mumbai'},{n:'Hiranandani Thane',s:'Mumbai'},
  {n:'Waghbil',s:'Mumbai'},{n:'Manpada',s:'Mumbai'},{n:'Pokhran Road',s:'Mumbai'},
  {n:'Kolshet Road',s:'Mumbai'},{n:'Teen Hath Naka',s:'Mumbai'},
  // Mira Road / Bhayander / Beyond
  {n:'Mira Road East',s:'Mumbai'},{n:'Mira Road West',s:'Mumbai'},{n:'Kashigaon',s:'Mumbai'},
  {n:'Bhayander East',s:'Mumbai'},{n:'Bhayander West',s:'Mumbai'},{n:'Naigaon',s:'Mumbai'},
  {n:'Vasai East',s:'Mumbai'},{n:'Vasai West',s:'Mumbai'},{n:'Nalasopara',s:'Mumbai'},
  {n:'Virar East',s:'Mumbai'},{n:'Virar West',s:'Mumbai'},
  // Old Mumbai South markets / Bhendi Bazaar surrounds
  {n:'Pydhonie',s:'Mumbai'},{n:'Umarkhadi',s:'Mumbai'},{n:'Wadi Bunder',s:'Mumbai'},
  {n:'Mohammed Ali Road',s:'Mumbai'},{n:'Null Bazaar',s:'Mumbai'},{n:'Bhuleshwar',s:'Mumbai'},
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

// Build set of major city names (entries where 's' is a state, not a city)
// Any entry whose 's' matches another entry's 'n' is a locality under that city
var _INDIAN_STATES=['Maharashtra','Karnataka','Delhi','Telangana','Tamil Nadu','Gujarat','Punjab','Haryana','Uttar Pradesh','West Bengal','Rajasthan','Kerala','Goa','Andhra Pradesh','Madhya Pradesh','Bihar','Odisha','Assam','Chhattisgarh','Jharkhand','Jammu and Kashmir','Uttarakhand','Himachal Pradesh','Chandigarh','Puducherry'];
function _isCity(c){return _INDIAN_STATES.indexOf(c.s)>=0;}

function acInit(inputId, listId, targetField, opts){
  var inp = document.getElementById(inputId);
  var lst = document.getElementById(listId);
  if(!inp || !lst) return;
  var hiIdx = -1;
  var mode=(opts&&opts.mode)||'all'; // 'city' = only cities; 'locality' = only localities; 'all' = everything
  inp.setAttribute('autocomplete','off');

  inp.addEventListener('input', function(){
    var q = inp.value.trim().toLowerCase();
    hiIdx = -1;
    if(!q){ lst.className='ac-list'; lst.innerHTML=''; return; }
    var matches = INDIAN_CITIES.filter(function(c){
      if(c.n.toLowerCase().indexOf(q) < 0) return false;
      if(mode==='city') return _isCity(c);
      if(mode==='locality') return !_isCity(c);
      return true;
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
        + '<span class="ac-pin"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg></span>'
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
  var {data,error}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified,is_trusted').order('joined_at',{ascending:false});
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
  if(error){
    var msg=error.message||'Unknown error';
    // Friendly hint for the common "missing column" case after skipping a migration
    if(msg.indexOf('building_name')>=0){
      msg='Please run the building-name migration in Supabase SQL Editor first.';
    }
    toast('Failed to create listing: '+msg,'e');
    console.error('createListing error:',error);
    return null;
  }
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
// Populate budget dropdowns (hero buy + browse buy) on first paint
initBudgetDropdowns();

acInit('hrc','ac-hrc','hrc',{mode:'city'});      // Hero rent - city only
acInit('hbc','ac-hbc','hbc',{mode:'city'});      // Hero buy - city only
acInit('fCity','ac-fCity','fCity',{mode:'city'}); // Browse rent city
acInit('fLoc','ac-fLoc','fLoc',{mode:'locality'}); // Browse rent locality
acInit('fBCity','ac-fBCity','fBCity',{mode:'city'}); // Browse buy city
acInit('fBLoc','ac-fBLoc','fBLoc',{mode:'locality'}); // Browse buy locality
acInit('lCy','ac-lCy','lCy',{mode:'city'});     // Listing form city
acInit('lLo','ac-lLo','lLo',{mode:'locality'});     // Listing form locality

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
      var {data:profile}=await sb.from('users').select('id,name,email,phone,role,agency,license_no,joined_at,verified,is_trusted').eq('id',session.user.id).single();
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
// Poll notifications every 20s for near-real-time updates
setInterval(function(){if(cu)loadNotifs();},20000);
// Also refresh when the tab regains focus (user switches back to the app)
window.addEventListener('focus',function(){if(cu)loadNotifs();});
document.addEventListener('visibilitychange',function(){
  if(!document.hidden&&cu)loadNotifs();
});
