import Container from '../components/Container';
import BlogItem from '../components/Plugs/BlogItem';
import SubHeading from '@/components/Plugs/SubHeading';
import styles from '@/styles/Container.module.css';
import PageLink from 'next/link';

export default function Home() {
  return (
    <Container>
      <div className={styles.PageContainer}>
        <h1 className={styles.Title}>Hola, soy Santiago Rodríguez Couto</h1>
        <h2 className={styles.Subtitle}>
        Textos en Inglés traducidos al Español. Historias y recursos que se relacionan con el mundo del diseño, la programación y el software libre.
        </h2>
        <hr className={styles.Divider} />
        <SubHeading title="Entradas recomendadas" />
        <BlogItem
          title="El diseño centrado en las personas"
          summary="Ser considerado a la hora de resolver problemas."
          slug="el-diseno-centrado-en-las-personas"
        />
        <BlogItem
          title="De la industria textil a la Luna"
          summary="La ciudad de Huntsville Alabama."
          slug="de-la-industria-textil-a-la-luna"
          audio={true}
        />
        <BlogItem
          title="La comunicación más corta de la historia"
          summary="Sobre el complejo significado de dos simples caracteres."
          slug="la-comunicacion-mas-corta-de-la-historia"
        />
      </div>
    </Container>
  );
}
