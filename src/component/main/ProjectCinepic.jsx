import ProjectComp from "./ProjectStyle";

const ProjectCinepic = () => {
  return (
    <>
      <ProjectComp>
        <div className="container">
          <div className="titlebox">
            <div className="title">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/CinePicLogo.png?alt=media&token=5f8c28c4-af90-403f-a26c-935b5fc9bc57"
                alt="씨네픽사진"
              />
              <div>씨네픽(CinePic)</div>
            </div>
            <div className="textbox">
              <h3>2024.01.17 ~ 2024.02.21</h3>
              <div className="text">
                <h3>주제 선정 이유</h3>
                <p>
                  사용자 맞춤 영화 추천 및 커뮤니티를 활용한 영화 플랫폼 사이트
                </p>
              </div>
              <div className="text">
                <h3>사용 기술</h3>
                <p>
                  사용 언어 : Front(React), Back(springboot,python),Machine
                  Learning
                </p>
                <p>Framework : AWS</p>
                <p>DB : MySQL, DBeaver,elasticsearch(kibana)</p>
                <p>
                  Tool : Visual Studio Code, IntelliJ, Pycharm, postman, swagger
                  IU
                </p>
                <p>Collaboration : github</p>
              </div>
              <div className="clickbtn">
                <a href="https://cinepic2024.site" target="_blank">
                  <button>cinepic 사이트</button>
                </a>
                <a
                  href="https://www.notion.so/793844f3d814450396e7ce8079d0c4d3"
                  target="_blank">
                  <button>구현 내용 보기</button>
                </a>
                <a href="https://drive.google.com/file/d/1J9DdKEUUjsJXUvm6u-VhXbOb3FTYmh5f/view?usp=drive_link">
                  <button>PDF 보기</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectCinepic;
