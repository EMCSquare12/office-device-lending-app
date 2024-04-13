import { GrAdd } from "react-icons/gr";
import { useRef, useState } from "react";

const LendingFormModal = ({ closeLendingForm, model, id, serialNumber }) => {
  const [openName, setOpenName] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const closeRef = useRef();

  return (
    <div
      // onClick={() => {
      //   closeRef.current.click();
      // }}
      className="absolute z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25"
    >
      <form className="w-[60vw] h-[80vh]  bg-white rounded-md shadow gap-6 flex flex-col px-10 py-5">
        <h1 className="mb-4 text-xl font-medium text-gray-500 font-roboto">
          Lending Form
        </h1>
        <div className="flex flex-col w-full gap-6 p-1 overflow-y-scroll">
          <div className="relative flex flex-col justify-start h-auto w-fit">
            <div className="flex flex-row w-auto gap-4 h-fit ">
              <div className="flex flex-col items-start justify-center h-full gap-2">
                <label
                  className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                  htmlFor="item"
                >
                  Item:
                </label>
                <input
                  className="w-full h-10 px-4 text-sm text-gray-500 truncate bg-gray-100 outline-none font-roboto"
                  type="text"
                  id="item"
                  value={model}
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full gap-2">
                <label
                  className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                  htmlFor="serial-num"
                >
                  ID:
                </label>
                <input
                  className="w-full h-10 px-4 text-sm text-gray-500 bg-gray-100 outline-none font-roboto"
                  type="text"
                  id="serial-num"
                  value={id}
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
                  className="w-full h-10 px-4 text-sm text-gray-500 bg-gray-100 outline-none font-roboto"
                  type="text"
                  id="serial-num"
                  value={serialNumber}
                />
              </div>
            </div>
            <div className="flex justify-end h-full pr-2 mt-2">
              <button className="flex flex-row items-center h-full gap-1 text-sm text-blue-500 border-b border-transparent w-fit font-roboto hover:text-blue-600">
                <GrAdd className="text-xs" /> Add
              </button>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-row items-center justify-start h-10 gap-4">
              <label
                className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                htmlFor="date-borrowed"
              >
                Date Borrowed: <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full h-full px-4 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
                type="date"
                id="date-borrowed"
              />
            </div>
            <div className="flex flex-row items-center justify-start h-10 gap-4">
              <label
                className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                htmlFor="date-return"
              >
                Date Return: <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full h-full px-4 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
                type="date"
                id="date-return"
              />
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col gap-2">
              <label
                className="pl-2 text-sm text-gray-500 font-roboto whitespace-nowrap"
                htmlFor="name"
              >
                Name: <span className="text-red-500">*</span>
              </label>
              <input
                onClick={() => setOpenName(!openName)}
                className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            {openName && (
              <ul className="absolute w-full h-auto mt-[1px] bg-white border rounded-md shadow-md overflow-y-scroll max-h-[200px] z-10">
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <div className="flex flex-col gap-2">
              <label
                className="pl-2 text-sm text-gray-500 font-roboto"
                htmlFor="event"
              >
                Event:
              </label>
              <input
                onClick={() => setOpenEvent(!openEvent)}
                className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
                type="text"
                id="event"
                placeholder="Enter event name"
              />
            </div>
            {openEvent && (
              <ul className="absolute w-full h-auto mt-[1px] bg-white border rounded-md shadow-md overflow-y-scroll max-h-[200px]">
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              rows="4"
              className="w-full h-full p-4 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
              id="notes"
              placeholder="Enter Notes"
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-end gap-6">
            <button className="px-6 py-2 text-base text-white bg-blue-500 rounded font-roboto hover:bg-blue-600">
              Yes
            </button>
            <button
              ref={closeRef}
              onClick={() => closeLendingForm(false)}
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
export default LendingFormModal;
