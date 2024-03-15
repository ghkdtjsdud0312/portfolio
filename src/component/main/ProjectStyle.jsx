import { styled } from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  padding: 100px 0;
  margin-left: 20%;
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    font-weight: 600;
    img {
      width: 5%;
      margin-right: 2%;
    }
  }
  .project {
    padding: 3%;
    display: flex;
    .swiper-container {
      width: 100%;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    img {
      max-width: 100%;
      max-height: 100%;
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
          text-decoration: underline;
          background: transparent;
          margin-left: 5%;
          cursor: pointer;
          &:hover {
            color: #7d8c81;
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
            font-size: 0.7em;
            text-align: center;
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .project img {
      margin-top: 70%;
      height: 500px;
    }
    .project .titlebox .title .role {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 480px) {
    .project img {
      margin-top: 100%;
    }
    .project .titlebox {
      height: 850px;
    }
    .project .titlebox .title div {
      line-height: 35px;
    }
    .project .titlebox .title button {
      white-space: nowrap;
      font-size: 0.8em;
      width: 28%;
    }
    .project .titlebox .title .skills {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default ProjectComp;
