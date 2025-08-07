import { useRef, useEffect, useState } from 'react'
import 'notyf'
import 'notyf/notyf.min.css'
import "./Contact-form.css"
import useNavbarStore from '../store/navbarStore';
import formImage from "../assets/logo/jotum-architekturburo-bauunternehmen.png"

export default function ContactForm() {
  // Scroll consts
  const sectionRef = useRef(null)
  const [animating, setAnimating] = useState(false)
  const hideNavbar = useNavbarStore((s) => s.hideNavbar)

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

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const notyf = new Notyf({ duration: 3000, position: { x: 'center', y: 'top' }})
    
    try {
      const res = await fetch('http://localhost:3001/send/mail', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        notyf.success('Formulario enviado correctamente');
        e.target.reset();
        document.getElementById("contact-form-button").style.display = "none";
      } else {
        console.error('Error 400 - al enviar el formulario:', res);
        notyf.error('Error al enviar el formulario. Por favor, intente nuevamente.');
      }
    }
    catch(e)  {
      console.error('Error 500 - al enviar el formulario:', e);
      notyf.error('Error al enviar el formulario. Por favor, intente nuevamente.');
    }
  }

  /**
   * Efecto para animar el scroll cuando la sección entra en el viewport.
   * Solo se dispara una vez hasta que la sección sale completamente de pantalla.
   */
useEffect(() => {
  const loco = window.locoScroll; if (!loco) return;
  const container = document.querySelector('[data-scroll-container]'); if (!container) return;

  const blockOpts    = { passive: false };
  const preventScroll = e => e.preventDefault();

  // flag para no re-disparar mientras dure la animación
  let animating = false;
  // flag para saber si ya hemos cruzado el umbral
  let triggered = false;

  const onScroll = (args) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calcula cuánto del componente está visible:
    const topVisible    = Math.max(rect.top, 0);
    const bottomVisible = Math.min(rect.bottom, viewportHeight);
    const visibleHeight = bottomVisible - topVisible;

    // Ratio de visibilidad (0 = nada visible, 1 = todo visible)
    const visibilityRatio = visibleHeight / rect.height;
    
    // Disparo cuando al menos el 60 % del componente está visible
    if (visibilityRatio >= 0.5 && !triggered && !animating) {
      triggered = true;
      animating = true;
      setAnimating(true);
      hideNavbar()

      // desplazamiento automático
      const offset = -(window.innerHeight/2 - rect.height/2);
      loco.scrollTo(sectionRef.current, {
        offset,
        duration: 1000,
        disableLerp: true,
      });

      // bloqueo de scroll usuario
      container.addEventListener('wheel',    preventScroll, blockOpts);
      container.addEventListener('touchmove', preventScroll, blockOpts);

      setTimeout(() => {
        container.removeEventListener('wheel',    preventScroll, blockOpts);
        container.removeEventListener('touchmove', preventScroll, blockOpts);
        setAnimating(false);
        animating = false;
      }, 1000);
    }

    // Reset para volver a disparar una vez se “oculte” por debajo del umbral
    if (visibilityRatio < 0.1) {
      triggered = false;
    }
  };

  loco.on('scroll', onScroll);
  return () => {
    loco.off('scroll', onScroll);
    container.removeEventListener('wheel',    preventScroll, blockOpts);
    container.removeEventListener('touchmove', preventScroll, blockOpts);
  };
}, [hideNavbar]);

  return (
    <section ref={sectionRef} className="contact-form">
      <h1 className="contact-form-title">Contanos sobre tu proyecto y nos ponemos en contacto.</h1>
      <article>
        <header>
          <h3 className="contact-form-subtitle">¿Qué estás buscando?</h3>
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
              <label for="phone">Teléfono</label>
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