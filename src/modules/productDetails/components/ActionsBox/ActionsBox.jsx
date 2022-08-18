import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import "./ActionsBox.scss";

const ActionsBox = ({ prodDetails }) => {
  const [storageCode, setStorageCode] = useState(
    prodDetails.options.storages[0].code
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

  const handleChangeStorageCode = (event, newValue) => {
    if (!newValue) return;
    setStorageCode(newValue);
  };

  console.log(storageCode);

  return (
    <div className="actionsBox">
      <form className="actionsBox--form">
        <div className="actionsBox--selectorBox">
          <ToggleButtonGroup
            value={storageCode}
            exclusive
            onChange={handleChangeStorageCode}
            aria-label="text alignment"
          >
            {generateStorageBtns()}
          </ToggleButtonGroup>
        </div>
        <div className="actionsBox--selectorBox">
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <span>Option1</span>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <span>Option2</span>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <span>Option3</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </form>
    </div>
  );
};

export default ActionsBox;
