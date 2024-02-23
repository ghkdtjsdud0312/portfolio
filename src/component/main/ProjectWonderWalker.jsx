import ProjectComp from "./ProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectWonderWalker = () => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      <ProjectComp>
        <h3>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-10-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.46.51.png?alt=media&token=18c82efb-3217-4d31-89fc-6877d9599f05"
            alt="Wonderwalker 로고 사진"
            style={{ width: "11%" }}
          />
          원더워커(WonderWalker) - 1인 여행자 커뮤니티 사이트
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
                v 원더워커 사이트는 1인 여행자들이 혼자 여행을 하면 필요한
                팁이나 경험자들을 통해 올려둔 글들을 참고하여 도움이 될 수
                있도록 만들어진 사이트
              </p>
            </div>
            <div className="title">
              <div>프로젝트 기간/인원</div>
              <p>v 기간 : 2023.11.01 ~ 2023.11.15 / 4명</p>
            </div>
            <div className="text">
              <div>개발목표</div>
              <p>v 화면 구성부터 백엔드까지 전반적인 구현 경험</p>
              <p>v React와 java,oracle을 이용해 기술 익히기</p>
              <p>v CRUD 구현 및 다양한 API 활용</p>
            </div>
            <div className="title">
              <div>개인역할(front,back,DB)</div>
              <div className="role">
                <p>v DIY 여행일지 글쓰기</p>
                <p>목록(메인 슬라이드, 후기글, 후기 상세정보)</p>
                <p>등록(캘린더,후기글 작성 및 등록)</p>
              </div>
            </div>
            <div className="title">
              <h3>사용 기술</h3>
              <div className="skills">
                <p>React</p>
                <p>Java</p>
                <p>Oracle</p>
                <p>github</p>
              </div>
            </div>
            <div className="title">
              <div>Url 연결</div>
              <a href="">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectWonderWalker;
