import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

//** Modificar al desplegar en hosting oficial (UTIL MIENTRAS SIGA EN GH-PAGES) ** 
// Replace HashRouter -> BrowserRouter // 
import { HashRouter as Router, useLocation } from 'react-router-dom'; 
import ScrollProvider from './components/ScrollProvider.jsx';
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Author from './components/Author.jsx'
import WhatsAppButton from './components/WhatsApp-buton.jsx'
import LoadingScreen from './pages/LoadingScreen.jsx'
import './styles/index.css';

/* Imagenes que van a critical assets */
import img1 from "./assets/logo/jotum-architekturburo-bauunternehmen.png"
import img2 from "./assets/inicio/benefit-jotum.webp"
import img3 from "./assets/inicio/benefit-leaf.webp"
import img4 from "./assets/inicio/benefit-money.webp"
import img5 from "./assets/inicio/sub-footer-inicio.webp"
import img6 from "./assets/inicio/cg/1.webp"
import img7 from "./assets/inicio/cu/1.webp"
import img8 from "./assets/inicio/lm/1.webp"
import img9 from "./assets/inicio/mc/1.webp"
import img10 from "./assets/inicio/ss/1.webp"
import bg2 from "./assets/nosotros/welcome-banner.webp"
import bg17 from "./assets/servicios/welcome-banner.webp"

/* Imagenes que se cachean en el background */
import bg1 from "./assets/contacto/wb-contact.webp"
import bg3 from "./assets/nosotros/us-image-1.webp"
import bg4 from "./assets/nosotros/us-image-2.webp"
import bg5 from "./assets/nosotros/us-image-3.webp"
import bg6 from "./assets/nosotros/us-image-4.webp"
import bg7 from "./assets/nosotros/us-image-5.webp"
import bg8 from "./assets/nosotros/us-image-6.webp"
import bg9 from "./assets/nosotros/us-image-7.webp"
import bg10 from "./assets/nosotros/us-image-8.webp"
import bg11 from "./assets/nosotros/sub-footer.webp"
import bg12 from "./assets/servicios/services1.webp"
import bg13 from "./assets/servicios/services2.webp"
import bg14 from "./assets/servicios/services3.webp"
import bg15 from "./assets/servicios/services4.webp"
import bg16 from "./assets/servicios/services5.webp"
import bg18 from "./assets/servicios/asesoria.webp"
import bg19 from "./assets/servicios/direccion.webp"
import bg20 from "./assets/servicios/documentacion.webp"
import bg21 from "./assets/servicios/llave-en-mano.webp"
import bg22 from "./assets/servicios/muebles.webp"
import bg23 from "./assets/servicios/proyecto.webp"
import bg24 from "./assets/servicios/reforma.webp"

function Main() {
  const location = useLocation()
  const [loading, setLoading] = useState(true);
  
  return (
    <>
    <style>{`
      .section-backdrop-author {
        position: relative;
        overflow: visible;
        margin: 0;
        padding: 0;
      }

      . ::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;    /* offset arriba */
        bottom: -10px; /* offset abajo */
        background: #637eb9;
        z-index: 0;
        pointer-events: none;
        will-change: transform;
      }

      .section-backdrop-author > .section-backdrop-inner-author {
        position: relative;
        z-index: 1;
      }
    `}</style>
      {loading ? (
        <LoadingScreen
          criticalAssets={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, bg2, bg17]} // Estas bloquean el arranque
          backgroundAssets={[bg1, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg11, bg12, bg13, bg14, bg15, bg16, bg18, bg19, bg20, bg21, bg22, bg23, bg24]}  // Estas se cachean en background
          concurrency={5}
          minVisible={700}
          onFinished={() => setLoading(false)}
          fontName={'"Open Sans", sans-serif'} // Nombre de fuenta tal cual CSS, ej: '"Inter", sans-serif' -> o 'Inter'
        />
      ) : (
        // Una vez terminado el loader, montamos el layout completo
        <>
          <Navbar />
          <WhatsAppButton />
          <ScrollProvider watch={location.pathname}>
            <App />
            <Footer />
            <section className="section-backdrop-author">
              <div className="section-backdrop-inner-author">
                <Author />
              </div>
            </section>
          </ScrollProvider>
        </>
      )}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Main />
    </Router>
  </StrictMode>,
)
