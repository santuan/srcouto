import styles from './BlogPost.module.css';
import Link from 'next/link';
import { GiSpeaker } from "react-icons/gi";

const BlogPost = ({ title, summary, slug, audio }) => {
  return (
    <div className={styles.Container}>
      <Link href={`/blog/${slug}`}>
        <a className={styles.Title}>{title}</a>
      </Link>
      <p className={styles.Description}>{summary}</p>
      {audio && <GiSpeaker className={styles.Icon}/>}
    </div>
  );
};

export default BlogPost;
