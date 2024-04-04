import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-[10vh] border border-b">
      <div className="flex flex-row items-center gap-5 h-full">
        <div className=" w-20 justify-center items-center flex h-full">
          <GiHamburgerMenu className="text-gray-500" />
        </div>
        <h1 className=" font-roboto text-sm md:text-base text-gray-500 tracking-wide ">
          Office Device Lending App
        </h1>
      </div>
      <div className="flex flex-row p-4">
        <div className="w-full flex flex-row rounded bg-gray-100 hover:shadow">
          <button className="h-full w-14 flex items-center justify-center text-lg text-gray-500">
            <GoSearch className="text-gray-500" />
          </button>
          <input
            type="text"
            placeholder="search item"
            className="bg-transparent w-full pr-4  outline-none font-roboto text-sm md:text-base text-gray-500"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
