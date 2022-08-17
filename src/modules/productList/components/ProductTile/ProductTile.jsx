import React from "react";
import { Link } from "react-router-dom";
import "./ProductTile.scss";

const ProductTile = () => {
  return (
    <Link to="./details">
      <div className="productTile">
        <figure></figure>

        <h3>Phone Title</h3>
        <span>marca</span>
        <span>precio</span>
      </div>
    </Link>
  );
};

export default ProductTile;
