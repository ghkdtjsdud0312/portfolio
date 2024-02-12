import { styled } from "styled-components";

const MainPageComp = styled.section`
  .container {
    height: 2000px;
    padding-top: 30%;
    .text {
      text-align: center;
      h2 {
        color: pink;
        font-size: 5em;
      }
    }
    .text2 {
      text-align: center;
      opacity: 0;
      transition: opacity 1.8s;
      line-height: 70px;
      p {
        font-size: 1em;
        color: pink;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-name: cursor;
      }
    }
  }
`;

export default MainPageComp;
