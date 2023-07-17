import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Navbar, SideBar, CodeArea, OutputArea } from "../../components";
import axios from "axios";
import "./homepage.scss";

const HomePage = () => {
  const selected_language = useSelector((state) => state.language);
  const authData = useSelector((state) => state.auth);
  const [selectedPannel, setSelectedPannel] = useState("main");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [output, setOutput] = useState(">");
  const [codeSnippet, setCodeSnippet] = useState(
    atob(selected_language.snippet)
  );

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

    if (response.data.result.status.id === 3) {
      setAnswer(response.data.result.stdout);
      setLoading(false);
      return;
    } else if (response.data.result.status.id > 3) {
      setAnswer(response.data.result.stderr);
      setLoading(false);
      return;
    } else {
      setTimeout(() => {
        getAnswer(token);
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
      }, 5000);
    } else {
      alert("Please Login first to execute the code. Thanks!");
    }
  };

  return (
    <>
      {/* navbar */}
      <Navbar loading={loading} />

      <div className="home">
        {/* sidebar */}
        <SideBar setOutput={setOutput} setSelectedPannel={setSelectedPannel} />

        {/* code area  */}
        <CodeArea
          compileCode={compileCode}
          selectedPannel={selectedPannel}
          setSelectedPannel={setSelectedPannel}
          codeSnippet={codeSnippet}
          setCodeSnippet={setCodeSnippet}
          file_extension={selected_language.file_extension}
        />

        {/* output area  */}
        <OutputArea
          compileCode={compileCode}
          selectedPannel={selectedPannel}
          setSelectedPannel={setSelectedPannel}
          setOutput={setOutput}
          output={output}
        />
      </div>
    </>
  );
};

export default HomePage;
