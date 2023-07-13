import React, { useState } from "react";
import "./sidebar.scss";

const SideBar = ({ languages }) => {
  // const [toggleLogo, setToggleLogo] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar_logo_name">
        {/* <ul className="sidebar_language_logos">
          {languages.map((l, i) => {
            return (
              <li key={i}>
                <img
                  src={l.logo_coloured}
                  alt=""
                  className={`language_logo ${
                    l.name == "Python" ? "selected_language" : ""
                  }`}
                />
              </li>
            );
          })}
        </ul> */}
        <ul className="sidebar_language_names">
          {languages.map((l, i) => {
            return (
              <li
                className={` ${l.name == "Python" ? "selected_language" : ""}`}
                key={i}
              >
                <span className="language_name">{l.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
