import styles from './Social.module.css';
import { ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im';

const Social = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Grid}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/santuan/"
          >
            {/* <ImGithub className={styles.Icon} /> */}
            <span>Github</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/santuuan"
          >
            {/* <ImTwitter className={styles.Icon} /> */}
            <span>Twitter</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/santuan/"
          >
            {/* <ImLinkedin2 className={styles.Icon} /> */}
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
