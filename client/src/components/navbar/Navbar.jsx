import React from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        {/* <span className="logo">Online Compile</span> */}
        <img src={logo} alt="programiz-logo" className="nav-logo" />
      </div>
    </div>
  );
};

export default Navbar;
