import { useRef } from "react";

const ConfirmModal = ({
  closeModal,
  confirmModal,
  model,
  id,
  serialNumber,
}) => {
  const closeRef = useRef();
  return (
    <div
      onClick={() => {
        closeRef.current.click();
      }}
      className="absolute z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25"
    >
      <div className="w-[30%] flex flex-col bg-white shadow rounded-md">
        <h1 className="p-4 text-base font-medium font-roboto">
          Borrow this Device?
        </h1>
        <hr />
        <p className="px-4 py-2 text-sm font-roboto">
          Are you sure you want to borrow {model}?
        </p>
        <hr />
        <div className="flex flex-row justify-end gap-4 p-4">
          <button
            onClick={() => confirmModal(true)}
            className="px-6 py-2 text-base text-white bg-blue-500 rounded font-roboto hover:bg-blue-600"
          >
            Yes
          </button>
          <button
            ref={closeRef}
            onClick={() => closeModal(false)}
            className="px-6 py-2 text-base text-gray-700 bg-gray-300 rounded hover:bg-gray-400 font-roboto"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
