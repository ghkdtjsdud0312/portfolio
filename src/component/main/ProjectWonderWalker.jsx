import ProjectComp from "./ProjectStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
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
          원더워커(WonderWalker)
          <p>- 1인 여행자 커뮤니티 사이트</p>
        </h3>
        <div className="project">
          <Swiper
            autoHeight={true}
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
          <div className="titlebox" style={{ height: "650px" }}>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                기존 사이트와의 차별점
              </div>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                원더워커 사이트는 1인 여행자들이 혼자 여행을 하면 필요한 팁이나
                경험자들을 통해 올려둔 글들을 참고하여 도움이 될 수 있도록
                만들어진 사이트
              </p>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                프로젝트 기간/인원
              </div>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                기간 : 2023.11.01 ~ 2023.11.15 / 4명
              </p>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                개발목표
              </div>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                화면 구성부터 백엔드까지 전반적인 구현 경험
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                React와 java,oracle을 이용해 기술 익히기
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                CRUD 구현 및 다양한 API 활용
              </p>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                개인역할(front,back,DB)
              </div>
              <div className="role">
                <p>
                  <FontAwesomeIcon
                    icon={faThumbTack}
                    style={{ color: "#839589", marginRight: "10px" }}
                  />
                  DIY 여행일지 글쓰기
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faThumbTack}
                    style={{ color: "#839589", marginRight: "10px" }}
                  />
                  목록(메인 슬라이드, 후기글, 후기 상세정보)
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faThumbTack}
                    style={{ color: "#839589", marginRight: "10px" }}
                  />
                  등록(캘린더,후기글 작성 및 등록)
                </p>
              </div>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ marginRight: "10px", marginRight: "10px" }}
                />
                사용 기술
              </div>
              <div className="skills">
                <p>React</p>
                <p>Java</p>
                <p>Oracle</p>
                <p>github</p>
              </div>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                Url 연결
              </div>
              <a href="https://boom-quit-f07.notion.site/WonderWalker-61839ed56a06422c95a44156d09b59be">
                <button>
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    style={{ marginRight: "10px" }}
                  />
                  노션 보기
                </button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectWonderWalker;
