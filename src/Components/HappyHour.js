import React from "react";
import SummerEarphones from "../img/SummerSale.png";
import { styled } from "styled-components";
import GamingWatch from "../img/GamingWatch.png";

function HappyHour() {
  return (
    <SummerStyle id="summerSale">
      <TextSummerSale>
        <h2>Its time to shine</h2>
        <h1>Happy Hour</h1>
      </TextSummerSale>
      <ImageContainer>
        <img src={GamingWatch} alt="SummerSale" />
      </ImageContainer>
    </SummerStyle>
  );
}

export default HappyHour;

const SummerStyle = styled.div`
  margin-top: 150px;
  height: 45vh;
  width: 100%;
  background-color: #41df82;
  display: flex;
  border-radius: 2em;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextSummerSale = styled.div`
  color: white;
  flex: 1;
  text-align: center;

  h2 {
    font-size: 5em;
    font-weight: 500;
    line-height: 50px;

    @media (max-width: 768px) {
      font-size: 3em;
    }
  }

  h1 {
    font-size: 8em;
    font-weight: 600;
    line-height: 100px;

    @media (max-width: 768px) {
      font-size: 5em;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  img {
    width: 60%;
    cursor: pointer;
    z-index: 2;
    margin: 30px;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;
