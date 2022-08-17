import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductListLayout from "../components/ProductListLayout/ProductListLayout";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "https://front-test-api.herokuapp.com/api/product"
      );
      const fetchedProducts = res.data;
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  console.log(products);

  return <ProductListLayout products={products} />;
};

export default ProductListContainer;
