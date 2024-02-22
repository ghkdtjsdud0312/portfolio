import ProjectComp from "./ProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCinepic = ({ active }) => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <ProjectComp id="project" active={active}>
        <h3>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/CinePicLogo.png?alt=media&token=5f8c28c4-af90-403f-a26c-935b5fc9bc57"
            alt="씨네픽사진"
          />
          씨네픽(CinePic) - 사용자 맞춤 영화 추천 및 커뮤니티를 활용한 영화
          플랫폼 사이트
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
            {/* 필요한 만큼 슬라이드를 추가하세요 */}
          </Swiper>
          <div className="titlebox">
            <div className="title">
              <div>프로젝트 차별점, 목적성</div>
              <p>v 차별성 및 목적성 : </p>
            </div>
            <div className="title">
              <div>프로젝트 기간/인원</div>
              <p>v 기간 : 2024.01.17 ~ 2024.02.21</p>
              <p>v 팀 프로젝트 : 6명</p>
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
              <p>v 머신러닝을 활용한 맞춤 영화 추천</p>
              <p>v Elasticsearch를 활용한 영화 검색</p>
            </div>
            <div className="title">
              <div>개인 역할(front,back,DB)</div>
              <p>v 지도 API(지역이나 구 검색,상세 정보)</p>
              <p>v 취향 등록/수정(검색,선택(최대3개))</p>
              <p>v 모달</p>
              <p>v 빈응형</p>
            </div>

            <div className="title">
              <div>사용 기술</div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-removebg-preview.png?alt=media&token=ca6043e4-79da-4cd2-8480-79b15a87af29"
                alt="react_logo"
                style={{ width: "10%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%E1%84%87%E1%85%AE%E1%84%90%E1%85%B3.webp?alt=media&token=a7166685-f461-4d87-af33-4975568b94a8"
                alt="springboot"
                style={{ width: "10%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/python-removebg-preview.png?alt=media&token=f712ed2a-33ac-4f1d-b040-adb75ef0ddbe"
                alt="python"
                style={{ width: "4%", margin: "0 5%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A5%E1%84%89%E1%85%B5%E1%86%AB%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC.png?alt=media&token=f04cd4b9-f3b5-4d18-acd8-13b143aaa02f"
                alt="Machine Learning"
                style={{ width: "5%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/MysqlWorkBench-removebg-preview.png?alt=media&token=734f13ec-237d-431b-b551-b856df51ab08"
                alt="MySQL"
                style={{ width: "7%", margin: "0 5%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%83%E1%85%B5%E1%84%87%E1%85%B5%E1%84%87%E1%85%A5-removebg-preview.png?alt=media&token=e19012da-bc02-4c99-bac5-d067cdb5b580"
                alt="DBeaver"
                style={{ width: "7%", margin: "0 auto" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5%E1%86%A8%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5-removebg-preview.png?alt=media&token=1e3c76a7-e593-48a8-aee4-38a7debef208"
                alt="Elasticsearch"
                style={{ width: "8%", margin: "0 3%" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29"
                alt="github"
                style={{ width: "5%" }}
              />
            </div>
            <div className="title">
              <div>Url 연결</div>
              <a href="https://cinepic2024.site" target="_blank">
                <button>씨네픽 사이트</button>
              </a>
              <a
                href="https://www.notion.so/793844f3d814450396e7ce8079d0c4d3"
                target="_blank">
                <button>구현 내용 보기</button>
              </a>
              <a href="https://drive.google.com/file/d/1J9DdKEUUjsJXUvm6u-VhXbOb3FTYmh5f/view?usp=drive_link">
                <button>PDF 보기</button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectCinepic;
