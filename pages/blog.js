import { useState } from 'react';
import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

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
      description="Artículos en inglés buscando su sentido en el castellano. Historias y recursos relacionados con el mundo del diseño y la programación…"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>

        <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">
          Artículos en inglés traducidos al castellano. Historias y recursos que
          se relacionan con el mundo del diseño, la programación y el software
          libre.
        </p>

        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar en el blog"
            className="block w-full px-4 py-2 font-mono text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
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
          <div className="mx-3 mt-2 font-mono text-sm text-gray-700 md:m-0 md:absolute top-3 right-12 dark:text-gray-400">
            {posts.length} artículos publicados
          </div>
        </div>

        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-base font-bold text-black opacity-50 md:text-xl dark:text-white">
              Recomendados
            </h3>
            <BlogPost
              title="El diseño centrado en las personas"
              summary="Ser considerado a la hora de resolver problemas."
              slug="el-diseno-centrado-en-las-personas"
            />
            <BlogPost
              title="De la industria textil a la Luna"
              summary="La ciudad de Huntsville Alabama."
              slug="de-la-industria-textil-a-la-luna"
            />
            <BlogPost
              title="La comunicación más corta de la historia"
              summary="Sobre el complejo significado de dos simples caracteres."
              slug="la-comunicacion-mas-corta-de-la-historia"
            />
          </>
        )}
        <h3 className="mt-8 mb-4 text-base font-bold text-black opacity-50 md:text-xl dark:text-white">
          Todas las entradas
        </h3>
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
