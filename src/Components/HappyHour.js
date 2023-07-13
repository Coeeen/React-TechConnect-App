import React from "react";
import { styled } from "styled-components";
import GamingWatch from "../img/GamingWatch.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function HappyHour() {
  const [ref, inView] = useInView();

  return (
    <SummerStyle id="summerSale">
      <TextSummerSale>
        <h2>ITS TIME TO SHINE</h2>
        <h1>Happy Hour</h1>
      </TextSummerSale>
      <ImageContainer>
        <motion.img
          src={GamingWatch}
          alt="SummerSale"
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        />
      </ImageContainer>
    </SummerStyle>
  );
}

export default HappyHour;

const SummerStyle = styled.div`
  margin: 150px 0px;
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
    font-size: 4.5em;
    font-weight: 500;
    line-height: 50px;
    font-family: "Chakra Petch", sans-serif;
    @media (max-width: 768px) {
      font-size: 3em;
    }
    @media (max-width: 1268px) {
      font-size: 2.5em;
      line-height: 50px;
    }
  }

  h1 {
    font-size: 9em;
    font-weight: 600;
    line-height: 100px;
    font-family: "Chakra Petch", sans-serif;

    @media (max-width: 1968px) {
      font-size: 7em;
      line-height: 40px;
    }
    @media (max-width: 1368px) {
      font-size: 5em;
      line-height: 80px;
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
