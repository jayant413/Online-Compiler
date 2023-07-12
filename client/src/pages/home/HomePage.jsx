import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import "./homepage.scss";

const HomePage = () => {
  const [codeSnippet, setCodeSnippet] = useState("print(5)");
  const [output, setOutput] = useState(">");

  const compileCode = async () => {
    const encode = window.btoa(codeSnippet);
    // const submissionResponse = await axios.post(
    //   "http://localhost:8080/api/v1/submissions",
    //   {
    //     language_id: 92,
    //     source_code: encode,
    //   }
    // );

    // let token = submissionResponse.data.token;

    // const outputResponse = await axios.get(
    //   `http://localhost:8080/api/v1/submissions/${token}`
    // );
    const decode = window.atob(encode);
    // setOutput(`> ${outputResponse.data.result.stdout}`);
    setOutput(`> ${encode} , ${decode}`);
    // console.log(outputResponse.data);
  };

  return (
    <div className="home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="code-area">
        <div className="code-area-bar">
          <button className="code-run-btn" onClick={compileCode}>
            Run
          </button>
        </div>
        <div className="code-snippet">
          <textarea
            name="code-snippet"
            id=""
            cols="30"
            rows="10"
            className=""
            value={codeSnippet}
            onChange={(e) => {
              setCodeSnippet(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="partision"></div>
      <div className="output-area">
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
