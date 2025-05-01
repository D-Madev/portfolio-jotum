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

  useEffect(() => {
    // 1) Configuramos Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 2) Si la instancia no existe, la creamos
          if (!odRef.current) {
            odRef.current = new Odometer({
              el: odometerRef.current,
              value: 0,
              duration: 2000,       // tiempo total de la animación (ms)
              format: 'd',     // formato con separador de miles
              theme: 'default',         // coincide con el CSS importado
              auto: false           // desactiva la actualización automática al añadir el script
            });
          }
          // 3) Reiniciamos el odómetro a 0 y luego animamos al nuevo valor
          odometerRef.current.innerHTML = 0;  // reinicio de la UI :contentReference[oaicite:4]{index=4}
          odRef.current.update(value);        // animación al valor deseado
        }
      },
      { threshold: 0.5 } // dispara cuando 50% de la card está visible :contentReference[oaicite:5]{index=5}
    );
    
    if (containerRef.current) observer.observe(containerRef.current);

    // Clean-up
    return () => observer.disconnect();      // liberamos recursos :contentReference[oaicite:6]{index=6}
  }, [value]);

  return (
    <div className="mini-stat-card" ref={containerRef}>
      <div className="mini-stat-label">{label}</div>
      <div className="mini-stat-number" ref={odometerRef}></div>
      <p className='mini-stat-suffix'> {suffix}</p>
    </div>
  );
}
