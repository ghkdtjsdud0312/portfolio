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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%82%E1%85%A2%E1%84%8B%E1%85%B1%E1%84%8E%E1%85%B5.png?alt=media&token=11d07d02-8529-475d-a7cc-402843c98604"
                alt="지도1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/768px.png?alt=media&token=de1cae90-90ad-4f79-82d5-90997897d783"
                alt="지도2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%202.png?alt=media&token=f0271184-ef65-4520-8c9c-b359a3442d9e"
                alt="지도 반응형"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5.png?alt=media&token=c5561c61-4c90-4b83-bb9d-6ebcda618c43"
                alt="관리자 메인"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/screencapture-workoutbuddys-store-AdminMain-2024-02-08-23_29_15.png?alt=media&token=1ee37cbe-7271-41b7-9849-c0b060ba6a17"
                alt="관리자 메인 반응형1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/screencapture-workoutbuddys-store-AdminMain-2024-02-08-23_29_03.png?alt=media&token=3200e6b3-21fa-461a-b64f-d4d5d3af9cb3"
                alt="관리자 메인 반응형2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A9%E1%86%A8%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8.png?alt=media&token=265d5be2-dbfd-41e9-a93a-589039917a4a"
                alt="종목 등록"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/screencapture-workoutbuddys-store-AdminBoardRegistration-2024-02-08-23_27_58.png?alt=media&token=99da89cd-6d7b-4e92-b977-d05811d7ee0c"
                alt="종목 등록 반응형"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/screencapture-workoutbuddys-store-AllBoardContent-2024-02-08-23_27_44.png?alt=media&token=222dcab4-8275-474b-a299-2755b9ece41c"
                alt="종목 목록"
              />
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
                href="https://boom-quit-f07.notion.site/WOB-WorkOut-Buddy-9293ded1d23f4528b01df10358bee2d5"
                target="_blank">
                <button>노션 보기</button>
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
