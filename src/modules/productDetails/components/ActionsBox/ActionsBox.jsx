import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import "./ActionsBox.scss";

const ActionsBox = ({ prodDetails }) => {
  const [storageCode, setStorageCode] = useState(
    prodDetails.options.storages[0].code
  );
  const [colorCode, setColorCode] = useState(
    prodDetails.options.colors[0].code
  );

  const generateStorageBtns = () => {
    return prodDetails.options.storages.map((option) => {
      return (
        <ToggleButton key={option.code} value={option.code}>
          <span>{option.name}</span>
        </ToggleButton>
      );
    });
  };

  const generateColorBtns = () => {
    return prodDetails.options.colors.map((option) => {
      return (
        <ToggleButton key={option.code} value={option.code}>
          <span>{option.name}</span>
        </ToggleButton>
      );
    });
  };

  const handleChangeStorageCode = (event, newValue) => {
    if (!newValue) return;
    setStorageCode(newValue);
  };

  const handleChangeColorCode = (event, newValue) => {
    if (!newValue) return;
    setColorCode(newValue);
  };

  console.log(colorCode);

  return (
    <div className="actionsBox">
      <form className="actionsBox--form">
        <div className="actionsBox--selectorBox">
          <ToggleButtonGroup
            value={storageCode}
            exclusive
            onChange={handleChangeStorageCode}
            aria-label="Storage Selection"
          >
            {generateStorageBtns()}
          </ToggleButtonGroup>
        </div>
        <div className="actionsBox--selectorBox">
          <ToggleButtonGroup
            value={colorCode}
            exclusive
            onChange={handleChangeColorCode}
            aria-label="Color Selection"
          >
            {generateColorBtns()}
          </ToggleButtonGroup>
        </div>
      </form>
    </div>
  );
};

export default ActionsBox;
