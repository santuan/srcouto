import styles from './ProjectItem.module.css';

const BlogPost = ({ title, description, link }) => {
  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Description}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ir a la web
      </a>
    </div>
  );
};

export default BlogPost;
