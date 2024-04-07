import { useState } from "react";

const ConfirmModal = ({ closeModal, item, confirmModal }) => {
  const [isCloseModal, setIsCloseModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleIsCloseModal = () => {
    setIsCloseModal(false);
    closeModal(isCloseModal);
  };

  const handleIsConfirm = () => {
    setConfirm(true);
    confirmModal(confirm);
  };

  return (
    <div className="absolute z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25">
      <div className="w-[30%] flex flex-col bg-white shadow rounded-md">
        <h1 className="p-4 text-base font-medium font-roboto">
          Borrow this Device?
        </h1>
        <hr />
        <p className="px-4 py-2 text-sm font-roboto">
          Are you sure you want to borrow this {item}?
        </p>
        <hr />
        <div className="flex flex-row justify-end gap-4 p-4">
          <button
            onClick={handleIsConfirm}
            className="px-6 py-2 text-base text-white bg-blue-500 rounded font-roboto hover:bg-blue-600"
          >
            Yes
          </button>
          <button
            onClick={handleIsCloseModal}
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
