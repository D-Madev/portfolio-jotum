import { useRef, useState, useEffect } from 'react'
import useNavbarStore from '../store/navbarStore';
import formImage from "../assets/logo/jotum-architekturburo-bauunternehmen.png"
import 'notyf/notyf.min.css'
import 'notyf'
import "./Contact-form.css"

export default function ContactForm() {
  // Scroll consts
  const sectionRef = useRef(null);
  const state = useRef({ hasAnimated: false, isAnimating: false }).current;
  const timeoutRef = useRef(null);

  const SCROLL_DURATION = 1200; // ms - aumentá para más "cinemático"
  const TRIGGER_PERCENT = 0.6;
  const hideNavbar = useNavbarStore((s) => s.hideNavbar);
  const showNavbar = useNavbarStore((s) => s.showNavbar);

  const [selectedTag, setSelectedTag] = useState('');

  // Show the submit button when input is detected
  const handleInput = (tagOverride) => {
    const tag = typeof tagOverride !== 'undefined' ? tagOverride : selectedTag;
    const name = document.getElementById('name')?.value.trim() || '';
    const city = document.getElementById('city')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const msg = document.getElementById('msg')?.value.trim() || '';

    if (name !== '' && city !== '' && email !== '' && phone !== '' && msg !== '' && tag !== '') {
      document.getElementById('contact-form-button').style.display = '';
    } else {
      document.getElementById('contact-form-button').style.display = 'none';
    }
  };

   // toggle para las etiquetas
  const toggleTag = (tag) => {
    const newSelected = (selectedTag === tag) ? '' : tag;
    setSelectedTag(newSelected);
    // Llamamos a handleInput con el valor nuevo para evitar efectos de setState asincrónico
    handleInput(newSelected);
  };

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
    if (window.innerWidth <= 768) {
      return; // no registramos scroll handlers
    }
    const loco = window.locoScroll;
    const el = sectionRef.current;
    if (!el) return;

    const THRESH_Y = window.innerHeight * TRIGGER_PERCENT;

    function resetIfNeeded(rect) {
      if (state.hasAnimated && (rect.top > THRESH_Y || rect.bottom < 0)) {
        state.hasAnimated = false;
      }
    }

    function onLocoScroll(/* evt */) {
      if (state.isAnimating) return;
      // usamos getBoundingClientRect para decidir trigger (funciona con locomotive)
      const rect = el.getBoundingClientRect();
      resetIfNeeded(rect);

      if (!state.hasAnimated && rect.top <= THRESH_Y && rect.bottom > 0) {
        state.hasAnimated = true;
        state.isAnimating = true;
        animateScrollToCenterWithLoco(el, SCROLL_DURATION, () => {
          state.isAnimating = false;
        });
      }
    }

    // si existe instancia de loco, registramos. Si no, registramos window scroll (fallback)
    if (loco && typeof loco.on === 'function') {
      loco.on('scroll', onLocoScroll);
    } else {
      window.addEventListener('scroll', onLocoScroll, { passive: true });
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (loco && typeof loco.off === 'function') {
        loco.off('scroll', onLocoScroll);
      } else {
        window.removeEventListener('scroll', onLocoScroll);
      }
    };
  }, [SCROLL_DURATION, TRIGGER_PERCENT, hideNavbar]);

  function animateScrollToCenterWithLoco(el, duration = 1000, callback) {
    const rect = el.getBoundingClientRect();
    // calculamos offset para centrar verticalmente
    const offset = -Math.round((window.innerHeight - rect.height) / 2);

    const loco = window.locoScroll;

    // Fallback a requestAnimationFrame si no hay locomotive
    if (!loco || typeof loco.scrollTo !== 'function') {
      return animateScrollToCenterFallback(el, duration, callback);
    }

    // Visuales / bloqueo ligero
    document.body.classList.add('no-scroll');
    hideNavbar();

    // Ejecutamos scrollTo. locomotive maneja la animación internamente.
    loco.scrollTo(el, {
      offset,
      duration,
      disableLerp: false,
    });

    // Restauramos después de duration (scrollTo no siempre da callback)
    timeoutRef.current = setTimeout(() => {
      document.body.classList.remove('no-scroll');
      callback && callback();
    }, duration + 60);
  }

  function animateScrollToCenterFallback(el, duration, callback) {
    const rect = el.getBoundingClientRect();
    const startY = window.scrollY;
    const absoluteTop = startY + rect.top;
    const targetY = absoluteTop - (window.innerHeight - rect.height) / 2
    const diff = targetY - startY;
    let startTime = null;

    document.body.classList.add('no-scroll');
    hideNavbar();

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + diff * ease);
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        document.body.classList.remove('no-scroll');
        callback && callback();
      }
    }
    window.requestAnimationFrame(step);
  }

  return (
    <section ref={sectionRef} className="contact-form">
      <h1 className="contact-form-title">Contanos sobre tu proyecto y nos ponemos en contacto.</h1>
      <article>
        <header>
          <h3 className="contact-form-subtitle">¿Qué estás buscando?</h3>
          {/* botones fuera del form, pero actualizan estado */}
          <div className="contact-form-tags" role="tablist" aria-label="Tipos de proyecto">
            <button
              type="button"
              className={selectedTag === 'Proyecto' ? 'active' : ''}
              aria-pressed={selectedTag === 'Proyecto'}
              onClick={() => toggleTag('Proyecto')}
            >
              Proyecto
            </button>

            <button
              type="button"
              className={selectedTag === 'Llave en mano' ? 'active' : ''}
              aria-pressed={selectedTag === 'Llave en mano'}
              onClick={() => toggleTag('Llave en mano')}
            >
              Llave en mano
            </button>

            <button
              type="button"
              className={selectedTag === 'Remodelacion' ? 'active' : ''}
              aria-pressed={selectedTag === 'Remodelacion'}
              onClick={() => toggleTag('Remodelacion')}
            >
              Remodelacion
            </button>
          </div>
        </header>
        <main className="contact-form-main">
          <form id="contact-form-form" className="contact-form-form" onInput={handleInput} onSubmit={handleSubmit}>
             {/* input oculto para que FormData incluya la tag */}
            <input type="hidden" name="tag" value={selectedTag} />
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
            {window.innerWidth >= 768 && (
              <img src={formImage} alt="Logo" />
            )}
            <button type="submit" form="contact-form-form" className="contact-form-button" id="contact-form-button" style={{display: "none"}}>Enviar formulario</button>
          </div>
        </main>
      </article>
    </section>
  )
}