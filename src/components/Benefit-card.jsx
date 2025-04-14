import './Benefit-card.css'

function BenefitCard({ img, title, description }) {
  return (
    <div className='benefit-card'>
      <div className="benefit-img-wrapper">
        <img src={img} alt={title} className="benefit-img" />
      </div>
      <h3 className='benefit-title'>{title}</h3>
      <div className='card-decor-line'/>
      <p className='benefit-description'>{description}</p>
    </div>
  );
}

export default BenefitCard;