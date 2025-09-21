// IMPORT COMPONENTS
import WelcomeBanner from '../components/Welcome-banner.jsx'
import Leyend from '../components/Leyend.jsx'
import ResumeAboutUs from '../components/Resume-aboutus.jsx'
import VisitUs from '../components/Visit-us.jsx'
import ProjectList from '../components/Project-list.jsx'
import Benefits from '../components/Benefits.jsx'
import Testimonials from '../components/Testimonials.jsx'
import SubFooter from '../components/Sub-footer.jsx'
import logo from '../assets/logo/jotum-architekturburo-bauunternehmen.png'
// IMPORT IMAGES
import imageSubFooter from '../assets/inicio/sub-footer-inicio.webp'
import video1 from '../assets/inicio1.mp4'
import video2 from '../assets/inicio2.mp4'
import video3 from '../assets/inicio3.mp4'
import video4 from '../assets/inicio4.mp4'
import video5 from '../assets/inicio5.mp4'
import video6 from '../assets/inicio6.mp4'
import video7 from '../assets/inicio7.mp4'

function Inicio() {
  return (
    <>
    <style>{`
      .desktop-only { display: block; }
      @media (max-width: 768px) { .desktop-only { display: none !important; } }
      /* global.css */
      .section-backdrop {
        position: relative;
        overflow: visible;
        margin: 0;
        padding: 0;
      }

      .section-backdrop::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -5px;    /* offset arriba */
        bottom: -5px; /* offset abajo */
        background: #1a1919;
        z-index: 0;
        pointer-events: none;
        will-change: transform;
      }

      .section-backdrop > .section-backdrop-inner {
        position: relative;
        z-index: 1;
      }
    `}</style>
      <WelcomeBanner 
        backgroundType="video"
        backgroundSrcList = {[video1, video2, video3, video4, video5, video6, video7]}
        showText={false}
        text=""
        logo={logo}
        children={<h1>Jötum construye con un estándar de excelencia que el mercado reconoce y premia.</h1>}
        hideNavOnView={true}
        showChildren={false}
        mobileMode={true}
        />
      <div className="desktop-only">
        <Leyend 
          title="Eficiencia y precisión alemana, diseño a tu medida."
          text="Con Jötum, la arquitectura, la tecnica y la vision trabajan para tu futuro"
          hideWB={false}
        />
      </div>
      <section className="section-backdrop">
        <div className="section-backdrop-inner">
          <ResumeAboutUs />
        </div>
      </section>
      {/* <VisitUs/> */}
      <ProjectList />
      <Benefits />
      {/*<Testimonials /> */}
      <SubFooter 
        title="Hoy das el primer paso"
        text={`Tu consulta no nos molesta, al contrario: nos importa.
        Porque construir con Jötum es construir con confianza.`}
        img={imageSubFooter}
      />
    </>
  )
}

export default Inicio
