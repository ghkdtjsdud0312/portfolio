import { useState } from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
  position: fixed;
  background-color: #fff;
  height: 80px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 다른 컨텐츠 위에 위치하도록 함 */
  padding-top: 1%;
  .container {
    .menu {
      display: flex;
      align-items: center;
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
    .menu2 {
      display: flex;
      align-items: center;
      li {
        margin-left: 25%;
        img {
          cursor: pointer;
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
          <ul className="menu2">
            <li>
              <a
                href="https://www.notion.so/KH-c6a74a27c5e14a40bd5ebf1cb81e0491"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%82%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB2.svg?alt=media&token=18b8ae1c-bf15-49d3-873c-eeec51768b4e"
                  alt="notion"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ghkdtjsdud0312"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                  alt="github"
                  style={{ width: "40%" }}
                />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </HeaderComp>
  );
};

export default Header;
