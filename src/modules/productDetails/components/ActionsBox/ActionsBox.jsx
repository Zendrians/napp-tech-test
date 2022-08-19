import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import "./ActionsBox.scss";
import { postToApi } from "../../../../utils/client/axiosClient";

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

  const handleAddBtn = async () => {
    const productToAdd = {
      id: prodDetails.id,
      colorCode: colorCode,
      storageCode: storageCode,
    };
    const res = await postToApi(
      "https://front-test-api.herokuapp.com/api/cart",
      productToAdd
    );
    console.log(res.data);
  };

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

        <Button
          size="large"
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddBtn}
          className="actionsBox--addBtn"
        >
          Add to Cart
        </Button>
      </form>
    </div>
  );
};

export default ActionsBox;
