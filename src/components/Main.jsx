import TableDeviceLent from "./TableDeviceList";

const Main = ({ confirmModal, itemModal }) => {
  return (
    <div className="overflow-y-scroll ">
      <TableDeviceLent confirmModal={confirmModal} itemModal={itemModal} />
    </div>
  );
};
export default Main;
