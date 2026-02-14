/**
 * Service Worker — Client-Side Asset Caching
 * 
 * Caches pages, CSS, JS, fonts, and images for instant revisits.
 * Uses a "stale-while-revalidate" strategy:
 *   - Serve from cache immediately (fast!)
 *   - Update cache in the background for next visit
 * 
 * This is what makes the portfolio feel instant on repeat visits.
 */

const CACHE_NAME = 'portfolio-cache-v1';

// Assets to pre-cache on install
const PRECACHE_URLS = [
  '/',
  '/about/',
  '/skills/',
  '/projects/',
  '/education/',
  '/contact/',
];

// Install: Pre-cache critical pages
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching core pages');
      return cache.addAll(PRECACHE_URLS);
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch: Stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests and WebSocket/API calls
  if (request.method !== 'GET') return;
  if (request.url.includes('/api/')) return;
  if (request.url.includes('/socket.io/')) return;
  if (request.url.includes('chrome-extension://')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(request);

      // Fetch from network in background to update cache
      const networkFetch = fetch(request)
        .then((networkResponse) => {
          // Only cache successful responses
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed, cachedResponse will be used
          return null;
        });

      // Return cached version immediately, or wait for network
      if (cachedResponse) {
        console.log('[SW] Cache HIT:', request.url);
        // Still update in background
        networkFetch;
        return cachedResponse;
      }

      // No cache — wait for network
      console.log('[SW] Cache MISS, fetching:', request.url);
      const response = await networkFetch;
      return response || new Response('Offline', { status: 503 });
    })
  );
});

// Listen for messages from the app
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      console.log('[SW] Cache cleared');
    });
  }
});
