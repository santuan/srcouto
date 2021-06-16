const SubHeading = ({ title }) => {
  return (
    <div className="w-full ">
      <h3 className="w-full px-4 pb-4 mt-20 mb-12 font-sans text-base font-bold text-black border-b-2 border-gray-50 md:text-2xl dark:text-white dark:border-gray-800">
        <span className="pb-4 border-b-4 border-gray-600 dark:border-white">
          {title}
        </span>
      </h3>
    </div>
  );
};

export default SubHeading;
