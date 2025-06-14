import WelcomeBanner from '../components/Welcome-banner'
import ContactForm from '../components/Contact-form'
import Footer from '../components/Footer'
import Author from '../components/Author'

import wbContact from '../assets/wb-contact.png'

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
        children={<h1 style={{ fontSize: '100px'}}>Contactanos</h1>}
        style={{ height: '70vh' }}
      />
      <ContactForm />
      <Footer/>
      <Author/>
    </>
  )
}