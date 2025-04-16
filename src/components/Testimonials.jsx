import './Testimonials.css';
import TestimonialsList from './Testimonials-list.jsx';

const testimonialsData = [
  {
    image: "",
    author: "Juan Pérez",
    rate: 5,
    text: "El servicio fue excepcional, superaron mis expectativas.",
  },
  {
    image: "",
    author: "Ana Gomez",
    rate: 4,
    text: "Terrible una re locura mamita.",
  },
  {
    image: "",
    author: "jose jsoe",
    rate: 5,
    text: "ai jesusito salvame de perderme esto.",
  },
  {
    image: "",
    author: "La lorena",
    rate: 4,
    text: "OPA OPA jajaj terriblemisima ofertotona.",
  }
]

function Testimonials() {
  return (
    <section className='testimonials'>
      <header className='testimonials-divider'>
        <h1>Que opinan nuestros clientes.</h1>
      </header>
      <TestimonialsList testimonials={testimonialsData}/>
    </section>
  );
}

export default Testimonials;