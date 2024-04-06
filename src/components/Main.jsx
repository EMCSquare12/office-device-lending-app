import TableBody from "./TableBody";

const Main = ({ confirmModal, itemModal }) => {
  return (
    <div style={{ overflowX: "auto", overflowY: "auto", maxHeight: "100%" }}>
      <table className="w-full h-full text-sm text-gray-500 border-b table-fixed font-roboto">
        <thead className="top-0 h-12 bg-white border-b ">
          <tr>
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
    </div>
  );
};
export default Main;
