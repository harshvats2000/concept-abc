import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Vision = () => {
  return (
    <Wrapper id="vision">
      <Container>
        <Heading level={2} color="white">
          Our Vision
        </Heading>
        <Desc data-aos="fade-up">
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
      </Container>
    </Wrapper>
  );
};

export default Vision;

const Wrapper = styled.section`
  background: linear-gradient(0, rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),
    url("/static/vision.jpg");
  background-size: cover;
  color: white;

  @media (max-width: 768px) {
    background-position: bottom;
    p {
      font-size: 18px !important;
    }
  }
`;

const Container = styled.div`
  overflow: hidden;
  max-width: 800px;
  margin: auto;
  padding: 30px 10px;
  > h2 {
    margin-top: 0;
  }
`;

const Desc = styled.div`
  max-width: 1000px;
  margin: auto;
  p {
    font-size: 20px;
    line-height: 30px;
  }
`;
