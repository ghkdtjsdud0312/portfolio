import React from "react";
import mainBg from "../../images/녹색배경.jpg";
import styled from "styled-components";

const EndPageComp = styled.section`
  background-image: url(${mainBg});
  background-size: cover;
  height: 720px;
  margin-left: 10%;
  .container {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 16%;
    font-size: 4em;
    color: #fff;
    height: 100%;
  }
  @media screen and (max-width: 1100px) {
    background-size: contain;
    overflow-x: hidden;
    height: 423px;
    .container {
      height: 423px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 423px;
    .container {
      height: 423px;
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      width: 100%;
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
