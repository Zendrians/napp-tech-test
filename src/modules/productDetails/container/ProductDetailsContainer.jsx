import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  cacheApiData,
  getValidatedCache,
} from "utils/localStorage/localStorageAccess";
import ProductDetailsLayout from "../components/ProductDetailsLayout/ProductDetailsLayout";

const ProductDetailsContainer = () => {
  const [prodDetails, setProdDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `https://front-test-api.herokuapp.com/api/product/${id}`
      );
      const fetechedProdDetails = res.data;
      setProdDetails(fetechedProdDetails);
      cacheApiData(fetechedProdDetails.id, fetechedProdDetails);
    };

    try {
      const cachedData = getValidatedCache(id);
      if (cachedData) {
        setProdDetails(cachedData);
      } else {
        fetchProduct();
      }
    } catch (error) {
      setIsError(true);
    }
  }, []);

  if (isError) return <div>An error ocurred</div>;
  if (!prodDetails) return <div></div>;

  return <ProductDetailsLayout prodDetails={prodDetails} />;
};

export default ProductDetailsContainer;
