import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanuage } from "../../store/language";
import { languages } from "../../constants/languages";
import "./sidebar.scss";

const SideBar = () => {
  // const [toggleLogo, setToggleLogo] = useState(false);
  const selected_language = useSelector((state) => state.language);
  const dispatch = useDispatch();

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
                className={` 
                ${selected_language.id == l.id ? "selected_language" : ""}`}
                key={i}
                onClick={() => {
                  dispatch(
                    setLanuage({
                      name: l.name,
                      id: l.id,
                      snippet: l.snippet,
                      extension: l.extension,
                    })
                  );
                }}
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
