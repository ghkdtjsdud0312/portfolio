import ProjectComp from "./ProjectStyle";

const ProjectWonderWalker = () => {
  return (
    <>
      <ProjectComp>
        <h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-10-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.46.51.png?alt=media&token=18c82efb-3217-4d31-89fc-6877d9599f05"
            alt="Wonderwalker 로고 사진"
            style={{ width: "15%" }}
          />
          원더워커
        </h2>
        <div className="project">
          <div className="titlebox">
            <div className="title">
              <div>프로젝트 소개 및 차별점, 목적성</div>
              <p>소개 : 1인 여행자 커뮤니티 사이트</p>
              <p>차별성 및 목적성 : </p>
            </div>
            <div className="text">
              <div>프로젝트 기간/인원</div>
              <p>기간 : 2023.11.01 ~ 2023.11.15</p>
              <p>팀프로젝트 : 4명</p>
            </div>

            <div className="text">
              <div>개발목표</div>
              <p></p>
            </div>
            <div className="text">
              <div>개인역할</div>
              <p></p>
            </div>
            <div className="title">
              <h3>사용 기술</h3>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-removebg-preview.png?alt=media&token=ca6043e4-79da-4cd2-8480-79b15a87af29"
                alt="react_logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/java.png?alt=media&token=abc2ae69-1f2c-42dc-8c74-bc25fcbad799"
                alt="java"
                style={{ width: "13%", margin: "0 5%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/oracle-removebg-preview.png?alt=media&token=2fde7c80-4903-4f8b-8548-64df850c9341"
                alt="Oracle"
                style={{ width: "20%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                alt="github"
                style={{ width: "13%" }}
              />
            </div>
            <div className="title">
              <a href="">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectWonderWalker;
