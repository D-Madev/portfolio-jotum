import "./Contact-form.css"

export default function ContactForm() {
  return (
    <section className="contact-form">
      <h1 className="contact-form-title">Contanos sobre tu proyecto y nos ponemos en contacto.</h1>
      <article>
        <header>
          <h3 className="contact-form-subtitle">¿Que estas buscando?</h3>
          <div style={{display: 'flex', margin: '0 2rem'}}>
            <button>Proyecto</button>
            <button>Llave en mano</button>
            <button>Remodelacion</button>
          </div>
        </header>
        <main>
          <form action="">
            <label htmlFor="">nombre</label><input type="text" name="" id="" />
            <label htmlFor="">ciudad</label><input type="text" name="" id="" />
            <label htmlFor="">email</label><input type="email" name="" id="" />
            <label htmlFor="">telefono</label><input type="number" name="" id="" />
            <label htmlFor="">mensaje</label><input type="text" name="" id="" />
          </form>
          <div>
            <p>"El futuro se construye una decisión valiente a la vez."</p>
            <img src="" alt="" />
            <button style={{display: "none"}}>Enviar formulario</button>
          </div>
        </main>
      </article>
    </section>
  )
}