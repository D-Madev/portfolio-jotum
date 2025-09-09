import { useState, useEffect, useRef } from 'react';
import './Project.css'

function Project({ images = [], title, location, baths, rooms, cars, m2, desk, gameroom, gym, state, description }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [isOpen, setIsOpen]   = useState(false);
  const [loaded, setLoaded]   = useState(() => images.map((_) => false));
  const last = images.length - 1;
  const intervalRef = useRef(null);

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

  // Preload logic: preload current and next image
  useEffect(() => {
    if (!images || images.length === 0) return;
    const toPreload = [current, (current + 1) % images.length];
    toPreload.forEach(idx => {
      if (!images[idx]) return;
      if (loaded[idx]) return; // ya cargada
      const img = new Image();
      img.src = images[idx];
      img.decoding = 'async';
      img.onload = () => {
        setLoaded(prevLoaded => {
          const copy = [...prevLoaded];
          copy[idx] = true;
          return copy;
        });
      };
    });
    // opcional: cleanup no necesario para Image()
  }, [current, images, loaded]);

  // Auto-advance usando setTimeout dependiente de `current`
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setTimeout(() => {
      showNext();
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, images.length, showNext]);

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
         {prev !== null && loaded[prev] && (
          <img
            key={`prev-${prev}`}
            src={images[prev]}
            alt=""
            className="fade-image fade-out"
            decoding="async"
            loading="lazy"
          />
        )}

        {/* Current image: always render but visually hidden until loaded */}
        <img
          key={`curr-${current}`}
          src={images[current]}
          className={`fade-image ${loaded[current] ? 'fade-in' : 'hidden-image'}`}
          decoding="async"
          loading={current === 0 ? "eager" : "lazy"} // la primera imagen puede pedirse eager
          fetchpriority={current === 0 ? "high" : "auto"} // soporte moderno
          onLoad={() => {
            setLoaded(prevLoaded => {
              const copy = [...prevLoaded];
              copy[current] = true;
              return copy;
            });
          }}
        />

        {/* placeholder skeleton while current not loaded */}
        {!loaded[current] && (
          <div className="image-placeholder" aria-hidden="true">
            {/* aquí podés poner SVG blurred o spinner */}
          </div>
        )}
      </div> 

      <article 
        className="project-content" 
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <header className="project-header">
          <p className="project-title"><b>{title}</b> {'\n'+location}</p>
          <p className="project-state">{state}</p>
        </header>

        {!m2 && !rooms && !baths && !cars ? null : 
          <main className='project-resume-bar'>
            {m2? <div><i className="fas fa-ruler-combined"></i>{m2} m²</div> : null }
            {rooms? <div><i className="fas fa-bed"></i> {rooms}</div> : null }
            {desk? <div><i className="fas fa-book"></i>{desk}</div> : null }
            {gym? <div><i className="fas fa-dumbbell"></i>{gym}</div> : null }
            {gameroom? <div><i className="fas fa-dice"></i>{gameroom}</div> : null }
            {baths? <div><i className="fas fa-bath"></i>{baths}</div> : null }
            {cars? <div><i className="fas fa-car"></i>{cars}</div> : null }
          </main>
        }

        <i className='fas fa-angle-up show-up'></i>
        <i className='fas fa-angle-down show-down'></i>
        <p className="project-description">{description}</p>
      </article>
    </section>
  );
}

export default Project