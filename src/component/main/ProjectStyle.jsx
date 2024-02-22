import { styled } from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h3 {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 40px;
    font-weight: 600;
    img {
      width: 8%;
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
    }
    .titlebox {
      margin-left: auto;
      border-radius: 10px;
      background-color: white;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      width: 50%;
      height: 750px;
      .title {
        padding-top: 5%;
        text-align: center;
        div {
          font-size: 1.3em;
          font-weight: 600;
        }
        p {
          line-height: 28px;
          font-size: 1em;
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
            background-color: #84acc4;
            font-weight: 600;
            transition: all 0.3s;
          }
        }
      }
    }
  }
`;

export default ProjectComp;
