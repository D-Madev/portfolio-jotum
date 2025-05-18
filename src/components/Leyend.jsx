import './Leyend.css'

function Leyend({ title, text, style={} }) {

  return(
    <section className="leyend" style={style}>
      <div className="leyend-container">
        <div className="leyend-divider">
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Leyend;