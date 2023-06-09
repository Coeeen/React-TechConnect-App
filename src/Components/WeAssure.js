import React from "react";
import { TbTruckDelivery, TbCertificate } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

function WeAssure() {
  const [ref, inView] = useInView();

  return (
    <WeAssureStyle
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledObject>
        <span>
          <TbTruckDelivery />
        </span>
        <h1>Free Shipping</h1>
        <p>Great deals to save more on every purchase.</p>
      </StyledObject>
      <StyledObject>
        <span>
          <TbCertificate />
        </span>
        <h1>Fast and Reliable Delivery</h1>
        <p>Ensuring safe and secure payment processing</p>
      </StyledObject>
      <StyledObject>
        <span>
          <TfiHeadphoneAlt />
        </span>
        <h1>24/7 Customer Support</h1>
        <p>Round-the-clock assistance for all your inquiries.</p>
      </StyledObject>
      <StyledObject>
        <span>
          <RiSecurePaymentFill />
        </span>
        <h1>Secure Online Shopping</h1>
        <p>Convenient and secure payment options available.</p>
      </StyledObject>
    </WeAssureStyle>
  );
}

export default WeAssure;

const WeAssureStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 50px;
`;
const StyledObject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 3rem;
    margin-right: 1rem;
    color: rgb(220, 20, 60, 0.9);
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
    text-align: center;
  }
`;
