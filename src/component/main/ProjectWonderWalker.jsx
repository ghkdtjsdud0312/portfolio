import ProjectComp from "./ProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectWonderWalker = ({ active }) => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      <ProjectComp id="project3" active={active}>
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5.png?alt=media&token=210dccb4-2bcf-47b1-a081-a8e1cc7e53db"
                alt="메인페이지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%92%E1%85%AE%E1%84%80%E1%85%B5%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A81.jpg?alt=media&token=f4041fa5-8f9c-4447-91ae-c6936c06ac33"
                alt="후기목록"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%92%E1%85%AE%E1%84%80%E1%85%B5%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A81.jpg?alt=media&token=4ce69ac7-cace-4a28-9c07-1c2a328ef103"
                alt="후기등록"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%A7%E1%84%92%E1%85%A2%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%B5%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8(%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AB).png?alt=media&token=3fa15726-ec6b-472a-adfb-ec3214105d7c"
                alt="후기등록1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%A7%E1%84%92%E1%85%A2%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%B5%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A82(%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AB).png?alt=media&token=d230879c-1741-4309-8b9e-2aac8fad3e49"
                alt="후기 등록2"
              />
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
            <div className="title">
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
              <a href="https://boom-quit-f07.notion.site/WonderWalker-61839ed56a06422c95a44156d09b59be">
                <button>노션 보기</button>
              </a>
              <a href="()=> false">
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
