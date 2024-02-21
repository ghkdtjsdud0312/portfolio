import ProjectComp from "./ProjectStyle";

const ProjectCinepic = ({ active }) => {
  return (
    <>
      <ProjectComp id="project" active={active}>
        <h2>Project - cinepic</h2>
        <div className="project">
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
                <h3>원래 웹들과 차별점 및 웹페이지 목적성</h3>
                <p>차별점 : 운동 앱에서 </p>
                <p>목적성 : </p>
              </div>
              <div className="text">
                <h3>사용 기술</h3>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-removebg-preview.png?alt=media&token=ca6043e4-79da-4cd2-8480-79b15a87af29"
                  alt="react_logo"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%E1%84%87%E1%85%AE%E1%84%90%E1%85%B3.webp?alt=media&token=a7166685-f461-4d87-af33-4975568b94a8"
                  alt="springboot"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/python-removebg-preview.png?alt=media&token=f712ed2a-33ac-4f1d-b040-adb75ef0ddbe"
                  alt="python"
                  style={{ width: "13%", margin: "0 5%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A5%E1%84%89%E1%85%B5%E1%86%AB%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC.png?alt=media&token=f04cd4b9-f3b5-4d18-acd8-13b143aaa02f"
                  alt="Machine Learning"
                  style={{ width: "15%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/MysqlWorkBench-removebg-preview.png?alt=media&token=734f13ec-237d-431b-b551-b856df51ab08"
                  alt="MySQL"
                  style={{ width: "20%", margin: "0 4%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%83%E1%85%B5%E1%84%87%E1%85%B5%E1%84%87%E1%85%A5-removebg-preview.png?alt=media&token=e19012da-bc02-4c99-bac5-d067cdb5b580"
                  alt="DBeaver"
                  style={{ width: "20%", margin: "0 5%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5%E1%86%A8%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5-removebg-preview.png?alt=media&token=1e3c76a7-e593-48a8-aee4-38a7debef208"
                  alt="Elasticsearch"
                  style={{ width: "25%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                  alt="github"
                  style={{ width: "13%" }}
                />
              </div>
              <div className="clickbtn">
                <p>사이트로 바로가기(Click!)</p>
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
