import React from "react";
import MainBanner from "../component/main/MainBanner";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import Project from "../component/main/Project";
import Header from "../component/Layout/Header";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <AboutMe />
      <Skills />
      <Project />
    </>
  );
};

export default MainPage;
