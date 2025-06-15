import "./Contact-form.css"
import formImage from "../assets/contact-form.png"

export default function ContactForm() {
  return (
    <section className="contact-form">
      <h1 className="contact-form-title">{`Contanos sobre tu proyecto y
       nos ponemos en contacto.`}</h1>
      <article>
        <header>
          <h3 className="contact-form-subtitle">¿Que estas buscando?</h3>
          <div className="contact-form-tags">
            <button>Proyecto</button>
            <button>Llave en mano</button>
            <button>Remodelacion</button>
          </div>
        </header>
        <main className="contact-form-main">
          <form action="submit" method="post" className="contact-form-form">
            <div className="input-container">
              <input type="text" name="name" id="name" />
              <label for="name">Nombre</label>
            </div>
            <div className="input-container">
              <input type="text" name="city" id="city" />
              <label for="city">Ciudad</label>
            </div>
            <div className="input-container">
              <input type="email" name="email" id="email" />
              <label for="email">Email</label>
            </div>
            <div className="input-container">
              <input type="text" inputMode="numeric" pattern="[0-9]*" name="phone" id="phone" />
              <label for="phone">Telefono</label>
            </div>
            <div className="input-container">
              <input type="text" name="msg" id="msg" />
              <label for="msg">Mensaje</label>
            </div>
          </form>
          <div className="contact-form-side">
            <p>"El futuro se construye una decisión valiente a la vez."</p>
            <img src={formImage} alt="Logo" />
            <button style={{display: "none"}}>Enviar formulario</button>
          </div>
        </main>
      </article>
    </section>
  )
}