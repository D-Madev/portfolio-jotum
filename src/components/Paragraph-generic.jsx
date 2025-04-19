import './paragraph-generic.css';

function paragraphGeneric({ title, text1, text2, text3 }) {
    return (
      <section className="paragraph-generic">
        <h1 className='paragraph-generic-title'>{title}</h1>
        <div className='paragraph-generic-content'>
          {text1 && <p>{text1}</p>}
          {text2 && <p>{text2}</p>}
          {text3 && <p>{text3}</p>}
        </div>
      </section>
    );
}

export default paragraphGeneric;