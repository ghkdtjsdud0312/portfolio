import ProjectComp from "./ProjectStyle";

const ProjectClone = () => {
  return (
    <>
      <ProjectComp>
        <h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/logo--koreanair-pc.png?alt=media&token=ed162c1c-fcec-4688-a2a1-cdec902c5bd0"
            alt="대한항공 로고 사진"
          />
          대한항공 클론페이지
        </h2>
        <div className="project">
          <div className="titlebox">
            <div className="title">
              <div>프로젝트 소개 및 차별점, 목적성</div>
              <p>소개 : </p>
              <p>● 차별성 및 목적성 : </p>
            </div>
            <div className="title">
              <div>프로젝트 기간/인원</div>
              <p>● 기간 :2023.10.09 ~ 2023.10.16</p>
              <p>
                <p>개인 프로젝트</p>
              </p>
            </div>
            <div className="title">
              <div>개발 목표</div>
            </div>
            <div className="title">
              <div>개인 역할(front)</div>
            </div>

            <div className="title">
              <h3>사용 기술</h3>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/image-removebg-preview.png?alt=media&token=c09b94c7-d660-4253-9bc1-9743377865f2"
                alt="html,css,js_logo"
                style={{ width: "20%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                alt="github"
                style={{ width: "13%" }}
              />
            </div>
            <div className="title">
              <p>사이트로 바로가기(Click!)</p>
              <a href="https://www.koreanair.com/?hl=ko " target="_blank">
                <button>대한항공사이트</button>
              </a>
              <a
                href="https://ghkdtjsdud0312.github.io/Myprj-ClonePage-/"
                target="_blank">
                <button>클론사이트</button>
              </a>
              <a href="https://drive.google.com/file/d/1zq3DRZ6ujNnHhtWn7VtL5CHL7v1vPKJz/view?usp=drive_link ">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectClone;
