import './Benefit-card.css'

function BenefitCard({ img, title, description }) {
  return (
    <div className='benefit-card'>
      <img src={img} alt={title} className='benefit-img' />
      <h3 className='benefit-title'>{title}</h3>
      {/*before*/}
      <p className='benefit-description'>{description}</p>
    </div>
  );
}

export default BenefitCard;