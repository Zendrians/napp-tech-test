import IpsumLogo from "assets/reactSvg/ipsumLogo";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar--navBox">
        <Link to="/">
          <figure>
            <IpsumLogo />
          </figure>
        </Link>
        <div className="navBar--breadCrumbsBox">Bread</div>
        <div className="navBar--cartBox">
          <ShoppingCartOutlinedIcon fontSize="large" style={{ color: "#ff6900" }} />
          <span className="navBar--cartQuantity">1</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
