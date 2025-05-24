import { useState, useEffect, useRef } from 'react';
import img1 from '../assets/services1.png';
import img2 from '../assets/services2.png';
import img3 from '../assets/services3.png';
import img4 from '../assets/services4.png';
import img5 from '../assets/services5.png';
import card1 from '../assets/card-logo1.png'
import card2 from '../assets/card-logo2.png'
import card3 from '../assets/card-logo3.png'
import card4 from '../assets/card-logo4.png'
import card5 from '../assets/card-logo5.png'
import card6 from '../assets/card-logo6.png'
import card7 from '../assets/card-logo7.png'
import ServiceCard from '../components/Service-card';
import './Services.css';


/********************************************************
 * TODO   1   Size of the cards. 
 * TODO   2   Add animations and display information.
 *******************************************************/


export default function Servicios() {
  const images = [img1, img2, img3, img4, img5];
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Contenido de las cards.
   * Utilizacion dinamica del componente ServiceCard.
   * Cada card tiene un logo, un titulo y una descripcion.
  */
  const cards = [
    { logo: card1, title: 'Proyecto arquitectonico', description: "En Jötum desarrollamos proyectos de alto nivel, donde cada espacio combina diseño, funcionalidad y estética con excelencia. Creamos propuestas únicas y contemporáneas, pensadas para perdurar y en armonía con su entorno." },
    { logo: card2, title: 'Documentacion tecnica',description: "Una obra de calidad empieza con planos claros y precisos. En Jötum elaboramos documentación tecnica completa y detallada para garantizar una ejecución fiel al diseño, optimizando tiempos, recursos y evitando imprevistos." },
    { logo: card3, title: 'Reforma e Interiorismo', description: "Transformamos espacios con visión arquitectónica, respetando su esencia y elevando su diseño, funcionalidad y valor. Cada detalle se piensa para crear ambientes únicos, atemporales y llenos de identidad."   },
    { logo: card4, title: 'Asesoría técnica integral', description: "Acompañamos cada decisión clave del proyecto: desde la elección del terreno hasta el diseño sostenible. En Jötum brindamos asesoría técnica de excelencia para construir sobre bases sólidas, eficientes y con alto valor estético."   },
    { logo: card5, title: 'Llave en mano', description: "Nos encargamos de todo: diseño, obra y terminaciones. En Jötum gestionamos cada etapa con eficiencia y cuidado, para que construir sea una experiencia simple, segura y con resultados excepcionales." },
    { logo: card6, title: 'Direccion y ejecucion de obra', description: "En Jötum llevamos cada obra con compromiso y precisión, garantizando que el proyecto se construya con la calidad, estética y solidez que fue pensada. Coordinamos equipos, controlamos cada etapa y cuidamos cada detalle." },
    { logo: card7, title: 'Diseño de muebles', description: "Muebles a medida, elaborados por los mejores carpinteros, combinando funcionalidad y estilo." },
  ];

  /**
   * Funcion que cambia la imagen de fondo cada 5 segundos.
   * Se utiliza un setInterval para cambiar la imagen de fondo.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      // Iniciamos transición
      const upcoming = (current + 1) % images.length;
      setNext(upcoming);
      setIsTransitioning(true);
      // Cambiamos la imagen de fondo
      setTimeout(() => {
        setCurrent(upcoming);
        setNext(null);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, images.length]);

  return (
    <section className="section-services">
      <div className={`bg ${
          isTransitioning ? 'fade-out' : 'visible'
        }`}
        style={{ backgroundImage: `url(${images[current]})` }}
      />
      {isTransitioning && (
        <div
          className="bg fade-in"
          style={{ backgroundImage: `url(${images[next]})` }}
        />
      )}

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
