import './sub-footer.css'

const text = `Cada proyecto que emprendemos es una oportunidad para crear algo único y significativo. 
          Nuestro enfoque combina escucha, análisis riguroso, diseño con identidad y una ejecución cuidada de principio a fin.
          Si estás listo para dar vida a tus ideas, nos encantaría acompañarte en ese camino.
          Hablemos.`

function SubFooter() {
    return (
      <section className="sub-footer">
        <div className='sub-footer-background'>
          <h1 className='sub-footer-title'></h1>
          <p className='sub-footer-text'>
            {text}
          </p>
          <button className='sub-footer-button'><a href="#/contacto" >Contactanos!</a></button>
        </div>
      </section>
    )
}

export default SubFooter