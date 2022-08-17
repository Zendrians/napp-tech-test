import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductList.scss";

function filterProducts(products, query) {
  if (!query) return products;
  const matchedModels = products.filter((prod) => {
    return prod.model.toLowerCase().includes(query.toLowerCase());
  });
  const matchedBrands = products.filter((prod) => {
    return prod.brand.toLowerCase().includes(query.toLowerCase());
  });
  const filteredRepetitions = new Set([...matchedModels, ...matchedBrands]);

  return Array.from(filteredRepetitions);
}

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
  const filteredProducts = filterProducts(products, query);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const generateProductTiles = () => {
    if (filteredProducts.length === 0) return <div className="productList--empty"></div>
    return filteredProducts.map((prod) => (
      <ProductTile key={prod.id} product={prod} />
    ));
  };

  return (
    <section className="productList">
      <div className="productList--searchBox">
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <div className="productList--showcase">{generateProductTiles()}</div>
    </section>
  );
};

export default ProductList;
