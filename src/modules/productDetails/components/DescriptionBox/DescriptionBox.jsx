import React from "react";
import "./DescriptionBox.scss";

const DescriptionBox = ({ prodDetails }) => {
  return (
    <div className="descriptionBox">
      <h5 className="descriptionBox--model">{prodDetails.model}</h5>
      <div className="descriptionBox--priceBox">
        <p className="descriptionBox--price">
          € {prodDetails.price.toString()}
        </p>
        <p>{prodDetails.brand}</p>
      </div>

      <div className="descriptionBox--mainSpecsBox">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </div>
    </div>
  );
};

export default DescriptionBox;
