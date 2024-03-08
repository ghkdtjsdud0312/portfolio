import ProjectComp from "./ProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8%20%E1%84%92%E1%85%AE%20%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC.png?alt=media&token=94e48946-d663-49e5-9525-32ca9b69b0ce"
                alt="지도"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%20%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9%20768px.png?alt=media&token=c56e4bb2-096b-41ec-9e65-2c66efde6a16"
                alt="반응형"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8E%E1%85%B1%E1%84%92%E1%85%A3%E1%86%BC%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8.png?alt=media&token=0a0b599f-c65a-4079-8ddb-e2fed2a553c4"
                alt="취향등록"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8E%E1%85%B1%E1%84%92%E1%85%A3%E1%86%BC%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.png?alt=media&token=a037fa90-5139-48f6-8f45-f73eb7cf187e"
                alt="취향 수정"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%20768px.png?alt=media&token=e1809b09-025e-4bbb-af03-be0e9256d714"
                alt="반응형"
              />
            </SwiperSlide>
          </Swiper>
          <div className="titlebox">
            <div className="title">
              <div>기존 사이트와의 차별점</div>
              <p>
                v 씨네픽은 사이트를 이용하는 사람들이 직접 남긴 후기 및 비슷한
                분야를 선호하는 사람들과의 소통과 모임을 통해 활동할 수 있는
                것이 차별적인 것이 포인트!
              </p>
            </div>
            <div className="title">
              <div>프로젝트 기간 및 인원</div>
              <p>v 2024.01.17 ~ 2024.02.21 / 6명</p>
            </div>
            <div className="title">
              <div>개발 목표</div>
              <p>v 화면 구성부터 백엔드까지 전반적인 구현 경험</p>
              <p>v CRUD 구현 및 다양한 API 활용</p>
              <p>
                v React와 SpringBoot, jwt, 웹소켓, Python을 이용한 여러 기술
                익히기
              </p>
              <p>v 머신러닝을 활용한 맞춤 영화 추천</p>
              <p>v Elasticsearch를 활용한 영화 검색</p>
              <p>v wbs 및 단위테스트 진행</p>
            </div>
            <div className="title">
              <div>개인 역할(front,back,DB)</div>
              <div className="role">
                <p>v 지도 API(지역이나 구 검색,상세 정보)</p>
                <p>v 취향 등록/수정(검색,선택(최대3개))</p>
                <p>v 모달</p>
                <p>v 빈응형</p>
              </div>
            </div>

            <div className="title">
              <div>사용 기술</div>
              <div className="skills">
                <p>React</p>
                <p>Spring boot</p>
                <p>Python</p>
                <p>Machine Learning</p>
                <p>MySQL</p>
                <p>DBeaver</p>
                <p>Elasticsearch</p>
                <p>github</p>
              </div>
            </div>
            <div className="title">
              <div>Url 연결</div>
              <a
                href="https://cinepic2024.site"
                target="_blank"
                rel="noreferrer noopener">
                <button>씨네픽 사이트</button>
              </a>
              <a
                href="https://boom-quit-f07.notion.site/cinepic-da06b8c802584538a6d9d91894e0dfb0"
                target="_blank"
                rel="noreferrer noopener">
                <button>노션 보기</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1J9DdKEUUjsJXUvm6u-VhXbOb3FTYmh5f/view?usp=drive_link"
                rel="noreferrer noopener">
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
