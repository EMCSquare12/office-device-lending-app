import { CiCircleCheck } from "react-icons/ci";

const DangerAlert = ({ message }) => {
  return (
    <div className="absolute z-40 flex flex-row px-6 py-4 transform -translate-x-1/2 bg-red-100 border border-red-600 rounded-md shadow left-1/2 top-10">
      <h1 className="flex flex-row items-center gap-2 text-sm text-red-600 font-roboto">
        <CiCircleCheck className="text-xl" /> {message}
      </h1>
    </div>
  );
};
export default DangerAlert;
