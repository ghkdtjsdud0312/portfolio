import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AboutMeComp = styled.section`
  width: 100%;
  height: 1200px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h2 {
    background-color: #fff;
    padding: 70px;
    font-weight: 600;
  }
  .container {
    .title {
      display: flex;
      align-items: center;
      padding-left: 8%;
      p {
        font-size: 5em;
        font-weight: 600;
      }
      p:nth-child(2) {
        color: #a70808;
      }
      img {
        width: 30%;
        border-radius: 50%;
        margin: 6%;
      }
    }
    .content {
      margin-bottom: 40px;
      .text {
        display: flex;
        line-height: 70px;
        p {
          font-weight: 600;
          font-size: 2em;
          padding-left: 10%;
          width: 30%;
        }
        p:nth-child(2) {
          font-size: 1.6em;
          width: 75%;
        }
      }
    }
  }
`;

const AboutMe = ({ active }) => {
  const navigate = useNavigate();

  // 자세히보기 버튼 누르면 이력서 pdf로 이동
  const clickButton = () => {
    navigate();
  };

  return (
    <>
      <AboutMeComp id="about" active={active}>
        <h2>About Me</h2>
        <div className="container">
          <div className="title">
            <p>Introduce Me!</p>
            <p>''</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpeg?alt=media&token=73757bfe-eaaf-475a-8967-401349e31732"
              alt="이력서 사진"
            />
          </div>
          <div className="content">
            <div className="text">
              <p>Name</p>
              <p>황선영</p>
            </div>
            <div className="text">
              <p>Birth</p>
              <p>1996.03.12</p>
            </div>
            <div className="text">
              <p>Tel</p>
              <p>010-4922-2180</p>
            </div>
            <div className="text">
              <p>E-mail</p>
              <p>ghkdtjsdud0312@gmail.com</p>
            </div>
            <div className="text">
              <p>Course history</p>
              <p>
                KH 정보교육원 - Python 활용 빅테이터 기반 금융 솔루션 UI 개발자
                양성과정(23.08.14 ~ 24.02.21)
              </p>
            </div>
          </div>
        </div>
      </AboutMeComp>
    </>
  );
};

export default AboutMe;
