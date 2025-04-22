import './Resume-aboutus.css'

function ResumeAboutUs() {
  return (
    <article className="resume-aboutus">
      <section className='resume-aboutus-text'>
        <h3 className="resume-aboutus-title">Un poco sobre nosotros</h3>
        <p className="resume-aboutus-paragraph"> 
        Jötum es una constructora nacional especializada en arquitectura e ingeniería para viviendas unifamiliares y desarrollos a medida. Nos dirigimos a quienes valoran una calidad de vida excepcional y entienden el diseño como una experiencia integral. Cada proyecto nace de la precisión, el diseño consciente y la atención al detalle, dando lugar a hogares únicos donde la estética se encuentra con la funcionalidad para crear espacios verdaderamente habitables, pensados para perdurar y disfrutarse en el día a día.
        </p>
        <p className='resume-aboutus-quote'>"La forma sigue a la función." - Walter Gropius</p>
      </section>
      <section className='resume-aboutus-stats'>
      </section>
    </article>
  );
}

export default ResumeAboutUs;