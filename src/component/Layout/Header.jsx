import { useState } from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
  position: fixed;
  top: 25px;
  left: -100px;
  width: 100%;
  z-index: 999; /* 다른 컨텐츠 위에 위치하도록 함 */
  .container {
    .menu {
      display: flex; /* 메뉴 항목들을 가로로 배열 */
      h2 {
        font-weight: 600;
        margin-right: auto;
      }
      li {
        margin: 0 auto;
        button {
          border: none;
          border-bottom: 1px solid var(--GREY);
          font-weight: 600;
          font-size: 1.5em;
          cursor: pointer;
          background: transparent; /* 배경색 투명하게 설정 */
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
            <h2>SeonYoung's Portfolio</h2>
          </li>
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
