import TextField from "@mui/material/TextField";
import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <section className="productList">
      <div className="productList--searchBox">
        <TextField id="standard-basic" label="Search" variant="standard" />
      </div>
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
