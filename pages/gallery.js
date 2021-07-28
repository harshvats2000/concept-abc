import React from "react";
import Image from "next/image";
import Heading from "../components/Heading";
import styled from "styled-components";

export default function Gallery() {
  const list = [
    {
      id: 1,
      blurDataURL: "/gallery1blur.png",
      src: "/gallery1.png",
      alt: "certificate of appreciation",
    },
  ];
  return (
    <Wrapper>
      <Heading level={2}> GALLERY </Heading>
      <Container>
        {list.map((list) => (
          <ImageWrapper key={list.id}>
            <Image
              blurDataURL={list.blurDataURL}
              src={list.src}
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
