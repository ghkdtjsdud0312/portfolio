import React from "react";
import MainScrollAni from "../component/main/MainScrollAni";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import ProjectWob from "../component/main/ProjectWob";
import ProjectCinepic from "../component/main/ProjectCinepic";
import ProjectClone from "../component/main/ProjectClone";

const MainPage = ({ activeSection }) => {
  return (
    <>
      <MainScrollAni />
      {/* 각 섹션들 */}
      <AboutMe active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <ProjectWob active={activeSection === "project"} />
      <ProjectCinepic />
      <ProjectClone />
    </>
  );
};

export default MainPage;
