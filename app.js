// IMG — removed (data now in Supabase)
const CIMG=["data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTdhNmUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZDMwMzAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4+Z77iPPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNjMDlhNGEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MDMwMTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn5WMPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyZTdkNGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTMwMjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4y/PC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkOTUzNGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2YTEwMTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4+vPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyNTYzZWIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTFhNjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4yKPC90ZXh0Pjwvc3ZnPg==","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2YjRmYTAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyYTEwNTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LXNpemU9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj7wn4yEPC90ZXh0Pjwvc3ZnPg=="];
// ══ CONSTANTS ══
// Admin credentials: now managed via Supabase Auth (no client-side hardcoding).
const ATAGS=['LGBTQ+ Friendly','All Communities Welcome','Single Women/Men Friendly','Pet Friendly','Working Professionals Welcome','Diverse Neighborhood'];
const AMENS=['Lift','Parking','Security','Power Backup','Swimming Pool','Gym','Club House','Play Area','Garden','Gas Pipeline','Intercom','CCTV'];
const PTYR=['Apartment','Flat','House','Villa','PG / Room'];
const PTYB=['Apartment','Flat','House','Villa','Plot'];
const BEDS=['1','2','3','4','5+'];
const FURN=['Unfurnished','Semi-Furnished','Fully Furnished'];
const POSS=['Ready to Move','Under Construction','Within 6 Months','Within 1 Year'];
// Transaction Type filter values (used as the buy-page chip filter; replaces the old "Sale Type" filter
// which was a duplicate of Transaction Type with fewer options).
const STYP=['Resale','New Booking','Builder Resale'];
const FACE=['North','South','East','West','North-East','North-West'];
const FLOR=['Ground','1st-2nd','3rd-5th','5th-10th','10th+'];

// Cities shown on the homepage tile grid. For launch, Mumbai is the only
// active market — everything else is "Coming Soon" (non-clickable, dimmed,
// shows a clear badge so visitors aren't confused). When we expand, flip the
// `active` flag and the tiles become live links.
const CITIES=[
  {name:'Mumbai',img:'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80&auto=format&fit=crop',active:true},
  {name:'Bengaluru',img:'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=600&q=80&auto=format&fit=crop',active:false},
  {name:'Hyderabad',img:'https://images.unsplash.com/photo-1569511166187-f63a0a7ed7cf?w=600&q=80&auto=format&fit=crop',active:false},
  {name:'Delhi',img:'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&auto=format&fit=crop',active:false},
  {name:'Pune',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',active:false},
  {name:'Chennai',img:'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80&auto=format&fit=crop',active:false}
];

// SEED — removed (data now in Supabase)

// SEED_USERS — removed (data now in Supabase)

// SEED_EXTRA — removed (data now in Supabase)

// SEED_INQ — removed (data now in Supabase)

// SEED_RPT — removed (data now in Supabase)


// ══ SUPABASE ══
// Supabase client (`sb`) and credentials are now defined in common.js, which
// is loaded before app.js. Don't re-initialize here — that would create two
// clients and break auth state continuity.

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
function mapL(r){return{id:r.id,lf:r.listing_for,title:r.title,building:r.building_name||'',city:r.city,loc:r.locality||'',type:r.property_type||'Apartment',beds:String(r.beds||2),baths:r.baths||1,area:r.area_sqft||0,carpetArea:r.carpet_area||0,builtArea:r.built_up_area||0,superArea:r.super_built_up_area||0,age:r.property_age||'',furnDetails:r.furnishing_details||[],rent:r.rent||0,dep:r.deposit||0,price:r.price||0,stype:r.sale_type||'',poss:r.possession||'',rera:r.rera_no||'',contact:r.contact_phone||'',owner:r.owner_name||'',agency:r.agency_name||'',tags:r.tags||[],amens:r.amenities||[],verified:r.verified||false,status:r.status||'pending',rejectionReason:r.rejection_reason||'',images:r.images||[],desc:r.description||'',postedAt:r.posted_at?(r.posted_at+'').split('T')[0]:'',uid:r.user_id,urole:r.user_role||'owner',furnish:r.furnishing||'',floor:r.floor_range||'',floorNo:r.floor_no!=null?r.floor_no:null,totalFloors:r.total_floors||null,facing:r.facing||'',avail:r.availability||'',isProject:r.is_project||false,projectStatus:r.project_status||'',completion:r.completion_date||'',priceMin:r.price_range_min||0,priceMax:r.price_range_max||0,unitTypes:r.unit_types||[],txnType:r.transaction_type||'',ownership:r.ownership||'',water:r.water_source||'',backup:r.power_backup||'',landmarks:r.landmarks||[],videoUrl:r.video_url||'',pincode:r.pincode||'',streetAddress:r.street_address||'',lat:r.latitude!=null?r.latitude:null,lng:r.longitude!=null?r.longitude:null,
  // Builder project fields
  totalAcreage:r.total_acreage||null,totalTowers:r.total_towers||null,
  brochureUrl:r.brochure_url||'',masterPlanUrl:r.master_plan_url||'',
  unitPlans:r.unit_plans||[],galleryCategorized:r.gallery_categorized||{},
  paymentSchemes:r.payment_schemes||[],bookingAmount:r.booking_amount||null,
  priceBreakupType:r.price_breakup_type||''};}
// Map JS listing → Supabase row
function unmapL(l){return{listing_for:l.lf,title:l.title,building_name:l.building||'',city:l.city,locality:l.loc||'',property_type:l.type||'Apartment',beds:Number(l.beds)||2,baths:Number(l.baths)||1,area_sqft:Number(l.area)||0,carpet_area:Number(l.carpetArea)||0,built_up_area:Number(l.builtArea)||0,super_built_up_area:Number(l.superArea)||0,property_age:l.age||'',furnishing_details:l.furnDetails||[],rent:Number(l.rent)||0,deposit:Number(l.dep)||0,price:Number(l.price)||0,sale_type:l.stype||'',possession:l.poss||'',rera_no:l.rera||'',contact_phone:l.contact,owner_name:l.owner,agency_name:l.agency||'',description:l.desc||'',tags:l.tags||[],amenities:l.amens||[],images:l.images||[],verified:l.verified||false,status:l.status||'pending',user_id:l.uid||(cu?cu.id:null),user_role:l.urole||(cu?cu.role:'owner'),furnishing:l.furnish||'',floor_range:l.floor||'',floor_no:l.floorNo!=null&&l.floorNo!==''?Number(l.floorNo):null,total_floors:l.totalFloors?Number(l.totalFloors):null,facing:l.facing||'',availability:l.avail||'',is_project:l.isProject||false,project_status:l.projectStatus||'',completion_date:l.completion||null,price_range_min:Number(l.priceMin)||0,price_range_max:Number(l.priceMax)||0,unit_types:l.unitTypes||[],transaction_type:l.txnType||'',ownership:l.ownership||'',water_source:l.water||'',power_backup:l.backup||'',landmarks:l.landmarks||[],video_url:l.videoUrl||'',pincode:l.pincode||'',street_address:l.streetAddress||'',latitude:l.lat!=null&&l.lat!==''?Number(l.lat):null,longitude:l.lng!=null&&l.lng!==''?Number(l.lng):null,
  // Builder project fields
  total_acreage:l.totalAcreage!=null&&l.totalAcreage!==''?Number(l.totalAcreage):null,
  total_towers:l.totalTowers!=null&&l.totalTowers!==''?Number(l.totalTowers):null,
  brochure_url:l.brochureUrl||'',
  master_plan_url:l.masterPlanUrl||'',
  unit_plans:l.unitPlans||[],
  gallery_categorized:l.galleryCategorized||{},
  payment_schemes:l.paymentSchemes||[],
  booking_amount:l.bookingAmount!=null&&l.bookingAmount!==''?Number(l.bookingAmount):null,
  price_breakup_type:l.priceBreakupType||null};}
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
// `cu` is declared in common.js — do NOT redeclare here, that would shadow
// the shared global and break the auth listener.
let bMode='rent', hMode='rent', lMode='rent', actL=null;
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
  var {data,error}=await sb.from('listings').select('id,listing_for,title,building_name,city,locality,property_type,beds,baths,area_sqft,rent,deposit,price,sale_type,possession,rera_no,contact_phone,owner_name,agency_name,tags,amenities,verified,status,rejection_reason,images,description,posted_at,user_id,user_role,furnishing,floor_range,facing,availability,is_project,project_status,completion_date,price_range_min,price_range_max,unit_types,carpet_area,built_up_area,super_built_up_area,property_age,furnishing_details,transaction_type,ownership,water_source,power_backup,floor_no,total_floors,landmarks,video_url,pincode,street_address,latitude,longitude,total_acreage,total_towers,brochure_url,master_plan_url,unit_plans,gallery_categorized,payment_schemes,booking_amount,price_breakup_type').order('posted_at',{ascending:false});
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
  // Insert and return the row so the caller can use the inquiry_id for any
  // follow-up actions (e.g. tenant profile access grant in Stage 3).
  var {data,error}=await sb.from('inquiries').insert(row).select('id').single();
  if(error){toast('Failed to send inquiry: '+error.message,'e');return null;}
  return data;
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
// upNav() is defined in common.js — DO NOT re-declare here. Pages call upNav()
// directly to refresh the navbar after login/logout/profile changes.

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
  if(rf){
    rf.style.display=t==='reg'?'':'none';
    if(t==='reg'){
      if(!rf.dataset.role)rf.dataset.role='user';
      // Reset wizard to step 1
      _regStep=1;
      if(typeof _showRegStep==='function')_showRegStep(1);
    }
  }
  if(prf)prf.style.display=t==='reset'?'':'none';
  if(al)al.classList.toggle('on',t==='login');
  if(ar)ar.classList.toggle('on',t==='reg');
  if(ae)ae.style.display='none';
  // Render Turnstile when login tab shown (reg CAPTCHA is lazy-rendered on step 3)
  if(t==='login')renderTurnstile('turnstileLoginWrap',function(tk){_turnstileLoginToken=tk;});
  if(t==='reset')renderTurnstile('turnstileResetWrap',function(tk){_turnstileResetToken=tk;});
}

function setRR(r){
  ['rrU','rrO','rrB','rrBd'].forEach(function(id){var e=document.getElementById(id);if(e)e.classList.remove('on');});
  var btnMap={'user':'rrU','owner':'rrO','broker':'rrB','builder':'rrBd'};
  var bt=document.getElementById(btnMap[r]||'rrU');if(bt)bt.classList.add('on');
  var rf=document.getElementById('rFrm');if(rf)rf.dataset.role=r;
  var ag=document.getElementById('rAg'),lc=document.getElementById('rLc'),wb=document.getElementById('rWb');
  // Agency field shown for broker and builder; license shown only for broker
  if(ag)ag.style.display=(r==='broker'||r==='builder')?'':'none';
  if(lc)lc.style.display=r==='broker'?'':'none';
  // Website field shown only for builder
  if(wb)wb.style.display=r==='builder'?'':'none';
  var agLabel=document.getElementById('rAgLabel');
  if(agLabel)agLabel.textContent=r==='builder'?'Builder / Company Name *':'Agency Name';
  var nt=document.getElementById('rNote');
  if(nt){
    if(r==='broker'){nt.className='al alp';nt.textContent='Broker portal: photo uploads, lead tracking and CSV exports.';}
    else if(r==='builder'){nt.className='al alp';nt.textContent='Builder portal: launch new projects with multiple unit types, RERA details and brochures.';}
    else if(r==='owner'){nt.className='al alw';nt.textContent='List directly — no broker needed. Simple owner dashboard included.';}
    else{nt.className='al ali';nt.textContent='Browse, save and contact listings for renting or buying. Free forever.';}
  }
}

// Registration wizard step navigation
var _regStep=1;
function _showRegStep(n){
  _regStep=n;
  var rf=document.getElementById('rFrm');if(rf)rf.dataset.step=n;
  for(var i=1;i<=3;i++){
    var pane=document.getElementById('regS'+i);
    if(pane)pane.style.display=i===n?'':'none';
  }
  // Update step indicator
  document.querySelectorAll('.reg-step').forEach(function(el){
    var s=Number(el.dataset.rs);
    el.classList.toggle('on',s===n);
    el.classList.toggle('done',s<n);
  });
  // Clear error on step change
  var ae=document.getElementById('aErr');if(ae)ae.style.display='none';
}

function regNext(){
  var ae=document.getElementById('aErr');if(ae)ae.style.display='none';
  var rf=document.getElementById('rFrm');
  var role=rf?rf.dataset.role||'user':'user';
  if(_regStep===1){
    // Step 1 → 2: role selected, proceed
    _showRegStep(2);
  } else if(_regStep===2){
    // Validate personal details before moving to step 3
    var nm=(document.getElementById('rNm').value||'').trim();
    var em=(document.getElementById('rEm').value||'').trim().toLowerCase();
    var ph=(document.getElementById('rPh').value||'').trim();
    if(!nm){if(ae){ae.style.display='';ae.textContent='Please enter your full name.';}return;}
    if(!em||!isEmailFormatValid(em)){if(ae){ae.style.display='';ae.textContent='Please enter a valid email address.';}return;}
    if(isDisposableEmail(em)){if(ae){ae.style.display='';ae.textContent='Disposable email addresses are not accepted.';}return;}
    // Phone: must be exactly 10 digits
    var phDigits=ph.replace(/\D/g,'');
    if(phDigits.length!==10){if(ae){ae.style.display='';ae.textContent='Please enter a valid 10-digit Indian mobile number.';}return;}
    // Builder: company name required
    if(role==='builder'){
      var ag=(document.getElementById('rAn').value||'').trim();
      if(!ag){if(ae){ae.style.display='';ae.textContent='Company / builder name is required.';}return;}
    }
    _showRegStep(3);
    // Render CAPTCHA on step 3 (lazy — only when user reaches it)
    if(typeof renderTurnstile==='function')renderTurnstile('turnstileWrap',function(tk){_turnstileToken=tk;});
  }
}

function regBack(){
  if(_regStep===2)_showRegStep(1);
  else if(_regStep===3)_showRegStep(2);
}

// Resend the email-verification link for an unconfirmed account
async function resendVerification(email){
  if(!email)return;
  try{
    var {error}=await sb.auth.resend({type:'signup',email:email});
    if(error)throw error;
    toast('Verification email resent. Please check your inbox and spam folder.');
  }catch(e){
    toast('Could not resend: '+(e.message||'unknown error'),'e');
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
    // If the user landed on the homepage from a deep link (e.g. clicked
    // Contact on listing.html when logged out and got bounced here to log in),
    // the URL has ?next=/listing?id=42. Send them back there after sign-in.
    // Same-origin only — never honor an absolute or external URL.
    var nextParam=new URLSearchParams(window.location.search).get('next');
    if(nextParam&&/^\/[\w\-\/?=&%.]*$/.test(nextParam)){
      window.location.href=nextParam;
      return;
    }
    // Role-based default destination after login. Users go to /dashboard,
    // owners/brokers/builders to /lister (real pages), admins to the SPA's
    // hash route since admin.html doesn't exist yet.
    if(cu.role==='admin'){go('admin');toast('Welcome, Admin &#9881;');}
    else if(cu.role==='user'){toast('Welcome back, '+esc(cu.name)+'! ');window.location.href='/dashboard';}
    else{toast('Welcome back, '+esc(cu.name)+'! ');window.location.href='/lister';}
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
  var phRaw=document.getElementById('rPh').value.trim();
  var pw=document.getElementById('rPw').value;
  var rf=document.getElementById('rFrm');
  var role=rf?rf.dataset.role||'user':'user';
  var ag=document.getElementById('rAn').value.trim();
  var lc=document.getElementById('rLn').value.trim();
  var website=(document.getElementById('rWu')||{}).value||'';
  website=website.trim();
  var ae=document.getElementById('aErr');
  if(ae)ae.style.display='none';
  // Phone: strip non-digits, must be exactly 10
  var phDigits=phRaw.replace(/\D/g,'');
  var ph='+91'+phDigits;
  if(!nm||!em||phDigits.length!==10||!pw){
    if(ae){ae.style.display='';ae.textContent=phDigits.length!==10?'Please enter a valid 10-digit Indian mobile number.':'Please fill in all required fields.';}
    return;
  }
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
  if(pw.length<8){if(ae){ae.style.display='';ae.textContent='Password must be at least 8 characters.';}return;}
  // Supabase Auth sign-up (duplicate check is handled server-side)
  var btn=document.querySelector('#rFrm button.btn-bl')||null;
  var origBtnText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Creating account…';}

  var doSignup=async function(){
    try{
      var {data:authData,error:authErr}=await sb.auth.signUp({email:em,password:pw,options:{data:{name:nm,phone:ph,role:role,agency:ag,license_no:lc,website:website},captchaToken:_turnstileToken}});
      if(authErr)throw authErr;
      if(!authData.user)throw new Error('Sign-up failed.');
      // ── Detect "user already exists" silent failure ──
      // When email confirmation is on AND the email is already registered (or soft-deleted),
      // Supabase returns a user object but with `identities: []`. No verification email is sent.
      // We need to surface this clearly so the user knows what to do.
      if(authData.user&&Array.isArray(authData.user.identities)&&authData.user.identities.length===0){
        if(btn){btn.disabled=false;btn.textContent=origBtnText;}
        if(ae){
          ae.style.display='';
          ae.innerHTML='<strong style="display:block;margin-bottom:6px;color:var(--red);"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-flag"/></svg> Email already registered</strong>'
            +'<div style="font-size:13px;line-height:1.5;color:var(--ink);">An account with <strong>'+esc(em)+'</strong> already exists. You have three options:</div>'
            +'<ul style="margin:8px 0 8px 18px;font-size:12px;line-height:1.7;color:var(--ink);padding-left:0;">'
            +'<li><button type="button" onclick="document.getElementById(\'lEm\').value=\''+escAttr(em)+'\';showAuthTab(\'login\');" style="background:none;border:none;color:var(--t);text-decoration:underline;cursor:pointer;font-size:inherit;font-family:inherit;padding:0;font-weight:600;">Sign in</button> — if you remember your password</li>'
            +'<li><button type="button" onclick="showAuthTab(\'reset\');document.getElementById(\'rsEm\').value=\''+escAttr(em)+'\';" style="background:none;border:none;color:var(--t);text-decoration:underline;cursor:pointer;font-size:inherit;font-family:inherit;padding:0;font-weight:600;">Reset password</button> — if you forgot it</li>'
            +'<li><button type="button" onclick="resendVerification(\''+escAttr(em)+'\')" style="background:none;border:none;color:var(--t);text-decoration:underline;cursor:pointer;font-size:inherit;font-family:inherit;padding:0;font-weight:600;">Resend verification email</button> — if you signed up but never confirmed</li>'
            +'</ul>'
            +'<div style="font-size:11px;color:var(--mu);line-height:1.5;margin-top:6px;border-top:1px solid var(--sa);padding-top:8px;">If your account was deleted previously and you still get this message, please email <a href="mailto:support@ekmakan.com" style="color:var(--t);">support@ekmakan.com</a> from this address — we will fully clear it within a few hours.</div>';
        }
        // Reset Turnstile (token single-use)
        _turnstileToken=null;
        if(typeof renderTurnstile==='function')renderTurnstile('turnstileWrap',function(tk){_turnstileToken=tk;});
        return;
      }
      // If email confirmation is enabled, there's no active session yet.
      // The database trigger will create the profile row using metadata.
      // Show the user a "check your inbox" message.
      if(!authData.session){
        if(btn){btn.disabled=false;btn.textContent=origBtnText;}
        closeM('authM');
        toast('Account created! Please check your email (and spam folder) to verify your address, then sign in. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg>');
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
      // Same ?next= redirect logic as login — return user to where they came from
      var nextParamS=new URLSearchParams(window.location.search).get('next');
      if(nextParamS&&/^\/[\w\-\/?=&%.]*$/.test(nextParamS)){
        window.location.href=nextParamS;
        return;
      }
      toast('Welcome to Ek Makān, '+esc(nm)+'! <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--g);"><use href="#i-sparkle"/></svg>');
      window.location.href=role==='user'?'/dashboard':'/lister';
    }catch(err){
      if(btn){btn.disabled=false;btn.textContent=origBtnText;}
      var msg=err.message||'Sign-up failed.';
      var lc_msg=msg.toLowerCase();
      if(lc_msg.includes('already registered')||lc_msg.includes('already been registered')||lc_msg.includes('user already')){
        msg='An account with this email already exists. Try signing in or use password reset.';
      } else if(lc_msg.includes('captcha')){
        msg='Verification failed. Please try again.';
      } else if(lc_msg.includes('rate limit')||lc_msg.includes('too many')){
        msg='Too many sign-up attempts. Please wait a few minutes before trying again.';
      } else if(lc_msg.includes('password')&&lc_msg.includes('weak')){
        msg='Password is too weak. Please use at least 8 characters with a mix of letters and numbers.';
      } else if(lc_msg.includes('email')&&lc_msg.includes('invalid')){
        msg='Please enter a valid email address.';
      }
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


async function doLogout(){
  await sb.auth.signOut();
  resetSessionState();
  cu=null;
  upNav();
  toast('Logged out.');
  // Navigate to the homepage. window.location is the right call here since
  // we may be on dashboard.html, lister.html, listing.html, or the SPA — the
  // SPA would normally use go('home') but that hash router doesn't exist on
  // extracted pages.
  var pageType=document.body&&document.body.getAttribute('data-page');
  if(pageType&&pageType!=='spa'){
    window.location.href='/';
  } else {
    go('home');
  }
}

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
  // Listing form and inquiry state — clear ALL of it
  upImgs=[];selTags=[];selAmens=[];actL=null;
  if(typeof _selFurn!=='undefined')_selFurn=[];
  if(typeof _selWater!=='undefined')_selWater=[];
  if(typeof _landmarks!=='undefined')_landmarks=[];
  if(typeof _unitTypes!=='undefined')_unitTypes=[];
  if(typeof _uploadingVideo!=='undefined')_uploadingVideo=null;
  if(typeof _existingVideoUrl!=='undefined')_existingVideoUrl='';
  if(typeof _formLat!=='undefined')_formLat=null;
  if(typeof _formLng!=='undefined')_formLng=null;
  if(typeof _formMap!=='undefined'&&_formMap){try{_formMap.remove();}catch(e){}_formMap=null;}
  if(typeof _formMarker!=='undefined')_formMarker=null;
  // Lister filter + search
  _listerFilter='all';_listerSearch='';
  if(typeof _listerTab!=='undefined')_listerTab='overview';
  if(typeof _leadFilters!=='undefined')_leadFilters={from:'',to:'',propId:'',type:'',budgetMin:0,budgetMax:0};
  // Admin tab
  curAT='ov';
  // Image carousel positions
  _cIdx={};
  // Pagination
  _browseShown=0;_browseFiltered=[];
  _adminPage={al:0,pd:0,rj:0,ls:0,bd:0,tn:0,ld:0};
  _editingListingId=null;
  // Wizard state
  if(typeof _wizStep!=='undefined')_wizStep=1;
  // Detail view tracking
  if(typeof _currentDetailId!=='undefined')_currentDetailId=null;
  // Reset Turnstile CAPTCHA
  _turnstileToken=null;
  // Favorites: clear in-memory (loaded from Supabase on next login)
  favs=[];
  // Notifications: clear in-memory
  if(typeof _notifs!=='undefined')_notifs=[];
  if(typeof _notifOpen!=='undefined')_notifOpen=false;
  // CRITICAL: invalidate ALL data caches so the next user doesn't see the previous user's cached data
  if(typeof _clr==='function')_clr();
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
    // Listing form (addM) — comprehensive list including ALL recent additions
    'lTl','lBn','lCy','lLo','lAddr','lPin','lAr','lArC','lArS','lAge',
    'lRt','lDp','lPr','lPrMin','lPrMax','lRe','lOw','lCt','lDs',
    'lFl','lFlNo','lFlTot','lFc','lFn','lTp','lBd','lBt','lAv','lComp',
    'lTxn','lOwn','lBackup','lLmCat','lLmName','lLmDist',
    'lLocateStatus',
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
    'ldf','ldt','ldft','lSrch'
  ];
  idsToClear.forEach(function(id){
    var e=document.getElementById(id);
    if(!e)return;
    if(e.tagName==='SELECT'){e.selectedIndex=0;}
    else{e.value='';}
  });
  // Clear listing image preview, landmarks list, water chips, furnishing chips, video preview
  var iPv=document.getElementById('iPv');if(iPv)iPv.innerHTML='';
  var vidPv=document.getElementById('vidPv');if(vidPv)vidPv.innerHTML='';
  var lmList=document.getElementById('lLandmarksList');if(lmList)lmList.innerHTML='';
  var fnDet=document.getElementById('lFnDetails');if(fnDet)fnDet.innerHTML='';
  var fnDetW=document.getElementById('lFnDetailsW');if(fnDetW)fnDetW.style.display='none';
  document.querySelectorAll('#lWaterChips label[data-w]').forEach(function(l){l.classList.remove('on');});
  // Clear the locate map
  var locMapWrap=document.getElementById('lLocateMapWrap');if(locMapWrap)locMapWrap.style.display='none';
  // Reset wizard to step 1
  if(typeof wizGoto==='function')wizGoto(1);
  // Reset the max-rent stepper to its "No limit" default
  var hrr=document.getElementById('hrr');
  var hrrLbl=document.getElementById('hrrLbl');
  if(hrr)hrr.value='0';
  if(hrrLbl)hrrLbl.textContent='No limit';
  // Close any autocomplete dropdowns that might be open
  document.querySelectorAll('.ac-list').forEach(function(l){l.className='ac-list';l.innerHTML='';});
  // Close any open modals
  document.querySelectorAll('.mo.open').forEach(function(m){m.classList.remove('open');});
  // Clear ALL session storage (any in-flight signup state, OAuth state, etc.)
  // localStorage is left intact — that's where Supabase keeps the auth session,
  // but signOut() already clears the auth row. Anything else we put there would
  // need explicit handling.
  try{sessionStorage.clear();}catch(e){}
  // Rebuild filter chips UI to reflect cleared state
  if(typeof bldF==='function')bldF();
  // Refresh the grid if we're on a browse view — either the SPA's #pg-browse
  // when active, OR the standalone browse.html (data-page="browse").
  var activeBrowse=document.getElementById('pg-browse');
  var isBrowsePage=document.body&&document.body.getAttribute('data-page')==='browse';
  if(((activeBrowse&&activeBrowse.classList.contains('active'))||isBrowsePage)&&typeof renderBrowse==='function'){
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
  if(v===-1)return 'Price on Request';
  if(v>=10000000)return '\u20B9'+(v/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';
  if(v>=100000)return '\u20B9'+(v/100000).toFixed(2).replace(/\.?0+$/,'')+' L';
  if(v>=1000)return '\u20B9'+(v/1000).toFixed(1).replace(/\.0$/,'')+' K';
  return '\u20B9'+v.toLocaleString('en-IN');
}
function fmtPriceHTML(v){
  if(v===-1)return 'Price on Request';
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
  // Build a URL with all the hero search filters and navigate to /browse.
  // Using a real URL means the search result is bookmarkable, shareable, and
  // crawlable — and it works the same whether the user is on the SPA or any
  // other page that imports app.js.
  var params=new URLSearchParams();
  params.set('lf',hMode);
  if(hMode==='rent'){
    var c=document.getElementById('hrc').value;
    var t=document.getElementById('hrt').value;
    var r=document.getElementById('hrr').value;
    var b=document.getElementById('hrb').value;
    if(c)params.set('city',c);
    if(t)params.append('type',t);
    if(r&&Number(r)>0)params.set('rmax',r);
    if(b)params.append('beds',b);
  } else {
    var c2=document.getElementById('hbc').value;
    var tBoxes=document.querySelectorAll('#hbtMenu input[type="checkbox"]:checked');
    var bgMin=Number(document.getElementById('hbbMin').value)||0;
    var bgMaxRaw=Number(document.getElementById('hbbMax').value)||0;
    var b2=document.getElementById('hbd').value;
    if(c2)params.set('city',c2);
    tBoxes.forEach(function(cb){params.append('type',cb.value);});
    if(bgMin>0)params.set('bmin',String(bgMin));
    if(bgMaxRaw)params.set('bmax',String(bgMaxRaw));
    if(b2)params.append('beds',b2);
  }
  window.location.href='/browse?'+params.toString();
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
      var clickable=c.active===true;
      var clickAttr=clickable?'onclick="goCityBrowse(\''+c.name+'\')"':'';
      var classes='city-cd'+(clickable?'':' city-cd-soon');
      var badge=clickable
        ?''
        :'<div class="city-soon-badge">Coming Soon</div>';
      return '<div class="'+classes+'" '+clickAttr+'>'
        +'<img loading="lazy" decoding="async" src="'+c.img+'" alt="'+c.name+'"/>'
        +badge
        +'<div class="city-ov"><span>'+c.name+'</span></div>'
        +'</div>';
    }).join('');
  }
  // Show loading in featured sections
  var hfr=document.getElementById('hFR');
  var hfb=document.getElementById('hFB');
  if(hfr)hfr.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading rentals…</span></div>';
  if(hfb)hfb.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading properties…</span></div>';
  var ls=(await gL()).filter(function(l){return l.status==='approved';});
  // Recently posted within last 30 days, newest first
  var thirtyDaysAgo=Date.now()-(30*24*60*60*1000);
  function postedTs(l){
    if(!l.postedAt)return 0;
    var t=new Date(l.postedAt).getTime();
    return isNaN(t)?0:t;
  }
  function recentSort(a,b){return postedTs(b)-postedTs(a);}
  var recentRentals=ls.filter(function(l){return l.lf==='rent'&&postedTs(l)>thirtyDaysAgo;}).sort(recentSort);
  var recentSales=ls.filter(function(l){return l.lf==='buy'&&postedTs(l)>thirtyDaysAgo;}).sort(recentSort);
  // Fallback: if nothing in the last 30 days, fall back to overall most-recent so
  // the strip is never empty when listings exist.
  if(!recentRentals.length)recentRentals=ls.filter(function(l){return l.lf==='rent';}).sort(recentSort);
  if(!recentSales.length)recentSales=ls.filter(function(l){return l.lf==='buy';}).sort(recentSort);
  // Cap at 12 cards per strip — plenty to scroll through, keeps DOM reasonable
  recentRentals=recentRentals.slice(0,12);
  recentSales=recentSales.slice(0,12);
  function buildCarousel(items, gridId){
    var cards=items.map(pCardCompact).join('');
    return '<div class="hcr-wrap">'
      +'<button class="hcr-arr l" onclick="hcrScroll(\''+gridId+'\',-1)" aria-label="Scroll left"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-left"/></svg></button>'
      +'<div class="hcr-track" id="'+gridId+'-track">'+cards+'</div>'
      +'<button class="hcr-arr r" onclick="hcrScroll(\''+gridId+'\',1)" aria-label="Scroll right"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-right"/></svg></button>'
      +'</div>';
  }
  if(hfr)hfr.innerHTML=recentRentals.length?buildCarousel(recentRentals,'hFR')
    :'<div class="mk-empty"><div class="mk-empty-icon"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg></div><div class="mk-empty-title">No rental listings yet</div><div class="mk-empty-sub">Be the first to <span onclick="postPropertyClick()" style="color:var(--t);cursor:pointer;font-weight:700;">post a rental listing</span>!</div></div>';
  if(hfb)hfb.innerHTML=recentSales.length?buildCarousel(recentSales,'hFB')
    :'<div class="mk-empty"><div class="mk-empty-icon"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg></div><div class="mk-empty-title">No properties for sale yet</div><div class="mk-empty-sub">Be the first to <span onclick="postPropertyClick()" style="color:var(--t);cursor:pointer;font-weight:700;">list a property for sale</span>!</div></div>';
}

// Scroll a homepage carousel by approximately one card-width in either direction.
function hcrScroll(gridId,dir){
  var track=document.getElementById(gridId+'-track');
  if(!track)return;
  // One full visible width per click — feels natural & avoids partial-card states
  var dx=track.clientWidth*0.85*dir;
  if(track.scrollBy){
    track.scrollBy({left:dx,behavior:'smooth'});
  } else {
    track.scrollLeft+=dx;
  }
}
function goCityBrowse(name){
  // Navigate to the real /browse page with city pre-filtered. Using a real
  // URL means the resulting page is crawlable (e.g. /browse?lf=rent&city=Mumbai
  // becomes a category landing page Google can index for "Mumbai rentals").
  window.location.href='/browse?lf=rent&city='+encodeURIComponent(name);
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
// Compact card for homepage strips ("Rentals ready for you" / "Properties for purchase").
// Vertical layout: image on top with price overlay, brief details below.
// Inspired by 99acres' "Recommended Properties" thumbnail strip.
function pCardCompact(l){
  var ir=l.lf==='rent';
  var isP=l.lf==='project'||l.isProject;
  var fv=favs.indexOf(l.id)>=0;
  var hasImgs=l.images&&l.images.length>0;
  var disp=hasImgs?(cu?l.images:l.images.slice(0,2)):[];
  // Price label
  var priceLbl;
  if(isP){
    priceLbl=l.priceMin?'Starts '+fmtPriceHTML(l.priceMin):fmtPriceHTML(l.price||0);
  } else if(ir){
    priceLbl=fmtRentHTML(l.rent)+' <span class="cc-price-unit">/mo</span>';
  } else {
    priceLbl=fmtPriceHTML(l.price);
  }
  var depLbl='';
  if(ir&&l.dep)depLbl='<div class="cc-dep">Deposit &#8377;'+l.dep.toLocaleString('en-IN')+'</div>';
  // Verified pill (top-left)
  var verifiedPill=l.verified?'<div class="cc-verified"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-shield-check"/></svg> Verified</div>':'';
  // Heart (top-right)
  var heartHTML='<button class="cc-heart" onclick="event.stopPropagation();event.preventDefault();togFav('+l.id+',this)" aria-label="Save to favorites" aria-pressed="'+(fv?'true':'false')+'"><svg class="icn icn-sm" aria-hidden="true"><use href="#'+(fv?'i-heart-fill':'i-heart')+'"/></svg></button>';
  // Image
  var imgInner=hasImgs
    ?'<img loading="lazy" decoding="async" src="'+disp[0]+'" alt="'+escAttr(l.title)+'"/>'
    :'<div class="cc-no-img"><svg class="icn icn-xl" aria-hidden="true"><use href="#i-home"/></svg></div>';
  // Posted-by line: "Posted by Owner · 2 days ago"
  var roleLabel=l.urole==='owner'?'Owner':l.urole==='broker'?'Broker':l.urole==='builder'?'Builder':'Lister';
  var posted=l.postedAt?_relativeTime(l.postedAt):'';
  var subtitle=(l.beds||'?')+' BHK '+(l.type||'Apartment')+', '+(l.baths||1)+' Bath'+(l.baths>1?'s':'');
  var locLine=(l.building?'In <strong>'+esc(l.building)+'</strong>, ':'In <strong>')
    +esc((l.loc?l.loc:l.city||'—'))+(l.building?'':'</strong>')
    +(l.building&&l.city&&l.loc?', '+esc(l.city):(l.building&&l.city?', '+esc(l.city):''));
  return '<a class="cc-link" href="'+_listingUrl(l.id)+'" onclick="return _cardClick(event,'+l.id+')" target="_blank" rel="noopener">'
    +'<div class="cc">'
      +'<div class="cc-img">'
        +verifiedPill
        +heartHTML
        +imgInner
        +'<div class="cc-price-overlay"><span class="cc-price">&#8377; '+priceLbl.replace('&#8377;','').trim()+'</span>'+depLbl+'</div>'
      +'</div>'
      +'<div class="cc-body">'
        +'<div class="cc-title">'+esc(subtitle)+'</div>'
        +'<div class="cc-loc">'+locLine+'</div>'
        +'<div class="cc-foot">'
          +'<span class="cc-poster">Posted by '+esc(roleLabel)+'</span>'
          +(posted?'<span class="cc-posted">'+esc(posted)+'</span>':'')
        +'</div>'
      +'</div>'
    +'</div></a>';
}

function pCard(l){
  var ir=l.lf==='rent';
  var isP=l.lf==='project'||l.isProject;
  var fv=favs.indexOf(l.id)>=0;
  var hasImgs=l.images&&l.images.length>0;
  var disp=hasImgs?(cu?l.images:l.images.slice(0,2)):[];
  var showLock=hasImgs&&l.images.length>2&&!cu;

  // ── COLUMN 1: Image ──
  var imgHTML='<div class="pc-no-img"><svg class="icn icn-xl" aria-hidden="true" style="color:var(--mu);"><use href="#i-home"/></svg></div>';
  if(hasImgs){
    imgHTML='<img id="ci'+l.id+'" loading="lazy" decoding="async" src="'+disp[0]+'" alt="'+escAttr(l.title)+'"/>';
    if(disp.length>1){
      imgHTML+='<button class="arr l" onclick="event.stopPropagation();cSlide('+l.id+',-1)" aria-label="Previous photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-left"/></svg></button>';
      imgHTML+='<button class="arr r" onclick="event.stopPropagation();cSlide('+l.id+',1)" aria-label="Next photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-right"/></svg></button>';
    }
    if(showLock){
      imgHTML+='<div class="pc-blur">'
        +'<div style="font-size:22px;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-lock"/></svg></div>'
        +'<p>Sign up to view all '+l.images.length+' photos</p>'
        +'<button class="btn btn-sm" onclick="event.stopPropagation();openM(\'authM\')">Sign Up Free</button>'
        +'</div>';
    }
    var visCount=cu?l.images.length:Math.min(2,l.images.length);
    imgHTML+='<div class="pc-photo-cnt"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg> '+visCount+'/'+l.images.length+'</div>';
  }
  // FEATURED chip — top-left of image (matches 99acres "FEATURED" treatment).
  // Verified Inclusive trumps the regular type pill on the image — it carries trust.
  var topLeftBadge='';
  if(l.verified){
    topLeftBadge='<div class="pc-img-badge pc-vi"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-shield-check"/></svg> Verified</div>';
  } else if(isP&&l.projectStatus==='New Launch'){
    topLeftBadge='<div class="pc-img-badge pc-launch">New Launch</div>';
  } else {
    topLeftBadge='<div class="pc-img-badge pc-type pc-type-'+(isP?'proj':ir?'rent':'buy')+'">'+(isP?'New Project':ir?'For Rent':'For Sale')+'</div>';
  }
  // Heart top-right
  var heartHTML='<button class="pc-heart" onclick="event.stopPropagation();event.preventDefault();togFav('+l.id+',this)" aria-label="Save to favorites" aria-pressed="'+(fv?'true':'false')+'"><svg class="icn icn-sm" aria-hidden="true"><use href="#'+(fv?'i-heart-fill':'i-heart')+'"/></svg></button>';

  // ── COLUMN 2: Right pane (99acres-style) ──
  // Title is the building/society name when available; subtitle has BHK + locality.
  var societyName=l.building||l.title;
  var subtitle=l.beds+' BHK '+(l.type||'Flat')+' for '+(ir?'rent':isP?'sale':'sale')+(l.loc||l.city?' in '+esc((l.loc?l.loc+', ':'')+l.city):'');

  // Big horizontal metric strip — Price | Area | BHK · Baths
  // Each metric: value bold, label muted small. Vertical bar separators.
  var priceMain;
  var priceSub;
  if(isP){
    if(l.priceMax&&l.priceMax>l.priceMin){
      priceMain=fmtPriceHTML(l.priceMin)+' &ndash; '+fmtPriceHTML(l.priceMax);
    } else {
      priceMain='Starts '+fmtPriceHTML(l.priceMin||l.price);
    }
    priceSub=l.completion?'Possession '+(function(){var d=new Date(l.completion);return isNaN(d)?'':d.toLocaleDateString('en-IN',{month:'short',year:'numeric'});})():'New Project';
  } else if(ir){
    priceMain=fmtRentHTML(l.rent)+'<span class="pc-mt-unit">/month</span>';
    priceSub=l.dep?'+ Deposit &#8377;'+l.dep.toLocaleString('en-IN'):'';
  } else {
    priceMain=fmtPriceHTML(l.price);
    if(l.price>0&&l.price!==-1){
      var per=l.carpetArea>0?Math.round(l.price/l.carpetArea):(l.area>0?Math.round(l.price/l.area):0);
      priceSub=per>0?fmtPriceHTML(per)+'/sqft':'';
    } else priceSub='';
  }
  var areaMain='';
  var areaSub='';
  if(l.carpetArea>0){
    areaMain=l.carpetArea.toLocaleString('en-IN')+' <span class="pc-mt-unit">sqft</span>';
    areaSub='Carpet Area';
  } else if(l.area>0){
    areaMain=l.area.toLocaleString('en-IN')+' <span class="pc-mt-unit">sqft</span>';
    areaSub='Built-up Area';
  } else if(l.builtArea>0){
    areaMain=l.builtArea.toLocaleString('en-IN')+' <span class="pc-mt-unit">sqft</span>';
    areaSub='Built-up Area';
  }
  var bhkMain=l.beds+' BHK';
  var bhkSub=l.baths?l.baths+' Bath'+(l.baths>1?'s':''):'';
  var metricStrip='<div class="pc-metric-strip">'
    +'<div class="pc-metric pc-metric-price"><div class="pc-mt-val">'+priceMain+'</div>'+(priceSub?'<div class="pc-mt-lbl">'+priceSub+'</div>':'')+'</div>'
    +(areaMain?'<div class="pc-metric"><div class="pc-mt-val">'+areaMain+'</div>'+(areaSub?'<div class="pc-mt-lbl">'+areaSub+'</div>':'')+'</div>':'')
    +'<div class="pc-metric"><div class="pc-mt-val">'+bhkMain+'</div>'+(bhkSub?'<div class="pc-mt-lbl">'+bhkSub+'</div>':'')+'</div>'
    +'</div>';

  // Nearby chips (if landmarks exist) — matches 99acres "Nearby:" pattern
  var nearbyHTML='';
  if(l.landmarks&&l.landmarks.length){
    var lm=l.landmarks.slice(0,2).map(function(landmark){
      var name=typeof landmark==='string'?landmark:(landmark.name||'');
      return name?'<span class="pc-nearby-chip">'+esc(name)+'</span>':'';
    }).filter(Boolean).join('');
    var moreCount=Math.max(0,l.landmarks.length-2);
    nearbyHTML='<div class="pc-nearby"><span class="pc-nearby-lbl">Nearby:</span>'+lm+(moreCount>0?'<span class="pc-nearby-chip pc-nearby-more">+'+moreCount+'</span>':'')+'</div>';
  }

  // Description preview (single-line clamped)
  var descPreview='';
  if(l.desc){
    var d=l.desc.replace(/\s+/g,' ').trim();
    if(d.length>150)d=d.slice(0,150)+'…';
    descPreview='<div class="pc-desc">'+esc(d)+'</div>';
  }

  // Footer row: poster info + CTAs
  var roleLabel=l.urole==='owner'?'Owner':l.urole==='broker'?'Broker':l.urole==='builder'?'Builder':'Lister';
  var roleClass=l.urole==='owner'?'pc-role-owner':l.urole==='broker'?'pc-role-broker':l.urole==='builder'?'pc-role-builder':'pc-role-other';
  var posted=l.postedAt?_relativeTime(l.postedAt):'';
  var posterName=l.agency||l.owner||'';
  var posterInitial=(posterName||'?').charAt(0).toUpperCase();
  var footerHTML='<div class="pc-footer-row">'
    +'<div class="pc-footer-poster">'
      +(posted?'<span class="pc-posted">'+esc(posted)+'</span>':'')
      +'<span class="pc-role-tag '+roleClass+'">'+roleLabel+'</span>'
      +(posterName?'<span class="pc-poster-name"><span class="pc-poster-avatar">'+esc(posterInitial)+'</span>'+esc(posterName.length>22?posterName.slice(0,22)+'…':posterName)+'</span>':'')
    +'</div>'
    +'<div class="pc-footer-cta">'
      +'<button class="pc-btn-fill" onclick="event.stopPropagation();event.preventDefault();oCnt('+l.id+')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg> '+(cu?'Contact':'Sign in to Contact')+'</button>'
    +'</div>'
  +'</div>';

  return '<a class="pc-link" href="'+_listingUrl(l.id)+'" onclick="return _cardClick(event,'+l.id+')" target="_blank" rel="noopener">'
    +'<div class="pc">'
      +'<div class="pc-col-img">'
        +topLeftBadge
        +heartHTML
        +imgHTML
      +'</div>'
      +'<div class="pc-col-mid">'
        +'<div class="pc-head">'
          +'<div class="pc-society">'+esc(societyName)+'</div>'
          +'<button class="pc-report-icon" onclick="event.stopPropagation();event.preventDefault();openReport('+l.id+')" aria-label="Report listing" title="Report"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-flag"/></svg></button>'
        +'</div>'
        +'<div class="pc-subtitle">'+subtitle+'</div>'
        +metricStrip
        +nearbyHTML
        +descPreview
        +footerHTML
      +'</div>'
    +'</div></a>';
}

// Format a date as a relative phrase: "1d ago", "2w ago", "3m ago".
// Used by pCard footer to mimic 99acres "1w ago" indicator.
function _relativeTime(dateStr){
  if(!dateStr)return '';
  var d=new Date(dateStr);
  if(isNaN(d))return '';
  var diff=Date.now()-d.getTime();
  var days=Math.floor(diff/(1000*60*60*24));
  if(days<1)return 'today';
  if(days<7)return days+'d ago';
  if(days<30)return Math.floor(days/7)+'w ago';
  if(days<365)return Math.floor(days/30)+'mo ago';
  return Math.floor(days/365)+'y ago';
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

// ── AUTO-ROTATE CAROUSELS ──
// Every 2 seconds, advance each card's image to the next photo (wrapping around).
// Pauses when:
//   • user hovers the card (so they can read details)
//   • the browser tab is hidden (saves CPU/battery)
//   • the listings page isn't visible
// Singleton — runs once for the lifetime of the page.
var _autoCarouselTimer=null;
var _carouselPausedFor={}; // map of listing id → true while hovered
function _startAutoCarousels(){
  if(_autoCarouselTimer)return;
  _autoCarouselTimer=setInterval(async function(){
    if(document.hidden)return;
    // Only rotate when there's at least one carousel image visible on the page
    var imgs=document.querySelectorAll('img[id^="ci"]');
    if(!imgs.length)return;
    var ls=null; // lazy-load listings only if we have rotations to do
    for(var i=0;i<imgs.length;i++){
      var imgEl=imgs[i];
      var idStr=imgEl.id.replace(/^ci/,'');
      var listingId=Number(idStr);
      if(!listingId)continue;
      if(_carouselPausedFor[listingId])continue;
      if(!ls)ls=await gL();
      var l=ls.find(function(x){return x.id===listingId;});
      if(!l||!l.images||l.images.length<=1)continue;
      var visiblePhotos=cu?l.images.length:Math.min(2,l.images.length);
      if(visiblePhotos<=1)continue;
      _cIdx[listingId]=((_cIdx[listingId]||0)+1)%visiblePhotos;
      imgEl.style.opacity='0.6';
      imgEl.src=(cu?l.images:l.images.slice(0,2))[_cIdx[listingId]];
      // Use closure to bind the right element
      (function(el){setTimeout(function(){el.style.opacity='1';},150);})(imgEl);
    }
  },2000);
  // Pause individual cards on hover. Delegate from document so it works for
  // dynamically-rendered cards.
  document.addEventListener('mouseenter',function(e){
    var card=e.target.closest&&e.target.closest('.pc, .cc');
    if(!card)return;
    var imgEl=card.querySelector('img[id^="ci"]');
    if(!imgEl)return;
    var lid=Number(imgEl.id.replace(/^ci/,''));
    if(lid)_carouselPausedFor[lid]=true;
  },true);
  document.addEventListener('mouseleave',function(e){
    var card=e.target.closest&&e.target.closest('.pc, .cc');
    if(!card)return;
    var imgEl=card.querySelector('img[id^="ci"]');
    if(!imgEl)return;
    var lid=Number(imgEl.id.replace(/^ci/,''));
    if(lid)_carouselPausedFor[lid]=false;
  },true);
}
// Kick it off on first load
if(typeof window!=='undefined'){
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_startAutoCarousels);
  } else {
    _startAutoCarousels();
  }
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
  _projectsOnly=m==='project';
  var bmr=document.getElementById('bmr'),bmb=document.getElementById('bmb'),bmp=document.getElementById('bmp');
  var rf=document.getElementById('rFilts'),bf=document.getElementById('bFilts');
  if(bmr)bmr.className='bm-btn'+(m==='rent'?' ar':'');
  if(bmb)bmb.className='bm-btn'+(m==='buy'?' ab':'');
  if(bmp)bmp.className='bm-btn'+(m==='project'?' ap':'');
  // Show buy filters for project mode too (price ranges, possession, RERA all apply)
  if(rf)rf.style.display=m==='rent'?'':'none';
  if(bf)bf.style.display=(m==='buy'||m==='project')?'':'none';
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
  // Show loading spinner immediately on every render — gives clear feedback
  // when filters change, page navigation happens, or fresh data is fetched.
  // Without this, old cards stay visible until the new render completes,
  // which made users think filters weren't applying.
  var grid=document.getElementById('bGrid');
  var bc=document.getElementById('bCount');
  if(grid)grid.innerHTML='<div class="mk-spinner" style="grid-column:1/-1;"><span class="mk-spinner-text">Loading listings…</span></div>';
  if(bc)bc.textContent='Loading…';
  // Tiny delay yields the browser a paint frame so the spinner actually shows
  // before we synchronously rebuild the grid (which can hog the main thread).
  await new Promise(function(r){requestAnimationFrame(function(){r();});});
  var allApproved=(await gL()).filter(function(l){return l.status==='approved';});
  // Three modes:
  //  • project — show only builder/project listings
  //  • rent / buy — show non-project listings of that type
  var ls;
  if(bMode==='project'||_projectsOnly){
    // New Projects tab: strictly only listings flagged as projects
    // (lf='project' set when builder uses "New Project" wizard mode).
    // We also include any listing where isProject=true as a defensive fallback for
    // legacy data, but require either condition — buy/rent listings never qualify.
    ls=allApproved.filter(function(l){return l.lf==='project'||l.isProject===true;});
  } else {
    // Rent/Buy tabs explicitly exclude project listings to prevent crossover.
    ls=allApproved.filter(function(l){return l.lf===bMode&&l.lf!=='project'&&l.isProject!==true;});
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
    if(lo){ls=ls.filter(function(l){return _matchLocality(l.loc,lo);});hasAnyFilters=true;}
    if(mn){ls=ls.filter(function(l){return l.rent>=mn;});hasAnyFilters=true;}
    if(mx!==Infinity){ls=ls.filter(function(l){return l.rent<=mx;});hasAnyFilters=true;}
    if(av){ls=ls.filter(function(l){return l.avail===av;});hasAnyFilters=true;}
    if(fRT.length){ls=ls.filter(function(l){return fRT.indexOf(l.type)>=0;});hasAnyFilters=true;}
    if(fRB.length){ls=ls.filter(function(l){return fRB.indexOf(l.beds)>=0;});hasAnyFilters=true;}
    if(fRF.length){ls=ls.filter(function(l){return fRF.indexOf(l.furnish)>=0;});hasAnyFilters=true;}
    if(fRA.length){ls=ls.filter(function(l){return fRA.every(function(a){return l.amens&&l.amens.indexOf(a)>=0;});});hasAnyFilters=true;}
  } else {
    // Buy + Project mode share the same filter sidebar (city, locality, price range, area, type, BHK, etc.)
    // For projects, l.price is usually 0; use priceMin instead.
    var c2=gv('fBCity'),lo2=gv('fBLoc'),mn2=Number(gv('fBmn'))||0;
    var mx2raw=Number(gv('fBmx'))||0;
    var mx2=mx2raw===-1?Infinity:(mx2raw||Infinity);
    var amn=Number(gv('fAmn'))||0,amx=Number(gv('fAmx'))||Infinity;
    var priceOf=function(l){return l.lf==='project'||l.isProject?(l.priceMin||l.price||0):(l.price||0);};
    if(c2){ls=ls.filter(function(l){return l.city.toLowerCase().indexOf(c2.toLowerCase())>=0;});hasAnyFilters=true;}
    if(lo2){ls=ls.filter(function(l){return _matchLocality(l.loc,lo2);});hasAnyFilters=true;}
    if(mn2){ls=ls.filter(function(l){return priceOf(l)>=mn2;});hasAnyFilters=true;}
    if(mx2!==Infinity){ls=ls.filter(function(l){return priceOf(l)<=mx2;});hasAnyFilters=true;}
    if(amn){ls=ls.filter(function(l){return l.area>=amn;});hasAnyFilters=true;}
    if(amx!==Infinity){ls=ls.filter(function(l){return l.area<=amx;});hasAnyFilters=true;}
    if(fBT.length){ls=ls.filter(function(l){return fBT.indexOf(l.type)>=0;});hasAnyFilters=true;}
    if(fBB.length){ls=ls.filter(function(l){return fBB.indexOf(l.beds)>=0;});hasAnyFilters=true;}
    if(fBF.length){ls=ls.filter(function(l){return fBF.indexOf(l.furnish)>=0;});hasAnyFilters=true;}
    if(fBPo.length){ls=ls.filter(function(l){return fBPo.indexOf(l.poss)>=0;});hasAnyFilters=true;}
    if(fBST.length){ls=ls.filter(function(l){
      // Use transaction_type as the canonical field. Backward compat: legacy listings
      // with sale_type='New' (no transaction_type) → treat as "New Booking";
      // sale_type='Resale' → "Resale".
      var tx=l.txnType||'';
      if(!tx&&l.stype){
        if(l.stype==='New'||l.stype==='First Owner')tx='New Booking';
        else if(l.stype==='Resale')tx='Resale';
      }
      return fBST.indexOf(tx)>=0;
    });hasAnyFilters=true;}
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

// ══ PRECISE LOCATION (listing form) ══
// Builds the best possible address string from form fields and geocodes it.
// Lister can drag the pin to fine-tune the exact spot.
var _formMap=null;
var _formMarker=null;
var _formLat=null;
var _formLng=null;

function _buildGeocodeQuery(){
  var building=(document.getElementById('lBn')||{}).value||'';
  var street=(document.getElementById('lAddr')||{}).value||'';
  var locality=(document.getElementById('lLo')||{}).value||'';
  var city=(document.getElementById('lCy')||{}).value||'';
  var pin=(document.getElementById('lPin')||{}).value||'';
  var parts=[];
  if(building.trim())parts.push(building.trim());
  if(street.trim())parts.push(street.trim());
  if(locality.trim())parts.push(locality.trim());
  if(city.trim())parts.push(city.trim());
  if(pin.trim())parts.push(pin.trim());
  parts.push('India');
  return {full:parts.join(', '),hasPin:!!pin.trim(),hasBuilding:!!building.trim()};
}

async function _geocodeOnce(query){
  try{
    var r=await fetch('https://nominatim.openstreetmap.org/search?format=json&q='+encodeURIComponent(query)+'&limit=1&countrycodes=in&addressdetails=1',{headers:{'Accept':'application/json'}});
    var data=await r.json();
    if(data&&data.length){
      return {lat:parseFloat(data[0].lat),lng:parseFloat(data[0].lon),displayName:data[0].display_name||'',type:data[0].type||'',addressClass:data[0].class||''};
    }
  }catch(e){console.error('geocode fail',e);}
  return null;
}

async function confirmListingLocation(){
  var btn=document.getElementById('lLocateBtn');
  var status=document.getElementById('lLocateStatus');
  if(!btn||!status)return;
  var q=_buildGeocodeQuery();
  if(q.full.length<10){
    status.innerHTML='<span style="color:var(--red);">Enter at least the city before locating.</span>';
    return;
  }
  btn.disabled=true;
  var origTxt=btn.innerHTML;
  btn.innerHTML='<svg class="icn icn-sm" aria-hidden="true"><use href="#i-pin"/></svg> Locating…';
  status.innerHTML='<span style="color:var(--mu);">Searching for the precise address…</span>';
  // Try the most specific query first; fall back progressively
  var attempts=[];
  attempts.push(q.full);
  // Without building name (sometimes confuses geocoder)
  if(q.hasBuilding){
    var withoutBuilding=q.full.split(', ').slice(1).join(', ');
    attempts.push(withoutBuilding);
  }
  // Just locality + city + pin
  var locality=(document.getElementById('lLo')||{}).value||'';
  var city=(document.getElementById('lCy')||{}).value||'';
  var pin=(document.getElementById('lPin')||{}).value||'';
  if(locality&&city)attempts.push(locality+', '+city+(pin?', '+pin:'')+', India');
  // Just pincode (pincode-level fallback)
  if(pin)attempts.push(pin+', India');
  // Just city
  if(city)attempts.push(city+', India');
  var result=null;
  var matchedQuery='';
  for(var i=0;i<attempts.length;i++){
    result=await _geocodeOnce(attempts[i]);
    if(result){matchedQuery=attempts[i];break;}
  }
  btn.disabled=false;
  btn.innerHTML=origTxt;
  if(!result){
    status.innerHTML='<span style="color:var(--red);">Could not find that address. Please check the city/pincode and try again.</span>';
    return;
  }
  _formLat=result.lat;
  _formLng=result.lng;
  // Render the map with a draggable marker
  var wrap=document.getElementById('lLocateMapWrap');
  if(wrap)wrap.style.display='';
  setTimeout(function(){
    if(!window.L){
      status.innerHTML='<span style="color:var(--red);">Map library not loaded. Try again.</span>';
      return;
    }
    if(_formMap){try{_formMap.remove();}catch(e){}_formMap=null;}
    _formMap=L.map('lLocateMap',{scrollWheelZoom:false,zoomControl:true}).setView([_formLat,_formLng],17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(_formMap);
    _formMarker=L.marker([_formLat,_formLng],{draggable:true}).addTo(_formMap);
    _formMarker.on('dragend',function(e){
      var p=e.target.getLatLng();
      _formLat=p.lat;_formLng=p.lng;
      var st=document.getElementById('lLocateStatus');
      if(st)st.innerHTML='<span style="color:var(--gr);">Pin updated. Coordinates saved.</span>';
    });
    setTimeout(function(){_formMap.invalidateSize();},300);
  },120);
  // Friendly status
  var precision='locality-level';
  if(result.type==='house'||result.addressClass==='building')precision='building-level';
  else if(matchedQuery.indexOf(pin)>=0&&pin)precision='pincode-level';
  status.innerHTML='<span style="color:var(--gr);">Located ('+precision+'). Drag the pin if it\'s not exactly on your building.</span>'
    +'<div style="font-size:10.5px;color:var(--mu);margin-top:3px;line-height:1.45;">'+esc(result.displayName||matchedQuery)+'</div>';
}

function _resetFormMap(){
  _formLat=null;_formLng=null;
  if(_formMap){try{_formMap.remove();}catch(e){}_formMap=null;}
  _formMarker=null;
  var wrap=document.getElementById('lLocateMapWrap');if(wrap)wrap.style.display='none';
  var st=document.getElementById('lLocateStatus');if(st)st.innerHTML='';
}

function setMediaTab(which){
  document.querySelectorAll('.media-tab').forEach(function(t){
    t.classList.toggle('on',t.dataset.mtab===which);
  });
  document.querySelectorAll('.media-pane').forEach(function(p){
    var on=p.dataset.mpane===which;
    p.classList.toggle('on',on);
    // Pause any video in the pane being hidden
    if(!on){
      p.querySelectorAll('video').forEach(function(v){try{v.pause();}catch(e){}});
    }
  });
}

// ══ POST PROPERTY FLOW ══
// Decides what happens when user clicks "Post Property" in the nav, footer or join card.
// - Logged-in lister (owner/broker/builder) → opens addM directly
// - Logged-in renter/buyer (role='user') → prompts them to upgrade their role
// - Not signed in → role chooser modal (Owner / Broker / Builder)
function postPropertyClick(){
  if(!cu){
    openM('postChooseM');
    return;
  }
  if(cu.role==='owner'||cu.role==='broker'||cu.role==='builder'||cu.role==='admin'){
    openM('addM');
    return;
  }
  // Renter/buyer trying to post — show the chooser so they can pick the right role
  openM('postChooseM');
}

// Called from the role chooser cards. Routes to register flow with the role pre-selected.
function postPropertyAs(role){
  closeM('postChooseM');
  // Open auth modal in register mode with the chosen role
  openM('authM');
  setAT('reg');
  setRR(role);
  // Focus the first field for fast typing
  setTimeout(function(){
    var nm=document.getElementById('rNm');
    if(nm)nm.focus();
  },150);
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
  // Re-render browse to show updated heart state on cards (works on both SPA and browse.html)
  var isBrowse=document.querySelector('.page#pg-browse.active')||(document.body&&document.body.getAttribute('data-page')==='browse');
  if(isBrowse&&typeof renderBrowse==='function')await renderBrowse();
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
// Page-aware listing opener used by every "click a card to see details" call
// site (lister dashboard, user dashboard, browse cards, admin lists, etc.).
// Routes correctly per page:
//   • SPA (index.html)           → viewL(id) — opens the in-page detail modal
//   • listing.html (data-page=listing) → viewL(id) — renders inline into #vCnt
//   • dashboard.html / lister.html → window.location.href='/listing?id=N'
//     (those pages don't host the listing detail UI)
function openListing(id){
  var pageType=document.body&&document.body.getAttribute('data-page');
  // The SPA and listing.html both have a #vCnt container — viewL writes into it.
  // Other extracted pages don't, so navigate to the canonical listing URL.
  if(!pageType||pageType==='spa'||pageType==='listing'){
    return viewL(id);
  }
  window.location.href='/listing?id='+id;
}

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
      var {data,error}=await sb.from('listings').select('id,listing_for,title,building_name,city,locality,property_type,beds,baths,area_sqft,rent,deposit,price,sale_type,possession,rera_no,contact_phone,owner_name,agency_name,tags,amenities,verified,status,rejection_reason,images,description,posted_at,user_id,user_role,furnishing,floor_range,facing,availability,is_project,project_status,completion_date,price_range_min,price_range_max,unit_types,carpet_area,built_up_area,super_built_up_area,property_age,furnishing_details,transaction_type,ownership,water_source,power_backup,floor_no,total_floors,landmarks,video_url,pincode,street_address,latitude,longitude,total_acreage,total_towers,brochure_url,master_plan_url,unit_plans,gallery_categorized,payment_schemes,booking_amount,price_breakup_type').eq('id',id).eq('status','approved').single();
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
  // Unified Photos + Video gallery
  var hasImages=l.images&&l.images.length>0;
  var hasVideo=!!l.videoUrl;
  var canSeeFullMedia=cu||true; // public can see first 2 photos; videos are gated below
  var imgH='';
  if(!hasImages&&!hasVideo){
    imgH='<div style="height:160px;background:linear-gradient(135deg,var(--tl),var(--sa));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:60px;margin-bottom:14px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg></div>';
  } else {
    // Photo set (with sign-up gating for >2 photos)
    var disp=hasImages?(cu?l.images:l.images.slice(0,2)):[];
    window._vI=disp;window._vIdx=0;
    // Tab strip — only show if BOTH photos AND video exist
    var tabsH='';
    if(hasImages&&hasVideo){
      tabsH='<div class="media-tabs">'
        +'<button type="button" class="media-tab on" data-mtab="photos" onclick="setMediaTab(\'photos\')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg> Photos ('+l.images.length+')</button>'
        +'<button type="button" class="media-tab" data-mtab="video" onclick="setMediaTab(\'video\')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-eye"/></svg> Video</button>'
        +'</div>';
    }
    imgH=tabsH;
    // Photos pane
    if(hasImages){
      imgH+='<div class="media-pane on" data-mpane="photos">'
        +'<div class="dv-img" id="dvImgWrap" style="--dv-bg:url('+JSON.stringify(disp[0])+');">'
        +'<img src="'+disp[0]+'" id="vImg" alt="'+escAttr(l.title)+'"/>'
        +(disp.length>1?'<button class="arr l" onclick="_vS(-1)" aria-label="Previous photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-left"/></svg></button><button class="arr r" onclick="_vS(1)" aria-label="Next photo"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-chevron-right"/></svg></button>':'')
        +'</div>'
        +'<div class="dv-img-counter" id="vImgCounter">'+(disp.length>1?'1 / '+disp.length:'')+'</div>';
      if(!cu&&l.images.length>2){
        imgH+='<div class="lock-box"><div style="font-size:30px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-lock"/></svg></div>'
          +'<p>'+(l.images.length-2)+' more photo'+(l.images.length-2>1?'s':'')+(hasVideo?' and walk-through video':'')+' unlock after free sign-up.</p>'
          +'<button class="btn btn-sm" onclick="openM(\'authM\')">Sign Up Free — Instant</button></div>';
      }
      imgH+='</div>';
    }
    // Video pane (signed-in users only)
    if(hasVideo){
      var paneCls='media-pane'+(!hasImages?' on':''); // if no photos, video pane is default
      if(cu){
        imgH+='<div class="'+paneCls+'" data-mpane="video">'
          +'<video src="'+escAttr(l.videoUrl)+'" controls preload="metadata" playsinline style="width:100%;max-height:420px;background:#000;border-radius:12px;display:block;"></video>'
          +'</div>';
      } else if(!hasImages){
        // Only video (no photos) and not signed in — show lock
        imgH+='<div class="'+paneCls+'" data-mpane="video"><div class="lock-box"><div style="font-size:30px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg></div>'
          +'<p>Walk-through video unlocks after free sign-up.</p>'
          +'<button class="btn btn-sm" onclick="openM(\'authM\')">Sign Up Free</button></div></div>';
      }
      // Note: when there are images AND user is logged out, they see the photos lock-box
      // and don't get a separate video lock — the photo lock-box message mentions the video too
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
    unitsTableHTML='<div class="dv-sec"><div class="dv-sec-hd">Unit Configurations &amp; Inventory</div>'
      +'<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:13px;font-family:\'DM Sans\',sans-serif;border:1px solid var(--sa);border-radius:8px;overflow:hidden;">'
      +'<thead><tr style="background:var(--cr);text-align:left;"><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Configuration</th><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Carpet Area</th><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Price Range</th><th style="padding:10px 14px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mu);">Inventory</th></tr></thead><tbody>'
      +l.unitTypes.map(function(u){
        var pr;
        if(u.priceMax&&u.priceMax>u.priceMin)pr=fmtPriceHTML(u.priceMin)+' &ndash; '+fmtPriceHTML(u.priceMax);
        else if(u.priceMin)pr=fmtPriceHTML(u.priceMin);
        else pr='—';
        var areaTxt;
        if(u.carpet_min&&u.carpet_max&&u.carpet_max>u.carpet_min)areaTxt=u.carpet_min+'–'+u.carpet_max+' sq.ft';
        else if(u.carpet_min)areaTxt=u.carpet_min+' sq.ft';
        else if(u.area)areaTxt=u.area+' sq.ft';
        else areaTxt='—';
        var invTxt='—';
        if(u.units_total){
          var sold=Math.max(0,(u.units_total||0)-(u.units_available||0));
          invTxt=u.units_available+'/'+u.units_total+' available';
          if(u.units_available===0)invTxt='<span style="color:var(--red);font-weight:700;">Sold out</span>';
        }
        return '<tr style="border-top:1px solid var(--sa);"><td style="padding:10px 14px;font-weight:700;color:var(--ink);">'+esc(u.bhk||'—')+'</td><td style="padding:10px 14px;color:var(--ink);">'+areaTxt+'</td><td style="padding:10px 14px;font-weight:700;color:var(--g);">'+pr+'</td><td style="padding:10px 14px;font-size:12px;color:var(--mu);">'+invTxt+'</td></tr>';
      }).join('')
      +'</tbody></table></div></div>';
  }
  // Project meta block (acreage, towers, payment schemes, booking, brochure)
  var projMetaHTML='';
  if(isProj){
    var bits=[];
    if(l.totalAcreage)bits.push('<div class="ic"><div class="ll">TOTAL AREA</div><strong>'+l.totalAcreage+' acres</strong></div>');
    if(l.totalTowers)bits.push('<div class="ic"><div class="ll">TOWERS</div><strong>'+l.totalTowers+'</strong></div>');
    if(l.bookingAmount)bits.push('<div class="ic"><div class="ll">BOOKING AMOUNT</div><strong style="color:var(--g);">&#8377;'+l.bookingAmount.toLocaleString('en-IN')+'</strong></div>');
    if(l.priceBreakupType)bits.push('<div class="ic"><div class="ll">PRICE FORMAT</div><strong style="font-size:12px;">'+(l.priceBreakupType==='all_inclusive'?'All-inclusive':'Basic + Govt charges')+'</strong></div>');
    var schLabels={'10_90':'10:90 Scheme','no_pre_emi':'No Pre-EMI','construction_linked':'Construction-Linked','subvention':'Subvention','possession_linked':'Possession-Linked'};
    if(l.paymentSchemes&&l.paymentSchemes.length){
      var sch=l.paymentSchemes.map(function(s){return schLabels[s]||s;}).join(', ');
      bits.push('<div class="ic" style="grid-column:1/-1;"><div class="ll">PAYMENT SCHEMES</div><strong style="font-size:12px;">'+esc(sch)+'</strong></div>');
    }
    if(bits.length){
      projMetaHTML='<div class="dv-sec"><div class="dv-sec-hd">Project &amp; Payment Details</div><div class="info-g">'+bits.join('')+'</div></div>';
    }
  }
  // Brochure / Master Plan download buttons
  var docsHTML='';
  if(isProj&&(l.brochureUrl||l.masterPlanUrl)){
    docsHTML='<div class="dv-sec"><div class="dv-sec-hd">Project Documents</div><div style="display:flex;gap:8px;flex-wrap:wrap;">';
    if(l.brochureUrl){
      docsHTML+='<a href="'+esc(l.brochureUrl)+'" target="_blank" rel="noopener" class="dv-btn-sec" style="text-decoration:none;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg> Download Brochure</a>';
    }
    if(l.masterPlanUrl){
      docsHTML+='<a href="'+esc(l.masterPlanUrl)+'" target="_blank" rel="noopener" class="dv-btn-sec" style="text-decoration:none;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-building"/></svg> View Master Plan</a>';
    }
    docsHTML+='</div></div>';
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
    furnDetH='<div style="margin-bottom:10px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;">What\'s Included</div>'
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
    landmarksH='<div style="margin-bottom:10px;"><div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:5px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:var(--t);"><use href="#i-pin"/></svg> Nearby Landmarks</div>'
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
  // Compose the detail body — side-by-side on desktop (image left, facts right),
  // stacked on mobile. The wrapper class .vbody-grid handles the responsiveness.
  var factsHTML='<div class="info-g">'
    +'<div class="ic"><div class="ll">'+priceLbl+'</div><strong style="color:'+(ir?'var(--t)':'var(--g)')+';">'+priceDisplay+'</strong></div>'
    +(ir?'<div class="ic"><div class="ll">DEPOSIT</div><strong>&#8377;'+l.dep.toLocaleString('en-IN')+'</strong></div>':'')
    +'<div class="ic"><div class="ll">TYPE</div><strong>'+esc(l.type)+' &middot; '+l.beds+'BHK &middot; '+l.baths+'B</strong></div>'
    +areaHTML
    +(l.age?'<div class="ic"><div class="ll">AGE</div><strong>'+esc(l.age)+'</strong></div>':'')
    +(isProj&&l.projectStatus?'<div class="ic"><div class="ll">PROJECT STATUS</div><strong style="color:#c58600;">'+esc(l.projectStatus)+'</strong></div>':'<div class="ic"><div class="ll">FURNISHING</div><strong>'+esc(l.furnish||'—')+'</strong></div>')
    +(isProj&&l.completion?'<div class="ic"><div class="ll">COMPLETION</div><strong>'+new Date(l.completion).toLocaleDateString('en-IN',{month:'long',year:'numeric'})+'</strong></div>':'<div class="ic"><div class="ll">FLOOR</div><strong>'+floorDisplay+'</strong></div>')
    +(!isProj?'<div class="ic"><div class="ll">FACING</div><strong>'+esc(l.facing||'—')+'</strong></div>':'')
    +(ir?'<div class="ic"><div class="ll">AVAILABILITY</div><strong>'+esc(l.avail||'—')+'</strong></div>':'')
    +(l.ownership?'<div class="ic"><div class="ll">OWNERSHIP</div><strong>'+esc(l.ownership)+'</strong></div>':'')
    +(waterDisplay?'<div class="ic"><div class="ll">WATER</div><strong style="font-size:12px;">'+esc(waterDisplay)+'</strong></div>':'')
    +(l.backup?'<div class="ic"><div class="ll">POWER BACKUP</div><strong style="font-size:12px;">'+esc(l.backup)+'</strong></div>':'')
    +(!ir&&!isProj?'<div class="ic"><div class="ll">TRANSACTION TYPE</div><strong>'+esc(l.txnType||(l.stype==='New'||l.stype==='First Owner'?'New Booking':(l.stype||'—')))+'</strong></div>':'')
    +(!ir&&!isProj?'<div class="ic"><div class="ll">POSSESSION</div><strong>'+esc(l.poss||'—')+'</strong></div>':'')
    +(!ir&&l.rera?'<div class="ic" style="grid-column:1/-1;"><div class="ll">RERA NO.</div><strong style="color:var(--gr);">'+esc(l.rera)+'</strong></div>':'')
    +'</div>';

  document.getElementById('vCnt').innerHTML=
    '<div class="vbody-grid">'
      +'<div class="vbody-gallery">'+imgH+'</div>'
      +'<div class="vbody-facts">'
        +(tagsH?'<div class="tags-r" style="margin-bottom:6px;">'+tagsH+'</div>':'')
        +factsHTML
      +'</div>'
    +'</div>'
    // Everything below the hero block is full-width, compact sections
    +'<div class="dv-sections">'
      +priceBreakdownHTML
      +'<div id="priceCompareSlot"></div>'
      +unitsTableHTML
      +projMetaHTML
      +docsHTML
      +(l.desc?'<div class="dv-sec"><div class="dv-sec-hd">About this property</div><p class="dv-desc">'+esc(l.desc)+'</p></div>':'')
      +((furnDetH||landmarksH||amH)?'<div class="dv-sec">'
        +furnDetH
        +landmarksH
        +amH
      +'</div>':'')
      +'<div class="listing-map-wrap" id="listingMapWrap" style="display:none;"><div class="dv-sec-hd" style="margin-bottom:8px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-pin"/></svg> Location</div><div class="listing-map" id="listingMap"></div></div>'
      // Contact + actions: horizontal bar
      +'<div class="dv-action-bar">'
        +cntH
        +'<div class="dv-action-btns">'
          +'<button class="dv-btn-primary" onclick="closeM(\'viewM\');oCnt('+l.id+')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg> '+(cu?'Contact Directly':'Send Inquiry')+'</button>'
          +'<button class="dv-btn-wa" onclick="shareWhatsApp('+l.id+')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-whatsapp"/></svg> WhatsApp</button>'
          +'<button class="dv-btn-sec" onclick="copyListingLink('+l.id+')"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-link"/></svg> Copy Link</button>'
        +'</div>'
      +'</div>'
    +'<button onclick="openReport('+l.id+')" class="dv-report-btn"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-flag"/></svg> Report Discrimination or Unfair Treatment</button>'
    +'</div>'; // close dv-sections
  openM('viewM');
  // Track current detail id for the shortlist button
  _currentDetailId=id;
  updateShortlistBtnState();
  // Set URL hash for shareable deep link + push history so Back returns to where we came from.
  // Skip when we're responding to a Back/Forward event, OR when we're on a non-SPA
  // page (listing.html etc.) where the URL is already canonical.
  var pageType=document.body&&document.body.getAttribute('data-page');
  var isSpa=!pageType||pageType==='spa';
  var targetHash='#listing/'+id;
  if(isSpa&&!_navFromHistory&&window.history&&window.history.pushState&&window.location.hash!==targetHash){
    window.history.pushState({listing:id},'',targetHash);
  }
  // Init touch gestures on the image gallery
  _initGalleryTouch();
  // Show map for this listing's location
  showListingMap(l);
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

async function showListingMap(l){
  var wrap=document.getElementById('listingMapWrap');
  var mapEl=document.getElementById('listingMap');
  if(!wrap||!mapEl)return;
  if(!l||!l.city){wrap.style.display='none';return;}
  var lat=null, lng=null, accuracy='locality';
  // Best case: saved coordinates from the lister's pin-drop
  if(l.lat!=null&&l.lng!=null&&!isNaN(Number(l.lat))&&!isNaN(Number(l.lng))){
    lat=Number(l.lat);lng=Number(l.lng);accuracy='exact';
  } else {
    // Build the most specific geocode query we can with what we have
    var attempts=[];
    var parts=[];
    if(l.building)parts.push(l.building);
    if(l.streetAddress)parts.push(l.streetAddress);
    if(l.loc)parts.push(l.loc);
    parts.push(l.city);
    if(l.pincode)parts.push(l.pincode);
    parts.push('India');
    attempts.push(parts.join(', '));
    // Without building (sometimes confuses the geocoder)
    if(l.building){
      var p2=[];
      if(l.streetAddress)p2.push(l.streetAddress);
      if(l.loc)p2.push(l.loc);
      p2.push(l.city);
      if(l.pincode)p2.push(l.pincode);
      p2.push('India');
      attempts.push(p2.join(', '));
    }
    // Locality + city + pin
    if(l.loc)attempts.push(l.loc+', '+l.city+(l.pincode?', '+l.pincode:'')+', India');
    // Pincode alone
    if(l.pincode)attempts.push(l.pincode+', India');
    // City alone
    attempts.push(l.city+', India');
    try{
      var matchedAt=-1;
      for(var i=0;i<attempts.length;i++){
        var resp=await fetch('https://nominatim.openstreetmap.org/search?format=json&q='+encodeURIComponent(attempts[i])+'&limit=1&countrycodes=in',{headers:{'Accept':'application/json'}});
        var results=await resp.json();
        if(results&&results.length){
          lat=parseFloat(results[0].lat);
          lng=parseFloat(results[0].lon);
          matchedAt=i;
          break;
        }
      }
      if(matchedAt<0){wrap.style.display='none';return;}
      // Determine accuracy from which attempt matched
      if(matchedAt===0&&l.building)accuracy='building-attempt';
      else if(l.pincode&&matchedAt<=2)accuracy='pincode';
      else accuracy='locality';
    }catch(e){
      wrap.style.display='none';return;
    }
  }
  // Show map container
  wrap.style.display='';
  if(_listingMap){try{_listingMap.remove();}catch(e){}_listingMap=null;}
  if(!window.L){wrap.style.display='none';return;}
  // Higher zoom for exact pins, lower for fallbacks
  var zoom=accuracy==='exact'?18:accuracy==='pincode'?16:14;
  setTimeout(function(){
    _listingMap=L.map('listingMap',{
      scrollWheelZoom:false,
      zoomControl:true,
      dragging:true,
      attributionControl:true
    }).setView([lat,lng],zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:19,
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }).addTo(_listingMap);
    var popupHTML='<strong>'+esc(l.title)+'</strong><br/>'
      +(l.building?esc(l.building)+'<br/>':'')
      +esc((l.loc?l.loc+', ':'')+l.city)
      +(l.pincode?' &middot; '+esc(l.pincode):'');
    L.marker([lat,lng]).addTo(_listingMap)
      .bindPopup(popupHTML)
      .openPopup();
    setTimeout(function(){_listingMap.invalidateSize();},300);
    // Add accuracy badge for transparency
    var accuracyLabel=accuracy==='exact'?'Pinned by lister':accuracy==='pincode'?'Pincode-level':accuracy==='building-attempt'?'Address-matched':'Locality-level';
    var accColor=accuracy==='exact'?'var(--gr)':'var(--mu)';
    var note=document.createElement('div');
    note.style.cssText='position:absolute;bottom:6px;left:6px;background:rgba(255,255,255,.92);padding:3px 8px;border-radius:4px;font-size:10px;font-weight:600;color:'+accColor+';z-index:400;font-family:DM Sans,sans-serif;';
    note.textContent=accuracyLabel;
    mapEl.appendChild(note);
  },100);
}

// Clean up map when modal closes
var _origCloseM=closeM;
// (closeM already handles viewM hash clearing — we piggyback map cleanup)

// ══ SHARE ══
function _listingUrl(id){
  // Clean URL format: /listing?id=42 (Session 2 of MPA refactor).
  // Previously this was an in-page hash (#listing/42). The new URL is a real
  // page that Google's crawler can index, and that share-sheet apps can open
  // as a deep-link without needing a JS shell.
  return window.location.origin+'/listing?id='+id;
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
    openListing(lid);
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
      // Tenant-profile notifications (Phase 1.5)
      case 'tp_shared':       iconHref='#i-shield-check'; iconBg='#f3e8d4'; iconColor='#7c5a1a'; break;
      case 'tp_revoked':      iconHref='#i-lock';    iconBg='#ffe8e8'; iconColor='var(--red)'; break;
      case 'tp_viewed':       iconHref='#i-shield-check'; iconBg='#e8f4ff'; iconColor='#1a7ab8'; break;
      case 'tp_level_up':     iconHref='#i-sparkle'; iconBg='#f4ebff'; iconColor='#9b59b6'; break;
      case 'tp_admin_note':   iconHref='#i-flag';    iconBg='#fff3cd'; iconColor='#856404'; break;
      // Full-document share notifications (Stage 6)
      case 'tp_full_request':   iconHref='#i-mail';         iconBg='#fffaeb'; iconColor='#daa520'; break;
      case 'tp_full_approved':  iconHref='#i-shield-check'; iconBg='#d4edda'; iconColor='#155724'; break;
      case 'tp_full_denied':    iconHref='#i-x';            iconBg='#f8d7da'; iconColor='#7c1a1a'; break;
      case 'tp_full_revoked':   iconHref='#i-lock';         iconBg='#f8d7da'; iconColor='#7c1a1a'; break;
      case 'tp_full_downloaded':iconHref='#i-shield-check'; iconBg='#fff3cd'; iconColor='#856404'; break;
      default:                iconHref='#i-bell';    iconBg='var(--tl)'; iconColor='var(--t)';
    }
    var rowBg=n.read?'#fff':'rgba(18,90,81,.05)';
    var titleWeight=n.read?'500':'700';
    var ago=_timeAgo(n.created_at);
    // Pass the type through so handleNotifClick knows where to route
    var clickAttrs='onclick="handleNotifClick('+n.id+','+(n.link_id||'null')+',\''+esc(n.type||'')+'\')" style="cursor:pointer;background:'+rowBg+';"';
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
async function handleNotifClick(notifId,linkId,notifType){
  await markNotifRead(notifId);
  closeNotifPanel();
  // Route by notification type. Existing types (inquiry, listing_*) used
  // link_id as a listing_id and openListing was always correct. Tenant-profile
  // types use link_id differently (access_id) so we route them to the right
  // dashboard section.
  switch(notifType){
    case 'tp_shared':
    case 'tp_viewed':
    case 'tp_level_up':
    case 'tp_admin_note':
    case 'tp_full_request':       // tenant: review pending request on /dashboard
    case 'tp_full_downloaded':    // tenant: see downloads on /dashboard
      // Send tenant to their dashboard. The Profile Access section + the
      // Tenant Profile section are both there. We use the existing /dashboard
      // route which loads tenant-profile.js.
      if(window.location.pathname!=='/dashboard'){
        window.location.href='/dashboard';
      }
      return;
    case 'tp_revoked':
    case 'tp_full_approved':      // broker: tenant approved → /lister Leads
    case 'tp_full_denied':        // broker: tenant denied → /lister Leads
    case 'tp_full_revoked':       // broker: tenant revoked → /lister Leads
      // Send broker to their leads tab so they can see which inquiry lost
      // access. The badge on that lead row will be gone (since access is now
      // revoked) and View Profile button won't appear.
      if(window.location.pathname!=='/lister'){
        window.location.href='/lister';
      } else if(typeof setListerTab==='function'){
        setListerTab('leads');
      }
      return;
    default:
      // Existing behavior: link_id is a listing_id, open the listing.
      if(linkId)openListing(linkId);
  }
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
  // ── Stage 3: Tenant profile consent flow ──
  // If the user is signed in AND has a tenant profile worth sharing
  // (verification_level !== 'none'), show a consent screen BEFORE creating
  // the inquiry. The user must explicitly confirm what's being shared.
  // If they decline, the inquiry isn't created — they can edit & retry.
  if(cu&&actL&&typeof showInquiryConsent==='function'){
    var consentResult=await showInquiryConsent({
      brokerId:actL.uid,
      listingId:actL.id,
      listingTitle:actL.title,
      inquiryPayload:{nm:nm,ph:ph,em:em,msg:msg}
    });
    // showInquiryConsent returns:
    //   {action:'confirmed', shareProfile:true|false}  → proceed
    //   {action:'cancelled'}                            → user backed out
    //   {action:'no_profile'}                           → no profile, proceed normally
    if(consentResult&&consentResult.action==='cancelled')return;
    // Pass the share-profile decision through to the inquiry submission
    return await _submitInquiry(nm,ph,em,msg,consentResult&&consentResult.shareProfile,consentResult&&consentResult.snapshot);
  }
  // Fallback (logged-out user, or showInquiryConsent not loaded yet): submit
  // inquiry immediately, no profile sharing.
  return await _submitInquiry(nm,ph,em,msg,false,null);
}

// Internal: actually creates the inquiry row + (optionally) grants profile access.
// Extracted from doInq so the consent flow can call it after user confirmation.
async function _submitInquiry(nm,ph,em,msg,shareProfile,consentSnapshot){
  var inq=await createInquiry({listingId:actL.id,listingTitle:actL.title,listingCity:actL.city,lf:actL.lf,contact:actL.contact,name:nm,phone:ph,email:em,message:msg,uid:cu?cu.id:null,sentAt:new Date().toISOString().split('T')[0]});
  if(!inq)return; // createInquiry already toasted the error
  // If user opted to share profile, write the access row via the SECURITY
  // DEFINER RPC. We do NOT fail the inquiry if this RPC fails — the broker
  // just won't see the profile data. Worth noting in console for debugging.
  if(shareProfile&&cu&&inq.id&&actL.uid){
    try{
      var {error:gErr}=await sb.rpc('grant_profile_access',{
        p_inquiry_id:inq.id,
        p_broker_user_id:actL.uid,
        p_listing_id:actL.id,
        p_consent_snapshot:consentSnapshot||{}
      });
      if(gErr)console.warn('Profile access grant failed:',gErr.message);
    }catch(e){console.warn('Profile access RPC error:',e&&e.message);}
  }
  closeM('cntM');var cm=document.getElementById('cMsg');if(cm)cm.value='';
  toast('Inquiry sent! The owner will contact you. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-phone"/></svg>');
}

// ══ IMAGE UPLOAD ══
function dzOv(e){e.preventDefault();var d=document.getElementById('dz');if(d)d.classList.add('drag');}
function dzLv(){var d=document.getElementById('dz');if(d)d.classList.remove('drag');}
function dzDp(e){
  e.preventDefault();dzLv();
  var files=Array.from(e.dataTransfer.files);
  // Split into images and videos so each goes to the right pipeline
  var imgs=files.filter(function(f){return f.type.startsWith('image/');});
  var vids=files.filter(function(f){return f.type.startsWith('video/');});
  if(imgs.length)hImgsArr(imgs);
  // Only accept the first video — listing supports one walk-through video
  if(vids.length){
    if(vids.length>1)toast('Only one video per listing — used the first one.');
    hVideoFile(vids[0]);
  }
  if(!imgs.length&&!vids.length)toast('Please drop image or video files.','e');
}
// When the user clicks the unified dropzone, prompt them to pick photos OR video
function openMediaPicker(){
  // Mobile-friendly: show a tiny inline chooser
  var existing=document.getElementById('mediaPickPop');
  if(existing){existing.remove();return;}
  var dz=document.getElementById('dz');
  if(!dz)return;
  var pop=document.createElement('div');
  pop.id='mediaPickPop';
  pop.style.cssText='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,.18);padding:10px;display:flex;gap:8px;z-index:5;font-family:DM Sans,sans-serif;';
  pop.innerHTML='<button type="button" id="mpPhotos" style="background:var(--t);color:#fff;border:none;padding:9px 14px;border-radius:7px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">📷 Photos</button>'
    +'<button type="button" id="mpVideo" style="background:transparent;border:1.5px solid var(--t);color:var(--t);padding:9px 14px;border-radius:7px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">🎬 Video</button>';
  dz.style.position='relative';
  dz.appendChild(pop);
  document.getElementById('mpPhotos').onclick=function(e){e.stopPropagation();pop.remove();document.getElementById('imgIn').click();};
  document.getElementById('mpVideo').onclick=function(e){e.stopPropagation();pop.remove();document.getElementById('vidIn').click();};
  // Close on outside click
  setTimeout(function(){
    document.addEventListener('click',function close(ev){
      if(pop&&!pop.contains(ev.target)){pop.remove();document.removeEventListener('click',close);}
    });
  },50);
}
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
  // Reserve slots up front so parallel uploads have stable indices.
  // CRITICAL: we do NOT splice on failure — that would shift other in-flight uploads
  // to the wrong slot. Instead, mark the failed slot as __FAILED__ and let rPv()
  // render a clear "retry / remove" control for the user.
  var startIdx=upImgs.length;
  valid.forEach(function(f){upImgs.push({state:'__PENDING__',file:f,name:f.name});});
  rPv();
  // Compress in parallel
  valid.forEach(function(f,localIdx){
    var globalIdx=startIdx+localIdx;
    // Hard cap so a hung compress never leaves the user stuck. 30s is generous —
    // real compresses take 0.2-2s; >30s means the browser is genuinely stuck.
    var timeoutMs=30000;
    var timedOut=false;
    var timer=setTimeout(function(){
      timedOut=true;
      if(upImgs[globalIdx]&&typeof upImgs[globalIdx]==='object'&&upImgs[globalIdx].state==='__PENDING__'){
        upImgs[globalIdx]={state:'__FAILED__',name:f.name,reason:'Timed out — file may be too large or browser is busy.'};
        rPv();
      }
    },timeoutMs);
    compressImage(f).then(function(dataUrl){
      clearTimeout(timer);
      if(timedOut)return;
      upImgs[globalIdx]=dataUrl;
      rPv();
    }).catch(function(err){
      clearTimeout(timer);
      if(timedOut)return;
      console.error('compress fail',err);
      upImgs[globalIdx]={state:'__FAILED__',name:f.name,reason:(err&&err.message)||'Could not process this file.'};
      rPv();
      toast('"'+f.name+'" failed — click Remove on the slot to clear it.','e');
    });
  });
}

// Manually remove a single image slot — works for pending, failed, or successfully uploaded slots.
// Used by the X button on every preview tile.
function removeImgSlot(idx){
  if(idx<0||idx>=upImgs.length)return;
  upImgs.splice(idx,1);
  rPv();
}

// Retry a failed slot with the original file (kept on the slot object).
function retryImgSlot(idx){
  var slot=upImgs[idx];
  if(!slot||typeof slot!=='object'||slot.state!=='__FAILED__'||!slot.file){
    // Stale state — just remove it
    removeImgSlot(idx);
    return;
  }
  var f=slot.file;
  upImgs[idx]={state:'__PENDING__',file:f,name:f.name};
  rPv();
  var timer=setTimeout(function(){
    if(upImgs[idx]&&typeof upImgs[idx]==='object'&&upImgs[idx].state==='__PENDING__'){
      upImgs[idx]={state:'__FAILED__',name:f.name,reason:'Timed out on retry.',file:f};
      rPv();
    }
  },30000);
  compressImage(f).then(function(dataUrl){
    clearTimeout(timer);
    upImgs[idx]=dataUrl;
    rPv();
  }).catch(function(err){
    clearTimeout(timer);
    upImgs[idx]={state:'__FAILED__',name:f.name,reason:(err&&err.message)||'Still failed.',file:f};
    rPv();
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
  // Only keep string data URLs — pending/failed slots are objects and must be filtered out
  var clean=images.filter(function(im){return im&&typeof im==='string'&&im!=='__PENDING__';});
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
  hVideoFile(f);
}
function hVideoFile(f){
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
    // Pending or failed slot — slot is now an object, not just a string sentinel
    if(s&&typeof s==='object'){
      if(s.state==='__PENDING__'){
        return '<div class="ip ip-pending">'
          +'<div class="ip-spinner"></div>'
          +'<div class="ip-pending-lbl">'+esc(s.name||'Processing…').slice(0,30)+'</div>'
          +'<button onclick="removeImgSlot('+i+')" aria-label="Cancel" title="Cancel" style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,.6);color:#fff;border:none;width:22px;height:22px;border-radius:50%;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;z-index:2;">×</button>'
          +'</div>';
      }
      if(s.state==='__FAILED__'){
        return '<div class="ip ip-failed" style="background:#ffeeee;border:1px solid #ffcccc;">'
          +'<div style="text-align:center;padding:8px;">'
            +'<div style="color:var(--red);font-size:18px;line-height:1;">⚠</div>'
            +'<div style="font-size:10.5px;color:#7a2222;font-weight:700;margin-top:4px;line-height:1.2;">Failed</div>'
            +'<div style="font-size:9.5px;color:#7a2222;margin-top:2px;line-height:1.3;max-width:90px;overflow:hidden;text-overflow:ellipsis;">'+esc((s.name||'').slice(0,18))+'</div>'
            +'<div style="display:flex;gap:3px;justify-content:center;margin-top:6px;">'
              +(s.file?'<button onclick="retryImgSlot('+i+')" style="background:var(--t);color:#fff;border:none;border-radius:4px;padding:3px 7px;font-size:10px;font-weight:600;cursor:pointer;">Retry</button>':'')
              +'<button onclick="removeImgSlot('+i+')" style="background:transparent;color:var(--red);border:1px solid var(--red);border-radius:4px;padding:3px 7px;font-size:10px;font-weight:600;cursor:pointer;">Remove</button>'
            +'</div>'
          +'</div>'
          +'</div>';
      }
    }
    // Legacy string sentinel — treat as still pending (older flows)
    if(s==='__PENDING__'){
      return '<div class="ip ip-pending"><div class="ip-spinner"></div><div class="ip-pending-lbl">Processing…</div><button onclick="removeImgSlot('+i+')" style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,.6);color:#fff;border:none;width:22px;height:22px;border-radius:50%;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;z-index:2;" aria-label="Cancel">×</button></div>';
    }
    return '<div class="ip"><img src="'+s+'" alt="Uploaded photo '+(i+1)+'"/><button onclick="rmImg('+i+')" aria-label="Remove photo '+(i+1)+'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg></button>'+(i<2?'<div class="free-lbl">Free</div>':'')+'</div>';
  }).join('');
  // Show count
  var dz=document.getElementById('dz');
  if(dz){
    var realCount=upImgs.filter(function(s){
      // Real images = strings (data URLs); pending/failed = objects
      return s&&typeof s==='string'&&s!=='__PENDING__';
    }).length;
    var pendCount=upImgs.filter(function(s){return s&&typeof s==='object'&&s.state==='__PENDING__';}).length;
    var failedCount=upImgs.filter(function(s){return s&&typeof s==='object'&&s.state==='__FAILED__';}).length;
    var lblP=dz.querySelector('p:first-of-type');
    var statusBits=[];
    if(realCount)statusBits.push(realCount+' / '+MAX_IMAGES+' photos');
    if(pendCount)statusBits.push(pendCount+' processing');
    if(failedCount)statusBits.push(failedCount+' failed');
    if(lblP)lblP.textContent=statusBits.length?statusBits.join(' · '):'Click or drag & drop photos here';
  }
}
// ── PRICE INPUT HELPERS ──
// Convert (core, unit) → integer rupees. Lakh × 100,000; Crore × 10,000,000.
function _coreToRupees(core,unit){
  var n=Number(core);
  if(!n||isNaN(n))return 0;
  return Math.round(unit==='cr'?n*10000000:n*100000);
}
// Convert rupees → {core, unit} for prefill on edit. Picks Crores if ≥1Cr, else Lakhs.
function _rupeesToCore(r){
  if(!r)return {core:'',unit:'lakh'};
  var n=Number(r);
  if(n>=10000000){
    var cr=n/10000000;
    return {core:Number(cr.toFixed(2)),unit:'cr'};
  }
  var lk=n/100000;
  return {core:Number(lk.toFixed(2)),unit:'lakh'};
}
// Sync the hidden input (lPr / lPrMin / lPrMax) from its core+unit pair.
// Called on every input/change so getVal('lPr') always returns the canonical rupee number.
function _syncPriceHidden(coreId,unitId,hiddenId){
  var c=document.getElementById(coreId);
  var u=document.getElementById(unitId);
  var h=document.getElementById(hiddenId);
  if(!c||!u||!h)return;
  var core=c.value;
  var unit=u.value;
  h.value=String(_coreToRupees(core,unit));
}
// Wire the three price field pairs to keep their hidden inputs in sync.
// Idempotent — calling multiple times is safe.
function bindPriceInputs(){
  var pairs=[
    ['lPrCore','lPrUnit','lPr'],
    ['lPrMinCore','lPrMinUnit','lPrMin'],
    ['lPrMaxCore','lPrMaxUnit','lPrMax']
  ];
  pairs.forEach(function(p){
    var c=document.getElementById(p[0]);
    var u=document.getElementById(p[1]);
    if(!c||!u)return;
    if(c.dataset.bound)return;
    c.dataset.bound='1';u.dataset.bound='1';
    var sync=function(){_syncPriceHidden(p[0],p[1],p[2]);if(p[2]==='lPr'&&typeof updatePriceCalc==='function')updatePriceCalc();};
    c.addEventListener('input',sync);
    u.addEventListener('change',sync);
  });
}
// Price Type dropdown: "Price on Request" hides the price input + zeroes the hidden.
function onPriceTypeChange(){
  var t=document.getElementById('lPrType');
  var wrap=document.getElementById('lPrInputWrap');
  var calc=document.getElementById('lPrCalc');
  var hint=wrap?wrap.nextElementSibling:null;
  var hidden=document.getElementById('lPr');
  var core=document.getElementById('lPrCore');
  if(!t)return;
  if(t.value==='onrequest'){
    if(wrap)wrap.style.display='none';
    if(hint)hint.style.display='none';
    if(calc)calc.style.display='none';
    if(hidden)hidden.value='-1'; // sentinel: "price on request"
    if(core)core.value='';
  } else {
    if(wrap)wrap.style.display='';
    if(hint)hint.style.display='';
    if(hidden)hidden.value='';
    // Re-sync from current core+unit values
    _syncPriceHidden('lPrCore','lPrUnit','lPr');
  }
}
// Prefill the new split price inputs when editing an existing listing.
function _prefillPriceInputs(l){
  var pt=document.getElementById('lPrType');
  if(l.priceOnRequest||Number(l.price)===-1){
    if(pt){pt.value='onrequest';onPriceTypeChange();}
    return;
  }
  if(pt)pt.value='expected';
  // Sale price
  if(l.price){
    var p=_rupeesToCore(l.price);
    var c=document.getElementById('lPrCore');if(c)c.value=p.core;
    var u=document.getElementById('lPrUnit');if(u)u.value=p.unit;
    var h=document.getElementById('lPr');if(h)h.value=String(l.price);
  }
  // Project min
  if(l.priceMin){
    var pm=_rupeesToCore(l.priceMin);
    var cm=document.getElementById('lPrMinCore');if(cm)cm.value=pm.core;
    var um=document.getElementById('lPrMinUnit');if(um)um.value=pm.unit;
    var hm=document.getElementById('lPrMin');if(hm)hm.value=String(l.priceMin);
  }
  // Project max
  if(l.priceMax){
    var px=_rupeesToCore(l.priceMax);
    var cx=document.getElementById('lPrMaxCore');if(cx)cx.value=px.core;
    var ux=document.getElementById('lPrMaxUnit');if(ux)ux.value=px.unit;
    var hx=document.getElementById('lPrMax');if(hx)hx.value=String(l.priceMax);
  }
  if(typeof updatePriceCalc==='function')updatePriceCalc();
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

  // Apply data-mode-show / data-mode-hide attributes across the wizard.
  // data-mode-show="rent buy" → only show when current mode is one of those.
  // data-mode-hide="project"  → hide when current mode matches.
  document.querySelectorAll('[data-mode-show]').forEach(function(el){
    var allowed=el.getAttribute('data-mode-show').split(/\s+/);
    el.style.display=allowed.indexOf(m)>=0?'':'none';
  });
  document.querySelectorAll('[data-mode-hide]').forEach(function(el){
    var blocked=el.getAttribute('data-mode-hide').split(/\s+/);
    if(blocked.indexOf(m)>=0)el.style.display='none';
    else if(el.style.display==='none')el.style.display=''; // un-hide
  });

  // Builder-only side-rail in Stage 6 (Media)
  var rail=document.getElementById('bMediaRail');
  if(rail)rail.style.display=m==='project'?'':'none';

  // Update wizard step labels + pane headings/descriptions for project mode
  var stepLabels=m==='project'
    ?['Intent','Identity','Inventory','Amenities','Pricing','Media']
    :['Intent','Basics','Specs','Features','Pricing','Media'];
  document.querySelectorAll('.wiz-step').forEach(function(s,i){
    var lbl=s.querySelector('.wiz-lbl');
    if(lbl&&stepLabels[i])lbl.textContent=stepLabels[i];
  });
  // Pane titles & descriptions
  function setText(id,txt){var e=document.getElementById(id);if(e)e.textContent=txt;}
  if(m==='project'){
    setText('lStage2Title','Project identity & legal');
    setText('lStage2Desc','Project name, builder, location, RERA registration, and project scale.');
    setText('lStage3Title','Inventory & configurations');
    setText('lStage3Desc','Add each BHK type with carpet area, price range, and inventory status.');
    setText('lStage5Title','Pricing & payment plans');
    setText('lStage5Desc','Project starting price, breakup format, payment schemes, and booking amount.');
    setText('lTlLabel','Project Name *');
    setText('lBnLabel','Builder / Company Name *');
    var tl=document.getElementById('lTl');if(tl)tl.placeholder='e.g. Lodha Park, Prestige Falcon City';
    var bn=document.getElementById('lBn');if(bn)bn.placeholder='e.g. Lodha Group, Prestige Estates';
  } else {
    setText('lStage2Title','Property basics');
    setText('lStage2Desc','The essentials we need to identify your listing.');
    setText('lStage3Title','Property specs');
    setText('lStage3Desc','Size, age, floor — the basics buyers want to know.');
    setText('lStage5Title','Pricing & availability');
    setText('lStage5Desc','Set your asking price and timing.');
    setText('lTlLabel','Property Title *');
    setText('lBnLabel','Building / Society Name (optional)');
    var tlR=document.getElementById('lTl');if(tlR)tlR.placeholder='e.g. 3 BHK Apartment, Andheri West';
    var bnR=document.getElementById('lBn');if(bnR)bnR.placeholder='e.g. Lodha World One, Prestige Falcon City';
  }

  // RERA required indicator — for projects (always) AND for buy "New Booking"
  refreshReraRequired();
}

// Read current state and toggle the RERA-required asterisk accordingly.
function refreshReraRequired(){
  var reReq=document.getElementById('lReReq');
  if(!reReq)return;
  var lTxnEl=document.getElementById('lTxn');
  var txn=lTxnEl?lTxnEl.value:'';
  var required=lMode==='project'||txn==='New Booking';
  reReq.style.display=required?'':'none';
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
  // Page-aware: the edit flow needs the addM wizard. lister.html has it
  // inlined (Session 4) so editing works inline there. Other extracted pages
  // (dashboard.html, listing.html) don't have the wizard — bounce to the SPA.
  // Detect the wizard's presence by querying for #addM rather than the
  // page-type attribute, so this works regardless of which page hosts it.
  if(!document.getElementById('addM')){
    window.location.href='/?editListing='+id;
    return;
  }
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
  // Price fields use the new split inputs (core + Lakh/Crore + Price Type)
  bindPriceInputs();
  _prefillPriceInputs(l);
  setVal('lRe',l.rera);
  setVal('lRe2',l.rera); // project mode uses lRe2 in stage 2
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
  // Precise location prefill
  setVal('lPin',l.pincode||'');
  setVal('lAddr',l.streetAddress||'');
  _formLat=l.lat!=null?Number(l.lat):null;
  _formLng=l.lng!=null?Number(l.lng):null;
  // If we have coords, render the map immediately so the lister sees the saved pin
  if(_formLat!=null&&_formLng!=null){
    var wrap=document.getElementById('lLocateMapWrap');
    if(wrap)wrap.style.display='';
    setTimeout(function(){
      if(!window.L)return;
      if(_formMap){try{_formMap.remove();}catch(e){}_formMap=null;}
      _formMap=L.map('lLocateMap',{scrollWheelZoom:false,zoomControl:true}).setView([_formLat,_formLng],17);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(_formMap);
      _formMarker=L.marker([_formLat,_formLng],{draggable:true}).addTo(_formMap);
      _formMarker.on('dragend',function(e){
        var p=e.target.getLatLng();
        _formLat=p.lat;_formLng=p.lng;
        var st=document.getElementById('lLocateStatus');
        if(st)st.innerHTML='<span style="color:var(--gr);">Pin updated. Coordinates saved.</span>';
      });
      setTimeout(function(){_formMap.invalidateSize();},300);
      var st=document.getElementById('lLocateStatus');
      if(st)st.innerHTML='<span style="color:var(--gr);">Saved location loaded. Drag the pin to fine-tune.</span>';
    },200);
  } else {
    _resetFormMap();
  }
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
  // Project Type uses the same property_type column; default to 'Residential Apartments' for projects
  var projTypeEl=document.getElementById('lProjType');
  if(projTypeEl)projTypeEl.value=l.isProject?(l.type||'Residential Apartments'):'Residential Apartments';
  _unitTypes=l.unitTypes?l.unitTypes.slice():[];
  renderUnits();
  // Builder project field prefills
  setVal('lAcreage',l.totalAcreage||'');
  setVal('lTowers',l.totalTowers||'');
  setVal('lBooking',l.bookingAmount||'');
  // Price breakup radio
  var brk=l.priceBreakupType||'all_inclusive';
  var brkEl=document.querySelector('input[name="lBreakup"][value="'+brk+'"]');
  if(brkEl)brkEl.checked=true;
  // Payment schemes checkboxes
  var schemes=l.paymentSchemes||[];
  document.querySelectorAll('input[name="lScheme"]').forEach(function(c){c.checked=schemes.indexOf(c.value)>=0;});
  setVal('lBrochure',l.brochureUrl||'');
  setVal('lMasterPlan',l.masterPlanUrl||'');
  // Set dropdowns
  var tp=document.getElementById('lTp');if(tp)tp.value=l.type||'Apartment';
  var bd=document.getElementById('lBd');if(bd)bd.value=l.beds||'2';
  var bt=document.getElementById('lBt');if(bt)bt.value=l.baths||'1';
  var po=document.getElementById('lPo');if(po)po.value=l.poss||'';
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
  var pvRaw=getVal('lPr');
  var priceOnRequest=pvRaw==='-1'||Number(pvRaw)===-1;
  var pv=priceOnRequest?-1:(Number(pvRaw)||0);
  var le=document.getElementById('lErr');
  var missing=[];
  if(!title)missing.push('Property Title');
  if(!city)missing.push('City');
  if(!owner)missing.push('Owner / Broker Name');
  if(!contact)missing.push('Contact Number');
  if(missing.length){if(le){le.style.display='';le.textContent='Please fill: '+missing.join(', ')+'.';}return;}
  if(contact.replace(/\D/g,'').length<10){if(le){le.style.display='';le.textContent='Please enter a valid 10-digit contact number.';}return;}
  if(lMode==='rent'&&!rv){if(le){le.style.display='';le.textContent='Please enter monthly rent.';}return;}
  if(lMode==='buy'&&pv===0){if(le){le.style.display='';le.textContent='Please enter sale price (or choose "Price on Request").';}return;}
  if(lMode==='project'&&!Number(getVal('lPrMin'))){if(le){le.style.display='';le.textContent='Please enter project starting price.';}return;}
  if(lMode==='project'&&(!_unitTypes||!_unitTypes.length)){
    if(le){le.style.display='';le.textContent='Please add at least one unit configuration in Stage 3 (Inventory).';}
    return;
  }
  if(lMode==='project'&&_unitTypes.some(function(u){return !u.bhk||(!u.priceMin&&!u.price_min_core);})){
    if(le){le.style.display='';le.textContent='Each unit configuration needs a BHK type and at least a minimum price.';}
    return;
  }
  // RERA mandatory: new projects (always) AND buy listings with txnType=New Booking
  // For projects, the RERA field is `lRe2` (stage 2). For buy, it's `lRe` (stage 5).
  var reraVal=lMode==='project'?(getVal('lRe2')||'').trim():(getVal('lRe')||'').trim();
  var lTxnVal=getVal('lTxn');
  var reraNeeded=lMode==='project'||(lMode==='buy'&&lTxnVal==='New Booking');
  if(reraNeeded&&reraVal.length<5){
    var msg=lMode==='project'
      ?'RERA registration number is mandatory for new projects in Mumbai/Maharashtra.'
      :'RERA registration number is mandatory for "New Booking" transactions in Mumbai/Maharashtra.';
    if(le){le.style.display='';le.textContent=msg;}
    var reraField=document.getElementById(lMode==='project'?'lRe2':'lRe');
    if(reraField){reraField.focus();reraField.scrollIntoView({behavior:'smooth',block:'center'});}
    if(typeof wizGoto==='function')wizGoto(lMode==='project'?2:5);
    return;
  }
  // RERA format sanity check (loose — accepts both old "RERA/MH/.." and new "P51800.." formats)
  if(reraVal&&reraVal.length<6){
    if(le){le.style.display='';le.textContent='RERA number looks too short. Please double-check.';}
    return;
  }
  if(le)le.style.display='none';
  var isProject=lMode==='project';
  var listingData={lf:isProject?'project':lMode,title:title,building:getVal('lBn'),city:city,
    loc:getVal('lLo'),
    type:lMode==='project'?(getVal('lProjType')||'Residential Apartments'):(getVal('lTp')||'Apartment'),
    beds:lMode==='project'?'0':(getVal('lBd')||'2'),
    baths:lMode==='project'?0:(Number(getVal('lBt'))||1),
    area:Number(getVal('lAr'))||0,
    carpetArea:Number(getVal('lArC'))||0,
    builtArea:Number(getVal('lAr'))||0,
    superArea:Number(getVal('lArS'))||0,
    age:getVal('lAge'),
    furnDetails:_selFurn.slice(),
    rent:rv,dep:Number(getVal('lDp'))||0,price:isProject?(Number(getVal('lPrMin'))||0):pv,
    stype:'', // Deprecated — use txnType instead. Kept blank for new listings; legacy listings retain their value.
    poss:getVal('lPo'),
    rera:reraVal,
    floor:getVal('lFl'),
    floorNo:getVal('lFlNo')!==''?Number(getVal('lFlNo')):null,
    totalFloors:getVal('lFlTot')?Number(getVal('lFlTot')):null,
    facing:getVal('lFc'),
    txnType:lMode==='project'?'New Booking':(lMode==='buy'?getVal('lTxn'):''),
    ownership:getVal('lOwn'),
    water:_selWater.join(','),
    backup:getVal('lBackup'),
    landmarks:_landmarks.slice(),
    pincode:getVal('lPin'),
    streetAddress:getVal('lAddr'),
    lat:_formLat,
    lng:_formLng,
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
    unitTypes:isProject?_unitTypes.slice():[],
    // New builder fields
    totalAcreage:isProject?(Number(getVal('lAcreage'))||null):null,
    totalTowers:isProject?(Number(getVal('lTowers'))||null):null,
    bookingAmount:isProject?(Number(getVal('lBooking'))||null):null,
    priceBreakupType:isProject?(function(){
      var r=document.querySelector('input[name="lBreakup"]:checked');
      return r?r.value:'all_inclusive';
    })():'',
    paymentSchemes:isProject?Array.prototype.slice.call(document.querySelectorAll('input[name="lScheme"]:checked')).map(function(c){return c.value;}):[],
    brochureUrl:isProject?(getVal('lBrochure')||''):'',
    masterPlanUrl:isProject?(getVal('lMasterPlan')||''):''
  };

  // Block submit if any photos are still processing or have failed
  var pendingCount=listingData.images.filter(function(im){return im&&typeof im==='object'&&im.state==='__PENDING__';}).length;
  var failedCount=listingData.images.filter(function(im){return im&&typeof im==='object'&&im.state==='__FAILED__';}).length;
  if(pendingCount>0){
    toast('Please wait — '+pendingCount+' photo'+(pendingCount>1?'s':'')+' still processing.','e');
    return;
  }
  if(failedCount>0){
    toast('You have '+failedCount+' failed photo'+(failedCount>1?'s':'')+'. Click "Remove" or "Retry" on each failed slot before submitting.','e');
    return;
  }
  // Strip non-string entries from images (defensive — the slot system uses objects for state markers)
  listingData.images=listingData.images.filter(function(im){return im&&typeof im==='string';});
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
    ['lTl','lBn','lCy','lLo','lAr','lArC','lArS','lAge','lRt','lDp','lPr','lPrMin','lPrMax','lRe','lOw','lCt','lDs','lFl','lFlNo','lFlTot','lFc','lFn','lComp','lTxn','lOwn','lBackup','lPin','lAddr'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
    upImgs=[];selTags=[];selAmens=[];
    toast('Listing updated! It will be re-reviewed by admin. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>');
    if(cu&&(cu.role==='broker'||cu.role==='owner'||cu.role==='builder')){
      // On lister.html, re-render inline. On any other page (e.g. SPA homepage
      // reached via ?openPost=1), navigate to /lister so the user lands somewhere
      // useful rather than staying on a page that doesn't show their listings.
      if(document.getElementById('lLst')){
        await renderLister();
      } else {
        window.location.href='/lister';
      }
    }
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
    ['lTl','lBn','lCy','lLo','lAr','lArC','lArS','lAge','lRt','lDp','lPr','lPrMin','lPrMax','lRe','lOw','lCt','lDs','lFl','lFlNo','lFlTot','lFc','lFn','lComp','lTxn','lOwn','lBackup','lPin','lAddr'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});var lBdSel=document.getElementById('lBd');if(lBdSel)lBdSel.selectedIndex=1;var lBtSel=document.getElementById('lBt');if(lBtSel)lBtSel.selectedIndex=0;
    upImgs=[];selTags=[];selAmens=[];
    toast('Submitted! Admin reviews within 24 hrs. <svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg>');
    if(cu&&(cu.role==='broker'||cu.role==='owner'||cu.role==='builder')){
      if(document.getElementById('lLst')){
        await renderLister();
      } else {
        window.location.href='/lister';
      }
    }
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
    // Use real /listing?id=N navigation rather than the in-page modal — works
    // identically on the SPA and on dashboard.html (Session 3 of MPA refactor).
    var listingHref='/listing?id='+i.listingId;
    var clickHandler=listingExists?'onclick="window.location.href=\''+listingHref+'\'" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'var(--wh)\'"':'';
    var titleHTML=listingExists
      ?'<strong style="color:var(--t);">'+esc(i.listingTitle)+' &#8599;</strong>'
      :'<strong style="color:var(--mu);text-decoration:line-through;">'+esc(i.listingTitle)+'</strong> <span style="font-size:10px;color:var(--red);font-weight:700;">(REMOVED)</span>';
    var actionBtn=listingExists
      ?'<a class="btn btn-sm btn-o" href="'+listingHref+'" onclick="event.stopPropagation()" style="text-decoration:none;">View Property</a>'
      :'<span style="font-size:11px;color:var(--mu);padding:6px 10px;">No longer listed</span>';
    return '<div class="li" style="'+rowStyle+'" '+clickHandler+'>'
      +'<div style="font-size:28px;">'+icon+'</div>'
      +'<div class="li-in">'+titleHTML
      +'<span>'+esc(i.listingCity||'')+' &middot; '+typeLbl+' &middot; Sent '+i.sentAt+'</span>'
      +'</div>'
      +'<span class="pill '+pillClass+'">'+typeLbl+'</span>'
      +'<div class="li-ac" onclick="event.stopPropagation()">'+actionBtn+'</div>'
      +'</div>';
  }).join(''):'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No inquiries yet. <a href="/browse?lf=rent" style="color:var(--t);font-weight:700;text-decoration:none;">Browse rentals</a> or <a href="/browse?lf=buy" style="color:var(--g);font-weight:700;text-decoration:none;">properties for sale</a> to get started.</div>';
  var dsav=document.getElementById('dSav');
  if(dsav)dsav.innerHTML=saved.length?'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:22px 0 12px;">Saved Properties</h2><div class="g3">'+saved.map(pCard).join('')+'</div>':'';
}

// ══ LISTER ══
// Lister filter + search helpers
function setListerFilter(filter){
  // Clicking the same filter clears it
  if(_listerFilter===filter&&filter!=='all')_listerFilter='all';
  else _listerFilter=filter;
  // Auto-switch to the right tab — leads stat goes to leads tab,
  // any other stat (including "Listed"/all) goes to properties tab.
  if(_listerFilter==='leads')setListerTab('leads');
  else setListerTab('properties');
  renderLister();
}
var _listerSearchT=null;
function onListerSearch(v){
  _listerSearch=(v||'').trim();
  // Debounce so we don't re-render on every keystroke
  clearTimeout(_listerSearchT);
  _listerSearchT=setTimeout(function(){renderLister();},220);
}
function clearListerSearch(){
  _listerSearch='';
  var el=document.getElementById('lSrch');if(el)el.value='';
  renderLister();
}

// State for lister filters
var _listerFilter='all'; // 'all' | 'approved' | 'pending' | 'rejected' | 'leads'
var _listerSearch='';
var _listerTab='overview'; // 'overview' | 'properties' | 'leads'
// Leads-table filter state
var _leadFilters={from:'',to:'',propId:'',type:'',budgetMin:0,budgetMax:0};

// ── Tab switching for lister portal ──
function setListerTab(name){
  _listerTab=name||'overview';
  // Scope: on the SPA the lister page is #pg-lister; on lister.html the tabs
  // live at the document root. Try both — works on whichever we're on.
  var scope=document.getElementById('pg-lister')||document;
  scope.querySelectorAll('.ltab').forEach(function(t){
    if(t.dataset.ltab!==undefined)t.classList.toggle('on',t.dataset.ltab===_listerTab);
  });
  scope.querySelectorAll('.ltab-pane').forEach(function(p){
    if(p.dataset.lpane!==undefined)p.classList.toggle('on',p.dataset.lpane===_listerTab);
  });
  // Render the right pane on demand (fast: data already in cache)
  if(_listerTab==='leads')renderListerLeads();
}

// Show rejection reason modal — clean, non-alarming professional note
function showRejectionReason(lid){
  gL().then(function(all){
    var l=all.find(function(x){return x.id===lid;});
    if(!l)return;
    var reason=l.rejectionReason||'No reason was provided. Please contact support if you believe this was an error.';
    var html='<div style="padding:8px 28px 24px;font-family:\'DM Sans\',sans-serif;">'
      +'<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:10px;padding:14px;background:#fff5f5;border:1px solid #ffd0d0;border-left:4px solid var(--red);border-radius:10px;">'
        +'<div style="width:32px;height:32px;border-radius:50%;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-flag"/></svg></div>'
        +'<div style="flex:1;">'
          +'<div style="font-size:13px;font-weight:700;color:#7a2222;margin-bottom:2px;">Listing not approved</div>'
          +'<div style="font-size:12px;color:#5a3a3a;line-height:1.5;">A reviewer flagged your listing &mdash; the reason is below. Once you address the concern, click "Edit &amp; Resubmit" and it will go back into the queue.</div>'
        +'</div>'
      +'</div>'
      +'<div style="background:var(--cr);border:1px solid var(--sa);border-radius:10px;padding:16px;margin-bottom:10px;">'
        +'<div style="font-size:10.5px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;">Reviewer note</div>'
        +'<div style="font-size:13.5px;line-height:1.65;color:var(--ink);font-style:italic;">"'+esc(reason)+'"</div>'
      +'</div>'
      +'<div style="display:flex;gap:8px;flex-wrap:wrap;">'
        +'<button onclick="closeM(\'rejReasonM\');editListing('+lid+');" class="rej-action-btn"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-edit"/></svg> Edit &amp; Resubmit</button>'
        +'<button onclick="closeM(\'rejReasonM\')" class="rej-action-btn rej-secondary" style="border-color:var(--sa);color:var(--mu);">Close</button>'
      +'</div>'
      +'</div>';
    var existing=document.getElementById('rejReasonM');
    if(existing)existing.remove();
    var m=document.createElement('div');
    m.id='rejReasonM';m.className='mo';
    m.onclick=function(e){if(e.target===m)closeM('rejReasonM');};
    m.innerHTML='<div class="mb" style="max-width:520px;"><div class="mh"><h2 style="font-family:\'Playfair Display\',serif;font-size:20px;">Why was this rejected?</h2><button class="mc" onclick="closeM(\'rejReasonM\')" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button></div>'+html+'</div>';
    document.body.appendChild(m);
    openM('rejReasonM');
  });
}

// ── LEADS TABLE ──
var _builderTotals=null;

// Render the builder-specific insights pane shown on the Overview tab.
// Includes: inventory pipeline (status × counts), sales velocity, BHK demand
// breakdown from leads, possession timeline, and per-project performance table.
function _renderBuilderInsights(myL,allInqs,totals){
  var projects=myL.filter(function(l){return l.isProject||l.lf==='project';});
  if(!projects.length){
    return '<div style="background:var(--wh);border-radius:14px;padding:32px;text-align:center;color:var(--mu);border:1px solid var(--lister-border);box-shadow:var(--lister-shadow-sm);margin-top:8px;font-family:\'DM Sans\',sans-serif;">'
      +'<div style="font-size:36px;color:var(--mu);margin-bottom:6px;"><svg class="icn icn-xl" aria-hidden="true"><use href="#i-building"/></svg></div>'
      +'<div style="font-family:\'Playfair Display\',serif;font-size:18px;color:var(--ink);margin-bottom:4px;">No projects yet</div>'
      +'<div style="font-size:13px;line-height:1.55;">Click <strong style="color:var(--t);">+ New Listing</strong> to create your first project. Insights will appear here once your inventory is set up.</div>'
      +'</div>';
  }
  var fmtCr=totals.fmtCr;

  // ── Section 1: Sales Velocity (units booked in last 30/90 days) ──
  // Approximation: count leads as a proxy for booking interest. Real bookings
  // would need a sale_event table; for now we count distinct lead listings recently.
  var now=Date.now();
  var d30=now-30*86400*1000,d90=now-90*86400*1000;
  var leadsByListing={},leadsLast30={},leadsLast90={};
  allInqs.forEach(function(i){
    if(!i.listingId)return;
    leadsByListing[i.listingId]=(leadsByListing[i.listingId]||0)+1;
    var t=i.sentAt?new Date(i.sentAt).getTime():0;
    if(t>=d30)leadsLast30[i.listingId]=(leadsLast30[i.listingId]||0)+1;
    if(t>=d90)leadsLast90[i.listingId]=(leadsLast90[i.listingId]||0)+1;
  });
  var leads30Total=projects.reduce(function(s,p){return s+(leadsLast30[p.id]||0);},0);
  var leads90Total=projects.reduce(function(s,p){return s+(leadsLast90[p.id]||0);},0);
  var leadsAllTotal=projects.reduce(function(s,p){return s+(leadsByListing[p.id]||0);},0);

  // ── Section 2: BHK Demand from leads ──
  // For each project, look at its unit configurations and weight by lead count.
  var bhkLeadCount={};
  projects.forEach(function(p){
    var leads=leadsByListing[p.id]||0;
    if(!leads||!p.unitTypes)return;
    // Distribute proportionally across BHK types (approximation)
    var totalUnits=p.unitTypes.reduce(function(s,u){return s+(Number(u.units_total)||0);},0);
    p.unitTypes.forEach(function(u){
      var weight=totalUnits>0?(Number(u.units_total||0)/totalUnits):(1/p.unitTypes.length);
      var bhk=u.bhk||'Other';
      bhkLeadCount[bhk]=(bhkLeadCount[bhk]||0)+leads*weight;
    });
  });
  var bhkSorted=Object.keys(bhkLeadCount).sort(function(a,b){return bhkLeadCount[b]-bhkLeadCount[a];});
  var bhkMax=bhkSorted.length?bhkLeadCount[bhkSorted[0]]:1;

  // ── Section 3: Possession timeline ──
  var nowYear=new Date().getFullYear();
  var possSlots={'Ready':0,'2026':0,'2027':0,'2028+':0};
  projects.forEach(function(p){
    if(p.projectStatus==='Ready to Move'||p.projectStatus==='Completed'){possSlots['Ready']++;return;}
    if(!p.completion){possSlots['Ready']++;return;}
    var d=new Date(p.completion);if(isNaN(d)){possSlots['Ready']++;return;}
    var y=d.getFullYear();
    if(y<=2026)possSlots['2026']++;
    else if(y===2027)possSlots['2027']++;
    else possSlots['2028+']++;
  });

  // ── Section 4: Project status breakdown ──
  var statusSlots={'New Launch':0,'Under Construction':0,'Ready to Move':0,'Completed':0};
  projects.forEach(function(p){
    var st=p.projectStatus||'New Launch';
    if(statusSlots[st]==null)statusSlots[st]=0;
    statusSlots[st]++;
  });

  // ── Section 5: Per-project performance table ──
  var projTable=projects.map(function(p){
    var inv=0,avail=0;
    (p.unitTypes||[]).forEach(function(u){
      inv+=Number(u.units_total||0);
      avail+=Number(u.units_available||0);
    });
    var sold=Math.max(0,inv-avail);
    var pct=inv>0?Math.round(sold/inv*100):0;
    var leadsP=leadsByListing[p.id]||0;
    var convRate=leadsP>0?Math.round(sold/leadsP*100):0;
    var statusClass=p.status==='approved'?'gr':p.status==='pending'?'wa':'rj';
    var statusLbl=p.status==='approved'?'Live':p.status==='pending'?'Pending':p.status==='rejected'?'Rejected':p.status;
    return '<tr>'
      +'<td><strong>'+esc(p.title||'Untitled')+'</strong><div style="font-size:11px;color:var(--mu);">'+esc((p.loc?p.loc+', ':'')+p.city)+'</div></td>'
      +'<td><span class="b-pp-pill b-pp-'+statusClass+'">'+statusLbl+'</span></td>'
      +'<td><div class="b-pp-prog"><div class="b-pp-prog-bar" style="width:'+pct+'%;"></div></div><div class="b-pp-prog-lbl">'+sold+' / '+inv+' sold ('+pct+'%)</div></td>'
      +'<td style="text-align:center;font-weight:700;color:var(--t);">'+leadsP+'</td>'
      +'<td style="text-align:center;font-weight:700;color:'+(convRate>0?'var(--gr)':'var(--mu)')+';">'+convRate+'%</td>'
    +'</tr>';
  }).join('');

  return ''
    // ── Inventory value header card ──
    +'<div class="b-insight-card b-insight-hero">'
      +'<div class="b-insight-hd"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-key"/></svg> Inventory Value</div>'
      +'<div class="b-insight-grid-3">'
        +'<div class="b-insight-stat">'
          +'<div class="b-insight-stat-lbl">Total Listed Value</div>'
          +'<div class="b-insight-stat-val" style="color:var(--t);">'+fmtCr(totals.inventoryValueMin)+(totals.inventoryValueMax>totals.inventoryValueMin?' &ndash; '+fmtCr(totals.inventoryValueMax):'')+'</div>'
          +'<div class="b-insight-stat-sub">Across '+projects.length+' project'+(projects.length>1?'s':'')+' &middot; '+totals.totalInventory+' units</div>'
        +'</div>'
        +'<div class="b-insight-stat">'
          +'<div class="b-insight-stat-lbl">Booked Value (est.)</div>'
          +'<div class="b-insight-stat-val" style="color:#c58600;">'+fmtCr(totals.bookedValueEstimate)+'</div>'
          +'<div class="b-insight-stat-sub">'+totals.totalSold+' units booked &middot; '+totals.sellThroughPct+'% sell-through</div>'
        +'</div>'
        +'<div class="b-insight-stat">'
          +'<div class="b-insight-stat-lbl">Active Demand</div>'
          +'<div class="b-insight-stat-val" style="color:var(--gr);">'+leads30Total+'</div>'
          +'<div class="b-insight-stat-sub">leads in last 30 days &middot; '+leadsAllTotal+' all-time</div>'
        +'</div>'
      +'</div>'
    +'</div>'

    // ── Two-up: Project Status + Possession Timeline ──
    +'<div class="b-insight-row">'
      +'<div class="b-insight-card">'
        +'<div class="b-insight-hd"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-building"/></svg> Project Pipeline</div>'
        +'<div class="b-pipe">'
          +Object.keys(statusSlots).map(function(k){
            var c=statusSlots[k];
            var color=k==='New Launch'?'#c58600':k==='Under Construction'?'#9a7300':k==='Ready to Move'?'var(--gr)':'var(--mu)';
            return '<div class="b-pipe-row"><span class="b-pipe-lbl">'+k+'</span><span class="b-pipe-bar"><span class="b-pipe-fill" style="width:'+(projects.length>0?c/projects.length*100:0)+'%;background:'+color+';"></span></span><span class="b-pipe-cnt">'+c+'</span></div>';
          }).join('')
        +'</div>'
      +'</div>'
      +'<div class="b-insight-card">'
        +'<div class="b-insight-hd"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg> Possession Timeline</div>'
        +'<div class="b-pipe">'
          +Object.keys(possSlots).map(function(k){
            var c=possSlots[k];
            var lbl=k==='Ready'?'Ready / Completed':'By '+k;
            return '<div class="b-pipe-row"><span class="b-pipe-lbl">'+lbl+'</span><span class="b-pipe-bar"><span class="b-pipe-fill" style="width:'+(projects.length>0?c/projects.length*100:0)+'%;background:var(--t);"></span></span><span class="b-pipe-cnt">'+c+'</span></div>';
          }).join('')
        +'</div>'
      +'</div>'
    +'</div>'

    // ── BHK Demand from leads ──
    +(bhkSorted.length?'<div class="b-insight-card">'
      +'<div class="b-insight-hd"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-search"/></svg> BHK Demand <span style="font-weight:500;color:var(--mu);font-size:11px;text-transform:none;letter-spacing:0;">(weighted by leads)</span></div>'
      +'<div class="b-pipe">'
        +bhkSorted.map(function(b){
          var c=Math.round(bhkLeadCount[b]);
          var pct=Math.round(bhkLeadCount[b]/bhkMax*100);
          return '<div class="b-pipe-row"><span class="b-pipe-lbl">'+esc(b)+'</span><span class="b-pipe-bar"><span class="b-pipe-fill" style="width:'+pct+'%;background:linear-gradient(90deg,var(--t),#daa520);"></span></span><span class="b-pipe-cnt">'+c+'</span></div>';
        }).join('')
      +'</div>'
    +'</div>':'')

    // ── Per-project performance table ──
    +'<div class="b-insight-card">'
      +'<div class="b-insight-hd"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg> Per-Project Performance</div>'
      +'<div style="overflow-x:auto;">'
      +'<table class="b-perf-tbl">'
        +'<thead><tr><th>Project</th><th>Status</th><th>Inventory Progress</th><th>Leads</th><th>Conv. Rate</th></tr></thead>'
        +'<tbody>'+projTable+'</tbody>'
      +'</table></div>'
      +'<div style="font-size:11px;color:var(--mu);margin-top:8px;line-height:1.55;">Conversion rate is units sold per lead — a proxy until direct booking data is integrated.</div>'
    +'</div>';
}

async function renderListerLeads(){
  if(!cu)return;
  var wrap=document.getElementById('lLeadsContainer');
  if(!wrap)return;
  wrap.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading leads…</span></div>';
  // Fetch listings + inquiries
  var allL=await gL();
  var myL=allL.filter(function(l){return l.uid===cu.id;});
  var myLIds=myL.map(function(l){return l.id;});
  var allInq=await gInq();
  var myInq=allInq.filter(function(i){return myLIds.indexOf(i.listingId)>=0;});
  // ── Stage 4: fetch tenant profile access rows for THIS broker ──
  // The tenant_profile_access table has an RLS policy that lets brokers read
  // their own non-revoked access rows. We build a lookup inquiry_id → access
  // metadata so we can show the "View Profile" button + verification badge
  // on each lead row.
  var accessByInquiry={};
  try{
    var {data:accRows,error:accErr}=await sb.from('tenant_profile_access')
      .select('id,inquiry_id,consent_snapshot,view_count,last_viewed_at')
      .eq('broker_user_id',cu.id)
      .is('revoked_at',null);
    if(!accErr&&accRows){
      accRows.forEach(function(a){accessByInquiry[a.inquiry_id]=a;});
    }
  }catch(e){console.warn('Tenant profile access fetch failed:',e&&e.message);}
  // ── Stage 6: fetch full-share requests for THIS broker ──
  // We pick the latest request per inquiry. If the broker requested twice
  // (denial → re-request), we want the most recent state shown.
  var fullShareByInquiry={};
  try{
    var {data:fsRows,error:fsErr}=await sb.from('tenant_full_share_requests')
      .select('id,inquiry_id,status,requested_docs,approved_docs,denial_reason,requested_at,responded_at,view_count,download_count,last_viewed_at,last_downloaded_at')
      .eq('broker_user_id',cu.id)
      .order('requested_at',{ascending:false});
    if(!fsErr&&fsRows){
      // Latest request wins (rows already sorted desc)
      fsRows.forEach(function(r){
        if(!fullShareByInquiry[r.inquiry_id])fullShareByInquiry[r.inquiry_id]=r;
      });
    }
  }catch(e){console.warn('Full-share request fetch failed:',e&&e.message);}
  // Apply filters
  var f=_leadFilters;
  var filtered=myInq.filter(function(i){
    if(f.from){
      var d=(i.sentAt||'').slice(0,10);
      if(d<f.from)return false;
    }
    if(f.to){
      var d2=(i.sentAt||'').slice(0,10);
      if(d2>f.to)return false;
    }
    if(f.propId&&Number(i.listingId)!==Number(f.propId))return false;
    if(f.type){
      var lst=myL.find(function(x){return x.id===i.listingId;});
      if(!lst||lst.type!==f.type)return false;
    }
    if(f.budgetMin||f.budgetMax){
      var lst2=myL.find(function(x){return x.id===i.listingId;});
      if(!lst2)return false;
      var p=lst2.lf==='rent'?lst2.rent:(lst2.price||lst2.priceMin||0);
      if(f.budgetMin&&p<f.budgetMin)return false;
      if(f.budgetMax&&p>f.budgetMax)return false;
    }
    return true;
  });
  // Sort newest first
  filtered.sort(function(a,b){return (b.createdAt||'').localeCompare(a.createdAt||'');});
  // Build property dropdown options
  var propOpts='<option value="">All properties</option>'+myL.map(function(l){
    return '<option value="'+l.id+'"'+(String(f.propId)===String(l.id)?' selected':'')+'>'+esc(l.title.length>40?l.title.slice(0,40)+'…':l.title)+'</option>';
  }).join('');
  // Property type options derived from actual listings
  var typeSet={};myL.forEach(function(l){if(l.type)typeSet[l.type]=true;});
  var typeOpts='<option value="">All types</option>'+Object.keys(typeSet).sort().map(function(t){
    return '<option value="'+esc(t)+'"'+(f.type===t?' selected':'')+'>'+esc(t)+'</option>';
  }).join('');
  // Toolbar
  var toolbar='<div class="leads-toolbar">'
    +'<div class="filt-group"><label>From date</label><input type="date" id="ldf" value="'+esc(f.from)+'" onchange="updateLeadFilter(\'from\',this.value)"/></div>'
    +'<div class="filt-group"><label>To date</label><input type="date" id="ldt" value="'+esc(f.to)+'" onchange="updateLeadFilter(\'to\',this.value)"/></div>'
    +'<div class="filt-group"><label>Property</label><select id="ldp" onchange="updateLeadFilter(\'propId\',this.value)">'+propOpts+'</select></div>'
    +'<div class="filt-group"><label>Type</label><select id="ldty" onchange="updateLeadFilter(\'type\',this.value)">'+typeOpts+'</select></div>'
    +'<div class="filt-group"><label>Budget min (₹)</label><input type="number" id="ldbmin" placeholder="0" value="'+(f.budgetMin||'')+'" onchange="updateLeadFilter(\'budgetMin\',Number(this.value)||0)" style="width:130px;"/></div>'
    +'<div class="filt-group"><label>Budget max (₹)</label><input type="number" id="ldbmax" placeholder="No limit" value="'+(f.budgetMax||'')+'" onchange="updateLeadFilter(\'budgetMax\',Number(this.value)||0)" style="width:130px;"/></div>'
    +(Object.keys(f).some(function(k){return f[k];})?'<button class="leads-export-btn" onclick="clearLeadFilters()" style="border-color:var(--sa);color:var(--mu);">Clear filters</button>':'')
    +'<button class="leads-export-btn" onclick="exportFilteredLeadsCSV()"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Export CSV</button>'
    +'</div>';
  // Stats line
  var totalAcross=myInq.length;
  var statsLine='<div class="leads-stats">'
    +'<span><strong>'+filtered.length+'</strong> showing</span>'
    +'<span><strong>'+totalAcross+'</strong> total leads</span>'
    +'<span><strong>'+myL.length+'</strong> properties</span>'
    +'</div>';
  // Empty state
  if(!filtered.length){
    var emptyMsg=totalAcross===0
      ?'No leads yet. Once buyers/renters message you about your listings, they\'ll appear here.'
      :'No leads match your filters. <a href="#" onclick="event.preventDefault();clearLeadFilters();" style="color:var(--t);font-weight:700;">Clear filters</a> to see all '+totalAcross+'.';
    wrap.innerHTML='<h2 style="font-family:\'Playfair Display\',serif;font-size:20px;font-weight:700;margin-bottom:14px;letter-spacing:-.2px;">Lead Inbox</h2>'
      +toolbar
      +'<div class="leads-table-wrap">'
        +statsLine
        +'<div class="leads-empty"><svg class="icn icn-xl" aria-hidden="true"><use href="#i-mail"/></svg><div>'+emptyMsg+'</div></div>'
      +'</div>';
    return;
  }
  // Table
  var rows=filtered.map(function(i){
    var lst=myL.find(function(x){return x.id===i.listingId;});
    var lstTitle=lst?lst.title:'(deleted listing)';
    var lstMeta=lst?(lst.beds+' BHK · '+esc(lst.type)+' · '+esc(lst.city)):'';
    var lstPriceLabel=lst?(lst.lf==='rent'?fmtRent(lst.rent)+'/mo':fmtPrice(lst.price||lst.priceMin)):'';
    var dateDisp=i.sentAt?new Date(i.sentAt).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'';
    var phoneRaw=i.phone||'';
    var phoneDigits=phoneRaw.replace(/\D/g,'');
    var waNum=phoneDigits.length===10?'91'+phoneDigits:phoneDigits;
    var waMsg=encodeURIComponent('Hi '+(i.name||'')+', thanks for your interest in '+(lstTitle||'my property')+' on Ek Makān. Happy to share more details and arrange a visit. — '+(cu.name||cu.email));
    var waLink=phoneDigits.length>=10?'https://wa.me/'+waNum+'?text='+waMsg:'';
    // Tenant profile access (Stage 4): if this inquiry has a non-revoked
    // access row for this broker, render the verification badge + a button.
    var access=accessByInquiry[i.id];
    var verifBadge='';
    if(access){
      var snap=access.consent_snapshot||{};
      var lvl=snap.verification_level||'none';
      var colors={bronze:'#cd7f32',silver:'#999',gold:'#daa520',platinum:'#9b59b6'};
      var labels={bronze:'Bronze',silver:'Silver',gold:'Gold',platinum:'Platinum'};
      if(colors[lvl]){
        verifBadge='<span style="display:inline-block;background:'+colors[lvl]+';color:#fff;padding:1px 8px;border-radius:10px;font-size:10px;font-weight:700;margin-left:6px;vertical-align:1px;">✓ '+labels[lvl]+'</span>';
      }
    }
    var actions='<div class="lead-actions">';
    if(access){
      actions+='<button class="lead-act-btn" onclick="viewTenantProfile('+access.id+')" style="background:#f3e8d4;color:#7c5a1a;border-color:#daa520;" title="View shared tenant profile">'
        +'<svg class="icn icn-sm" aria-hidden="true"><use href="#i-shield-check"/></svg>'
        +'View Profile</button>';
      // ── Stage 6: full-share button (state-aware) ──
      // The button only shows when there's an active redacted access row,
      // because the request RPC requires it as a prerequisite.
      var fs=fullShareByInquiry[i.id];
      if(!fs){
        // No request yet — show "Request Full Documents"
        actions+='<button class="lead-act-btn" onclick="openFullShareRequestModal('+access.id+','+i.id+')" style="background:#e8f4ff;color:#1a5a8a;border-color:#7ab8e0;" title="Request full document access">'
          +'<svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg>'
          +'Request Documents</button>';
      } else if(fs.status==='pending'){
        actions+='<span class="lead-act-btn" style="background:#fff3cd;color:#856404;border-color:#daa520;cursor:default;" title="Tenant has not responded yet">'
          +'<svg class="icn icn-sm" aria-hidden="true"><use href="#i-clock"/></svg>'
          +'Awaiting tenant</span>';
      } else if(fs.status==='approved'){
        actions+='<button class="lead-act-btn" onclick="openFullShareViewer('+fs.id+')" style="background:#d4edda;color:#155724;border-color:#28a745;" title="View / download shared documents">'
          +'<svg class="icn icn-sm" aria-hidden="true"><use href="#i-shield-check"/></svg>'
          +'View Documents</button>';
      } else if(fs.status==='denied'){
        actions+='<button class="lead-act-btn" onclick="openFullShareRequestModal('+access.id+','+i.id+')" style="background:#fde2e2;color:#7c1a1a;border-color:#d9534f;" title="Tenant declined the previous request — try again">'
          +'<svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg>'
          +'Request again</button>';
      } else if(fs.status==='revoked'){
        actions+='<button class="lead-act-btn" onclick="openFullShareRequestModal('+access.id+','+i.id+')" style="background:#fde2e2;color:#7c1a1a;border-color:#d9534f;" title="Tenant revoked previous access — request again">'
          +'<svg class="icn icn-sm" aria-hidden="true"><use href="#i-mail"/></svg>'
          +'Re-request</button>';
      }
    }
    if(waLink){
      actions+='<a class="lead-act-btn lead-act-wa" href="'+waLink+'" target="_blank" rel="noopener" title="Message via WhatsApp">'
        +'<svg class="icn" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>'
        +'WhatsApp</a>';
      actions+='<a class="lead-act-btn lead-act-call" href="tel:'+esc(phoneRaw)+'" title="Call">'
        +'<svg class="icn" aria-hidden="true"><use href="#i-phone"/></svg>'
        +'Call</a>';
    }
    if(i.email){
      actions+='<a class="lead-act-btn lead-act-mail" href="mailto:'+esc(i.email)+'?subject='+encodeURIComponent('Re: '+lstTitle)+'" title="Email">'
        +'<svg class="icn" aria-hidden="true"><use href="#i-mail"/></svg>'
        +'Email</a>';
    }
    actions+='</div>';
    return '<tr>'
      +'<td style="white-space:nowrap;color:var(--mu);font-size:11.5px;">'+dateDisp+'</td>'
      +'<td><div class="lead-name">'+esc(i.name||'(no name)')+verifBadge+'</div>'
        +(phoneRaw?'<div class="lead-meta"><a href="tel:'+esc(phoneRaw)+'" style="color:var(--mu);text-decoration:none;">'+esc(phoneRaw)+'</a></div>':'')
        +(i.email?'<div class="lead-meta">'+esc(i.email)+'</div>':'')
      +'</td>'
      +'<td><div style="font-size:12.5px;font-weight:600;color:var(--ink);max-width:240px;line-height:1.4;">'+esc(lstTitle)+'</div>'
        +(lstMeta?'<div class="lead-meta">'+lstMeta+'</div>':'')
        +(lstPriceLabel?'<div class="lead-meta" style="color:var(--t);font-weight:700;">'+lstPriceLabel+'</div>':'')
      +'</td>'
      +'<td><div class="lead-msg">'+(i.message?esc(i.message):'<span style="color:var(--mu);font-style:italic;">No message</span>')+'</div></td>'
      +'<td>'+actions+'</td>'
      +'</tr>';
  }).join('');
  wrap.innerHTML='<h2 style="font-family:\'Playfair Display\',serif;font-size:20px;font-weight:700;margin-bottom:14px;letter-spacing:-.2px;">Lead Inbox</h2>'
    +toolbar
    +'<div class="leads-table-wrap">'
      +statsLine
      +'<div style="overflow-x:auto;">'
        +'<table class="leads-table">'
          +'<thead><tr>'
            +'<th>Date</th>'
            +'<th>Lead</th>'
            +'<th>Property</th>'
            +'<th>Message</th>'
            +'<th>Contact</th>'
          +'</tr></thead>'
          +'<tbody>'+rows+'</tbody>'
        +'</table>'
      +'</div>'
    +'</div>';
}

function updateLeadFilter(key,val){_leadFilters[key]=val;renderListerLeads();}
function clearLeadFilters(){_leadFilters={from:'',to:'',propId:'',type:'',budgetMin:0,budgetMax:0};renderListerLeads();}

// ── STAGE 4: View shared tenant profile (broker-side) ──
// Called from the Leads tab "View Profile" button. Calls the SECURITY DEFINER
// RPC get_redacted_tenant_profile, which:
//   1. Verifies the caller is the broker named in the access row + not revoked
//   2. Returns the redacted JSON (no religion / diet / exact income / full PAN
//      / document files / landlord phones — only safe fields and bands)
//   3. Increments view_count + writes an audit log entry
//
// Brokers have NO direct SELECT permission on tenant_profiles — this RPC is
// the only path. If the tenant has revoked, the RPC raises an exception which
// we surface to the broker as "Access has been revoked".
async function viewTenantProfile(accessId){
  // Show a quick loading modal so the broker knows something's happening
  var existingModal=document.getElementById('tenantViewM');
  if(existingModal)existingModal.remove();
  var loader=document.createElement('div');
  loader.id='tenantViewM';
  loader.className='mo open';
  loader.style.cssText='';
  loader.innerHTML='<div class="mb" style="max-width:560px;"><div style="padding:40px;text-align:center;color:var(--mu);"><div class="mk-spinner"><span class="mk-spinner-text">Loading tenant profile…</span></div></div></div>';
  document.body.appendChild(loader);

  var rpc;
  try{
    rpc=await sb.rpc('get_redacted_tenant_profile',{p_access_id:accessId});
  }catch(e){
    loader.remove();
    toast('Could not load profile: '+(e&&e.message||'unknown error'),'e');
    return;
  }
  if(rpc.error){
    loader.remove();
    var msg=rpc.error.message||'';
    // The RPC raises 42501 (insufficient_privilege) when access has been
    // revoked or when the caller isn't the broker. Surface a clean message.
    if(msg.indexOf('Access denied')>=0||rpc.error.code==='42501'){
      toast('Access to this tenant\'s profile has been revoked.','e');
    } else {
      toast('Could not load profile: '+msg,'e');
    }
    return;
  }
  var p=rpc.data||{};
  if(p.error==='no_profile'){
    loader.remove();
    toast('This tenant has not filled their profile yet.','e');
    return;
  }
  // Render — same shape as the consent modal preview but framed for the broker.
  var colors={none:'#999',bronze:'#cd7f32',silver:'#999',gold:'#daa520',platinum:'#9b59b6'};
  var labels={none:'Not Verified',bronze:'Bronze',silver:'Silver',gold:'Gold',platinum:'Platinum'};
  var lvl=p.verification_level||'none';
  var verifBadge='<span style="display:inline-flex;align-items:center;gap:6px;background:'+(colors[lvl]||'#999')+';color:#fff;padding:4px 10px;border-radius:14px;font-size:12px;font-weight:700;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-check"/></svg>'+(labels[lvl]||'Not Verified')+'</span>';
  function row(label,value){
    if(value==null||value==='')return '';
    if(value===true)value='Yes';
    if(value===false)value='No';
    return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--sa);"><span style="color:var(--mu);font-size:13px;">'+esc(String(label))+'</span><span style="font-weight:600;font-size:13px;">'+esc(String(value))+'</span></div>';
  }
  var maritalLabels={single:'Single',married:'Married',divorced:'Divorced',widowed:'Widowed',prefer_not:'Prefer not to say'};
  var empTypeLabels={full_time:'Full-time',part_time:'Part-time',contract:'Contract',self_employed:'Self-employed',student:'Student',unemployed:'Unemployed'};
  var basicRows=row('Occupants',p.num_occupants)+row('Relationship',p.occupants_relationship)+row('Marital status',maritalLabels[p.marital_status]||p.marital_status)+row('Has pets',p.has_pets)+(p.has_pets&&p.pet_details?row('Pet details',p.pet_details):'')+row('Smokes',p.smokes);
  var empRows=row('Employer',p.employer_name)+row('Role',p.role_title)+row('Employment type',empTypeLabels[p.employment_type]||p.employment_type)+row('Monthly income (band)',p.monthly_income_band)+row('Joined on',p.joined_date);
  var idRows=row('PAN (masked)',p.pan_masked)+row('PAN verified',p.pan_verified);
  var docs=p.docs||{};
  var docRows=row('Employment letter verified',docs.employment_letter_verified)+row('Salary slips verified',docs.salary_slips_verified)+row('ITR verified',docs.itr_verified);
  var refs=p.landlord_refs||{};
  var refRows='';
  if(refs.total>0){
    refRows=row('Total references',refs.total)+row('Verified',refs.verified);
    if(refs.positive)refRows+=row('Positive outcomes',refs.positive);
    if(refs.mixed)refRows+=row('Mixed outcomes',refs.mixed);
    if(refs.negative)refRows+=row('Negative outcomes',refs.negative);
  }
  var introRow=p.self_intro?'<div style="margin-top:10px;font-size:13px;background:var(--cr);padding:10px;border-radius:8px;"><strong>About them:</strong><br/>'+esc(p.self_intro)+'</div>':'';
  var freshness=p.profile_updated_at?'<p style="font-size:11px;color:var(--mu);margin-top:14px;">Profile last updated '+new Date(p.profile_updated_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})+(p.admin_verified_at?' · admin reviewed '+new Date(p.admin_verified_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'')+'</p>':'';

  loader.innerHTML='<div class="mb" style="max-width:560px;max-height:90vh;overflow-y:auto;">'
    +'<div class="mh"><div><h2 style="font-family:Playfair Display,serif;font-size:20px;">Tenant Profile</h2><p style="font-size:12px;color:var(--mu);margin-top:2px;">Shared via inquiry &middot; Redacted view</p></div><button class="mc" onclick="closeTenantProfileView()" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button></div>'
    +'<div style="background:var(--cr);padding:14px;border-radius:10px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;"><strong style="font-size:13px;">Verification:</strong>'+verifBadge+'</div>'
    +(basicRows?'<details open style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Basic Information</summary><div>'+basicRows+'</div></details>':'')
    +(empRows?'<details open style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Employment</summary><div>'+empRows+'</div></details>':'')
    +(idRows?'<details style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Identity</summary><div>'+idRows+'</div></details>':'')
    +(docRows?'<details style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Documents</summary><div>'+docRows+'</div></details>':'')
    +(refRows?'<details style="margin-bottom:10px;"><summary style="cursor:pointer;font-weight:700;font-size:13px;padding:8px 0;">Landlord References</summary><div>'+refRows+'</div></details>':'')
    +introRow
    +'<div class="al ali" style="margin-top:14px;font-size:12px;line-height:1.5;"><strong><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> Privacy:</strong> Income shown as a band (exact figure hidden). PAN masked. Document files and landlord phone numbers are admin-only — you see only verification status. Religion, diet, and alcohol preference are <strong>never</strong> shared. The tenant can revoke your access at any time.</div>'
    +'<div style="text-align:right;margin-top:14px;"><button class="btn btn-bl btn-sm" onclick="closeTenantProfileView()">Close</button></div>'
    +'</div>';
  loader.onclick=function(e){if(e.target===loader)closeTenantProfileView();};
}

function closeTenantProfileView(){
  var m=document.getElementById('tenantViewM');
  if(m)m.remove();
}

// ══ STAGE 6: BROKER FULL-DOCUMENT REQUEST FLOW ══
// Three pieces here:
//   • openFullShareRequestModal — broker picks which docs to request
//   • openFullShareViewer       — once tenant approved, broker opens docs
//   • adminFullShareDownload    — broker downloads a specific doc (audited)
//
// Document slot keys must match the SQL function's whitelist exactly:
//   pan_doc, employment_letter, salary_slip_1/2/3, itr_y1, itr_y2

var _DOC_SLOT_LABELS={
  pan_doc:           {label:'PAN Card',                short:'PAN'},
  employment_letter: {label:'Employment / Offer Letter',short:'Employment letter'},
  salary_slip_1:     {label:'Latest Salary Slip',       short:'Salary slip 1'},
  salary_slip_2:     {label:'Salary Slip — 2 months ago',short:'Salary slip 2'},
  salary_slip_3:     {label:'Salary Slip — 3 months ago',short:'Salary slip 3'},
  itr_y1:            {label:'ITR — Latest FY',          short:'ITR latest'},
  itr_y2:            {label:'ITR — Previous FY',        short:'ITR previous'}
};
var _DOC_SLOT_ORDER=['pan_doc','employment_letter','salary_slip_1','salary_slip_2','salary_slip_3','itr_y1','itr_y2'];

async function openFullShareRequestModal(accessId,inquiryId){
  // Open a loading state immediately so the broker sees something
  var existing=document.getElementById('fullShareRequestM');if(existing)existing.remove();
  var modal=document.createElement('div');
  modal.id='fullShareRequestM';
  modal.className='mo open';
  modal.innerHTML='<div class="mb" style="max-width:560px;"><div style="padding:40px;text-align:center;color:var(--mu);"><div class="mk-spinner"><span class="mk-spinner-text">Loading tenant profile…</span></div></div></div>';
  document.body.appendChild(modal);

  // Fetch the redacted profile to know which docs the tenant has uploaded.
  // This call also increments the broker's view_count (reasonable — they're
  // engaging with the profile to decide what to ask for).
  var rpc;
  try{rpc=await sb.rpc('get_redacted_tenant_profile',{p_access_id:accessId});}
  catch(e){closeFullShareRequest();toast('Could not load profile: '+(e&&e.message||'unknown'),'e');return;}
  if(rpc.error){closeFullShareRequest();toast('Could not load profile: '+rpc.error.message,'e');return;}
  var prof=rpc.data||{};
  if(prof.error==='no_profile'){closeFullShareRequest();toast('Tenant has not filled their profile yet.','e');return;}

  var avail=prof.doc_availability||{};
  // Build checkbox rows only for docs the tenant has actually uploaded.
  var availableSlots=_DOC_SLOT_ORDER.filter(function(s){return avail[s]&&avail[s].uploaded;});
  if(!availableSlots.length){
    closeFullShareRequest();
    toast('Tenant has not uploaded any documents to request.','e');
    return;
  }
  var checkboxRows=availableSlots.map(function(s){
    var lbl=_DOC_SLOT_LABELS[s].label;
    var verifiedBadge=avail[s].verified
      ? '<span style="background:#d4edda;color:#155724;padding:1px 6px;border-radius:8px;font-size:10px;font-weight:700;margin-left:6px;">✓ Verified</span>'
      : '<span style="background:#fff3cd;color:#856404;padding:1px 6px;border-radius:8px;font-size:10px;font-weight:700;margin-left:6px;">⏳ Pending</span>';
    return '<label style="display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--sa);border-radius:8px;margin-top:8px;cursor:pointer;">'+
      '<input type="checkbox" id="fsq_'+s+'" value="'+s+'" style="width:18px;height:18px;"/>'+
      '<span style="flex:1;font-size:13px;">'+esc(lbl)+verifiedBadge+'</span>'+
    '</label>';
  }).join('');

  modal.innerHTML='<div class="mb" style="max-width:560px;max-height:90vh;overflow-y:auto;">'+
    '<div class="mh">'+
      '<div>'+
        '<h2 style="font-family:Playfair Display,serif;font-size:20px;">Request Full Documents</h2>'+
        '<p style="font-size:12px;color:var(--mu);margin-top:2px;">The tenant must approve before you can view files.</p>'+
      '</div>'+
      '<button class="mc" onclick="closeFullShareRequest()" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
    '</div>'+
    '<div class="al ali" style="margin-bottom:12px;font-size:12px;line-height:1.5;">'+
      '<strong>How this works:</strong> Pick the documents you actually need. The tenant will see your request, choose which to share (they may share fewer than you ask for), and approve or deny. You will be notified of their decision.'+
    '</div>'+
    '<p style="font-size:12px;color:var(--mu);margin-bottom:6px;">Documents the tenant has uploaded:</p>'+
    '<div id="fsqDocList">'+checkboxRows+'</div>'+
    '<div class="fg" style="margin-top:14px;">'+
      '<label class="flbl">Optional message to tenant</label>'+
      '<textarea class="fi" id="fsqMsg" rows="3" maxlength="300" placeholder="e.g. Need these for the lease application — happy to discuss any concerns."></textarea>'+
    '</div>'+
    '<div style="display:flex;gap:8px;margin-top:14px;">'+
      '<button class="btn btn-bl" onclick="submitFullShareRequest('+inquiryId+')" style="flex:1;">Send Request</button>'+
      '<button class="btn btn-o" onclick="closeFullShareRequest()">Cancel</button>'+
    '</div>'+
  '</div>';

  // Click outside closes
  modal.onclick=function(e){if(e.target===modal)closeFullShareRequest();};
}

function closeFullShareRequest(){
  var m=document.getElementById('fullShareRequestM');
  if(m)m.remove();
}

async function submitFullShareRequest(inquiryId){
  var requested=_DOC_SLOT_ORDER.filter(function(s){
    var cb=document.getElementById('fsq_'+s);
    return cb&&cb.checked;
  });
  if(!requested.length){toast('Select at least one document to request.','e');return;}
  var msgEl=document.getElementById('fsqMsg');
  var msg=msgEl?(msgEl.value||'').trim():'';
  // Disable button to prevent double-submit
  var btn=document.querySelector('#fullShareRequestM button.btn-bl');
  if(btn){btn.disabled=true;btn.textContent='Sending…';}
  try{
    var {data,error}=await sb.rpc('request_full_share',{
      p_inquiry_id:inquiryId,
      p_requested_docs:requested,
      p_message:msg||null
    });
    if(error){
      toast('Request failed: '+error.message,'e');
      if(btn){btn.disabled=false;btn.textContent='Send Request';}
      return;
    }
    toast('Request sent — tenant will be notified.');
    closeFullShareRequest();
    // Refresh the leads tab so the button state updates
    if(typeof renderListerLeads==='function')await renderListerLeads();
  }catch(e){
    toast('Request failed: '+(e&&e.message||'unknown'),'e');
    if(btn){btn.disabled=false;btn.textContent='Send Request';}
  }
}

// ── Broker doc viewer (Stage 6D — implemented now since it's small) ──
// Opens a modal listing all approved docs as clickable links. Each click calls
// get_full_share_doc_url, then sb.storage.createSignedUrl to get a 60s URL,
// then opens it. Download button calls mark_full_share_download first.
async function openFullShareViewer(requestId){
  var existing=document.getElementById('fullShareViewerM');if(existing)existing.remove();
  var modal=document.createElement('div');
  modal.id='fullShareViewerM';
  modal.className='mo open';
  modal.innerHTML='<div class="mb" style="max-width:600px;"><div style="padding:40px;text-align:center;color:var(--mu);"><div class="mk-spinner"><span class="mk-spinner-text">Loading shared documents…</span></div></div></div>';
  document.body.appendChild(modal);

  // Fetch the request row to know which docs were approved + the consent snapshot
  var {data:reqRows,error}=await sb.from('tenant_full_share_requests')
    .select('id,tenant_user_id,inquiry_id,listing_id,approved_docs,consent_snapshot,view_count,download_count,last_viewed_at,last_downloaded_at,responded_at,status')
    .eq('id',requestId)
    .limit(1);
  if(error||!reqRows||!reqRows.length){
    closeFullShareViewer();
    toast('Could not load request: '+(error&&error.message||'not found'),'e');
    return;
  }
  var req=reqRows[0];
  if(req.status!=='approved'){
    closeFullShareViewer();
    toast('This request is no longer active.','e');
    return;
  }
  var snap=req.consent_snapshot||{};
  // Build the elevated profile fields panel — exact income, full PAN, employer details
  var elevatedFields=''+
    '<div style="background:var(--cr);padding:12px;border-radius:8px;margin-bottom:14px;font-size:13px;line-height:1.7;">'+
      '<strong>Tenant details (full):</strong><br/>'+
      (snap.pan_number?'PAN: <code style="font-family:monospace;background:var(--wh);padding:1px 5px;border-radius:3px;">'+esc(snap.pan_number)+'</code><br/>':'')+
      (snap.monthly_income?'Monthly income: <strong>₹'+Number(snap.monthly_income).toLocaleString('en-IN')+'</strong><br/>':'')+
      (snap.employer_name?'Employer: '+esc(snap.employer_name):'')+
      (snap.employer_address?' &middot; '+esc(snap.employer_address):'')+(snap.employer_name?'<br/>':'')+
      (snap.role_title?'Role: '+esc(snap.role_title):'')+
      (snap.employment_type?' ('+esc(snap.employment_type)+')':'')+(snap.role_title?'<br/>':'')+
      (snap.joined_date?'Joined: '+esc(snap.joined_date):'')+
    '</div>';

  var docs=(req.approved_docs||[]);
  var docRows=docs.map(function(s){
    var lbl=_DOC_SLOT_LABELS[s]?_DOC_SLOT_LABELS[s].label:s;
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;border:1px solid var(--sa);border-radius:8px;margin-top:8px;flex-wrap:wrap;gap:8px;">'+
      '<strong style="font-size:13px;">'+esc(lbl)+'</strong>'+
      '<div style="display:flex;gap:6px;">'+
        '<button class="btn btn-o btn-sm" onclick="fullShareDocAction('+requestId+',\''+s+'\',\'view\')" style="font-size:11px;">View</button>'+
        '<button class="btn btn-bl btn-sm" onclick="fullShareDocAction('+requestId+',\''+s+'\',\'download\')" style="font-size:11px;">Download</button>'+
      '</div>'+
    '</div>';
  }).join('');

  var meta='Tenant approved on '+(req.responded_at?new Date(req.responded_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'?')+
           ' &middot; viewed '+(req.view_count||0)+' &middot; downloaded '+(req.download_count||0);

  modal.innerHTML='<div class="mb" style="max-width:600px;max-height:90vh;overflow-y:auto;">'+
    '<div class="mh">'+
      '<div>'+
        '<h2 style="font-family:Playfair Display,serif;font-size:20px;">Tenant Documents</h2>'+
        '<p style="font-size:11px;color:var(--mu);margin-top:2px;">'+meta+'</p>'+
      '</div>'+
      '<button class="mc" onclick="closeFullShareViewer()" aria-label="Close"><svg class="icn" aria-hidden="true"><use href="#i-close"/></svg></button>'+
    '</div>'+
    elevatedFields+
    '<div>'+(docRows||'<p style="font-size:13px;color:var(--mu);">No documents in this share.</p>')+'</div>'+
    '<div class="al ali" style="margin-top:14px;font-size:12px;line-height:1.5;">'+
      '<strong><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-shield-check"/></svg> Private:</strong> Each view and download is logged. The tenant can revoke access at any time. Once revoked, you will not be able to view these files even if they are still in your browser tabs.'+
    '</div>'+
  '</div>';

  modal.onclick=function(e){if(e.target===modal)closeFullShareViewer();};
}

function closeFullShareViewer(){
  var m=document.getElementById('fullShareViewerM');
  if(m)m.remove();
}

// Handles both 'view' (open in new tab, audit logged in DB) and 'download'
// (mark_full_share_download first, then open). The signed URL is short-lived.
async function fullShareDocAction(requestId,docSlot,mode){
  // Get the path via the SECURITY DEFINER RPC. This also increments view_count.
  var {data,error}=await sb.rpc('get_full_share_doc_url',{
    p_request_id:requestId,
    p_doc_slot:docSlot
  });
  if(error){
    toast('Could not access document: '+error.message,'e');
    if(error.code==='42501'||(error.message||'').indexOf('Access denied')>=0){
      // Likely revoked — refresh the leads list
      closeFullShareViewer();
      if(typeof renderListerLeads==='function')await renderListerLeads();
    }
    return;
  }
  var path=data&&data.path;
  if(!path){toast('No file path returned.','e');return;}
  // For downloads, also call mark_full_share_download BEFORE generating the URL
  // so the audit log captures intent even if the user cancels the actual download.
  if(mode==='download'){
    try{await sb.rpc('mark_full_share_download',{p_request_id:requestId,p_doc_slot:docSlot});}
    catch(e){console.warn('Download tracking failed:',e&&e.message);}
  }
  // Generate the signed URL — 60 second window, plenty for the browser to load
  var {data:signed,error:sErr}=await sb.storage.from('tenant-docs').createSignedUrl(path,60);
  if(sErr||!signed||!signed.signedUrl){
    toast('Could not generate file URL: '+((sErr&&sErr.message)||'unknown'),'e');
    return;
  }
  window.open(signed.signedUrl,'_blank','noopener');
}

// CSV export of currently-filtered leads
async function exportFilteredLeadsCSV(){
  if(!cu)return;
  var allL=await gL();
  var myL=allL.filter(function(l){return l.uid===cu.id;});
  var myLIds=myL.map(function(l){return l.id;});
  var myInq=(await gInq()).filter(function(i){return myLIds.indexOf(i.listingId)>=0;});
  var f=_leadFilters;
  var filtered=myInq.filter(function(i){
    if(f.from&&(i.sentAt||'').slice(0,10)<f.from)return false;
    if(f.to&&(i.sentAt||'').slice(0,10)>f.to)return false;
    if(f.propId&&Number(i.listingId)!==Number(f.propId))return false;
    if(f.type){var lst=myL.find(function(x){return x.id===i.listingId;});if(!lst||lst.type!==f.type)return false;}
    if(f.budgetMin||f.budgetMax){
      var lst2=myL.find(function(x){return x.id===i.listingId;});
      if(!lst2)return false;
      var p=lst2.lf==='rent'?lst2.rent:(lst2.price||lst2.priceMin||0);
      if(f.budgetMin&&p<f.budgetMin)return false;
      if(f.budgetMax&&p>f.budgetMax)return false;
    }
    return true;
  });
  if(!filtered.length){toast('No leads match your filters.','e');return;}
  var rows=[['Date','Name','Phone','Email','Property','Property Type','City','Price','Message']];
  filtered.forEach(function(i){
    var lst=myL.find(function(x){return x.id===i.listingId;})||{};
    var pr=lst.lf==='rent'?fmtRent(lst.rent)+'/mo':fmtPrice(lst.price||lst.priceMin||0);
    rows.push([
      i.sentAt||'',
      i.name||'',
      i.phone||'',
      i.email||'',
      lst.title||'',
      lst.type||'',
      lst.city||'',
      pr,
      (i.message||'').replace(/\n/g,' / ')
    ]);
  });
  var csv=rows.map(function(r){return r.map(function(c){
    var s=String(c==null?'':c);
    return s.indexOf(',')>=0||s.indexOf('"')>=0||s.indexOf('\n')>=0?'"'+s.replace(/"/g,'""')+'"':s;
  }).join(',');}).join('\n');
  var bom='\uFEFF';
  var blob=new Blob([bom+csv],{type:'text/csv;charset=utf-8;'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download='ekmakan-leads-'+(new Date()).toISOString().slice(0,10)+'.csv';
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('CSV downloaded — '+filtered.length+' lead'+(filtered.length===1?'':'s'));
}

async function renderLister(){
  if(!cu||(cu.role!=='broker'&&cu.role!=='owner'&&cu.role!=='builder'))return;
  var ib=cu.role==='broker', isBuilder=cu.role==='builder';
  var lt=document.getElementById('lTit'),lb=document.getElementById('lBdg'),lg=document.getElementById('lGrt');
  if(lt)lt.textContent=isBuilder?'Builder Portal':(ib?'Broker Portal':'Owner Portal');
  if(lb){
    var badges=[];
    if(isBuilder)badges.push('<span class="brk-b" style="background:rgba(218,165,32,.15);color:#c58600;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-sparkle"/></svg> Builder</span>');
    else if(ib)badges.push('<span class="brk-b"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-broker"/></svg> Broker</span>');
    else badges.push('<span class="own-b"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-owner"/></svg> Owner</span>');
    if(cu.trusted){
      badges.push('<span class="trusted-badge-lister"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-shield-check"/></svg> Trusted</span>');
    }
    lb.innerHTML=badges.join(' ');
  }
  var pts=[cu.email];
  if(cu.phone)pts.unshift(cu.phone);
  if(cu.agency){
    var roleIcon=isBuilder?'i-sparkle':(ib?'i-broker':'i-owner');
    pts.unshift('<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#'+roleIcon+'"/></svg> '+cu.agency);
  }
  if(cu.lic)pts.push('RERA: '+cu.lic);
  if(lg)lg.innerHTML=pts.join(' &nbsp;&middot;&nbsp; ');
  // Show loading
  var lSt=document.getElementById('lStats');
  if(lSt)lSt.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading your listings…</span></div>';
  var myL=(await gL()).filter(function(l){return l.uid===cu.id;});
  var ap=myL.filter(function(l){return l.status==='approved';});
  var pn=myL.filter(function(l){return l.status==='pending';});
  var rj=myL.filter(function(l){return l.status==='rejected';});
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
  // Stat boxes — now clickable filters with active state
  var st=document.getElementById('lStats');
  function statBox(filter,iconRef,iconHtml,count,colorVar,label){
    var on=_listerFilter===filter;
    var border=on?'2px solid '+colorVar:'1px solid var(--lister-border)';
    var bg='var(--wh)';
    return '<button onclick="setListerFilter(\''+filter+'\')" class="lister-stat-box" style="text-align:center;background:'+bg+';border-radius:14px;padding:20px 14px;border:'+border+';cursor:pointer;font-family:\'DM Sans\',sans-serif;width:100%;transition:all .2s;">'
      +'<div style="font-size:20px;color:'+colorVar+';margin-bottom:4px;">'+(iconHtml||'<svg class="icn icn-lg" aria-hidden="true"><use href="#'+iconRef+'"/></svg>')+'</div>'
      +'<div style="font-family:\'Playfair Display\',serif;font-size:32px;font-weight:700;color:'+colorVar+';line-height:1;letter-spacing:-.5px;">'+count+'</div>'
      +'<div style="font-size:11.5px;color:var(--mu);margin-top:6px;font-weight:600;letter-spacing:.3px;text-transform:uppercase;">'+label+'</div>'
      +(on?'<div style="font-size:9.5px;color:'+colorVar+';font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-top:4px;">Filtered &middot; click to clear</div>':'')
      +'</button>';
  }
  if(st){
    if(isBuilder){
      // Builder dashboard — project-centric metrics computed from unit_types JSON.
      // Each project listing's inventory is summed across its unit configurations.
      var totalInventory=0,totalAvailable=0,totalSold=0,inventoryValueMin=0,inventoryValueMax=0,bookedValueEstimate=0;
      myL.forEach(function(l){
        if(!l.isProject&&l.lf!=='project')return;
        (l.unitTypes||[]).forEach(function(u){
          var avail=Number(u.units_available||0);
          var total=Number(u.units_total||0);
          var pmin=Number(u.priceMin||0);
          var pmax=Number(u.priceMax||pmin||0);
          var pmid=pmax>0?(pmin+pmax)/2:pmin;
          totalInventory+=total;
          totalAvailable+=avail;
          totalSold+=Math.max(0,total-avail);
          inventoryValueMin+=pmin*total;
          inventoryValueMax+=pmax*total;
          bookedValueEstimate+=pmid*Math.max(0,total-avail);
        });
      });
      var sellThroughPct=totalInventory>0?Math.round(totalSold/totalInventory*100):0;
      function fmtCr(v){
        if(!v)return '\u20B90';
        if(v>=10000000)return '\u20B9'+(v/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';
        if(v>=100000)return '\u20B9'+(v/100000).toFixed(2).replace(/\.?0+$/,'')+' L';
        return '\u20B9'+v.toLocaleString('en-IN');
      }
      var html=''
        +statBox('all','i-building','',myL.length,'var(--t)','Projects')
        +statBox('approved','i-check','',ap.length,'var(--gr)','Live')
        +statBox('pending','','&#9201;',pn.length,'#9a7300','Pending')
        +statBox('leads','i-phone','',totalLeads,'#c58600','Leads');
      // Inventory stat box — the core builder metric (non-clickable info card)
      html+='<div class="lister-stat-box" style="text-align:center;background:linear-gradient(135deg,#fff8e5,#fff4cc);border-radius:14px;padding:20px 14px;border:1px solid rgba(218,165,32,.3);font-family:\'DM Sans\',sans-serif;">'
        +'<div style="font-size:20px;color:#c58600;margin-bottom:4px;"><svg class="icn icn-lg" aria-hidden="true"><use href="#i-key"/></svg></div>'
        +'<div style="font-family:\'Playfair Display\',serif;font-size:32px;font-weight:700;color:#8a6100;line-height:1;letter-spacing:-.5px;">'+totalAvailable+'</div>'
        +'<div style="font-size:11.5px;color:#8a6100;margin-top:6px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;">Units Available</div>'
        +'<div style="font-size:10.5px;color:#8a6100;margin-top:3px;font-weight:600;">of '+totalInventory+' total &middot; '+sellThroughPct+'% sold</div>'
        +'</div>';
      if(rj.length){
        html+=statBox('rejected','i-flag','',rj.length,'var(--red)','Rejected');
      }
      st.innerHTML=html;
      // Stash totals for the insights pane below
      _builderTotals={totalInventory:totalInventory,totalAvailable:totalAvailable,totalSold:totalSold,inventoryValueMin:inventoryValueMin,inventoryValueMax:inventoryValueMax,bookedValueEstimate:bookedValueEstimate,sellThroughPct:sellThroughPct,fmtCr:fmtCr};
    } else {
      var html=statBox('all','i-home','',myL.length,'var(--t)','Listed')+
        statBox('approved','i-check','',ap.length,'var(--gr)','Approved')+
        statBox('pending','','&#9201;',pn.length,'#9a7300','Pending')+
        statBox('leads','i-phone','',totalLeads,'#c58600','Leads');
      if(rj.length){
        html+=statBox('rejected','i-flag','',rj.length,'var(--red)','Rejected');
      }
      st.innerHTML=html;
    }
  }
  // ── BUILDER OVERVIEW: project insights pane ──
  // Renders inventory pipeline, sales velocity, BHK demand, possession timeline
  // into the lOverviewExtra slot below the stat boxes.
  var lOe=document.getElementById('lOverviewExtra');
  if(lOe&&isBuilder&&_builderTotals){
    lOe.innerHTML=_renderBuilderInsights(myL,allInqs,_builderTotals);
  } else if(lOe){
    lOe.innerHTML='';
  }
  // Render search bar (inside the properties pane, just after the heading; only insert once)
  var lSrch=document.getElementById('lSrch');
  if(!lSrch){
    var pc=document.getElementById('lPropsContainer');
    var ll=document.getElementById('lLst');
    if(pc&&ll){
      var sd=document.createElement('div');
      sd.id='lSrchWrap';
      sd.style.cssText='margin:0 0 14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;';
      sd.innerHTML='<div style="position:relative;flex:1;min-width:200px;">'
        +'<svg class="icn icn-sm" aria-hidden="true" style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--mu);"><use href="#i-search"/></svg>'
        +'<input id="lSrch" type="text" placeholder="Search by title, city, locality, building…" autocomplete="off" oninput="onListerSearch(this.value)" style="width:100%;padding:10px 12px 10px 34px;border:1px solid var(--lister-border);border-radius:9px;font-family:\'DM Sans\',sans-serif;font-size:13px;background:var(--wh);box-sizing:border-box;box-shadow:var(--lister-shadow-sm);"/>'
      +'</div>'
      +'<div id="lFilterChips" style="display:flex;gap:6px;flex-wrap:wrap;"></div>';
      pc.insertBefore(sd,ll);
    }
  }
  // Apply filter + search to determine rendered list
  var filteredL=myL;
  if(_listerFilter==='approved')filteredL=ap;
  else if(_listerFilter==='pending')filteredL=pn;
  else if(_listerFilter==='rejected')filteredL=rj;
  else if(_listerFilter==='leads')filteredL=myL.filter(function(l){return (leadsByListing[l.id]||0)>0;});
  if(_listerSearch){
    var q=_listerSearch.toLowerCase();
    filteredL=filteredL.filter(function(l){
      return (l.title||'').toLowerCase().indexOf(q)>=0
        ||(l.city||'').toLowerCase().indexOf(q)>=0
        ||(l.loc||'').toLowerCase().indexOf(q)>=0
        ||(l.building||'').toLowerCase().indexOf(q)>=0;
    });
  }
  // Render filter status chip
  var chips=document.getElementById('lFilterChips');
  if(chips){
    var bits=[];
    if(_listerFilter!=='all'){
      var lbl=_listerFilter.charAt(0).toUpperCase()+_listerFilter.slice(1);
      bits.push('<span style="display:inline-flex;align-items:center;gap:4px;padding:5px 10px;background:var(--tl);color:var(--td);border-radius:50px;font-size:11px;font-weight:700;font-family:\'DM Sans\',sans-serif;">'+esc(lbl)+'<button onclick="setListerFilter(\'all\')" style="background:transparent;border:none;color:var(--td);cursor:pointer;font-size:14px;padding:0 0 0 2px;line-height:1;">&times;</button></span>');
    }
    if(_listerSearch){
      bits.push('<span style="display:inline-flex;align-items:center;gap:4px;padding:5px 10px;background:var(--cr);border:1px solid var(--sa);color:var(--ink);border-radius:50px;font-size:11px;font-weight:600;font-family:\'DM Sans\',sans-serif;">"'+esc(_listerSearch)+'"<button onclick="clearListerSearch()" style="background:transparent;border:none;color:var(--mu);cursor:pointer;font-size:14px;padding:0 0 0 2px;line-height:1;">&times;</button></span>');
    }
    chips.innerHTML=bits.join('');
  }
  var ll=document.getElementById('lLst');
  if(ll)ll.innerHTML=filteredL.length?filteredL.map(function(l){
    var thumbH=l.images&&l.images.length?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;"/>':'<div style="font-size:28px;">'+(l.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>';
    var pr=l.lf==='rent'?fmtRentHTML(l.rent)+'/mo':fmtPriceHTML(l.price);
    var lc=leadsByListing[l.id]||0;
    var isRejected=l.status==='rejected';
    var rejectedBanner=isRejected?
      '<div class="rej-banner">'
        +'<div class="rej-banner-head"><svg class="icn icn-sm" aria-hidden="true" style="color:var(--red);"><use href="#i-flag"/></svg> Rejected by reviewer</div>'
        +'<div class="rej-banner-body">'+(l.rejectionReason?esc(l.rejectionReason.length>140?l.rejectionReason.slice(0,140)+'…':l.rejectionReason):'A reviewer flagged this listing — click "View reason" for details.')+'</div>'
        +'<div class="rej-banner-actions">'
          +'<button onclick="event.stopPropagation();showRejectionReason('+l.id+')" class="rej-action-btn rej-secondary"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-flag"/></svg> View reason</button>'
          +'<button onclick="event.stopPropagation();editListing('+l.id+')" class="rej-action-btn"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-edit"/></svg> Edit &amp; Resubmit</button>'
        +'</div>'
      +'</div>':'';
    return '<div class="li" style="cursor:pointer;flex-wrap:wrap;" onclick="openListing('+l.id+')">'
      +'<div style="display:flex;align-items:center;gap:12px;width:100%;">'
      +thumbH
      +'<div class="li-in"><strong>'+esc(l.title)+'</strong><span>'+esc(l.city)+' &middot; '+pr+' &middot; '+(l.images?l.images.length:0)+' photo(s)</span></div>'
      +'<span class="pill '+(l.status==='approved'?'pill-g':l.status==='pending'?'pill-y':'pill-r')+'">'+l.status+'</span>'
      +'<div class="li-ac" onclick="event.stopPropagation()">'
      +(l.status==='approved'?'<button class="btn-sm" onclick="event.stopPropagation();setListerTab(\'leads\');updateLeadFilter(\'propId\',\''+l.id+'\')" style="background:transparent;color:var(--t);border:1px solid var(--lister-border);border-radius:7px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all .15s;" onmouseover="this.style.background=\'var(--cr)\';this.style.borderColor=\'var(--t)\'" onmouseout="this.style.background=\'transparent\';this.style.borderColor=\'var(--lister-border)\'">Leads ('+lc+') &rarr;</button>':'')
      +'<button class="btn-sm" onclick="event.stopPropagation();editListing('+l.id+')" title="Edit listing" style="background:transparent;color:var(--t);border:1px solid var(--lister-border);border-radius:7px;padding:6px 11px;font-size:12px;font-weight:600;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all .15s;" onmouseover="this.style.background=\'var(--cr)\'" onmouseout="this.style.background=\'transparent\'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-edit"/></svg> Edit</button>'
      +'<button class="btn-sm" onclick="event.stopPropagation();removeMyListing('+l.id+')" title="Delete listing" style="background:transparent;color:#999;border:1px solid transparent;border-radius:7px;padding:6px 9px;font-size:13px;font-weight:400;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:color .15s;" onmouseover="this.style.color=\'var(--red)\'" onmouseout="this.style.color=\'#999\'"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-trash"/></svg></button>'
      +'</div></div>'
      +rejectedBanner
      +'</div>';
  }).join(''):'<div style="background:var(--wh);border-radius:14px;padding:32px;text-align:center;color:var(--mu);border:1px solid var(--lister-border);box-shadow:var(--lister-shadow-sm);">'
    +(myL.length===0
      ?'No listings yet. Click &ldquo;+ New Listing&rdquo; to get started.'
      :_listerSearch
        ?'No listings match &ldquo;'+esc(_listerSearch)+'&rdquo;. <a href="#" onclick="event.preventDefault();clearListerSearch();" style="color:var(--t);">Clear search</a>'
        :'No '+esc(_listerFilter)+' listings. <a href="#" onclick="event.preventDefault();setListerFilter(\'all\');" style="color:var(--t);">Show all</a>')
    +'</div>';
  // If the leads tab is currently active (e.g. after reload or after the user clicked
  // a stat box), refresh its contents so it reflects the latest listings/inquiries.
  if(_listerTab==='leads')renderListerLeads();
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
// Builder-only side-rail tab navigation in Stage 6 (Media). Toggles
// .on class on the chosen tab + reveals matching content pane. Idempotent.
function setBMediaTab(name){
  document.querySelectorAll('#bMediaRail .b-media-tab').forEach(function(t){
    t.classList.toggle('on',t.dataset.bmt===name);
  });
  document.querySelectorAll('#bMediaRail .b-media-sec').forEach(function(p){
    p.style.display=p.dataset.bmp===name?'':'none';
    p.classList.toggle('on',p.dataset.bmp===name);
  });
}

var _unitTypes=[];

// Rich Inventory Table — used in the builder/project flow.
// Each row tracks: BHK type, carpet area range (min-max), price range (min-max in Lakh/Crore),
// units available, units total. The inventory bar visualizes sold vs. available.
var BHK_PRESETS=['1 BHK','2 BHK','3 BHK','4 BHK','5 BHK','Studio','Penthouse','Duplex','Villa'];
function renderUnits(){
  var el=document.getElementById('lUnits');
  if(!el)return;
  if(!_unitTypes.length){
    el.innerHTML='<div class="inv-empty"><div style="font-size:24px;color:var(--mu);"><svg class="icn icn-xl" aria-hidden="true"><use href="#i-building"/></svg></div><div style="margin-top:6px;">No unit configurations added yet.</div><div style="font-size:11.5px;color:var(--mu);margin-top:2px;">Add at least one BHK type with its carpet area and price range.</div></div>';
    return;
  }
  el.innerHTML='<div class="inv-table">'
    +'<div class="inv-row inv-head">'
      +'<div>Unit Type</div>'
      +'<div>Carpet Area (sq.ft)</div>'
      +'<div>Price Range</div>'
      +'<div>Inventory</div>'
      +'<div></div>'
    +'</div>'
    +_unitTypes.map(function(u,i){
      var avail=Number(u.units_available||0);
      var total=Number(u.units_total||0);
      var pct=total>0?Math.min(100,Math.round((total-avail)/total*100)):0;
      var pmCore=u.price_min_core||(u.priceMin?(u.priceMin>=10000000?(u.priceMin/10000000).toFixed(2).replace(/\.?0+$/,''):(u.priceMin/100000).toFixed(2).replace(/\.?0+$/,'')):'');
      var pmUnit=u.price_min_unit||(u.priceMin>=10000000?'cr':'lakh');
      var pxCore=u.price_max_core||(u.priceMax?(u.priceMax>=10000000?(u.priceMax/10000000).toFixed(2).replace(/\.?0+$/,''):(u.priceMax/100000).toFixed(2).replace(/\.?0+$/,'')):'');
      var pxUnit=u.price_max_unit||(u.priceMax>=10000000?'cr':'lakh');
      return '<div class="inv-row">'
        +'<div><select class="fi inv-fi" onchange="updateUnit('+i+',\'bhk\',this.value)">'+BHK_PRESETS.map(function(b){return '<option'+(b===u.bhk?' selected':'')+'>'+b+'</option>';}).join('')+'</select></div>'
        +'<div class="inv-range">'
          +'<input class="fi inv-fi inv-fi-sm" type="number" placeholder="Min" value="'+(u.carpet_min||u.area||'')+'" min="0" onchange="updateUnit('+i+',\'carpet_min\',Number(this.value)||0)"/>'
          +'<span class="inv-dash">–</span>'
          +'<input class="fi inv-fi inv-fi-sm" type="number" placeholder="Max" value="'+(u.carpet_max||'')+'" min="0" onchange="updateUnit('+i+',\'carpet_max\',Number(this.value)||0)"/>'
        +'</div>'
        +'<div class="inv-price-cell">'
          +'<div class="inv-price-row"><input class="fi inv-fi inv-fi-xs" type="number" placeholder="Min" value="'+esc(String(pmCore))+'" min="0" step="0.01" onchange="updateUnitPrice('+i+',\'min\',this.value,document.getElementById(\'unitMinUnit'+i+'\').value)"/>'
            +'<select class="fi inv-fi inv-fi-xs" id="unitMinUnit'+i+'" onchange="updateUnitPrice('+i+',\'min\',this.previousElementSibling.value,this.value)"><option value="lakh"'+(pmUnit==='lakh'?' selected':'')+'>L</option><option value="cr"'+(pmUnit==='cr'?' selected':'')+'>Cr</option></select>'
          +'</div>'
          +'<span class="inv-dash inv-dash-v">to</span>'
          +'<div class="inv-price-row"><input class="fi inv-fi inv-fi-xs" type="number" placeholder="Max" value="'+esc(String(pxCore))+'" min="0" step="0.01" onchange="updateUnitPrice('+i+',\'max\',this.value,document.getElementById(\'unitMaxUnit'+i+'\').value)"/>'
            +'<select class="fi inv-fi inv-fi-xs" id="unitMaxUnit'+i+'" onchange="updateUnitPrice('+i+',\'max\',this.previousElementSibling.value,this.value)"><option value="lakh"'+(pxUnit==='lakh'?' selected':'')+'>L</option><option value="cr"'+(pxUnit==='cr'?' selected':'')+'>Cr</option></select>'
          +'</div>'
        +'</div>'
        +'<div class="inv-stock-cell">'
          +'<div class="inv-stock-row">'
            +'<input class="fi inv-fi inv-fi-xs" type="number" placeholder="Avail." value="'+(avail||'')+'" min="0" onchange="updateUnit('+i+',\'units_available\',Number(this.value)||0)"/>'
            +'<span class="inv-dash">/</span>'
            +'<input class="fi inv-fi inv-fi-xs" type="number" placeholder="Total" value="'+(total||'')+'" min="0" onchange="updateUnit('+i+',\'units_total\',Number(this.value)||0)"/>'
          +'</div>'
          +(total>0?'<div class="inv-bar"><div class="inv-bar-fill" style="width:'+pct+'%"></div></div>'
            +'<div class="inv-stock-lbl">'+(total-avail)+' sold / '+total+' total</div>':'')
        +'</div>'
        +'<div><button type="button" onclick="removeUnit('+i+')" aria-label="Remove row" class="inv-remove"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-trash"/></svg></button></div>'
      +'</div>';
    }).join('')
  +'</div>';
}
function addUnit(){
  _unitTypes.push({bhk:'2 BHK',carpet_min:0,carpet_max:0,price_min_core:'',price_min_unit:'lakh',price_max_core:'',price_max_unit:'cr',units_available:0,units_total:0,priceMin:0,priceMax:0});
  renderUnits();
}
function updateUnit(idx,key,val){
  if(_unitTypes[idx])_unitTypes[idx][key]=val;
}
// Update the price min/max — keeps both the raw rupee value (priceMin/priceMax for sorting/display)
// AND the core+unit display fields (for the form).
function updateUnitPrice(idx,which,coreStr,unit){
  var u=_unitTypes[idx];if(!u)return;
  var core=Number(coreStr)||0;
  var rupees=core?(unit==='cr'?Math.round(core*10000000):Math.round(core*100000)):0;
  if(which==='min'){u.price_min_core=coreStr;u.price_min_unit=unit;u.priceMin=rupees;}
  else{u.price_max_core=coreStr;u.price_max_unit=unit;u.priceMax=rupees;}
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
var _wizTotal=6;

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
    var pin=(document.getElementById('lPin').value||'').trim();
    if(title.length<3){showErr('Please enter a property title (at least 3 characters).');return false;}
    if(city.length<2){showErr('Please enter a city.');return false;}
    if(pin&&!/^[0-9]{6}$/.test(pin)){showErr('PIN code must be 6 digits.');return false;}
    // Project mode: builder name + RERA + project status all required
    if(lMode==='project'){
      var builder=(document.getElementById('lBn').value||'').trim();
      if(builder.length<2){showErr('Please enter the builder / company name.');return false;}
      var rera2=(document.getElementById('lRe2').value||'').trim();
      if(rera2.length<5){showErr('RERA registration number is mandatory for new projects.');return false;}
    }
    return true;
  }
  if(step===3){
    if(lMode==='project'){
      // Project: at least one unit configuration with BHK + min price
      if(!_unitTypes||!_unitTypes.length){
        showErr('Please add at least one unit configuration.');
        return false;
      }
      var bad=_unitTypes.filter(function(u){return !u.bhk||(!u.priceMin&&!u.price_min_core);});
      if(bad.length){showErr('Each unit configuration needs a BHK type and at least a minimum price.');return false;}
      return true;
    }
    // Rent/buy specs — all optional. Just sanity-check floor numbers if entered.
    var fn=document.getElementById('lFlNo').value;
    var ft=document.getElementById('lFlTot').value;
    if(fn&&ft&&Number(fn)>Number(ft)){
      showErr('Floor number cannot be higher than total floors in the building.');
      return false;
    }
    return true;
  }
  if(step===4){
    // Features — entirely optional
    return true;
  }
  if(step===5){
    // Pricing — require non-zero price for the chosen mode
    if(lMode==='rent'){
      var rt=Number((document.getElementById('lRt').value||'').trim());
      if(!rt){showErr('Please enter the monthly rent.');return false;}
    } else if(lMode==='buy'){
      var prHidden=document.getElementById('lPr').value;
      var prRequest=prHidden==='-1'||Number(prHidden)===-1;
      var pr=Number(prHidden);
      if(!prRequest&&!pr){showErr('Please enter the sale price (or choose "Price on Request").');return false;}
    } else if(lMode==='project'){
      var pmin=Number((document.getElementById('lPrMin').value||'').trim());
      if(!pmin){showErr('Please enter the project starting price.');return false;}
    }
    // RERA mandatory for: (a) new projects (always — checked in stage 2), (b) buy listings with Transaction Type = "New Booking"
    var txn=(document.getElementById('lTxn')||{}).value||'';
    var reraRequired=lMode==='buy'&&txn==='New Booking';
    if(reraRequired){
      var rera=(document.getElementById('lRe').value||'').trim();
      if(rera.length<5){
        showErr('RERA registration number is mandatory for "New Booking" transactions. It is a legal requirement in Mumbai/Maharashtra.');
        return false;
      }
    }
    return true;
  }
  if(step===6){
    // Final stage — owner name + contact + at least one photo required
    var owner=(document.getElementById('lOw').value||'').trim();
    var contact=(document.getElementById('lCt').value||'').trim();
    if(owner.length<2){showErr('Please enter the owner/broker name.');return false;}
    if(contact.replace(/\D/g,'').length<10){showErr('Please enter a valid contact number (10 digits).');return false;}
    // Photos: require at least 1 (excluding placeholders)
    var realImgs=upImgs.filter(function(im){return im&&typeof im==='string'&&im!=='__PENDING__';});
    if(!realImgs.length){showErr('Please add at least one photo of the property.');return false;}
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
    } else if(kind==='insights'){
      // Comprehensive market insights — the high-value export brokers/builders pay for
      var ls=await gL();
      var us=await gU();
      var inqs=await gInq();
      var ap=ls.filter(function(l){return l.status==='approved';});
      var pn=ls.filter(function(l){return l.status==='pending';});
      var rj=ls.filter(function(l){return l.status==='rejected';});
      var brs=us.filter(function(u){return u.role==='broker';});
      var own=us.filter(function(u){return u.role==='owner';});
      var bld=us.filter(function(u){return u.role==='builder';});
      var ten=us.filter(function(u){return u.role==='user';});
      var d=_computeAdminInsights(ls,ap,pn,rj,inqs,brs,own,bld,ten,us);
      // Build a multi-section CSV — flat structure for spreadsheet compatibility
      var rows=[];
      rows.push({Section:'Summary',Metric:'Total live listings',Value:d.totalLive,Detail:''});
      rows.push({Section:'Summary',Metric:'Total sale inventory value (₹)',Value:d.saleValue,Detail:''});
      rows.push({Section:'Summary',Metric:'Total project inventory value (₹)',Value:d.projectValue,Detail:''});
      rows.push({Section:'Summary',Metric:'Total monthly rent value (₹)',Value:d.rentValue,Detail:''});
      rows.push({Section:'Summary',Metric:'Total leads',Value:inqs.length,Detail:''});
      rows.push({Section:'Summary',Metric:'Lead conversion rate (%)',Value:(d.conversionRate*100).toFixed(2),Detail:''});
      rows.push({Section:'Summary',Metric:'Avg leads per listing',Value:d.totalLive?(inqs.length/d.totalLive).toFixed(2):0,Detail:''});
      rows.push({Section:'Summary',Metric:'New users (last 7 days)',Value:d.newThisWeek,Detail:''});
      rows.push({Section:'Summary',Metric:'New users (last 30 days)',Value:d.newThisMonth,Detail:''});
      rows.push({Section:'Summary',Metric:'Total users',Value:us.length,Detail:''});
      rows.push({Section:'Summary',Metric:'Approval health (%)',Value:d.approvalHealth.toFixed(1),Detail:''});
      d.topCities.forEach(function(c,i){rows.push({Section:'Top Cities',Metric:'Rank '+(i+1),Value:c.city,Detail:c.count+' listings'});});
      d.topLocs.forEach(function(l,i){rows.push({Section:'Top Localities by Inventory',Metric:'Rank '+(i+1),Value:l.loc,Detail:l.count+' listings'});});
      d.topDemand.forEach(function(l,i){rows.push({Section:'Top Localities by Demand (Leads)',Metric:'Rank '+(i+1),Value:l.loc,Detail:l.leads+' leads'});});
      d.avgPSFRows.forEach(function(r){rows.push({Section:'Avg Price/Sq.Ft by City',Metric:r.city,Value:'₹'+r.avgPSF.toLocaleString('en-IN'),Detail:r.count+' listings'});});
      d.typeBreakdown.forEach(function(r){rows.push({Section:'Property Type Breakdown',Metric:r.type,Value:r.count,Detail:Math.round(r.count*100/d.totalLive)+'%'});});
      d.bhkBreakdown.forEach(function(r){rows.push({Section:'BHK Distribution',Metric:r.bhk,Value:r.count,Detail:Math.round(r.count*100/d.totalLive)+'%'});});
      Object.keys(d.bhkRentAvg).sort().forEach(function(b){
        var avg=Math.round(d.bhkRentAvg[b]/d.bhkRentCount[b]);
        rows.push({Section:'Avg Monthly Rent by BHK',Metric:b+' BHK',Value:'₹'+avg.toLocaleString('en-IN'),Detail:d.bhkRentCount[b]+' listings'});
      });
      Object.keys(d.bhkSaleAvg).sort().forEach(function(b){
        var avg=Math.round(d.bhkSaleAvg[b]/d.bhkSaleCount[b]);
        rows.push({Section:'Avg Sale Price by BHK',Metric:b+' BHK',Value:'₹'+avg.toLocaleString('en-IN'),Detail:d.bhkSaleCount[b]+' listings'});
      });
      if(!rows.length){toast('No data to export.','e');return;}
      downloadCSV('ekmakan-market-insights-'+date+'.csv',rows);
      toast('Exported '+rows.length+' insight rows.');
    } else if(kind==='broker_leaderboard'){
      var ls=await gL();
      var us=await gU();
      var inqs=await gInq();
      var ap=ls.filter(function(l){return l.status==='approved';});
      var brs=us.filter(function(u){return u.role==='broker';});
      var own=us.filter(function(u){return u.role==='owner';});
      var bld=us.filter(function(u){return u.role==='builder';});
      var ten=us.filter(function(u){return u.role==='user';});
      var d=_computeAdminInsights(ls,ap,[],[],inqs,brs,own,bld,ten,us);
      if(!d.topBrokers.length){toast('No active brokers/builders.','e');return;}
      var rows=d.topBrokers.map(function(b,i){
        return {
          Rank:i+1,
          Name:b.name,
          Agency:b.agency,
          Role:b.role,
          'Active Listings':b.listings,
          'Approved Listings':b.approved,
          Leads:b.leads,
          'Performance Score':b.leads*3+b.listings
        };
      });
      downloadCSV('ekmakan-broker-leaderboard-'+date+'.csv',rows);
      toast('Exported top '+rows.length+' brokers.');
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
// ══ ADMIN INSIGHTS ══
// Builds a rich, monetizable insights panel for the admin overview.
// Brokers/builders would pay for these — locality price trends, demand heatmap,
// conversion rates, top-performing brokers, inventory value, etc.
function _computeAdminInsights(ls,ap,pn,rj,inqs,brs,own,bld,ten,us){
  // Approved listings only — the live inventory
  var live=ap;
  // 1. Inventory value (sum of all approved sale + rent listings)
  var saleValue=0, rentValue=0, projectValue=0;
  live.forEach(function(l){
    if(l.lf==='rent')rentValue+=Number(l.rent||0);
    else if(l.lf==='project')projectValue+=Number(l.priceMin||l.price||0);
    else saleValue+=Number(l.price||0);
  });
  // 2. Top localities by listing count
  var locCount={};
  live.forEach(function(l){
    var key=(l.loc||'Unknown')+', '+(l.city||'');
    locCount[key]=(locCount[key]||0)+1;
  });
  var topLocs=Object.keys(locCount).map(function(k){return{loc:k,count:locCount[k]};})
    .sort(function(a,b){return b.count-a.count;}).slice(0,5);
  // 3. Top cities
  var cityCount={};
  live.forEach(function(l){var c=l.city||'Unknown';cityCount[c]=(cityCount[c]||0)+1;});
  var topCities=Object.keys(cityCount).map(function(k){return{city:k,count:cityCount[k]};})
    .sort(function(a,b){return b.count-a.count;}).slice(0,5);
  // 4. Property type breakdown
  var typeCount={};
  live.forEach(function(l){var t=l.type||'Unknown';typeCount[t]=(typeCount[t]||0)+1;});
  var typeBreakdown=Object.keys(typeCount).map(function(k){return{type:k,count:typeCount[k]};})
    .sort(function(a,b){return b.count-a.count;});
  // 5. BHK distribution (most popular configurations)
  var bhkCount={};
  live.forEach(function(l){var b=l.beds+' BHK';bhkCount[b]=(bhkCount[b]||0)+1;});
  var bhkBreakdown=Object.keys(bhkCount).map(function(k){return{bhk:k,count:bhkCount[k]};})
    .sort(function(a,b){return b.count-a.count;}).slice(0,6);
  // 6. Avg price per sqft by city (carpet area where available)
  var psfByCity={};
  live.forEach(function(l){
    if(l.lf==='rent')return;
    var carpet=l.carpetArea||l.builtArea||l.area||0;
    var price=l.lf==='project'?(l.priceMin||l.price||0):(l.price||0);
    if(!carpet||!price)return;
    var psf=price/carpet;
    if(!psfByCity[l.city])psfByCity[l.city]={total:0,count:0};
    psfByCity[l.city].total+=psf;
    psfByCity[l.city].count++;
  });
  var avgPSFRows=Object.keys(psfByCity).map(function(c){
    return {city:c,avgPSF:Math.round(psfByCity[c].total/psfByCity[c].count),count:psfByCity[c].count};
  }).sort(function(a,b){return b.count-a.count;}).slice(0,6);
  // 7. Lead conversion: leads / listings
  var conversionRate=live.length?(inqs.length/live.length):0;
  // 8. Demand by locality (which areas are getting the most leads)
  var leadsByLoc={};
  inqs.forEach(function(i){
    var l=ls.find(function(x){return x.id===i.listingId;});
    if(!l)return;
    var key=(l.loc||'Unknown')+', '+(l.city||'');
    leadsByLoc[key]=(leadsByLoc[key]||0)+1;
  });
  var topDemand=Object.keys(leadsByLoc).map(function(k){return{loc:k,leads:leadsByLoc[k]};})
    .sort(function(a,b){return b.leads-a.leads;}).slice(0,5);
  // 9. Top brokers leaderboard (most listings + leads)
  var brokerStats={};
  live.forEach(function(l){
    if(!l.uid)return;
    var u=us.find(function(x){return x.id===l.uid;});
    if(!u||(u.role!=='broker'&&u.role!=='builder'))return;
    if(!brokerStats[l.uid]){
      brokerStats[l.uid]={
        id:l.uid,
        name:u.name||'Unknown',
        agency:u.agency||'',
        role:u.role,
        listings:0,
        leads:0,
        approved:0
      };
    }
    brokerStats[l.uid].listings++;
    brokerStats[l.uid].approved++;
  });
  inqs.forEach(function(i){
    var l=ls.find(function(x){return x.id===i.listingId;});
    if(l&&brokerStats[l.uid])brokerStats[l.uid].leads++;
  });
  var topBrokers=Object.keys(brokerStats).map(function(k){return brokerStats[k];})
    .sort(function(a,b){return (b.leads*3+b.listings)-(a.leads*3+a.listings);}).slice(0,10);
  // 10. New users this week / month
  var now=Date.now();
  var weekAgo=now-7*24*3600*1000;
  var monthAgo=now-30*24*3600*1000;
  var newThisWeek=us.filter(function(u){
    var t=u.joinedAt?new Date(u.joinedAt).getTime():0;return t>=weekAgo;
  }).length;
  var newThisMonth=us.filter(function(u){
    var t=u.joinedAt?new Date(u.joinedAt).getTime():0;return t>=monthAgo;
  }).length;
  // 11. Avg time-to-approve (rough — based on posted_at vs status changes; approximation)
  var avgApprovalMs=0;
  // (We don't have status_changed_at, so we fall back to: approved listings count vs pending count health.)
  var approvalHealth=ap.length+pn.length>0?(ap.length/(ap.length+pn.length))*100:0;
  // 12. Avg rent / sale price per BHK
  var bhkRentAvg={}, bhkRentCount={};
  var bhkSaleAvg={}, bhkSaleCount={};
  live.forEach(function(l){
    if(l.lf==='rent'&&l.rent){
      bhkRentAvg[l.beds]=(bhkRentAvg[l.beds]||0)+l.rent;
      bhkRentCount[l.beds]=(bhkRentCount[l.beds]||0)+1;
    } else if(l.lf!=='project'&&l.price){
      bhkSaleAvg[l.beds]=(bhkSaleAvg[l.beds]||0)+l.price;
      bhkSaleCount[l.beds]=(bhkSaleCount[l.beds]||0)+1;
    }
  });
  return {
    saleValue:saleValue,rentValue:rentValue,projectValue:projectValue,
    totalLive:live.length,
    topLocs:topLocs,topCities:topCities,
    typeBreakdown:typeBreakdown,bhkBreakdown:bhkBreakdown,
    avgPSFRows:avgPSFRows,
    conversionRate:conversionRate,
    topDemand:topDemand,
    topBrokers:topBrokers,
    newThisWeek:newThisWeek,newThisMonth:newThisMonth,
    approvalHealth:approvalHealth,
    bhkRentAvg:bhkRentAvg,bhkRentCount:bhkRentCount,
    bhkSaleAvg:bhkSaleAvg,bhkSaleCount:bhkSaleCount
  };
}

function _buildAdminInsights(ls,ap,pn,rj,inqs,brs,own,bld,ten,us){
  var d=_computeAdminInsights(ls,ap,pn,rj,inqs,brs,own,bld,ten,us);
  function card(title,subtitle,bodyHtml,accent){
    accent=accent||'var(--t)';
    return '<div style="background:var(--wh);border-radius:12px;padding:18px 20px;border:1px solid var(--sa);border-top:3px solid '+accent+';">'
      +'<div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:4px;">'+title+'</div>'
      +(subtitle?'<div style="font-size:11px;color:var(--mu);margin-bottom:10px;">'+subtitle+'</div>':'')
      +bodyHtml
      +'</div>';
  }
  function row(left,right,colorOverride){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f5f1e8;font-family:\'DM Sans\',sans-serif;font-size:12.5px;"><span style="color:#555;">'+left+'</span><strong style="color:'+(colorOverride||'var(--ink)')+';">'+right+'</strong></div>';
  }
  // ── Inventory Value card ──
  var totalInv=d.saleValue+d.projectValue;
  var invHTML='<div style="font-family:\'Playfair Display\',serif;font-size:24px;font-weight:700;color:var(--g);margin-bottom:2px;">'+fmtPriceHTML(totalInv)+'</div>'
    +'<div style="font-size:11px;color:var(--mu);margin-bottom:10px;">across '+d.totalLive+' approved listings</div>'
    +row('Sale inventory',fmtPriceHTML(d.saleValue))
    +row('New project inventory',fmtPriceHTML(d.projectValue))
    +row('Monthly rent (sum)','&#8377;'+d.rentValue.toLocaleString('en-IN'));
  // ── Lead Conversion card ──
  var convPct=(d.conversionRate*100).toFixed(1);
  var convColor=d.conversionRate>=0.5?'var(--gr)':d.conversionRate>=0.2?'var(--g)':'var(--red)';
  var convHTML='<div style="font-family:\'Playfair Display\',serif;font-size:24px;font-weight:700;color:'+convColor+';margin-bottom:2px;">'+convPct+'%</div>'
    +'<div style="font-size:11px;color:var(--mu);margin-bottom:10px;">'+inqs.length+' leads from '+d.totalLive+' active listings</div>'
    +row('Total leads',inqs.length.toLocaleString('en-IN'))
    +row('Avg leads per listing',d.totalLive?(inqs.length/d.totalLive).toFixed(2):'0')
    +row('Approval health',d.approvalHealth.toFixed(0)+'%');
  // ── Growth card ──
  var growthHTML='<div style="font-family:\'Playfair Display\',serif;font-size:24px;font-weight:700;color:var(--pu);margin-bottom:2px;">+'+d.newThisWeek+'</div>'
    +'<div style="font-size:11px;color:var(--mu);margin-bottom:10px;">new users this week</div>'
    +row('New users (7 days)','+'+d.newThisWeek)
    +row('New users (30 days)','+'+d.newThisMonth)
    +row('Total users',us.length.toLocaleString('en-IN'));
  // ── Top Localities card ──
  var topLocsHTML=d.topLocs.length?d.topLocs.map(function(l,i){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #f5f1e8;font-family:\'DM Sans\',sans-serif;font-size:12.5px;">'
      +'<span style="display:flex;align-items:center;gap:8px;color:#444;"><span style="background:var(--tl);color:var(--td);width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">'+(i+1)+'</span> '+esc(l.loc)+'</span>'
      +'<strong style="color:var(--t);">'+l.count+'</strong></div>';
  }).join(''):'<div style="color:var(--mu);font-size:12px;text-align:center;padding:14px 0;">No data yet</div>';
  // ── Top Demand card (leads by locality) ──
  var topDemandHTML=d.topDemand.length?d.topDemand.map(function(l,i){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #f5f1e8;font-family:\'DM Sans\',sans-serif;font-size:12.5px;">'
      +'<span style="display:flex;align-items:center;gap:8px;color:#444;"><span style="background:#fff3e0;color:#c55a00;width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">'+(i+1)+'</span> '+esc(l.loc)+'</span>'
      +'<strong style="color:#c55a00;">'+l.leads+' leads</strong></div>';
  }).join(''):'<div style="color:var(--mu);font-size:12px;text-align:center;padding:14px 0;">No leads yet</div>';
  // ── Avg Price per Sq.Ft card ──
  var psfHTML=d.avgPSFRows.length?d.avgPSFRows.map(function(r){
    return row(esc(r.city)+' <span style="color:var(--mu);font-size:10px;">('+r.count+' listings)</span>','&#8377;'+r.avgPSF.toLocaleString('en-IN')+'/sqft','var(--g)');
  }).join(''):'<div style="color:var(--mu);font-size:12px;text-align:center;padding:14px 0;">Need more sale listings with carpet area</div>';
  // ── Property Type & BHK card ──
  var typeHTML=d.typeBreakdown.slice(0,5).map(function(r){
    return row(esc(r.type),r.count+' ('+Math.round(r.count*100/d.totalLive)+'%)');
  }).join('');
  var bhkHTML=d.bhkBreakdown.map(function(r){
    return row(esc(r.bhk),r.count+' ('+Math.round(r.count*100/d.totalLive)+'%)');
  }).join('');
  // ── Top Brokers Leaderboard ──
  var leaderHTML=d.topBrokers.length?'<table style="width:100%;border-collapse:collapse;font-size:12px;font-family:\'DM Sans\',sans-serif;">'
    +'<thead><tr style="background:var(--cr);"><th style="text-align:left;padding:7px 9px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.5px;font-size:10px;">#</th><th style="text-align:left;padding:7px 9px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.5px;font-size:10px;">Broker / Agency</th><th style="text-align:right;padding:7px 9px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.5px;font-size:10px;">Listings</th><th style="text-align:right;padding:7px 9px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.5px;font-size:10px;">Leads</th></tr></thead>'
    +'<tbody>'
    +d.topBrokers.map(function(b,i){
      return '<tr style="border-bottom:1px solid #f5f1e8;"><td style="padding:8px 9px;color:var(--mu);font-weight:700;">'+(i+1)+'</td>'
        +'<td style="padding:8px 9px;"><strong style="color:var(--ink);">'+esc(b.name)+'</strong>'+(b.agency?'<div style="font-size:10px;color:var(--mu);">'+esc(b.agency)+'</div>':'')+'</td>'
        +'<td style="padding:8px 9px;text-align:right;color:var(--t);font-weight:700;">'+b.listings+'</td>'
        +'<td style="padding:8px 9px;text-align:right;color:#c55a00;font-weight:700;">'+b.leads+'</td></tr>';
    }).join('')
    +'</tbody></table>':'<div style="color:var(--mu);font-size:12px;text-align:center;padding:14px 0;">No active brokers yet</div>';
  // Compose full panel
  return '<div style="margin:30px 0 18px;display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;">'
    +'<h2 style="font-family:\'Playfair Display\',serif;font-size:18px;margin:0;">📊 Market Insights</h2>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;">'
    +'<button onclick="adminExport(\'insights\')" class="btn btn-o btn-sm"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Export Insights CSV</button>'
    +'<button onclick="adminExport(\'broker_leaderboard\')" class="btn btn-o btn-sm"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-broker"/></svg> Broker Leaderboard CSV</button>'
    +'</div>'
    +'</div>'
    +'<p style="font-size:11.5px;color:var(--mu);margin:0 0 16px;line-height:1.5;">Sellable insights — market-level data brokers, builders and analytics partners would pay for. All values computed live from your active inventory.</p>'
    +'<div class="ins-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px;">'
    +card('💰 Total Inventory Value','Sum of all approved sale + project listings',invHTML,'var(--g)')
    +card('📈 Lead Conversion','Leads relative to live inventory',convHTML,'#c55a00')
    +card('👥 User Growth','New signups recently',growthHTML,'var(--pu)')
    +card('🔥 Top Localities by Inventory','Where most listings are concentrated',topLocsHTML,'var(--t)')
    +card('📍 Top Demand by Leads','Where buyers/tenants are most active',topDemandHTML,'#c55a00')
    +card('💵 Avg Price / Sq.Ft','By city, carpet area basis',psfHTML,'var(--g)')
    +card('🏠 Property Type Breakdown','Inventory mix',typeHTML||'<div style="color:var(--mu);font-size:12px;text-align:center;padding:14px 0;">No data</div>','var(--t)')
    +card('🛏️ BHK Distribution','Most popular configurations',bhkHTML||'<div style="color:var(--mu);font-size:12px;text-align:center;padding:14px 0;">No data</div>','var(--t)')
    +'</div>'
    +'<div style="margin-top:20px;background:var(--wh);border-radius:12px;padding:18px 20px;border:1px solid var(--sa);border-top:3px solid var(--pu);">'
    +'<div style="font-size:11px;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:.7px;margin-bottom:4px;">🏆 Top Brokers Leaderboard</div>'
    +'<div style="font-size:11px;color:var(--mu);margin-bottom:12px;">Ranked by leads (×3) + listings — performance-weighted</div>'
    +leaderHTML
    +'</div>';
}

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
      +_buildAdminInsights(ls,ap,pn,rj,inqs,brs,own,bld,ten,us)
      +(pn.length
        ?'<h2 style="font-family:\'Playfair Display\',serif;font-size:17px;margin:32px 0 12px;">&#9888; Needs Review ('+pn.length+')</h2>'+pn.map(aRow).join('')
        :'<div style="background:var(--wh);border-radius:12px;padding:24px;text-align:center;color:var(--mu);border:1px solid var(--sa);margin-top:24px;"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> All listings reviewed.</div>');
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
          ?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:80px;height:72px;object-fit:cover;border-radius:9px;flex-shrink:0;cursor:pointer;" onclick="openListing('+l.id+')" title="Click to preview"/>'
          :'<div style="width:72px;height:72px;background:var(--tl);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:30px;cursor:pointer;" onclick="openListing('+l.id+')">'+(l.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>';
        var pr=l.lf==='rent'?'&#8377;'+l.rent.toLocaleString('en-IN')+'/mo':fmtPriceHTML(l.price);
        return '<div style="background:var(--wh);border-radius:13px;padding:18px;border:1px solid var(--sa);margin-bottom:13px;">'
          +'<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px;">'+thumbH
          +'<div style="flex:1;">'
          +'<h3 style="font-family:\'Playfair Display\',serif;font-size:16px;margin-bottom:3px;cursor:pointer;color:var(--t);" onclick="openListing('+l.id+')">'+esc(l.title)+' &#8599;</h3>'
          +'<p style="font-size:12px;color:var(--mu);">'+esc(l.loc)+', '+esc(l.city)+' &middot; '+esc(l.type)+' &middot; '+l.beds+'BHK &middot; '+(l.lf==='buy'?'FOR SALE':'FOR RENT')+'</p>'
          +'<p style="font-weight:700;font-size:14px;color:'+(l.lf==='buy'?'var(--g)':'var(--t)')+';">'+pr+'</p>'
          +'<p style="font-size:12px;margin-top:5px;line-height:1.5;">'+esc(l.desc)+'</p>'
          +'<p style="font-size:11px;color:var(--mu);margin-top:4px;">By: '+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+' &middot; '+esc(l.contact)+(l.rera?' &middot; RERA: '+esc(l.rera):'')+'</p>'
          +'<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:7px;">'+l.tags.map(function(tg){return '<span class="tag">'+esc(tg)+'</span>';}).join('')+'</div>'
          +'</div></div>'
          +'<div style="display:flex;gap:8px;">'
          +'<button class="btn btn-gr btn-sm" onclick="apL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-check"/></svg> Approve</button>'
          +'<button class="btn btn-r btn-sm" onclick="rjL('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-x"/></svg> Reject</button>'
          +'<button class="btn btn-o btn-sm" onclick="openListing('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg> Preview</button>'
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

  if(t==='tp'){
    // ── STAGE 5: Tenant Profile verification queue ──
    // Renders the queue of tenant profiles + landlord refs needing admin
    // review. Delegates to renderTenantProfileAdmin() to keep this function
    // navigable (renderAdmin is already 200+ lines).
    await renderTenantProfileAdmin(el);
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
            +'<td style="font-size:12px;cursor:pointer;color:var(--t);font-weight:600;" onclick="openListing('+i.listingId+')">'+esc(i.listingTitle)+' &#8599;</td>'
            +'<td><span class="pill '+(i.lf==='buy'?'pill-y':'pill-b')+'">'+esc(i.lf||'rent')+'</span></td>'
            +'<td>'+esc(i.listingCity||'—')+'</td>'
            +'<td style="max-width:140px;font-size:12px;color:var(--mu);">'+esc(i.message||'—')+'</td>'
            +'<td style="white-space:nowrap;">'+i.sentAt+'</td>'
            +'<td><button class="btn btn-sm btn-o" onclick="openListing('+i.listingId+')">View</button></td>'
            +'</tr>';
        }).join('')
        +'</tbody></table></div></div>'
      :'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No inquiries yet.</div>');
}

function aRow(l){
  var thumbH=l.images&&l.images.length
    ?'<img loading="lazy" decoding="async" src="'+l.images[0]+'" alt="'+escAttr(l.title)+'" style="width:44px;height:44px;object-fit:cover;border-radius:7px;flex-shrink:0;cursor:pointer;" onclick="openListing('+l.id+')" title="Preview listing"/>'
    :'<div style="font-size:26px;cursor:pointer;" onclick="openListing('+l.id+')">'+(l.lf==='buy'?'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-key"/></svg>':'<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-home"/></svg>')+'</div>';
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
    +'<div class="li-in" style="cursor:pointer;" onclick="openListing('+l.id+')">'
    +'<strong style="color:var(--t);">'+esc(l.title)+'</strong>'
    +'<span>'+esc(l.city)+' &middot; '+pr+' &middot; '+esc(l.owner)+(l.agency?' &middot; '+esc(l.agency):'')+'</span>'
    +'</div>'
    +statusPill
    +'<span class="pill '+(l.lf==='rent'?'pill-b':'pill-y')+'" style="font-size:10px;">'+l.lf.toUpperCase()+'</span>'
    +'<div class="li-ac">'
    +'<button class="btn btn-sm btn-o" onclick="openListing('+l.id+')"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-eye"/></svg> View</button>'
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

// ══ TENANT PROFILE ADMIN (Stage 5) ══
// Admin queue for verifying tenant profiles. Lists tenants with at least one
// `pending` document or unverified landlord reference at the top, then everyone
// else. Admin can verify/reject each document and each landlord reference
// independently, write tenant-facing notes (which the tenant sees on their
// profile page) plus private admin-only notes, and export everything as CSV.
//
// Document files live in the private `tenant-docs` storage bucket — only admin
// has read access (per RLS in the migration). Brokers NEVER see the files.
// We generate short-lived signed URLs (60s) when admin clicks "Open file".
//
// Verification level (Bronze/Silver/Gold/Platinum) is recomputed automatically
// by the DB trigger every time we update doc_verifications or insert/update
// a landlord ref — we just write the change and re-render.
async function renderTenantProfileAdmin(el){
  if(!el)return;
  el.innerHTML='<div class="mk-spinner"><span class="mk-spinner-text">Loading tenant profiles…</span></div>';

  // Fetch profiles + refs + tenant user info in three queries.
  var {data:profs,error:pErr}=await sb.from('tenant_profiles').select('*').order('updated_at',{ascending:false});
  if(pErr){el.innerHTML='<div class="al ale">Error loading profiles: '+esc(pErr.message)+'</div>';return;}
  profs=profs||[];

  var userIds=profs.map(function(p){return p.user_id;});
  var userMap={};
  if(userIds.length){
    var {data:users}=await sb.from('users').select('id,name,email,phone').in('id',userIds);
    (users||[]).forEach(function(u){userMap[u.id]=u;});
  }

  var {data:refs}=await sb.from('tenant_landlord_refs').select('*').order('id',{ascending:true});
  refs=refs||[];
  var refsByUser={};
  refs.forEach(function(r){
    if(!refsByUser[r.user_id])refsByUser[r.user_id]=[];
    refsByUser[r.user_id].push(r);
  });

  // Filter state — kept in a global so it survives re-renders triggered by
  // verify/reject actions.
  if(typeof window._tpaFilter==='undefined')window._tpaFilter={status:'pending',q:''};
  var filter=window._tpaFilter;

  // Compute "pending" status per profile (any doc 'pending' OR any unverified ref).
  function _hasPending(p){
    var dv=p.doc_verifications||{};
    if(Object.keys(dv).some(function(k){return dv[k]==='pending';}))return true;
    var rs=refsByUser[p.user_id]||[];
    if(rs.some(function(r){return !r.verified;}))return true;
    return false;
  }

  // Apply filter
  var filtered=profs.filter(function(p){
    if(filter.status==='pending'&&!_hasPending(p))return false;
    if(filter.status==='verified'&&p.verification_level==='none')return false;
    if(filter.q){
      var u=userMap[p.user_id]||{};
      var hay=((u.name||'')+' '+(u.email||'')+' '+(p.employer_name||'')).toLowerCase();
      if(hay.indexOf(filter.q.toLowerCase())<0)return false;
    }
    return true;
  });

  var pendingCount=profs.filter(_hasPending).length;
  var totalCount=profs.length;

  // ── Header + filters + export ──
  var header=''+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:10px;">'+
      '<div>'+
        '<h2 style="font-family:Playfair Display,serif;font-size:18px;margin-bottom:2px;">'+
          '<svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;color:#9b59b6;"><use href="#i-shield-check"/></svg> Tenant Profile Verification'+
        '</h2>'+
        '<p style="font-size:12px;color:var(--mu);">'+pendingCount+' awaiting review &middot; '+totalCount+' total</p>'+
      '</div>'+
      '<button class="leads-export-btn" onclick="exportTenantProfilesCSV()"><svg class="icn icn-sm" aria-hidden="true" style="vertical-align:-3px;"><use href="#i-mail"/></svg> Export CSV</button>'+
    '</div>';
  var filterBar=''+
    '<div class="leads-toolbar">'+
      '<div class="filt-group"><label>Filter</label><select onchange="window._tpaFilter.status=this.value;renderAdmin(\'tp\')">'+
        '<option value="pending"'+(filter.status==='pending'?' selected':'')+'>Awaiting review</option>'+
        '<option value="verified"'+(filter.status==='verified'?' selected':'')+'>Verified profiles</option>'+
        '<option value="all"'+(filter.status==='all'?' selected':'')+'>All profiles</option>'+
      '</select></div>'+
      '<div class="filt-group"><label>Search</label><input type="text" placeholder="Name, email, employer…" value="'+esc(filter.q)+'" oninput="clearTimeout(window._tpaSearchT);window._tpaSearchT=setTimeout(function(){window._tpaFilter.q=event.target.value;renderAdmin(\'tp\');},250)" style="width:220px;"/></div>'+
    '</div>';

  if(!filtered.length){
    el.innerHTML=header+filterBar+'<div style="background:var(--wh);border-radius:12px;padding:28px;text-align:center;color:var(--mu);border:1px solid var(--sa);">No profiles match this filter.</div>';
    return;
  }

  // ── Render each profile card ──
  var cards=await Promise.all(filtered.map(function(p){return _renderTpAdminCard(p,userMap[p.user_id]||{},refsByUser[p.user_id]||[]);}));
  el.innerHTML=header+filterBar+'<div style="display:flex;flex-direction:column;gap:14px;">'+cards.join('')+'</div>';
}

// Render a single tenant profile card. Returns HTML string (sync — signed URLs
// are generated on-demand when admin clicks the file button).
async function _renderTpAdminCard(p,user,refs){
  var dv=p.doc_verifications||{};
  var levelColors={none:'#999',bronze:'#cd7f32',silver:'#999',gold:'#daa520',platinum:'#9b59b6'};
  var levelLabels={none:'Not Verified',bronze:'Bronze',silver:'Silver',gold:'Gold',platinum:'Platinum'};
  var lvl=p.verification_level||'none';
  var verifBadge='<span style="display:inline-flex;align-items:center;gap:6px;background:'+(levelColors[lvl]||'#999')+';color:#fff;padding:3px 10px;border-radius:14px;font-size:11px;font-weight:700;"><svg class="icn icn-sm" aria-hidden="true"><use href="#i-check"/></svg>'+(levelLabels[lvl]||'Not Verified')+'</span>';

  // Per-document row helpers
  function _docRow(slot,label,urlCol){
    var url=p[urlCol];
    var state=dv[slot]||(url?'pending':null);
    if(!url)return '';
    var stateBadge=state==='verified'
      ?'<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✓ Verified</span>'
      :state==='rejected'
      ?'<span style="background:#f8d7da;color:#721c24;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✗ Rejected</span>'
      :'<span style="background:#fff3cd;color:#856404;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">⏳ Pending</span>';
    var actions='';
    if(state!=='verified')actions+='<button class="btn btn-sm" style="background:#28a745;color:#fff;border:0;padding:4px 10px;font-size:11px;" onclick="adminTpVerifyDoc(\''+p.user_id+'\',\''+slot+'\')">Verify</button> ';
    if(state!=='rejected')actions+='<button class="btn btn-sm" style="background:#d9534f;color:#fff;border:0;padding:4px 10px;font-size:11px;" onclick="adminTpRejectDoc(\''+p.user_id+'\',\''+slot+'\')">Reject</button>';
    return ''+
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding:8px 0;border-bottom:1px solid var(--sa);">'+
        '<div style="flex:1;min-width:0;">'+
          '<strong style="font-size:12.5px;">'+esc(label)+'</strong> '+stateBadge+
          '<div style="font-size:11px;color:var(--mu);margin-top:2px;"><button class="btn btn-o btn-sm" style="font-size:11px;padding:3px 9px;" onclick="adminTpOpenDoc(\''+esc(url)+'\')">Open file</button></div>'+
        '</div>'+
        '<div>'+actions+'</div>'+
      '</div>';
  }

  // Per-landlord-ref row helpers
  function _refRow(r){
    var stateBadge=r.verified
      ?'<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">✓ Verified ('+esc(r.verification_outcome||'')+')</span>'
      :'<span style="background:#fff3cd;color:#856404;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;">⏳ Awaiting verification</span>';
    var actions='';
    if(!r.verified){
      actions+=
        '<button class="btn btn-sm" style="background:#28a745;color:#fff;border:0;padding:4px 10px;font-size:11px;" onclick="adminTpVerifyRef('+r.id+',\'positive\')">✓ Positive</button> '+
        '<button class="btn btn-sm" style="background:#daa520;color:#fff;border:0;padding:4px 10px;font-size:11px;" onclick="adminTpVerifyRef('+r.id+',\'mixed\')">~ Mixed</button> '+
        '<button class="btn btn-sm" style="background:#d9534f;color:#fff;border:0;padding:4px 10px;font-size:11px;" onclick="adminTpVerifyRef('+r.id+',\'negative\')">✗ Negative</button> '+
        '<button class="btn btn-sm" style="background:#6c757d;color:#fff;border:0;padding:4px 10px;font-size:11px;" onclick="adminTpVerifyRef('+r.id+',\'unreachable\')">? Unreachable</button>';
    }
    var rentLabel=r.rent_amount?' &middot; ₹'+r.rent_amount.toLocaleString('en-IN')+'/mo':'';
    var dateLabel=r.tenancy_start||r.tenancy_end?' &middot; '+esc(r.tenancy_start||'?')+' to '+esc(r.tenancy_end||'?'):'';
    return ''+
      '<div style="background:var(--cr);border-radius:8px;padding:10px;margin-top:8px;">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">'+
          '<div style="flex:1;min-width:0;">'+
            '<strong>'+esc(r.landlord_name)+'</strong> '+stateBadge+'<br/>'+
            '<span style="font-size:12px;"><a href="tel:'+esc(r.landlord_phone)+'" style="color:var(--t);">'+esc(r.landlord_phone)+'</a>'+rentLabel+dateLabel+'</span>'+
            (r.property_addr?'<div style="font-size:11px;color:var(--mu);margin-top:2px;">'+esc(r.property_addr)+'</div>':'')+
            (r.admin_notes?'<div style="font-size:11px;color:var(--mu);margin-top:4px;font-style:italic;">Note: '+esc(r.admin_notes)+'</div>':'')+
          '</div>'+
          '<div>'+actions+'</div>'+
        '</div>'+
      '</div>';
  }

  // Lifestyle (admin-only) summary
  var lifestyleStr=[
    p.religion?'Religion: '+p.religion:'',
    p.dietary_preference?'Diet: '+p.dietary_preference:'',
    p.alcohol_pref?'Alcohol: '+p.alcohol_pref:''
  ].filter(Boolean).join(' &middot; ');

  // Basic + employment summary
  var summary='';
  if(p.num_occupants||p.marital_status)summary+='<div><strong>Household:</strong> '+(p.num_occupants?p.num_occupants+' occupants':'')+(p.marital_status?' &middot; '+p.marital_status:'')+(p.has_pets?' &middot; pets':'')+(p.smokes?' &middot; smokes':'')+'</div>';
  if(p.employer_name)summary+='<div><strong>Employer:</strong> '+esc(p.employer_name)+(p.role_title?' &middot; '+esc(p.role_title):'')+'</div>';
  if(p.monthly_income)summary+='<div><strong>Income:</strong> ₹'+p.monthly_income.toLocaleString('en-IN')+'/mo</div>';
  if(p.pan_number)summary+='<div><strong>PAN:</strong> <code style="font-family:monospace;background:var(--cr);padding:1px 4px;border-radius:3px;">'+esc(p.pan_number)+'</code></div>';

  var docsHtml=
    _docRow('pan_doc','PAN Card','pan_doc_url')+
    _docRow('employment_letter','Employment Letter','employment_letter_url')+
    _docRow('salary_slip_1','Salary Slip 1','salary_slip_1_url')+
    _docRow('salary_slip_2','Salary Slip 2','salary_slip_2_url')+
    _docRow('salary_slip_3','Salary Slip 3','salary_slip_3_url')+
    _docRow('itr_y1','ITR (Latest FY)','itr_y1_url')+
    _docRow('itr_y2','ITR (Previous FY)','itr_y2_url');

  var refsHtml=refs.length?refs.map(_refRow).join(''):'<p style="font-size:12px;color:var(--mu);font-style:italic;margin-top:8px;">No references on file.</p>';

  var notesArea=''+
    '<div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--sa);display:grid;grid-template-columns:1fr 1fr;gap:10px;">'+
      '<div>'+
        '<label class="flbl" style="font-size:11px;">Tenant-facing note (visible to tenant)</label>'+
        '<textarea id="tpa_tn_'+p.user_id+'" class="fi" rows="2" style="font-size:12px;" placeholder="e.g. Re-upload clearer scan of PAN">'+esc(p.tenant_facing_notes||'')+'</textarea>'+
      '</div>'+
      '<div>'+
        '<label class="flbl" style="font-size:11px;">Admin private note (admin-only)</label>'+
        '<textarea id="tpa_an_'+p.user_id+'" class="fi" rows="2" style="font-size:12px;" placeholder="Internal notes — never shown to tenant or broker">'+esc(p.verification_notes||'')+'</textarea>'+
      '</div>'+
    '</div>'+
    '<div style="text-align:right;margin-top:8px;">'+
      '<button class="btn btn-bl btn-sm" onclick="adminTpSaveNotes(\''+p.user_id+'\')">Save notes</button>'+
    '</div>';

  return ''+
    '<div style="background:var(--wh);border-radius:12px;padding:18px 20px;border:1px solid var(--sa);">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:10px;">'+
        '<div>'+
          '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">'+
            '<strong style="font-size:15px;">'+esc(user.name||'(unnamed)')+'</strong>'+
            verifBadge+
          '</div>'+
          '<div style="font-size:12px;color:var(--mu);margin-top:2px;">'+esc(user.email||'')+(user.phone?' &middot; '+esc(user.phone):'')+'</div>'+
        '</div>'+
        '<div style="font-size:11px;color:var(--mu);">Updated '+(p.updated_at?new Date(p.updated_at).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'')+'</div>'+
      '</div>'+
      (summary?'<div style="font-size:13px;line-height:1.6;background:var(--cr);padding:10px;border-radius:8px;margin-bottom:10px;">'+summary+'</div>':'')+
      (lifestyleStr?'<div style="font-size:12px;background:#fef9e7;border:1px solid #f0d080;color:#856404;padding:8px 10px;border-radius:8px;margin-bottom:10px;"><strong>Lifestyle (admin-only):</strong> '+esc(lifestyleStr)+'</div>':'')+
      (p.self_intro?'<div style="font-size:13px;background:var(--cr);padding:10px;border-radius:8px;margin-bottom:10px;line-height:1.5;"><strong>About them:</strong> '+esc(p.self_intro)+'</div>':'')+
      '<details'+(_hasPendingDocs(p)?' open':'')+'><summary style="cursor:pointer;font-size:13px;font-weight:700;padding:6px 0;">Documents</summary>'+
        (docsHtml||'<p style="font-size:12px;color:var(--mu);font-style:italic;margin-top:8px;">No documents uploaded.</p>')+
      '</details>'+
      '<details'+(refs.some(function(r){return !r.verified;})?' open':'')+' style="margin-top:8px;"><summary style="cursor:pointer;font-size:13px;font-weight:700;padding:6px 0;">Landlord References</summary>'+
        refsHtml+
      '</details>'+
      notesArea+
    '</div>';
}

function _hasPendingDocs(p){
  var dv=p.doc_verifications||{};
  return Object.keys(dv).some(function(k){return dv[k]==='pending';});
}

// ── Admin actions ──

// Open a private storage file. Generates a 60-second signed URL and opens
// in a new tab so admin can review without leaving the queue.
async function adminTpOpenDoc(path){
  if(!path){toast('No file path','e');return;}
  var {data,error}=await sb.storage.from('tenant-docs').createSignedUrl(path,60);
  if(error){toast('Could not open file: '+error.message,'e');return;}
  if(data&&data.signedUrl){
    window.open(data.signedUrl,'_blank','noopener');
  }
}

async function adminTpVerifyDoc(userId,slot){
  // Read current doc_verifications, set this slot to 'verified', write back.
  // The DB trigger recomputes verification_level automatically.
  var {data:cur}=await sb.from('tenant_profiles').select('doc_verifications').eq('user_id',userId).single();
  var dv=(cur&&cur.doc_verifications)||{};
  dv[slot]='verified';
  var {error}=await sb.from('tenant_profiles').update({
    doc_verifications:dv,
    verified_by:cu.id,
    verified_at:new Date().toISOString()
  }).eq('user_id',userId);
  if(error){toast('Verify failed: '+error.message,'e');return;}
  toast('Document verified ✓');
  await renderAdmin('tp');
}

async function adminTpRejectDoc(userId,slot){
  var reason=prompt('Reason for rejection? (will be shared with tenant)','');
  if(reason===null)return;
  var {data:cur}=await sb.from('tenant_profiles').select('doc_verifications,tenant_facing_notes').eq('user_id',userId).single();
  var dv=(cur&&cur.doc_verifications)||{};
  dv[slot]='rejected';
  // Append the reason to tenant-facing notes if provided
  var tn=cur&&cur.tenant_facing_notes||'';
  if(reason&&reason.trim()){
    var slotLabel={pan_doc:'PAN',employment_letter:'Employment letter',salary_slip_1:'Salary slip 1',salary_slip_2:'Salary slip 2',salary_slip_3:'Salary slip 3',itr_y1:'ITR (latest)',itr_y2:'ITR (previous)'}[slot]||slot;
    tn=(tn?tn+'\n':'')+'['+new Date().toISOString().split('T')[0]+'] '+slotLabel+': '+reason.trim();
  }
  var {error}=await sb.from('tenant_profiles').update({
    doc_verifications:dv,
    tenant_facing_notes:tn,
    verified_by:cu.id,
    verified_at:new Date().toISOString()
  }).eq('user_id',userId);
  if(error){toast('Reject failed: '+error.message,'e');return;}
  toast('Document rejected. Tenant will see your note.');
  await renderAdmin('tp');
}

async function adminTpVerifyRef(refId,outcome){
  var notes=prompt('Optional notes from your conversation with the landlord?','');
  if(notes===null)return;
  var {error}=await sb.from('tenant_landlord_refs').update({
    verified:true,
    verified_at:new Date().toISOString(),
    verified_by:cu.id,
    verification_outcome:outcome,
    admin_notes:notes||null
  }).eq('id',refId);
  if(error){toast('Failed: '+error.message,'e');return;}
  toast('Reference marked '+outcome);
  await renderAdmin('tp');
}

async function adminTpSaveNotes(userId){
  var tnEl=document.getElementById('tpa_tn_'+userId);
  var anEl=document.getElementById('tpa_an_'+userId);
  if(!tnEl||!anEl)return;
  var {error}=await sb.from('tenant_profiles').update({
    tenant_facing_notes:tnEl.value||null,
    verification_notes:anEl.value||null
  }).eq('user_id',userId);
  if(error){toast('Save failed: '+error.message,'e');return;}
  toast('Notes saved.');
}

// ── CSV Export ──
// Calls the SECURITY DEFINER RPC admin_export_tenant_profiles which returns
// every column. Audit-logged on the SQL side.
async function exportTenantProfilesCSV(){
  toast('Preparing export…');
  var {data,error}=await sb.rpc('admin_export_tenant_profiles');
  if(error){toast('Export failed: '+error.message,'e');return;}
  if(!data||!data.length){toast('No tenant profiles to export.','e');return;}
  // Build CSV
  var keys=Object.keys(data[0]);
  var rows=[keys.join(',')];
  data.forEach(function(r){
    rows.push(keys.map(function(k){
      var v=r[k];
      if(v==null)return '';
      var s=String(v);
      // Escape quotes + wrap if contains comma, quote, or newline
      if(/[",\n]/.test(s))s='"'+s.replace(/"/g,'""')+'"';
      return s;
    }).join(','));
  });
  var blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='tenant-profiles-'+new Date().toISOString().split('T')[0]+'.csv';
  a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);},1000);
  toast('Exported '+data.length+' profiles.');
}

// ══ REPORTS ══
async function rReports(){
  var el=document.getElementById('aC');if(!el)return;
  var rpts=await gRpts();
  var open=rpts.filter(function(r){return r.status==='open';});
  var resolved=rpts.filter(function(r){return r.status==='resolved';});
  var ls=await gL();
  var html='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:10px;">'
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
        ?'<span style="color:var(--t);cursor:pointer;font-weight:600;" onclick="openListing('+r.listingId+')">'+esc(r.listingTitle)+' &#8599;</span>'
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
      // Reset builder project fields
      ['lAcreage','lTowers','lBooking','lBrochure','lMasterPlan','lRe2','lProjType'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
      var brkDef=document.querySelector('input[name="lBreakup"][value="all_inclusive"]');
      if(brkDef)brkDef.checked=true;
      document.querySelectorAll('input[name="lScheme"]').forEach(function(c){c.checked=false;});
      _selFurn=[];renderFurnishingItems();
      _selWater=[];setWaterFromString('');
      _landmarks=[];renderLandmarks();
      _uploadingVideo=null;_existingVideoUrl='';renderVideoPreview();
      _resetFormMap();
      // Reset split price inputs and Price Type dropdown
      ['lPrCore','lPrMinCore','lPrMaxCore','lPr','lPrMin','lPrMax'].forEach(function(id){
        var el=document.getElementById(id);if(el)el.value='';
      });
      ['lPrUnit','lPrMinUnit','lPrMaxUnit','lPrType'].forEach(function(id){
        var el=document.getElementById(id);if(el)el.selectedIndex=0;
      });
      bindPriceInputs();
      onPriceTypeChange();
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
  var el=document.getElementById(id);
  if(el){
    el.classList.add('open');
    return;
  }
  // Modal not present on this page (e.g. listing.html doesn't have authM/cntM).
  // Fall back to redirecting to the homepage with a flag the SPA recognizes.
  // The SPA's bootstrap reads these params and opens the right modal.
  var redirectMap={
    authM:'/?openLogin=1',
    cntM:'/?openContact='+(typeof actL!=='undefined'&&actL&&actL.id?actL.id:''),
    pwUpdateM:'/?openPwUpdate=1',
    addM:'/?openPost=1',
    profileM:'/?openProfile=1',
    reportM:null,// reportM is injected on every page by common.js
    viewM:null  // listing.html renders inline — absence here is intentional
  };
  if(redirectMap[id]){
    var here=window.location.pathname+window.location.search;
    var url=redirectMap[id];
    if(here&&here!=='/'){
      url+=(url.indexOf('?')>=0?'&':'?')+'next='+encodeURIComponent(here);
    }
    window.location.href=url;
  }
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
// toast() is defined in common.js — kept here as a comment so future readers
// know not to redeclare it.

// ══ QUICK ACTION HELPERS ══
// Reset all browse filters back to defaults — used by QA buttons so that
// each click produces a clean, focused result (no filter stacking from prior clicks).
// Locality match — every token in the query must appear as a whole word in the listing's locality.
// "Andheri" matches both "Andheri East" and "Andheri West".
// "Andheri East" matches ONLY "Andheri East" (not "Andheri West").
// Handles directional shorthand: "E" → "east", "W" → "west", "Andheri-East" → "Andheri East".
function _matchLocality(listingLoc, query){
  if(!query)return true;
  if(!listingLoc)return false;
  function normalize(s){
    return String(s)
      .toLowerCase()
      // Replace dashes/punctuation with spaces so "Andheri-East" matches "Andheri East"
      .replace(/[\-\/.,()]+/g,' ')
      // Collapse whitespace
      .replace(/\s+/g,' ')
      .trim();
  }
  function expandTokens(tokens){
    var dirMap={'e':'east','w':'west','n':'north','s':'south','ne':'northeast','nw':'northwest','se':'southeast','sw':'southwest'};
    return tokens.map(function(t){return dirMap[t]||t;});
  }
  var locNorm=normalize(listingLoc);
  var locTokens=expandTokens(locNorm.split(' ').filter(Boolean));
  var qNorm=normalize(query);
  var qTokens=expandTokens(qNorm.split(' ').filter(Boolean));
  if(!qTokens.length)return true;
  // Every query token must match a locality token (substring of a single token, not across)
  return qTokens.every(function(qt){
    return locTokens.some(function(lt){
      return lt.indexOf(qt)>=0;
    });
  });
}

// Reset all browse filters back to defaults — used by QA buttons so that
// each click produces a clean, focused result (no filter stacking from prior clicks).
function _resetBrowseFilters(){
  fRT=[];fRB=[];fRF=[];fRA=[];
  fBT=[];fBB=[];fBF=[];fBA=[];fBPo=[];fBST=[];fBFc=[];fBFl=[];
  fVer=false;fRer=false;
  _projectsOnly=false;
  _browseShown=0;_browseFiltered=[];
  // Clear filter sidebar input fields too
  ['fCity','fLoc','fRmn','fRmx','fAv','fBCity','fBLoc','fBmn','fBmx','fAmn','fAmx','bSearch'].forEach(function(id){
    var e=document.getElementById(id);
    if(!e)return;
    if(e.tagName==='SELECT')e.selectedIndex=0;
    else e.value='';
  });
}

// Quick-action CTAs from the homepage. Each navigates to /browse with the
// right URL params so the destination is bookmarkable, shareable, and
// crawlable — a "PG/Hostel" landing page, a "RERA-verified buys" page, etc.
function qaNewProjects(){window.location.href='/browse?lf=project';}
function qaPG(){window.location.href='/browse?lf=rent&type=PG+%2F+Room';}
function qaRERA(){window.location.href='/browse?lf=buy&rer=1';}
function qaVerified(){window.location.href='/browse?lf=rent&ver=1';}

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
  // ── Additional gaps — round 3 ──
  // Bare-name parents (so autocomplete suggests them; matcher logic covers East/West)
  {n:'Andheri',s:'Mumbai'},{n:'Bandra',s:'Mumbai'},{n:'Khar',s:'Mumbai'},
  {n:'Santacruz',s:'Mumbai'},{n:'Vile Parle',s:'Mumbai'},{n:'Juhu',s:'Mumbai'},
  {n:'Dadar',s:'Mumbai'},{n:'Mahim',s:'Mumbai'},{n:'Sion',s:'Mumbai'},
  {n:'Worli',s:'Mumbai'},{n:'Lower Parel',s:'Mumbai'},{n:'Prabhadevi',s:'Mumbai'},
  {n:'Parel',s:'Mumbai'},{n:'Wadala',s:'Mumbai'},{n:'Sewri',s:'Mumbai'},
  {n:'Bhandup',s:'Mumbai'},{n:'Vikhroli',s:'Mumbai'},{n:'Mulund',s:'Mumbai'},
  {n:'Goregaon',s:'Mumbai'},{n:'Malad',s:'Mumbai'},{n:'Kandivali',s:'Mumbai'},
  {n:'Borivali',s:'Mumbai'},{n:'Dahisar',s:'Mumbai'},{n:'Ghatkopar',s:'Mumbai'},
  {n:'Vidyavihar',s:'Mumbai'},{n:'Kurla',s:'Mumbai'},{n:'Chembur',s:'Mumbai'},
  // Powai sub-localities
  {n:'Hiranandani Gardens',s:'Mumbai'},{n:'Powai Lake',s:'Mumbai'},{n:'L&T Crossing Powai',s:'Mumbai'},
  // Andheri sub-localities
  {n:'Lokhandwala Andheri',s:'Mumbai'},{n:'Lokhandwala Complex',s:'Mumbai'},
  {n:'Andheri Kurla Road',s:'Mumbai'},{n:'Marol Naka',s:'Mumbai'},
  {n:'Versova Beach',s:'Mumbai'},{n:'JVPD Scheme',s:'Mumbai'},{n:'JVPD',s:'Mumbai'},
  {n:'Juhu Tara',s:'Mumbai'},{n:'Juhu Tara Road',s:'Mumbai'},{n:'Juhu Beach',s:'Mumbai'},
  {n:'Khar Road',s:'Mumbai'},{n:'Khar Danda',s:'Mumbai'},
  {n:'Asalpha',s:'Mumbai'},
  // Chembur micro-localities
  {n:'Chembur East',s:'Mumbai'},{n:'Chembur West',s:'Mumbai'},
  {n:'Diamond Garden',s:'Mumbai'},{n:'Acharya Garden',s:'Mumbai'},
  // South-central
  {n:'Antop Hill',s:'Mumbai'},{n:'Cotton Green',s:'Mumbai'},{n:'Currey Road',s:'Mumbai'},
  {n:'Chinchpokli',s:'Mumbai'},{n:'Lower Parel West',s:'Mumbai'},{n:'NM Joshi Marg',s:'Mumbai'},
  // Eastern Suburbs additions
  {n:'Kanjurmarg',s:'Mumbai'},{n:'Kanjurmarg West',s:'Mumbai'},{n:'Kanjurmarg East',s:'Mumbai'},
  {n:'Nahur',s:'Mumbai'},{n:'Nahur West',s:'Mumbai'},{n:'Nahur East',s:'Mumbai'},
  // Dahisar split
  {n:'Dahisar West',s:'Mumbai'},{n:'Dahisar East',s:'Mumbai'},
  {n:'Borivali East',s:'Mumbai'},{n:'Borivali West',s:'Mumbai'},
  {n:'Kandivali East',s:'Mumbai'},{n:'Kandivali West',s:'Mumbai'},
  {n:'Malad East',s:'Mumbai'},{n:'Malad West',s:'Mumbai'},
  {n:'Goregaon East',s:'Mumbai'},{n:'Goregaon West',s:'Mumbai'},
  // Town/Old Mumbai
  {n:'Cuffe Parade',s:'Mumbai'},{n:'Colaba',s:'Mumbai'},{n:'Fort',s:'Mumbai'},
  {n:'Churchgate',s:'Mumbai'},{n:'Nariman Point',s:'Mumbai'},
  // Mumbai Metropolitan Region (within Mumbai but technically Thane/Raigad — many treat as Mumbai)
  {n:'Kalwa',s:'Mumbai'},{n:'Mumbra',s:'Mumbai'},{n:'Diva',s:'Mumbai'},
  {n:'Dombivli',s:'Mumbai'},{n:'Dombivli East',s:'Mumbai'},{n:'Dombivli West',s:'Mumbai'},
  {n:'Kalyan',s:'Mumbai'},{n:'Kalyan East',s:'Mumbai'},{n:'Kalyan West',s:'Mumbai'},
  {n:'Ulhasnagar',s:'Mumbai'},{n:'Ambernath',s:'Mumbai'},{n:'Badlapur',s:'Mumbai'},
  {n:'Karjat',s:'Mumbai'},{n:'Asangaon',s:'Mumbai'},{n:'Khopoli',s:'Mumbai'},
  // Coastal suburbs
  {n:'Madh Beach',s:'Mumbai'},{n:'Manori',s:'Mumbai'},{n:'Erangal',s:'Mumbai'},
  {n:'Akse Beach',s:'Mumbai'},{n:'Aksa',s:'Mumbai'},
  // IT corridor / business hubs
  {n:'Mindspace Malad',s:'Mumbai'},{n:'Nirlon Knowledge Park',s:'Mumbai'},
  {n:'Mumbai BKC',s:'Mumbai'},{n:'One BKC',s:'Mumbai'},
  {n:'Lower Parel BFC',s:'Mumbai'},{n:'Indiabulls Finance Centre',s:'Mumbai'},
  // Worli / Prabhadevi micro-localities
  {n:'Worli Sea Face',s:'Mumbai'},{n:'Worli Naka',s:'Mumbai'},{n:'Pochkhanwala Road',s:'Mumbai'},
  {n:'Annie Besant Road',s:'Mumbai'},{n:'Curzon Road',s:'Mumbai'},
  // Bandra / BKC micro-localities
  {n:'Bandra Reclamation',s:'Mumbai'},{n:'Mount Mary',s:'Mumbai'},{n:'St Andrews Road',s:'Mumbai'},
  {n:'33rd Road Bandra',s:'Mumbai'},{n:'Almeida Park',s:'Mumbai'},
  // Town / South Mumbai micro-localities not already listed
  {n:'Jamshedji Tata Road',s:'Mumbai'},{n:'JJ Road',s:'Mumbai'},{n:'Sandhurst Road',s:'Mumbai'},
  {n:'Madhav Baug',s:'Mumbai'},{n:'V P Road',s:'Mumbai'},{n:'Khetwadi',s:'Mumbai'},
  {n:'Bhuleshwar Market',s:'Mumbai'},{n:'C P Tank',s:'Mumbai'},{n:'Princess Street',s:'Mumbai'},
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
  // cityRef: id of an input holding the selected city — when present, locality suggestions are scoped to it.
  var cityRef=(opts&&opts.cityRef)||null;
  inp.setAttribute('autocomplete','off');

  inp.addEventListener('input', function(){
    var q = inp.value.trim().toLowerCase();
    hiIdx = -1;
    if(!q){ lst.className='ac-list'; lst.innerHTML=''; return; }
    // Resolve city scope if any
    var cityScope='';
    if(cityRef&&mode==='locality'){
      var cityEl=document.getElementById(cityRef);
      cityScope=cityEl?(cityEl.value||'').trim().toLowerCase():'';
    }
    var matches = INDIAN_CITIES.filter(function(c){
      if(c.n.toLowerCase().indexOf(q) < 0) return false;
      if(mode==='city') return _isCity(c);
      if(mode==='locality'){
        if(_isCity(c))return false;
        // If a city is selected, only suggest localities of that city.
        // c.s is the parent city/state. Match if it equals the selected city, OR
        // (for tier-2/3 cities like 'Lucknow') if the city itself contains it.
        if(cityScope){
          var parent=(c.s||'').toLowerCase();
          if(parent!==cityScope&&parent.indexOf(cityScope)<0&&cityScope.indexOf(parent)<0)return false;
        }
        return true;
      }
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
var _ce = atob('YWNvbnRyYWN0b3JAcmFhZnRlY2guY29t');
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
acInit('fLoc','ac-fLoc','fLoc',{mode:'locality',cityRef:'fCity'}); // Browse rent locality (scoped to fCity)
acInit('fBCity','ac-fBCity','fBCity',{mode:'city'}); // Browse buy city
acInit('fBLoc','ac-fBLoc','fBLoc',{mode:'locality',cityRef:'fBCity'}); // Browse buy locality (scoped to fBCity)
acInit('lCy','ac-lCy','lCy',{mode:'city'});     // Listing form city
// City inputs auto-clear their associated locality input when changed,
// preventing the cross-city locality bug (e.g. Mumbai city + Jubilee Hills locality).
['lCy','fCity','fBCity'].forEach(function(cityId){
  var cityEl=document.getElementById(cityId);
  if(!cityEl)return;
  // Map city input id → locality input id
  var locId=cityId==='lCy'?'lLo':(cityId==='fCity'?'fLoc':'fBLoc');
  cityEl.addEventListener('change',function(){
    var locEl=document.getElementById(locId);
    if(locEl&&locEl.value){
      locEl.value='';
      // If the autocomplete dropdown is open, close it
      var listId='ac-'+locId;
      var lst=document.getElementById(listId);
      if(lst){lst.className='ac-list';lst.innerHTML='';}
    }
  });
});

acInit('lLo','ac-lLo','lLo',{mode:'locality',cityRef:'lCy'});     // Listing form locality (scoped to lCy)

// ══ BOOTSTRAP ══
// Auth bootstrap (getSession, profile fetch, cu population) is now owned by
// common.js — it runs as soon as common.js is parsed and exposes a promise
// `_authReady` that resolves once `cu` is hydrated (or null if not signed in).
//
// We await that promise here, then do the app-specific follow-up: load favs,
// load notifications, refresh the navbar, and render the right page.
(async function(){
  try{
    // Check for recovery token BEFORE waiting on _authReady — Supabase client
    // will auto-process the hash fragment and establish a session, which then
    // flows into the auth bootstrap in common.js.
    var isRecovery=_checkRecoveryToken();

    // Wait for common.js to finish its session check + cu population.
    if(typeof _authReady!=='undefined')await _authReady;

    if(cu){
      // App-specific follow-up that common.js doesn't know about.
      await loadFavs();
      await loadNotifs();
      // common.js already called upNav() once at end of bootstrap. Calling it
      // again is harmless and ensures consistency if anything mutated cu since.
      upNav();
    }
    // If this is a password recovery redirect, show the update modal.
    // Note: common.js's auth listener also opens this modal on PASSWORD_RECOVERY.
    // The duplicate-open is idempotent (classList.add('open') twice = once).
    if(isRecovery&&cu){
      openM('pwUpdateM');
    }
  }catch(e){
    console.warn('App bootstrap error:',e&&e.message);
  }
  // If there's a deep-link hash (e.g. #dashboard, #lister, #admin, #listing/42),
  // route to that page directly instead of rendering home first.
  // Page-type check (Session 2 of MPA refactor): the SPA hash router and
  // renderHome() should ONLY run on the SPA index.html, not on extracted pages
  // like listing.html. Pages opt out by setting data-page on <body>.
  var pageType=document.body&&document.body.getAttribute('data-page');
  if(pageType&&pageType!=='spa'){
    // Extracted page (e.g. listing.html). Its own bootstrap script handles
    // rendering — app.js's job is just to provide helpers (viewL, gL, etc.).
    return;
  }
  // SPA path: backward-compat redirects for old SPA hash deep links →
  // canonical clean URLs introduced in Sessions 2, 3, 5.
  if(window.location.hash){
    var oldListingMatch=window.location.hash.match(/^#listing\/(\d+)$/);
    if(oldListingMatch){
      window.location.replace('/listing?id='+oldListingMatch[1]);
      return;
    }
    if(window.location.hash==='#dashboard'){
      window.location.replace('/dashboard');
      return;
    }
    if(window.location.hash==='#lister'){
      window.location.replace('/lister');
      return;
    }
    if(window.location.hash==='#browse'){
      window.location.replace('/browse');
      return;
    }
  }
  // Hash deep links that DON'T have a real page yet (admin still in SPA, home).
  var hasDeepLink=window.location.hash&&/^#(home|admin)$/.test(window.location.hash);
  if(hasDeepLink){
    handleHashRoute();
  } else {
    await renderHome();
  }
  // Handle ?openLogin=1, ?openSignup=1, ?openPost=1, ?openContact=42, ?openPwUpdate=1
  // These flags are set by other pages (listing.html, etc.) when a modal needs
  // to be opened on the SPA. After processing, we strip the flag from the URL
  // so reloads don't keep popping the modal.
  var qs=new URLSearchParams(window.location.search);
  var openedSomething=false;
  if(qs.get('openLogin')==='1'){
    openM('authM');setAT('login');
    openedSomething=true;
  } else if(qs.get('openSignup')==='1'){
    openM('authM');setAT('reg');
    openedSomething=true;
  } else if(qs.get('openPwUpdate')==='1'){
    openM('pwUpdateM');
    openedSomething=true;
  } else if(qs.get('openPost')==='1'){
    if(typeof postPropertyClick==='function')postPropertyClick();
    openedSomething=true;
  } else if(qs.get('openContact')){
    var contactId=Number(qs.get('openContact'));
    if(contactId>0&&typeof oCnt==='function')oCnt(contactId);
    openedSomething=true;
  } else if(qs.get('openProfile')==='1'){
    if(typeof openEditProfile==='function')openEditProfile();
    openedSomething=true;
  } else if(qs.get('editListing')){
    var editId=Number(qs.get('editListing'));
    if(editId>0&&typeof editListing==='function')editListing(editId);
    openedSomething=true;
  }
  if(openedSomething&&window.history&&window.history.replaceState){
    var keep=[];
    qs.forEach(function(v,k){if(!/^open/.test(k))keep.push(k+'='+encodeURIComponent(v));});
    var newUrl=window.location.pathname+(keep.length?'?'+keep.join('&'):'')+window.location.hash;
    window.history.replaceState(null,'',newUrl);
  }
})();
// Auth state listener (SIGNED_OUT, PASSWORD_RECOVERY) is now wired up in
// common.js. Don't add another listener here — Supabase fires both, which
// would cause duplicate side-effects (e.g. modal opening twice).
// Poll for new notifications every 60 seconds
// Poll notifications every 20s for near-real-time updates
setInterval(function(){if(cu)loadNotifs();},20000);
// Also refresh when the tab regains focus (user switches back to the app)
window.addEventListener('focus',function(){if(cu)loadNotifs();});
document.addEventListener('visibilitychange',function(){
  if(!document.hidden&&cu)loadNotifs();
});
