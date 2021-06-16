import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 transition hover:text-gray-300"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 pb-16 text-center sm:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-700 transition hover:text-gray-300">
              Inicio
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-700 transition hover:text-gray-300">Blog</a>
          </Link>
          <Link href="/proyectos">
            <a className="text-gray-700 transition hover:text-gray-300">
              Proyectos
            </a>
          </Link>
          <Link href="/contacto">
            <a className="text-gray-700 transition hover:text-gray-300">
              Contacto
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/santuuan">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/santuan/">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/santuan/">
            Linkedin
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
