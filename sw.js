// ============================================================================
// Ek Makān — Service Worker
// Network-first for same-origin (always fresh code), cache-first for CDN
// ============================================================================

const CACHE_NAME = 'ekmakan-v2';

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
  self.skipWaiting();
});

// ── ACTIVATE: Clean up old caches and take control of all pages ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
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
// Try network first. Save to cache on success. If network fails, fall back to cache.
// Result: changes you push always show up on next page load, no hard-refresh needed.
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request, { cache: 'no-store' });
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
