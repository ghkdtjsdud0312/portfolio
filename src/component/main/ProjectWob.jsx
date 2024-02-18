import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProjectComp from "./ProjectStyle";

const Project = ({ active }) => {
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
      <ProjectComp id="project" active={active}>
        <h2>Project</h2>
        <div className="container">
          <div className="titlebox">
            <div>
              WOB(WorkOut Buddy)
              <br />
              운동 메이트 구하기
            </div>
            <p>2023.12.6 ~ 2024.01.03</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/wob-logo.png?alt=media&token=53d56dac-cf54-4fdf-9842-a5d367a8e67d"
              alt="wob 로고 사진"
            />
            <div className="clickbtn">
              <a href="https://workoutbuddys.store" target="_blank">
                <button>사이트로 바로가기</button>
              </a>
              <a href="https://drive.google.com/file/d/1xJv11Da7n1iR2-9UDmLS7VHvsQODikne/view?usp=drive_link">
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
                모임은 싫은데 운동 친구가 필요할 때 집 근처나 현재 위치 주변에
                같이 운동할 수 있는 사람들끼리 모여서 함께 운동하기 사이트 구축
              </p>
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
                <span>모든 레져, 모든 지역 원하는 곳 선택</span>
                <span>날씨 & 현재위치 정보(api사용)</span>
                <span>캘린더</span>
                <span>날짜별 운동 일정 목록</span>
                <span>일정 등록, 전체일정목록 버튼</span>
              </div>
              <div className="text">
                <p>로그인 및 회원가입</p>
                <span>회원 로그인 / 관리자 로그인</span>
                <span>카카오 로그인</span>
                <span>회원가입(운동종목, 지역 등록, 이메일 인증)</span>
                <span>비밀번호 찾기</span>
              </div>
              <div className="text">
                <p>채팅기능</p>
                <span>오픈채팅방</span>
                <span>운동 상세페이지 채팅방</span>
              </div>
              <div className="text">
                <p>결제기능</p>
                <span>클래스일정 결제</span>
              </div>
              <div className="text">
                <p>마이페이지(수정,환경설정)</p>
                <span>프로필</span>
                <span>닉네임</span>
                <span>소개글</span>
                <span>관심지역</span>
                <span>관심운동</span>
                <span>MBTI 선택</span>
              </div>
              <div className="text">
                <p>스케줄러</p>
                <span>내가 올린 운동등록 목록</span>
              </div>
              <div className="text">
                <p>
                  관리자페이지(수정, 삭제, 활성화/비활성화 버튼, 페이지네이션)
                </p>
                <span>전체 회원관리 목록</span>
                <span>전체 광고관리 목록</span>
                <span>전체 종목 관리 목록 + 등록</span>
                <span>관리자 1:1 문의하기 목록</span>
                <span>전체 결제 관리 목록</span>
                <span>햄버거 사이드바</span>
              </div>
              <div className="text">
                <p>운동 등록</p>
                <span>일정 등록</span>
                <span>클래스 등록</span>
              </div>
              <div className="text">
                <p>현재위치 주변운동종목 지도api</p>
                <span>
                  내 주변에 원하는 운동을 같이하고 싶은 사람들이 있는지 검색 및
                  상세 정보
                </span>
              </div>
              <div className="text">
                <p>검색기능</p>
                <span>운동 목록 관련 검색</span>
              </div>
              <div className="text">
                <p>환경설정</p>
                <span>계정관리</span>
                <span>내가 작성한 글</span>
                <span>자주 묻는 질문 FAQ</span>
                <span>결제내역</span>
                <span>정책 및 약관</span>
              </div>
              <div className="text">
                <p>jwt 보안</p>
                <span>보안설정</span>
              </div>
            </div>
            <h3 onClick={toggleTechnologyAccordion}>
              사용 기술
              <FontAwesomeIcon
                icon={technologyOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`text ${technologyOpen ? "open" : "closed"}`}>
              <p>사용 언어 : Front(React), Back(springboot,python)</p>
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

export default Project;
