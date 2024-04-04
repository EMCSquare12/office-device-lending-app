import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-[16vw] h-screen border-r">
      <div className="p-2 flex flex-col gap-2 border-b">
        <button className="w-full h-12 flex flex-row items-center text-gray-500 font-roboto text-sm md:text-base rounded  hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500">
          <FaBoxes className="ml-4 mr-8 text-lg" />
          On-Hand Devices
        </button>
        <button className="w-full h-12 flex flex-row items-center text-gray-500 font-roboto text-sm md:text-base rounded  hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500">
          <FaList className="ml-4 mr-8 text-lg" />
          Devices Lent
        </button>
      </div>
    </div>
  );
};
export default NavBar;
