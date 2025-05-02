import './Proyect.css'

function Proyect({img, title, location, m2, state, description}) {
  return(
    <section className="proyect">
      <div className="proyect-img-container">
        <img src={img} alt="Imagen de proyecto" />
      </div>
      <article className="proyect-content">
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
        <p className="proyect-description">{description}</p>
      </article>
    </section>
  );
}

export default Proyect