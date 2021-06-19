// import styles from './Heading.module.css';
import styles from './BlogPost.module.css';

const Quote = ({ title, children }) => {
  return (
    <blockquote className={styles.Quote}>
      <b>{title}</b>
      <p className="ml-8 text-gray-700 dark:text-gray-400">{children}</p>
    </blockquote>
  );
};

export default Quote;
