import './Footer.css'
import jotumLogo from '../assets/logo-jotum-sf.png'

// EMAIL
const email = "jotumproyectos@gmail.com"
const asunto = encodeURIComponent("Asunto del correo")
const body = encodeURIComponent("Texto del mensaje")

// PHONE
const phoneNumberView = "+54 9 11 2174-7565"
const message = encodeURIComponent('Hola, estoy interesado en el servicio de Jötum.');


/**/
const phone = phoneNumberView.replaceAll(' ','').replaceAll('+','').replaceAll('-','');
const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${asunto}&body=${body}`

function Footer() {
  return(
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src={jotumLogo} alt="Jötum Logo" className="footer-logo" />
          <p>© 2025 • Todos los derechos reservados Jötum S.A.</p>
        </div>

        <div className="footer-center">
          <div className="footer-contact">
            <h2>Contactanos</h2>
            <p>
              <a href={emailLink} target="_blank">
                {email}
              </a>
            </p>
            <p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {phoneNumberView}
              </a>
            </p>
          </div>
          <div className="footer-place">
            <h2>Donde trabajamos</h2>
            <p>Provincia de Buenos Aires</p>
            <p>Ciudad Autónoma de Buenos Aires</p>
            <p>Neuquén - Villa Pehuenia Moquehue</p>
          </div>
        </div>

        {/* Columna Derecha: Redes Sociales */}
        <div className="footer-right">
          <h2>Redes Sociales</h2>
          <ul className="footer-social">
            <li>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer