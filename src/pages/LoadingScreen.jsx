// src/pages/LoadingScreen.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "/jotum-blue.png";


/**
 * props:
 * - criticalAssets: array de URLs que deben estar listas antes de montar la app
 * - backgroundAssets: array de URLs que cachearemos en background después del loader
 * - concurrency: número de descargas simultáneas para background (default 6)
 * - onFinished, minVisible, fontName (como antes)
 */
export default function LoadingScreen({
  criticalAssets = [],
  backgroundAssets = [],
  concurrency = 6,
  onFinished,
  minVisible = 600,
  fontName = null,
}) {

if (!('serviceWorker' in navigator)) return;
  // EXACTO para tu repo:
  const SW_URL = '/portfolio-jotum/service-worker.js';
  const SCOPE = '/portfolio-jotum/';
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register(SW_URL, { scope: SCOPE });
      console.log('SW registrado en', reg.scope);
    } catch (e) {
      console.error('Error al registrar SW', e);
    }
  });

  // precargar una imagen y esperar a decode (si está soportado)
  const preloadImage = (src) =>
    new Promise((res) => {
      try {
        const img = new Image();
        img.src = src;
        // cuando carga, si decode está disponible esperamos a que el navegador decodifique la imagen
        img.onload = () => {
          if (img.decode) {
            img.decode().then(() => res({ src, ok: true })).catch(() => res({ src, ok: true }));
          } else {
            res({ src, ok: true });
          }
        };
        img.onerror = () => res({ src, ok: false });
      } catch (e) {
        res({ src, ok: false });
      }
    });

  const preloadFont = (name) => {
    if (!name || !document.fonts || !document.fonts.load) return Promise.resolve();
    return document.fonts.load(`1em ${name}`).catch(() => {});
  };

  // precargar listado con control de concurrencia (simple worker pool)
  const preloadAll = async (list = [], concurrencyCount = 6) => {
    if (!list || list.length === 0) return [];
    let index = 0;
    const results = new Array(list.length);
    const workers = new Array(Math.min(concurrencyCount, list.length)).fill(0).map(async () => {
      while (index < list.length) {
        const i = index++;
        try {
          results[i] = await preloadImage(list[i]);
        } catch (e) {
          results[i] = { src: list[i], ok: false };
        }
      }
    });
    await Promise.all(workers);
    return results;
  };

  // función para cachear recursos en background usando Cache API
  const cacheInBackground = async (list = []) => {
    if (!('caches' in window) || !list || list.length === 0) return;
    try {
      const cache = await caches.open('images-cache-v1');
      for (let i = 0; i < list.length; i++) {
        const url = list[i];
        try {
          // intenta fetch; si CORS lo permite, se guardará; si no, se obtendrá respuesta "opaque"
          const resp = await fetch(url, { mode: 'no-cors' }).catch(() => null);
          if (resp) {
            try {
              // cache.put requiere una Response; algunas respuestas "opaque" pueden ser pusheadas
              await cache.put(url, resp.clone());
            } catch (e) {
              // si falla por CORS u otras razones, ignoramos
            }
          }
        } catch (e) {
          // ignore
        }
      }
    } catch (e) {
      // caches apertura falló, ignoramos
    }
  };

  useEffect(() => {
    let mounted = true;
    const t0 = performance.now();

    (async () => {
      // 1) precargar logo + fuentes + assets críticos (bloqueante)
      const critical = Array.from(new Set([logoPath, ...criticalAssets])); // unicidad
      await Promise.all([
        preloadFont(fontName),
        preloadAll(critical, Math.min(6, critical.length)),
      ]);

      // 2) Mantener visible al menos minVisible ms
      const elapsed = performance.now() - t0;
      const wait = Math.max(0, minVisible - elapsed);
      await new Promise((r) => setTimeout(r, wait));

      // 3) ahora disparamos onFinished (monta la app)
      if (mounted && typeof onFinished === "function") onFinished();

      // 4) En background: cachear el resto cuando el navegador esté idle
      const startBackground = () => {
        // usamos preloadAll con la concurrencia que pasaste (para decodificar también)
        preloadAll(backgroundAssets, concurrency).catch(() => {});
        // además intentamos meterlos en Cache API sin bloquear
        cacheInBackground(backgroundAssets).catch(() => {});
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => startBackground());
      } else {
        // fallback suave (no bloquear el hilo principal)
        setTimeout(() => startBackground(), 500);
      }
    })();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dentro del return: contenedor + glow + logo sincronizados
  const durationSec = 4.5; // ajustar una vez aquí
  const times = [0, 0.333333, 0.666667, 1];

  return (
    <AnimatePresence>
      <motion.div
        key="loader-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.45 } }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF", // podés cambiar
          pointerEvents: "all",
        }}
      >
        {/* Contenedor del logo centrado */}
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: 260,
            height: 260,
          }}
        >
          {/* GLOW: elemento detrás del logo */}
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              pointerEvents: "none",
              background: `radial-gradient(circle at 50% 50%,
                rgba(99,126,185,0.85) 0%,
                rgba(99,126,185,0.45) 20%,
                rgba(99,126,185,0.12) 40%,
                rgba(99,126,185,0) 70%)`,
              filter: "blur(80px)",
              willChange: "opacity, transform",
              zIndex: 0,
            }}
            animate={{
              scale: [1, 1, 0.92, 1],
              opacity: [0.65, 0.65, 0.12, 0.65],
            }}
            transition={{
              duration: durationSec,
              times,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />

          {/* LOGO encima del glow */}
          <motion.img
            src={logoPath}
            alt="logo"
            style={{
              width: 200,
              height: "auto",
              display: "block",
              userSelect: "none",
              pointerEvents: "none",
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
              zIndex: 1,
            }}
            animate={{
              scale: [1, 1, 0.92, 1],
              opacity: [1, 1, 0.6, 1],
            }}
            transition={{
              // SAME duration & times para sincronizar con el glow
              duration: durationSec,
              times,
              repeat: Infinity,
              repeatType: "loop",
              // easing por propiedad: scale suave, opacity lineal durante el cambio
              scale: { duration: durationSec, ease: "easeInOut", times },
              opacity: { duration: durationSec, ease: "linear", times },
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
