import Navbar from './components/navbar.jsx'
import WelcomeBanner from './components/Welcome-banner.jsx'
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
      <p >Hello friend! ☺</p>
    </>
  )
}

export default App
