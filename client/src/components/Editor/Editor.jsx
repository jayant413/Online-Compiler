import "./editor.scss";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useSelector } from "react-redux";

const Editor = ({ codeSnippet, setCodeSnippet }) => {
  const selected_language = useSelector((state) => state.language);
  return (
    <div>
      <CodeMirror
        height="82vh"
        width="100%"
        theme={darcula}
        className="codeMirror_editor"
        value={codeSnippet}
        onChange={(value) => setCodeSnippet(value)}
        extensions={[
          selected_language.name === "Python"
            ? langs.python()
            : selected_language.name === "C"
            ? langs.c()
            : selected_language.name === "CPP"
            ? langs.cpp()
            : selected_language.name === "Java"
            ? langs.java()
            : selected_language.name === "C#"
            ? langs.csharp()
            : selected_language.name === "Go"
            ? langs.go()
            : selected_language.name === "JavaScript"
            ? langs.javascript()
            : selected_language.name === "PHP"
            ? langs.php()
            : selected_language.name === "R"
            ? langs.r()
            : selected_language.name === "Rust"
            ? langs.rust()
            : "",
        ]}
      />
    </div>
  );
};

export default Editor;
