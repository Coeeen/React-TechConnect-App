import React from "react";
import { styled } from "styled-components";
function BestSellerProduct(props) {
  return (
    <BestSellerProductStyle>
      <div>
        <img src={props.img} alt={props.name} />
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
  text-align: center;
  img {
    width: 320px;
    cursor: pointer;
    border-radius: 2em;
    &:hover {
      scale: 125%;
    }
  }
  h2 {
    margin-bottom: auto;
  }
`;
