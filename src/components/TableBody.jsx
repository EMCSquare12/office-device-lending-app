import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { GoKebabHorizontal } from "react-icons/go";

const TableBody = ({ confirmModal, itemModal }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheet.best/api/sheets/ce7704fa-7b97-4814-838c-35608e72871e"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleConfirm = async (value) => {
    setIsOpen(true);
    confirmModal(isOpen);
    setItem(value);
    itemModal(item);
  };

  return (
    <tbody style={{ overflowX: "auto", overflowY: "auto", maxHeight: "400px" }}>
      {data.map((item, index) => {
        return (
          <tr
            onDoubleClick={() => handleConfirm(item.Device_Model)}
            key={index}
            className="relative h-10 border-b hover:shadow hover:bg-gray-50"
          >
            <td className="py-2 w-[20%] text-xs md:text-sm text-left pl-6">
              {item.Device_Model}
            </td>
            <td className="py-2 w-[20%] text-xs md:text-sm text-left pl-6">
              {item.ID}
            </td>
            <td className="py-2 w-[20%] text-xs md:text-sm text-left pl-6">
              {item.Serial_Number}
            </td>
            <td className="py-2 w-[20%] text-xs md:text-sm text-left pl-6">
              {item.Status}
            </td>
            <td className="relative right-0 w-10 h-full ">
              <button className="flex items-center justify-center w-10 h-full text-gray-500 transition-all duration-200 ease-in-out hover:rounded-full hover:shadow hover:bg-gray-200">
                <BsThreeDotsVertical />
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
