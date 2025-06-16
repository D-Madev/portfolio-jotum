import WelcomeBanner from '../components/Welcome-banner'
import ContactForm from '../components/Contact-form'
import Footer from '../components/Footer'
import Author from '../components/Author'

import wbContact from '../assets/contacto/wb-contact.webp'

export default function Contact() {
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
      <Footer/>
      <Author/>
    </>
  )
}