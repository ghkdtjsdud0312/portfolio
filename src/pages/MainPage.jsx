import React from "react";
import MainScrollAni from "../component/main/MainScrollAni";
import AboutMe from "../component/main/AboutMe";
import Skills from "../component/main/Skills";
import ProjectWob from "../component/main/ProjectWob";
import ProjectCinepic from "../component/main/ProjectCinepic";
import ProjectClone from "../component/main/ProjectClone";
import ProjectWonderWalker from "../component/main/ProjectWonderWalker";
import EndPage from "../component/main/EndPage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainPage = ({ activeSection }) => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      {/* 부모 요소에 클래스 추가 */}
      <Swiper
        className="banner"
        style={{ height: "1000px" }} // 높이 조절
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <MainScrollAni />
        </SwiperSlide>
        {/* 각 섹션들 */}
        <SwiperSlide>
          <AboutMe active={activeSection === "about"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skills active={activeSection === "skills"} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCinepic active={activeSection === "project"} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWob />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWonderWalker />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectClone />
        </SwiperSlide>
        <SwiperSlide>
          <EndPage />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainPage;
