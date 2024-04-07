import fetchCSVData from "./data/fetchCSVData";
import { useState, useEffect } from "react";

const TableBorrowerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrsiAP5MDHLubuHbyBWW7-26EZOBGmK54XmMdzVQxsoLYXhQY6rFlY1zolPdzDCYdW5loWyd6dh6yV/pub?gid=1313317968&single=true&output=csv";

    const handleData = (jsonData) => {
      setData(jsonData);
    };

    fetchCSVData({ csvUrl: url, data: handleData });
  }, []);

  console.log(data);

  return (
    <table className="w-full h-auto overflow-y-scroll text-sm text-gray-500 border-b font-roboto">
      <thead className="sticky top-0 z-10 w-full h-12 bg-white shadow ">
        <tr className="bg-white table-fixed ">
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Event
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Date and Time Lent
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Date and Time Returned
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Device Model
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            ID
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Serial Number
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Employee
          </th>
          <th className="py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            Status
          </th>
          <th className="w-full py-2 pl-6 text-xs text-left border-r md:text-sm">
            Notes
          </th>
        </tr>
      </thead>
      <tbody className="w-full table-fixed">
        {data.map((item, index) => {
          return (
            <tr key={index} className="relative h-10 border-b hover:shadow hover:bg-gray-50 ">
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item.Event}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item["Date and Time Lent"]}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item["Date and Time Returned"]}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item["Device Model"]}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item.ID}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item["Serial Number"]}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item.Employee}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item.Status}
              </td>
              <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                {item.Notes}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TableBorrowerList;
