import './Service-card.css'

export default function ServiceCard({ logo, title, description}) {
  return(
     <div className="service-card-wrapper">
      <article className="service-card">
        <img src={logo} alt={logo} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          <button className="service-button">Ver más</button>
        </div>
      </article>
    </div>
  )
}