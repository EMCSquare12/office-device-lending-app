import { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ toggle, subHeader }) => {
  const [shTitle, setShTitle] = useState({
    deviceList: "On-Hand Devices",
    borrowerList: "Devices Lent",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [btnPath, setBtnPath] = useState("");

  const handleSubHeaderTitle = (value) => {
    const newValue =
      value === "deviceList" ? shTitle.deviceList : shTitle.borrowerList;
    subHeader(newValue);

    const route = value === "deviceList" ? "/deviceList" : "/borrowerList";
    navigate(route);
  };

  useEffect(() => {
    setBtnPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-auto h-[90vh] border-r">
      <div className="flex flex-col h-24 gap-2 p-2 border-b">
        <button
          onClick={() => handleSubHeaderTitle("deviceList")}
          className={`flex flex-row items-center w-full h-12 px-2 text-xs transition-all duration-200 ease-in-out rounded outline-none md:text-sm font-roboto hover:bg-gray-200 ${
            btnPath === "/deviceList" || btnPath === "/"
              ? "bg-blue-100 text-blue-500"
              : "text-gray-500"
          }`}
        >
          <span className="flex justify-center w-18 item-center">
            <FaBoxes className="ml-4 mr-4 text-base " />
          </span>
          {!toggle && (
            <span className="whitespace-nowrap">{shTitle.deviceList}</span>
          )}
        </button>
        <button
          onClick={() => handleSubHeaderTitle("borrowerList")}
          className={`flex flex-row items-center w-full h-12 px-2 text-xs transition-all duration-200 ease-in-out rounded outline-none md:text-sm font-roboto hover:bg-gray-200 ${
            btnPath === "/borrowerList"
              ? "bg-blue-100 text-blue-500"
              : "text-gray-500"
          }`}
        >
          <span className="flex justify-center w-18 item-center">
            <FaList className="ml-4 mr-4 text-base " />
          </span>
          {!toggle && (
            <span className="whitespace-nowrap">{shTitle.borrowerList}</span>
          )}
        </button>
      </div>
    </div>
  );
};
export default NavBar;
