import ProjectComp from "./ProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  SwiperCore.use([Navigation, Pagination]);

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
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            style={{ width: "40%" }}
            navigation
            pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className="slide">가로 슬라이드 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">가로 슬라이드 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">가로 슬라이드 3</div>
            </SwiperSlide>
          </Swiper>
          <div className="titlebox">
            <div className="title">
              <div>기존 사이트와의 차별점</div>
              <p>
                v WOB는 내 주변에 같은 종목의 운동을 원하는 사람들과 운동하거나
                레슨을 받을 수 있고, 실시간으로 소통도 할 수 있는 앱 형식의
                사이트
              </p>
            </div>
            <div className="title">
              <div>프로젝트 기간/인원</div>
              <p>v 2023.12.06 ~ 2024.01.03 / 5명</p>
            </div>
            <div className="title">
              <div>개발 목표</div>
              <p>v 화면 구성부터 백엔드까지 전반적인 구현 경험</p>
              <p>v 게시판 CRUD 구현 및 다양한 API 활용</p>
              <p>
                v React와 SpringBoot, jwt, 웹소켓, Python을 이용한 여러 기술
                익히기
              </p>
              <p>v wbs 및 단위테스트 진행</p>
            </div>
            <div className="title">
              <div>개인 역할(front,back,DB)</div>
              <div className="role">
                <p>v 지도 API(현재 위치, 검색)</p>
                <p>v 주소 API</p>
                <p>
                  v 관리자페이지(비활성화/활성화 버튼, 등록/수정/삭제,
                  페이지네이션)
                </p>
                <p>v 햄버거 사이드바</p>
                <p>v 빈응형</p>
              </div>
            </div>
            <div className="title">
              <h3>사용 기술</h3>
              <div className="skills">
                <p>React</p>
                <p>Springboot</p>
                <p>Python</p>
                <p>AWS</p>
                <p>MySQL</p>
                <p>DBeaver</p>
                <p>github</p>
              </div>
            </div>
            <div className="title">
              <div>Url 연결</div>
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
