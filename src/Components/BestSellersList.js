import React from "react";
import BestSellerProduct from "./BestSellerProduct";
import Earphones from "../img/Earphones.png";
import { styled } from "styled-components";
function BestSellers() {
  return (
    <div>
      <BestSelletsHeader>
        <h1>Best Seller Products</h1>
        <h2>Also recommended by users</h2>
      </BestSelletsHeader>
      <BestSellersListStyle>
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
        <BestSellerProduct prize="$995" name="Nintendo" img={Earphones} />
      </BestSellersListStyle>
    </div>
  );
}

export default BestSellers;

const BestSellersListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0px;
`;
const BestSelletsHeader = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
