import { useState } from "react";

const AddItemModalInput = ({ maxID }) => {
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

  return (
    <>
      <div className="flex w-[32%] flex-row items-center justify-between h-10 gap-4 ">
        <input
          value={addData.id}
          name="id"
          type="text"
          id="id"
          className="w-full h-10 p-2 text-sm text-gray-500 bg-gray-100 border border-gray-300 rounded outline-none font-roboto"
          onChange={handleAddForm}
        />
      </div>

      <div className="flex w-[32%] flex-row items-center justify-between h-10 gapss-4">
        <input
          name="model"
          value={addData.model}
          type="text"
          id="item"
          className="w-full h-10 p-2 text-sm text-gray-500 border border-gray-300 rounded outline-none font-roboto focus:ring-1"
          onChange={handleAddForm}
        />
      </div>
      <div className="flex w-[32%] flex-row items-center justify-between h-10 gap-4">
        <input
          name="serialNumber"
          value={addData.serialNumber}
          type="text"
          id="serial-number"
          className="w-full h-10 p-2 text-sm text-gray-500 border border-gray-300 rounded outline-none font-roboto focus:ring-1"
          onChange={handleAddForm}
        />
      </div>
      
    </>
  );
};

export default AddItemModalInput;
