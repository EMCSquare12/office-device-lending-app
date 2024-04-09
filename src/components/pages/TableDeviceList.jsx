import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import fetchCSVData from "../data/fetchCSVData";
import { RiExpandUpDownFill } from "react-icons/ri";

const TableDeviceList = ({ confirmModal, itemModal, searchItem }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [IdOption, setIdOption] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [title, setTitle] = useState({
    model: "Device Model",
    id: "ID",
    serialNumber: "Serial Number",
    status: "Status",
  });

  const handleIsOpenOption = (id) => {
    setIdOption(id);
    setIsOpenOption(!isOpenOption);
  };

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrsiAP5MDHLubuHbyBWW7-26EZOBGmK54XmMdzVQxsoLYXhQY6rFlY1zolPdzDCYdW5loWyd6dh6yV/pub?gid=0&single=true&output=csv";

    fetchCSVData({ csvUrl: url, data: handleData });
  }, []);

  useEffect(() => {
    if (searchItem === undefined || searchItem.trim() === "") {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(
        ({ "Device Model": model, ID: id, "Serial Number": serialNumber }) =>
          model.toLowerCase().includes(searchItem.toLowerCase()) ||
          id.toLowerCase().includes(searchItem.toLowerCase()) ||
          serialNumber.toLowerCase().includes(searchItem.toLowerCase())
      );
      setData(filteredData);
    }
  }, [searchItem, originalData]);

  const handleData = (jsonData) => {
    setOriginalData(jsonData);
    setData(jsonData);
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

  const handleConfirm = (value) => {
    setIsOpen(true);
    setItem(value);

    confirmModal(true);
    itemModal(value);
  };

  return (
    <table className="w-full h-auto overflow-y-scroll text-sm text-gray-500 border-b font-roboto">
      <thead className="sticky top-0 z-10 w-full h-12 bg-white shadow ">
        <tr className="h-full bg-white table-fixed ">
          <th className="relative items-center py-2 w-[20%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.model}</h1>
            <button
              onClick={() => handleSort(title.model)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[20%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.id}</h1>
            <button
              onClick={() => handleSort(title.id)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative py-2 w-[20%] border-r text-xs md:text-sm text-left pl-6">
            <h1>{title.serialNumber}</h1>
            <button
              onClick={() => handleSort(title.serialNumber)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th className="relative w-full py-2 pl-6 text-xs text-left border-r md:text-sm">
            <h1>{title.status}</h1>
            <button
              onClick={() => handleSort(title.status)}
              className="absolute right-0 mr-2 text-sm transform -translate-y-1/2 top-1/2"
            >
              <RiExpandUpDownFill />
            </button>
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody className="w-full ">
        {data.map(
          (
            {
              "Device Model": model,
              ID: id,
              "Serial Number": serialNumber,
              Status: status,
            },
            index
          ) => {
            return (
              <tr
                key={index}
                className="relative h-10 border-b hover:shadow hover:bg-gray-50 "
              >
                <td
                  onDoubleClick={() => handleConfirm(model)}
                  className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
                >
                  {model}
                </td>
                <td
                  onDoubleClick={() => handleConfirm(model)}
                  className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
                >
                  {id}
                </td>
                <td
                  onDoubleClick={() => handleConfirm(model)}
                  className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
                >
                  {serialNumber}
                </td>
                <td
                  onDoubleClick={() => handleConfirm(model)}
                  className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
                >
                  {status}
                </td>
                <td className="relative right-0 w-10 h-full ">
                  <button
                    onClick={() => handleIsOpenOption(index)}
                    className="flex items-center justify-center w-10 h-10 text-gray-500 transition-all duration-200 ease-in-out outline-none hover:rounded-full hover:bg-gray-200 "
                  >
                    <BsThreeDotsVertical />
                  </button>
                  {isOpenOption && IdOption === index && (
                    <ul className="absolute right-0 z-20 flex flex-col items-center justify-center mt-2 bg-white border rounded shadow top-100">
                      <li className="w-full">
                        <button className="flex items-center justify-start w-full h-10 gap-2 px-4 text-sm text-gray-500 font-roboto hover:bg-gray-200 focus:bg-blue-200 focus:text-blue-500">
                          <FaEdit />
                          Edit
                        </button>
                      </li>
                      <hr />
                      <li className="w-full">
                        <button className="flex items-center justify-start w-full h-10 gap-2 px-4 text-sm text-red-500 font-roboto hover:bg-gray-200 focus:bg-red-200 focus:text-red-500">
                          <MdDeleteForever />
                          Delete
                        </button>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
export default TableDeviceList;
