import styled from "styled-components";
import mainBg from "../../images/laptop.jpg";

const AboutMeComp = styled.section`
  width: 100%;
  height: 1000px;
  position: relative;
  overflow: hidden; /* 자식 요소의 넘치는 부분을 숨김 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${mainBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    filter: blur(5px);
    z-index: -1; /* 텍스트보다 뒤에 배치 */
  }
  h2 {
    background-color: #fff;
    padding: 50px;
    font-weight: 600;
  }
  .aboutme {
    padding-top: 5%;
    .title {
      display: flex;
      align-items: center;
      margin-top: 40px;
      img {
        width: 20%;
        margin-left: 10%;
        border-radius: 100%;
      }
      .content {
        background-color: #fff;
        box-shadow: 3px 3px 3px grey;
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
            color: #303030;
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
        <h2>About Me - 저를 소개합니다!</h2>
        <div className="aboutme">
          <div className="title">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%89%E1%85%A5%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.png?alt=media&token=54fb36fd-961e-4b37-b31c-a2eaba9a9b1b"
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
