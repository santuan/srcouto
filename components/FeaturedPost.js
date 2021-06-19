import styles from "@/styles/Featured.module.css"
import BlogItem from '@/components/BlogItem';
import SubHeading from '@/components/SubHeading';

const FeaturedContainer = ({ title }) => {
  return (
    <>
    <SubHeading title={title} />
    <div className={styles.Container}>
      <BlogItem
        title="El diseño centrado en las personas"
        summary="Ser considerado a la hora de resolver problemas."
        slug="el-diseno-centrado-en-las-personas"
      />
      <BlogItem
        title="De la industria textil a la Luna"
        summary="La ciudad de Huntsville Alabama."
        slug="de-la-industria-textil-a-la-luna"
      />
      <BlogItem
        title="La comunicación más corta de la historia"
        summary="Sobre el complejo significado de dos simples caracteres."
        slug="la-comunicacion-mas-corta-de-la-historia"
      />
    </div>
    </>
  );
};

export default FeaturedContainer;
