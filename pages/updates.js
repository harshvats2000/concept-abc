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
  {
    type: "img",
    src: "/mini_philip.jpeg",
    content: `Dear sir, 
      Today's webinar on 'How To Conduct Online Classes Effective and Interesting with Simple Tools' was very useful. It will enable our staff to make their interactions with the students more lively and active. It's just an introduction to a new way of learning process. Yet it was more informative and helpful. 
      Thank you  so much for your sharing.<br/> <strong style="float: right;">- Sr. Mini Philip</strong>`,
    blurDataURL: "/mini_philip_blur.jpg",
    alt: "Sr. Mini Philip",
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
                  src={`/static${list.src}`}
                  placeholder="blur"
                  alt={list.alt}
                  layout="fill"
                />
              </ImageWrapper>
            ) : (
              <Video controls>
                <source src={`/static${list.src}`} />
              </Video>
            )}
            <p dangerouslySetInnerHTML={{ __html: list.content }} />
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
    font-size: 22px;
    margin: 10px 0 0;
    line-height: 34px;
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
  position: relative;
  min-width: 350px;
  height: 350px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Video = styled.video`
  width: 350px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
