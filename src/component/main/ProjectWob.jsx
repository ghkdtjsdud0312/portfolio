import ProjectComp from "./ProjectStyle";

const Project = () => {
  return (
    <>
      <ProjectComp>
        <h3>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/wob-logo.png?alt=media&token=53d56dac-cf54-4fdf-9842-a5d367a8e67d"
            alt="wob 로고 사진"
          />
          WOB(WorkOut Buddy) - 운동 친구가 필요할 때 주변에 운동 메이트 구하기
        </h3>
        <div className="project">
          <div className="titlebox">
            <div className="title">
              <div>프로젝트 소개 및 차별점, 목적성</div>
              <p>● 차별성 및 목적성 : </p>
            </div>
            <div className="title">
              <div>프로젝트 기간/인원</div>
              <p>● 기간 : 2023.12.06 ~ 2024.01.03</p>
              <p>● 팀 프로젝트 : 5명</p>
            </div>
            <div className="title">
              <div>개발 목표</div>
              <p>● 화면 구성부터 백엔드까지 전반적인 구현 경험</p>
              <p>● 게시판 CRUD 구현 및 다양한 API 활용</p>
              <p>
                ● React와 SpringBoot, jwt, 웹소켓, Python을 이용한 여러 기술
                익히기
              </p>
              <p>● wbs 및 단위테스트 진행</p>
            </div>
            <div className="title">
              <div>개인 역할(front,back,DB)</div>
              <p>● 지도 API</p>
              <p>● 주소 API</p>
              <p>● 현재 위치</p>
              <p>● 비활성화/활성화 버튼</p>
              <p>● 등록/수정/삭제</p>
              <p>● 페이지네이션</p>
              <p>● 검색</p>
              <p>● 햄버거 사이드바</p>
              <p>● 빈응형</p>
            </div>
            <div className="title">
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
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/aws2-removebg-preview.png?alt=media&token=c2fe2b0c-4506-4e80-92aa-3d17c143efd4"
                alt="AWS"
                style={{ width: "10%" }}
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
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                alt="github"
                style={{ width: "13%" }}
              />
            </div>
            <div className="title">
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
      </ProjectComp>
    </>
  );
};

export default Project;
