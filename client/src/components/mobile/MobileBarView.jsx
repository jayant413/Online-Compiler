import React from "react";
import { BiRightArrow } from "react-icons/bi";
import "./mobileBarView.scss";

const MobileBarView = ({ selectedPannel, setSelectedPannel, compileCode }) => {
  return (
    <div className="mobile_area_bar flex md:hidden">
      <div className="mobile_area_bar_left">
        <button
          className={`mobile_area_bar_btn ${
            selectedPannel === "main" ? "selected_pannel_btn " : ""
          }`}
          onClick={() => {
            setSelectedPannel("main");
          }}
        >
          main.py
        </button>
        <button
          className={`mobile_area_bar_btn ${
            selectedPannel === "shell" ? "selected_pannel_btn " : ""
          }`}
          onClick={() => {
            setSelectedPannel("shell");
          }}
        >
          shell
        </button>
      </div>
      <div className="mobile_area_bar_right">
        <button
          className="mobile_area_bar_run_btn"
          onClick={() => {
            compileCode();
            if (authData.user) setSelectedPannel("shell");
          }}
        >
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
};

export default MobileBarView;
