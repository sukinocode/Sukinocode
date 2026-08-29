const CACHE_NAME = 'suki999-v30';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './suki1.png',
  './suki2.png',
  './musik/クロニクル.mp3',
  './balap suki.jpg',
  './panah 3d.jpg',
  './Suki adventure.jpg',
  './Project catur 3d.jpg',
  './Suki plane 2.jpg',
  './Suki plane.jpg',
  './tic tac toe pro.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
