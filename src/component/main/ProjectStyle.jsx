import { styled } from "styled-components";

const ProjectComp = styled.section`
  width: 80%;
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
          color: #4b584f;
        }
        p {
          line-height: 28px;
          font-size: 1em;
          text-align: left;
          margin-left: 20px;
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
  @media screen and (max-width: 480px) {
    .project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .project img {
    }
    .project .titlebox {
      width: 85%;
      height: 770px;
    }
  }
`;

export default ProjectComp;
