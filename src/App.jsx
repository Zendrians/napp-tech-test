import ProductDetailsContainer from "modules/productDetails/container/ProductDetailsContainer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListContainer from "./modules/productList/container/ProductListContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListContainer />} />
      <Route path="/details" element={<ProductDetailsContainer />} />
    </Routes>
  );
}

export default App;
