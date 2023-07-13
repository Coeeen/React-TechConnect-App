import React from "react";
import SummerEarphones from "../img/SummerSale.png";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function SummerSale() {
  const [ref, inView] = useInView();
  return (
    <SummerStyle id="summerSale">
      <div>
        <motion.img
          src={SummerEarphones}
          alt="SummerSale"
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        />
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
  height: 600px;
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
  @media (max-width: 1968px) {
    img {
      width: 90%;
    }
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
      font-size: 8em;
      line-height: 90px;
    }
    h2 {
      font-size: 6em;
    }
    p {
      font-size: 1em;
    }
  }
  @media (max-width: 1458px) {
    h1 {
      font-size: 8em;
      line-height: 100px;
    }
    h2 {
      font-size: 4em;
      line-height: 0px;
    }
    p {
      font-size: 1em;
      line-height: 20px;
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
