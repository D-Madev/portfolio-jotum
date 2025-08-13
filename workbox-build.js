// workbox-build.js (ES module) ya como lo tenés
import { generateSW } from 'workbox-build';
(async () => {
  const { count, size } = await generateSW({
    globDirectory: 'dist',
    globPatterns: ['**/*.{html,js,css,png,jpg,svg,webp,ico,map}'],
    swDest: 'dist/service-worker.js',
    modifyURLPrefix: { '': '/portfolio-jotum/' },
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      { urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico)$/, handler: 'CacheFirst', options: { cacheName: 'images-cache', expiration: { maxEntries: 200, maxAgeSeconds: 60*60*24*30 } } },
      { urlPattern: /\.(?:js|css)$/, handler: 'StaleWhileRevalidate', options: { cacheName: 'static-resources' } }
    ],
  });
  console.log(`Service worker generado. Cacheando ${count} archivos (${size} bytes).`);
})();
