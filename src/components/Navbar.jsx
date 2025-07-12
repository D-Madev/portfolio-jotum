import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import useNavbarStore from '../store/navbarStore';
import logo from '../assets/logo/jotum-architekturburo-bauunternehmen.png';
import './navbar.css';

export default function Navbar() {
  const isVisible = useNavbarStore((state) => state.isVisible);
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <AnimatePresence>
      {isVisible && (
        <motion.nav className="navbar" key={'navbar'}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/inicio">
              <img src={logo} alt="logo-jotum"/>
          </Link>

          <span 
            className={`hamburger ${menuOpen ? 'active' : ''}`}  
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </span>

          {/* Component to close hamburger menu */
          menuOpen && (
            <div
              className="backdrop"
              onClick={() => setMenuOpen(false)}
            />
          )}

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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}