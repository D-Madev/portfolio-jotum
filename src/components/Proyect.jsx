import React, { useState, useEffect } from 'react';
import './Proyect.css'

function Proyect({ images = [], title, location, m2, state, description }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [isOpen, setIsOpen]   = useState(false);
  const last = images.length - 1;

  const toggleOpen = () => setIsOpen(o => !o);

  const showPrev = e => {
    e.stopPropagation();
    const nextIndex = current === 0 ? last : current - 1;
    setPrev(current);
    setCurrent(nextIndex);
  };

  const showNext = e => {
    e.stopPropagation();
    const nextIndex = current === last ? 0 : current + 1;
    setPrev(current);
    setCurrent(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNext({ stopPropagation: () => {} });
    }, 4000);
    return () => clearInterval(interval);
  }, [current, last]);


  return(
    <section className={`proyect ${isOpen ? 'open' : ''}`}>
            <div
        className="proyect-img-container"
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={showPrev}>&lsaquo;</button>
            <button className="carousel-btn next" onClick={showNext}>&rsaquo;</button>
          </>
        )}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={images[prev]}
            alt=""
            className="fade-image fade-out"
          />
        )}
        <img
          key={`curr-${current}`}
          src={images[current]}
          alt={`Imagen ${current + 1}`}
          className="fade-image fade-in"
        />
      </div> 

      <article 
        className="proyect-content" 
        onClick={toggleOpen}
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