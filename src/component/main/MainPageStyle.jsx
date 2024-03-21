import { styled } from "styled-components";
import mainBg from "../../images/녹색배경.jpg";

const MainPageComp = styled.section`
  background-image: url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 740px;
  margin-left: 16%;
  @media screen and (max-width: 1100px) {
    background-size: contain;
    overflow-x: hidden;
    height: 423px;
  }
  @media screen and (max-width: 768px) {
    height: 423px;
  }
  .container {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    height: 740px;
    padding: 120px;
    @media screen and (max-width: 1100px) {
      height: 423px;
    }
    @media screen and (max-width: 768px) {
      height: 423px;
    }
    @media screen and (max-width: 500px) {
      padding: 70px;
      height: 272px;
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
          @media screen and (max-width: 1100px) {
            font-size: 3em;
          }
          @media screen and (max-width: 500px) {
            font-size: 2em;
          }
        }
      }
      .text2 {
        transition: opacity 1.8s;
        padding-top: 20px;
        @media screen and (max-width: 500px) {
          padding-top: 0;
        }
        h3 {
          animation-duration: 0.3s;
          animation-iteration-count: infinite;
          animation-name: cursor;
          line-height: 30px;
          color: #fff;
          font-size: 1.8em;
          white-space: nowrap;
          @media screen and (max-width: 1100px) {
            font-size: 1.4em;
          }
          @media screen and (max-width: 500px) {
            font-size: 1.2em;
            line-height: 10px;
          }
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
          @media screen and (max-width: 1100px) {
            font-size: 1em;
          }
          @media screen and (max-width: 500px) {
            width: 180px;
          }
        }
      }
    }
  }
`;

export default MainPageComp;
