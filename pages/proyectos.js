import { useState } from 'react';
import Container from '@/components/Container';
import ProjectPost from '@/components/ProjectPost';
import Timeline from '@/components/Timeline';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  const filteredProjectPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <Container
      title="Blog | Santuan"
      description="Artículos en inglés buscando su sentido en el castellano. Historias y recursos relacionados con el mundo del diseño y la programación…"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="px-4 mb-4 font-serif text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Proyectos
        </h1>
        <p className="px-4 mb-6 text-xl text-gray-600 dark:text-gray-400">
          Rincones en la web donde participo de manera activa.
        </p>
        <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
        {filteredProjectPosts.map((frontMatter) => (
          <ProjectPost key={frontMatter.title} {...frontMatter} />
        ))}
        <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
        <Timeline />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('project');
  return { props: { posts } };
}
