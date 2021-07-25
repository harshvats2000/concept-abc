import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Image src="/footer.png" alt="" width={1600} height={350} />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  div {
    vertical-align: bottom;
  }
`;
