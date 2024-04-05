<<<<<<< HEAD
import TableBody from "./TableBody"
=======
import { FaChevronRight } from "react-icons/fa";
>>>>>>> cbbdfa0118f6d982ae48ef9560fd154cfa5489c0

const Main = () => {
  return (
    <div>
<<<<<<< HEAD
      <table className="w-full h-full text-sm text-gray-500 border-b font-roboto">
        <thead>
          <tr className="h-12 border-b">
            <th className="py-2 w-[20%] border-r  text-left pl-6">
              Device Model
            </th>
            <th className="py-2 w-[20%] border-r text-left pl-6">ID</th>
            <th className="py-2 w-[20%] border-r text-left pl-6">
              Serial Number
            </th>
            <th className="py-2 w-[40%] border-r text-left pl-6">Status</th>
          </tr>
        </thead>
        <TableBody/>
=======
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
>>>>>>> cbbdfa0118f6d982ae48ef9560fd154cfa5489c0
      </table>
    </div>
  );
};
export default Main;
