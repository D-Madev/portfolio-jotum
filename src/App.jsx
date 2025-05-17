import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import Working from './pages/Working.jsx' 


function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/*' element={<Inicio />} />
      <Route path='/inicio' element={<Inicio />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/contacto' element={<Working />} />
    </Routes>
  )
}

export default App
