import "./App.css";
import Header from "./components/Header";

import Sidebar from "./components/Sidebar";
import ListProduct from "./pages/Admin/Products/ListProduct";
// import Dashboard from "./pages/Admin/DashBoard";
// import Dashboard from "./pages/DashBoard";

function App() {
  return (
    <div className="flex">
      <div className="basis-[18%] h-[100vh] ">
        <Sidebar />
      </div>
      <div className="basis-[82%] h-[100vh] overflow-scroll ">
        <Header />
        <div>
          {/* <Dashboard /> */}
          <ListProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
