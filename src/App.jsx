import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import SubHeader from "./components/SubHeader";
import ConfirmModal from "./components/Modals/ConfirmModal";
import EventModal from "./components/Modals/EventModal";
import { useEffect, useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState();
  const [subHeader, setSubHeader] = useState();
  const [isConfirmModal, setIsConfirmModal] = useState();
  const [item, setItem] = useState();
  const [isClose, setIsClose] = useState();

  const handleCloseModal = () => {
    setIsConfirmModal(false);
    setIsClose(false);
  };
  return (
    <div className="relative">
      {isConfirmModal && (
        <ConfirmModal
          item={item}
          closeModal={() => setIsConfirmModal(false)}
          confirmModal={() => setIsClose(true)}
        />
      )}
      {isClose && <EventModal close={handleCloseModal} />}
      <Header toggle={(value) => setIsOpen(value)} />
      <div className="w-full h-[90vh] flex flex-row">
        <Navbar toggle={isOpen} subHeader={(value) => setSubHeader(value)} />
        <div className="flex flex-col w-full">
          <SubHeader subHeader={subHeader} />
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
