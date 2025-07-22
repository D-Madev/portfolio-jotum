import { useRef, useEffect } from 'react'
import 'notyf'
import 'notyf/notyf.min.css'
import "./Contact-form.css"
import formImage from "../assets/logo/jotum-architekturburo-bauunternehmen.png"

export default function ContactForm() {
  // Referencia a la sección principal para animaciones de scroll
  const sectionRef = useRef(null);
  // Estado interno para controlar animaciones de scroll
  const state = useRef({
    hasAnimated: false,
    isAnimating: false,
  }).current;
  // Constantes para duración y porcentaje de trigger del scroll
  const SCROLL_DURATION = 1200;
  const TRIGGER_PERCENT = 0.6;


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
    const section = sectionRef.current;
    const THRESH_Y = window.innerHeight * TRIGGER_PERCENT;

    // Reinicia el trigger si la sección sale del umbral
    function resetIfNeeded(rect) {
      if (
        state.hasAnimated &&
        (rect.top > THRESH_Y || rect.bottom < 0)
      ) {
        state.hasAnimated = false;
      }
    }

    // Handler de scroll: dispara la animación si corresponde
    function onScroll() {
      if (state.isAnimating) return;

      const rect = section.getBoundingClientRect();
      resetIfNeeded(rect);

      // Si no animamos y el top cruza el umbral, disparamos:
      if (!state.hasAnimated && rect.top <= THRESH_Y && rect.bottom > 0) {
        state.hasAnimated = true;
        state.isAnimating = true;
        document.body.classList.add('no-scroll');

        animateScrollToCenter(section, SCROLL_DURATION, () => {
          state.isAnimating = false;
          document.body.classList.remove('no-scroll');
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [SCROLL_DURATION, TRIGGER_PERCENT]);

  /**
   * Función auxiliar para animar el scroll y centrar la sección en pantalla.
   * Usa una función de easing para suavizar el movimiento.
   */
  function animateScrollToCenter(el, duration, callback) {
    const rect = el.getBoundingClientRect();
    const startY = window.scrollY;
    const absoluteTop = startY + rect.top;
    const targetY = absoluteTop - (window.innerHeight - rect.height) / 2 - 50;
    const diff = targetY - startY;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cuadrático para suavidad
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + diff * ease);
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        callback && callback();
      }
    }

    window.requestAnimationFrame(step);
  }

  return (
    <section ref={sectionRef} className="contact-form">
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