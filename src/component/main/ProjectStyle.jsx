import { styled } from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 4000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h2 {
    background-color: #fff;
    padding: 70px;
    font-weight: 600;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 5%;
    .titlebox {
      border-radius: 10px;
      height: 400px;
      background-color: white;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      margin-right: 10%;
      text-align: center;
      div {
        font-size: 1.8em;
        padding: 5%;
        font-weight: 600;
        line-height: 35px;
      }
      p {
        font-size: 1.3em;
      }
      img {
        width: 40%;
      }
      .clickbtn {
        margin-top: 5%;
        button {
          width: 30%;
          font-size: 0.6em;
          border: none;
          background: transparent;
          cursor: pointer;
          &:hover {
            width: 40%;
            font-size: 0.8em;
            font-weight: 600;
            transition: all 0.3s;
          }
        }
      }
    }
    .textbox {
      margin-top: 10%;
      h3 {
        font-weight: 600;
        line-height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .text {
        border: 1px solid var(--DARKGREY);
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 5%;
        p {
          font-weight: 600;
          line-height: 25px;
        }
        span {
          display: flex;
          line-height: 30px;
        }
      }
      .open {
        // open 클래스를 추가하여 확장된 섹션을 표시
        display: block;
      }
      .closed {
        // closed 클래스를 추가하여 닫힌 섹션을 숨김
        display: none;
      }
    }
  }
`;

export default ProjectComp;
