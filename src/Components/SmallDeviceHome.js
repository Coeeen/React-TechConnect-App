import React from "react";
import styled from "styled-components";
import { Homebutton } from "../Components/MainHome";

function DeviceHome(props) {
  return (
    <DeviceHomeStyle>
      <h3>{props.text}</h3>
      <h2>{props.type}</h2>
      <img src={props.picture} alt="Earphones" />
      <h1>{props.device}</h1>
      <Homebutton>Browse</Homebutton>
    </DeviceHomeStyle>
  );
}

export default DeviceHome;

const DeviceHomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    125deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(77, 77, 77, 1) 100%
  );
  color: white;
  width: 350px;
  border-radius: 2em;
  margin-top: 100px;
  position: relative;

  img {
    width: 300px;
    position: absolute;
    rotate: calc(-15deg);
    top: -15px;
    right: -100px;
  }

  h3 {
    font-size: 1em;
    font-weight: 600;
    margin: 10px 0 5px 30px;
  }

  h2 {
    font-size: 2em;
    font-weight: 700;
    margin: 10px 0 5px 30px;
  }

  h1 {
    font-size: 5em;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 5px 30px;
    z-index: 1;
  }
`;
