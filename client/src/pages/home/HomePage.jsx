import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import "./homepage.scss";
import { useSelector } from "react-redux";
import Editor from "../../components/Editor/Editor";

const HomePage = () => {
  const selected_language = useSelector((state) => state.language);
  const [codeSnippet, setCodeSnippet] = useState(
    atob(selected_language.snippet)
  );
  const [output, setOutput] = useState(">");

  useEffect(() => {
    setCodeSnippet(atob(selected_language.snippet));
  }, [selected_language.snippet]);

  const compileCode = async () => {
    const encode = window.btoa(codeSnippet);

    const submissionResponse = await axios.post(
      "http://localhost:8080/api/v1/submissions",
      {
        language_id: selected_language.id,
        source_code: encode,
      }
    );

    let token = submissionResponse.data.token;

    const outputResponse = await axios.get(
      `http://localhost:8080/api/v1/submissions/${token}`
    );
    // console.log(outputResponse);
    let answer;
    !outputResponse.data.result.stdout === "ée"
      ? (answer = outputResponse.data.result.stdout)
      : (answer = outputResponse.data.result.stderr);

    const decode = window.atob(answer);
    // console.log(decode);
    setOutput(`>  ${decode}`);
  };

  return (
    <div className="home">
      <SideBar />
      <div className="code-area">
        <div className="code-area-bar">
          <span className="code-filename">
            main.{selected_language.extension}
          </span>
          <button className="code-run-btn" onClick={compileCode}>
            Run
          </button>
        </div>
        <div className="code-snippet">
          {/* <textarea
            name="code-snippet"
            id="realtimeEditor"
            cols="30"
            rows="10"
            className=""
            value={codeSnippet}
            onChange={(e) => {
              setCodeSnippet(e.target.value);
            }}
          ></textarea> */}
          <Editor codeSnippet={codeSnippet} setCodeSnippet={setCodeSnippet} />
        </div>
      </div>
      <div className="output-area">
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
          rows="10"
          value={output}
          className="border-solid border-2 border-black"
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default HomePage;
