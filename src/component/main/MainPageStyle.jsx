import { styled } from "styled-components";
import mainBg from "../../images/cloud.jpg";

const MainPageComp = styled.section`
  line-height: 70px;
  position: relative;
  height: 900px;
  padding-top: 20%;
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
    filter: blur(8px); /* 배경을 5px만큼 흐리게 */
    z-index: -1; /* 텍스트보다 뒤에 배치 */
  }
  .container {
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
        &:hover {
          color: pink;
          border: 1px solid pink;
          cursor: pointer;
        }
      }
      span {
        font-size: 2em;
        color: white;
      }
      .loadingBar {
        position: relative;
        width: 150px;
        height: 20px;

        top: 45%;
        top: -webkit-calc(50% - 10px);
        top: calc(50% - 10px);
        left: 25%;
        left: -webkit-calc(50% - 75px);
        left: calc(50% - 75px);

        &::before {
          content: "";
          position: absolute;
          background-color: #fff;
          top: -5px;
          left: 0px;
          height: 30px;
          width: 0px;
          z-index: 0;
          opacity: 1;
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          -webkit-animation: loadingBar 10s ease-in-out infinite;
          animation: loadingBar 10s ease-in-out infinite;
        }

        &::after {
          content: "LOADING ...";
          color: #333;
          font-weight: 200;
          font-size: 16px;
          position: absolute;
          width: 100%;
          height: 20px;
          line-height: 20px;
          left: 0;
          top: 0;
          z-index: 1;
        }
      }
      @-webkit-keyframes loadingBar {
        0% {
          width: 0px;
        }
        70% {
          width: 100%;
          opacity: 1;
        }
        90% {
          opacity: 0;
          width: 100%;
        }
        100% {
          opacity: 0;
          width: 0px;
        }
      }

      @keyframes loadingBar {
        0% {
          width: 0px;
        }
        70% {
          width: 100%;
          opacity: 1;
        }
        90% {
          opacity: 0;
          width: 100%;
        }
        100% {
          opacity: 0;
          width: 0px;
        }
      }
    }
  }
`;

export default MainPageComp;
