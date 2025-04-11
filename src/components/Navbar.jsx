import './navbar.css';
import logo from '../assets/logo-jotum-sf.png';

function Navbar() {
  return(
    <nav className="navbar">
      <img src={logo} alt="logo-jotum"/>
      <ul>
        <li><a href="/Inicio">Inicio</a></li>
        <li><a href="/Servicios">Servicios</a></li>
        <li><a href="/Nosotros">Nosotros</a></li>
        <li><a href="/Contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;