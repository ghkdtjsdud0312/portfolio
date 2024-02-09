import styled from "styled-components";

const AboutMeComp = styled.section`
  width: 100%;
  height: 500px;
  background-color: ${(props) => (props.active ? "pink" : "transparent")};
`;

const AboutMe = ({ active }) => {
  return <AboutMeComp id="about" active={active}></AboutMeComp>;
};

export default AboutMe;
