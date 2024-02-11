import styled from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => (props.active ? "transparent" : "green")};
`;

const Project = ({ active }) => {
  return <ProjectComp id="project" active={active}></ProjectComp>;
};

export default Project;
