import './Testimony.css'

function Testimony({ image, author, rate, content }) {
  return(
    <article className='testimony'>
      <img src={image} alt="profile photo" />
      <h1>{author}</h1>
      <p>{rate}</p>
      <p>{content}</p>
    </article>
  )
}

export default Testimony;