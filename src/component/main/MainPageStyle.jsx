import { styled } from "styled-components";
import mainBg from "../../images/녹색배경.jpg";

const MainPageComp = styled.section`
  background-image: url(${mainBg});
  width: 100%;
  margin-left: 20%;
  .container {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    padding: 120px 0;
    @media screen and (max-width: 768px) {
      margin-top: 14%;
    }
    @media screen and (max-width: 480px) {
      margin-top: 20%;
    }
    .text {
      text-align: center;
      line-height: 80px;
      h2 {
        font-size: 5em;
        color: #fff;
      }
    }
    .text2 {
      text-align: center;
      line-height: 40px;
      opacity: 0;
      transition: opacity 1.8s;
      padding-top: 20px;
      h3 {
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-name: cursor;
        line-height: 60px;
        color: #fff;
      }
      span {
        font-size: 1.7em;
        color: #fff;
        line-height: 60px;
      }
    }
    .button {
      text-align: center;
      padding-top: 5%;
      button {
        border: none;
        background-color: #ecf4f8;
        border-radius: 20px;
        padding: 20px;
        font-weight: 600;
        font-size: 1.5em;
        width: 35%;
        cursor: pointer;
      }
      @media screen and (max-width: 768px) {
        button {
          width: 50%;
        }
      }
    }
  }
`;

export default MainPageComp;
