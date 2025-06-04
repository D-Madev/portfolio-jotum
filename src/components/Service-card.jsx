import { useState } from 'react'
import './Service-card.css'
import whatsappIcon from '../assets/whatsapp-icon.png'


export default function ServiceCard({ logo, title, description, onSelect, isHidden, isSelected}) {
  if (isHidden) {
    return null;
  }
  
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
  
  return(
     <div 
      className={`service-card-wrapper ${isSelected? 'wrapper-selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className={`service-card ${expanded? 'is-expanded' : ''} ${isSelected? 'is-selected' : '' }`}>
        <img src={logo} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          {(isSelected ?
            <a href={whatsappLink} target='_blank' rel="noopener noreferrer" className='service-button'>Contactar</a>
          :
            <button className="service-button" onClick={onSelect}>Ver más</button>
          )}
        </div>
      </article>
    </div>
  )
}