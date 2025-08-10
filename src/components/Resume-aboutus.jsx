import './Resume-aboutus.css'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MiniStatCard from './Mini-stats-card.jsx';
import useNavbarStore from '../store/navbarStore';
import useWButtonStore from '../store/whatsappButtonStore';


export default function ResumeAboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,   // cuando el 20% aparezca
  });
  const showNavbar = useNavbarStore((s) => s.showNavbar);
  const showWButton = useWButtonStore((s) => s.showWButton);

  useEffect(() => {
    if (inView) showNavbar();
    if (inView) showWButton();
  }, [inView, showNavbar]);

  const stats = [
    { label: 'Presencia en provincias', value: 5, suffix: ''},
    { label: 'Espacios pensados desde cero para cada cliente', value: 20, suffix: '+'},
    { label: 'Desarrollos ejecutados con estándares de diseño Jötum', value: 15, suffix: '+'},
    { label: 'Seguimos sumando gracias a clientes como vos', value: Infinity, suffix: '+'},
  ];

  return (
    <article ref={ref} className="resume-aboutus">
      <section className='resume-aboutus-text'>
        <h2 className="resume-aboutus-title">Un poco sobre nosotros</h2>
        <p className="resume-aboutus-paragraph"> 
        Jötum es una constructora nacional especializada en arquitectura e ingeniería para viviendas unifamiliares y desarrollos a medida. Nos dirigimos a quienes valoran una calidad de vida excepcional y entienden el diseño como una experiencia integral. Cada proyecto nace de la precisión, el diseño consciente y la atención al detalle, dando lugar a hogares únicos donde la estética se encuentra con la funcionalidad para crear espacios verdaderamente habitables, pensados para perdurar y disfrutarse en el día a día.
        </p>
        <p className='resume-aboutus-quote'>"La forma sigue a la función." - Walter Gropius</p>
      </section>
      <section className='resume-aboutus-stats'>
        {stats.map((stat, idx) => {
          return(
            <MiniStatCard 
              key={idx}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          )
        })}
      </section>
    </article>
  );
}