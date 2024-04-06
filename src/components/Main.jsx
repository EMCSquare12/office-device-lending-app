import TableBody from "./TableBody";

const Main = ({ confirmModal, itemModal }) => {
  return (
    <table className="table w-full h-full overflow-y-scroll text-sm text-gray-500 border-b font-roboto">
      <thead className="sticky w-full h-12 bg-white border-b table-fixed">
        <tr className="table-fixed ">
          <th className="py-2 w-[20%] border-r text-xs md:text-sm text-left pl-6">
            Device Model
          </th>
          <th className="py-2 w-[20%] border-r text-xs md:text-sm text-left pl-6">
            ID
          </th>
          <th className="py-2 w-[20%] border-r text-xs md:text-sm text-left pl-6">
            Serial Number
          </th>
          <th className="w-full py-2 pl-6 text-xs text-left border-r md:text-sm">
            Status
          </th>
          <th></th>
        </tr>
      </thead>

      <TableBody confirmModal={confirmModal} itemModal={itemModal} />
    </table>
  );
};
export default Main;
