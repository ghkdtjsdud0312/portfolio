import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProjectComp from "./ProjectStyle";

const ProjectMyCinepic = () => {
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
            <div>씨네픽(Cinepic)</div>
            <p>상세구현내용(내가 맡은 부분)</p>
            <img
              src=""
              alt="내가 맡은 부분 사진(취향등록/수정,지도)"
              style={{ width: "70%", margin: "13%" }}
            />
            <div className="clickbtn">
              <a href="" target="_blank">
                <button>내가 맡은 씨네픽사이트(도메인주소)</button>
              </a>
              <a href="https://drive.google.com/file/d/1UuOGYBaCo2HDdI8j8QcCm6ebbRFMnOoc/view?usp=drive_link ">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
          <div className="textbox">
            <h3 onClick={toggleReasonAccordion}>
              주요 사용 기술
              <FontAwesomeIcon icon={reasonOpen ? faAngleUp : faAngleDown} />
            </h3>
            <div className={`text ${reasonOpen ? "open" : "closed"}`}>
              <p>지도 API</p>
              <p>지도 사용자 컨트롤러</p>
              <p>지역이나 구 검색</p>
              <p>상세 정보</p>
              <p>취향 등록/수정</p>
              <p>검색(최대 3개)</p>
              <p>성별 선택</p>
              <p>영화장르선택(최대3개)</p>
              <p>반응형</p>
              <p>모달</p>
            </div>
            <h3 onClick={toggleImplementationAccordion}>
              구현 기능 및 설명
              <FontAwesomeIcon
                icon={implementationOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`texts ${implementationOpen ? "open" : "closed"}`}>
              <div className="text">
                <p>독립,예술영화 지도API</p>
                <span>모달(잘못 검색한 결과검색결과없음)</span>
                <span>지도 생성하기</span>
                <span>지도안에 사용자 컨트롤 추가</span>
                <span>지도& 스카이뷰 추가</span>
                <span>
                  초기 값으로 ‘롯데타워 롯데시네마점’을 지도에 마커 표시 및 상세
                  정보 띄워 보여지게 함
                </span>
                <span>
                  주소내용으로 시나 도 검색 가능(누를 때/엔터 키 사용/검색 내용
                  쓴 글 초기화)
                </span>
                <span>마커표시 및 마커 색 변경</span>
                <span>인포윈도우로 영화관이름 마우스 호버로 띄우기</span>
                <span>
                  지도 이동 시 맵 센터 이동(검색 데이터 중 첫 번째 값이 먼저
                  보여 지게 함)
                </span>
                <span>반응형 적용</span>
              </div>
              <div className="text">
                <p>취향등록 및 수정</p>
                <span>
                  모달(수정, 등록 ,비어 있을 때 잘못검색, 중복된 이름)
                </span>
                <span>감독/배우 검색/엔터 누르기</span>
                <span>감독/배우 이름 추가</span>
                <span>감독/배우 이름 중복검사</span>
                <span>감독/배우 이름 삭제</span>
                <span>감독/배우 최대 3개까지만 나오게</span>
                <span>성별 고르기(등록, 수정)</span>
                <span>장르 선택(최대 3개까지)</span>
                <span>장르(등록,수정)</span>
                <span>회원 취향 불러오기</span>
                <span>DB등록 시 (000,000,000) 되게 함</span>
                <span>
                  등록버튼(모든 항목에 최소 1개 이상은 등록이 되어야
                  등록하기버튼이 활성화 됨)
                </span>
                <span>반응형 적용</span>
              </div>
              <div className="text">
                <p>햄버거 사이드바 기능 구현</p>
                <span>
                  햄버거 버튼을 누르면 오른쪽에서 왼쪽으로 사이드 바가 나옴
                </span>
                <span>가고 싶은 목록을 누르면 그 페이지로 이동함</span>
                <span>
                  사이드 바 이외의 화면을 누르면 사이드 바가 화면에서 사라짐
                </span>
                <span>반응형 적용</span>
                <span>햄버거 버튼도 누르면 사이드 바 화면이 사라짐</span>
              </div>
            </div>
            <h3 onClick={toggleTechnologyAccordion}>
              내가 맡은 부분 주요코드(사진)
              <FontAwesomeIcon
                icon={technologyOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`text ${technologyOpen ? "open" : "closed"}`}>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectMyCinepic;
