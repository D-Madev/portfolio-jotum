// IMPORT COMPONENTS
import Navbar from './components/navbar.jsx'
import WelcomeBanner from './components/Welcome-banner.jsx'
import Leyend from './components/Leyend.jsx'
import ResumeAboutUs from './components/Resume-aboutus.jsx'
import ProyectList from './components/Proyect-list.jsx'
import Benefits from './components/Benefits.jsx'
import Testimonials from './components/Testimonials.jsx'
import SubFooter from './components/Sub-footer.jsx'
import Footer from './components/Footer.jsx'
// IMPORT IMAGES
import logo from './assets/logo-jotum-solotexto.png'
import videoBackground from './assets/parck.mp4'

function App() {
  return (
    <>
      <Navbar />
      <WelcomeBanner 
        backgroundType="video"
        backgroundSrc={videoBackground}
        showText={false}
        text=""
        logo={logo}
        children={<p></p>}
      />
      <Leyend />
      <ResumeAboutUs />
      <ProyectList />
      <Benefits />
      <Testimonials />
      <SubFooter />
      <Footer />
    </>
  )
}

export default App
