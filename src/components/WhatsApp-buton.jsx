import './WhatsApp-buton.css';
import { motion } from 'framer-motion';
import useWButtonStore from '../store/whatsappButtonStore'
import whatsappIcon from '../assets/whatsapp-icon.webp'

const phoneNumber = '5491121747565';
const message = 'Hola, estoy interesado en el servicio de Jötum.';
const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

function WhatsAppButon() {
  const isVisible = useWButtonStore((state) => state.isVisible)
  
  return(
    (isVisible && (
      <motion.div 
        className="whatsapp-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="whatsapp-text">Contáctanos</span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img 
            src={whatsappIcon} 
            alt={whatsappIcon} 
            className="whatsapp-icon" 
          />
        </a>
      </motion.div>
    ))
  )
}

export default WhatsAppButon