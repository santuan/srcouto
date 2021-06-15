import NextLink from 'next/link';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 font-serif text-3xl font-bold text-black md:text-5xl dark:text-white">
          Hola! Soy Santiago Rodriguez Couto
        </h1>
        <h2 className="mb-6 text-xl text-gray-600 dark:text-gray-400">
          Me apasiona el diseño, la programación y todo lo que tenga que ver con
          el mundo del software libre. Traduzco
          <NextLink href="/blog">
            <a className="inline-block mx-1 text-blue-500 underline hover:text-blue-600">
              artículos
            </a>
          </NextLink>
          del inglés al castellano y también colaboro en varios
          <NextLink href="/proyectos">
            <a className="inline-block mx-1 text-blue-500 underline hover:text-blue-600">
              proyectos
            </a>
          </NextLink>
          y rincones en la web.
        </h2>
        <hr className="w-full border-t border-gray-200 dark:border-gray-800" />
        <h3 className="mt-12 mb-12 font-sans text-base font-bold text-black opacity-60 md:text-xl dark:text-white">
          Entradas recomendadas
        </h3>
        <BlogPost
          title="El diseño centrado en las personas"
          summary="Ser considerado a la hora de resolver problemas."
          slug="el-diseno-centrado-en-las-personas"
        />
        <BlogPost
          title="De la industria textil a la Luna"
          summary="La ciudad de Huntsville Alabama."
          slug="de-la-industria-textil-a-la-luna"
        />
        <BlogPost
          title="La comunicación más corta de la historia"
          summary="Sobre el complejo significado de dos simples caracteres."
          slug="la-comunicacion-mas-corta-de-la-historia"
        />
      </div>
    </Container>
  );
}
