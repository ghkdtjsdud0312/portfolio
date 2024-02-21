import { styled } from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 3000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h2 {
    background-color: #fff;
    padding: 70px;
    font-weight: 600;
  }
  .container {
    padding-top: 5%;
    .titlebox {
      border-radius: 10px;
      background-color: white;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 7%;
        }
        div {
          font-size: 1.8em;
          padding: 2%;
          font-weight: 600;
        }
      }
      .textbox {
        font-size: 1em;
        h3 {
          text-align: center;
        }
        .text {
          line-height: 30px;
          h3 {
            font-size: 1.2em;
            font-weight: 600;
            text-align: center;
          }
          img {
            width: 25%;
          }
        }
        .clickbtn {
          text-align: center;
          padding: 30px;
          button {
            width: 20%;
            font-size: 1.6em;
            border: none;
            background: transparent;
            cursor: pointer;
            &:hover {
              font-size: 2em;
              font-weight: 600;
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
`;

export default ProjectComp;
