const CACHE_NAME = 'sagar-portfolio-v1';
const STATIC_CACHE = 'sagar-portfolio-static-v1';

const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/_next/static/css/',
  '/_next/static/chunks/',
  '/sagarImage.jpg',
  '/Sagar.pdf'
];

const API_CACHE = 'sagar-portfolio-api-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== API_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    return;
  }

  if (url.origin === location.origin) {
    if (url.pathname.includes('/api/')) {
      event.respondWith(
        caches.open(API_CACHE).then((cache) => {
          return cache.match(request).then((cached) => {
            const fetchPromise = fetch(request).then((response) => {
              if (response.ok) {
                cache.put(request, response.clone());
              }
              return response;
            });
            return cached || fetchPromise;
          });
        })
      );
      return;
    }

    if (STATIC_ASSETS.some(asset => url.pathname.includes(asset)) ||
        url.pathname.includes('_next/static/') ||
        url.pathname.includes('.jpg') ||
        url.pathname.includes('.png') ||
        url.pathname.includes('.pdf')) {
      event.respondWith(
        caches.open(STATIC_CACHE).then((cache) => {
          return cache.match(request).then((cached) => {
            const fetchPromise = fetch(request).then((response) => {
              if (response.ok) {
                cache.put(request, response.clone());
              }
              return response;
            }).catch(() => {
              return cached;
            });
            return cached || fetchPromise;
          });
        })
      );
      return;
    }
  }

  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});