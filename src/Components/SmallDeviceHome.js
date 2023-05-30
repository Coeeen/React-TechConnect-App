import React from "react";
import styled from "styled-components";
import { Homebutton } from "../Components/MainHome";

function DeviceHome(props) {
  return (
    <DeviceHomeStyle>
      <StyledHeading>{props.text}</StyledHeading>
      <StyledSubHeading>{props.type}</StyledSubHeading>

      <StyledTitle>{props.device}</StyledTitle>
      <CustomHomebutton>Browse</CustomHomebutton>
      <img src={props.picture} alt="Earphones" />
    </DeviceHomeStyle>
  );
}

export default DeviceHome;

const DeviceHomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: black;
  width: 20vw;
  color: white;
  border-radius: 2em;

  img {
    width: 325px;
    position: absolute;
    top: 5px;
    left: 100px;
    rotate: calc(-15deg);
  }
`;
const CustomHomebutton = styled(Homebutton)`
  width: 150px;
  margin-left: 50px;
`;

const StyledHeading = styled.h3`
  margin-left: 50px;
  font-size: 2em;
  line-height: 10px;
`;

const StyledSubHeading = styled.h2`
  margin-left: 50px;
  font-size: 3em;
  line-height: 20px;
`;

const StyledTitle = styled.h1`
  margin-left: 50px;
  line-height: 20px;
  font-size: 3.5em;
  z-index: 2;
`;
