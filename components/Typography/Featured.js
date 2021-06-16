import SubHeading from '@/components/Typography/SubHeading';
import BlogPost from '@/components/BlogPost';

const FeaturedPost = ({ title }) => {
  return (
    <div className="w-full">
      <SubHeading title={title} />
      <BlogPost
        title="El diseño centrado en las personas"
        summary="Ser considerado a la hora de resolver problemas."
        slug="el-diseno-centrado-en-las-personas"
      />
      <BlogPost
        title="De la industria textil a la Luna"
        summary="La ciudad de Huntsville Alabama."
        slug="de-la-industria-textil-a-la-luna"
      />
      <BlogPost
        title="La comunicación más corta de la historia"
        summary="Sobre el complejo significado de dos simples caracteres."
        slug="la-comunicacion-mas-corta-de-la-historia"
      />
    </div>
  );
};

export default FeaturedPost;
