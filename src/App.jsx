import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import SubHeader from "./components/SubHeader";
import ConfirmModal from "./components/Modals/ConfirmModal";
import { useEffect, useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState();
  const [subHeader, setSubHeader] = useState();
  const [isConfirmModal, setIsConfirmModal] = useState();
  const [item, setItem] = useState();

  useEffect(() => {
    console.log(item)
  },[item, isConfirmModal])
  return (
    <div className="relative">
      {isConfirmModal && (
        <ConfirmModal
          item={item}
          closeModal={(value) => setIsConfirmModal(value)}
        />
      )}
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
