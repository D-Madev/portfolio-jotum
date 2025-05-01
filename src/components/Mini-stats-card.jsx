import 'odometer/themes/odometer-theme-default.css';
import React, { useEffect, useRef } from 'react';
import Odometer from 'odometer';
import './Mini-stats-card.css' 

/**
 * Props:
 * - label: string (short text, up to ~20 words)
 * - value: number (target number to count up to)
 * - suffix: string (optional, e.g. '+')
 */
export default function MiniStatCard({ label, value, suffix = '' }) {
  const odometerRef = useRef(null);
  const containerRef = useRef(null);
  const odRef = useRef(null);
  const infiniteRef     = useRef(null);

  
  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (Number.isFinite(value)) {
            if (!odRef.current) {
              odRef.current = new Odometer({
                el: odometerRef.current,
                value: 0,
                duration: 2000,
                format: '(,ddd)',
                theme: 'default',
                auto: false
              });
            }
            odometerRef.current.innerHTML = 0;
            odRef.current.update(value);
          } else {
            // Para infinito: activa la animación CSS
            infiniteRef.current.classList.add('animate');
          }
        } else {
          // Cuando salga del viewport, quitamos la clase para que vuelva a animarse
          if (infiniteRef.current) {
            infiniteRef.current.classList.remove('animate');
          }
        }
      },
      { threshold: 0.5 } // dispara cuando 50% de la card está visible :contentReference[oaicite:5]{index=5}
    );
    
    observer.observe(containerRef.current);

    // Clean-up
    return () => observer.disconnect();      // liberamos recursos :contentReference[oaicite:6]{index=6}
  }, [value]);

  return (
    <div className="mini-stat-card" ref={containerRef}>
      <div className="mini-stat-label">{label}</div>
      { !Number.isFinite(value) 
        ? (
          //  Símbolo infinito estático
          <div className="mini-stat-number-infinity" ref={infiniteRef}>&infin;</div>
        ) : (
          //  Animación Odometer
          <div className="mini-stat-number" ref={odometerRef}></div>
        )
      }
      <p className='mini-stat-suffix'> {suffix}</p>
    </div>
  );
}
