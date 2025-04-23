import NavBar from "../components/Navbar.jsx";
import WelcomeBanner from "../components/Welcome-banner.jsx";
import SubFooter from "../components/Sub-footer.jsx";
import Footer from "../components/Footer.jsx";
import Author from "../components/Author.jsx";
import ParagraphGeneric from "../components/Paragraph-generic.jsx";
import ParallaxScroll from "../components/Parallax-scroll.jsx"

import wbImage from '../assets/Welcome-banner-example-edited.png'


function Nostros() {
  return (
    <>

      <WelcomeBanner 
        backgroundType="image"
        backgroundSrc={wbImage}
        showText={false}
        text=""
        logo=""
        children={<h1>El verdadero valor está en lo que perdura. Jötum construye con excelencia para ese tipo de cliente.</h1>}
      />
      <ParagraphGeneric 
        title="VISION"
        text1={`En Jötum, concebimos la arquitectura como la unión perfecta entre eficiencia, diseño y precisión. Inspirados en la filosofía de la Bauhaus, creemos que cada espacio debe ser funcional sin perder su identidad estética. No construimos casas comunes, sino obras de arte habitables, diseñadas para quienes buscan más que una simple vivienda: un espacio exclusivo que refleje su estilo de vida y visión.
        Nuestro proceso comienza con la idea del cliente, que perfeccionamos con un enfoque técnico meticuloso y una atención al detalle digna de la más alta arquitectura. Nos especializamos en espacios privados y complejos, optimizando cada metro cuadrado con un diseño inteligente que combine confort, sofisticación y solidez estructural. Cada material, cada linea y cada proporción se estudian cuidadosamente para lograr un equilibrio entre modernidad, funcionalidad y distinción.
        En Jötum, no solo construimos, sino que damos vida a proyectos únicos que elevan el estándar de la arquitectura, creando ambientes que trascienden lo convencional y perduran en el tiempo.`}  
      /> 
      <ParagraphGeneric 
        title="NUESTRA MISION"
        text1="En Jötum, nuestra misión es transformar la experiencia de la construcción, creando viviendas unifamiliares y desarrollos exclusivos que combinen eficiencia, precisión y un diseño a medida. Nos comprometemos a entregar resultados que no solo satisfacen las necesidades funcionales de nuestros clientes, sino que también elevan sus expectativas, proporcionando espacios que trascienden lo común y dejan una huella duradera en el tiempo. Cada obra es pensada y ejecutada con un enfoque detallado, para ofrecer un hogar único que refleje el carácter y la visión de quienes lo habitan."
        text2="Desde el primer contacto hasta la entrega final, trabajamos junto a nuestros clientes para perfeccionar su idea, asegurándonos de que cada aspecto del proyecto esté alineado con sus deseos y necesidades. En Jötum, entendemos la importancia de crear espacios que no solo sean prácticos, sino que también ofrezcan una estética sofisticada y una experiencia de vida excepcional. Utilizamos las mejores técnicas constructivas y materiales de alta calidad para garantizar que cada proyecto sea tan sólido como único, con un diseño exclusivo que no se encuentra en casas convencionales."
        text3="Lo que realmente distingue a Jötum es nuestra capacidad para transformar espacios comunes en entornos extraordinarios, donde la exclusividad y la funcionalidad se encuentran. Nuestro trabajo no es solo construir una vivienda, sino dejar un legado que nuestros clientes puedan disfrutar, sabiendo que han elegido un espacio que refleja su estilo de vida y valores. Cada obra de Jötum es una inversión en calidad, confianza y distinción, creando hogares que se destacan por su originalidad, belleza y durabilidad."
      />
      <ParallaxScroll />
      <SubFooter />
      <Footer />
      <Author />
    </>
  );
}

export default Nostros;