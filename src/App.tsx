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
import HomePage from "./pages/User/HomePage";
import DetailProduct from "./pages/User/DetailProduct";
import Home from "./pages/User/Home";
import Cart from "./pages/User/Cart";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<DetailProduct />} />
        <Route path="cart" element={<Cart />} />
       
      </Route>

      <Route path="/admin" element={<PrivateRoute />} >
      <Route path="/admin" element={<Layout />} >
        <Route path="dashboard" element={<Dashboard />} />
        {/* Product */}
        <Route path="product" element={<ListProduct />} />
        <Route path="product/add" element={<ProductForm  />} />
        <Route path="product/edit/:id" element={<ProductForm  />} />
        {/* Orders */}
        <Route path="orders" element={<ListOrders />} />

        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
