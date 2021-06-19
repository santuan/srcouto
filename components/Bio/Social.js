import Fade from 'react-reveal/Fade';
import styles from './Social.module.css';
import { ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im';

const Social = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Grid}>
          <Fade duration={1750} delay={250}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/santuan/"
            >
              <ImGithub className={styles.Icon} />
              <span>Github</span>
            </a>
          </Fade>
          <Fade duration={1750} delay={250}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/santuuan"
            >
              <ImTwitter className={styles.Icon} />
              <span>Twitter</span>
            </a>
          </Fade>
          <Fade duration={1750} delay={250}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/santuan/"
            >
              <ImLinkedin2 className={styles.Icon} />
              <span>Linkedin</span>
            </a>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Social;
