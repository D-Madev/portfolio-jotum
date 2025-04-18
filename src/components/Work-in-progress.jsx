import work from '../assets/construction-website.webp'
//import work from '../assets/work-in-progress-icon.png'
import './Work-in-progress.css'

function WorkInProgress() {
  return (
    <div className="construction-container">
      <div className="helmet">
        <img src={work} alt={work} />
      </div>
      <h1>¡Ups! Esta página aún está en construcción 🏗️</h1>
      <p>Estamos trabajando duro para traerte algo grandioso. Volvé pronto... o mandanos medialunas 😅</p>
      <div className="loader"></div>
    </div>
  )
}

export default WorkInProgress
