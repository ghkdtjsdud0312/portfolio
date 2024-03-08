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
  .header {
    .menu {
      display: flex;
      align-items: center;
      h2 {
        font-weight: 600;
        margin-left: 10%;
        white-space: nowrap;
        cursor: pointer;
      }
      li {
        margin-right: 5%;
        button {
          border: none;
          border-bottom: 1px solid var(--GREY);
          font-weight: 600;
          font-size: 1.5em;
          cursor: pointer;
          white-space: nowrap;
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
  // scroll section마다 움직이게 함
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
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%20(1).png?alt=media&token=e022f188-4b00-4751-8c6e-59bda0797ffc"
                  alt="깃헙"
                  style={{ width: "45px" }}
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
