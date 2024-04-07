import TableDeviceLent from "./TableDeviceList";
import TableBorrowerList from "./TableBorrowerList";

const Main = ({ confirmModal, itemModal }) => {
  return (
    <div className="overflow-y-scroll ">
      <TableDeviceLent confirmModal={confirmModal} itemModal={itemModal} />
      <TableBorrowerList />
    </div>
  );
};
export default Main;
