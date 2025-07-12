import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useNavbarStore from '../store/navbarStore';
import './sub-footer.css'

export default function SubFooter({ title, text, img }) {
  const { ref, inView } = useInView({
    threshold: 0.2,   // cuando el 20% aparezca
  });
  const showNavbar = useNavbarStore((s) => s.showNavbar);

  useEffect(() => {
    if (inView) showNavbar();
  }, [inView, showNavbar]);

    return (
      <section ref={ ref } className="sub-footer">
        <div className='sub-footer-background' style={{ backgroundImage: `url(${img}` }}>
          <h1 className='sub-footer-title'>{title}</h1>
          <p className='sub-footer-text'>
            {text}
          </p>
          <button className='sub-footer-button'><a href="#/contacto" >Contactanos!</a></button>
        </div>
      </section>
    )
}