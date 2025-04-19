import image1 from "../assets/Example-adition.png"
import image2 from "../assets/Example-main.png"
import image3 from "../assets/Example-submain.png"
import image4 from "../assets/fallback.png"
import image5 from "../assets/Example-main.png"
import './Parallax-scroll.css'

export default function ParallaxScroll() {
  const sections = [
    {
      image: image1,
      title: "Entrevista inicial y Análisis del Terreno",
      text: "Comenzamos cada proyecto con una reunión personalizada con el cliente, donde escuchamos sus ideas, necesidades y preocupaciones. Esta instancia nos permite conocer el contexto del proyecto y detectar oportunidades o desafíos. Luego realizamos un análisis profundo del entorno, relevamos el terreno o espacio, y estudiamos las regulaciones locales, códigos de edificación y cualquier condicionante técnico o legal relevante."
    },
    {
      image: image2,
      title: "Exploración Conceptual",
      text: "En esta fase trabajamos sobre bocetos iniciales, esquemas arquitectónicos y propuestas de espacialidad. Se plantean distintas ideas conceptuales que sirven como base para imaginar el proyecto. A través del diálogo con el cliente, se revisan, ajustan y combinan ideas para encontrar un camino de diseño coherente, funcional y con identidad."
    },
    {
      image: image3,
      title: "Desarrollo Técnico Preliminar",
      text: "Aprobado el concepto, avanzamos con un desarrollo técnico más profundo. Elaboramos planos preliminares, estudios de volumetría, análisis estructurales básicos y primeras estimaciones de costos. Esta etapa permite evaluar la viabilidad económica y constructiva, proponiendo soluciones eficientes, materiales adecuados y estrategias sustentables."
    },
    {
      image: image4,
      title: "Proyecto Ejecutivo",
      text: `En esta última fase se define todo el proyecto en detalle. Refinamos cada aspecto del diseño y generamos la documentación técnica completa, que incluye:
      • Planos ejecutivos
      • Planos de estructura, electricidad, sanitarios y gas
      • Detalles constructivos
      • Planillas de cómputo y presupuesto
      • Memorias descriptivas Retreat Especificaciones técnicas de materiales, acabados y sistemas constructivos.
      \nEsta documentación garantiza una ejecución clara y precisa en obra.`
    },
    {
      image: image5,
      title: "Extras que suman valor",
      text: `• Reuniones virtuales periódicas: Facilitamos encuentros online para revisar avances, discutir correcciones o resolver dudas sin necesidad de traslados.
      • Visualizaciones 3D y renders: Presentamos el diseño con imágenes hiperrealistas o recorridos digitales para facilitar la comprensión espacial y estética.
      • Seguimiento presupuestario: A medida que el diseño evoluciona, actualizamos las estimaciones de costos y materiales, para mantener la transparencia económica. 
      • Gestión de trámites: Ofrecemos asesoramiento y acompañamiento en la presentación de planos, permisos y habilitaciones municipales o provinciales.`
    }
  ];

  return (
    <div className="parallax-wrapper">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`parallax-section ${index % 2 === 0 ? "justify-left" : "justify-right"}`}
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className="overlay" />
          <div
            className="parallax-text" 
          >
            <h1>{index + 1}</h1>
            <h2>{section.title}</h2>
            {section.text.includes('•') ? (
              <>
                <p>{section.text.split('•')[0]}</p>
                <ul>
                  {section.text
                    .split('•')
                    .slice(1)
                    .map((item, idx) => (
                      <li key={idx}>• {item.trim()}</li>
                    ))}
                </ul>
              </>
            ) : (
              <p>{section.text}</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}