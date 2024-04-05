const EventModal = () => {
  return (
    <div className="absolute z-10 flex justify-center w-screen h-screen bg-black bg-opacity-25">
      <div className="w-[60vw] overflow-y-scroll h-auto mt-[10vh] bg-white rounded-md shadow gap-6 flex flex-col px-10 py-5">
        <h1 className="mb-4 text-xl font-medium text-gray-500 font-roboto">
          Lending Form
        </h1>
        <div className="flex flex-row w-auto gap-10">
          <div className="flex flex-row items-center justify-start h-10 gap-4">
            <label
              className="pl-2 text-sm font-medium text-gray-500 whitespace-nowrap font-roboto"
              htmlFor="item"
            >
              Item:
            </label>
            <input
              disabled
              className="w-full h-full px-4 text-sm font-medium text-gray-500 bg-gray-200 outline-none font-roboto"
              type="text"
              id="item"
              value={"Laptop"}
            />
          </div>
          <div className="flex flex-row items-center justify-start h-10 gap-4">
            <label
              className="pl-2 text-sm font-medium text-gray-500 whitespace-nowrap font-roboto"
              htmlFor="serial-num"
            >
              Serial Number:
            </label>
            <input
              disabled
              className="w-full h-full px-4 text-sm font-medium text-gray-500 bg-gray-200 outline-none font-roboto"
              type="text"
              id="serial-num"
              value={"0120121"}
            />
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
        <div className="flex flex-col gap-2">
          <label
            className="pl-2 text-sm text-gray-500 font-roboto focus:ring-1"
            htmlFor="name"
          >
            Name: <span className="text-red-500">*</span>
          </label>
          <input
            className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="pl-2 text-sm text-gray-500 font-roboto"
            htmlFor="event"
          >
            Event:
          </label>
          <input
            className="h-10 p-2 text-sm text-gray-500 border rounded outline-none font-roboto focus:ring-1"
            type="text"
            id="event"
            placeholder="Enter the name of event"
          />
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
          <button className="px-6 py-2 text-base text-gray-700 bg-gray-300 rounded hover:bg-gray-400 font-roboto">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventModal;
