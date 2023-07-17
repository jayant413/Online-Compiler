import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MobileBarView } from "../index";
import "./outputArea.scss";

const OutputArea = ({
  selectedPannel,
  compileCode,
  setSelectedPannel,
  setOutput,
  output,
}) => {
  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authData.user) {
      setOutput(">");
    }
  }, [authData.user]);
  return (
    <div
      className={`output-area ${selectedPannel === "shell" ? "show" : "hide"}`}
    >
      {/* authorize login layer */}
      {authData.user ? (
        ""
      ) : (
        <div className="login_layer">
          <span className="login_layer_msg">Please login to Run the code</span>
          <div className="login_layer_btns">
            <button
              className="login_layer_btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="login_layer_btn"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      )}
      {/* mobile bar view */}
      <MobileBarView
        compileCode={compileCode}
        selectedPannel={selectedPannel}
        setSelectedPannel={setSelectedPannel}
      />

      <div className="output-area-bar">
        <span className="output-area-title">Shell</span>
        <button className="output-clear-btn" onClick={() => setOutput(">")}>
          Clear
        </button>
      </div>
      <textarea
        name="code-output"
        id=""
        cols="30"
        rows="19"
        value={output}
        className={`border-solid border-2 border-black `}
        readOnly
      ></textarea>
    </div>
  );
};

export default OutputArea;
