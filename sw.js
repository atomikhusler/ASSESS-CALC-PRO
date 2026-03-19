var CACHE_NAME = 'calc-pro-v7-fluid'; 
var ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// 🔥 UNIFIED GHOST ENGINE (Stale-While-Revalidate) 🔥
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
            const fetchPromise = fetch(e.request).then(networkResponse => {
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, networkResponse.clone());
                });
                return networkResponse;
            }).catch(() => {
                // Silent fail. No lag for offline users.
            });
            // Returns cache instantly, updates in background
            return cachedResponse || fetchPromise; 
        })
    );
});