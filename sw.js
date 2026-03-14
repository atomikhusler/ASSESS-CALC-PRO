const CACHE_NAME = 'calc-pro-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => 
            res || fetch(e.request).then(r => {
                return caches.open(CACHE_NAME).then(cache => { 
                    cache.put(e.request, r.clone()); 
                    return r; 
                });
            })
        ).catch(() => new Response("Offline Mode"))
    );
});
