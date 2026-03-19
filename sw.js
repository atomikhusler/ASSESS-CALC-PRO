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

// 🔥 STALE-WHILE-REVALIDATE STRATEGY 🔥
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
            const fetchPromise = fetch(e.request).then(networkResponse => {
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, networkResponse.clone());
                });
                return networkResponse;
            }).catch(() => {
                console.log('Offline mode active.');
            });
            return cachedResponse || fetchPromise;
        })
    );
});

// 🔥 THE NETWORK-FIRST STRATEGY 🔥
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(response => {
                // If internet is connected, download fresh code and save to cache
                const resClone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, resClone);
                });
                return response;
            })
            .catch(() => {
                // If NO internet, fall back to the offline cache
                console.log('Network failed, serving from cache.');
                return caches.match(e.request);
            })
    );
});
