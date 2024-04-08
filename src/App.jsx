import Header from "./components/Header";
import Navbar from "./components/NavBar";
import SubHeader from "./components/SubHeader";
import ConfirmModal from "./components/modals/ConfirmModal";
import LendingFormModal from "./components/modals/LendingFormModal";
import AddItemModal from "./components/modals/AddItemModal";
import { useEffect, useState } from "react";
import TableDeviceList from "./components/pages/TableDeviceList";
import TableBorrowerList from "./components/pages/TableBorrowerList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState();
  const [subHeader, setSubHeader] = useState();
  const [isConfirmModal, setIsConfirmModal] = useState();
  const [item, setItem] = useState();
  const [closeLendingForm, setCloseLendingForm] = useState();
  const [openAddItem, setOpenAddItem] = useState();
  const [searchDevice, setSearchDevice] = useState();

  const handleCloseLendingForm = () => {
    setIsConfirmModal(false);
    setCloseLendingForm(false);
  };
  return (
    <div className="relative">
      {isConfirmModal && (
        <ConfirmModal
          item={item}
          closeModal={() => setIsConfirmModal(false)}
          confirmModal={() => setCloseLendingForm(true)}
        />
      )}
      {closeLendingForm && (
        <LendingFormModal closeLendingForm={handleCloseLendingForm} />
      )}
      {openAddItem && (
        <AddItemModal closeAddItem={() => setOpenAddItem(false)} />
      )}
      <Header
        toggle={(value) => setIsOpen(value)}
        search={(value) => setSearchDevice(value)}
      />
      <div className="w-full h-[90vh] flex flex-row">
        <BrowserRouter>
          <Navbar toggle={isOpen} subHeader={(value) => setSubHeader(value)} />
          <div className="flex flex-col w-full">
            <SubHeader
              subHeader={subHeader}
              openAddItem={() => setOpenAddItem(true)}
            />
            <div className="overflow-y-scroll ">
              <Routes>
                <Route />
                <Route
                  index
                  element={
                    <TableDeviceList
                      confirmModal={(value) => setIsConfirmModal(value)}
                      itemModal={(value) => setItem(value)}
                      searchItem={searchDevice}
                    />
                  }
                />
                <Route
                  path="/deviceList"
                  element={
                    <TableDeviceList
                      confirmModal={(value) => setIsConfirmModal(value)}
                      itemModal={(value) => setItem(value)}
                      searchItem={searchDevice}
                    />
                  }
                />
                <Route path="/borrowerList" element={<TableBorrowerList />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
