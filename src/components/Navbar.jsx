import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-jotum-sf.png';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className="navbar">
      <NavLink to="/inicio">
          <img src={logo} alt="logo-jotum"/>
      </NavLink>

      <span className={`hamburger ${menuOpen ? 'active' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </span>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink 
            to="/inicio" 
            className={({ isActive }) => isActive ? 'active' : ''}>Inicio
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/servicios"
            className={({ isActive }) => isActive ? 'active' : ''}>Servicios
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/nosotros"
            className={({ isActive }) => isActive ? 'active' : ''}>Nosotros
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/contacto"
            className={({ isActive }) => isActive ? 'active' : ''}>Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;