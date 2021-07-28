import React from "react";
import Image from "next/image";
import Heading from "../components/Heading";
import styled from "styled-components";

const list = [
  {
    type: "video",
    src: "/video1.mp4",
    content:
      "Webinar conducted on 23rd july 2021 by Ms. Anupama Chauhan on “How to conduct online classes more effectively with simple tools”.",
  },
];

export default function Updates() {
  return (
    <Wrapper>
      <Heading level={2}>UPDATES</Heading>
      <Container>
        {list.map((list, i) => (
          <Card key={i}>
            {list.type === "img" ? (
              <ImageWrapper>
                <Image
                  blurDataURL={list.blurDataURL}
                  src={list.src}
                  placeholder="blur"
                  alt={`updates` + list.id}
                  width={420}
                  height={280}
                />
              </ImageWrapper>
            ) : (
              <Video controls>
                <source src={list.src} />
              </Video>
            )}
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
    font-size: 20px;
    margin: 0;
    line-height: 30px;
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
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Video = styled.video`
  width: 420px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
