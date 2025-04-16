import './Testimonials-list.css'
import Testimony from './Testimony.jsx'

function TestimonialsList({ testimonialsList }) {
  return (
    <div className="testimonials-list">
      <div className="testimonials-track">
        {testimonialsList.map((testimony, index) => (
          <Testimony
            key={index}
            image=""
            author={testimony.author}
            rate={testimony.rate}
            content={testimonial.content}
          />
        ))}
        {testimonialsList.map((testimony, index) => (
          <Testimony
            key={index}
            image=""
            author={testimony.author}
            rate={testimony.rate}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsList;