import styles from './BlogPost.module.css';
import Link from 'next/link';

const BlogPost = ({ title, summary, slug }) => {
  return (
    <div className={styles.Container}>
      <Link href={`/blog/${slug}`}>
        <a className={styles.Title}>{title}</a>
      </Link>
      <p className={styles.Description}>{summary}</p>
    </div>
  );
};

export default BlogPost;
