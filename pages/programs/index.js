import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Heading from "../../components/Heading";
import About from "../../components/About";
import Vision from "../../components/Vision";
import WhyUs from "../../components/WhyUs";

export default function Programs() {
  return (
    <Wrapper>
      <Container>
        <Heading level={2}>CHOOSE COURSE TYPE</Heading>
        <Content>
          <Link href="/programs/kindergarten_courses" passHref>
            <ImageWrapper>
              <Image
                blurDataURL="/static/kindergartenblur.png"
                src="/static/kindergarten.png"
                alt="children holding abc"
                placeholder="blur"
                height={320}
                width={450}
                quality={100}
              />
            </ImageWrapper>
          </Link>
          <Link href="/programs/certificate_courses" passHref>
            <ImageWrapper>
              <Image
                blurDataURL="/static/certificateblur.png"
                src="/static/certificate.png"
                alt="children holding abc"
                placeholder="blur"
                height={320}
                width={450}
                quality={100}
              />
            </ImageWrapper>
          </Link>
        </Content>
      </Container>
      <About />
      <Vision />
      <WhyUs />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 70px;
  padding: 0 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  @media (max-width: 1200px) {
    margin: auto 40px;
  }
  @media (max-width: 1000px) {
    margin: 80px 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`;

const ImageWrapper = styled.div`
  max-width: 450px;
  cursor: pointer;
  filter: drop-shadow(0 0 0.05rem rgba(0, 0, 0, 0.42));
  transition: filter 0.5s ease;
  &:hover {
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.42));
  }
  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 800px) {
    max-width: 80%;
    margin-bottom: 60px;
  }
`;
