// ============================================================================
// Ek Makān — Service Worker
// Cache-first for static assets, network-first for API calls
// ============================================================================

const CACHE_NAME = 'ekmakan-v1';

// Static assets to pre-cache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/app.css',
  '/app.js',
];

// External CDN assets — cached on first use (cache-first after that)
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

// ── INSTALL: Pre-cache core static assets ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: Clean up old caches ──
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

  // Same-origin static assets: stale-while-revalidate
  // Serve from cache immediately, update cache in background
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(event.request));
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
    // Offline and not cached — return a basic fallback
    return new Response('', { status: 503, statusText: 'Offline' });
  }
}

// ── STRATEGY: Stale-while-revalidate (for own static files) ──
// Returns cached version immediately for speed, then fetches fresh copy
// in the background so next load has the latest version.
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  // Fetch fresh copy in background (don't await — return cached immediately)
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  // Return cached version if available, otherwise wait for network
  if (cached) return cached;
  
  const response = await fetchPromise;
  if (response) return response;

  // Both cache and network failed — offline fallback
  return new Response(
    '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ek Makān — Offline</title><style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f5f5f0;color:#333;text-align:center;padding:20px;}div{max-width:400px;}h1{color:#1a7a6e;font-size:28px;margin-bottom:12px;}p{color:#666;line-height:1.6;}</style></head><body><div><h1>You\'re offline</h1><p>Ek Makān needs an internet connection to load listings. Please check your connection and try again.</p><button onclick="location.reload()" style="margin-top:20px;padding:12px 28px;background:#1a7a6e;color:#fff;border:none;border-radius:8px;font-size:15px;cursor:pointer;">Retry</button></div></body></html>',
    { status: 503, headers: { 'Content-Type': 'text/html' } }
  );
}
