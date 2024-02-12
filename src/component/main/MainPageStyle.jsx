import { styled } from "styled-components";
import mainBg from "../../images/main.jpg";

const MainPageComp = styled.section`
  .container {
    line-height: 70px;
    position: relative;
    height: 1000px;
    padding-top: 30%;
    overflow: hidden; /* 자식 요소의 넘치는 부분을 숨김 */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${mainBg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      filter: blur(5px); /* 배경을 5px만큼 흐리게 */
      z-index: -1; /* 텍스트보다 뒤에 배치 */
    }
    .text {
      text-align: center;

      h2 {
        color: white;
        font-size: 5em;
      }
    }
    .text2 {
      text-align: center;
      opacity: 0;
      transition: opacity 1.8s;
      padding-top: 20px;
      h3 {
        color: white;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-name: cursor;
      }
      p {
        font-size: 1em;
        color: white;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-name: cursor;
        border: 1px solid white;
        margin: 20px auto;
        width: 30%;
      }
      span {
        font-size: 2em;
        color: white;
      }
    }
  }
`;

export default MainPageComp;
