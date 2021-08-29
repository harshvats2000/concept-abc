import React from "react";
import Image from "next/image";
import Heading from "../components/Heading";
import styled from "styled-components";
import Head from "next/head";

const list = [
  {
    blurDataURL: "/gallery1blur.png",
    src: "/gallery1.png",
    alt: "certificate of appreciation",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Head>
        <title>Gallery - Concept ABC</title>
      </Head>
      <Heading level={2}>GALLERY</Heading>
      <Container>
        {list.map((list, i) => (
          <ImageWrapper key={i}>
            <Image
              blurDataURL={list.blurDataURL}
              src={`/static${list.src}`}
              alt={list.alt}
              placeholder="blur"
              width={1000}
              height={700}
            />
          </ImageWrapper>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;
