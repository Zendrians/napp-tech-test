import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsLayout from "../components/ProductDetailsLayout/ProductDetailsLayout";

const ProductDetailsContainer = () => {
  const [prodDetails, setProdDetails] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `https://front-test-api.herokuapp.com/api/product/${id}`
      );
      const fetechedProdDetails = res.data;
      setProdDetails(fetechedProdDetails);
    };
    try {
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!prodDetails) return <div></div>;

  return <ProductDetailsLayout prodDetails={prodDetails} />;
};

export default ProductDetailsContainer;
