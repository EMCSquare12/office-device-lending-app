import { useState } from "react";
import axios from "axios";

const AddItemModal = ({ closeAddItem }) => {
  const [isClose, setIsClose] = useState(false);
  const [addData, setAddData] = useState({
    id: "",
    model: "",
    serialNumber: "",
    status: "",
  });

  const handleAddForm = (e) => {
    const { name, value } = e.target;
    setAddData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csvUrl = "https://script.google.com/a/macros/liveph.com/s/AKfycbwU5dtBwP2VD5OQRaG6QvyxM2_mB4FD2J9OWdyTzmD1Esgp6qiRRc9t7vgoQYLmPyN-/exec";
    const formData = new FormData();
    formData.append("data", JSON.stringify(addData));
    
    try {
      const response = await axios({
        method: 'get',
        url: csvUrl,
        params: {
          callback: 'callbackFunction', // Specify the name of the callback function
          data: JSON.stringify(addData) // Pass the data as a query parameter
        },
        jsonp: true // Enable JSONP mode
      });
      console.log(response.data);
      setAddData({
        id: "",
        model: "",
        serialNumber: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  

  const handleClose = () => {
    setIsClose(false);
    closeAddItem(isClose);
  };
  return (
    <div className="absolute z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-auto gap-4 p-4 bg-white rounded-md shadow"
      >
        <h1 className="text-xl font-medium text-gray-500 font-roboto">
          Add Item
        </h1>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between h-10 gap-4">
            <label
              htmlFor="id"
              className="pl-2 text-sm text-gray-500 font-roboto"
            >
              ID:
            </label>
            <input
              name="id"
              type="text"
              id="id"
              className="h-10 p-2 text-sm text-gray-500 bg-gray-100 rounded outline-none font-roboto w-60"
              disabled
            />
          </div>
          <div className="flex flex-row items-center justify-between h-10 gap-4">
            <label
              htmlFor="item"
              className="pl-2 text-sm text-gray-500 font-roboto "
            >
              Device Name:
            </label>
            <input
              name="model"
              value={addData.model}
              type="text"
              id="item"
              className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1 w-60"
              onChange={handleAddForm}
            />
          </div>

          <div className="flex flex-row items-center justify-between h-10 gap-4">
            <label
              htmlFor="serial-number"
              className="pl-2 text-sm text-gray-500 font-roboto"
            >
              Serial Number:
            </label>
            <input
              name="serialNumber"
              value={addData.serialNumber}
              type="text"
              id="serial-number"
              className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1 w-60"
              onChange={handleAddForm}
            />
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
              onClick={handleClose}
              className="px-6 py-2 text-base text-gray-700 bg-gray-300 rounded hover:bg-gray-400 font-roboto"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddItemModal;
