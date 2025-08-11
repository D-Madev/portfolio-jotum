import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Project from './Project'
/* PROJECT Casa Umlaut */
import cua from '../assets/inicio/cu/1.webp'
import cub from '../assets/inicio/cu/2.webp'
import cuc from '../assets/inicio/cu/3.webp'
import cud from '../assets/inicio/cu/4.webp'
import cue from '../assets/inicio/cu/5.webp'
import cuf from '../assets/inicio/cu/6.webp'
import cug from '../assets/inicio/cu/7.webp'
import cuh from '../assets/inicio/cu/8.webp'
import cui from '../assets/inicio/cu/9.webp'
import cuj from '../assets/inicio/cu/10.webp'
/* PROJECTO Man Cave */
import mca from '../assets/inicio/mc/1.webp'
import mcb from '../assets/inicio/mc/2.webp'
import mcc from '../assets/inicio/mc/3.webp'
import mcd from '../assets/inicio/mc/4.webp'
import mce from '../assets/inicio/mc/5.webp'
import mcf from '../assets/inicio/mc/6.webp'
/* PROJECTO Casa Grande */
import cga from '../assets/inicio/cg/1.webp'
import cgb from '../assets/inicio/cg/2.webp'
import cgc from '../assets/inicio/cg/3.webp'
import cgd from '../assets/inicio/cg/4.webp'
import cge from '../assets/inicio/cg/5.webp'
import cgf from '../assets/inicio/cg/6.webp'
import cgg from '../assets/inicio/cg/7.webp'
import cgh from '../assets/inicio/cg/8.webp'
import cgi from '../assets/inicio/cg/9.webp'
import cgj from '../assets/inicio/cg/10.webp'
/* PROJECTO La Miradora */
import lma from '../assets/inicio/lm/1.webp'
import lmb from '../assets/inicio/lm/2.webp'
import lmc from '../assets/inicio/lm/3.webp'
import lmd from '../assets/inicio/lm/4.webp'
import lme from '../assets/inicio/lm/5.webp'
/* PROJECTO SS */
import ssa from '../assets/inicio/ss/1.webp'
import ssb from '../assets/inicio/ss/2.webp'
import ssc from '../assets/inicio/ss/3.webp'
import ssd from '../assets/inicio/ss/4.webp'
import sse from '../assets/inicio/ss/5.webp'
import ssf from '../assets/inicio/ss/6.webp'
import ssg from '../assets/inicio/ss/7.webp'
import './Project-list.css'

function ProjectList() {
  const ref = useRef(null);
  const controls = useAnimation();
  
  const variantsLeft = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .9,       
        ease: [0.25, 0.1, 0.25, 1], 
        opacity: { duration: .9 }  
      }
    }
  };

  const variantsRight = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .9,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: .9 }
      }
    }
  };


const hasPlayed = useRef(false);

useEffect(() => {
  const loco = window.locoScroll;
  if (!loco) {
    console.log("[LOCOMOTIVE INSTANCE]: " + loco);
    return;
  }

  const handler = () => {
    if (hasPlayed.current) return; // Evita volver a ejecutar

    const eRect = ref.current?.getBoundingClientRect();
    if (!eRect) return;

    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight * 0.6;

    if (eRect.top <= threshold && eRect.bottom > 0) {
      controls.start('visible');
      hasPlayed.current = true; // Marca como ejecutado
    }
  };

  loco.on('scroll', handler);
  loco.update();

  return () => {
    loco.off('scroll', handler);
  };
}, [controls]);



  return(
    <>
      <motion.header 
        className="project-list-header"
        ref={ref}
        data-scroll-call="projectHeader"
        data-scroll-repeat="true">
        <motion.h1 className='project-list-h1' initial="hidden" animate={controls} variants={variantsLeft}>
          + Arquitectura
        </motion.h1>
        <div className="project-list-h2-container">
          <motion.h2 className='project-list-h2' initial="hidden" animate={controls} variants={variantsRight}>
            desde la cabeza
          </motion.h2>
        </div>
        <motion.p className='project-list-p' initial="hidden" animate={controls} variants={variantsLeft}>
          Proyectos que cumplen estandares los estandares que nos importan
        </motion.p>
      </motion.header>
      <motion.article className="project-list" initial="hidden" animate={controls} variants={variantsRight}>
        <Project
          images={[ cua, cub, cuc, cud, cue, cuf, cug, cuh, cui, cuj ]}
          title="Casa Umlaut"
          location="Santa Barbara"
          baths="3"
          rooms="3"
          cars="1"
          m2="216"
          state="Diseño arquitectonico"
          description="Laura y Pablo soñaban con un hogar rodeado de naturaleza, donde cada espacio invite a relajarse y disfrutar en familia. Trabajamos junto a ellos para crear una casa cálida y funcional, pensada para una familia de cuatro, con una suite principal y ambientes integrados que potencian la vida diaria. El diseño combina la simpleza nórdica con detalles naturales: varillados de madera que actúan como cortinas corredizas, generando movimiento, privacidad y juego de luces. Un quincho conectado al living y una cocina moderna terminan de dar forma a un refugio que respira armonía desde cada rincón."
        />
      <Project
          images={[ ssa, ssb, ssc, ssd, sse, ssf, ssg ]}
          title="Sunken seatting"
          location="Canning"
          state="Diseño y obra completada"
          description="La idea del sunken seating nació de una charla casual con los chicos, cuando nos contaron su deseo de tener un lugar al aire libre para compartir con amigos. Así diseñamos un espacio simple pero con carácter: un patio trasero con un living exterior en desnivel, construido en hormigón, donde la calidez surge del entorno natural y la compañía. Un rincón pensado para disfrutar charlas largas, fuegos nocturnos y momentos que quedan para siempre."
        />
        <Project
          images={[ cga, cgb, cgc, cgd, cge, cgf, cgg, cgh, cgi, cgj ]}
          title="Casa Grande"
          location="Del Viso"
          baths="3"
          rooms="3"
          desk="1"
          gameroom="1"
          m2="369"
          state="Diseño arquitectonico y obra completa en curso"
          description="Desde el primer encuentro, los propietarios nos transmitieron una idea clara: querían una casa sólida, imponente, pero viva. Así nació este proyecto de líneas brutalistas, completamente en hormigón, diseñado para transformarse con el tiempo bajo el abrazo de la vegetación. Cada rincón fue pensado para convivir con lo natural: un gran espacio en planta baja integra cocina, living y comedor, separados por una pecera-jardín que exhibe sus plantas favoritas. En la planta alta, un playroom con salida a la terraza invita al disfrute, rodeado de grandes canteros para huerta y relax. La pileta original se mantuvo, dejando el fondo libre para seguir disfrutando de un entorno verde y en constante evolución."
        />
        <Project
          images={[ lma, lmb, lmc, lmd, lme ]}
          title="La Miradora"
          location="Patagonia-Alumine"
          baths="2"
          rooms="2"
          m2="124"
          state="Diseño arquitectonico y obra completa"
          description="Julieta nos encargó el diseño de su casa en la Patagonia, al borde de los Andes, con una idea muy clara: quería aprovechar al máximo las vistas y la luz natural. Desde el inicio, priorizamos orientar los espacios principales —como el dormitorio en suite y el estar— hacia el paisaje, para enmarcar la cordillera desde el interior. El programa incluyó también un cuarto extra, pensado como espacio flexible, un laundry independiente y una galería envolvente que permite disfrutar del exterior en cualquier época del año. Trabajamos con materiales nobles como piedra y madera, buscando una estética cálida, simple y bien integrada al entorno."
        />
        <Project
          images={[ mca, mcb, mcc, mcd, mce, mcf ]}
          title="Man Cave"
          location="Cañuelas"
          gameroom="1"
          rooms="1"
          gym="1"
          baths="1"
          m2="180"
          state="Diseño arquitectonico"
          description="Lo más lindo de este proyecto fue salir del enfoque habitual de pensar en viviendas, funciones básicas o dormitorios, para crear algo que entrega pura felicidad. El cliente quería un espacio en su patio trasero donde pudiera entrenar, trabajar y juntarse con amigos. Siempre soñó con tener un lugar apartado de su casa, y aprovechando el amplio terreno disponible, diseñamos una man cave al estilo americano un refugio pensado para disfrutar, desconectar y vivir sus pasiones."
        />
      </motion.article>
    </>
  );
}

export default ProjectList