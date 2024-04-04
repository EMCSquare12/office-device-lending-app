import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import SubHeader from "./components/SubHeader";
function App() {
  return (
    <>
      <Header />
      <div className="w-full h-[90vh] flex flex-row">
        <Navbar />
        <div className="w-full flex flex-col">
          <SubHeader />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
