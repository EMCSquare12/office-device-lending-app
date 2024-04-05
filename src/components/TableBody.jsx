import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
const TableBody = ({ confirmModal, itemModal }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch();
        // "https://sheet.best/api/sheets/ce7704fa-7b97-4814-838c-35608e72871e"
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
            className="relative border-b hover:shadow hover:bg-gray-50"
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
            <td className="absolute right-0 flex items-center h-full px-4 text-sm text-gray-500">
              <FaChevronRight />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
