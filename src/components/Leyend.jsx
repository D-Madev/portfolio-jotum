import './Leyend.css'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useNavbarStore from '../store/navbarStore';
import useWButtonStore from '../store/whatsappButtonStore';

export default function Leyend({ title, text, style={}, hideWB=true }) {

  const { ref, inView } = useInView({
    threshold: 0.2,   // cuando el 20% aparezca
  });
  const showNavbar = useNavbarStore((s) => s.showNavbar);
  const showWButton = useWButtonStore((s) => s.showWButton);

  useEffect(() => {
    if (inView) showNavbar();
    if (inView && !hideWB) showWButton();
  }, [inView, showNavbar]);


  return(
    <section ref={ref} className="leyend" style={style}>
      <div className="leyend-container">
        <div className="leyend-divider">
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}
