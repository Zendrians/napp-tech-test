import React from "react";
import { Link } from "react-router-dom";
import ActionsBox from "../ActionsBox/ActionsBox";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./DetailsView.scss";

const DetailsView = ({ prodDetails }) => {
  return (
    <div className="detailsView">
      <div className="detailsView--imgCol">
        <figure className="detailsView--imgFigure">
          <Link to="/">
            <span className="detailsView--backLink">
              <ArrowBackIosIcon fontSize="small" /> Back to List
            </span>
          </Link>
          <img
            className="detailsView--img"
            src={prodDetails.imgUrl}
            alt="Phone Photo"
          />
        </figure>
      </div>
      <div className="detailsView--panelCol">
        <DescriptionBox prodDetails={prodDetails} />
        <ActionsBox prodDetails={prodDetails} />
      </div>
    </div>
  );
};

export default DetailsView;
