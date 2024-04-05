import TableBody from "./TableBody";

const Main = ({ confirmModal, itemModal }) => {
  return (
    <div style={{ overflowX: "auto", overflowY: "auto", maxHeight: "400px" }}>
      <table className="w-full h-full text-sm text-gray-500 border-b table-fixed font-roboto">
        <thead className="sticky top-0 h-12 bg-white border-b">
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
            <th className="py-2 w-[40%] border-r text-xs md:text-sm text-left pl-6">
              Status
            </th>
          </tr>
        </thead>

        <TableBody confirmModal={confirmModal} itemModal={itemModal} />
      </table>
    </div>
  );
};
export default Main;
