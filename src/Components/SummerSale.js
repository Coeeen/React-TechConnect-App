import React from "react";
import SummerEarphones from "../img/SummerSale.png";
import { styled } from "styled-components";

function SummerSale() {
  return (
    <SummerStyle id="summerSale">
      <div>
        <img src={SummerEarphones} alt="SummerSale" />
      </div>
      <TextSummerSale>
        <h2>Beats Studio3</h2>
        <h1>Summer Sale</h1>
        <p>
          Real-time Audio calibration preserves a Premium listening experience
        </p>
        <SummerButton>SHOP</SummerButton>
      </TextSummerSale>
    </SummerStyle>
  );
}

export default SummerSale;

const SummerStyle = styled.div`
  margin-top: 100px;
  height: 65vh;
  width: 100%;
  background-color: #df3c44;
  display: flex;
  border-radius: 2em;
  position: relative;

  img {
    width: 100%;
    max-width: 550px;
    cursor: pointer;
    z-index: 2;
    margin: 30px;
    transform: rotate(-12deg);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    img {
      width: 80%;
    }
  }
`;

const TextSummerSale = styled.div`
  color: white;
  flex: 1;
  text-align: center;

  h2 {
    font-size: 6em;
    font-weight: 500;
    line-height: 0px;
    font-family: "Chakra Petch", sans-serif;
  }

  h1 {
    font-size: 10em;
    font-weight: 600;
    line-height: 100px;
    font-family: "Chakra Petch", sans-serif;
  }

  p {
    font-size: 2em;
    line-height: 0px;
    font-family: "Chakra Petch", sans-serif;
  }
  @media (max-width: 1868px) {
    h1 {
      font-size: 9em;
    }
    h2 {
      font-size: 6em;
    }
    p {
      font-size: 1em;

      font-family: "Chakra Petch", sans-serif;
    }
  }

  @media (max-width: 1258px) {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 3em;
    }
    p {
      font-size: 0.6em;

      font-family: "Chakra Petch", sans-serif;
    }
  }
  @media (max-width: 768px) and (max-height: 500px) {
    h1 {
      font-size: 3em;
      line-height: 150px;
    }
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 0.8em;
      line-height: 0px;
      font-family: "Chakra Petch", sans-serif;
    }
  }
`;

const SummerButton = styled.button`
  margin: 5% 0%;
  border-radius: 2em;
  background-color: white;
  color: red;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  border-style: none;
  font-family: "Chakra Petch", sans-serif;
  cursor: pointer;
  font-size: 1.5em;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 20px white;
    max-width: 300px;
    font-size: 1.8em;
  }
`;
