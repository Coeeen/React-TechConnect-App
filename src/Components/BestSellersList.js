import React from "react";
import BestSellerProduct from "./BestSellerProduct";
import Earphones from "../img/Earphones.png";
import Nintendo from "../img/Nintendo.png";
import CatHeadphones from "../img/CatHeadphones.png";
import Iphone from "../img/Iphone.png";
import monitor from "../img/monitor.png";
import HyperX from "../img/HyperX.png";
import Mouse from "../img/Mouse.png";
import Steelseries from "../img/Steelseries.png";
import Ps4Controller from "../img/Ps4Controller.png";
import { styled } from "styled-components";

function BestSellers() {
  return (
    <div id="PopularProducts">
      <BestSelletsHeader>
        <h1>Best Seller Products</h1>
        <h2>Also recommended by users</h2>
      </BestSelletsHeader>
      <BestSellersListStyle>
        <BestSellerProduct
          prize="$25"
          name="Ps4 Controller"
          img={Ps4Controller}
        />
        <BestSellerProduct prize="$395" name="Nintendo" img={Nintendo} />
        <BestSellerProduct
          prize="$125"
          name="Razen Kitty"
          img={CatHeadphones}
        />
        <BestSellerProduct prize="$1595" name="Iphone 14" img={Iphone} />
        <BestSellerProduct
          prize="$250"
          name="LG Ultragear 27GP850P"
          img={monitor}
        />
        <BestSellerProduct prize="$195" name="HyperX" img={HyperX} />
        <BestSellerProduct prize="$35" name="Razen pro" img={Mouse} />
        <BestSellerProduct prize="$95" name="Steelseries 5" img={Steelseries} />
      </BestSellersListStyle>
    </div>
  );
}

export default BestSellers;

const BestSellersListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
`;
const BestSelletsHeader = styled.div`
  text-align: center;
  margin-top: 2rem;
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
  }
`;
