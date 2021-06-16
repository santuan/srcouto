import Link from 'next/link';
import Fade from 'react-reveal/Fade';
const BlogPost = ({ title, summary, link }) => {
  return (
    <Fade duration={1750} delay={500}>
      <div className="w-full px-4">
        <div className="relative w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full pr-12 mb-2 font-sans text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="pr-0 text-gray-800 dark:text-gray-200 md:mr-24">
            {summary}
          </p>
          <a
            href={link}
            className="absolute top-0 right-0 text-gray-800 border-b border-blue-400 hover:text-gray-200 dark:text-white dark:border-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a la web
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default BlogPost;
