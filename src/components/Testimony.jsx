import './Testimony.css'

function Testimony({ image, author, rate, content }) {
  return(
    <article className='testimony'>
      <header className='testimony-header'>
        <img src={image} alt={image} className='testimony-avatar'/>
        <div className="testimony-info">
          <h1>{author}</h1>
          <p className="testimony-rate">
            {Array.from({ length: rate }).map((_, i) => '★').join('')}
          </p>
        </div>
      </header>
      <p className='testimony-content'>{content}</p>
    </article>
  )
}

export default Testimony;