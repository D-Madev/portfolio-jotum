// Importaciones de React y librerías externas
import { useState, useEffect, useRef } from 'react';
import useNavbarStore from '../store/navbarStore';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
// Importación de imágenes de fondo y logos de las cards
import img1 from '../assets/servicios/services1.webp';
import img2 from '../assets/servicios/services2.webp';
import img3 from '../assets/servicios/services3.webp';
import img4 from '../assets/servicios/services4.webp';
import img5 from '../assets/servicios/services5.webp';
import card1 from '../assets/servicios/card-logo1.webp';
import card2 from '../assets/servicios/card-logo2.webp';
import card3 from '../assets/servicios/card-logo3.webp';
import card4 from '../assets/servicios/card-logo4.webp';
import card5 from '../assets/servicios/card-logo5.webp';
import card6 from '../assets/servicios/card-logo6.webp';
import card7 from '../assets/servicios/card-logo7.webp';
// Importación del componente de tarjeta de servicio
import ServiceCard from '../components/Service-card';
// Importación de estilos CSS
import './Services.css';

// Componente principal de Servicios
export default function Servicios() {
  // Array de imágenes de fondo para el slider
  const images = [img1, img2, img3, img4, img5];
  // Referencia a la sección principal para animaciones de scroll
  const sectionRef = useRef(null);
  // Estado interno para controlar animaciones de scroll
  const state = useRef({
    hasAnimated: false,
    isAnimating: false,
  }).current;
  // Constantes para duración y porcentaje de trigger del scroll
  const SCROLL_DURATION = 1200;
  const TRIGGER_PERCENT = 0.6;
  // Estado para la imagen de fondo actual y la siguiente (transición)
  const [current, setCurrent] = useState(Math.floor(Math.random() * images.length));
  const [next, setNext]       = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Estado para la card seleccionada (detalle)
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Datos para el enlace de WhatsApp
  const phoneNumber = '5491121747565';
  const message = 'Hola, estoy interesado en el servicio de Jötum.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  // Referencia para ocultar la navbar al entrar en vista
  const hideNavbar = useNavbarStore((s) => s.hideNavbar)

  /**
   * Definición de las tarjetas de servicios.
   * Cada objeto contiene logo, título, descripción corta y texto de información extendida.
   */
  const cards = [
    { logo: card1, 
      title: 'Proyecto arquitectonico', 
      description: "En Jötum desarrollamos proyectos de alto nivel, donde cada espacio combina diseño, funcionalidad y estética con excelencia. Creamos propuestas únicas y contemporáneas, pensadas para perdurar y en armonía con su entorno.", 
      information: `En Jötum entendemos el proyecto arquitectónico como el corazón de cada obra. Por eso, abordamos cada diseño a partir de una escucha atenta y profunda de las necesidades de nuestros clientes, transformando sus ideas en propuestas únicas que combinan creatividad, precisión técnica y una estética cuidada. Cada línea, cada espacio, está pensado con un criterio funcional claro, respetando el entorno y anticipando los desafíos reales de la construcción. 
      
      Nuestro compromiso es materializar visiones que trasciendan lo ordinario, creando proyectos contemporáneos que equilibran eficiencia, armonía con el entorno y una belleza pensada para perdurar. Diseñamos hogares que enorgullecen, donde cada decisión refleja una historia, un estilo de vida y un futuro compartido. Espacios pensados para ser vividos, disfrutados y recordados, por quienes los habitan y por quienes vendrán después.` },
    { logo: card2, 
      title: 'Documentacion tecnica',
      description: "Una obra de calidad empieza con planos claros y precisos. En Jötum elaboramos documentación tecnica completa y detallada para garantizar una ejecución fiel al diseño, optimizando tiempos, recursos y evitando imprevistos.", 
      information: `En Jötum sabemos que toda gran obra se construye primero sobre el papel. La documentación técnica no es solo un requisito: es la base que garantiza una ejecución fiel, segura y eficiente. Por eso, elaboramos cada plano, memoria y cómputo con el máximo nivel de detalle y precisión, entendiendo que de ellos depende tanto la aprobación de trámites como el desarrollo exitoso en obra. 
      
      Preparamos planos ejecutivos y memorias descriptivas, cómputos métricos y pliegos de especificaciones constructivas, junto a toda la documentación específica que el proyecto requiera: planos y cálculos de gas y calefacción, instalaciones sanitarias, estructura, electricidad, implantación, domótica y detalles constructivos, entre otros. Esta información es clave no solo para cumplir con normativas y agilizar permisos, sino también para anticipar soluciones, evitar errores en obra y optimizar tiempos y recursos desde el primer día. 
      
      Cada documento que producimos está pensado como una herramienta estratégica que acompaña todo el proceso constructivo. Porque en Jötum creemos que la calidad visible de una obra empieza en aquello que no siempre se ve, pero se siente en cada resultado.` },
    { logo: card3, 
      title: 'Reforma e Interiorismo', 
      description: "Transformamos espacios con visión arquitectónica, respetando su esencia y elevando su diseño, funcionalidad y valor. Cada detalle se piensa para crear ambientes únicos, atemporales y llenos de identidad.", 
      information: `Transformar un espacio existente va mucho más allá de renovarlo: implica comprender su esencia, imaginar su potencial y ejecutar cada detalle con precisión. En Jötum abordamos las reformas y proyectos de interiorismo de forma integral, respetando la identidad original del lugar mientras potenciamos su funcionalidad, estética y valor a largo plazo. 
      
      Cada intervención es diseñada con criterio arquitectónico, cuidando la elección de materiales, texturas, iluminación y soluciones constructivas que dialogan entre sí para crear ambientes coherentes, armónicos y atemporales. Nuestro enfoque combina sensibilidad estética con control técnico, permitiendo transformar lo cotidiano en una nueva experiencia de habitar. 

      Como complemento, ofrecemos el diseño y fabricación de muebles a medida, elaborados por los mejores carpinteros, que se integran al proyecto con la misma dedicación que el resto de la obra. Estas piezas únicas no solo optimizan el espacio, sino que elevan su carácter, aportando calidez, funcionalidad y un nivel de calidad que se percibe en cada uso. Reformamos para revelar lo mejor de cada espacio, creando entornos que se sientan propios, cómodos y llenos de intención.` },
    { logo: card4, 
      title: 'Asesoría técnica integral', 
      description: "Acompañamos cada decisión clave del proyecto: desde la elección del terreno hasta el diseño sostenible. En Jötum brindamos asesoría técnica de excelencia para construir sobre bases sólidas, eficientes y con alto valor estético.", 
      information: `En Jötum creemos que tomar buenas decisiones desde el inicio es clave para el éxito de cualquier obra. Por eso, ofrecemos un servicio de asesoría técnica pensado para acompañar a nuestros clientes en cada etapa temprana del proceso constructivo, brindando claridad, respaldo profesional y visión estratégica. 
      
      Asistimos en la elección del terreno, evaluando su potencial y viabilidad técnica; analizamos normativas, restricciones municipales y parámetros urbanísticos; y colaboramos en la definición de sistemas constructivos, materiales y soluciones de diseño sostenible. Nuestro enfoque combina conocimiento técnico con sensibilidad arquitectónica, ayudando a que cada decisión contribuya a un resultado más eficiente, duradero y estéticamente sólido. 
      
      Esta asesoría no solo permite evitar errores costosos y optimizar recursos, sino que da a nuestros clientes la tranquilidad de construir sobre bases firmes, sabiendo que cada paso está guiado por profesionales comprometidos con la excelencia. Porque una obra bien pensada desde el principio es una obra que se disfruta durante toda la vida.` },
    { logo: card5, 
      title: 'Llave en mano', 
      description: "Nos encargamos de todo: diseño, obra y terminaciones. En Jötum gestionamos cada etapa con eficiencia y cuidado, para que construir sea una experiencia simple, segura y con resultados excepcionales.", 
      information: `En Jötum entendemos que construir puede ser un proceso complejo, por eso desarrollamos un servicio llave en mano que ofrece una solución integral, clara y sin sobresaltos. Nos ocupamos de todo: desde el diseño arquitectónico inicial hasta la entrega final del espacio terminado, funcionando como un único interlocutor que centraliza y resuelve cada etapa del proyecto. 
      
      Coordinamos la elaboración de la documentación técnica, la tramitación de permisos, la planificación de obra, la contratación de mano de obra especializada y la ejecución completa, incluyendo detalles de terminación. Este enfoque de gestión unificada no solo optimiza tiempos y recursos, sino que asegura una ejecución coherente con el proyecto original, sin desviaciones ni sorpresas. 
      
      El cliente puede seguir cada avance con confianza y tranquilidad, sabiendo que cada decisión técnica y estética está en manos de profesionales comprometidos con la excelencia. Con Jötum, construir deja de ser una carga para convertirse en una experiencia positiva, eficiente y a la altura de las expectativas.` },
    { logo: card6, 
      title: 'Direccion y ejecucion de obra', 
      description: "En Jötum llevamos cada obra con compromiso y precisión, garantizando que el proyecto se construya con la calidad, estética y solidez que fue pensada. Coordinamos equipos, controlamos cada etapa y cuidamos cada detalle.", 
      information: `En Jötum, dirigir y ejecutar una obra es mucho más que supervisar tareas: es custodiar la calidad proyectada y convertirla en una realidad tangible, sin concesiones. Nos encargamos de coordinar cada etapa del proceso constructivo con rigurosidad, compromiso y visión técnica, garantizando que cada decisión tomada en obra esté alineada con los más altos estándares. 
      
      Organizamos y lideramos equipos de trabajo especializados, controlamos la correcta ejecución de cada rubro —desde la estructura hasta los detalles de terminación— y gestionamos recursos y tiempos con precisión para asegurar una obra ágil, segura y eficiente. Nuestra presencia en el día a día de la obra nos permite anticipar desafíos, resolver imprevistos y mantener la coherencia del proyecto original en cada metro construido. 
      
      Cada espacio ejecutado por Jötum refleja solidez estructural, calidad constructiva y un diseño cuidado que perdura en el tiempo. Porque construir bien es, para nosotros, un acto de responsabilidad, técnica y pasión por la excelencia.` },
    { logo: card7, 
      title: 'Diseño de muebles', 
      description: "Muebles a medida, elaborados por los mejores carpinteros, combinando funcionalidad y estilo.", 
      information: `Nuestro servicio de diseño de mobiliario a medida potencia al máximo la identidad de cada espacio. Cuando se integra con nuestros proyectos de arquitectura, interiorismo o reforma, permite crear ambientes únicos, donde cada pieza responde a una lógica funcional, estética y espacial. 
      
      Trabajamos con carpinteros de excelencia y materiales de primera calidad para lograr muebles duraderos, elegantes y pensados exclusivamente para vos. El resultado es una armonía total entre espacio y objeto, donde todo encaja con precisión y estilo.` },
  ];
  
  /**
   * Efecto para cambiar la imagen de fondo automáticamente cada 5 segundos.
   * Si hay una tarjeta seleccionada (detalle), se pausa el cambio de fondo.
   */
   useEffect(() => {
    // Si hay tarjeta única seleccionada, salgo y no instalo el interval
    if (selectedIndex !== null) return;

    const interval = setInterval(() => {
      const upcoming = (current + 1) % images.length;
      setNext(upcoming);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrent(upcoming);
        setNext(null);
        setIsTransitioning(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [current, images.length, selectedIndex]);

  /**
   * Efecto para animar el scroll cuando la sección entra en el viewport.
   * Solo se dispara una vez hasta que la sección sale completamente de pantalla.
   */
   useEffect(() => {
    const section = sectionRef.current;
    const THRESH_Y = window.innerHeight * TRIGGER_PERCENT;

    // Reinicia el trigger si la sección sale del umbral
    function resetIfNeeded(rect) {
      if (
        state.hasAnimated &&
        (rect.top > THRESH_Y || rect.bottom < 0)
      ) {
        state.hasAnimated = false;
      }
    }

    // Handler de scroll: dispara la animación si corresponde
    function onScroll() {
      if (state.isAnimating) return;

      const rect = section.getBoundingClientRect();
      resetIfNeeded(rect);

      // Si no animamos y el top cruza el umbral, disparamos:
      if (!state.hasAnimated && rect.top <= THRESH_Y && rect.bottom > 0) {
        state.hasAnimated = true;
        state.isAnimating = true;
        document.body.classList.add('no-scroll');

        animateScrollToCenter(section, SCROLL_DURATION, () => {
          state.isAnimating = false;
          document.body.classList.remove('no-scroll');
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [SCROLL_DURATION, TRIGGER_PERCENT]);

  /**
   * Función auxiliar para animar el scroll y centrar la sección en pantalla.
   * Usa una función de easing para suavizar el movimiento.
   */
  function animateScrollToCenter(el, duration, callback) {
    const rect = el.getBoundingClientRect();
    const startY = window.scrollY;
    const absoluteTop = startY + rect.top;
    const targetY = absoluteTop - (window.innerHeight - rect.height) / 2 - 50;
    const diff = targetY - startY;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cuadrático para suavidad
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + diff * ease);
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        callback && callback();
      }
    }
    
    hideNavbar();
    window.requestAnimationFrame(step);
  }

  // Selecciona una card para mostrar el detalle
  const handleSelectCard = (index) => {
    setSelectedIndex(index);
  };

  // Vuelve al listado de cards (sale del detalle)
  const handleDeselect = () => {
    setSelectedIndex(null);
  };

  // Renderizado del componente
  return (
    <section ref={sectionRef} className={`section-services  ${selectedIndex !== null ? 'detail-mode' : ''}`}>
    {/* Fondo dinámico con transición */}
    <div
      className={`bg ${isTransitioning ? 'fade-out' : 'visible'}`} 
      style={{ backgroundImage: `url(${images[current]})` }}
    />
    {isTransitioning && (
      <div 
        className="bg fade-in" 
        style={{ backgroundImage: `url(${images[next]})` }}
      /> 
    )}

    {/* Contenedor de las tarjetas de servicios */}
      <LayoutGroup>
        <AnimatePresence mode="wait">
          {selectedIndex === null ? (
            /* GRID: fade and appear cards smoothly */
            <motion.div
              key="grid"
              className="services-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {cards.map((card, i) => (
                <ServiceCard
                  key={i}
                  logo={card.logo}
                  title={card.title}
                  description={card.description}
                  onSelect={() => setSelectedIndex(i)}
                  layoutId={`card-${i}`}
                  // Entrada suave al grid
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={
                    i === selectedIndex
                      ? {} // la seleccionada no desaparece
                      : { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
                  }
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          ) : (
            /* DETAIL: move card then clip path */
            <motion.div
              key="detail"
              className="services-content-selected"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.3 }}
            >
              {/* Card seleccionada se mueve sin desaparecer */}
              <motion.div
                layoutId={`card-${selectedIndex}`}
                className="selected-card-wrapper"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ServiceCard
                  logo={cards[selectedIndex].logo}
                  title={cards[selectedIndex].title}
                  description={cards[selectedIndex].description}
                  isSelected
                  onDeselect={() => setSelectedIndex(null)}
                />
              </motion.div>

              {/* Animación de detalle */}
              <motion.div
                className="selected-card-detail"
                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { type: 'tween', duration: 0.7, delay: 0.5 } }}
                exit={{ clipPath: 'inset(0 100% 0 0)', opacity: 0, transition: { type: 'tween', duration: 0.7, delay: 0 } }}
              >
                <h2 className="detail-title">{cards[selectedIndex].title}</h2>
                <p className="detail-text">{cards[selectedIndex].information}</p>
                <div className="detail-buttons">
                  <button className="back-button" onClick={() => setSelectedIndex(null)}>
                    <i className="fas fa-chevron-left" />
                  </button>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-button"
                  >
                    Contactar
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}