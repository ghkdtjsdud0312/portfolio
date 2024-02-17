import React from "react";
import MainScrollAni from "../component/main/MainScrollAni";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import ProjectWob from "../component/main/ProjectWob";
import ProjectMyWob from "../component/main/ProjectMyWob";
import ProjectCinepic from "../component/main/ProjectCinepic";
import ProjectMyCinepic from "../component/main/ProjectMyCinepic";
import ProjectClone from "../component/main/ProjectClone";
import ProjectWonderWalker from "../component/main/ProjectWonderWalker";

const MainPage = ({ activeSection }) => {
  return (
    <>
      <MainScrollAni />
      {/* 각 섹션들 */}
      <AboutMe active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <ProjectWob active={activeSection === "project"} />
      <ProjectMyWob />
      <ProjectCinepic />
      <ProjectMyCinepic />
      <ProjectClone />
      <ProjectWonderWalker />
    </>
  );
};

export default MainPage;
