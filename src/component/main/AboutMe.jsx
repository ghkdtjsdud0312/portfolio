import styled from "styled-components";
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
  margin-left: 20%;
  .container {
    h2 {
      text-align: center;
      padding: 60px 0;
      font-weight: 600;
    }
    .wrapper {
      box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.2);
      margin: 0 auto;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      .profile {
        width: 30%;
        .profileImage {
          width: 300px;
          padding-bottom: 300px;
          margin-left: 30%;
          position: relative;
          overflow: hidden;
          border-radius: 100%;
          img {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -80px;
          }
        }
      }
      .content {
        width: 50%;
        padding: 40px;
        .content_info {
          line-height: 45px;
          p {
            font-weight: 600;
            font-size: 1.3em;
            width: 40%;
            white-space: nowrap;
            color: #146314;
            margin-right: 12%;
          }
          span {
            width: 60%;
            text-align: right;
            font-size: 1.1em;
            white-space: nowrap;
          }
          .tag {
            span {
              padding-right: 10px;
              font-size: 1.1em;
              white-space: nowrap;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1360px) {
      .container .title {
        flex-direction: column;
        align-items: center;
        margin-top: 5px; /* 이미지와 내용 사이의 여백 조절 */
      }

      .container .title img {
        width: 25%;
        margin: 2% auto;
      }
      .container .title .content {
        width: 90%;
        height: 520px;
        padding: 5%;
      }
    }
    @media screen and (max-width: 820px) {
      .container .title .content .text .expression {
        display: flex;
        flex-wrap: wrap;
      }
      .container .title .content .text .expression span {
        width: 30%;
      }
    }
    @media screen and (max-width: 480px) {
      .container .title .content {
        font-size: 0.8em;
        font-weight: 600;
        padding-right: 1%;
      }
    }
  }
`;

const AboutMe = ({ active }) => {
  return (
    <>
      <AboutMeComp id="about" active={active}>
        <div className="container">
          <h2>About Me</h2>
          <div className="wrapper">
            <div className="profile">
              <div className="profileImage">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%89%E1%85%A5%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.png?alt=media&token=54fb36fd-961e-4b37-b31c-a2eaba9a9b1b"
                  alt="이력서 사진"
                />
              </div>
            </div>
            <div className="content">
              <div className="content_info">
                <div className="name">
                  <p>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginRight: "5%" }}
                    />
                    Name
                  </p>
                  <span>황선영</span>
                </div>
                <div className="birth">
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ marginRight: "5%" }}
                    />
                    Birth
                  </p>
                  <span>1996.03.12</span>
                </div>
                <div className="tel">
                  <p>
                    <FontAwesomeIcon
                      icon={faMobileScreen}
                      style={{ marginRight: "5%" }}
                    />
                    Tel
                  </p>
                  <span>010-4922-2180</span>
                </div>
                <div className="email">
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "5%" }}
                    />
                    E-mail
                  </p>
                  <span>ghkdtjsdud0312@gmail.com</span>
                </div>
                <div className="course">
                  <p>
                    <FontAwesomeIcon
                      icon={faPen}
                      style={{ marginRight: "5%" }}
                    />
                    Course
                  </p>
                  <span>KH 정보교육원 (23.08.14 ~ 24.02.21)</span>
                </div>
                <div className="expression">
                  <p>
                    <FontAwesomeIcon
                      icon={faFaceSmile}
                      style={{ marginRight: "5%" }}
                    />
                    expression
                  </p>
                  <div className="tag">
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
        </div>
      </AboutMeComp>
    </>
  );
};

export default AboutMe;
