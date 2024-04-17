import Header from "./components/Header";
import Navbar from "./components/NavBar";
import LendingFormModal from "./pages/LendingFormModal";
import AddItemModal from "./components/modals/AddItemModal";
import { useEffect, useState } from "react";
import TableDeviceList from "./pages/TableDeviceList";
import TableBorrowerList from "./pages/TableBorrowerList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteModal from "./components/modals/DeleteModal";
import SuccessAlert from "./components/SuccessAlert";
import DangerAlert from "./components/DangerAlert";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({});
  const [openAddItem, setOpenAddItem] = useState(false);
  const [searchDevice, setSearchDevice] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [maxID, setMaxID] = useState();
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState({
    alert: false,
    message: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSuccessAlert(false);
      setDangerAlert(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [successAlert, dangerAlert]);

  return (
    <div className="relative">
      {successAlert && <SuccessAlert message={"Item Borrowed Successfully!"} />}
      {dangerAlert.alert && <DangerAlert message={dangerAlert.message} />}
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
          addSuccess={(value) => setSuccessAlert(value)}
          addDanger={(value) => setDangerAlert(value)}
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
                  path="/deviceList/lending-form"
                  element={
                    <LendingFormModal
                      model={item["Device Model"]}
                      id={item.ID}
                      serialNumber={item["Serial Number"]}
                      lendingSuccess={(value) => setSuccessAlert(value)}
                      lendingDanger={(value) => setDangerAlert(value)}
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
