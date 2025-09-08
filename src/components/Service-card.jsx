import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Service-card.css'

export default function ServiceCard({ 
  logo, title, 
  description, onSelect, 
  isHidden, isSelected, 
  onDeselect, layoutId,
  initial, animate, exit, transition
}) {
  if (isHidden) {
    return null;
  }

    const isClient = typeof window !== "undefined";
  const [width, setWidth] = useState(isClient ? window.innerWidth : 1024);

  useEffect(() => {
    if (!isClient) return;
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isClient]);
  const isMobile = width <= 480;

  const [expanded, setExpanded] = useState(false);
  
  function handleMouseEnter() {
    if (!isSelected) {
      setExpanded(true);
    }
  }
  
  function handleMouseLeave() {
    if (!isSelected) {
      setExpanded(false);
    }
  }
  
  const phoneNumber = '5491121747565';
  const message = 'Hola, estoy interesado en el servicio de Jötum.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  const handleDeselect = () => {    
    if (typeof onDeselect === 'function') {
      onDeselect();
    }
  };

  return(
     <motion.article 
      className={`service-card-wrapper ${isSelected? 'wrapper-selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <motion.div 
        className={`service-card ${expanded? 'is-expanded' : ''} ${isSelected? 'is-selected' : '' }`}
        layoutId={layoutId}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        <div className='title-logo-section'>
          <img src={logo} alt={title} />
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
        <div className="button-container">    
        {isMobile ? (
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="service-button"> Contactar </a>
        ) : isSelected ? (
          <>
            <button type="button" className="back-button" onClick={handleDeselect} aria-label="Volver" >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="service-button"> Contactar </a>
          </>
        ) : (
          <button type="button" className="service-button" onClick={onSelect}>
            Ver más
          </button>
        )}
        </div>
      </motion.div>
    </motion.article>
  )
}