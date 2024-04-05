import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
const TableBody = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheet.best/api/sheets/9c5cdf0d-f5b1-4c9c-ae69-eb0610af835a"
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
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={index} className="relative border-b hover:shadow hover:bg-gray-50">
            <td className="py-2 w-[20%]   text-left pl-6">
              {item.Device_Model}
            </td>
            <td className="py-2 w-[20%]  text-left pl-6">{item.ID}</td>
            <td className="py-2 w-[20%]   text-left pl-6">
              {item.Serial_Number}
            </td>
            <td className="py-2 w-[20%]   text-left pl-6">{item.Status}</td>
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
