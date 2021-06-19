import { getAllFilesFrontMatter } from '@/lib/mdx';
import styles from '@/styles/Container.module.css';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/Bio/ProjectItem';
import Timeline from '@/components/Bio/Timeline';

export default function Blog({ posts }) {
  const filteredProjects = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container
      title="Proyectos | Santiago Couto"
      description="Artículos en inglés buscando su sentido en el Español. Historias y recursos relacionados con el mundo del diseño y la programación…"
    >
      <div className={styles.PageContainer}>
        <Heading
          title="Proyectos"
          subtitle="Rincones en la web donde participo de manera activa."
        />
        {filteredProjects.map((frontMatter) => (
          <ProjectItem key={frontMatter.title} {...frontMatter} />
        ))}
        <Timeline />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('project');
  return { props: { posts } };
}
