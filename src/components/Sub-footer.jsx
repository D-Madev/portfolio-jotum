import './sub-footer.css'

function SubFooter() {
    return (
      <section className="sub-footer">
        <div className='sub-footer-background'>
          <h1 className='sub-footer-title'>Hoy das el primer paso</h1>
          <p className='sub-footer-text'>Tu consulta no nos molesta, al contrario: nos importa.
          Porque construir con Jotum es construir con confianza.</p>
          <button className='sub-footer-button'><a href="mailto:jotumproyectos@gmail.com">Contactanos!</a></button>
        </div>
      </section>
    )
}

export default SubFooter