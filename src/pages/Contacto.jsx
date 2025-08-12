import WelcomeBanner from '../components/Welcome-banner'
import useWButtonStore from '../store/whatsappButtonStore';
import ContactForm from '../components/Contact-form'
import wbContact from '../assets/contacto/wb-contact.webp'

export default function Contacto() {
  const hideWButton = useWButtonStore((s) => s.hideWButton);

  hideWButton();

  return (
    <>
      <WelcomeBanner 
        backgroundType='image'
        backgroundSrc={wbContact}
        showText={true}
        text={`No te preocupes si aún no tenés un plan de proyecto definido.
          Estamos para acompañarte desde el primer paso.
          ¡Empecemos juntos!`}
        children={<h2>Contactanos</h2>}
        style={{ height: '70vh' }}
      />
      <ContactForm />
    </>
  )
}