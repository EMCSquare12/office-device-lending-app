import TableDeviceList from "./pages/TableDeviceList";
import TableBorrowerList from "./pages/TableBorrowerList";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Main = ({ confirmModal, itemModal }) => {
  return (
    <div className="overflow-y-scroll ">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <TableDeviceList
                confirmModal={confirmModal}
                itemModal={itemModal}
              />
            }
          />
          <Route
            path="/deviceList"
            element={
              <TableDeviceList
                confirmModal={confirmModal}
                itemModal={itemModal}
              />
            }
          />
          <Route path="/borrowerList" element={<TableBorrowerList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Main;
