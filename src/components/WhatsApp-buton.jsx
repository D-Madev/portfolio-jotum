import './WhatsApp-buton.css';
import whatsappIcon from '../assets/whatsapp-icon.png'

const phoneNumber = '54911-1234-5678'; // Reemplazar con número final
const message = 'Hola, estoy interesado en el servicio de Jotum.';
const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

function WhatsAppButon() {
  return(
    <div className="whatsapp-button">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt={whatsappIcon} className="whatsapp-icon" />
      </a>
    </div>
  )
}

export default WhatsAppButon