// workbox-build.js
const workboxBuild = require('workbox-build');

// Genera el service worker usando precache + runtime caching
workboxBuild.generateSW({
  globDirectory: 'dist', // carpeta de build
  globPatterns: [
    '**/*.{html,js,css,svg,png,jpg,jpeg,webp,ico}'
  ],
  swDest: 'dist/service-worker.js', // dónde guardar el SW generado
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 días
        }
      }
    },
    {
      urlPattern: /\.(?:js|css)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
      }
    }
  ]
}).then(({ count, size }) => {
  console.log(`Service worker generado. Cacheando ${count} archivos (${size} bytes).`);
});
