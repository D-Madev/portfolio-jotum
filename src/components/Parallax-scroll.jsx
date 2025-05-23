import { useState, useRef, useEffect } from 'react'
import video1 from '../assets/nosotros1.mp4';
import video2 from '../assets/nosotros2.mp4';
import video3 from '../assets/nosotros3.mp4';
import video4 from '../assets/nosotros4.mp4';
import image1 from '../assets/us-image-1.png'
import image2 from '../assets/us-image-2.png'
import image3 from '../assets/us-image-3.png'
import image4 from '../assets/us-image-4.png'
import image5 from '../assets/us-image-5.png'
import image6 from '../assets/us-image-6.png'
import image7 from '../assets/us-image-7.png'
import image8 from '../assets/us-image-8.png'
import './Parallax-scroll.css'

export default function ParallaxScroll() {

  const videos = [ video1, video2, video3, video4 ];
  const [currentIndex, setCurrentIndex]       = useState(Math.floor(Math.random() * videos.length));
  const [nextIndex, setNextIndex]             = useState(null);
  const [isReady, setIsReady]                 = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentRef = useRef(null);
  const nextRef    = useRef(null);

  // 1) Termina el vídeo actual → preparamos la carga
  const handleEnded = () => {
    const upcoming = (currentIndex + 1) % videos.length;
    setNextIndex(upcoming);
    setIsReady(false);
  };

  // 2) Siempre que tengamos un nextIndex, React montará el <video ref={nextRef}> oculto.
  //    Ahora lo podemos cargar y escuchar canplaythrough.
  useEffect(() => {
    if (nextIndex === null) return;
    const vid = nextRef.current;
    if (!vid) return;             // <-- clave: esperamos a que exista
    const onCan = () => {
      vid.play();
      setIsReady(true);
    };

    vid.src = videos[nextIndex];
    vid.currentTime = 0;
    vid.load();
    vid.addEventListener('canplaythrough', onCan);
    return () => vid.removeEventListener('canplaythrough', onCan);
  }, [nextIndex, videos]);

  // 3) Cuando isReady===true, disparamos el cross-fade
  useEffect(() => {
    if (!isReady) return;
    setIsTransitioning(true);
    const t = setTimeout(() => {
      // 4) Tras 1s de fade:
      setCurrentIndex(nextIndex);
      setNextIndex(null);
      setIsReady(false);
      setIsTransitioning(false);
    }, 1000);
    return () => clearTimeout(t);
  }, [isReady, nextIndex]);

  /**
   * Contenido de la sección de portada.
   * Esta sección contiene un video de fondo, un título y un texto descriptivo.
   * El video se selecciona aleatoriamente de un array de videos.
   */
  const cover = {
    videoSrc: videos[Math.floor(Math.random() * videos.length)],
    title: "ENTERATE COMO TRABAJAMOS",
    text: "En Jötum creemos en la calidad y el compromiso desde el primer día. Por eso dividimos nuestro proceso en 8 etapas bien definidas, para sepas en todo momento qué esperar y qué putno está tu proyecto."
  };

  /**
   * Array con el contenido de todas las tarjetas de informacion.
   * Cada tarjeta tiene una imagen, un título y un texto descriptivo.
   * El contenido de cada tarjeta se puede modificar en el array.
   */
  const sections = [
    {
      image: image1,
      title: "Entrevista Inicial y Análisis del Terreno",
      text: `Todo proyecto comienza con una instancia de encuentro y escucha. Realizamos una reunión personalizada con el cliente para conocer sus ideas, necesidades, expectativas y cualquier inquietud que tenga. Esta conversación nos permite entender el propósito del proyecto y establecer una base de confianza y colaboración.
              A partir de ese primer intercambio, realizamos un relevamiento detallado del terreno o espacio existente, registrando tanto sus características físicas como su entorno inmediato. Analizamos también las regulaciones locales, códigos de edificación y otros condicionantes técnicos o legales que puedan influir en el diseño.
              Esta etapa nos permite detectar oportunidades, anticipar desafíos y sentar las bases técnicas y conceptuales sobre las que trabajaremos en las fases siguientes. Es un proceso analítico, pero también sensible al contexto y a las intenciones del cliente.`
    },
    {
      image: image2,
      title: "Exploración Conceptual",
      text: `En esta etapa comenzamos a transformar las ideas en propuestas concretas. A partir del diálogo con el cliente, desarrollamos bocetos iniciales, esquemas arquitectónicos y estudios de espacialidad que exploran distintas formas de abordar el proyecto.
      El objetivo es construir una base conceptual sólida. Proponemos alternativas de organización, escalas, recorridos, materialidades y vínculos con el entorno. Usamos herramientas como croquis, collages, maquetas rápidas o referencias para visualizar las ideas y abrir el juego creativo.
      El intercambio constante con el cliente nos permite ajustar, combinar y refinar las propuestas. Esta fase no busca respuestas definitivas, sino definir el carácter y la lógica del proyecto, integrando aspectos funcionales, contextuales y simbólicos. Es un momento clave del proceso, donde se empieza a delinear una dirección clara, coherente y con identidad.`
    },
    {
      image: image3,
      title: "Desarrollo Técnico Preliminar",
      text: `Aprobado el concepto, avanzamos con un desarrollo técnico más profundo. Elaboramos planos preliminares, estudios de volumetría, análisis estructurales básicos y primeras estimaciones de costos. Esta etapa permite evaluar la viabilidad económica y constructiva, proponiendo soluciones eficientes, materiales adecuados y estrategias sustentables.`
    },
    {
      image: image4,
      title: "Proyecto Ejecutivo",
      text: `En esta última fase se define todo el proyecto en detalle.
      Refinamos cada aspecto del diseño y generamos la documentación técnica completa, que incluye:
      • Planos ejecutivos
      • Planos de estructura, electricidad, sanitarios y gas
      • Detalles constructivos
      • Planillas de cómputo y presupuesto
      • Memorias descriptivas
      • Especificaciones técnicas de materiales, acabados y sistemas constructivos
      Esta documentación garantiza una ejecución clara y precisa en obra.`
    },
    {
      image: image5,
      title: "Extras que suman valor",
      text: `• Reuniones virtuales periódicas: Facilitamos encuentros online para revisar avances, discutir correcciones o resolver dudas sin necesidad de traslados.
      • Visualizaciones 3D y renders: Presentamos el diseño con imágenes hiperrealistas o recorridos digitales para facilitar la comprensión espacial y estética.
      • Seguimiento presupuestario: A medida que el diseño evoluciona, actualizamos las estimaciones de costos y materiales, para mantener la transparencia económica.
      • Gestión de trámites: Ofrecemos asesoramiento y acompañamiento en la presentación de planos, permisos y habilitaciones municipales o provinciales.`
    },
    {
      image: image6,
      title: "Inicio y Puesta en Marcha",
      text: `Una vez aprobado el proyecto y completada la documentación técnica, comienza la etapa de organización de la obra. En este momento se ajustan los cronogramas, se definen los tiempos de ejecución y se coordinan los distintos equipos y gremios involucrados. También se realiza el replanteo en el terreno, donde se traslada el proyecto al espacio físico real y se marcan las primeras referencias constructivas.
      Es una etapa clave para asegurar un buen arranque. Se revisan materiales, se afina la planificación económica y logística, y se resuelven los últimos detalles técnicos antes de iniciar la construcción. Esta preparación minuciosa permite minimizar imprevistos y garantizar una ejecución más fluida.`
    },
    {
      image: image7,
      title: "Ejecución y Supervisión",
      text: `• Durante la obra, nuestro rol es acompañar y supervisar cada etapa constructiva. Coordinamos los distintos equipos, resolvemos dudas e imprevistos que puedan surgir y verificamos que lo construido respete fielmente el proyecto aprobado. Este seguimiento constante es fundamental para asegurar la calidad del resultado final.

              • Realizamos visitas periódicas al sitio, gestionamos avances y mantenemos una comunicación fluida con el cliente, informando sobre el progreso, posibles ajustes y próximos pasos. También cuidamos que se cumplan los tiempos y el presupuesto, sin perder de vista los detalles que hacen a la identidad del proyecto.

              • Esta fase no es solo ejecución: es también toma de decisiones en tiempo real, atención al detalle y compromiso con que cada elección se materialice como fue pensada.`
    },
    {
      image: image8,
      title: "Cierre y Entrega",
      text: `• Con la obra finalizada, comenzamos una etapa de revisión y ajustes finales. Se recorren los espacios construidos, se verifican terminaciones, instalaciones y funcionamiento general. En caso de detectar detalles pendientes o correcciones necesarias, se realiza lo que comúnmente se conoce como punch list.
      • También entregamos toda la documentación final del proyecto y nos aseguramos de que el cliente se sienta acompañado en esta transición hacia el uso pleno del espacio. Esta fase es tan importante como el resto: buscamos que la entrega sea clara, ordenada y que el cliente reciba lo que imaginamos juntos, con la calidad que merece.`
    }
  ];


  return (
      <div className="parallax-container"
        style={{ height: `${(sections.length + 1) * 100}vh` }}
      >
        <section className="cover-static">
          <div className="cover-image">
            <video
              ref={currentRef}
              className={`cover-video ${isTransitioning ? 'fade-out' : 'visible'}`}
              src={videos[currentIndex]}
              muted
              playsInline
              onEnded={handleEnded}
              autoPlay
            />
            {nextIndex !== null && (
              <video
                ref={nextRef}
                className="cover-video fade-in"
                muted
                playsInline
              />
            )}

          </div>
          <div className="cover-content">
            <h1 className='cover-title'>{cover.title}</h1>
            <p className="cover-contet-paragraph">{cover.text}</p>
            <svg width="20%" style={{marginTop:'5%'}} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline
                points="6,5 12,11 18,5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <polyline
                points="6,17 12,23 18,17"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </section>

        {sections.map((section, i) => (
          <section
            key={i}
            className={`parallax-section ${i % 2 !== 1 ? 'reverse' : ''}`}
            style={{ zIndex: 2 + i }}
          >
            <div className="parallax-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="parallax-content">
              <h1 className="section-number">{i + 1}</h1>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-text">{section.text}</p>
            </div>
          </section>
        ))}
    </div>
  );
}