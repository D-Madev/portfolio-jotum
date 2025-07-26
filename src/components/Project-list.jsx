import Project from './Project'
/* PROJECTO MC */
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
  return(
    <article className="project-list">
      <h1 className='project-list-h1'>DESTACADOS CON ESTANDAR JÖTUM</h1>
      <p>Una selección de nuestros projectos que cumplen con los más altos estándares de diseño y construcción que nos representan.</p>
      <Project
        images={[ mca, mcb, mcc, mcd, mce, mcf ]}
        title="Casa Umlaut"
        location="Del Viso"
        baths="3"
        rooms="3"
        cars="1"
        m2="216"
        state="Diseño arquitectonico"
        description="Laura y Pablo soñaban con un hogar rodeado de naturaleza, donde cada espacio invite a relajarse y disfrutar en familia. Trabajamos junto a ellos para crear una casa cálida y funcional, pensada para una familia de cuatro, con una suite principal y ambientes integrados que potencian la vida diaria. El diseño combina la simpleza nórdica con detalles naturales: varillados de madera que actúan como cortinas corredizas, generando movimiento, privacidad y juego de luces. Un quincho conectado al living y una cocina moderna terminan de dar forma a un refugio que respira armonía desde cada rincón."
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
        location="Del Viso"
        baths="2"
        rooms="2"
        m2="124"
        state="Diseño arquitectonico y obra completa"
        description="Julieta nos encargó el diseño de su casa en la Patagonia, al borde de los Andes, con una idea muy clara: quería aprovechar al máximo las vistas y la luz natural. Desde el inicio, priorizamos orientar los espacios principales —como el dormitorio en suite y el estar— hacia el paisaje, para enmarcar la cordillera desde el interior. El programa incluyó también un cuarto extra, pensado como espacio flexible, un laundry independiente y una galería envolvente que permite disfrutar del exterior en cualquier época del año. Trabajamos con materiales nobles como piedra y madera, buscando una estética cálida, simple y bien integrada al entorno."
      />
      <Project
        images={[ ssa, ssb, ssc, ssd, sse, ssf, ssg ]}
        title="Sunken seatting"
        location="Alumine"
        state="Diseño y obra completada"
        description="La idea del sunken seating nació de una charla casual con los chicos, cuando nos contaron su deseo de tener un lugar al aire libre para compartir con amigos. Así diseñamos un espacio simple pero con carácter: un patio trasero con un living exterior en desnivel, construido en hormigón, donde la calidez surge del entorno natural y la compañía. Un rincón pensado para disfrutar charlas largas, fuegos nocturnos y momentos que quedan para siempre."
      />
    </article>
  );
}

export default ProjectList