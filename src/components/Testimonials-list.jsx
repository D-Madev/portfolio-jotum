import { useRef, useEffect, useState } from 'react'
import Testimony from './Testimony.jsx'
import './Testimonials-list.css'

function TestimonialsList({ testimonialsData }) {
  const trackRef = useRef(null)
  const [copies, setCopies] = useState(2)

  useEffect(() => {
    function updateCopies() {
      const containerWidth = trackRef.current.parentElement.offsetWidth
      const itemWidth = trackRef.current.children[0].offsetWidth
      const totalSinglePass = itemWidth * testimonialsData.length
      const needed = Math.ceil((containerWidth*2) / totalSinglePass)
      setCopies(Math.max(2, needed))
    }
    updateCopies();
    window.addEventListener('resize', updateCopies);
    return () => window.removeEventListener('resize', updateCopies);
  }, [testimonialsData]);

  const allItems = Array.from({ length: copies }).flatMap(() => testimonialsData);
  return (
    <div className="testimonials-list">
      <div className="testimonials-track" ref={trackRef}>
        {allItems.map((testimony, i) => (
          <Testimony key={i}
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