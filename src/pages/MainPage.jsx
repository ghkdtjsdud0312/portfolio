import React from "react";
import MainScrollAni from "../component/main/MainScrollAni";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import ProjectWob from "../component/main/ProjectWob";
import ProjectCinepic from "../component/main/ProjectCinepic";
import ProjectClone from "../component/main/ProjectClone";
import ProjectWonderWalker from "../component/main/ProjectWonderWalker";
import EndPage from "../component/main/EndPage";

const MainPage = ({ activeSection }) => {
  return (
    <>
      <MainScrollAni />
      {/* 각 섹션들 */}
      <AboutMe active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <ProjectCinepic active={activeSection === "project"} />
      <ProjectWob active={activeSection === "project2"} />
      <ProjectWonderWalker active={activeSection === "project3"} />
      <ProjectClone active={activeSection === "project4"} />
      <EndPage />
    </>
  );
};

export default MainPage;
