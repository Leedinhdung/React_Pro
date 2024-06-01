import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/DashBoard";
import Layout from "./components/shared/Layout";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
      <Route path="login" element={<h1>Login Page</h1>} />
    </Routes>
  );
}

export default App;
