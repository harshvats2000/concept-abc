import React from "react";
import Image from "next/image";
import Heading from "../components/Heading";
import styled from "styled-components";

export default function Updates() {
  const list = [
    {
      id: 1,
      blurDataURL: "/updates1blur.png",
      src: "/updates1.png",
      content:
        "Webinar conducted on 23rd july 2021 by Ms. Anupama Chauhan on “How to conduct online classes more effectively with simple tools”.",
    },
    {
      id: 2,
      blurDataURL: "/updates1blur.png",
      src: "/updates1.png",
      content:
        "Webinar conducted on 23rd july 2021 by Ms. Anupama Chauhan on “How to conduct online classes more effectively with simple tools”.",
    },
  ];
  return (
    <Wrapper>
      <Heading level={2}> LATEST UPDATES </Heading>
      <Container>
        {list.map((list) => (
          <Card key={list.id}>
            <ImageWrapper>
              <Image
                blurDataURL={list.blurDataURL}
                src={list.src}
                placeholder="blur"
                alt=""
                width={420}
                height={280}
              />
            </ImageWrapper>
            <p>{list.content}</p>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  p {
    font-size: 24px;
    letter-spacing: 0.1em;
    line-height: 24px;
    padding: 0px 40px;
    @media (max-width: 768px) {
      width: 420px;
      padding: 0;
    }
    @media (max-width: 500px) {
      width: 100%;
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  min-width: 420px;
  @media (max-width: 1000px) {
    min-width: 350px;
  }
  @media (max-width: 500px) {
    min-width: 90%;
  }
`;
