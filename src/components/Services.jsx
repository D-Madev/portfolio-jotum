import { useState, useEffect } from 'react';
import img1 from '../assets/services1.png'
import img2 from '../assets/services2.png'
import img3 from '../assets/services3.png'
import img4 from '../assets/services4.png'
import img5 from '../assets/services5.png'
import './Services.css'

export default function Servicios() {
  const images = [img1, img2, img3, img4, img5]
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIdx(i => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="section-services">
      <div className="bg bg-front"
        style={{ backgroundImage: `url(${images[idx]})` }}
      />
    </section>
  )
}