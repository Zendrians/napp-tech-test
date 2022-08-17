import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import './ProductList.scss'

const ProductList = () => {
  return (
    <section className="productList">
      <div>Searc goes here</div>
      <div className="productList--showcase">
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </div>
    </section>
  );
};

export default ProductList;