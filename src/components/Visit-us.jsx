import './Visit-us.css'

export default function VisitUs() {
  const title = `Nos inspiran los desafíos, en cualquier entorno.`
  const text = `En Jötum creemos que cada espacio, ya sea un bosque, una loma o un lote urbano, es una oportunidad para crear arquitectura con carácter. Nos adaptamos a cada entorno para diseñar obras habitables, funcionales y con identidad, sin perder de vista la eficiencia ni el buen diseño. Porque tanto en lo natural como en lo urbano, sabemos cómo hacer que el espacio hable.`
  const textButton = `Seguir en Instagram`

  return(
    <section className='visit-us'>
      <article className='visit-us-side-content'>
        <h2 className='visit-us-title'>{title}</h2>
        <p className='visit-us-paragraph'>{text}</p>
        <a className='visit-us-button' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <i className="fab fa-instagram"></i> {textButton}
        </a>
      </article>
    </section>
  );
}