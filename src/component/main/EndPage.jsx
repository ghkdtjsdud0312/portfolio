import React from "react";
import mainBg from "../../images/laptop.jpg";
import styled from "styled-components";

const EndPageComp = styled.section`
  position: relative;
  height: 1000px;
  padding-top: 7%;
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
    filter: blur(8px); /* 배경을 5px만큼 흐리게 */
    z-index: -1; /* 텍스트보다 뒤에 배치 */
  }
  .container {
    background-color: #fff;
    border-radius: 20px;
    width: 70%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
  }
`;

const EndPage = () => {
  return (
    <>
      <EndPageComp>
        <div className="container">마지막까지 봐주셔서 감사합니다 :)</div>
      </EndPageComp>
    </>
  );
};

export default EndPage;