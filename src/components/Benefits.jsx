import BenefitCard from './Benefit-card'
import BenefitLeaf from '../assets/Benefit-leaf.png'
import BenefitMoney from '../assets/Benefit-money.png'
import BenefitJotum from '../assets/Benefit-jotum.png'
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
          title="RELACION CALIDAD/PRECIO"
          description="Optimizamos materiales, diseño estructural y logística de obra para lograr la mejor ecuación costo-beneficio."
          className="benefit-card-1"
        /> 
        <BenefitCard 
          img={BenefitJotum}
          title="FUNCIONALIDAD Y DISEÑO"
          description="Optimizamos materiales, diseño estructural y logística de obra para lograr la mejor ecuación costo-beneficio."
          className="benefit-card-2"
        />
        <BenefitCard 
          img={BenefitLeaf}
          title="FUNCIONALIDAD Y DISEÑO EFICIENCIA ENERGETICA Y SUSTENTABILIDAD"
          description="Diseñamos con criterios de eficiencia energética: ahorrás en servicios y cuidás el entorno desde el primer día."
          className="benefit-card-3"
        />
      </div>
      <div className='decor-line' />
    </section>
  );
}

export default Benefits;