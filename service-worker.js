self.addEventListener('install', event => {
    self.skipWaiting();
    const cacheName = 'my-portfolio-cache';
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/home.js',
                '/typing-animation.js',
                '/portfolio.js'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhiteList = ['my-portfolio-cache'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});