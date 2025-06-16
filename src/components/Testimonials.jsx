import './Testimonials.css';
import avatar1 from '../assets/inicio/avataaars.webp'
import avatar2 from '../assets/inicio/avataaars_1.webp'
import avatar3 from '../assets/inicio/avataaars_2.webp'
import avatar4 from '../assets/inicio/avataaars_3.webp'
import TestimonialsList from './Testimonials-list.jsx';

const testimonialsData = [
  {
    image: avatar2,
    author: "Juan Pérez",
    rate: 5,
    content: "El servicio fue excepcional, superaron mis expectativas.",
  },
  {
    image: avatar1,
    author: "Ana Gomez",
    rate: 4,
    content: "Terrible una re locura mamita.",
  },
  {
    image: avatar3,
    author: "jose jsoe",
    rate: 5,
    content: "ai jesusito salvame de perderme esto.",
  },
  {
    image: avatar4,
    author: "La lorena",
    rate: 4,
    content: "OPA OPA jajaj terriblemisima ofertotona.",
  }
]

function Testimonials() {
  return (
    <section className='testimonials'>
      <header className='testimonials-divider'>
        <h1>Que opinan nuestros clientes.</h1>
      </header>
      <TestimonialsList testimonialsData={testimonialsData}/>
    </section>
  );
}

export default Testimonials;