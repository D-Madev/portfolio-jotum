import { useState } from 'react'
import './Service-card.css'

export default function ServiceCard({ logo, title, description}) {
  const [expanded, setExpanded] = useState(false);

  function handleMouseEnter() {
    setExpanded(true);
  }

  function handleMouseLeave() {
    setExpanded(false);
  }

  return(
     <div 
      className="service-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className={`service-card ${expanded? 'is-expanded' : ''}`}>
        <img src={logo} alt={logo} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          <button className="service-button">Ver más</button>
        </div>
      </article>
    </div>
  )
}