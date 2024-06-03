import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/DashBoard";
import Layout from "./components/shared/Layout";
import ListProduct from "./pages/Admin/Products/ListProduct";
import ListOrders from "./pages/Admin/orders/ListOrders";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductForm from "./pages/Admin/Products/ProductForm";
import NotFound from "./pages/NotFoundPage";
import { useEffect, useState } from "react";
import IProductForm from "./interfaces/IProduct";





function App() {
  const [products, setProducts] = useState<IProductForm[]>([])
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/products')
      const data = await res.json()
      setProducts(data)

    })()
  }, [])


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


  return (
    <Routes>
      <Route path="admin" element={<Layout />} >
        <Route index element={<Dashboard />} />
        {/* Product */}
        <Route path="product" element={<ListProduct data={products} />} />
        <Route path="product/add" element={<ProductForm addPro={handleAddPro} />} />
        <Route path="product/edit/:id" element={<ProductForm editPro={handleEditPro} />} />
        {/* Orders */}
        <Route path="orders" element={<ListOrders />} />

      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
