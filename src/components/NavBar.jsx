import { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import ToolTip from "./Tooltip";

const NavBar = ({ toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [btnPath, setBtnPath] = useState("");
  const [toolTip, setToolTip] = useState(false);
  const [tooltipId, setTooltipId] = useState("");

  const handleToggleRoute = (value) => {
    const route = value === "deviceList" ? "/deviceList" : "/borrowerList";
    navigate(route);
  };

  useEffect(() => {
    setBtnPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setInterval(() => {
      setToolTip(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [toolTip]);

  const handleopenToolTip = (value) => {
    setTooltipId(value);
    setToolTip(true);
  };
  return (
    <div className="w-auto h-[90vh] border-r">
      <div className="flex flex-col h-24 gap-2 p-2 border-b ">
        <button
          onMouseEnter={() => handleopenToolTip("deviceList")}
          onMouseLeave={() => setToolTip(false)}
          onClick={() => handleToggleRoute("deviceList")}
          className={`relative flex flex-row items-center w-full h-12 px-2 text-xs transition-all duration-200 ease-in-out rounded outline-none md:text-sm font-roboto ${
            btnPath === "/deviceList" ||
            btnPath === "/" ||
            btnPath === "/deviceList/lending-form"
              ? "bg-blue-100 text-blue-500"
              : "text-gray-500 hover:bg-gray-200 hover:text-gray-500"
          }`}
        >
          <span className="flex justify-center w-18 item-center">
            <FaBoxes className="ml-4 mr-4 text-base " />
          </span>
          {!toggle && (
            <span className="w-full text-left whitespace-nowrap">
              On Hand Device
            </span>
          )}
          {toolTip && tooltipId === "deviceList" && toggle && (
            <ToolTip text={"Device List"} position={"rigth-0 ml-16"} />
          )}
        </button>
        <button
          onMouseEnter={() => handleopenToolTip("borrower")}
          onMouseLeave={() => setToolTip(false)}
          onClick={() => handleToggleRoute("borrowerList")}
          className={`relative flex flex-row items-center w-full h-12 px-2 text-xs transition-all duration-200 ease-in-out rounded outline-none md:text-sm font-roboto  ${
            btnPath === "/borrowerList"
              ? "bg-blue-100 text-blue-500 "
              : "text-gray-500 hover:bg-gray-200 hover:text-gray-500"
          }`}
        >
          <span className="flex justify-center w-18 item-center">
            <FaList className="ml-4 mr-4 text-base " />
          </span>
          {!toggle && (
            <span className="w-full text-left whitespace-nowrap">
              Device Lent
            </span>
          )}
          {toolTip && tooltipId === "borrower" && toggle && (
            <ToolTip text={"Borrower Record"} position={"rigth-0 ml-16"} />
          )}
        </button>
      </div>
    </div>
  );
};
export default NavBar;
