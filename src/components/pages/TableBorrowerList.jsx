import fetchCSVData from "../data/fetchCSVData";
import { useState, useEffect } from "react";

const TableBorrowerList = ({ searchBorrower }) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrsiAP5MDHLubuHbyBWW7-26EZOBGmK54XmMdzVQxsoLYXhQY6rFlY1zolPdzDCYdW5loWyd6dh6yV/pub?gid=1313317968&single=true&output=csv";

    fetchCSVData({ csvUrl: url, data: handleData });
  }, []);

  useEffect(() => {
    if (searchBorrower === undefined || searchBorrower.trim() === "") {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(
        ({
          Event: event,
          ID: id,
          "Serial Number": serialNumber,
          Employee: employee,
        }) =>
          event.toLowerCase().includes(searchBorrower.toLowerCase()) ||
          id.toLowerCase().includes(searchBorrower.toLowerCase()) ||
          serialNumber.toLowerCase().includes(searchBorrower.toLowerCase()) ||
          employee.toLowerCase().includes(searchBorrower.toLowerCase())
      );
      setData(filteredData);
    }
  }, [searchBorrower, originalData]);

  const handleData = (jsonData) => {
    setOriginalData(jsonData);
    setData(jsonData);
  };
  // const handleData = (jsonData) => {
  //   setData(jsonData);
  // };

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
        {data.map(
          (
            {
              Event: event,
              "Date and Time Lent": timeLent,
              "Date and Time Returned": timeReturn,
              "Device Model": model,
              ID: id,
              "Serial Number": serialNumber,
              Employee: employee,
              Status: status,
              Notes: notes,
            },
            index
          ) => {
            return (
              <tr
                key={index}
                className="relative h-10 border-b hover:shadow hover:bg-gray-50 "
              >
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {event}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {timeLent}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {timeReturn}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {model}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {id}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {serialNumber}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {employee}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {status}
                </td>
                <td className="w-auto py-2 pl-2 text-xs text-left md:text-sm">
                  {notes}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
export default TableBorrowerList;
