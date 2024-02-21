import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
  transition-property: transform;
  transition-duration: 0.3s;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  cursor: pointer;
  transform-style: preserve-3d;
  margin-top: 5%;
  border-radius: 20px;

  &:hover {
    transform: rotateY(180deg);
  }
  .card-face {
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
  }
  .front {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
    h3 {
      font-size: 3em;
    }
  }
  .back {
    background-color: #fff;
    transform: rotateY(180deg);
    border-radius: 10px;
    box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
      width: 20%;
      margin: 10px;
      transform: rotateY(0deg);
    }
  }
`;

const Card = ({ title, images }) => {
  return (
    <>
      <CardContainer>
        <div className="card-face front">
          <h3>{title}</h3>
        </div>
        <div className="card-face back">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </CardContainer>
    </>
  );
};

export default Card;
