import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Mouse from "../img/CatHeadphones.png";
function NewProducts() {
  return (
    <div id="NewProducts">
      <HeaderStyle>New Products</HeaderStyle>

      <SlideStyle>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
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
            <img src={Mouse} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Mouse} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={Mouse} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={Mouse} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={Mouse} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={Mouse} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={Mouse} alt="Image 2" />
          </SplideSlide>
        </Splide>
      </SlideStyle>
    </div>
  );
}

export default NewProducts;

const HeaderStyle = styled.h1`
  text-align: center;
  margin-top: 100px;
`;

const SlideStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
