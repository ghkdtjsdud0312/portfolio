import styled from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 500px;
  background-color: ${(props) => (props.active ? "gray" : "transparent")};
`;

const Project = ({ active }) => {
  return <ProjectComp id="project" active={active}></ProjectComp>;
};

export default Project;
