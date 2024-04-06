import { useState } from "react";

const AddItemModal = ({ closeAddItem }) => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose(false);
    closeAddItem(isClose);
  };
  return (
    <div className="absolute z-20 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25">
      <div className="flex flex-col w-auto gap-4 p-4 bg-white rounded-md shadow">
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
              type="text"
              id="item"
              className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1 w-60"
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
              type="text"
              id="serial-number"
              className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1 w-60"
            />
          </div>
          <hr />
          <div className="flex flex-row items-center justify-end gap-6 ">
            <button className="px-6 py-2 text-base text-white bg-blue-500 rounded font-roboto hover:bg-blue-600">
              Yes
            </button>
            <button
              onClick={handleClose}
              className="px-6 py-2 text-base text-gray-700 bg-gray-300 rounded hover:bg-gray-400 font-roboto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddItemModal;
