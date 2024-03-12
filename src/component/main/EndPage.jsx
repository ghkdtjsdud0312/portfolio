import React from "react";
import mainBg from "../../images/녹색배경.jpg";
import styled from "styled-components";

const EndPageComp = styled.section`
  position: relative;
  height: 1000px;
  padding-top: 7%;
  overflow: hidden;
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
    z-index: -1;
  }
  .container {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    width: 70%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    .container {
      margin-top: 15%;
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      margin-top: 25%;
      font-size: 3em;
      text-align: center;
    }
  }
`;

const EndPage = () => {
  return (
    <>
      <EndPageComp>
        <div className="container">감사합니다 :)</div>
      </EndPageComp>
    </>
  );
};

export default EndPage;
