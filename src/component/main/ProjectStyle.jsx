import { styled } from "styled-components";
import mainBg from "../../images/laptop.jpg";

const ProjectComp = styled.section`
  width: 100%;
  height: 1000px;
  position: relative;
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
    filter: blur(5px);
    z-index: -1; /* 텍스트보다 뒤에 배치 */
  }
  h3 {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    font-weight: 600;
    img {
      width: 5%;
      margin-right: 2%;
    }
  }
  .project {
    padding: 3%;
    display: flex;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slide {
      font-size: 1.5em;
      color: #303030;
    }
    .titlebox {
      border-radius: 10px;
      background-color: white;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      width: 55%;
      height: 800px;
      padding: 2%;
      .title {
        div {
          font-size: 1.3em;
          font-weight: 600;
          line-height: 50px;
          text-align: left;
        }
        p {
          line-height: 28px;
          font-size: 1em;
          text-align: left;
        }
        button {
          width: 25%;
          font-size: 1em;
          border: none;
          border-bottom: 1px solid #303030;
          background: transparent;
          margin-left: 5%;
          padding-top: 4%;
          cursor: pointer;
          border-radius: 10px;
          &:hover {
            color: #1b608b;
            font-weight: 600;
            transition: all 0.3s;
          }
        }
        .role {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          white-space: nowrap;
          font-size: 1em;
          p {
            font-weight: 400;
          }
        }
        .skills {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          white-space: nowrap;
          p {
            font-weight: 300;
            font-size: 0.8em;
            outline: 1px solid #505050;
            text-align: center;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

export default ProjectComp;
