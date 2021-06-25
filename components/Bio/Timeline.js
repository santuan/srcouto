import { useState } from 'react';
import SubHeading from '@/components/Plugs/SubHeading';
import { FiChevronsRight } from 'react-icons/fi';

const Divider = () => {
  return (
    <div className="w-full my-8 border border-gray-200 dark:border-gray-800" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="mb-4 ml-4 font-serif text-lg font-bold tracking-tight text-right text-gray-700 md:text-2xl dark:text-gray-300">
      {children}
    </h3>
  );
};

const Techs = ({ children }) => {
  return (
    <div className="flex mt-3 space-x-3 font-sans text-base font-bold text-gray-900 dark:text-white">
      {children}
    </div>
  );
};

const TechsItem = ({ title }) => {
  return <div>{title}</div>;
};

const ProjectsLinks = ({ portfolioLink, webLink }) => {
  return (
    <div className="absolute bottom-0 right-0 flex justify-start space-x-6 border-gray-400 left-8 md:left-auto md:space-x-3 md:bottom-12 borber-b ">
      {webLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 text-base font-bold text-gray-800 border-b-2 border-blue-500 md:text-sm hover:text-blue-500 dark:hover:text-blue-500 dark:border-blue-500 dark:text-white"
          href={webLink}
        >
          Visitar web
        </a>
      )}
      {portfolioLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 text-base font-bold text-gray-800 border-b-2 border-blue-500 md:text-sm hover:text-blue-500 dark:hover:text-blue-500 dark:border-blue-500 dark:text-white"
          href={portfolioLink}
        >
          Ver portfolio
        </a>
      )}
    </div>
  );
};

const BigStep = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

const Step = ({ title, children }) => {
  return (
    <div className="relative w-full pt-12 pb-16 border-t border-gray-300 md:mx-4 md:py-12 dark:border-gray-700">
      <div className="flex items-start mb-2 text-gray-700 dark:text-gray-300">
        <FiChevronsRight className="relative top-1.5" />
        <div
          rel="noopener noreferrer"
          className="ml-4 text-xl font-medium text-gray-900 uppercase dark:text-gray-100"
        >
          {title}
        </div>
      </div>
      <div className="ml-8 text-gray-700 dark:text-gray-400">{children}</div>
    </div>
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
      <BigStep>
        <Step title="Santuan">
          Versión experimental utilizando el mismo contenido de este sitio pero
          con un impronta más visual.
          <Techs>
            <TechsItem title="Tailwind" />
            <TechsItem title="Gatsby.js" />
            <TechsItem title="Contentful" />
            <TechsItem title="Netlify" />
          </Techs>
          <ProjectsLinks webLink="https://www.santuan.com.ar/" />
        </Step>
      </BigStep>
      <BigStep>
        <Step title="Bomberos Voluntarios Luján de Cuyo">
          El Cuerpo de Bomberos Voluntarios de Luján fue fundado el 5 de Agosto
          de 1968, por un grupo de vecinos comerciantes del departamento.
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/bomberos-voluntarios-de-lujan-de-cuyo"
            webLink="https://bomberoslujandecuyo.org.ar/"
          />
          <Techs>
            <TechsItem title="Tailwind" />
            <TechsItem title="Next.js" />
            <TechsItem title="Sanity.io" />
            <TechsItem title="Vercel" />
          </Techs>
        </Step>
      </BigStep>
      <BigStep>
        <Step title="Centro de Estudios Ajmátova">
          La enseñanza de los matices lingüísticos y la gramática del Español
          inmersos en las culturas Latinoamericana y Rusa.
          <Techs>
            <TechsItem title="Tailwind" />
            <TechsItem title="Gatsby.js" />
            <TechsItem title="Sanity.io" />
            <TechsItem title="Netlify" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/centro-de-estudios-ajmatova"
            webLink="https://www.centroestudiosajmatova.com.ar/"
          />
        </Step>
      </BigStep>
      <Divider />
      <Year>2020</Year>
      <BigStep>
        <Step title="Sol Etchegaray">
          Web de fotografía donde se busca naturalizar el cuerpo desnudo y
          visibilizar la diversidad de los cuerpos, captando los detalles tan
          bellos y únicos que nos caracterizan.
          <Techs>
            <TechsItem title="Tailwind" />
            <TechsItem title="Gatsby.js" />
            <TechsItem title="Contentful" />
            <TechsItem title="Netlify" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/sol-etchegaray/"
            webLink="https://www.soletchegaray.com.ar/"
          />
        </Step>
        <Step title="Cucha Estudio">
          Desarrollo del sitio web para Cucha, un estudio de diseño con base en
          Barcelona, España. especializado en diseños de marcas, editorial y
          redes sociales.
          <Techs>
            <TechsItem title="Tailwind" />
            <TechsItem title="Gatsby.js" />
            <TechsItem title="Contentful" />
            <TechsItem title="Netlify" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/cucha-estudio/"
            webLink="https://www.cuchaestudio.com/"
          />
        </Step>
        <Step title="Germinación del Camino">
          App para facilitar el acceso a la información y se busca enfatizar las
          virtudes de las plantas por sobre las dolencias a las que pueden ser
          de utilidad.
          <Techs>
            <TechsItem title="Tailwind" />
            <TechsItem title="Gatsby.js" />
            <TechsItem title="Algolia" />
            <TechsItem title="Netlify" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/germinacion-del-camino/"
            webLink="https://germinacion.netlify.app/"
          />
        </Step>
        <Step title="Alan Sutton">
          Sitio web realizado adaptando la imagen y el diseño utilizado para el
          lanzamiento del disco La Era del Rivotril.
          <Techs>
            <TechsItem title="Wordpress" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/alan-sutton"
            webLink="https://www.alansutton.com.ar/biografia/"
          />
        </Step>
        <Step title="Estudio Luis Romero">
          Sitio web para el director de teatro Luis Romero
          <Techs>
            <TechsItem title="Wordpress" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/estudio-luis-romero"
            webLink="https://estudioluisromero.com/"
          />
        </Step>
        <Step title="Afda - Libre de VIolencias">
          Sitio web para la Asociación Familias Diversas de Argentina sobre
          violencias y derechos sexuales.
          <Techs>
            <TechsItem title="Vue.js" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/afda-libre-de-violencias"
            webLink="https://www.afda.org.ar/libre-de-violencias/"
          />
        </Step>
      </BigStep>
      <Divider />
      <Year>2019</Year>
      <BigStep>
        <Step title="Madejandola">
          Un universo repleto de historias que nacen en los hilos de América
          Latina.
          <Techs>
            <TechsItem title="Wordpress" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/madejandola/"
            webLink="http://madejandola.com/"
          />
        </Step>
        <Step title="Fede Schrager">
          Maquetado de sitio web basado en el gran diseño de{' '}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/mfetchegaray"
          >
            mfetchegaray
          </a>
          <Techs>
            <TechsItem title="HTML & CSS" />
          </Techs>
          <ProjectsLinks webLink="http://fedeschrager.com.ar/" />
        </Step>
      </BigStep>

      <Divider />
      <Year>2018</Year>
      <BigStep>
        <Step title="Jibsa">
          Una empresa comprometida con la preservación del patrimonio
          arquitectónico, la seguridad edilicia y las buenas formas
          empresariales.
          <Techs>
            <TechsItem title="Wordpress" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/jibsa"
            webLink="http://jibsa.com.ar/"
          />
        </Step>
        <Step title="Clinicas Colectivas">
          Las Clínicas Colectivas de Artes Visuales es un proyecto que comenzó
          en el año 2013 con el objetivo de reunir y convocar artistas de la
          zona de la Comarca Andina del Paralelo 42.
          <Techs>
            <TechsItem title="Jekyll" />
            <TechsItem title="Github Pages" />
          </Techs>
          <ProjectsLinks
            portfolioLink="https://www.santuan.com.ar/colaboraciones/clinicas-colectivas"
            webLink="https://clinicascolectivas.github.io/"
          />
        </Step>
      </BigStep>

      <Divider />

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
