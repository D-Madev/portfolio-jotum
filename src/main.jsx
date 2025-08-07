import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//** Modificar al desplegar en hosting oficial (UTIL MIENTRAS SIGA EN GH-PAGES) ** 
// Replace HashRouter -> BrowserRouter // 
import { HashRouter as Router, useLocation } from 'react-router-dom'; 
import ScrollProvider from './components/ScrollProvider.jsx';
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Author from './components/Author.jsx'
import './styles/index.css';

function Main() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <ScrollProvider watch={location.pathname}>
        <App />
        <Footer />
       <Author /> 
      </ScrollProvider>
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
