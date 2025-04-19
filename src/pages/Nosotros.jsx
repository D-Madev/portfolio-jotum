import NavBar from "../components/Navbar.jsx";
import WelcomeBanner from "../components/Welcome-banner.jsx";
import SubFooter from "../components/Sub-footer.jsx";
import Footer from "../components/Footer.jsx";
import Author from "../components/Author.jsx";

import wbImage from '../assets/Welcome-banner-example-edited.png'
import logo from '../assets/logo-jotum-solotexto.png'

function Nostros() {
  return (
    <>
      <NavBar />
      <WelcomeBanner 
        backgroundType="image"
        backgroundSrc={wbImage}
        showText={true}
        text="Elegir Jötum es garantizar una construccion de calidad, con eficiencia, precision y un diseño cuidadosamente adaptado a cada cliente, creando un hogar solido, moderno y a la altura de sus espectativas."
        logo={logo}
        children={<></>}
      />
      <SubFooter />
      <Footer />
      <Author />
    </>
  );
}

export default Nostros;