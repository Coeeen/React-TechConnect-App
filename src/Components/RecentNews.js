/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";
function RecentNews() {
  const currentDate = new Date().toLocaleDateString();
  const [ref, inView] = useInView();
  return (
    <div id="News">
      <HeaderStyleText>
        <motion.h1
          initial={{ x: 30 }}
          animate={{ x: inView ? 0 : 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          ref={ref}
        >
          Recent News
        </motion.h1>
        <h3>Check before buying</h3>
      </HeaderStyleText>
      <RecentNewsStyle>
        <NewsStyle>
          <a href="https://techcrunch.com">
            <img
              src="https://minutes.co/wp-content/uploads/2019/10/new-technology-1000x600.png"
              alt="News"
            />
          </a>
          <h2>{currentDate}</h2>
          <h1>News about gadgets</h1>
          <p>
            Check out the latest gadgets that will soon be available in our
            store!
          </p>
        </NewsStyle>
        <NewsStyle>
          <a href="https://venngage.com/gallery/post/why-the-world-needs-more-women-in-tech/">
            <img
              src="https://www.pwc.co.uk/women-in-technology/women-In-tech-new.jpg"
              alt="News"
            />
          </a>
          <h2>{currentDate}</h2>
          <h1>Why we need women in IT</h1>
          <p>
            Discover the importance of having more women in the tech industry.
          </p>
        </NewsStyle>
        <NewsStyle>
          <a href="https://shec-labs.com/tips-for-choosing-the-best-electronic-gadgets/">
            <img
              src="https://thegadgetflow.com/wp-content/uploads/2021/07/iPhone-photography-gadgets-featured-image-1200x675.jpg"
              alt="News"
            />
          </a>
          <h2>{currentDate}</h2>
          <h1>How to choose the perfect gadgets</h1>
          <p>
            Get expert tips on selecting the best electronic gadgets for your
            needs.
          </p>
        </NewsStyle>
      </RecentNewsStyle>
    </div>
  );
}

export default RecentNews;

const HeaderStyleText = styled.div`
  text-align: center;

  h1 {
    font-size: 4em;
    line-height: 0px;
  }

  h3 {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const RecentNewsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 1008px) {
    flex-direction: column;
  }
`;

const NewsStyle = styled.div`
  width: 30vw;
  text-align: center;

  h2 {
    color: rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 2em;

    &:hover {
      scale: calc(1.1);
    }
  }

  p {
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;
