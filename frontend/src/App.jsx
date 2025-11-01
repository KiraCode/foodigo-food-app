import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import PlaceOrder from "./components/pages/PlaceOrder";

const App = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
