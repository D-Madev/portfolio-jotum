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
        <p className="proyect-description">{description}</p>
      </div>
    </section>
  );
}

export default Proyect