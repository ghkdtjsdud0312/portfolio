import styled from "styled-components";

const SkillsComp = styled.section`
  width: 100%;
  height: 500px;
  background-color: ${(props) => (props.active ? "blueviolet" : "transparent")};
`;

const Skills = ({ active }) => {
  return <SkillsComp id="skills" active={active}></SkillsComp>;
};

export default Skills;
