import React, { useState } from 'react';
import './Proyect.css'

function Proyect({img, title, location, m2, state, description}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleImageClick = () => {
    setIsOpen(open => !open);
  };

  return(
    <section className={`proyect ${isOpen ? 'open' : ''}`}>
      <div
        className="proyect-img-container"
        onClick={handleImageClick}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <img src={img} alt="Imagen de proyecto" />
      </div> 

      <article 
        className="proyect-content" 
        onClick={handleImageClick}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <header className="proyect-header">
          <p className="proyect-title"><b>{title}</b> {location}</p>
          <p className="proyect-state">{state}</p>
        </header>

        <body className='proyect-resume-bar'>
          <i className="fas fa-ruler-combined"></i>  {m2} m²
          <i className="fas fa-bed"></i> 1
          <i className="fas fa-bath"></i> 1
          <i className="fas fa-car"></i>
        </body>

        <i className='fas fa-angle-up show-up'></i>
        <i className='fas fa-angle-down show-down'></i>
        <p className="proyect-description">{description}</p>
      </article>
    </section>
  );
}

export default Proyect