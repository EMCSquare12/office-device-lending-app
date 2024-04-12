import fetchCSVData from "../data/fetchCSVData";
import { RiExpandUpDownFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const TableBorrowerList = ({ searchBorrower }) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [title, setTitle] = useState({
    event: "Event",
    timeLent: "Date and Time Lent",
    timeReturn: "Date and Time Returned",
    model: "Device Model",
    id: "ID",
    serialNumber: "Serial Number",
    employee: "Employee",
    status: "Status",
    notes: "Notes",
  });

  useEffect(() => {
    fetchCSVData({
      csvUrl: "http://localhost:5000/api",
      data: handleData,
    });
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
    setOriginalData(jsonData.lendingData);
    setData(jsonData.lendingData);
  };

  const handleSort = (value) => {
    setIsSorted(!isSorted);
    const sortedData = [...data].sort((a, b) => {
      if (typeof a[value] === "string") {
        return isSorted
          ? b[value].localeCompare(a[value])
          : a[value].localeCompare(b[value]);
      } else {
        return isSorted ? b[value] - a[value] : a[value] - b[value];
      }
    });
    setData(sortedData);
    console.log(data);
  };

  return (
    <table className="w-full h-auto overflow-y-scroll text-sm text-gray-500 border-b font-roboto">
      <thead className="sticky top-0 z-10 w-full h-12 bg-white shadow ">
        <tr className="bg-white table-fixed ">
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.event}</h1>
            <button
              onClick={() => handleSort(title.event)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.timeLent}</h1>
            <button
              onClick={() => handleSort(title.timeLent)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.timeReturn}</h1>
            <button
              onClick={() => handleSort(title.timeReturn)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.model}</h1>
            <button
              onClick={() => handleSort(title.model)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.id}</h1>
            <button
              onClick={() => handleSort(title.id)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.serialNumber}</h1>
            <button
              onClick={() => handleSort(title.serialNumber)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.employee}</h1>
            <button
              onClick={() => handleSort(title.employee)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[10%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.status}</h1>
            <button
              onClick={() => handleSort(title.status)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative w-full py-2 pl-6 text-xs text-left border-r md:text-sm">
            <h1>{title.notes}</h1>
            <button
              onClick={() => handleSort(title.model)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
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
