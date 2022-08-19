import IpsumLogo from "assets/reactSvg/ipsumLogo";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import MUILink from "@mui/material/Link";
import "./NavBar.scss";

const NavBar = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/").filter((x) => x);

  const generateCrumbs = () => {
    const rawCrumbs = pathArr.map((fragment, index) => {
      const pathUrl = `/${pathArr.slice(0, index + 1).join("/")}${
        fragment === "details" ? `/${pathArr[index + 1]}` : ""
      }`;
      return (
        <Link key={index} to={pathUrl}>
          <span className="navBar--customLink">{fragment}</span>
        </Link>
      );
    });
    const filteredCrumbs = rawCrumbs.filter((crumb, index) => index !== 1);
    return filteredCrumbs;
  };

  return (
    <nav className="navBar">
      <div className="navBar--navBox">
        <Link to="/">
          <figure>
            <IpsumLogo />
          </figure>
        </Link>
        <div className="navBar--breadCrumbsBox">
          <Breadcrumbs
            separator={
              <NavigateNextOutlinedIcon
                style={{ color: "#fff" }}
                fontSize="small"
              />
            }
            aria-label="breadcrumb"
          >
            <Link to="/">
              <span className="navBar--customLink">Home</span>
            </Link>
            {generateCrumbs()}
          </Breadcrumbs>
        </div>
        <div className="navBar--cartBox">
          <ShoppingCartOutlinedIcon
            fontSize="large"
            style={{ color: "#ff6900" }}
          />
          <span className="navBar--cartQuantity">0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
