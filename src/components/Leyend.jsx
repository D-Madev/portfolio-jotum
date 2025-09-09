import './Leyend.css'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useNavbarStore from '../store/navbarStore';
import useWButtonStore from '../store/whatsappButtonStore';

export default function Leyend({ title, text, style={}, hideWB=true, mobileMode=false }) {

  const { ref, inView } = useInView({
    threshold: 0.2,   // cuando el 20% aparezca
  });
  const showNavbar = useNavbarStore((s) => s.showNavbar);
  const showWButton = useWButtonStore((s) => s.showWButton);
  const isClient = typeof window !== "undefined";
  const [width, setWidth] = useState(isClient ? window.innerWidth : 1024);

  useEffect(() => {
    if (!isClient) return;
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isClient]);
  const isMobile = width <= 480;

  useEffect(() => {
    if (inView) showNavbar();
    if (inView && !hideWB) showWButton();
  }, [inView, showNavbar]);


  return(
    <section ref={ref} className="leyend" style={style}>
      <div className="leyend-container">
        <div className="leyend-divider">
        {mobileMode? 
          (isMobile? null : <h2>{title}</h2>) :
          (<h2>{title}</h2>)
        }          
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}
