import Link from 'next/link';
import Fade from 'react-reveal/Fade';
const BlogPost = ({ title, summary, link }) => {
  return (
    <Fade duration={1750} delay={500}>
      <div className="w-full">
        <div className="relative w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 font-serif text-lg font-medium text-gray-900 md:text-3xl dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="pr-0 text-gray-600 dark:text-gray-400 md:mr-24">
            {summary}
          </p>
          <a
            href={link}
            className="top-0 right-0 text-blue-500 border-b border-blue-400 hover:text-blue-600 dark:border-blue-600 md:absolute"
            target="_blank"
          >
            Ir a la web
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default BlogPost;
