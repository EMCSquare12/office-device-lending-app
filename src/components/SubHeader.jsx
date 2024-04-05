import { IoFilter } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";

const SubHeader = ({ subHeader }) => {
  return (
    <div className="flex flex-row items-center justify-between h-12 px-6 py-2 border-b">
      <h1 className="text-sm tracking-wide text-gray-500 font-roboto md:text-base">
        {subHeader}
      </h1>
      <div className="flex flex-row items-center justify-center h-full gap-4">
        <button className="flex flex-row items-center justify-center h-full gap-1 px-2 text-sm text-white bg-blue-500 rounded md:text-base">
          <GrAdd className="text-white " />
          add
        </button>
        <div className="h-full w-[1px] bg-gray-300"></div>
        <div className="flex flex-row items-center justify-center gap-4">
          <button>
            <IoFilter className="text-lg text-gray-500 " />
          </button>
          <button>
            <IoCheckboxOutline className="text-lg text-gray-500 " />
          </button>
          <button>
            <FaEdit className="text-lg text-gray-500 " />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
