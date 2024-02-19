import ProjectComp from "./ProjectStyle";

const Project = ({ active }) => {
  return (
    <>
      <ProjectComp id="project" active={active}>
        <h2>Project</h2>
        <div className="container">
          <div className="titlebox">
            <div className="title">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/wob-logo.png?alt=media&token=53d56dac-cf54-4fdf-9842-a5d367a8e67d"
                alt="wob 로고 사진"
              />
              <div>WOB(WorkOut Buddy) - 운동 메이트 구하기</div>
            </div>
            <div className="textbox">
              <h3>2023.12.6 ~ 2024.01.03</h3>
              <div className="text">
                <h3>주제 선정 이유</h3>
                <p>
                  모임은 싫은데 운동 친구가 필요할 때 집 근처나 현재 위치 주변에
                  같이 운동할 수 있는 사람들끼리 모여서 함께 운동하기 사이트
                  구축
                </p>
              </div>
              <div className="text">
                <h3>사용 기술</h3>
                <p>사용 언어 : Front(React), Back(springboot,python)</p>
                <p>Framework : AWS</p>
                <p>DB : MySQL, DBeaver</p>
                <p>
                  Tool : Visual Studio Code, IntelliJ, Pycharm, postman, swagger
                  IU
                </p>
                <p>Collaboration : github</p>
              </div>
              <div className="clickbtn">
                <a href="https://workoutbuddys.store" target="_blank">
                  <button>WOB사이트</button>
                </a>
                <a
                  href="https://www.notion.so/WOB-38403a42d5ba44bca4a24000b4942d9d"
                  target="_blank">
                  <button>구현 내용 보기</button>
                </a>
                <a href="https://drive.google.com/file/d/1xJv11Da7n1iR2-9UDmLS7VHvsQODikne/view?usp=drive_link">
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

export default Project;
