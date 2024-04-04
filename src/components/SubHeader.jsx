import { IoFilter } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";

const SubHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center px-6 py-4 border-b">
      <h1 className=" font-roboto text-sm md:text-base text-gray-500 tracking-wide ">
        Sub Header
      </h1>
      <div className="flex h-full flex-row gap-4 items-center justify-center">
        <button className="py-2 px-2 rounded bg-blue-500 text-white text-base gap-1 flex flex-row justify-center items-center">
          <GrAdd className=" text-white" />
          add
        </button>
        <div className="h-full w-[1px] bg-gray-300"></div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <IoFilter className=" text-lg text-gray-500" />
          <IoCheckboxOutline className=" text-lg text-gray-500" />
          <FaEdit className=" text-lg text-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
