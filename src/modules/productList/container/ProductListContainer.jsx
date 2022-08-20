import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  cacheApiData,
  getValidatedCache,
} from "utils/localStorage/localStorageAccess";
import ProductListLayout from "../components/ProductListLayout/ProductListLayout";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "https://front-test-api.herokuapp.com/api/product"
      );
      const fetchedProducts = res.data;
      setProducts(fetchedProducts);
      cacheApiData("prodList", fetchedProducts);
    };

    try {
      const cachedData = getValidatedCache("prodList");
      if (cachedData) {
        setProducts(cachedData);
      } else {
        fetchProducts();
      }
    } catch (error) {
      setIsError(true);
    }
  }, []);

  if (isError) return <div>An error ocurred</div>;
  
  return <ProductListLayout products={products} />;
};

export default ProductListContainer;
