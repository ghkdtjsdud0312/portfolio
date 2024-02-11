import styled from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => (props.active ? "transparent" : "green")};
  .container {
    padding-top: 30px;
    .box {
      border: 2px solid black;
      border-radius: 10px;
      height: 180px;
      background-color: #c1e1c12e;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      p {
        text-align: center;
        line-height: 50px;
      }
      button {
        padding: 10px;
        border: none;
        border: 2px solid white;
        background-color: green;
        cursor: pointer;
      }
    }
  }
`;

const Project = ({ active }) => {
  return (
    <>
      <ProjectComp id="project" active={active}>
        <div className="container">
          <div className="box">
            <p>포트폴리오 1</p>
            <button onClick={() => {}}>More</button>
          </div>
          <div className="box">
            <p>포트폴리오 2</p>
            <button onClick={() => {}}>More</button>
          </div>
          <div className="box">
            <p>포트폴리오 3</p>
            <button onClick={() => {}}>More</button>
          </div>
          <div className="box">
            <p>포트폴리오 4</p>
            <button onClick={() => {}}>More</button>
          </div>
          <div className="box">
            <p>포트폴리오 5</p>
            <button onClick={() => {}}>More</button>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default Project;
