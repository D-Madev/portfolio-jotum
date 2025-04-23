import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//** Modificar al desplegar en hosting oficial (UTIL MIENTRAS SIGA EN GH-PAGES) ** 
// Replace HashRouter -> BrowserRouter // 
import { HashRouter as Router } from 'react-router-dom'; 
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </StrictMode>,
)
