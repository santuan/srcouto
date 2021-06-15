import { useState } from 'react';
import Container from '@/components/Container';
import ProjectPost from '@/components/ProjectPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredProjectPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <Container
      title="Blog | Santuan"
      description="Artículos en inglés buscando su sentido en el castellano. Historias y recursos relacionados con el mundo del diseño y la programación…"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Proyectos
        </h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">
          Rincones de la web que donde colaboro activamente.
        </p>
        {filteredProjectPosts.map((frontMatter) => (
          <ProjectPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('project');
  return { props: { posts } };
}
