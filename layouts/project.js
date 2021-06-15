import Image from 'next/image';
import Container from '@/components/Container';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Santiago Couto`}
      description={frontMatter.summary}
      image={`https://srcouto.com.ar${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <div className="relative h-screen overflow-hidden">
        <Image
          alt={frontMatter.title}
          src={frontMatter.image}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mt-12 mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="w-full prose prose-xl dark:prose-dark max-w-none">
          {children}
        </div>
        {frontMatter.link}
      </article>
    </Container>
  );
}
