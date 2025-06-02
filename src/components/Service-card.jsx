import { useState } from 'react'
import './Service-card.css'

export default function ServiceCard({ logo, title, description, onSelect, isHidden, isSelected}) {
  if (isHidden) {
    return null;
  }

  const [expanded, setExpanded] = useState(false);

  function handleMouseEnter() {
    setExpanded(true);
  }

  function handleMouseLeave() {
    setExpanded(false);
  }

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
          <button className="service-button" onClick={onSelect}>Ver más</button>
        </div>
      </article>
    </div>
  )
}