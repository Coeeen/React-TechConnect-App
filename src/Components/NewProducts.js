import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Backpack from "../img/BackPack.png";
import Ebook from "../img/Ebook.png";
import Keyboard from "../img/KeyBoard.png";
import Pc from "../img/PC.png";
import StarWars from "../img/StarWars.png";
import Oculus from "../img/Oculus.png";
import Games from "../img/Games_.jpg";
import Xbox from "../img/Xbox.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NewProducts() {
  const [ref, inView] = useInView();
  return (
    <div id="NewProducts">
      <HeaderStyle
        initial={{ x: -100 }}
        animate={{ x: inView ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        ref={ref}
      >
        New Products
      </HeaderStyle>
      <SlidePicture>
        <SlideStyle>
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              width: "100%",
              gap: "1rem",
              breakpoints: {
                768: {
                  perPage: 2,
                },

                576: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <img src={Backpack} alt="Backpack" />
            </SplideSlide>
            <SplideSlide>
              <img src={Ebook} alt="Ebook" />
            </SplideSlide>
            <SplideSlide>
              <img src={Keyboard} alt="keyboard" />
            </SplideSlide>
            <SplideSlide>
              <img src={Pc} alt="PC" />
            </SplideSlide>
            <SplideSlide>
              <img src={StarWars} alt="StarWars" />
            </SplideSlide>
            <SplideSlide>
              <img src={Oculus} alt="Oculus" />
            </SplideSlide>
            <SplideSlide>
              <img src={Games} alt="Games" />
            </SplideSlide>
            <SplideSlide>
              <img src={Xbox} alt="Xbox" />
            </SplideSlide>
          </Splide>
        </SlideStyle>
      </SlidePicture>
    </div>
  );
}

export default NewProducts;

const HeaderStyle = styled(motion.h1)`
  text-align: center;
  margin-top: 100px;
  font-size: 4em;
`;

const SlideStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SlidePicture = styled.div`
  margin-bottom: 200px;
  img {
    width: 300px;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
