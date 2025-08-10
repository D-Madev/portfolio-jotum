import BenefitCard from './Benefit-card'
import BenefitLeaf from '../assets/inicio/benefit-leaf.webp'
import BenefitMoney from '../assets/inicio/benefit-money.webp'
import BenefitJotum from '../assets/inicio/benefit-jotum.webp'
import './Benefits.css'

function Benefits() {
  return(
    <section className='benefits'>
      <div className='decor-line' />
      <div className='benefits-header'>
        <h1>BENEFICIOS</h1>
        <p>Construyendo con Jötum</p>
      </div>
      <div className='benefits-list'>
        <BenefitCard 
          img={BenefitMoney}
          title="ADAPTADO A TU FORMA DE VIVIR"
          description="Cada proyecto nace de una escucha atenta. Diseñamos espacios que se ajustan a tus rutinas, deseos y formas de habitar, priorizando funcionalidad sin sacrificar identidad. Porque la buena arquitectura no impone: acompaña."
          className="benefit-card-1"
        /> 
        <BenefitCard 
          img={BenefitJotum}
          title="DISEÑO QUE PERDURA EN EL TIEMPO"
          description="Un buen diseño arquitectónico no solo envejece con elegancia, sino que también conserva —y muchas veces incrementa— su valor monetario. Apostamos por espacios pensados para durar, tanto en su estética como en su inversión."
          className="benefit-card-2"
        />
        <BenefitCard 
          img={BenefitLeaf}
          title="FUNCIONALIDAD Y DISEÑO EFICIENCIA ENERGETICA Y SUSTENTABILIDAD"
          description="Diseñamos con criterios de eficiencia energética: ahorrás en servicios y cuidás el entorno desde el primer día."
          className="benefit-card-3"
        />
      </div>
      <div className='decor-line' style={{ backgroundColor: 'white'}}/>
    </section>
  );
}

export default Benefits;