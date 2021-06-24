import styles from './BlogPost.module.css';
import Link from 'next/link';
import { GiSpeaker } from 'react-icons/gi';
import ReactTooltip from 'react-tooltip';

const BlogPost = ({ title, summary, slug, audio }) => {
  return (
    <div className={styles.Container}>
      <Link href={`/blog/${slug}`}>
        <a className={styles.Title}>{title}</a>
      </Link>
      <p className={styles.Description}>{summary}</p>
      {audio && (
        <div>
          <div data-tip="Versión con audio" className={styles.Icon}>
            <GiSpeaker />
          </div>
          <ReactTooltip place="left" type="dark" effect="solid" />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
