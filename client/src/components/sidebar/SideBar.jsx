import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanuage } from "../../store/slices/language";
import { languages } from "../../constants/languages";
import { FaPython, FaRust, FaJava } from "react-icons/fa";
import { TbBrandCpp, TbBrandJavascript } from "react-icons/tb";
import { SiCsharp, SiPhp } from "react-icons/si";
import { MdOutlineSegment } from "react-icons/md";
import { BsRCircleFill, BsFillCCircleFill } from "react-icons/bs";

import "./sidebar.scss";

const SideBar = ({ setOutput, setSelectedPannel }) => {
  // const [toggleLogo, setToggleLogo] = useState(false);
  const selected_language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  return (
    <div className="sidebar ">
      <ul className="sidebar_language_names ">
        {languages.map((l, i) => {
          return (
            <li
              className={`
                ${selected_language.id == l.id ? "selected_language " : ""}`}
              key={i}
              onClick={() => {
                setSelectedPannel("main");
                setOutput(">");
                dispatch(
                  setLanuage({
                    name: l.name,
                    id: l.id,
                    snippet: l.snippet,
                    file_extension: l.file_extension,
                    logo_coloured: l.logo_coloured,
                  })
                );
              }}
            >
              <span className="language_logo flex">
                {l.name === "Python" ? (
                  <FaPython />
                ) : l.name === "Rust" ? (
                  <FaRust />
                ) : l.name === "CPP" ? (
                  <TbBrandCpp />
                ) : l.name === "C#" ? (
                  <SiCsharp />
                ) : l.name === "Java" ? (
                  <FaJava />
                ) : l.name === "JavaScript" ? (
                  <TbBrandJavascript />
                ) : l.name === "Go" ? (
                  <MdOutlineSegment />
                ) : l.name === "PHP" ? (
                  <SiPhp />
                ) : l.name === "R" ? (
                  <BsRCircleFill />
                ) : l.name === "C" ? (
                  <BsFillCCircleFill />
                ) : (
                  ""
                )}

                <span className="md:hidden language_logo_go">
                  {l.name === "Go" ? "Go" : ""}
                </span>
              </span>
              <span className="language_name  ">{l.name}</span>
            </li>
          );
        })}
        <a
          href="https://jayantsawarkar.vercel.app/"
          target="_blank"
          className="text-[10px] font-normal cursor-default m-2 text-justify md:flex hidden "
        >
          Programiz &copy; Cloned By Jayant{" "}
        </a>
      </ul>
    </div>
  );
};

export default SideBar;
