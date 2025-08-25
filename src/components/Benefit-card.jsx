import { useState } from "react"
import './Benefit-card.css'

function BenefitCard({ img, title, description }) {
  const [isOpen, setIsOpen]   = useState(false);

  const toggleOpen = () => setIsOpen(o => !o);
  
  return (
    <div className={`benefit-card ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <div className="benefit-img-wrapper">
        <img src={img} alt={title} className="benefit-img"/>
      </div>
      <h3 className='benefit-title'>{title}</h3>
      <div className='card-decor-line'/>
      <i className='fas fa-angle-up b-show-up'></i>
      <i className='fas fa-angle-down b-show-down'></i>
      <p className='benefit-description'>{description}</p>
    </div>
  );
}

export default BenefitCard;