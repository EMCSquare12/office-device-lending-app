import { IoFilter } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";

const SubHeader = ({ subHeader, openAddItem }) => {
  const [isAddItem, setIsAddItem] = useState(false);
  const onHandeDevicesStr = "On-Hand Devices";

  const handleOpenAddItem = () => {
    setIsAddItem(true);
    openAddItem(isAddItem);
  };
  return (
    <div className="flex flex-row items-center justify-between w-full h-12 px-6 py-2 border-b">
      <h1 className="flex items-center h-12 text-sm tracking-wide text-gray-500 font-roboto md:text-base">
        {subHeader === undefined ? onHandeDevicesStr : subHeader}
      </h1>
      {subHeader === onHandeDevicesStr && (
        <div className="flex flex-row items-center justify-center h-12 gap-4 py-2">
          <button onClick={handleOpenAddItem} className="flex flex-row items-center justify-center h-8 gap-1 px-2 text-sm text-white transition-all duration-200 ease-in-out bg-blue-500 rounded outline-none focus:bg-blue-600 hover:bg-blue-600 md:text-base">
            <GrAdd className="text-white " />
            Add
          </button>
          <div className="h-full w-[1px] bg-gray-300"></div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="flex items-center justify-center w-8 h-8 transition-all duration-200 ease-in-out outline-none focus:bg-gray-200 hover:bg-gray-200 hover:rounded-full hover:shadow focus:shadow focus:rounded-full">
              <IoFilter className="text-lg text-none" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 transition-all duration-200 ease-in-out outline-none focus:bg-gray-200 hover:bg-gray-200 hover:rounded-full hover:shadow focus:shadow focus:rounded-full">
              <IoCheckboxOutline className="text-lg text-gray-500 " />
            </button>
            <button className="flex items-center justify-center w-8 h-8 transition-all duration-200 ease-in-out outline-none hover:shadow focus:shadow focus:bg-gray-200 hover:bg-gray-200 hover:rounded-full focus:rounded-full">
              <FaEdit className="text-lg text-gray-500 " />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SubHeader;
