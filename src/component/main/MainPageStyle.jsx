import { styled } from "styled-components";

const MainPageComp = styled.section`
  .container {
    background-color: var(--BLACK);
    height: 6000px;
    div {
      margin-top: 1500px;
      text-align: center;
      opacity: 0;
      transition: opacity 1.8s;
      h1 {
        color: pink;
        font-size: 5em;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-name: cursor;
      }
    }
  }
`;

export default MainPageComp;
