import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Coded with ❤️ by <a href="https://digivats.com">DigiVats</a>
      </p>
      <Image src="/static/footer.png" alt="" width={1600} height={350} />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  div {
    vertical-align: bottom;
  }
  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    text-align: center;
    z-index: 10;
    a {
      text-decoration: underline;
    }
  }
`;
