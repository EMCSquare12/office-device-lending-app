import { useEffect, useState } from "react";
import fetchCSVData from "./data/fetchCSVData";
const DeviceList = ({ deviceData, model, id, serialNumber }) => {
  const [openDevice, setOpenDevice] = useState(false);
  const [device, setDevice] = useState([]);
  const [originalDevice, setOriginalDevice] = useState([]);
  const [addData, setAddData] = useState({
    model: `${model}`,
    id: `${id}`,
    serialNumber: `${serialNumber}`,
  });

  const handleAddForm = (e) => {
    const { name, value } = e.target;
    setAddData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    console.log(value);
  };

  useEffect(() => {
    const deviceUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrsiAP5MDHLubuHbyBWW7-26EZOBGmK54XmMdzVQxsoLYXhQY6rFlY1zolPdzDCYdW5loWyd6dh6yV/pub?gid=0&single=true&output=csv";
    fetchCSVData({
      csvUrl: deviceUrl,
      data: handleDevice,
    });
  }, []);

  const handleDevice = (jsonData) => {
    setOriginalDevice(jsonData);
    setDevice(jsonData);
  };

  const handleList = (value, index) => {
    setAddData((prev) => ({ ...prev, model: value }));
    setOpenDevice(false);
    setAddData((prev) => ({
      ...prev,
      id: device[index].ID,
    }));
    setAddData((prev) => ({
      ...prev,
      serialNumber: device[index]["Serial Number"],
    }));
  };

  useEffect(() => {
    // Filter device list based on model
    const filteredDeviceList = addData.model
      ? originalDevice.filter(({ "Device Model": device }) =>
          device.toLowerCase().includes(addData.model.toLowerCase())
        )
      : originalDevice;
    setDevice(filteredDeviceList);
  }, [originalDevice, addData.model]);
  return (
    <div className="flex flex-row w-auto h-full gap-4 ">
      <div className="relative">
        <div className="flex flex-col h-full gap-2 ">
          <label
            className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
            htmlFor="item"
          >
            Device Model: <span className="text-red-500">*</span>
          </label>
          <input
            onClick={() => {
              setOpenDevice(!openDevice);
              setDevice(originalDevice);
            }}
            name="model"
            className="w-full h-10 px-4 text-sm text-gray-500 truncate bg-gray-200 border-gray-300 outline-none font-roboto"
            type="text"
            id="item"
            value={addData.model}
            onChange={handleAddForm}
          />
        </div>
        {openDevice && (
          <ul
            // ref={closeRef}
            className="absolute w-full h-auto bg-white border rounded-md shadow-md overflow-y-scroll max-h-[200px] z-10 bottom-100 mt-1"
          >
            {device.map(({ "Device Model": device }, index) => (
              <li
                onClick={() => handleList(device, index)}
                key={index}
                className="h-auto px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100"
              >
                {device}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col items-start justify-center h-full gap-2">
        <label
          className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
          htmlFor="serial-num"
        >
          ID:
        </label>
        <input
          name="id"
          className="w-full h-10 px-4 text-sm text-gray-500 bg-gray-200 border-gray-300 outline-none font-roboto"
          type="text"
          id="serial-num"
          value={addData.id}
          onChange={handleAddForm}
          readOnly
        />
      </div>
      <div className="flex flex-col items-start justify-center h-full gap-2">
        <label
          className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
          htmlFor="serial-num"
        >
          Serial Number:
        </label>
        <input
          name="serialNumber"
          className="w-full h-10 px-4 text-sm text-gray-500 bg-gray-200 border-gray-300 outline-none font-roboto"
          type="text"
          id="serial-num"
          value={addData.serialNumber}
          onChange={handleAddForm}
          readOnly
        />
      </div>
    </div>
  );
};

export default DeviceList;
