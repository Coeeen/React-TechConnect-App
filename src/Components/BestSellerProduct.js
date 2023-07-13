import React from "react";
import { styled } from "styled-components";

import { motion } from "framer-motion";

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

const BestSellerProductStyle = styled(motion.div)`
  display: grid;
  flex-direction: column;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2em; */
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
