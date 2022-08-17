import TextField from "@mui/material/TextField";
import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductList.scss";

const ProductList = ({ products }) => {
  const generateProductTiles = () => {
    return products.map((prod) => <ProductTile key={prod.id} product={prod} />);
  };

  return (
    <section className="productList">
      <div className="productList--searchBox">
        <TextField id="standard-basic" label="Search" variant="standard" />
      </div>
      <div className="productList--showcase">{generateProductTiles()}</div>
    </section>
  );
};

export default ProductList;
