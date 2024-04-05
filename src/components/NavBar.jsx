import { useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-[16vw] h-[90vh] border-r">
      <div className="flex flex-col gap-2 p-2 border-b">
        <button className="flex flex-row items-center w-full h-12 text-sm text-gray-500 rounded font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500">
          <div className="flex justify-center w-20 item-center">
            <FaBoxes className="ml-4 mr-8 text-base " />
          </div>
          On-Hand Devices
        </button>
        <button className="flex flex-row items-center w-full h-12 text-sm text-gray-500 rounded font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500">
          <div className="flex justify-center w-20 item-center">
            <FaList className="ml-4 mr-8 text-base " />
          </div>
          Devices Lent
        </button>
      </div>
    </div>
  );
};
export default NavBar;
