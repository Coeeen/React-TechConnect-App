import React from "react";
import BestSellerProduct from "./BestSellerProduct";
import Nintendo from "../img/Nintendo.png";
import CatHeadphones from "../img/CatHeadphones.png";
import Iphone from "../img/Iphone.png";
import monitor from "../img/monitor.png";
import HyperX from "../img/HyperX.png";
import Mouse from "../img/Mouse.png";
import Steelseries from "../img/Steelseries.png";
import Ps4Controller from "../img/Ps4Controller.png";
import { styled } from "styled-components";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function BestSellers() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: inView ? 1 : 0,
      y: 0,
    },
  };

  return (
    <motion.div
      id="PopularProducts"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={ref}
    >
      <BestSelletsHeader>
        <motion.h1
          initial={{ x: -150 }}
          animate={{ x: inView ? 0 : -150 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          ref={ref}
        >
          Best Seller Products
        </motion.h1>
        <h2>Also recommended by users</h2>
      </BestSelletsHeader>
      <BestSellersListStyle>
        <BestSellerProduct
          prize="$25"
          name="Ps4 Controller"
          img={Ps4Controller}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$395"
          name="Nintendo"
          img={Nintendo}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$125"
          name="Razen Kitty"
          img={CatHeadphones}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$1595"
          name="Iphone 14"
          img={Iphone}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$250"
          name="LG Ultragear 27GP850P"
          img={monitor}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$195"
          name="HyperX"
          img={HyperX}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$35"
          name="Razen pro"
          img={Mouse}
          variants={childVariants}
        />
        <BestSellerProduct
          prize="$95"
          name="Steelseries 5"
          img={Steelseries}
          variants={childVariants}
        />
      </BestSellersListStyle>
    </motion.div>
  );
}

export default BestSellers;

const BestSellersListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
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
