import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import SubHeader from "./components/SubHeader";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [subHeader, setSubHeader] = useState();

  return (
    <>
      <Header toggle={(value) => setIsOpen(value)} />
      <div className="w-full h-[90vh] flex flex-row">
        <Navbar toggle={isOpen} subHeader={(value) => setSubHeader(value)} />
        <div className="flex flex-col w-full">
          <SubHeader subHeader={subHeader}/>
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
