import WelcomeBanner from "../components/Welcome-banner"
import Leyend from "../components/Leyend"
import Services from "../components/Services"
import Footer from "../components/Footer"
import Author from "../components/Author"

import wbServicesImage from '../assets/fallback.png'

export default function Servicios() {
  return(
    <>
      <WelcomeBanner 
        backgroundType="image"
        backgroundSrc={wbServicesImage}
        showText={false} 
        children={<h1>Servicios con estandar Jötum</h1>}
        style={{ height: '70vh'}}
      />
      <Leyend 
        title="Servicios con sello de excelencia"
        text="Cada servicio que ofrecemos en Jötum está respaldado por los mejores
profesionales y una visión clara: construir con precisión, estética y compromiso. Nuestro legado, inspirado en la excelencia que nos prescede, guía cada detalle y
nos permite mantener un estándar que se ve y se siente en cada proyecto."
        style={{padding: '0'}}
      />
      <Services />
      <Footer/>
      <Author/>
    </>
  )
}