import styled from "styled-components";

const SkillsComp = styled.section`
  width: 100%;
  padding-top: 80px;
  padding-left: 50px;
  height: 1200px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    .box {
      padding: 10px;
      background-color: #fff;
      border: 1px solid #303030;
      border-radius: 10px;
      width: 80%;
      height: 500px;
      text-align: center;
      padding-top: 20px;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      h2 {
        font-size: 2em;
      }
      .box2 {
        border: 1px solid grey;
        height: 400px;
        border-radius: 10px;
        margin-top: 30px;
        padding: 10px 0;
        p {
          font-size: 1em;
          line-height: 30px;
          width: 50px;
          height: 50px;

          img {
            border: 1px solid #505050;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

const Skills = ({ active }) => {
  return (
    <>
      <h2>skill</h2>
      <SkillsComp id="skills" active={active}>
        <div className="container">
          <div className="box">
            <h2>FrontEnd</h2>
            <div className="box2">
              <p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/html.svg?alt=media&token=9340655a-2cea-452f-b4c6-91c5924c3528"
                  alt="html_logo"
                />
              </p>
              <p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/css.png?alt=media&token=e57e05c6-ff6b-48db-be23-037d56f50ab6"
                  alt="css_logo"
                />
              </p>
              <p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3.png?alt=media&token=0c807d6a-260c-43b5-a2c4-48558d1dbe4c"
                  alt="자바스크립트 로고"
                />
              </p>
              <p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png?alt=media&token=6765040b-79b7-4646-9ef6-077acf2c0bb8"
                  alt="리액트"
                />
              </p>
              <p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react-native-768x890.png?alt=media&token=ad2c6787-a7cb-4a38-8664-7c1e9cfd3fc9"
                  alt="리액트네이티브"
                />
              </p>
            </div>
          </div>
          <div className="box">
            <h2>BackEnd</h2>
            <div className="box2">
              <p>SpringBoot</p>
              <p>Java</p>
              <p>Python</p>
            </div>
          </div>
          <div className="box">
            <h2>Framework</h2>
            <div className="box2">
              <p>AWS</p>
              <p>Elasticsearch</p>
              <p>Machine Learning</p>
            </div>
          </div>
          <div className="box">
            <h2>DataBase</h2>
            <div className="box2">
              <p>Oracle</p>
              <p>MySQL</p>
              <p>DBeaver</p>
            </div>
          </div>
          <div className="box">
            <h2>Tool</h2>
            <div className="box2">
              <p>intelliJ</p>
              <p>Visual Studio Code</p>
              <p>Pycharm</p>
              <p>Postman</p>
              <p>Swagger IU</p>
            </div>
          </div>
          <div className="box">
            <h2>Collaboration</h2>
            <div className="box2">
              <p>Github</p>
            </div>
          </div>
        </div>
      </SkillsComp>
    </>
  );
};

export default Skills;
