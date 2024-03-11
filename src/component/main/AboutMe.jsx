import styled from "styled-components";
import mainBg from "../../images/wave6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faEnvelope,
  faPen,
  faUser,
  faCalendar,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

const AboutMeComp = styled.section`
  width: 100%;
  background-image: url(${mainBg});
  background-size: cover;
  padding: 100px 0;
  h2 {
    text-align: center;
    padding-bottom: 100px;
    font-weight: 600;
  }
  .aboutme {
    .title {
      display: flex;
      align-items: center;
      img {
        width: 20%;
        margin-left: 7%;
      }
      .content {
        background-color: #fff;
        box-shadow: 3px 3px 3px grey;
        border-radius: 10px;
        width: 60%;
        padding: 80px;
        margin: 0 auto;

        .text {
          display: flex;
          line-height: 80px;
          p {
            font-weight: 600;
            font-size: 1.7em;
            width: 25%;
            white-space: nowrap;
            color: #303030;
            margin-right: 10%;
          }
          span {
            width: 60%;
            font-size: 1.7em;
            white-space: nowrap;
          }
          .expression {
            span {
              padding-right: 6px;
              font-size: 1.7em;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1360px) {
    .aboutme .title {
      flex-direction: column;
      align-items: center;
      margin-top: 5px; /* 이미지와 내용 사이의 여백 조절 */
    }

    .aboutme .title img {
      width: 25%;
      margin: 2% auto;
    }
    .aboutme .title .content {
      width: 90%;
      height: 520px;
      padding: 5%;
    }
  }
  @media screen and (max-width: 820px) {
    .aboutme .title .content .text .expression {
      display: flex;
      flex-wrap: wrap;
    }
    .aboutme .title .content .text .expression span {
      width: 30%;
    }
  }
  @media screen and (max-width: 480px) {
    .aboutme .title .content {
      font-size: 0.8em;
      font-weight: 600;
      padding-right: 1%;
    }
  }
`;

const AboutMe = ({ active }) => {
  return (
    <>
      <AboutMeComp id="about" active={active}>
        <h2>About Me - 저를 소개합니다!</h2>
        <div className="aboutme">
          <div className="title">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%89%E1%85%A5%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.png?alt=media&token=54fb36fd-961e-4b37-b31c-a2eaba9a9b1b"
              alt="이력서 사진"
            />
            <div className="content">
              <div className="text">
                <p>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "5%" }}
                  />
                  Name
                </p>
                <span>황선영</span>
              </div>
              <div className="text">
                <p>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ marginRight: "5%" }}
                  />
                  Birth
                </p>
                <span>1996.03.12</span>
              </div>
              <div className="text">
                <p>
                  <FontAwesomeIcon
                    icon={faMobileScreen}
                    style={{ marginRight: "5%" }}
                  />
                  Tel
                </p>
                <span>010-4922-2180</span>
              </div>
              <div className="text">
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "5%" }}
                  />
                  E-mail
                </p>
                <span>ghkdtjsdud0312@gmail.com</span>
              </div>
              <div className="text">
                <p>
                  <FontAwesomeIcon icon={faPen} style={{ marginRight: "5%" }} />
                  Course history
                </p>
                <span>KH 정보교육원 (23.08.14 ~ 24.02.21)</span>
              </div>
              <div className="text">
                <p>
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    style={{ marginRight: "5%" }}
                  />
                  expression
                </p>
                <div className="expression">
                  <span># 끈기</span>
                  <span># 노력</span>
                  <span># 꼼꼼함</span>
                  <span># 계획적 </span>
                  <span># 협동적</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutMeComp>
    </>
  );
};

export default AboutMe;
