import styled from "styled-components";
import Card from "./Card";

const SkillsComp = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h2 {
    background-color: #fff;
    font-weight: 600;
    padding: 50px;
  }
  .box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    padding: 6%;
  }
`;

const Skills = ({ active }) => {
  const frontendImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/image-removebg-preview.png?alt=media&token=c09b94c7-d660-4253-9bc1-9743377865f2",
      alt: "html,css,js_logo",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-removebg-preview.png?alt=media&token=ca6043e4-79da-4cd2-8480-79b15a87af29",
      alt: "react_logo",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/react-native-768x890-removebg-preview.png?alt=media&token=3bbfe444-f8ce-42c3-9bb5-76c80af6b8b6",
      alt: "react-native_logo",
    },
  ];

  const backendImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%E1%84%87%E1%85%AE%E1%84%90%E1%85%B3.webp?alt=media&token=a7166685-f461-4d87-af33-4975568b94a8",
      alt: "springboot",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/java.png?alt=media&token=abc2ae69-1f2c-42dc-8c74-bc25fcbad799",
      alt: "java",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/python-removebg-preview.png?alt=media&token=f712ed2a-33ac-4f1d-b040-adb75ef0ddbe",
      alt: "python",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%86%E1%85%A5%E1%84%89%E1%85%B5%E1%86%AB%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC.png?alt=media&token=f04cd4b9-f3b5-4d18-acd8-13b143aaa02f",
      alt: "Machine Learning",
    },
  ];

  const databaseImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/oracle-removebg-preview.png?alt=media&token=2fde7c80-4903-4f8b-8548-64df850c9341",
      alt: "Oracle",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/MysqlWorkBench-removebg-preview.png?alt=media&token=734f13ec-237d-431b-b551-b856df51ab08",
      alt: "MySQL",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%83%E1%85%B5%E1%84%87%E1%85%B5%E1%84%87%E1%85%A5-removebg-preview.png?alt=media&token=e19012da-bc02-4c99-bac5-d067cdb5b580",
      alt: "DBeave",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5%E1%86%A8%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5-removebg-preview.png?alt=media&token=1e3c76a7-e593-48a8-aee4-38a7debef208",
      alt: "Elasticsearch",
    },
  ];

  const frameworkImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/aws2-removebg-preview.png?alt=media&token=c2fe2b0c-4506-4e80-92aa-3d17c143efd4",
      alt: "AWS",
    },
  ];

  const ideImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/IntelliJ_IDEA-removebg-preview.png?alt=media&token=147db38f-8f7f-4adf-9b89-400d494499e6",
      alt: "intelliJ",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/vscode-removebg-preview.png?alt=media&token=486b8554-776d-43a3-8e3a-e8e02fd65f50",
      alt: "Visual Studio Code",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8E%E1%85%A1%E1%86%B7-removebg-preview.png?alt=media&token=da83c5c3-3360-4cae-accb-2c1aa3217e33",
      alt: "Pycharm",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/postman-removebg-preview.png?alt=media&token=38d8195a-ad37-4254-bc04-cde8f58e13bc",
      alt: "Postman",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B0%E1%84%80%E1%85%A5.png?alt=media&token=e9711b9e-430f-4db5-bf84-d704af9c5b95",
      alt: "Swagger IU",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%91%E1%85%B5%E1%84%80%E1%85%B3%E1%84%86%E1%85%A1-removebg-preview.png?alt=media&token=13b1a56b-044e-4fa2-b38e-7109638ef4eb",
      alt: "figma",
    },
  ];

  const collaborationImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8.webp?alt=media&token=fd5c4053-a890-408b-bc03-438fa2634d29",
      alt: "github",
    },
  ];

  return (
    <>
      <SkillsComp id="skills" active={active}>
        <h2>skills</h2>
        <div className="box">
          <Card title="FrontEnd" images={frontendImages} />
          <Card title="BackEnd" images={backendImages} />
          <Card title="DataBase" images={databaseImages} />
          <Card title="Framework" images={frameworkImages} />
          <Card title="IDE" images={ideImages} />
          <Card title="Collabortion" images={collaborationImages} />
        </div>
      </SkillsComp>
    </>
  );
};

export default Skills;
