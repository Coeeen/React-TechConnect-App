import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
function Navbar() {
  return (
    <NavbarStyle>
      <LogoName>TECHCONNECT</LogoName>
      <div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Summer Sale</li>
          <li>Popular Products</li>
        </ul>
      </div>
      <LoginNavbarDiv>
        <NavbarButtons>Login</NavbarButtons>
        <NavbarButtons>
          <HiOutlineShoppingBag />
        </NavbarButtons>
      </LoginNavbarDiv>
    </NavbarStyle>
  );
}

export default Navbar;

const NavbarStyle = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  /* position: sticky;
  top: 0;
  z-index: 10; */
  color: rgba(0, 0, 0, 0.9);
  li {
    display: inline;
    list-style: none;
    margin-right: 75px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
const LogoName = styled.h1`
  font-size: 20px;
  font-family: "Chakra Petch", sans-serif;
  letter-spacing: 8px;
  cursor: pointer;
  @media (max-width: 568px) {
    font-size: 15px;
    letter-spacing: 4px;
  }
`;
const LoginNavbarDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavbarButtons = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  width: 100px;
  height: 35px;
  border-style: none;
  font-family: "Poppins";
  font-size: 15px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: black;
  }
`;
