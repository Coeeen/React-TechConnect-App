import React from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Navbar() {
  const handleScrollToSummerSale = () => {
    const popularSummerSaleSection = document.getElementById("summerSale");
    if (popularSummerSaleSection) {
      window.scrollTo({
        top: popularSummerSaleSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToHome = () => {
    const HomeSection = document.getElementById("HomeSection");
    if (HomeSection) {
      window.scrollTo({
        top: HomeSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToPopularProducts = () => {
    const popularProductsSection = document.getElementById("PopularProducts");
    if (popularProductsSection) {
      window.scrollTo({
        top: popularProductsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToNewProducts = () => {
    const NewProductsSection = document.getElementById("NewProducts");
    if (NewProductsSection) {
      window.scrollTo({
        top: NewProductsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavbarStyle>
      <LogoName>TECHCONNECT</LogoName>
      <div>
        <ul>
          <li>
            <a href="#" onClick={handleScrollToHome}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={handleScrollToSummerSale}>
              Summer Sale
            </a>
          </li>
          <li>
            {" "}
            <a href="#" onClick={handleScrollToPopularProducts}>
              Popular Products
            </a>
          </li>
          <li>
            <a href="#" onClick={handleScrollToNewProducts}>
              New Products
            </a>
          </li>
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
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const LogoName = styled.h1`
  font-size: 20px;
  font-family: "Chakra Petch", sans-serif;
  letter-spacing: 8px;
  cursor: pointer;

  @media (max-width: 1368px) {
    font-size: 15px;
    letter-spacing: 4px;
  }
  @media (max-width: 867px) {
    font-size: 10px;
    letter-spacing: 0px;
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
