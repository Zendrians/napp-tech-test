import React from "react";
import ActionsBox from "../ActionsBox/ActionsBox";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import "./DetailsView.scss";

const DetailsView = ({ prodDetails }) => {
  return (
    <div className="detailsView">
      <div className="detailsView--imgCol">
        <figure className="detailsView--imgFigure">
          <img className="detailsView--img" src={prodDetails.imgUrl} alt="Phone Photo" />
        </figure>
      </div>
      <div className="detailsView--panelCol">
        <DescriptionBox prodDetails={prodDetails} />
        <ActionsBox />
      </div>
    </div>
  );
};

export default DetailsView;
