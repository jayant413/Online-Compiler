import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import mobile_logo from "../../assets/images/title_logo.png";
import { BsPersonLinesFill, BsPersonFillAdd } from "react-icons/bs";
import { BiLogOut, BiLogIn } from "react-icons/bi";
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
        <span className="nav_right_username ">
          {authData ? authData?.user?.name : ""}
        </span>
        <div
          onClick={() => {
            setProfileMenu(!profileMenu);
          }}
          className="nav_right_profile"
        >
          <img src={profile} alt="profile" className="profile_img" />
          {profileMenu ? (
            <div className="profile_menu">
              <ul className="font-semibold">
                {authData?.user ? (
                  <>
                    <li className="flex md:hidden profile_username">
                      {authData?.user?.name}
                    </li>
                    <li onClick={() => alert("Work In Progress")}>
                      {" "}
                      <BsPersonLinesFill />
                      Your Profile
                    </li>
                    <li onClick={() => handleLogout()}>
                      <BiLogOut />
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li onClick={() => navigate("/login")}>
                      {" "}
                      <BiLogIn />
                      Login
                    </li>
                    <li onClick={() => navigate("/signup")}>
                      {" "}
                      <BsPersonFillAdd /> Signup
                    </li>
                  </>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
