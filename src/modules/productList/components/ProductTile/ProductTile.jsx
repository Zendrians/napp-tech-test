import React from "react";
import { Link } from "react-router-dom";
import "./ProductTile.scss";

const ProductTile = ({ product }) => {
  return (
    <Link to={`./details/${product.id}`}>
      <div className="productTile">
        <figure className="productTile--imgBox">
          <img src={product.imgUrl} alt="Phone Photo" />
        </figure>
        <h3 className="productTile--model">{product.model}</h3>
        <span className="productTile--brand">{product.brand}</span>
        <span className="productTile--price">
          {product.price ? `€ ${product.price.toString()}` : "N/A"}
        </span>
      </div>
    </Link>
  );
};

export default ProductTile;
