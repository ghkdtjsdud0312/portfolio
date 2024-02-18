import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProjectComp from "./ProjectStyle";

const ProjectWonderWalker = () => {
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
            <div>원더랜드(1인 여행자 커뮤니티 사이트)</div>
            <p>2023.11.01 ~ 2023.11.15</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-10-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.46.51.png?alt=media&token=18c82efb-3217-4d31-89fc-6877d9599f05"
              alt="Wonderwalker 로고 사진"
              style={{ width: "70%", margin: "13%" }}
            />
            <div className="clickbtn">
              <a href="">
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
                혼자 여행을 즐기는 사람들을 위해 유용한 정보를 공유하기 위해
                만든 커뮤니티 사이트
              </p>
              <p>React, java, DataBase 사용</p>
            </div>
            <h3 onClick={toggleImplementationAccordion}>
              전체 구현 내용
              <FontAwesomeIcon
                icon={implementationOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`texts ${implementationOpen ? "open" : "closed"}`}>
              <div className="text">
                <p>로그인 화면</p>
                <span>회원 로그인</span>
                <span>회원가입</span>
              </div>
              <div className="text">
                <p>메인화면</p>
                <span>메인 화면</span>
                <span>여행 커뮤니티 후기 글</span>
                <span>여행에 관련된 상품</span>
              </div>
              <div className="text">
                <p>1인 전용 상품 판매</p>
                <span>1인 전용 상품보기</span>
                <span>상품 주문/취소</span>
                <span>상품 결제</span>
                <span>장바구니</span>
              </div>
              <div className="text">
                <p>커뮤니티 사이트</p>
                <span>커뮤니티 목록</span>
                <span>커뮤니티 등록/수정/삭제</span>
              </div>
              <div className="text">
                <p>DIY 여행일지 글쓰기 등록/목록</p>
                <span>메인 슬라이드 구현</span>
                <span>캘린더 구현</span>
                <span>여행 후기글 작성</span>
                <span>후기글 목록</span>
                <span>여행 후기 상세정보</span>
              </div>
              <div className="text">
                <p>국내/해외 추천 코스</p>
                <span>국내/해외</span>
                <span>추천코스 목록</span>
                <span>추천코스 상세페이지</span>
              </div>
            </div>
            <h3 onClick={toggleTechnologyAccordion}>
              사용 기술
              <FontAwesomeIcon
                icon={technologyOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`text ${technologyOpen ? "open" : "closed"}`}>
              <p>사용 언어 : Front(React), Back(java),DB(oracle)</p>
              <p>Tool : Visual Studio Code,intelliJ,oracle</p>
              <p>Collaboration : github</p>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectWonderWalker;
