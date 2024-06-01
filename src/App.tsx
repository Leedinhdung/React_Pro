import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/DashBoard";
import Layout from "./components/shared/Layout";
import ListProduct from "./pages/Admin/Products/ListProduct";
import AddProduct from "./pages/Admin/Products/AddProduct";
import ListOrders from "./pages/Admin/orders/ListOrders";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        {/* Product */}
        <Route path="/product" element={<ListProduct />} />
        <Route path="/product/add" element={<AddProduct />} />
        {/* Orders */}
        <Route path="/orders" element={<ListOrders />} />

      </Route>
      <Route path="login" element={<h1>Login Page</h1>} />
    </Routes>
  );
}

export default App;
