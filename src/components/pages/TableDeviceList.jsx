import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import fetchCSVData from "../data/fetchCSVData";

const TableDeviceList = ({ confirmModal, itemModal, searchItem }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [IdOption, setIdOption] = useState("");
  const [originalData, setOriginalData] = useState([]);

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
        (item) =>
          item.Device_Model.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.ID.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.Serial_Number.toLowerCase().includes(searchItem.toLowerCase())
      );
      setData(filteredData);
    }
  }, [searchItem, originalData]);

  const handleData = (jsonData) => {
    setOriginalData(jsonData);
    setData(jsonData);
  };

  const handleConfirm = async (value) => {
    setIsOpen(true);
    confirmModal(isOpen);
    setItem(value);
    itemModal(item);
  };

  return (
    <table className="w-full h-auto overflow-y-scroll text-sm text-gray-500 border-b font-roboto">
      <thead className="sticky top-0 z-10 w-full h-12 bg-white shadow ">
        <tr className="h-full bg-white table-fixed ">
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

      <tbody className="w-full ">
        {data.map((item, index) => {
          return (
            <tr
              key={index}
              className="relative h-10 border-b hover:shadow hover:bg-gray-50 "
            >
              <td
                onDoubleClick={() => handleConfirm(item.Device_Model)}
                className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
              >
                {item.Device_Model}
              </td>
              <td
                onDoubleClick={() => handleConfirm(item.Device_Model)}
                className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
              >
                {item.ID}
              </td>
              <td
                onDoubleClick={() => handleConfirm(item.Device_Model)}
                className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
              >
                {item.Serial_Number}
              </td>
              <td
                onDoubleClick={() => handleConfirm(item.Device_Model)}
                className="py-2 w-[20%] text-xs md:text-sm text-left pl-6"
              >
                {item.Status}
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
        })}
      </tbody>
    </table>
  );
};
export default TableDeviceList;
