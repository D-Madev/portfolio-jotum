import './Testimonials-list.css'
import Testimony from './Testimony.jsx'

function TestimonialsList({ testimonialsData }) {
  return (
    <div className="testimonials-list">
      <div className="testimonials-track">
        {testimonialsData.map((testimony, index) => (
          <Testimony
            key={index}
            image={testimony.image}
            author={testimony.author}
            rate={testimony.rate}
            content={testimony.content}
          />
        ))}
        {testimonialsData.map((testimony, index) => (
          <Testimony
            key={index}
            image={testimony.image}
            author={testimony.author}
            rate={testimony.rate}
            content={testimony.content}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsList;