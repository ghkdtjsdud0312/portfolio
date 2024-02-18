import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProjectComp from "./ProjectStyle";

const ProjectClone = () => {
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
            <div>클론페이지(대한항공)</div>
            <p>2023.10.09 ~ 2023.10.16</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/logo--koreanair-pc.png?alt=media&token=ed162c1c-fcec-4688-a2a1-cdec902c5bd0"
              alt="대한항공 로고 사진"
              style={{ width: "70%", margin: "13%" }}
            />
            <div className="clickbtn">
              <a href="https://www.koreanair.com/?hl=ko " target="_blank">
                <button>대한항공사이트</button>
              </a>
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
                활용해 볼 수 있는 기술들이 많아보여 대한항공페이지를
                클론해보기로 주제 선정 했음
              </p>
              <p>
                시맨틱태그와 플렉스 박스 or그리드 레이아웃을 이용해 클론 페이지
                만들기
              </p>
              <p>웹과 모바일 모두 대응 되도록 반응형 웹으로 구성</p>
              <p>
                추가 기능 구현 건 (로그인 페이지 추가 후 버튼 클릭 시 작성된
                메인 화면이 뜨도록 구성)
              </p>
              <p>HTML, CSS을 이용한 기술 익히기(가급적 자바스크립트는 배제)</p>
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
              </div>
              <div className="text">
                <p>메인화면</p>
                <span>메인 </span>
                <span>이벤트 페이지</span>
                <span>공지사항 페이지</span>
                <span>여행에 관련된 상품</span>
                <span>header,footer</span>
              </div>
              <div className="text">
                <p>반응형</p>
                <span>로그인 화면</span>
                <span>메인화면</span>
              </div>
            </div>
            <h3 onClick={toggleTechnologyAccordion}>
              사용 기술
              <FontAwesomeIcon
                icon={technologyOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`text ${technologyOpen ? "open" : "closed"}`}>
              <p>사용 언어 : Front(HTML,CSS)</p>
              <p>Tool : Visual Studio Code</p>
              <p>Collaboration : github</p>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectClone;
