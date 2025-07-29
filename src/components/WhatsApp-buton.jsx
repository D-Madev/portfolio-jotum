import './WhatsApp-buton.css';
import whatsappIcon from '../assets/whatsapp-icon.webp'

const phoneNumber = '5491121747565';
const message = 'Hola, estoy interesado en el servicio de Jötum.';
const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

function WhatsAppButon() {
  return(
    <div className="whatsapp-button">
      <span className="whatsapp-text">Contáctanos</span>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img 
          src={whatsappIcon} 
          alt={whatsappIcon} 
          className="whatsapp-icon" 
        />
      </a>
    </div>
  )
}

export default WhatsAppButon