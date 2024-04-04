import { IoFilter } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";

const SubHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-2 border-b h-12">
      <h1 className="ml-2 font-roboto text-sm md:text-base text-gray-500 tracking-wide ">
        {"Sub Header"}
      </h1>
      <div className="flex h-full flex-row gap-4 items-center justify-center">
        <button className="py-1 px-2 rounded bg-blue-500 text-white text-base gap-1 flex flex-row justify-center items-center hover:bg-blue-600">
          <GrAdd className=" text-white" />
          add
        </button>
        <div className="h-full w-[1px] bg-gray-300"></div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <button className=" text-lg text-gray-500 hover:text-gray-600 focus:text-gray-600">
            <IoFilter />
          </button>
          <button className=" text-lg text-gray-500 hover:text-gray-600 focus:text-gray-600">
            <IoCheckboxOutline />
          </button>
          <button className=" text-lg text-gray-500 hover:text-gray-600 focus:text-gray-600">
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
