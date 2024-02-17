import React from "react";
import MainScrollAni from "../component/main/MainScrollAni";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import ProjectWob from "../component/main/ProjectWob";
import ProjectMyWob from "../component/main/ProjectMyWob";

const MainPage = ({ activeSection }) => {
  return (
    <>
      <MainScrollAni />
      {/* 각 섹션들 */}
      <AboutMe active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <ProjectWob active={activeSection === "project"} />
      <ProjectMyWob />
    </>
  );
};

export default MainPage;
