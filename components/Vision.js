import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Vision = () => {
  return (
    <Wrapper id="vision">
      <Container>
        <Heading level={2}>Our Vision</Heading>
        <Desc>
          <p>
            Our vision at Concept ABC is to work on all the very important
            parameters which lay the foundation of a child&apos;s trait
            formation (Q&apos;S) at this stage.
          </p>
          <p>
            We would like to guide you through these quotients, lay the
            foundation for a child&apos;s personality.
          </p>
          <p>
            We minutely take into account the child&apos;s Intelligence Quotient
            (IQ) - Learning, Understanding, Recalling, Retention, Emotional
            Quotient (EQ) - Managing Emotions and ability to withstand and adapt
            to the changes in life.
          </p>
          <p>
            Social Quotient (SQ) - Connecting and responding to the society
            positively. Communication Quotient (CQ) - Helping the child
            communicate his/her feeling openly to discover himself or herself.
          </p>
          <p>
            The very important Nature Quotient (NQ) - To build a strong bond
            with nature and this although we may not get it elsewhere but is the
            need of today and the future.
          </p>
        </Desc>
        <ImageWrapper>
          <Image src="/vision.png" alt="vision" layout="fill" />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default Vision;

const Wrapper = styled.section``;

const Container = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: auto;
  padding: 50px 10px;
  position: relative;
`;

const Desc = styled.div`
  max-width: 800px;
  p {
    font-size: 18px;
    line-height: 30px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin-top: -450px;
  margin-left: 50%;
  z-index: -1;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0%;
    margin-top: -650px;
  }
`;
