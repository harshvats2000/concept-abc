import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Heading level={2}>About Us</Heading>
        <Flex>
          <ImageWrapper>
            <Image
              blurDataURL="/aboutblur.png"
              src="/about.png"
              placeholder="blur"
              alt="children holding abc"
              height={250}
              width={450}
              quality={100}
            />
          </ImageWrapper>
          <p>
            <strong>“Pursue what catches your heart not your eyes”.</strong>
            <br />
            <span style={{ color: "#FF0000" }}> Concept ABC</span> is the
            thought, the heart, the soul of a few like minded forward thinking
            individuals who wanted to nurture young minds to lay a strong
            foundation for a better tomorrow. Focusing Activity based learning
            for concept building at a very low cost.
          </p>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
  justify-content: space-between;
  > div,
  > p {
    flex: 1;
    font-size: 18px;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  min-width: 300px;
`;
