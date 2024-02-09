import { useState } from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
  .container {
    padding-top: 30px;
    .menu {
      display: flex;
      justify-content: end;
      li {
        margin-right: 30px;
        button {
          border: none;
          background-color: white;
          border-bottom: 1px solid var(--GREY);
          font-weight: 600;
          font-size: 1.5em;
          cursor: pointer;
          &:hover {
            color: var(--DARKGREY);
          }
        }
      }
    }
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState(""); // 현재 활성화된 섹션

  // scroll section마다 움직이게 함
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
    </HeaderComp>
  );
};

export default Header;
