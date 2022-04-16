const Bio = () => {
  return (
    <>
      <div className="px-4 prose-xl text-justify dark:text-white prose-yellow hyphens">
        <p>
          Estudié la carrera de diseño gráfico en la Universidad de Buenos
          Aires. Paralelamente me fui dedicando cada vez más a investigar las
          herramientas y conocimientos que la comunidad de software libre ofrece
          de manera gratuita.
        </p>
        <p>
          Implemento ambas tecnologías en una gran diversidad proyectos y
          colaboro para que puedan iniciar sus espacios personales en internet.
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
          . Una web donde voy subiendo recursos y herramientas gratuitas que
          amigas y amigos me van compartiendo y pueden aplicarse a todo tipo de
          espacios.
        </p>
        <p>
          La mayoría de los sitios pueden realizarse implementando las mejores
          herramientas de programación usando su plan gratuito. Cada uno de
          estos servicios cuentan con un plan con sus respectivos limitantes
          pero que en su mayoria suelen ser más de lo necesario para arrancar a
          una menor escala.
        </p>

        <p>
          Si algo de lo que viste aqui te gustó y te interesaría saber más,
          podés sentirte libre de contactarte y trataré de colaborar dentro de
          las posibilidades.
        </p>
        <p className="italic text-left duration-300 opacity-70 hover:opacity-100">
          Y desde ya, muchas gracias por su atención
        </p>
      </div>
    </>
  );
};

export default Bio;
