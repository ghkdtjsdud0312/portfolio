import React from "react";
import mainBg from "../../images/녹색배경.jpg";
import styled from "styled-components";

const EndPageComp = styled.section`
  width: 100%;
  margin-left: 20%;
  .container {
    border-radius: 20px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    color: #fff;
    background-image: url(${mainBg});
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
