import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-[16vw] h-[90vh] border-r">
      <div className="p-2 flex flex-col gap-2 border-b">
        <button className="w-full h-12 flex flex-row items-center text-gray-500 font-roboto text-sm  rounded  hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500">
          <div className="w-20 flex item-center justify-center">
            <FaBoxes className="ml-4 mr-8 text-base " />
          </div>
          On-Hand Devices
        </button>
        <button className="w-full h-12 flex flex-row items-center text-gray-500 font-roboto text-sm  rounded  hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500">
          <div className="w-20 flex item-center justify-center">
            <FaList className="ml-4 mr-8 text-base " />
          </div>
          Devices Lent
        </button>
      </div>
    </div>
  );
};
export default NavBar;
