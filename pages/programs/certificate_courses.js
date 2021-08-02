import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Heading from "../../components/Heading";

const list = [
  {
    color: "#FDE82E",
    content: "Montessori Teachers Training",
  },
  {
    color: "#89FD2E",
    content: "Effective Classroom Management",
  },
  {
    color: "#2EFDFD",
    content: "Play way Methodology",
  },
];

export default function CertificateCourses() {
  return (
    <Wrapper>
      <Container>
        <Heading level={2}>CERTIFICATE COURSES</Heading>
        <List>
          {list.map(({ color, content }) => (
            <Card key={color} data-bg={color}>
              {content}
            </Card>
          ))}
        </List>

        <ImageWrapper>
          <Image
            src="/static/certificate_post.png"
            alt=""
            width={500}
            height={700}
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 10px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px);
  grid-row-gap: 80px;
  justify-content: space-between;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 400px);
  }
  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-row-gap: 50px;
    p {
      min-height: 120px;
      padding: 0 20px;
      font-size: 18px;
    }
  }
`;

const Card = styled.p`
  background: ${(props) => props["data-bg"]};
  padding: 40px 20px;
  width: 250px;
  margin: 0 auto;
  font-size: 22px;
  font-weight: 600;
  line-height: 35px;
  min-height: 280px;
  display: grid;
  place-items: center;
  &:nth-of-type(odd) {
    transform: rotate(-5deg);
  }
  &:nth-of-type(even) {
    transform: rotate(5deg);
  }
`;

const ImageWrapper = styled.div`
  padding: 40px 0 20px;
  text-align: center;
`;
