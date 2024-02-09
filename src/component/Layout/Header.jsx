import { useState } from "react";
import AboutMe from "../main/AboutMe";
import Skills from "../main/Skills";
import Project from "../main/Project";
import styled from "styled-components";

const HeaderComp = styled.header`
  /* 헤더 스타일 */
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState(""); // 현재 활성화된 섹션

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderComp>
      <div className="container">
        <ul className="menu">
          <li>
            <button onClick={() => scrollToSection("about")}>About Me</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("project")}>Project</button>
          </li>
        </ul>
      </div>

      {/* 각 섹션들 */}
      <AboutMe active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <Project active={activeSection === "project"} />
    </HeaderComp>
  );
};

export default Header;
