import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Container from '@/components/Container';
import { ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im';

export default function About() {
  return (
    <Container title="Contacto – Santiago Couto">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <div className="relative z-20 flex flex-col items-center justify-start w-full min-h-screen overflow-hidden bg-pattern ">
          <div className="relative z-50 flex flex-col justify-center w-full max-w-2xl px-0 py-4 mx-auto mt-6 md:mt-6 md:my-0">
            <div className="grid grid-cols-3 gap-3 mt-2">
              <Fade duration={1750} delay={250}>
                <a
                  className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/santuan/"
                >
                  <ImGithub className="text-3xl text-gray-900 transition-all duration-700 dark:text-gray-100 group-hover:text-yellow-500" />
                  <span className="block mb-4 font-mono text-base text-gray-900 transition-all duration-700 dark:text-gray-100 group-hover:text-yellow-500">
                    Github
                  </span>
                </a>
              </Fade>
              <Fade duration={1750} delay={250}>
                <a
                  className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/santuuan"
                >
                  <ImTwitter className="text-3xl text-gray-900 transition-all duration-700 dark:text-gray-100 group-hover:text-blue-500" />
                  <span className="block mb-4 font-mono text-base text-gray-900 transition-all duration-700 dark:text-gray-100 group-hover:text-blue-500">
                    Twitter
                  </span>
                </a>
              </Fade>
              <Fade duration={1750} delay={250}>
                <a
                  className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/santuan/"
                >
                  <ImLinkedin2 className="text-3xl text-gray-900 transition-all duration-700 dark:text-gray-100 group-hover:text-blue-600" />
                  <span className="block mb-4 font-mono text-base text-gray-900 transition-all duration-700 dark:text-gray-100 group-hover:text-blue-600">
                    Linkedin
                  </span>
                </a>
              </Fade>
            </div>
          </div>
          <div className="relative z-50 w-full px-1 mx-auto mb-6 font-sans prose-xl text-justify text-gray-600 dark:text-gray-100 hyphens">
            <h3 className="font-serif text-center">Sobre mi</h3>
            <p>
              Estudié durante más de 7 años la carrera de diseño gráfico en la
              Universidad de Buenos Aires. Paralelamente me fui dedicando cada
              vez más a investigar las herramientas y conocimientos que la
              comunidad de software libre ofrece de manera gratuita. Implemento
              ambas tecnologías en una gran diversidad proyectos y colaboro para
              que puedan iniciar sus espacios personales en internet.
            </p>
            <p>
              Gracias a eso puedo mantener el sitio web{' '}
              <a
                href="https://cooparaje.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                cooparaje.com.ar
              </a>
              , donde voy subiendo recursos y herramientas gratuitas que amigas
              y amigos me van compartiendo y pueden aplicarse a todo tipo de
              espacios.
            </p>
            <p>
              Tanto esta web como muchos de los sitios web que realizo tienen la
              particularidad de tener un costo de mantenimiento de $0. Si que
              normalmente tener un dominio personal suma y eso inevitablemente
              tiene que abonarse anualmente (ya sea un .com.ar o un .com).
            </p>
            <p>
              La mayoría de los sitios pueden realizarse implementando las
              mejores herramientas de programación usando su plan gratuito (algo
              así como usar una red social gratis a cambio de dar nuestra
              información y atención). Cada uno de estos servicios cuentan con
              un plan con sus respectivos limitantes pero que en su mayoria
              suelen ser más de lo necesario para arrancar a una menor escala.
            </p>

            <p>
              Si algo de lo que viste aqui te gustó y te interesaría saber más,
              podés sentirte libre de contactarte y trataré de colaborar dentro
              de las posibilidades.
            </p>
            <p>Y desde ya, muchas gracias por su atención</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
