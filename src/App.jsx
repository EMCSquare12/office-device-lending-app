import Header from "./components/Header";
import Navbar from "./components/NavBar";
import LendingFormModal from "./components/modals/LendingFormModal";
import AddItemModal from "./components/modals/AddItemModal";
import { useEffect, useState } from "react";
import TableDeviceList from "./components/pages/TableDeviceList";
import TableBorrowerList from "./components/pages/TableBorrowerList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteModal from "./components/modals/DeleteModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({});
  const [openAddItem, setOpenAddItem] = useState(false);
  const [searchDevice, setSearchDevice] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [maxID, setMaxID] = useState();

  return (
    <div className="relative">
      {deleteModal && (
        <DeleteModal
          item={item["Device Model"]}
          closeModal={() => setDeleteModal(false)}
          deleteModal={() => setDeleteModal(false)} //Todo
        />
      )}

      {openAddItem && (
        <AddItemModal
          closeAddItem={() => setOpenAddItem(false)}
          maxID={maxID}
        />
      )}
      <Header
        toggle={(value) => setIsOpen(value)}
        search={(value) => setSearchDevice(value)}
      />
      <div className="w-full h-[90vh] flex flex-row">
        <BrowserRouter>
          <Navbar toggle={isOpen} />
          <div className="flex flex-col w-full">
            {/* <SubHeader
              subHeader={subHeader}
              openAddItem={() => setOpenAddItem(true)}
            /> */}
            <div className="overflow-y-scroll ">
              <Routes>
                <Route
                  index
                  element={
                    <TableDeviceList
                      confirmModal={() => setConfirmModal(true)}
                      item={(value) => setItem(value)}
                      searchItem={searchDevice}
                      deleteModal={() => setDeleteModal(true)}
                      maxID={(value) => setMaxID(value)}
                      openAddItem={() => setOpenAddItem(true)}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <TableDeviceList
                      confirmModal={() => setConfirmModal(true)}
                      item={(value) => setItem(value)}
                      searchItem={searchDevice}
                      deleteModal={() => setDeleteModal(true)}
                      maxID={(value) => setMaxID(value)}
                      openAddItem={() => setOpenAddItem(true)}
                    />
                  }
                />
                <Route
                  path="/deviceList"
                  element={
                    <TableDeviceList
                      confirmModal={() => setConfirmModal(true)}
                      item={(value) => setItem(value)}
                      searchItem={searchDevice}
                      deleteModal={() => setDeleteModal(true)}
                      maxID={(value) => setMaxID(value)}
                      openAddItem={() => setOpenAddItem(true)}
                    />
                  }
                />
                <Route
                  path="/borrowerList"
                  element={<TableBorrowerList searchBorrower={searchDevice} />}
                />
                <Route
                  path="/lending-from"
                  element={
                    <LendingFormModal
                      model={item["Device Model"]}
                      id={item.ID}
                      serialNumber={item["Serial Number"]}
                    />
                  }
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
