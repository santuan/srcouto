import Container from '@/components/Container';
import Social from '@/components/Bio/Social';
import Bio from '@/components/Bio/Bio';
import styles from '@/styles/Container.module.css';

export default function About() {
  return (
    <Container title="Contacto – Santiago Couto">
      <div className={styles.PageContainer}>
        <Social />
        <Bio />
      </div>
    </Container>
  );
}
