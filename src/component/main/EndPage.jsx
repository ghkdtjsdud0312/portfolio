import React from "react";
import mainBg from "../../images/녹색배경.jpg";
import styled from "styled-components";

const EndPageComp = styled.section`
  background-image: url(${mainBg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  margin-left: 16%;
  .container {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 200px;
    font-size: 4em;
    color: #fff;
    height: 100vh;
  }
  @media screen and (max-width: 1100px) {
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
    .container {
      font-size: 3em;
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      padding: 120px;
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
