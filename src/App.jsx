import { Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
//import Servicios from './pages/Servicios.jsx'
//import Contacto from './pages/Contacto.jsx'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Inicio />} />
       <Route path='/inicio' element={<Inicio />} />
       <Route path='/nosotros' element={<Nosotros />} />
    </Routes>
  )
}

export default App
