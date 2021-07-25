import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Aim = () => {
  return (
    <Wrapper>
      <Container>
        <Heading level={2}>Our Aim</Heading>
        <Desc>
          <p>
            Our aim at Concept ABC is to prepare the kid on the five principles
            of Concept ABC :
            <ol>
              <li>Having a strong sense of identity.</li>
              <li>Awareness of connectivity with the world.</li>
              <li>Having a stong sense of well-being.</li>
              <li>Having effective comminication skills.</li>
              <li>Respecting and Appreciating Relations.</li>
            </ol>
          </p>
        </Desc>
        <AimImageWrapper>
          <Image src="/aim.png" alt="aim" layout="fill" />
        </AimImageWrapper>
        <AbcImageWrapper>
          <Image src="/abcAim.png" alt="abc" layout="fill" />
        </AbcImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default Aim;

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px 10px 300px 10px;
  position: relative;
  @media (max-width: 1000px) {
    padding-bottom: 150px;
  }
`;

const Desc = styled.div`
  max-width: 800px;
  p {
    font-size: 18px;
    line-height: 30px;
  }
`;

const AimImageWrapper = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  top: 100px;
  right: 0;
  z-index: -1;
  @media (max-width: 1000px) {
    width: 480px;
    height: 480px;
  }
`;

const AbcImageWrapper = styled.div`
  position: absolute;
  width: 550px;
  height: 260px;
  bottom: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 450px;
    height: 220px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
