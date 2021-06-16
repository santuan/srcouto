import NextLink from 'next/link';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import SubHeading from '@/components/Typography/SubHeading';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full max-w-full mx-auto mb-16 lg:max-w-2xl">
        <h1 className="px-4 mb-4 font-serif text-4xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Hola, soy Santiago Rodriguez Couto
        </h1>
        <h2 className="px-4 mb-6 font-sans text-xl text-gray-600 dark:text-gray-400">
          Realizó páginas web y me apasiona todo lo que tenga que ver con el
          mundo del software libre. Traduzco
          <NextLink href="/blog">
            <a className="inline-block mx-1 text-blue-500 underline hover:text-blue-600">
              artículos
            </a>
          </NextLink>
          que me interesan del Inglés al Español y también colaboro en varios
          <NextLink href="/proyectos">
            <a className="inline-block mx-1 text-blue-500 underline hover:text-blue-600">
              proyectos
            </a>
          </NextLink>
          y rincones en la web.
        </h2>
        <hr className="w-full border-t border-gray-200 dark:border-gray-800" />
        <SubHeading title="Entradas recomendadas" />
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
