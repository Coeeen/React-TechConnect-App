import React from "react";
import { styled } from "styled-components";
function BestSellerProduct(props) {
  return (
    <BestSellerProductStyle>
      <div>
        <img src={props.img} alt="Image" />
      </div>
      <h2>{props.name}</h2>
      <h2>{props.prize}</h2>
    </BestSellerProductStyle>
  );
}

export default BestSellerProduct;

const BestSellerProductStyle = styled.div`
  display: grid;
  flex-direction: column;
  width: 300px;
  text-align: center;
  img {
    width: 200px;
    background-color: grey;
    border-radius: 2em;
  }
`;
