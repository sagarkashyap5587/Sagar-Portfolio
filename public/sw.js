const CACHE_NAME = 'sagar-portfolio-v2';
const STATIC_CACHE = 'sagar-portfolio-static-v2';
const RUNTIME_CACHE = 'sagar-portfolio-runtime-v2';

// Cache strategy for static assets
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/sagarImage.jpg',
  '/Sagar.pdf'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old versions of caches
          if (cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE &&
              !cacheName.includes('v2')) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Service worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle static assets and Next.js chunks with Cache First strategy
  if (url.origin === location.origin && (
    url.pathname.includes('_next/static/') ||
    url.pathname.includes('_next/image') ||
    STATIC_ASSETS.some(asset => url.pathname === asset) ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|eot)$/i)
  )) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          }).catch((error) => {
            console.warn('[SW] Network request failed, serving from cache:', request.url);
            return cached;
          });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // Handle API calls with Network First strategy
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) => {
        return cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          }).catch(() => {
            console.warn('[SW] API request failed, serving from cache:', request.url);
            return cached;
          });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // Handle HTML pages with Network First, falling back to cache
  if (url.origin === location.origin && (
    request.headers.get('accept')?.includes('text/html') ||
    url.pathname === '/' ||
    !url.pathname.includes('.')
  )) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) => {
        return cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          }).catch(() => {
            console.warn('[SW] Page request failed, serving from cache:', request.url);
            // If no cached version, try to serve the cached homepage
            return cached || cache.match('/');
          });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // Default: Network First with cache fallback
  event.respondWith(
    fetch(request).catch(() => {
      console.warn('[SW] Request failed, trying cache:', request.url);
      return caches.match(request);
    })
  );
});

// Message event for manual updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Skip waiting message received');
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Background sync for when we come back online (optional enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Background sync triggered');
    event.waitUntil(
      // You can add background sync logic here
      console.log('[SW] Background sync completed')
    );
  }
});