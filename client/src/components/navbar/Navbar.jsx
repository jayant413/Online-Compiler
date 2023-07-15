import React from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const selected_language = useSelector((state) => state.language);
  return (
    <div className="nav">
      <a href="/" className="nav_left">
        <img src={logo} alt="programiz_logo" className="nav_logo" />
      </a>
      <div className="nav_middle">
        <img
          src={selected_language.logo_coloured}
          alt=""
          className="nav_middle_logo"
        />
        <span className="nav_middle_name">{selected_language.name}</span>
      </div>
      <div className="nav_right">
        <button className="nav_right_btn" onClick={() => navigate("/logIn")}>
          LogIn
        </button>
        <button className="nav_right_btn" onClick={() => navigate("/signUp")}>
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
