import ProjectComp from "./ProjectStyle";

const ProjectClone = () => {
  return (
    <>
      <ProjectComp>
        <h2>Project - 대한항공 클론페이지</h2>
        <div className="container">
          <div className="titlebox">
            <div className="title">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/logo--koreanair-pc.png?alt=media&token=ed162c1c-fcec-4688-a2a1-cdec902c5bd0"
                alt="대한항공 로고 사진"
              />
              <div>클론페이지(대한항공)</div>
            </div>
            <div className="textbox">
              <h3>2023.10.09 ~ 2023.10.16</h3>
              <div className="text">
                <h3>원래 웹들과 차별점 및 웹페이지 목적성</h3>
                <p></p>
              </div>
              <div className="text">
                <h3>사용 기술</h3>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/image-removebg-preview.png?alt=media&token=c09b94c7-d660-4253-9bc1-9743377865f2"
                  alt="html,css,js_logo"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                  alt="github"
                  style={{ width: "13%" }}
                />
              </div>
              <div className="clickbtn">
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
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectClone;
