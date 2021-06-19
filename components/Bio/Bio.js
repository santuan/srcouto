const Bio = () => {
  return (
    <>
      <div className="px-4 prose-xl prose-blue hyphens">
        <h1>Sobre mi</h1>
        <p>
          Estudié durante más de 7 años la carrera de diseño gráfico en la
          Universidad de Buenos Aires. Paralelamente me fui dedicando cada vez
          más a investigar las herramientas y conocimientos que la comunidad de
          software libre ofrece de manera gratuita. Implemento ambas tecnologías
          en una gran diversidad proyectos y colaboro para que puedan iniciar
          sus espacios personales en internet.
        </p>
        <p>
          Gracias a eso puedo mantener el sitio web{' '}
          <a
            href="https://cooparaje.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cooparaje.com.ar
          </a>
          , donde voy subiendo recursos y herramientas gratuitas que amigas y
          amigos me van compartiendo y pueden aplicarse a todo tipo de espacios.
        </p>
        <p>
          Tanto esta web como muchos de los sitios web que realizo tienen la
          particularidad de tener un costo de mantenimiento de $0. Si que
          normalmente tener un dominio personal suma y eso inevitablemente tiene
          que abonarse anualmente (ya sea un .com.ar o un .com).
        </p>
        <p>
          La mayoría de los sitios pueden realizarse implementando las mejores
          herramientas de programación usando su plan gratuito (algo así como
          usar una red social gratis a cambio de dar nuestra información y
          atención). Cada uno de estos servicios cuentan con un plan con sus
          respectivos limitantes pero que en su mayoria suelen ser más de lo
          necesario para arrancar a una menor escala.
        </p>

        <p>
          Si algo de lo que viste aqui te gustó y te interesaría saber más,
          podés sentirte libre de contactarte y trataré de colaborar dentro de
          las posibilidades.
        </p>
        <p>Y desde ya, muchas gracias por su atención</p>
      </div>
    </>
  );
};

export default Bio;
