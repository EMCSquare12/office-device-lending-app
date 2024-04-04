import { FaChevronRight } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <table className="h-full w-full font-roboto text-sm text-gray-500 border-b">
        <tr className="border-b h-12">
          <th className="py-2 w-[20%] border-r  text-left pl-6">
            Device Model
          </th>
          <th className="py-2 w-[20%] border-r text-left pl-6">ID</th>
          <th className="py-2 w-[60%] border-r text-left pl-6">
            Serial Number
          </th>
        </tr>
        <tr className="relative">
          <td className="py-2 w-[20%]   text-left pl-6">Laptop</td>
          <td className="py-2 w-[20%]  text-left pl-6">1202</td>
          <td className="py-2 w-[20%]   text-left pl-6">1212221212</td>
          <span className="px-4 h-full absolute right-0 flex items-center text-sm text-gray-500">
            <FaChevronRight />
          </span>
        </tr>
      </table>
    </div>
  );
};
export default Main;
