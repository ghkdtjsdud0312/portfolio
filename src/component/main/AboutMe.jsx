import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AboutMeComp = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  .container {
    padding-top: 30px;
    h2 {
      text-align: center;
    }
    .profile {
      padding-top: 30px;
      text-align: center;
      img {
        width: 30%;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      text-align: center;
      padding-top: 50px;
      div {
        line-height: 60px;
        p {
          font-size: 2em;
          font-weight: 600;
          border-bottom: 3px solid black;
        }
        span {
          font-size: 1.2em;
        }
      }
    }
    .content2 {
      text-align: center;
      padding-top: 50px;
      div {
        line-height: 60px;
        p {
          font-size: 2em;
          font-weight: 600;
          border-bottom: 3px solid black;
        }
        span {
          font-size: 1.2em;
        }
      }
      button {
        padding: 10px;
        border: none;
        border: 2px solid white;
        background-color: rgb(255, 192, 203);
        cursor: pointer;
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
      <h2>About Me</h2>
      <AboutMeComp id="about" active={active}>
        <div className="container">
          <h2>안녕하세요! 프론트 개발자를 꿈꾸는 황선영입니다.</h2>
          <div className="profile">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpeg?alt=media&token=73757bfe-eaaf-475a-8967-401349e31732"
              alt="이력서 사진"
            />
          </div>
          <div className="content">
            <div>
              <p>Name</p>
              <span>황선영</span>
            </div>
            <div>
              <p>Birth</p>
              <span>1996.03.12</span>
            </div>
            <div>
              <p>Tel</p>
              <span>010-4922-2180</span>
            </div>
            <div>
              <p>E-mail</p>
              <span>ghkdtjsdud0312@gmail.com</span>
            </div>
          </div>
          <div className="content2">
            <div>
              <p>introduce Me!</p>
              <span>
                상상했던 모든걸 현실로 만들어 낼 수 있는
                황선영입니다!(깃주소,노션,커리어 추가하기)
              </span>
            </div>
            <button onClick={clickButton}>More</button>
          </div>
        </div>
      </AboutMeComp>
    </>
  );
};

export default AboutMe;
