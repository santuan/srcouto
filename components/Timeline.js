import { useState } from 'react';
import SubHeading from './Typography/SubHeading';
import { FiChevronsRight } from 'react-icons/fi';
const Divider = () => {
  return (
    <div className="w-full my-8 border border-gray-200 dark:border-gray-600" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="mb-4 ml-4 font-serif text-lg font-bold tracking-tight text-right text-gray-700 md:text-2xl dark:text-gray-300">
      {children}
    </h3>
  );
};

const Step = ({ title, link, children }) => {
  return (
    <li className="relative mx-4 mb-12 md:mb-10">
      <div className="flex items-start mb-2 text-gray-700 dark:text-gray-300">
        <FiChevronsRight className="relative top-1" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-xl font-medium text-gray-900 underline dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500"
        >
          {title}
        </a>
      </div>
      <p className="ml-8 text-gray-700 dark:text-gray-400">{children}</p>
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
      <SubHeading title="Páginas web realizadas" />
      <Year>2021</Year>
      <ul>
        <Step title="Santuan" link="https://www.santuan.com.ar/">
          Versión experimental utilizando el mismo contenido de este sitio pero
          con un impronta más visual.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Contentful
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
      </ul>
      <ul>
        <Step
          title="Bomberos Voluntarios Luján de Cuyo"
          link="https://bomberoslujandecuyo.org.ar/"
        >
          El Cuerpo de Bomberos Voluntarios de Luján fue fundado el 5 de Agosto
          de 1968, por un grupo de vecinos comerciantes del departamento.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Next.js
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Sanity.io
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Vercel
            </div>
          </div>
        </Step>
      </ul>
      <ul>
        <Step
          title="Centro de Estudios Ajmátova"
          link="https://www.centroestudiosajmatova.com.ar/"
        >
          La enseñanza de los matices lingüísticos, la gramática del Español
          inmersos en las culturas Latinoamericana y Rusa.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Sanity.io
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Sol Etchegaray" link="https://www.soletchegaray.com.ar/">
          Web de fotografía donde se busca naturalizar el cuerpo desnudo y
          visibilizar la diversidad de los cuerpos, captando los detalles tan
          bellos y únicos que nos caracterizan
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Contentful
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step title="Cucha Estudio" link="https://www.cuchaestudio.com/">
          Cucha es un estudio de diseño con base en Barcelona, España.
          especializado en branding, diseño editorial y redes sociales.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Contentful
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step
          title="Germinación del Camino"
          link="https://germinacion.netlify.app/"
        >
          App para facilitar el acceso a la información y se busca enfatizar las
          virtudes de las plantas por sobre las dolencias a las que pueden ser
          de utilidad.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Tailwind
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Gatsby.js
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Algolia
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Netlify
            </div>
          </div>
        </Step>
        <Step
          title="Alan Sutton"
          link="https://www.alansutton.com.ar/biografia/"
        >
          Sitio web realizado adaptando la imagen y el diseño utilizado para el
          lanzamiento del disco La Era del Rivotril.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
        <Step title="Estudio Luis Romero" link="https://estudioluisromero.com/">
          Sitio web para el director de teatro Luis Romero
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
        <Step
          title="Afda - Libre de VIolencias"
          link="https://www.afda.org.ar/libre-de-violencias/"
        >
          Sitio web para la Asociación Familias Diversas de Argentina sobre
          violencias y derechos sexuales.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Vue.js
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Madejandola" link="http://madejandola.com/">
          Un universo repleto de historias que nacen en los hilos de América
          Latina.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Jibsa" link="http://jibsa.com.ar/">
          Una empresa comprometida con la preservación del patrimonio
          arquitectónico, la seguridad edilicia y las buenas formas
          empresariales.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Wordpress
            </div>
          </div>
        </Step>
        <Step
          title="Clinicas Colectivas"
          link="https://clinicascolectivas.github.io/"
        >
          Las Clínicas Colectivas de Artes Visuales es un proyecto que comenzó
          en el año 2013 con el objetivo de reunir y convocar artistas de la
          zona de la Comarca Andina del Paralelo 42.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Jekyll
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Github
            </div>
          </div>
        </Step>
      </ul>

      <Divider />
      <Year>2017</Year>
      <ul>
        <Step
          title="Saraña Huwitaqui"
          link="https://www.instagram.com/saranahuwitaqui/"
        >
          Un proyecto de Recreación, “Caminando Nuestra Bonita Tierra”.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Logo
            </div>
          </div>
        </Step>
        <Step
          title="Vecinal del Paraje Entre Rios"
          link="https://www.vecinaldelparaje.com.ar/"
        >
          Vecinos y vecinas que nos juntamos a participar de esto llamado
          convivir.
          <div className="mt-3">
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
              Jekyll
            </div>
            <div className="inline-block pr-2 mr-2 font-sans text-base font-bold text-gray-900 dark:text-white">
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
