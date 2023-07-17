import React from "react";
import { Editor, MobileBarView } from "../index";
import "./codeArea.scss";

const CodeArea = ({
  selectedPannel,
  compileCode,
  setSelectedPannel,
  codeSnippet,
  setCodeSnippet,
  file_extension,
}) => {
  return (
    <div className={`code-area ${selectedPannel === "main" ? "show" : "hide"}`}>
      {/* mobile bar view */}
      <MobileBarView
        compileCode={compileCode}
        selectedPannel={selectedPannel}
        setSelectedPannel={setSelectedPannel}
      />

      {/* code area  */}
      <div className="code-area-bar ">
        <span className="code-filename">main.{file_extension}</span>
        <button className="code-run-btn" onClick={compileCode}>
          Run
        </button>
      </div>
      <div className={`code-snippet `}>
        <Editor codeSnippet={codeSnippet} setCodeSnippet={setCodeSnippet} />
      </div>
    </div>
  );
};

export default CodeArea;
