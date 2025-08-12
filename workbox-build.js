// workbox-build.js (ES Module)

import { generateSW } from 'workbox-build';

async function buildSW() {
  const { count, size } = await generateSW({
    globDirectory: 'dist',
    globPatterns: ['**/*.{html,js,css,png,jpg,svg,webp,ico}'],
    swDest: 'dist/service-worker.js',
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: { cacheName: 'static-resources' },
      },
    ],
  });

  console.log(`Service worker generado. Cacheando ${count} archivos (${size} bytes).`);
}

buildSW();
