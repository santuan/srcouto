import styles from "@/styles/Featured.module.css"
import SubHeading from '@/components/Typography/SubHeading';
import FeaturedPost from '@/components/Blog/FeaturedPost';

const FeaturedContainer = ({ title }) => {
  return (
    <div className={styles.Container}>
      <SubHeading title={title} />
      <FeaturedPost/>
    </div>
  );
};

export default FeaturedContainer;
