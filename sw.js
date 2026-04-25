// ============================================================================
// Ek Makān — Service Worker
// Network-first for same-origin (always fresh code), cache-first for CDN
// ============================================================================

// Bump CACHE_NAME any time the SW logic itself changes. Each change invalidates
// every previous cache for every user.
const CACHE_NAME = 'ekmakan-v3';

// CDN assets with versioned URLs / integrity hashes — safe to cache aggressively
const CDN_HOSTS = [
  'cdn.jsdelivr.net',
  'unpkg.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

// Never cache these (API calls, auth, real-time data)
const NO_CACHE_PATTERNS = [
  'supabase.co',
  'challenges.cloudflare.com',
  'nominatim.openstreetmap.org',
  'tile.openstreetmap.org',
];

// ── INSTALL: activate immediately, don't pre-cache our own files ──
self.addEventListener('install', (event) => {
  // Take over from any existing SW immediately, no waiting
  self.skipWaiting();
});

// ── ACTIVATE: Aggressively clean ALL caches (not just non-current) ──
// This handles users coming from a previous (potentially broken) SW that may
// have polluted their cache with old app.js/app.css under a different cache name.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => {
        // Tell every open tab a fresh SW is in control — they should reload
        return self.clients.matchAll({ type: 'window' });
      })
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_ACTIVATED', cache: CACHE_NAME });
        });
      })
  );
});

// Listen for explicit "skip waiting" commands from the page (used after
// the page detects a new SW is waiting and the user accepts the reload).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ── FETCH: Route requests to correct strategy ──
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests (POST to Supabase, etc.)
  if (event.request.method !== 'GET') return;

  // Never cache API calls, auth, geocoding
  if (NO_CACHE_PATTERNS.some((p) => url.hostname.includes(p))) return;

  // CDN assets: cache-first (they have versioned URLs / integrity hashes)
  if (CDN_HOSTS.some((h) => url.hostname.includes(h))) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Same-origin: NETWORK-FIRST so users always get the latest code
  // Falls back to cache only if network is completely unavailable
  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(event.request));
    return;
  }
});

// ── STRATEGY: Cache-first (for CDN assets that don't change) ──
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return new Response('', { status: 503, statusText: 'Offline' });
  }
}

// ── STRATEGY: Network-first (for our own code — always fresh) ──
// Try network first with cache: 'no-store' to bypass any HTTP cache layers.
// Save to SW cache on success. If network fails, fall back to cache.
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    // cache: 'reload' tells the browser to bypass the HTTP cache and re-fetch
    // from the network, which is what we want for app code.
    const response = await fetch(request, { cache: 'reload' });
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // Network failed — fall back to cache
    const cached = await cache.match(request);
    if (cached) return cached;
    // Offline fallback page
    return new Response(
      '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ek Makān — Offline</title><style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f5f5f0;color:#333;text-align:center;padding:20px;}div{max-width:400px;}h1{color:#1a7a6e;font-size:28px;margin-bottom:12px;}p{color:#666;line-height:1.6;}</style></head><body><div><h1>You\'re offline</h1><p>Ek Makān needs an internet connection to load listings. Please check your connection and try again.</p><button onclick="location.reload()" style="margin-top:20px;padding:12px 28px;background:#1a7a6e;color:#fff;border:none;border-radius:8px;font-size:15px;cursor:pointer;">Retry</button></div></body></html>',
      { status: 503, headers: { 'Content-Type': 'text/html' } }
    );
  }
}
