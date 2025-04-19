importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

// Pastikan Workbox loaded
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // Precache (otomatis replace __WB_MANIFEST saat build pakai Workbox CLI atau inject manifest)
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Cleanup cache lama
  workbox.precaching.cleanupOutdatedCaches();

  // Hapus semua cache saat SW aktif ulang (kalau bener-bener pengen fresh)
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(keys.map(key => caches.delete(key)));
      })
    );
  });

  // Cache dokumen dan script/style pakai NetworkFirst
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === 'document' ||
      request.destination === 'script' ||
      request.destination === 'style',
    new workbox.strategies.NetworkFirst({
      cacheName: 'dynamic-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 3600, // 1 jam
        }),
      ],
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
