// src/pages/LoadingScreen.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "/jotum-blue.png";

export default function LoadingScreen({ onFinished, minVisible = 600, fontName = null }) {
  // minVisible: ms mínimos que se muestra el loader (evita parpadeos)
  useEffect(() => {
    let mounted = true;
    const t0 = performance.now();

    // Precarga logo (imagen)
    const preloadImg = (src) =>
      new Promise((res) => {
        const i = new Image();
        i.src = src;
        i.onload = i.onerror = () => res();
      });

    // Precarga fuente (opcional) usando Font Loading API
    const preloadFont = (name) => {
      if (!name || !document.fonts || !document.fonts.load) return Promise.resolve();
      // pide 1em del nombre tal cual lo tenés en CSS: e.g. 'MiFuente'
      return document.fonts.load(`1em ${name}`).catch(() => {});
    };

    Promise.all([preloadImg(logoPath), preloadFont(fontName)]).then(async () => {
      const elapsed = performance.now() - t0;
      const wait = Math.max(0, minVisible - elapsed);
      await new Promise((r) => setTimeout(r, wait));
      if (mounted && typeof onFinished === "function") onFinished();
    });

    return () => {
      mounted = false;
    };
  }, [onFinished, minVisible, fontName]);

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
          transition={{ duration: 0.25 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <motion.img
            src={logoPath}
            alt="logo"
            // latido + variación de opacidad
            animate={{
              scale: [1, 1.08, 1],
              opacity: [1, 0.85, 1],
            }}
            transition={{
              duration: 0.95,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{
              width: 120, // cambiá tamaño según necesites
              height: "auto",
              display: "block",
              userSelect: "none",
              pointerEvents: "none",
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
