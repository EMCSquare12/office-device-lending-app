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
import DeleteModal from "./components/modals/DeleteModal";

function App() {
  const [isOpen, setIsOpen] = useState();
  const [subHeader, setSubHeader] = useState();
  const [item, setItem] = useState();
  const [lendingModal, setLendingModal] = useState();
  const [openAddItem, setOpenAddItem] = useState();
  const [searchDevice, setSearchDevice] = useState();
  const [deleteModal, setDeleteModal] = useState();
  const [confirmModal, setConfirmModal] = useState();
  const handleCloseLendingForm = () => {
    setConfirmModal(false);
    setLendingModal(false);
  };

  return (
    <div className="relative">
      {deleteModal && (
        <DeleteModal
          item={item}
          closeModal={() => setDeleteModal(false)}
          deleteModal={() => setDeleteModal(false)} //Todo
        />
      )}
      {confirmModal && (
        <ConfirmModal
          item={item}
          closeModal={() => setConfirmModal(false)}
          confirmModal={() => setLendingModal(true)}
        />
      )}
      {lendingModal && (
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
                <Route
                  index
                  element={
                    <TableDeviceList
                      confirmModal={() => setConfirmModal(true)}
                      itemModal={(value) => setItem(value)}
                      searchItem={searchDevice}
                      deleteModal={() => setDeleteModal(true)}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <TableDeviceList
                      confirmModal={() => setConfirmModal(true)}
                      itemModal={(value) => setItem(value)}
                      searchItem={searchDevice}
                      deleteModal={() => setDeleteModal(true)}
                    />
                  }
                />
                <Route
                  path="/deviceList"
                  element={
                    <TableDeviceList
                      confirmModal={() => setConfirmModal(true)}
                      itemModal={(value) => setItem(value)}
                      searchItem={searchDevice}
                      deleteModal={() => setDeleteModal(true)}
                    />
                  }
                />
                <Route
                  path="/borrowerList"
                  element={<TableBorrowerList searchBorrower={searchDevice} />}
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
