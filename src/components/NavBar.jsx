import { useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const NavBar = ({ toggle, subHeader }) => {
  const [subHeaderTitle, setSubHeaderTitle] = useState();

  const handleSubHeaderTitle = (value) => {
    setSubHeaderTitle(value);
    subHeader(subHeaderTitle);
    console.log(subHeaderTitle);
  };
  return (
    <div className="w-auto h-[90vh] border-r">
      <div className="flex flex-col h-24 gap-2 p-2 border-b mt-[1px]">
        <button
          onClick={() => handleSubHeaderTitle("On-Hand Devices")}
          className="flex flex-row items-center w-full h-12 px-2 text-sm text-gray-500 rounded font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500"
        >
          <span className="flex justify-center w-18 item-center">
            <FaBoxes className="ml-4 mr-8 text-base " />
          </span>
          {!toggle && (
            <span className="whitespace-nowrap">On-Hand Devices</span>
          )}
        </button>
        <button
          onClick={() => handleSubHeaderTitle("Devices Lent")}
          className="flex flex-row items-center w-full h-12 px-2 text-sm text-gray-500 rounded font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500"
        >
          <span className="flex justify-center w-18 item-center">
            <FaList className="ml-4 mr-8 text-base " />
          </span>
          {!toggle && <span className="whitespace-nowrap">Devices Lent</span>}
        </button>
      </div>
    </div>
  );
};
export default NavBar;
