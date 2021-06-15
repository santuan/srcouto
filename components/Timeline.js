import { useState } from 'react';

const Divider = () => {
  return (
    <div className="w-full my-8 border border-gray-200 dark:border-gray-600" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="mb-4 ml-1 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
        <span className="sr-only">Check</span>
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="ml-4 text-xl font-medium text-gray-900 dark:text-gray-100">
          {title}
        </p>
      </div>
      <p className="ml-10 text-gray-700 dark:text-gray-400">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <div className="block w-full text-2xl text-center text-gray-700 dark:text-gray-300">
      Sección en desarrollo
    </div>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Páginas web realizadas
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Bomberos Voluntarios Luján de Cuyo">
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Next.js
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Sanity.io
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Vercel
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Centro de Estudios Ajmátova">
          Centro de idiomas contemporáneo especializado en el desarrollo de
          programas de capacitación y enseñanza de lenguas extranjeras con una
          perspectiva multicultural generando un espacio de aprendizaje de nivel
          académico.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Sanity
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step title="Sol Etchegaray">
          Web de fotografía
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Contentful
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step title="Cucha Estudio">
          Cucha es un estudio de diseño con base en Barcelona, España.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Contentful
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step title="Germinación del Camino">
          La aplicación cuenta con un buscador para facilitar el acceso a la
          información y se busca enfatizar las virtudes de las plantas por sobre
          las dolencias a las que pueden ser de utilidad.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Algolia
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step title="Alan Sutton">
          Sitio web realizado en Wordpress y adaptando la imagen y el diseño
          utilizado para el lanzamiento de La Era del Rivotril.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
        <Step title="Estudio Luis Romero">
          Sitio web en Wordpress para el director de teatro Luis Romero
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
        <Step title="Afda - Libre de VIolencias">
          Sitio web para la Asociación Familias Diversas de Argentina sobre
          violencias y derechos sexuales.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Vue.js
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Madejandola">
          Un universo repleto de historias que nacen en los hilos de América
          Latina.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>

        <Step title="Clinicas Colectivas">
          Las Clínicas Colectivas de Artes Visuales es un proyecto que comenzó
          en el año 2013 con el objetivo de reunir y convocar artistas de la
          zona de la Comarca Andina del Paralelo 42.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Jekyll
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Github
            </div>
          </div>
        </Step>
        <Step title="Jibsa">
          Una empresa comprometida con la preservación del patrimonio
          arquitectónico, la seguridad edilicia y las buenas formas
          empresariales.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Jibsa">
          Una empresa comprometida con la preservación del patrimonio
          arquitectónico, la seguridad edilicia y las buenas formas
          empresariales.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Saraña Huwitaqui">
          Un proyecto de Recreación, “Caminando Nuestra Bonita Tierra”.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Logo
            </div>
          </div>
        </Step>
        <Step title="Vecinal del Paraje Entre Rios">
          Vecinos y vecinas que nos juntamos a participar de esto llamado
          convivir.
          <div className="mt-3">
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Jekyll
            </div>
            <div className="inline-block px-2 py-1 mr-1 font-sans text-sm font-bold text-gray-900 border-b border-gray-400 dark:text-white">
              Github
            </div>
          </div>
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="items-center hidden px-4 py-2 mx-auto my-4 text-sm font-medium text-gray-900 rounded-md dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          Ver más
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
