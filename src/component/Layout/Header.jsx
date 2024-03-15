import styled from "styled-components";
import mainBg from "../../images/녹색배경.jpg";

const HeaderComp = styled.header`
  position: fixed;
  /* background-image: url(${mainBg}); */
  left: 0;
  top: 0;
  /* height: 740px; */
  .header {
    flex-grow: 1;
    background-image: url(${mainBg});
    height: 740px;
    width: 240px;
    text-align: center;
    .menu {
      h2 {
        font-size: 1.2em;
        font-weight: 600;
        line-height: 100px;
        cursor: pointer;
      }
      li {
        line-height: 60px;
        button {
          border: none;
          border-bottom: 1px solid var(--GREY);
          font-weight: 400;
          font-size: 1em;
          cursor: pointer;
          background: transparent;
          &:hover {
            color: var(--DARKGREY);
          }
        }
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 150px;
      li {
        margin: 0 5px;
        img {
          cursor: pointer;
        }
      }
    }
    .copyRight {
      p {
        font-size: 0.4em;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .header .menu h2 {
      font-size: 1.2em;
      margin-left: 5%;
    }
    .header .menu li {
      margin-right: 2.5%;
    }
    .header .menu li button {
      font-size: 1em;
    }
    .header .menu2 li {
      width: 35%;
    }
  }
  @media screen and (max-width: 480px) {
    .header .menu h2 {
      font-size: 0.7em;
    }
    .header .menu li {
      margin-right: 0.7%;
    }
    .header .menu li button {
      font-size: 0.7em;
    }
    .header .menu2 li {
      width: 15%;
    }
  }
`;

const Header = () => {
  // 각 섹션으로 스크롤 함수
  const scrollToRef = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeaderComp>
      <div className="header">
        <ul className="menu">
          <li>
            <h2 onClick={() => scrollToRef("main")}>SeonYoung's Portfolio</h2>
          </li>
          <li>
            <button onClick={() => scrollToRef("about")}>About Me</button>
          </li>
          <li>
            <button onClick={() => scrollToRef("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToRef("project")}>Project</button>
          </li>
          <li>
            <button onClick={() => scrollToRef("project2")}>Project2</button>
          </li>
          <li>
            <button onClick={() => scrollToRef("project3")}>Project3</button>
          </li>
          <li>
            <button onClick={() => scrollToRef("project4")}>Project4</button>
          </li>
          <ul className="icons">
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
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8-removebg-preview.png?alt=media&token=59627e2c-f8db-4bc2-b8c5-de3c2da09b12"
                  alt="깃헙"
                  style={{ width: "50px" }}
                />
              </a>
            </li>
          </ul>
          <div className="copyRight">
            <p> CopyRight © 2024</p>
            <p> Hwang SeonYoung All Rights Reserved.</p>
          </div>
        </ul>
      </div>
    </HeaderComp>
  );
};

export default Header;
