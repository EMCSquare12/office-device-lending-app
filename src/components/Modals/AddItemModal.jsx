import { useEffect, useRef, useState } from "react";
import AddItemModalInput from "./AddItemModalInput";
import { MdDeleteForever } from "react-icons/md";
import { RxCircleBackslash } from "react-icons/rx";
import { GrAdd } from "react-icons/gr";
const AddItemModal = ({ closeAddItem, maxID, addDanger, addSuccess }) => {
  const closeRef = useRef();
  const [newDevice, setNewDevice] = useState([]);
  const [addData, setAddData] = useState({
    model: "",
    id: `${maxID}`,
    serialNumber: "",
    status: "Available",
  });

  // const handleAddForm = (e) => {
  //   const { name, value } = e.target;
  //   setAddData((prevValue) => ({
  //     ...prevValue,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/device-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addData),
      });

      if (!response.ok) {
        addDanger({ alert: true, message: "Failed to post data" });
        throw new Error("Failed to post data");
      }

      const data = await response.json();
      console.log("Response:", data);
      addSuccess({ alert: true, message: `Response: ${data}` });
      addSuccess({ alert: true, message: "Items Successfully Added!" });
      setAddData({ model: "", id: maxID, serialNumber: "" });
    } catch (error) {
      console.error("Error posting data:", error);
      addDanger({ alert: true, message: `Error posting data ${error}` });
    }
  };

  const handleNewDevice = () => {
    const maxID = parseInt(addData.id) + newDevice.length + 1;
    const newDeviceCopy = [
      ...newDevice,
      <AddItemModalInput maxID={String(maxID)} />,
    ];
    setNewDevice(newDeviceCopy);
  };

  const handleDelete = (index) => {
    const filteredNewDevice = newDevice.filter((item, id) => id !== index);
    setNewDevice(filteredNewDevice);
  };
  return (
    <div
      // onClick={() => {
      //   closeRef.current.click();
      // }}
      className="absolute z-30 flex flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-25"
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-[50%] h-auto gap-4 p-4 bg-white rounded-md shadow "
      >
        <h1 className="text-xl font-medium text-gray-500 font-roboto">
          Add Item
        </h1>
        <hr />

        <div className="flex flex-row gap-4 px-4">
          <div className="flex w-[16%] flex-row items-end justify-between h-10 gap-4">
            <label
              htmlFor="id"
              className="pl-2 text-sm text-gray-500 font-roboto"
            >
              ID:
            </label>
          </div>

          <div className="flex w-[40%] flex-row items-end justify-between h-10 gapss-4">
            <label
              htmlFor="item"
              className="pl-2 text-sm text-gray-500 font-roboto "
            >
              Device Name:
            </label>
          </div>
          <div className="flex w-[40%] flex-row items-end justify-between h-10 gap-4">
            <label
              htmlFor="serial-number"
              className="pl-2 text-sm text-gray-500 font-roboto"
            >
              Serial Number:
            </label>
          </div>
          <div className="flex w-[4%] flex-row items-center justify-between h-10 gap-4"></div>
        </div>

        <div
          className={`flex border flex-col w-full gap-4 p-4 bg-white rounded-md shadow   ${
            newDevice.length > 3 ? "overflow-y-scroll max-h-72" : "max-h-auto"
          }`}
        >
          <div className="flex flex-row gap-4">
            <AddItemModalInput maxID={addData.id} />
            <div className="flex w-[4%] flex-row items-center justify-between h-10 gap-4">
              <button className="text-gray-400 cursor-not-allowed">
                <RxCircleBackslash />
              </button>
            </div>
          </div>
          {newDevice.map((item, index) => (
            <div key={index} className="flex flex-row gap-4">
              {item}
              <div className="flex w-[4%] flex-row items-center justify-between h-10 gap-4">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-lg text-red-500 "
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end pr-12">
          <button
            onClick={handleNewDevice}
            className="flex flex-row items-center gap-1 text-sm text-blue-500 hover:text-blue-600"
          >
            <GrAdd /> Add
          </button>
        </div>
        <hr />

        <div className="flex flex-row items-center justify-end gap-6 ">
          <button
            type="submit"
            className="px-6 py-2 text-base text-white bg-blue-500 rounded font-roboto hover:bg-blue-600"
          >
            Add
          </button>
          <button
            ref={closeRef}
            onClick={() => closeAddItem(false)}
            className="px-6 py-2 text-base text-gray-700 bg-gray-300 rounded hover:bg-gray-400 font-roboto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddItemModal;
