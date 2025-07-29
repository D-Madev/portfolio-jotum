import { useState, useEffect } from 'react';
import './Project.css'

function Project({ images = [], title, location, baths, rooms, cars, m2, desk, gameroom, gym, state, description }) {
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
    <section className={`project ${isOpen ? 'open' : ''}`}>
            <div
        className="project-img-container"
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
            loading="lazy"
          />
        )}
        <img
          key={`curr-${current}`}
          src={images[current]}
          alt={`Imagen ${current + 1}`}
          className="fade-image fade-in"
          loading="lazy"
        />
      </div> 

      <article 
        className="project-content" 
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <header className="project-header">
          <p className="project-title"><b>{title}</b> {location}</p>
          <p className="project-state">{state}</p>
        </header>

        {!m2 && !rooms && !baths && !cars ? null : 
          <body className='project-resume-bar'>
            {m2? <div><i className="fas fa-ruler-combined"></i>{m2} m²</div> : null }
            {rooms? <div><i className="fas fa-bed"></i> {rooms}</div> : null }
            {desk? <div><i className="fas fa-book"></i>{desk}</div> : null }
            {gym? <div><i className="fas fa-dumbbell"></i>{gym}</div> : null }
            {gameroom? <div><i className="fas fa-dice"></i>{gameroom}</div> : null }
            {baths? <div><i className="fas fa-bath"></i>{baths}</div> : null }
            {cars? <div><i className="fas fa-car"></i>{cars}</div> : null }
          </body>
        }

        <i className='fas fa-angle-up show-up'></i>
        <i className='fas fa-angle-down show-down'></i>
        <p className="project-description">{description}</p>
      </article>
    </section>
  );
}

export default Project