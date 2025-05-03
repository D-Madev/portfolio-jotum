import './sub-footer.css'

function SubFooter({ text, img }) {
    return (
      <section className="sub-footer">
        <div className='sub-footer-background' style={{ backgroundImage: `url(${img}` }}>
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