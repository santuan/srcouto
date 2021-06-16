import { useState } from 'react';
import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import SubHeading from '@/components/Typography/SubHeading';
import FeaturedPost from '@/components/Typography/Featured';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
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
      description="Artículos en Inglés buscando su sentido en el Español. Historias y recursos relacionados con el mundo del diseño y la programación…"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="px-4 mb-4 font-serif text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>

        <h2 className="px-4 mb-6 text-xl text-gray-600 dark:text-gray-400">
          Artículos en Inglés traducidos al Español. Historias y recursos que se
          relacionan con el mundo del diseño, la programación y el software
          libre.
        </h2>

        <div className="relative w-full px-3 mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar"
            className="block w-full px-4 py-2 text-lg text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md dark:placeholder-gray-600 font-caption dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-6 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <div className="mx-4 mt-2 text-sm font-bold text-gray-700 font-caption md:m-0 md:absolute top-3 right-16 dark:text-gray-400">
            {posts.length} artículos
          </div>
        </div>

        {!searchValue && (
          <>
            <FeaturedPost title="Textos Recomendados" />
          </>
        )}
        <SubHeading title="Todas las entradas" />
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No hubo resultados a su búsqueda.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}
