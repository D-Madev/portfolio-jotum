import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useNavbarStore from '../store/navbarStore';
import './paragraph-generic.css';

export default function paragraphGeneric({ title, text1, text2, text3, style }) {

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
        <div className='paragraph-generic-content'>
          {text1 && <p>{text1}</p>}
          {text2 && <p>{text2}</p>}
          {text3 && <p>{text3}</p>}
        </div>
      </section>
    </section>
  );
}
