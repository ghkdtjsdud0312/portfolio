import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProjectComp from "./ProjectStyle";

const ProjectCinepic = () => {
  // 각 섹션의 활성/비활성 상태를 useState로 관리합니다.
  const [reasonOpen, setReasonOpen] = useState(false);
  const [implementationOpen, setImplementationOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);

  // 섹션을 토글하는 함수
  const toggleReasonAccordion = () => {
    setReasonOpen(!reasonOpen);
  };

  const toggleImplementationAccordion = () => {
    setImplementationOpen(!implementationOpen);
  };

  const toggleTechnologyAccordion = () => {
    setTechnologyOpen(!technologyOpen);
  };

  return (
    <>
      <ProjectComp>
        <div className="container">
          <div className="titlebox">
            <div>씨네픽(CinePic)</div>
            <p>2024.01.17 ~ 2024.02.21</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/CinePicLogo.png?alt=media&token=5f8c28c4-af90-403f-a26c-935b5fc9bc57"
              alt="씨네픽사진"
              style={{ width: "65%", paddingTop: "13%" }}
            />
            <div className="clickbtn">
              <a href="https://cinepic2024.site" target="_blank">
                <button>사이트로 바로가기</button>
              </a>
              <a href="https://drive.google.com/file/d/1J9DdKEUUjsJXUvm6u-VhXbOb3FTYmh5f/view?usp=drive_link">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
          <div className="textbox">
            <h3 onClick={toggleReasonAccordion}>
              주제 선정 이유 및 개발목표
              <FontAwesomeIcon icon={reasonOpen ? faAngleUp : faAngleDown} />
            </h3>
            <div className={`text ${reasonOpen ? "open" : "closed"}`}>
              <p>
                사용자 맞춤 영화 추천 및 커뮤니티를 활용한 영화 플랫폼 사이트
              </p>
              <p>머신러닝을 활용한 맞춤 영화 추천</p>
              <p>Elasticsearch를 활용한 영화 검색</p>
              <p>화면 구성부터 백엔드까지 전반적인 구현 경험</p>
              <p>게시판 CRUD 구현 및 다양한 API 활용</p>
              <p>
                React와 SpringBoot, jwt, 웹소켓, Python을 이용한 여러 기술
                익히기
              </p>
              <p>wbs 및 단위테스트 진행</p>
            </div>
            <h3 onClick={toggleImplementationAccordion}>
              전체 구현 내용
              <FontAwesomeIcon
                icon={implementationOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`texts ${implementationOpen ? "open" : "closed"}`}>
              <div className="text">
                <p>메인화면</p>
                <span>메인 사진</span>
                <span>영화추천(로그인 전)</span>
                <span>취향관련 영화추천(로그인 후)</span>
                <span>페이지 내 다른 기능페이지 이동</span>
                <span>FAQ창</span>
              </div>
              <div className="text">
                <p>로그인 및 회원가입</p>
                <span>회원 로그인 / 관리자 로그인</span>
                <span>카카오 로그인(제 3자 인증방식)</span>
                <span>회원가입(이메일 인증,취향 등록)</span>
                <span>비밀번호 찾기</span>
              </div>
              <div className="text">
                <p>엘라스틱서치(검색기능)</p>
                <span>영화 검색(최신순,관련순)</span>
              </div>
              <div className="text">
                <p>머신러닝</p>
                <span>영화상세내용</span>
              </div>
              <div className="text">
                <p>채팅기능</p>
                <span>영화취향 공유 채팅방</span>
              </div>
              <div className="text">
                <p>결제기능</p>
                <span>광고결제</span>
              </div>
              <div className="text">
                <p>맞춤추천을 위한 유저 취향수집</p>
                <span>북마크</span>
              </div>
              <div className="text">
                <p>마이페이지</p>
                <span>회원정보수정</span>
                <span>내 취향 수정</span>
                <span>내 글 관리하기</span>
              </div>
              <div className="text">
                <p>관리자페이지</p>
                <span>회원 관리</span>
                <span>게시판 관리</span>
                <span>FAQ 관리</span>
              </div>
              <div className="text">
                <p>영화 상세 정보</p>
                <span>후기 댓글</span>
                <span>포토 후기</span>
                <span>게시판</span>
              </div>
              <div className="text">
                <p>영화 상세 정보 제공 지도 api</p>
                <span>독립, 예술 영화관 찾기</span>
              </div>
              <div className="text">
                <p>jwt 보안</p>
                <span>보안설정</span>
              </div>
              <div className="text">
                <p>Python 크롤링</p>
                <span>영화가져오기</span>
              </div>
            </div>
            <h3 onClick={toggleTechnologyAccordion}>
              사용 기술
              <FontAwesomeIcon
                icon={technologyOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`text ${technologyOpen ? "open" : "closed"}`}>
              <p>
                사용 언어 : Front(React), Back(springboot,python),Machine
                Learning, elasticsearch(kibana)
              </p>
              <p>Framework : AWS</p>
              <p>DB : MySQL, DBeaver</p>
              <p>
                Tool : Visual Studio Code, IntelliJ, Pycharm, postman, swagger
                IU
              </p>
              <p>Collaboration : github</p>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectCinepic;
