import Link from 'next/link';

const BlogPost = ({ title, summary, slug }) => {
  return (
    <div className="w-full px-4 py-6 duration-300 border-t border-b border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-500">
      <Link href={`/blog/${slug}`}>
        <a className="inline-block pr-4 mb-2 font-sans text-2xl font-bold text-gray-900 duration-100 dark:text-gray-100 md:text-3xl">
          {title}
        </a>
      </Link>
      <p className="pb-2 pr-4 text-lg text-gray-900 md:text-xl font-caption dark:text-gray-300">
        {summary}
      </p>
    </div>
  );
};

export default BlogPost;
