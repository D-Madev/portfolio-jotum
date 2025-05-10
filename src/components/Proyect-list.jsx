import Proyect from './Proyect';
import proyect1 from '../assets/Proyect-1.png'
import proyect2 from '../assets/Proyect-2.png'
import proyect3 from '../assets/Proyect-3.png'
import './Proyect-list.css'

function ProyectList() {
  return(
    <article className="proyect-list">
      <h1 className='proyect-list-h1'>Destacados con estandar Jötum</h1>
      <Proyect
        images={[proyect1, proyect2, proyect3]}
        title="Casa Umlaut"
        location="Del Viso"
        m2="30"
        state="Diseño arquitectonico y obra completa en curso."
        description="Ana y Juan nos contrataron en un principio para sentar las bases de lo que seria su hogar
          soñado, nos contaron un poco sobre su dia dia en la vivienda actual y como se desarrollaban
          profesionalmente, lo que nos permitio desarrollar un programa de necesidades junto a ellos
          para crear una matriz que se adapte a las diferentes actividades que ellos realizan y la division
          de espacios adecuada para la eficiencia de los mismos, se quedaron tan encantados con
          nuestro diseño que qusieron continuar trabajando con nosotros en la obra tambien."
      />
      <Proyect
        images={[proyect2, proyect1, proyect3]}
        title="La Miradora"
        location="Alumine"
        m2="146"
        state="Diseño arquitectonico y obra completa finalizada."
        description="Julieta nos encargó el diseño de su casa en la Patagonia, al borde de los Andes, con una idea
          muy clara: quería aprovechar al máximo las vistas y la luz natural. Desde el inicio, priorizamos
          orientar los espacios principales —como el dormitorio en suite y el estar— hacia el paisaje,
          para enmarcar la cordillera desde el interior.
          El programa incluyó también un cuarto extra, pensado como espacio flexible, un laundry
          independiente y una galería envolvente que permite disfrutar del exterior en cualquier época
          del año. Trabajamos con materiales nobles como piedra y madera, buscando una estética
          cálida, simple y bien integrada al entorno."
      />
      <Proyect
        images={[proyect3, proyect2, proyect1]}
        title="Casa Umlaut"
        location="Del Viso"
        m2="179"
        state="Diseño arquitectonico y obra completa en curso."
        description="Ana y Juan nos contrataron en un principio para sentar las bases de lo que seria su hogar
          soñado, nos contaron un poco sobre su dia dia en la vivienda actual y como se desarrollaban
          profesionalmente, lo que nos permitio desarrollar un programa de necesidades junto a ellos
          para crear una matriz que se adapte a las diferentes actividades que ellos realizan y la division
          de espacios adecuada para la eficiencia de los mismos, se quedaron tan encantados con
          nuestro diseño que qusieron continuar trabajando con nosotros en la obra tambien."
      />
    </article>
  );
}

export default ProyectList