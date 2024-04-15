import { useRef, useState } from "react";

const AddItemModal = ({ closeAddItem, maxID }) => {
  const closeRef = useRef();
  const [reload, setReload] = useState(0);
  const [addData, setAddData] = useState({
    model: "",
    id: `${maxID}`,
    serialNumber: "",
    status: "Available",
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
    try {
      const response = await fetch("http://localhost:5000/api/device-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addData),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const data = await response.json();
      console.log("Response:", data);
      setAddData({ model: "", id: maxID, serialNumber: "" });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div
      // onClick={() => {
      //   closeRef.current.click();
      // }}
      className="absolute z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25"
    >
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
              value={addData.id}
              name="id"
              type="text"
              id="id"
              className="h-10 p-2 text-sm text-gray-500 bg-gray-100 rounded outline-none font-roboto w-60"
              onChange={handleAddForm}
            />
          </div>
          <div className="flex flex-row items-center justify-between h-10 gapss-4">
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
              ref={closeRef}
              onClick={() => closeAddItem(false)}
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
