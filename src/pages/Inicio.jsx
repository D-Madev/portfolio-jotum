// IMPORT COMPONENTS
import WelcomeBanner from '../components/Welcome-banner.jsx'
import Leyend from '../components/Leyend.jsx'
import ResumeAboutUs from '../components/Resume-aboutus.jsx'
import VisitUs from '../components/Visit-us.jsx'
import ProyectList from '../components/Proyect-list.jsx'
import Benefits from '../components/Benefits.jsx'
import Testimonials from '../components/Testimonials.jsx'
import SubFooter from '../components/Sub-footer.jsx'
import Footer from '../components/Footer.jsx'
import Author from '../components/Author.jsx'
import WhatsAppButton from '../components/WhatsApp-buton.jsx'
// IMPORT IMAGES
import logo from '../assets/logo-jotum-solotexto.png'
import videoBackground from '../assets/Background-welcome-banner.mp4'
import subFooterImage from '../assets/Sub-footer.png'

function Inicio() {
  return (
    <>
      
      <WhatsAppButton />
      <WelcomeBanner 
        backgroundType="video"
        backgroundSrc={videoBackground}
        showText={false}
        text=""
        logo=""
        children={<h1>Jötum construye con un estándar de excelencia que el mercado reconoce y premia.</h1>}
      />
      <Leyend />
      <ResumeAboutUs />
      <VisitUs/>
      <ProyectList />
      <Benefits />
      <Testimonials />
      <SubFooter 
        text = "Cada proyecto que emprendemos es una oportunidad para crear algo único y significativo. Nuestro enfoque combina escucha, análisis riguroso, diseño con identidad y una ejecución cuidada de principio a fin. Si estás listo para dar vida a tus ideas, nos encantaría acompañarte en ese camino. Hablemos."
        img = {subFooterImage}
      />
      <Footer />
      <Author /> 
    </>
  )
}

export default Inicio
