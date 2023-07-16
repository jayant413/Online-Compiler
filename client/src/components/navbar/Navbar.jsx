import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import mobile_logo from "../../assets/images/title_logo.png";
import { BsPersonLinesFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthData } from "../../store/slices/auth";
import spinner from "../../assets/images/spinner.gif";
import profile from "../../assets/images/profile.png";

const Navbar = ({ loading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileMenu, setProfileMenu] = useState(false);
  const selected_language = useSelector((state) => state.language);
  const authData = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(
      setAuthData({
        user: null,
        token: "",
      })
    );
    localStorage.removeItem("auth_online_compiler");
  };
  return (
    <div className="nav">
      <Link to="/" className="nav_left">
        <img
          src={logo}
          alt="programiz_logo"
          className="nav_logo md:flex hidden"
        />
        <img
          src={mobile_logo}
          alt="programiz_logo"
          className="mobile_nav_logo flex md:hidden"
        />
      </Link>
      <div className="nav_middle">
        <img
          src={selected_language.logo_coloured}
          alt=""
          className="nav_middle_logo"
        />
        <span className="nav_middle_name">{selected_language.name}</span>
        {loading ? (
          <img src={spinner} alt="" className="nav_middle_logo" />
        ) : (
          ""
        )}
      </div>
      <div className="nav_right">
        {authData.user ? (
          <>
            <span className="nav_right_username ">{authData.user.name}</span>
            <div
              onClick={() => {
                setProfileMenu(!profileMenu);
              }}
            >
              <img src={profile} alt="profile" className="profile_img" />
              {profileMenu ? (
                <div className="profile_menu">
                  <ul className="font-semibold">
                    <li className="flex md:hidden">{authData.user.name}</li>
                    <li onClick={() => alert("Work In Progress")}>
                      {" "}
                      <BsPersonLinesFill />
                      Your Profile
                    </li>
                    <li>
                      <button onClick={() => handleLogout()}>
                        <BiLogOut />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <>
            <button
              className="nav_right_btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="nav_right_btn"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
