import styled from "styled-components";

const ProjectComp = styled.section`
  width: 100%;
  height: 4000px;
  background-color: ${(props) => (props.active ? "transparent" : "#D4E4ED")};
  h2 {
    background-color: #fff;
    padding: 70px;
    font-weight: 600;
  }
  .container {
    .box {
      border: 2px solid black;
      border-radius: 10px;
      height: 400px;
      background-color: white;
      box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
      margin-bottom: 50px;
      padding-top: 10px;
      h2 {
        text-align: center;
      }
      h4 {
        padding-top: 10px;
        text-align: center;
      }
      .box2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
        gap: 10px;
        .content1 {
          line-height: 30px;
          h3 {
          }
          p {
          }
          img {
            width: 150px;
            height: 100px;
          }
        }
        .content2 {
          line-height: 30px;
          p {
          }
        }
      }
      .button {
        text-align: center;
        button {
          width: 10%;
          height: 30px;
          border: none;
          border: 2px solid white;
          background-color: green;
          cursor: pointer;
          &:hover {
            background-color: darkgreen;
            transition: all 0.8s;
          }
        }
      }
    }
  }
`;

const Project = ({ active }) => {
  return (
    <>
      <ProjectComp id="project" active={active}>
        <h2>Project</h2>
        <div className="container">
          <div className="box">
            <h2>클론페이지</h2>
            <h4>2023.10.09 ~ 2023.10.16</h4>
            <div className="box2">
              <div className="content1">
                <p>대한항공 클론페이지</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/logo--koreanair-pc.png?alt=media&token=ed162c1c-fcec-4688-a2a1-cdec902c5bd0"
                  alt="대한항공 로고 사진"
                />
              </div>
              <div className="content2">
                <h3>주제 선정 이유</h3>
                <h3>구현 내용</h3>
                <h3>사용 기술</h3>
              </div>
            </div>
            <div className="button">
              <button onClick={() => {}}>More</button>
            </div>
          </div>
          <div className="box">
            <h2>WOB(WorkOut Buddy) - 운동 메이트 구하기</h2>
            <h4>2023.12.6 ~ 2024.01.03</h4>
            <div className="box2">
              <div className="content1">
                <p>WorkOut Buddy</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/wob-logo.png?alt=media&token=53d56dac-cf54-4fdf-9842-a5d367a8e67d"
                  alt="wob 로고 사진"
                />
              </div>
              <div className="content2">
                <h3>주제 선정 이유</h3>
                <p>
                  모임은 싫지만 운동 친구가 필요할 때! 집 근처나 현재 있는
                  위치에 같은 종목운동을 원하는 사람들과 함께 실시간으로
                  채팅하여 만나는 사이트
                </p>
                <h3>전체 프로젝트 설명</h3>
                <h3>내가 맡은 부분</h3>
                <h3>구현 기능 및 사용 기술</h3>
              </div>
            </div>
            <div className="button">
              <button onClick={() => {}}>More</button>
            </div>
          </div>

          <div className="box">
            <h2>씨네픽(CinePic)</h2>
            <h4>2024.01.17 ~ 2024.02.21</h4>
            <div className="box2">
              <div className="content1">
                <p>CinePic</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kh-miniproject.appspot.com/o/CinePicLogo.png?alt=media&token=5f8c28c4-af90-403f-a26c-935b5fc9bc57"
                  alt="포폴사진"
                />
              </div>
              <div className="content2">
                <h3>주제 선정 이유</h3>
                <p>
                  사용자 맞춤 영화 추천 및 커뮤니티를 활용한 영화 플랫폼 사이트
                </p>
                <h3>프로젝트 설명</h3>
                <h3>내가 맡은 부분</h3>
                <h3>구현 기능 및 사용 기술</h3>
              </div>
            </div>
            <div className="button">
              <button onClick={() => {}}>More</button>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};

export default Project;
