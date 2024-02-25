import styled from "styled-components";
import mainBg from "../../images/wave6.jpg";

const SkillsComp = styled.section`
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
    z-index: -1; /* 텍스트보다 뒤에 배치 */
  }
  h2 {
    background-color: #fff;
    font-weight: 600;
    padding: 45px;
  }
  .box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ece1e1;
    box-shadow: 3px 3px 3px grey;
    border-radius: 10px;
    padding: 2%;
    width: 96%;
    margin-left: 2%;
    margin-top: 2%;
    img {
      width: 13%;
      margin-right: 3%;
    }
    .tool {
      margin: 2%;
      p {
        font-size: 2em;
        font-weight: 600;
        padding-bottom: 3%;
      }
    }
  }
  .box2 {
    text-align: center;
    h3 {
      margin: 1% 0;
      font-size: 2.3em;
      font-weight: 600;
    }
    .tool2 {
      margin: 2%;
      background-color: #fff;
      border: 1px solid #ece1e1;
      box-shadow: 3px 3px 3px grey;
      border-radius: 10px;
      padding: 1%;
      img {
        width: 4%;
        margin-right: 5%;
      }
    }
  }
  @media screen and (width: 768px) {
    .box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 500px;
    }
    .box img {
      width: 13%;
    }
    .box2 h3 {
      margin-top: 3%;
    }
    .box2 .tool2 {
      padding: 3%;
    }
    .box2 .tool2 img {
      width: 7%;
    }
  }
  @media screen and (width: 480px) {
    .box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 450px;
    }
    .box img {
      width: 20%;
    }
    .box2 h3 {
      margin-top: 7%;
    }
    .box2 .tool2 {
      padding: 3%;
    }
    .box2 .tool2 img {
      width: 12%;
    }
  }
`;

const Skills = ({ active }) => {
  return (
    <>
      <SkillsComp id="skills" active={active}>
        <h2>skills - 배운 기술들</h2>
        <div className="box">
          <div className="tool">
            <p>FrontEnd</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/1.png?alt=media&token=ae52b3a5-07cd-43ca-bd53-6607e6bc9318"
              alt="html logo"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/2.png?alt=media&token=77182675-3300-4470-9aed-fe5e2e200fc8"
              alt="css"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/3.png?alt=media&token=92ee5883-f206-48af-bae1-9566dc6e7c80"
              alt="js"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/4.png?alt=media&token=3fac5403-89a4-44a4-a920-499f6152ee80"
              alt="react_logo"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/5.png?alt=media&token=73db3a1c-8ad1-4c7b-8ba6-9c666576c7d3"
              alt="react-native_logo"
            />
          </div>
          <div className="tool">
            <p>BackEnd</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/10.png?alt=media&token=ff39a9fa-27dc-4a99-acf9-b1fabb7c1a7d"
              alt="python"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/15.png?alt=media&token=1f85df13-9c3e-4e4e-b1d5-be603240a933"
              alt="java"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/17.png?alt=media&token=fcf56744-8ae3-41e3-804d-f7cd9b796b9a"
              alt="머신러닝"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/18.png?alt=media&token=0c06ad69-9595-4f7d-974d-5205ec8fa02d"
              alt="스프링부트"
            />
          </div>
          <div className="tool">
            <p>DataBase</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/6.png?alt=media&token=ef0e8bcd-080c-49d1-9cdc-c2a5f1d7d765"
              alt="oracle"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/7.png?alt=media&token=afb21dd4-d4a5-426f-9c20-8628147c30ea"
              alt="dbeaver"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/8.png?alt=media&token=7c8b05b7-64cc-4d0c-9a77-c0dfb21fb429"
              alt="elasticsearch"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/14.png?alt=media&token=e6225944-bf01-40f1-926e-f59b487c2594"
              alt="mysql"
            />
          </div>
          <div className="tool">
            <p>Framework</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/20.png?alt=media&token=5b99b8d0-9695-4ced-ba16-649bd0f32f4f"
              alt="aws"
            />
          </div>
          <div className="tool">
            <p>IDE</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/9.png?alt=media&token=12125049-eece-41ec-b0bf-12f601670d6e"
              alt="figma"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/11.png?alt=media&token=0fb771cf-36cc-4e05-a762-03492e219e0e"
              alt="postman"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/12.png?alt=media&token=2592f01a-6ae0-4d1a-bdf9-3b52f9b07397"
              alt="vscode"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/13.png?alt=media&token=a6d489d9-e0a5-4c10-ab28-024223bd51c4"
              alt="intelliJ"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/19.png?alt=media&token=05c5d265-5067-4ff6-b5b8-d09cedaae5d8"
              alt="스웨거"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/21.png?alt=media&token=ebdee8dc-bbf8-4a22-896f-0b63b1e47b1d"
              alt="파이참"
            />
          </div>
          <div className="tool">
            <p>Collaboration</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%20(1).png?alt=media&token=e022f188-4b00-4751-8c6e-59bda0797ffc"
              alt="깃헙"
            />
          </div>
        </div>
        <div className="box2">
          <h3>활용가능한 기술</h3>
          <div className="tool2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/1.png?alt=media&token=ae52b3a5-07cd-43ca-bd53-6607e6bc9318"
              alt="HTML"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/2.png?alt=media&token=77182675-3300-4470-9aed-fe5e2e200fc8"
              alt="CSS"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/4.png?alt=media&token=3fac5403-89a4-44a4-a920-499f6152ee80"
              alt="리액트"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/6.png?alt=media&token=ef0e8bcd-080c-49d1-9cdc-c2a5f1d7d765"
              alt="오라클"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/7.png?alt=media&token=afb21dd4-d4a5-426f-9c20-8628147c30ea"
              alt="디비버"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/14.png?alt=media&token=e6225944-bf01-40f1-926e-f59b487c2594"
              alt="mysql"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/15.png?alt=media&token=1f85df13-9c3e-4e4e-b1d5-be603240a933"
              alt="자바"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/18.png?alt=media&token=0c06ad69-9595-4f7d-974d-5205ec8fa02d"
              alt="스트링부트"
            />
          </div>
          <h3>어느정도 가능한 기술</h3>
          <div className="tool2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/3.png?alt=media&token=92ee5883-f206-48af-bae1-9566dc6e7c80"
              alt="js"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/5.png?alt=media&token=73db3a1c-8ad1-4c7b-8ba6-9c666576c7d3"
              alt="react-native"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/8.png?alt=media&token=7c8b05b7-64cc-4d0c-9a77-c0dfb21fb429"
              alt="엘라스틱서치"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/10.png?alt=media&token=ff39a9fa-27dc-4a99-acf9-b1fabb7c1a7d"
              alt="파이썬"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/17.png?alt=media&token=fcf56744-8ae3-41e3-804d-f7cd9b796b9a"
              alt="머신러닝"
            />
          </div>
        </div>
      </SkillsComp>
    </>
  );
};

export default Skills;
