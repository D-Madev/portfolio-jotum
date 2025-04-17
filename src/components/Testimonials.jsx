import './Testimonials.css';
import TestimonialsList from './Testimonials-list.jsx';

const testimonialsData = [
  {
    image: "",
    author: "Juan Pérez",
    rate: 1,
    content: "El servicio fue excepcional, superaron mis expectativas.",
  },
  {
    image: "",
    author: "Ana Gomez",
    rate: 2,
    content: "Terrible una re locura mamita.",
  },
  {
    image: "",
    author: "jose jsoe",
    rate: 3,
    content: "ai jesusito salvame de perderme esto.",
  },
  {
    image: "",
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