import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

const Header = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    toggle(!isOpen);
  };
  return (
    <div className="grid grid-cols-2 border border-b md:grid-cols-3 h-14 ">
      <div className="flex flex-row items-center h-full gap-5">
        <button
          onClick={handleIsOpen}
          className="flex items-center justify-center w-20 h-full "
        >
          <GiHamburgerMenu className="text-gray-500" />
        </button>
        <h1 className="text-sm tracking-wide text-gray-500 font-roboto md:text-base">
          Office Device Lending App
        </h1>
      </div>
      <div className="flex flex-row p-4">
        <div className="flex flex-row w-full bg-gray-100 rounded hover:shadow">
          <button className="flex items-center justify-center h-full text-lg text-gray-500 w-14">
            <GoSearch className="text-gray-500" />
          </button>
          <input
            type="text"
            placeholder="search item"
            className="w-full pr-4 text-sm text-gray-500 bg-transparent outline-none font-roboto md:text-base"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
