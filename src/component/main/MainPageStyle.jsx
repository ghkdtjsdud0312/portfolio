import { styled } from "styled-components";
import mainBg from "../../images/녹색배경.jpg";

const MainPageComp = styled.section`
  background-image: url(${mainBg});
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin-left: 20%;
  .container {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    padding: 120px;
    @media screen and (max-width: 768px) {
      margin-top: 14%;
    }
    @media screen and (max-width: 480px) {
      margin-top: 20%;
    }
    .mainText {
      width: 50%;
      text-align: left;
      .text {
        text-align: left;
        line-height: 80px;
        h2 {
          font-size: 5em;
          color: #fff;
        }
      }
      .text2 {
        transition: opacity 1.8s;
        padding-top: 20px;
        h3 {
          animation-duration: 0.3s;
          animation-iteration-count: infinite;
          animation-name: cursor;
          line-height: 30px;
          color: #fff;
          font-size: 1.8em;
        }
      }
      .button {
        text-align: left;
        margin-top: 15%;
        button {
          border: none;
          border-radius: 20px;
          padding: 12px;
          font-weight: 600;
          font-size: 1.1em;
          width: 220px;
          color: #403c37;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.2);
        }
        @media screen and (max-width: 768px) {
          button {
            width: 50%;
          }
        }
      }
    }
  }
`;

export default MainPageComp;
