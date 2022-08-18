import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsLayout from "../components/ProductDetailsLayout/ProductDetailsLayout";

const ProductDetailsContainer = () => {
  let { id } = useParams();
  console.log(id);
  return <ProductDetailsLayout />;
};

export default ProductDetailsContainer;
