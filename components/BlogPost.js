import Link from 'next/link';

const BlogPost = ({ title, summary, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full ">
        <div className="w-full pb-3 mb-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 font-serif text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl hover:underline">
              {title}
            </h4>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
