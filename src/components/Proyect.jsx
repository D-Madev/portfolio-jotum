import './Proyect.css'

function Proyect({img, title, location, m2, state, description}) {
  return(
    <section className="proyect">
      <img src={img} alt="Imagen de proyecto" />
      <div className="proyect-content">
        <div className="proyect-header">
          <p className="proyect-title"><b>{title}</b> {location}</p>
          <p className="proyect-state">{state}</p>
        </div>
        <div className='proyect-resume-bar'>
          <i className="fas fa-ruler-combined"></i>  {m2} m²
          <i className="fas fa-bed"></i> 1
          <i className="fas fa-bath"></i> 1
          <i className="fas fa-car"></i>
        </div>
        <p className="proyect-description">{description}</p>
      </div>
    </section>
  );
}

export default Proyect