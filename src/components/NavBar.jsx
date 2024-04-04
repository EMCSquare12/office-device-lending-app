import { useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const NavBar = () => {
  const [navTitle, setNavTitle] = useState();
  let [onHand, lent] = useRef();

  const handleNav = () => {
    setNavTitle(navRef.current.textContent);
    console.log(navTitle);
  };
  return (
    <div className="w-[20vw] h-[90vh] border-r">
      <div className="p-2 flex flex-col gap-2 h-24 border-b">
        <button
          onClick={handleNav}
          className="w-full h-12 flex flex-row text-gray-500 font-roboto text-sm  rounded  hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500"
        >
          <span className="w-20 flex items-center justify-center h-full">
            <FaBoxes className=" text-base " />
          </span>
          <span ref={navRef} className="w-[75%] h-full flex items-center">
            On-Hand Devices
          </span>
        </button>
        <button
          onClick={handleNav}
          className="w-full h-12 flex flex-row items-center text-gray-500 font-roboto text-sm  rounded  hover:bg-gray-200 focus:bg-blue-100 focus:text-blue-500"
        >
          <span className="w-20 h-full flex items-center justify-center">
            <FaList className=" text-base " />
          </span>
          <span ref={navRef} className="w-[75%] h-full flex items-center">
            Devices Lent
          </span>
        </button>
      </div>
    </div>
  );
};
export default NavBar;
