// import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { SRLWrapper } from 'simple-react-lightbox';
import Container from '@/components/Container';
import Heading from '@/components/Plugs/Heading';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Santiago Couto`}
      description={frontMatter.summary}
      image={`${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <SRLWrapper options={options}>
        <article className="flex flex-col items-start justify-center w-full max-w-6xl mx-auto mb-16 md:px-4">
          <div className="w-full max-w-2xl mx-auto">
            <Heading title={frontMatter.title} subtitle={frontMatter.summary} />
            <div className="flex items-center w-full max-w-2xl px-4 mx-auto my-3 md:justify-between">
              <div className="flex items-center">
                <p className="text-base text-gray-700 dark:text-gray-300">
                  <time className="capitalize font-caption">
                    {format(parseISO(frontMatter.publishedAt), 'MMMM, yyyy', {
                      locale: es
                    })}
                  </time>
                </p>
              </div>
              <p className="pl-2 text-base text-gray-800 dark:text-gray-300 font-caption min-w-32 md:mt-0">
                {` • `}
                {frontMatter.readingTime.i18nText} de lectura
              </p>
            </div>
            <hr className="w-full max-w-2xl mx-auto border-t border-gray-300 border-dotted dark:border-gray-800" />
          </div>
          <div className="w-full font-serif prose prose-lg lg:prose-xl hyphens dark:prose-dark max-w-none">
            {children}
          </div>
        </article>
      </SRLWrapper>
    </Container>
  );
}

// Opciones para el modal que
// abre las imágenes en los posts

const options = {
  buttons: {
    iconPadding: '5px',
    showDownloadButton: false,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    showNextButton: true,
    showPrevButton: true
  },
  caption: {
    captionFontSize: '15px',
    captionAlignment: 'center',
    captionColor: '#a7825f',
    captionFontWeight: 300,
    showCaption: false
  },
  settings: {
    overlayColor: 'rgba(0, 0, 0, .9)',
    transitionTimingFunction: 'ease-in-out',
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: 'fade',
    slideSpringValues: [300, 200],
    autoplaySpeed: 4000,
    disablePanzoom: true,
    hideControlsAfter: true
  },
  translations: {
    autoplayText: 'Play',
    closeText: 'Cerrar',
    downloadText: 'Descargar',
    fullscreenText: 'Pantalla completa',
    nextText: 'Siguiente',
    pauseText: 'Pausa',
    previousText: 'Anterior',
    thumbnailsText: 'Miniaturas',
    zoomOutText: 'Zoom Out'
  },
  progressBar: {
    height: '4px',
    fillColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  thumbnails: {
    showThumbnails: true
  }
};
