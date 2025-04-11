import { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo-jotum-sf.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className="navbar">
      <img src={logo} alt="logo-jotum"/>

      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <li><a href="/Inicio">Inicio</a></li>
        <li><a href="/Servicios">Servicios</a></li>
        <li><a href="/Nosotros">Nosotros</a></li>
        <li><a href="/Contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;