import styled from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 950px;
  background-color: ${(props) => (props.active ? "transparent" : "green")};
  .container {
    padding-top: 60px;
    .box {
      border: 2px solid black;
      border-radius: 10px;
      height: 270px;
      background-color: #c1e1c12e;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      margin-bottom: 10px;
      padding-top: 20px;
      h2 {
        text-align: center;
      }
      h4 {
        padding-top: 10px;
        text-align: center;
      }
      .box2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
        gap: 5px;
        .content1 {
          line-height: 30px;
          p {
          }
          img {
            width: 50px;
            height: 50px;
          }
        }
        .content2 {
          line-height: 30px;
          p {
          }
        }
      }
      .button {
        text-align: center;
        button {
          padding: 10px;
          border: none;
          border: 2px solid white;
          background-color: green;
          cursor: pointer;
          &:hover {
            background-color: darkgreen;
            transition: all 0.8s;
          }
        }
      }
    }
  }
`;

const Project = ({ active }) => {
  return (
    <>
      <ProjectComp id="project" active={active}>
        <div className="container">
          <div className="box">
            <h2>제목</h2>
            <h4>프로젝트 기간</h4>
            <div className="box2">
              <div className="content1">
                <p>포트폴리오 이름</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/17.%EC%9A%B8%EB%A6%89%EB%8F%84%20%EC%B9%B4%ED%8E%98%EC%9A%B8%EB%9D%BC.jpg?alt=media&token=a3b51bf2-913d-47f3-bcea-bb5995b12c2c"
                  alt="포폴사진"
                />
              </div>
              <div className="content2">
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
              </div>
            </div>
            <div className="button">
              <button onClick={() => {}}>More</button>
            </div>
          </div>

          <div className="box">
            <h2>제목</h2>
            <h4>프로젝트 기간</h4>
            <div className="box2">
              <div className="content1">
                <p>포트폴리오 이름</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/17.%EC%9A%B8%EB%A6%89%EB%8F%84%20%EC%B9%B4%ED%8E%98%EC%9A%B8%EB%9D%BC.jpg?alt=media&token=a3b51bf2-913d-47f3-bcea-bb5995b12c2c"
                  alt="포폴사진"
                />
              </div>
              <div className="content2">
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
              </div>
            </div>
            <div className="button">
              <button onClick={() => {}}>More</button>
            </div>
          </div>
          <div className="box">
            <h2>제목</h2>
            <h4>프로젝트 기간</h4>
            <div className="box2">
              <div className="content1">
                <p>포트폴리오 이름</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/17.%EC%9A%B8%EB%A6%89%EB%8F%84%20%EC%B9%B4%ED%8E%98%EC%9A%B8%EB%9D%BC.jpg?alt=media&token=a3b51bf2-913d-47f3-bcea-bb5995b12c2c"
                  alt="포폴사진"
                />
              </div>
              <div className="content2">
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
              </div>
            </div>
            <div className="button">
              <button onClick={() => {}}>More</button>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default Project;
