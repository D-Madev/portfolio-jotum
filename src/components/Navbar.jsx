import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo-jotum-sf.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className="navbar">
      <a href="/Inicio"><img src={logo} alt="logo-jotum"/></a>

      <span className={`hamburger ${menuOpen ? 'active' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </span>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink 
            to="/Inicio" 
            className={({ isActive }) => isActive ? 'active' : ''}>Inicio
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/Servicios"
            className={({ isActive }) => isActive ? 'active' : ''}>Servicios
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/Nosotros"
            cclassName={({ isActive }) => isActive ? 'active' : ''}>Nosotros
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/Contacto"
            className={({ isActive }) => isActive ? 'active' : ''}>Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;