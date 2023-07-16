import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./homepage.scss";
import { useSelector } from "react-redux";
import Editor from "../../components/Editor/Editor";
import { BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const selected_language = useSelector((state) => state.language);
  const [selectedPannel, setSelectedPannel] = useState("main");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [codeSnippet, setCodeSnippet] = useState(
    atob(selected_language.snippet)
  );
  const [output, setOutput] = useState(">");
  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    setCodeSnippet(atob(selected_language.snippet));
  }, [selected_language.snippet]);

  useEffect(() => {
    const decode = window.atob(answer);
    setOutput(`>  ${decode}`);
  }, [answer]);

  const getAnswer = async (token) => {
    let response = await axios.get(
      `https://online-compiler-server.vercel.app/api/v1/submissions/${token}`
    );
    console.log(response);
    if (response.data.result.status.id === 3) {
      setAnswer(response.data.result.stdout);
      setLoading(false);
    } else {
      setTimeout(() => {
        getAnswer(token);
        console.log("Timeout Done 2");
      }, 3000);
    }
  };

  const compileCode = async () => {
    if (authData.user) {
      setLoading(true);
      const encode = window.btoa(codeSnippet);
      const submissionResponse = await axios.post(
        "https://online-compiler-server.vercel.app/api/v1/submissions",
        {
          language_id: selected_language.id,
          source_code: encode,
        }
      );
      let token = submissionResponse.data.token;

      setTimeout(() => {
        getAnswer(token);
        console.log("Timeout Done 1");
      }, 5000);
    } else {
      alert("Please Login first to execute the code. Thanks!");
    }
  };

  return (
    <>
      <Navbar loading={loading} />

      <div className="home">
        <SideBar setOutput={setOutput} setSelectedPannel={setSelectedPannel} />

        <div
          className={`code-area ${selectedPannel === "main" ? "show" : "hide"}`}
        >
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
          <div className="code-area-bar ">
            <span className="code-filename">
              main.{selected_language.file_extension}
            </span>
            <button className="code-run-btn" onClick={compileCode}>
              Run
            </button>
          </div>
          <div className={`code-snippet `}>
            <Editor codeSnippet={codeSnippet} setCodeSnippet={setCodeSnippet} />
          </div>
        </div>
        <div
          className={`output-area ${
            selectedPannel === "shell" ? "show" : "hide"
          }`}
        >
          {authData.user ? (
            ""
          ) : (
            <div className="login_layer">
              <span className="login_layer_msg">
                Please login to Run the code
              </span>
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
                  // compileCode();
                  setSelectedPannel("shell");
                }}
              >
                <BiRightArrow />
              </button>
            </div>
          </div>
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
      </div>
    </>
  );
};

export default HomePage;
