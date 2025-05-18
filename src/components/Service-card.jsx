import './Service-card.css'

export default function ServiceCard({ logo, title, description}) {
  return(
    <article className="service-card">
      <img src={logo} alt={logo} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}