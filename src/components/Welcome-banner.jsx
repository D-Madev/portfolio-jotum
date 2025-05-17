import { useState, useEffect, useRef } from 'react';
import './welcome-banner.css';

export default function WelcomeBanner({
  backgroundType = 'image',
  backgroundSrc,
  backgroundSrcList = [],
  showText = false,
  text = '',
  logo,
  children,
  style = {}
}) {
  const isVideo = backgroundType === 'video';
  const [queue, setQueue] = useState([]);
  const [idx, setIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  // Al montar, barajamos la lista
  useEffect(() => {
    if (isVideo && backgroundSrcList.length) {
      setQueue([...backgroundSrcList].sort(() => Math.random() - 0.5));
      setIdx(0);
    }
  }, [isVideo, backgroundSrcList]);

  // Al cambiar idx, actualizamos src y reproducimos
  useEffect(() => {
    if (!isVideo || queue.length === 0) return;
    const vid = videoRef.current;
    vid.src = queue[idx];
    vid.currentTime = 0;
    vid.play().catch(() => {});
    // Asegurar estado de fade-in limpio
    setIsFading(false);
  }, [isVideo, queue, idx]);

  // Handler cuando termina el video
  const handleEnded = () => {
    // Iniciar fade-out
    setIsFading(true);

    // Tras 1s (igual que CSS), avanzar al siguiente fuente
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % queue.length);
      // fade-in se activará en el useEffect de idx
    }, 300);
  };

  return (
    <section
      className={`welcome-banner ${isVideo ? 'has-video' : 'has-border'}`}
      style={{
        backgroundImage: !isVideo ? `url(${backgroundSrc})` : 'none',
        ...style
      }}
    >
      {isVideo && queue.length > 0 && (
        <video
          ref={videoRef}
          className={`banner-video ${isFading ? 'fade-out' : 'fade-in'}`}
          muted
          playsInline
          onEnded={handleEnded}
          // autocontrolamos el bucle
          autoPlay
        />
      )}

      <div className="banner-overlay">
        {logo && <img src={logo} className="banner-logo" alt="Logo" />}
        {showText && <p className="banner-text">{text}</p>}
        {children}
      </div>
    </section>
  );
}
