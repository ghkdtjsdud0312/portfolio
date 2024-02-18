import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProjectComp from "./ProjectStyle";

const ProjectMyWob = () => {
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
            <div>WOB(WorkOut Buddy)</div>
            <p>상세구현내용(내가 맡은 부분)</p>
            <img
              src=""
              alt="내가 맡은 부분 사진(관리자,지도)"
              style={{ width: "70%", margin: "13%" }}
            />
            <div className="clickbtn">
              <a href="" target="_blank">
                <button>대한항공사이트(도메인주소)</button>
              </a>
              <a href="">
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
              <p>비활성화/ 활성화 버튼</p>
              <p>등록/수정/삭제</p>
              <p>페이지네이션</p>
              <p>내 현재위치</p>
              <p>검색</p>
              <p>햄버거 사이드 버튼</p>
              <p>반응형</p>
            </div>
            <h3 onClick={toggleImplementationAccordion}>
              구현 기능 및 설명
              <FontAwesomeIcon
                icon={implementationOpen ? faAngleUp : faAngleDown}
              />
            </h3>
            <div className={`texts ${implementationOpen ? "open" : "closed"}`}>
              <div className="text">
                <p>관리자페이지 기능 구현(전체 종목 목록/등록)</p>
                <span>
                  일정등록과 클래스등록을 할 때 관리자가 종목 등록을 해줘야
                  하므로 종목이름, 종목사진, 종목로고를 업로드 하는 기능 구현
                </span>
                <span>
                  종목이 등록되면 관리자 페이지 종목 목록에서 활성화 시키는
                  종목은 이용자가 일정등록이나 클래스등록 할 때 일정에 보여 지고
                  비활성화 시키는 종목은 이용자가 등록하는 페이지에서는 종목이
                  보여 지지 않게 하고 화면과 DB 내용에도 글씨와 색으로 표시됨
                </span>
                <span>
                  비활성화, 활성화 하는 부분은 수정버튼으로 바꿀 수가 있고
                  화면과 DB 내용에도 바뀌어짐
                </span>
                <span>
                  완전히 삭제를 하고 싶은 항목은 삭제버튼을 누르면 화면과 DB
                  내용에서 완전히 삭제됨
                </span>
                <span>페이지네이션 기능으로 5개씩 보여줌</span>
                <span>
                  등록되거나 수정, 삭제 될 때 모달이 띄어지면서 알려줌
                </span>
                <span>반응형 적용</span>
              </div>
              <div className="text">
                <p>지도 API 기능 구현</p>
                <span>내 현재 위치를 마커로 표시하여 알려줌 </span>
                <span>
                  이용자가 등록한 일정등록/클래스등록의 DB 내용들이 주소API로
                  등록 된 주소가 위도, 경도 값으로 바뀌어 지도에 마커로 표시되게
                  함
                </span>
                <span>
                  검색바에 원하는 종목을 치면 검색한 종목이 마커로 지도에
                  띄어지면서 내 주변에 내가 원하는 종목이 뜨는지 확인할 수 있고
                  선택할 수도 있음
                </span>
                <span>
                  검색바에 종목을 적고 enter나 확인을 누르면 검색 바의 글은
                  초기화 되고, 내가 검색한 종목이 제목 밑에 쓰여 짐
                </span>
                <span>
                  지도에 띄어진 마커를 하나씩 누르면 그에 맞는 간략한 상세
                  내용들이 나옴
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

export default ProjectMyWob;
