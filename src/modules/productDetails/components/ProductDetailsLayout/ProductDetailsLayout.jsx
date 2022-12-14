import React from "react";
import NavBar from "shared/components/NavBar/NavBar";
import DetailsView from "../DetailsView/DetailsView";
import "./ProductDetailsLayout.scss";

const ProductDetailsLayout = ({ prodDetails }) => {
  return (
    <main className="productDetailsLayout">
      <NavBar />
      <section className="productDetailsLayout--detailsShowcase">
        <DetailsView prodDetails={prodDetails} />
      </section>
    </main>
  );
};

export default ProductDetailsLayout;
