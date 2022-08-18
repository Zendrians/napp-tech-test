import React from "react";
import MainSpecTile from "../MainSpecTile/MainSpecTile";
import MemoryIcon from "@mui/icons-material/Memory";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import "./DescriptionBox.scss";

const DescriptionBox = ({ prodDetails }) => {
  const cameraDetails = (camera) => {
    if (typeof camera === "string") return camera;
    let description = "";
    camera.forEach((element) => {
      description += element + " ";
    });
    return description;
  };

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
        <MainSpecTile>
          <MemoryIcon />
          <span>{prodDetails.cpu}</span>
        </MainSpecTile>
        <MainSpecTile>
          <CameraAltOutlinedIcon />
          <span>{cameraDetails(prodDetails.primaryCamera)}</span>
        </MainSpecTile>
        <MainSpecTile>
          <DeveloperModeIcon />
          <span>{prodDetails.os}</span>
        </MainSpecTile>
        <MainSpecTile>
          <Battery0BarIcon />
          <span>{prodDetails.battery}</span>
        </MainSpecTile>
      </div>
      <div className="descriptionBox--secondarySpecsBox">
        <div className="descriptionBox--secondarySpecsTile">
          <span>RAM:</span>
          <p>{prodDetails.ram}</p>
        </div>
        <div className="descriptionBox--secondarySpecsTile">
          <span>Screen Resolution:</span>
          <p>{prodDetails.displayResolution}</p>
        </div>
        <div className="descriptionBox--secondarySpecsTile">
          <span>Dimentions:</span>
          <p>{prodDetails.dimentions}</p>
        </div>
        <div className="descriptionBox--secondarySpecsTile">
          <span>Weight:</span>
          <p>{prodDetails.weight}</p>
        </div>
        {prodDetails.secondaryCmera && (
          <div className="descriptionBox--secondarySpecsTile">
            <span>Secondary Camera:</span>
            <p>{cameraDetails(prodDetails.secondaryCmera)}</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default DescriptionBox;
