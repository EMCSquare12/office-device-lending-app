const SubHeader = ({ title, children }) => {
  return (
    <div className="sticky top-0 z-20 flex flex-row items-center justify-between w-full h-12 px-6 py-2 bg-white border-b ">
      <h1 className="flex items-center h-12 text-sm tracking-wide text-gray-500 font-roboto md:text-base">
        {title}
      </h1>
      {children}
    </div>
  );
};
export default SubHeader;
