import { useState } from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 다른 컨텐츠 위에 위치하도록 함 */
  .container {
    padding-top: 30px;
    .menu {
      display: flex;
      justify-content: start; /* 왼쪽 정렬로 변경 */
      flex-direction: row;
      h2 {
        font-weight: 600;
        margin-right: auto; /* 오른쪽으로 이동 */
      }
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
          <h2>SeonYoung's Portfolio</h2>
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
