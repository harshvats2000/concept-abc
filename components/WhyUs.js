import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const WhyUs = () => {
  return (
    <Wrapper>
      <Container>
        <Heading level={2}>Why Choose Us?</Heading>
        <ImageWrapper>
          <Image
            blurDataURL="/whyusblur.png"
            src="/whyus.png"
            alt="why choose concept ABC"
            layout="fill"
            placeholder="blur"
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default WhyUs;

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 330px;
  max-width: 100%;
  margin: auto;

  @media (min-width: 768px) {
    width: 600px;
    height: 540px;
  }
  @media (min-width: 1200px) {
    width: 900px;
    height: 700px;
  }
`;
