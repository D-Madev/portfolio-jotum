import WelcomeBanner from "../components/Welcome-banner"
import Leyend from "../components/Leyend"
import Services from "../components/Services"
import wbServicesImage from '../assets/servicios/welcome-banner.webp'
import useNavbarStore from '../store/navbarStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Servicios() {
  const { ref, inView } = useInView({
    threshold: 0.2,   // cuando el 20% aparezca
  });
  const showNavbar = useNavbarStore((s) => s.showNavbar);

  useEffect(() => {
    if (inView) showNavbar();
  }, [inView, showNavbar]);

  return(
    <>
      <WelcomeBanner 
        backgroundType="image"
        backgroundSrc={wbServicesImage}
        showText={false} 
        children={<h1>Servicios con estandar Jötum</h1>}
        style={{ height: '70vh'}}
      />
      <div ref={ref}></div>
      <Leyend 
        title="Servicios con sello de excelencia"
        text="Cada servicio que ofrecemos en Jötum está respaldado por los mejores profesionales y una visión clara: construir con precisión, estética y compromiso. Nuestro legado, inspirado en la excelencia que nos prescede, guía cada detalle y nos permite mantener un estándar que se ve y se siente en cada proyecto."
        style={{padding: '0'}}
      />
      <Services />
    </>
  )
}