import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./homepage.scss";
import { useSelector } from "react-redux";
import Editor from "../../components/Editor/Editor";
import { BiRightArrow } from "react-icons/bi";

const HomePage = () => {
  const selected_language = useSelector((state) => state.language);
  const [selectedPannel, setSelectedPannel] = useState("main");
  const [answer, setAnswer] = useState("");
  const [codeSnippet, setCodeSnippet] = useState(
    atob(selected_language.snippet)
  );
  const [output, setOutput] = useState(">");

  useEffect(() => {
    setCodeSnippet(atob(selected_language.snippet));
  }, [selected_language.snippet]);

  useEffect(() => {
    const decode = window.atob(answer);
    setOutput(`>  ${decode}`);
  }, [answer]);

  const getAnswer = async (token) => {
    let response = await axios.get(
      `http://localhost:8080/api/v1/submissions/${token}`
    );
    if (response.data.result.status.id === 3) {
      setAnswer(response.data.result.stdout);
    } else {
      getAnswer(token);
    }
  };

  /* const compileCode = async () => {
    const encode = window.btoa(codeSnippet);
    const submissionResponse = await axios.post(
      "http://localhost:8080/api/v1/submissions",
      {
        language_id: selected_language.id,
        source_code: encode,
      }
    );
    let token = submissionResponse.data.token;
    getAnswer(token);
  };
*/
  return (
    <>
      <Navbar />

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
                  // compileCode();
                  setSelectedPannel("shell");
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
            <button
              className="code-run-btn"
              // onClick={compileCode}
              onClick={() => {
                setOutput(
                  `> Enable the compileCode() function to run the code`
                );
              }}
            >
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
