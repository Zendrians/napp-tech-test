import React from "react";
import NavBar from "shared/components/NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import "./ProductListLayout.scss";

const ProductListLayout = ({ products }) => {
  return (
    <main className="productListLayout">
      <NavBar />
      <section className="productListLayout--showcaseSection">
        <ProductList products={products} />
      </section>
    </main>
  );
};

export default ProductListLayout;
