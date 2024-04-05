import TableBody from "./TableBody";

const Main = () => {
  return (
    <div>
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
        <TableBody />
      </table>
    </div>
  );
};
export default Main;
