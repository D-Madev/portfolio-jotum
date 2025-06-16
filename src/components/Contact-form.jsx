import "./Contact-form.css"
import formImage from "../assets/logo/jotum-architekturburo-bauunternehmen.png"

export default function ContactForm() {

  // Show the submit button when input is detected
  const handleInput = () => {
    // Prevent submission if any field is empty
    if (document.getElementById("name").value.trim() !== "" && 
        document.getElementById("city").value.trim() !== "" && 
        document.getElementById("email").value.trim() !== "" && 
        document.getElementById("phone").value.trim() !== "" && 
        document.getElementById("msg").value.trim() !== "")
      document.getElementById("contact-form-button").style.display = "";
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    /* Send the form data to a email service or API

        const body = `Nombre: ${data.name}%0D` +
                 `Ciudad: ${data.city}%0D` +
                 `Email: ${data.email}%0D` +
                 `Telefono: ${data.phone}%0D` +
                 `Mensaje: ${data.msg}`;
      window.location.href = `mailto:destino@example.com?subject=Consulta desde el formulario&body=${encodeURIComponent(body)}`;
    */

    // Reset the form after submission
    e.target.reset();
    document.getElementById("contact-form-button").style.display = "none";
  }

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
          <form id="contact-form-form" className="contact-form-form" onInput={handleInput} onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="text" name="name" id="name" required pattern="^[A-Za-zÀ-ÿ\s]+$" onInput={e => {e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g,'')}}/>
              <label for="name">Nombre</label>
            </div>
            <div className="input-container">
              <input type="text" name="city" id="city" required pattern="^[A-Za-zÀ-ÿ\s]+$" onInput={e => {e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g,'')}}/>
              <label for="city">Ciudad</label>
            </div>
            <div className="input-container">
              <input type="email" name="email" id="email" required/>
              <label for="email">Email</label>
            </div>
            <div className="input-container">
              <input type="text" inputMode="numeric" pattern="^\d{8}$" maxLength={8} name="phone" id="phone" required onInput={e => {e.target.value = e.target.value.replace(/\D/g, '').slice(0,8)}}/>
              <label for="phone">Telefono</label>
            </div>
            <div className="input-container">
              <input type="text" name="msg" id="msg" required pattern="^[A-Za-zÀ-ÿ\s]+$" onInput={e => {e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g,'')}}/>
              <label for="msg">Mensaje</label>
            </div>
          </form>
          <div className="contact-form-side">
            <p>"El futuro se construye una decisión valiente a la vez."</p>
            <img src={formImage} alt="Logo" />
            <button type="submit" form="contact-form-form" className="contact-form-button" id="contact-form-button" style={{display: "none"}}>Enviar formulario</button>
          </div>
        </main>
      </article>
    </section>
  )
}