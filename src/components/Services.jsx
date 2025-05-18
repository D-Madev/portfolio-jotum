import { useState, useEffect, useRef } from 'react';
import img1 from '../assets/services1.png';
import img2 from '../assets/services2.png';
import img3 from '../assets/services3.png';
import img4 from '../assets/services4.png';
import img5 from '../assets/services5.png';
import card1 from '../assets/card-logo1.png'
import card2 from '../assets/card-logo2.png'
import card3 from '../assets/card-logo3.png'
import ServiceCard from '../components/Service-card';
import './Services.css';

export default function Servicios() {
  const images = [img1, img2, img3, img4, img5];
  const [frontIdx, setFrontIdx] = useState(0);
  const [backIdx, setBackIdx]   = useState(1);
  const [isFading, setIsFading] = useState(false);

    const cards = [
    { logo: card1, title: 'Proyecto arquitectonico',     description: "En Jötum desarrollamos proyectos de alto nivel, donde cada espacio combina diseño, funcionalidad y estética con excelencia. Creamos propuestas únicas y contemporáneas, pensadas para perdurar y en armonía con su entorno." },
    { logo: card2, title: 'Documentacion tecnica',description: "Una obra de calidad empieza con planos claros y precisos. En Jötum elaboramos documentación tecnica completa y detallada para garantizar una ejecución fiel al diseño, optimizando tiempos, recursos y evitando imprevistos." },
    { logo: card3, title: 'Reforma e Interiorismo', description: "Transformamos espacios con visión arquitectónica, respetando su esencia y elevando su diseño, funcionalidad y valor. Cada detalle se piensa para crear ambientes únicos, atemporales y llenos de identidad."   },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setBackIdx((frontIdx + 1) % images.length);
      setIsFading(true);
      setTimeout(() => {
        setFrontIdx((f) => (f + 1) % images.length);
        setIsFading(false);
      });
    }, 5000);

    return () => clearInterval(id);
  }, [frontIdx, images.length]);

  return (
    <section className="section-services">
      <div
        className={`bg ${isFading ? 'fade-in' : ''}`}
        style={{ backgroundImage: `url(${images[backIdx]})` }}
      />
      <div
        className={`bg ${!isFading ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${images[frontIdx]})` }}
      />
      <div className="services-content">
        {cards.map((c, i) => (
          <ServiceCard
            key={i}
            logo={c.logo}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </section>
  );
}
