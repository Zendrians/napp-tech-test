import React from "react";
import NavBar from "shared/components/NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import "./ProductListLayout.scss";

const ProductListLayout = () => {
  return (
    <main className="productListLayout">
      <NavBar />
      <ProductList />
    </main>
  );
};

export default ProductListLayout;