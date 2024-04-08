import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

const Header = ({ toggle, search }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchDevice, setSearchDevice] = useState("");

  const handleSearchDevice = (event) => {
    setSearchDevice(event);
    search(searchDevice);
    console.log(searchDevice);
  };
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    toggle(!isOpen);
  };
  return (
    <div className="grid h-auto grid-cols-2 border border-b md:grid-cols-3 ">
      <div className="flex flex-row items-center h-full gap-5">
        <div className="flex items-center justify-center w-20 h-full">
          <button
            onClick={handleIsOpen}
            className="flex items-center justify-center w-10 h-10 transition-all duration-200 ease-in-out outline-none hover:shadow hover:rounded-full hover:bg-gray-200"
          >
            <GiHamburgerMenu className="text-gray-500" />
          </button>
        </div>
        <h1 className="text-sm tracking-wide text-gray-500 font-roboto md:text-base">
          Office Device Lending App
        </h1>
      </div>
      <div className="flex flex-row p-4 ">
        <div className="relative flex flex-row w-full h-full bg-gray-100 rounded hover:shadow">
          <button className="flex items-center justify-center h-full text-lg text-gray-500 outline-none hover:bg-gray-200 w-14">
            <GoSearch className="text-gray-500" />
          </button>
          <input
            // onClick={() => setIsOpenSearch(!isOpenSearch)}
            value={searchDevice}
            onChange={(event) => handleSearchDevice(event.target.value)}
            type="text"
            placeholder="search item"
            className="w-full h-12 px-2 pr-4 text-sm text-gray-500 bg-transparent outline-none font-roboto md:text-base"
          />
          {/* {isOpenSearch && (
            <ul className="absolute z-20 w-full py-2 mt-12 text-sm text-gray-500 bg-white border rounded-md shadow">
              <li className="flex flex-row items-center h-10 gap-2 outline-none font-roboto md:text-base hover:bg-gray-100">
                <button className="flex items-center justify-center w-12 h-full text-lg text-gray-500 outline-none ">
                  <GoSearch className="text-gray-500" />
                </button>
                TODO
              </li>
            </ul>
          )} */}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
