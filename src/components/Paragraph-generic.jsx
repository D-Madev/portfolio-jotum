import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useNavbarStore from '../store/navbarStore';
import './paragraph-generic.css';

export default function paragraphGeneric({ title, text1, text2, text3,minSize=450, maxSize=1500, style }) {
  const [isOpen, setIsOpen]   = useState(false);
  const toggleOpen = () => setIsOpen(o => !o)
  
  const { ref, inView } = useInView({
    threshold: 0.2,   // cuando el 20% aparezca
  });
  const showNavbar = useNavbarStore((s) => s.showNavbar);

  useEffect(() => {
    if (inView) showNavbar();
  }, [inView, showNavbar]);

  return (
    <section ref={ ref } className="paragraph-generic-background" style={style}>
      <section className="paragraph-generic">
        <h1 className='paragraph-generic-title'>{title}</h1>
        <div className={`paragraph-generic-content ${isOpen? `open` : ''}`} onClick={toggleOpen} style={{ height: isOpen ? `${maxSize}px` : `${minSize}px` }}>
          {text1 && <p>{text1}</p>}
          <i className='fas fa-angle-up n-show-up'></i>
          <i className='fas fa-angle-down n-show-down'></i>
          {text2 && <p className={`${isOpen? 'open' : 'hide'}`}>{text2}</p>}
          {text3 && <p className={`${isOpen? 'open' : 'hide'}`}>{text3}</p>}
        </div>
      </section>
    </section>
  );
}
