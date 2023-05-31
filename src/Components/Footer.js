import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
function Footer() {
  return (
    <FooterStyle>
      <p>
        Copyright © 2023{" "}
        <a href="https://github.com/Coeeen">
          <span>
            <AiOutlineGithub />
          </span>
        </a>
        .
      </p>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.div`
  margin-top: 100px;
  font-size: 1em;
  float: right;

  span {
    font-size: 2em;
    color: black;
  }
`;
