import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import Stn from '@/components/Bio/Trinomia';

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <hr className={styles.Divider} />
      <div className={styles.Grid}>
        <div className={styles.GridItem}>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          {/* <Link href="/proyectos">
            <a>Proyectos</a>
          </Link> */}
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </div>
        <div className={styles.GridItem}>
          <ExternalLink href="https://twitter.com/santuuan">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/santuan/">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/santuan/">
            Linkedin
          </ExternalLink>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
