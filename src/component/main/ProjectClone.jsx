import ProjectComp from "./ProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectClone = () => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      <ProjectComp>
        <h3>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/logo--koreanair-pc.png?alt=media&token=ed162c1c-fcec-4688-a2a1-cdec902c5bd0"
            alt="대한항공 로고 사진"
          />
          대한항공 클론페이지 - 대한항공 페이지 클론해보기
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
              <div>주제</div>
              <p>
                v 대한항공 클론페이지를 똑같이 만들어봄으로써 HTML,CSS 구조
                익혀보기
              </p>
            </div>
            <div className="title">
              <div>프로젝트 기간/인원</div>
              <p>v 기간 :2023.10.09 ~ 2023.10.16 / 개인</p>
            </div>
            <div className="title">
              <div>개발 목표</div>
              <p>전반적인 HTML과 CSS 익히기</p>
              <p>화면 똑같이 구현해보기</p>
            </div>
            <div className="title">
              <div>개인 역할(front)</div>
              <div className="role">
                <p>HTML과 CSS 사용으로 대한항공 페이지 똑같이 구현해보기</p>
              </div>
            </div>

            <div className="title">
              <h3>사용 기술</h3>
              <div className="skills">
                <p>HTML</p>
                <p>CSS</p>
                <p>github</p>
              </div>
            </div>
            <div className="title">
              <div>Url 연결</div>
              <a href="https://www.koreanair.com/?hl=ko " target="_blank">
                <button>대한항공사이트</button>
              </a>
              <a
                href="https://ghkdtjsdud0312.github.io/Myprj-ClonePage-/"
                target="_blank">
                <button>클론사이트</button>
              </a>
              <a href="https://drive.google.com/file/d/1zq3DRZ6ujNnHhtWn7VtL5CHL7v1vPKJz/view?usp=drive_link ">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectClone;
