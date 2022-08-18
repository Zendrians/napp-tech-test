import React from "react";
import ActionsBox from "../ActionsBox/ActionsBox";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import "./DetailsView.scss";

const DetailsView = () => {
  return (
    <div className="detailsView">
      <div className="detailsView--imgCol">
        <figure className="detailsView--imgFigure"></figure>
      </div>
      <div className="detailsView--panelCol">
        <DescriptionBox />
        <ActionsBox />
      </div>
    </div>
  );
};

export default DetailsView;
