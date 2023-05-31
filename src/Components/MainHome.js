import React from "react";
import Headphones2 from "../img/HeadPhones2.png";
import styled from "styled-components";

function MainHome() {
  return (
    <MainHomeStyled>
      <InBox>
        <h3>SKULLCANDY</h3>
        <h2>WIRELESS</h2>
        <h1>HEADPHONE</h1>
        <img src={Headphones2} alt="Headphones" />
        <Homebutton>CHECK IT</Homebutton>
      </InBox>
    </MainHomeStyled>
  );
}

export default MainHome;

const MainHomeStyled = styled.div`
  margin-top: 30px;
  height: 700px;
  width: 100%;
  background: linear-gradient(
    45deg,
    rgba(220, 220, 220, 0.7) 0%,
    rgba(240, 240, 240, 1) 100%
  );
  display: flex;
  flex-direction: column;
  border-radius: 2em;
  position: relative;

  h3 {
    font-size: 3em;
    font-weight: 600;
    margin: 0px;
  }
  h2 {
    font-size: 6em;
    font-weight: 700;
    margin: 0px;
  }
  h1 {
    font-size: 14em;
    font-weight: 700;
    color: white;
    letter-spacing: 20px;
    margin: 0px;
    z-index: 1;
    line-height: 200px;
  }

  img {
    width: 450px;
    z-index: 2;
    position: absolute;
    top: 10%;
    right: 30%;

    @media (max-width: 1768px) {
      width: 350px;
      top: 17%;
      right: 33%;
    }
    @media (max-width: 1368px) {
      width: 300px;
      top: 25%;
      right: 27%;
    }
    @media (max-width: 1068px) {
      width: 250px;
      top: 30%;
      right: 22%;
    }
    @media (max-width: 868px) {
      display: none;
    }
  }
`;

const InBox = styled.div`
  padding: 100px 0px 100px 200px;
`;

export const Homebutton = styled.button`
  margin: 5% 0%;
  border-radius: 2em;
  background-color: red;
  color: white;
  padding: 20px;
  width: 200px;
  border-style: none;
  font-family: "Chakra Petch", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: red;
    box-shadow: 0px 0px 20px white;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 5% auto;
  }
`;
