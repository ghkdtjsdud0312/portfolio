import { styled } from "styled-components";
import mainBg from "../../images/cloud.jpg";

const MainPageComp = styled.section`
  position: relative;
  height: 1000px;
  padding-top: 7%;
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
    background-color: rgba(212, 228, 237, 0.5);
    border-radius: 10px;
    padding: 120px 0;
    .text {
      text-align: center;
      line-height: 80px;
      h2 {
        color: white;
        font-size: 5em;
      }
    }
    .text2 {
      text-align: center;
      line-height: 40px;
      opacity: 0;
      transition: opacity 1.8s;
      padding-top: 20px;
      h3 {
        color: white;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-name: cursor;
        line-height: 60px;
      }
      span {
        font-size: 1.7em;
        color: #707070;
        line-height: 60px;
      }
    }
    .button {
      text-align: center;
      padding-top: 5%;
      button {
        border: none;
        background-color: #c4e0ef;
        border-radius: 20px;
        padding: 20px;
        font-weight: 600;
        font-size: 1.5em;
        width: 35%;
        cursor: pointer;
      }
    }
  }
`;

export default MainPageComp;
