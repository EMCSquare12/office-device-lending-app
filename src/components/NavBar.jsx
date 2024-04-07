import { useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = ({ toggle, subHeader }) => {
  const [subHeaderTitle, setSubHeaderTitle] = useState();
  const [isSelected, setIsSelected] = useState(true);
  // const navigate = useNavigate();

  const handleSubHeaderTitle = (value) => {
    const toggleStr = "On-Hand Devices";
    setSubHeaderTitle(value);
    subHeader(value);
    setIsSelected(value === toggleStr);
    // navigate(value === toggleStr ? "/deviceList" : "/borrowerList");
  };

  return (
    <div className="w-auto h-[90vh] border-r">
      <div className="flex flex-col h-24 gap-2 p-2 border-b">
        <button
          onClick={() => handleSubHeaderTitle("On-Hand Devices")}
          className={`flex flex-row items-center w-full h-12 px-2 text-xs transition-all duration-200 ease-in-out rounded outline-none md:text-sm font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500 ${
            isSelected === true ? "bg-blue-100 text-blue-500" : "text-gray-500"
          }`}
        >
          <span className="flex justify-center w-18 item-center">
            <FaBoxes className="ml-4 mr-4 text-base " />
          </span>
          {!toggle && (
            <span className="whitespace-nowrap">On-Hand Devices</span>
          )}
        </button>
        <button
          onClick={() => handleSubHeaderTitle("Devices Lent")}
          className="flex flex-row items-center w-full h-12 px-2 text-xs text-gray-500 transition-all duration-200 ease-in-out rounded outline-none md:text-sm font-roboto hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500"
        >
          <span className="flex justify-center w-18 item-center">
            <FaList className="ml-4 mr-4 text-base " />
          </span>
          {!toggle && <span className="whitespace-nowrap">Devices Lent</span>}
        </button>
      </div>
    </div>
  );
};
export default NavBar;
