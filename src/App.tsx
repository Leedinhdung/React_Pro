import "./App.css";
import Header from "./components/Header";

import Sidebar from "./components/Sidebar";
// import AddProduct from "./pages/Admin/Products/AddProduct";
import HomePage from "./pages/User/HomePage";
// import ListProduct from "./pages/Admin/Products/ListProduct";
// import Dashboard from "./pages/Admin/DashBoard";
// import Dashboard from "./pages/DashBoard";

function App() {
  return (
    // <div className="flex">
    //   <div className="basis-[18%] h-[100vh] ">
    //     <Sidebar />
    //   </div>
    //   <div className="basis-[82%] h-[100vh] overflow-scroll ">
    //     <Header />
    //     <div>
    //       {/* <Dashboard /> */}
    //       {/* <AddProduct /> */}

    //     </div>
    //   </div>
    // </div>
    <HomePage />
  );
}

export default App;
