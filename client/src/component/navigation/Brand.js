import React from "react";
// import { Link, BrowserRouter } from "react-router-dom";
import "./Brand.scss";

import logo from "../../assets/Logo/TED_wordmark.svg";

const Brand = () => {
  return (
    <a className="logo" href="/inventory">
      <img className="brandlogo" src={logo} alt="Company Logo" />
    </a>
  );
};
export default Brand;
