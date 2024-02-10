import React from "react";
import MainScrollAni from "../component/main/MainScrollAni";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import Project from "../component/main/Project";

const MainPage = ({ activeSection }) => {
  return (
    <>
      <MainScrollAni />
      {/* 각 섹션들 */}
      <AboutMe active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <Project active={activeSection === "project"} />
    </>
  );
};

export default MainPage;
