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

const ProjectClone = ({ active }) => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      <ProjectComp id="project4" active={active}>
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%B0%E1%86%B8%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20(1).png?alt=media&token=34abe38f-9e97-49cf-8a01-a4a52cc69f6f"
                alt="로그인"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20(1).png?alt=media&token=c1f9e101-7d49-4020-af4b-9eb9d8651d24"
                alt="로그인 앱"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%B0%E1%86%B8%20%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%20%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20(1).png?alt=media&token=a6a3c87d-6040-4e26-8a54-77dce65d5e23"
                alt="메인"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%20%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20(1).png?alt=media&token=0622035b-4ef5-4ebf-a4ab-ad71d2ec2c17"
                alt="메인 앱"
              />
            </SwiperSlide>
          </Swiper>
          <div className="titlebox" style={{ height: "570px" }}>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                주제
              </div>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                대한항공 클론페이지를 똑같이 만들어봄으로써 HTML,CSS 구조
                익혀보기
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
                기간 :2023.10.09 ~ 2023.10.16 / 개인
              </p>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                개발 목표
              </div>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                전반적인 HTML과 CSS 익히기
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{ color: "#839589", marginRight: "10px" }}
                />
                화면 똑같이 구현해보기
              </p>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                개인 역할(front)
              </div>
              <div className="role">
                <p>
                  <FontAwesomeIcon
                    icon={faThumbTack}
                    style={{ color: "#839589", marginRight: "10px" }}
                  />
                  HTML과 CSS 사용으로 대한항공 페이지 똑같이 구현해보기
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faThumbTack}
                    style={{ color: "#839589", marginRight: "10px" }}
                  />
                  반응형 구현해보기
                </p>
              </div>
            </div>

            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                사용 기술
              </div>
              <div className="skills">
                <p>HTML</p>
                <p>CSS</p>
                <p>github</p>
              </div>
            </div>
            <div className="title">
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "10px" }} />
                Url 연결
              </div>
              <a
                href="https://boom-quit-f07.notion.site/6e9ef9b4ce6945e3a762a8cddacfa233"
                target="_blank"
                rel="noreferrer noopener">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    style={{ marginRight: "10px" }}
                  />
                  노션사이트
                </button>
              </a>
              <a
                href="https://ghkdtjsdud0312.github.io/Myprj-ClonePage-/"
                target="_blank"
                rel="noreferrer noopener">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    style={{ marginRight: "10px" }}
                  />
                  클론사이트
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1zq3DRZ6ujNnHhtWn7VtL5CHL7v1vPKJz/view?usp=drive_link"
                rel="noreferrer noopener">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    style={{ marginRight: "10px" }}
                  />
                  PDF 보기
                </button>
              </a>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default ProjectClone;
