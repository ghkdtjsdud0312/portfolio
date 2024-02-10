import { styled } from "styled-components";

const MainPageComp = styled.section`
  .container {
    background-color: var(--BLACK);
    height: 6000px;
    div {
      margin-top: 1500px;
      text-align: center;
      opacity: 0;
      transition: opacity 0.8s;
      h1 {
        color: red;
        font-size: 3em;
      }
    }
  }
`;

export default MainPageComp;
