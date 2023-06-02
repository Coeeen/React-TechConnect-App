import React, { useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import LoginAnimation from "../LoginAnimation.json";
import GoBackLogin from "../GoBack.json";
import { Link } from "react-router-dom";

function Login() {
  const inputValueRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    if (inputValueRef.current && passwordRef.current) {
      inputValueRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div>
      <LoginPanelStyle>
        <LogInLeftPanel>
          <LeftPanelInputsText>Email</LeftPanelInputsText>
          <InputsStyle type="text" ref={inputValueRef}></InputsStyle>
          <LeftPanelInputsText>Password</LeftPanelInputsText>
          <InputsStyle type="password" ref={passwordRef}></InputsStyle>
          <button onClick={handleButtonClick}>Log In</button>
          <p>
            Remember me<input type="checkbox"></input>
            <span>Forgot Password?</span>
          </p>
          <GoBackStyle>
            <Link to="/">
              <Lottie animationData={GoBackLogin} loop={false}></Lottie>
            </Link>
          </GoBackStyle>
        </LogInLeftPanel>
        <LogInRightPanel>
          <h1>TECHCONNECT</h1>
          <LottieStyle>
            <Lottie animationData={LoginAnimation}></Lottie>
          </LottieStyle>
        </LogInRightPanel>
      </LoginPanelStyle>
    </div>
  );
}

export default Login;

const LoginPanelStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 90%;
  border-radius: 2em;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
  @media (max-width: 1268px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  button {
    margin: 30px 0px 10px 0px;
    font-size: 15px;
    width: 40%;
    font-family: "Poppins";
    border-radius: 5px;
    color: white;
    background-color: #6ea8e8;
    border-color: #6ea8e8;
    padding: 7px;

    &:hover {
      color: #6ea8e8;
      background-color: white;
      padding: 10px;
    }
  }
  span {
    margin-left: 2em;
    text-decoration: none;
    cursor: pointer;
  }
  p {
    margin-bottom: 10px;
  }
`;
const GoBackStyle = styled.div`
  width: 60px;
  position: absolute;
  bottom: 5%;
  cursor: pointer;

  @media (max-width: 1268px) {
    position: relative;
    margin-top: 20px;
  }
`;
const LeftPanelInputsText = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  font-family: "Chakra Petch", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;

const LogInLeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const InputsStyle = styled.input`
  display: block;
  width: 300px;
  height: 50px;
  border-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  font-family: "Poppins";
  font-size: 1em;
`;

const LogInRightPanel = styled.div`
  background-color: #6ea8e8;
  border-radius: 0em 2em 2em 0em;

  h1 {
    text-align: center;
    font-size: 4em;
    font-family: "Chakra Petch", sans-serif;
    letter-spacing: 8px;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 0.7em;
    border-radius: 0em 0em 2em 2em;
  }
`;

const LottieStyle = styled.div`
  width: 700px;
  margin-left: 15%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 1320px) {
    margin-left: 0;
  }
`;
