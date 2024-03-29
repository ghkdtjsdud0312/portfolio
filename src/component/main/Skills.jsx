import styled from "styled-components";

const SkillsComp = styled.section`
  width: 90%;
  padding: 60px 0;
  margin-left: 15%;
  h2 {
    text-align: center;
    padding-bottom: 50px;
    font-weight: 600;
  }
  .container {
    width: 80%;
    box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
    h3 {
      text-align: left;
      padding: 30px;
      font-size: 1.3em;
      font-weight: 600;
      color: #146314;
    }
    .box {
      text-align: center;
      line-height: 100px;
      .tool {
        display: flex;
        align-items: center;
        margin-left: 10%;
        p {
          font-size: 1.3em;
          font-weight: 600;
        }
        img {
          width: 6%;
          margin-left: 7%;
        }
      }
    }
  }
  @media screen and (width: 768px) {
    .container h3 {
      font-size: 1.4em;
      color: #146314;
    }
    .container .box .tool p {
      font-size: 1.2em;
      margin-top: 30px;
    }
    .container .box .tool img {
      width: 8%;
    }
  }
`;

const Skills = ({ active }) => {
  return (
    <>
      <SkillsComp id="skills" active={active}>
        <h2>skills</h2>
        <div className="container">
          <h3>배운내용 중 활용가능한 기술</h3>
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
            </div>
            <div className="tool">
              <p>BackEnd</p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/15.png?alt=media&token=1f85df13-9c3e-4e4e-b1d5-be603240a933"
                alt="java"
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
        </div>
      </SkillsComp>
    </>
  );
};

export default Skills;
