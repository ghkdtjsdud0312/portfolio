import styled from "styled-components";

const AboutMeComp = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h2 {
    background-color: #fff;
    padding: 50px;
    font-weight: 600;
  }
  .aboutme {
    .introduce {
      font-size: 4em;
      font-weight: 600;
      text-align: center;
      margin-top: 6%;
    }
    .title {
      display: flex;
      align-items: center;
      margin-top: 40px;
      img {
        width: 20%;
        margin-left: 10%;
      }
      .content {
        border: 3px solid #fff;
        border-radius: 10px;
        padding: 50px;
        margin: 0 auto;
        .text {
          display: flex;
          line-height: 55px;
          p {
            font-weight: 600;
            font-size: 1.7em;
            width: 25%;
            white-space: nowrap;
          }
          p:nth-child(2) {
            margin: 0 35px;
            font-size: 1.6em;
            font-weight: 400;
            width: 80%;
          }
        }
      }
    }
  }
`;

const AboutMe = ({ active }) => {
  return (
    <>
      <AboutMeComp id="about" active={active}>
        <h2>About Me</h2>
        <div className="aboutme">
          <p className="introduce">저를 소개합니다!</p>
          <div className="title">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpeg?alt=media&token=73757bfe-eaaf-475a-8967-401349e31732"
              alt="이력서 사진"
            />
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
                  KH 정보교육원
                  <br />- Python 활용 빅테이터 기반 금융 솔루션 UI 개발자
                  양성과정
                  <br />
                  (23.08.14 ~ 24.02.21)
                </p>
              </div>
            </div>
          </div>
        </div>
      </AboutMeComp>
    </>
  );
};

export default AboutMe;
