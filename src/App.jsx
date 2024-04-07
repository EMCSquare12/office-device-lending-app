import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import SubHeader from "./components/SubHeader";
import ConfirmModal from "./components/modals/ConfirmModal";
import LendingFormModal from "./components/modals/LendingFormModal";
import AddItemModal from "./components/modals/AddItemModal";
import { useEffect, useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState();
  const [subHeader, setSubHeader] = useState();
  const [isConfirmModal, setIsConfirmModal] = useState();
  const [item, setItem] = useState();
  const [closeLendingForm, setCloseLendingForm] = useState();
  const [openAddItem, setOpenAddItem] = useState();

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
      <Header toggle={(value) => setIsOpen(value)} />
      <div className="w-full h-[90vh] flex flex-row">
        <Navbar toggle={isOpen} subHeader={(value) => setSubHeader(value)} />
        <div className="flex flex-col w-full">
          <SubHeader
            subHeader={subHeader}
            openAddItem={() => setOpenAddItem(true)}
          />
          <Main
            confirmModal={(value) => setIsConfirmModal(value)}
            itemModal={(value) => setItem(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
