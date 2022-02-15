import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Single from "./pages/Single";
import "./scss/style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" exact element={<ProductsPage />} />
          <Route path="/products/:_id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
