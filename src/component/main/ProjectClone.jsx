import ProjectComp from "./ProjectStyle";

const ProjectClone = () => {
  return (
    <>
      <ProjectComp>
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
                <h3>주제 선정 이유</h3>
                <p>
                  활용해 볼 수 있는 기술들이 많아보여 대한항공페이지를
                  클론해보기로 주제 선정 했음
                </p>
              </div>
              <div className="text">
                <h3>사용 기술</h3>
                <p>사용 언어 : Front(HTML,CSS)</p>
                <p>Tool : Visual Studio Code</p>
                <p>Collaboration : github</p>
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
