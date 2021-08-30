import React from "react";
import Image from "next/image";
import Heading from "../components/Heading";
import styled from "styled-components";
import Head from "next/head";

const list = [
  {
    src: "/gallery1.png",
    alt: "certificate of appreciation",
  },
  {
    src: "/gallery2.jpeg",
    alt: "",
  },
  {
    src: "/gallery3.jpeg",
    alt: "",
  },
  {
    src: "/gallery4.jpeg",
    alt: "",
  },
  {
    src: "/gallery5.jpeg",
    alt: "",
  },
  {
    src: "/gallery6.jpeg",
    alt: "",
  },
  {
    src: "/gallery6.jpeg",
    alt: "",
  },
  {
    src: "/gallery7.jpeg",
    alt: "",
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
              src={`/static${list.src}`}
              alt={list.alt}
              width={600}
              height={600}
            />
          </ImageWrapper>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
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
