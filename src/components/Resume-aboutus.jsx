import './Resume-aboutus.css'
import exampleMain from '../assets/Example-main.png'
import exampleSubmain from '../assets/Example-submain.png'
import exampleAdition from '../assets/Example-adition.png'

function ResumeAboutUs() {
  return (
    <article className="resume-aboutus">
      <section className='resume-aboutus-images'>
        <img src={exampleMain} alt="example-main" className='img-main' />
        <img src={exampleSubmain} alt="example-submain" className='img-sub' />
        <img src={exampleAdition} alt="example-adition" className='img-add' />
      </section>
      <section className='resume-aboutus-text'>
        <h3>Un poco sobre nosotros</h3>
        <p>
          Jötum es una constructora nacional especializada en arquitectura e
          ingeniería para viviendas unifamiliares y desarrollos a medida. Con
          un enfoque innovador, combinamos diseño moderno, eficiencia y
          precisión para crear espacios únicos que perduran en el tiempo.
          Cada proyecto está pensado para transformar el espacio de
          nuestros clientes en el hogar de sus sueños, donde funcionalidad y
          estética se unen para ofrecer una experiencia de vida excepcional.
        </p>
        <p className='resume-aboutus-quote'>“Less is more” (Menos es mas) - Ludwig Mies van der Rohe</p>
      </section>
    </article>
  );
}

export default ResumeAboutUs;