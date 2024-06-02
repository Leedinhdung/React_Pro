import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/DashBoard";
import Layout from "./components/shared/Layout";
import ListProduct from "./pages/Admin/Products/ListProduct";
import AddProduct from "./pages/Admin/Products/ProductForm";
import ListOrders from "./pages/Admin/orders/ListOrders";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductForm from "./pages/Admin/Products/ProductForm";

const handleAddPro = async (data: any) => {
  const res = await fetch("http://localhost:3000/products", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

  const datas = await res.json()
  console.log(datas);
}
const handleEditPro = async (data: any, id: number | string) => {
  const res = await fetch("http://localhost:3000/products/" + id, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

  const datas = await res.json()
  console.log(datas);
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        {/* Product */}
        <Route path="/product" element={<ListProduct />} />
        <Route path="/product/add" element={<ProductForm addPro={handleAddPro} />} />
        <Route path="/product/edit/:id" element={<ProductForm editPro={handleEditPro} />} />
        {/* Orders */}
        <Route path="/orders" element={<ListOrders />} />

      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
