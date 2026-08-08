const CACHE_NAME = 'suki999-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './aset/suki1.png',
  './aset/suki2.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Menambahkan 'cache.addAll' untuk memastikan semua file ter-cache
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ... bagian activate dan fetch tetap sama ...
