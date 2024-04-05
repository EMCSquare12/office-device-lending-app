import { useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const NavBar = ({ toggle, subHeader }) => {
  const [navTitle, setNavTitle] = useState();

  const handleNav = (value) => {
    setNavTitle(value);
    subHeader(value);
  };
  return (
    <div className="w-auto h-[90vh] border-r transform transition-transform duration-500">
      <div className="flex flex-col h-24 gap-2 p-2 border-b">
        <button
          onClick={() => handleNav("On-Hand Devices")}
          className="flex flex-row w-full h-12 text-sm text-gray-500 rounded font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500 "
        >
          <span className="flex items-center justify-center w-20 h-full">
            <FaBoxes className="text-base " />
          </span>
          {!toggle && (
            <span className="w-[75%] whitespace-nowrap h-full flex items-center">
              On-Hand Devices
            </span>
          )}
        </button>
        <button
          onClick={() => handleNav("Devices Lent")}
          className="flex flex-row w-full h-12 text-sm text-gray-500 rounded font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500 "
        >
          <span className="flex items-center justify-center w-20 h-full">
            <FaList className="text-base " />
          </span>
          {!toggle && (
            <span className="w-[75%] whitespace-nowrap h-full flex items-center">
              Devices Lent
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
export default NavBar;
