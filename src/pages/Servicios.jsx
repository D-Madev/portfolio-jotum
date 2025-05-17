import WelcomeBanner from "../components/Welcome-banner"
import wbServicesImage from '../assets/fallback.png'
import logo from '../assets/logo-jotum-sf.png'

export default function Servicios() {
  return(
    <>
      <WelcomeBanner 
        backgroundType="image"
        backgroundSrc={wbServicesImage}
        showText={false}
        logo={logo} 
        style={{ height: '70vh'}}
      />
    </>
  )
}