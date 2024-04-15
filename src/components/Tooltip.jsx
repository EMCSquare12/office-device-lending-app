const ToolTip = ({ text, position }) => {
  return (
    <div
      className={`flex w-auto items-center h-8 px-3 rounded shadow bg-gray-700  absolute z-30 ${
        position !== undefined ? position : ""
      }`}
    >
      <h1 className="text-sm text-white whitespace-nowrap font-roboto">
        {text}
      </h1>
    </div>
  );
};
export default ToolTip;
