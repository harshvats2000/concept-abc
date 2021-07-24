import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const list = [
  {
    color: "#FDE82E",
    content: "Complete syllabus of Pre-Nursery,Nursery & KG.",
  },
  {
    color: "#89FD2E",
    content: "Specially designed Concept ABC books.",
  },
  {
    color: "#2EFDFD",
    content: "Special traninigs/ orientation programs for teachers.",
  },
  {
    color: "rgba(249, 46, 253, 0.76)",
    content: "Regular seminars and webinars for parents.",
  },
  {
    color: "rgba(46, 179, 253, 0.52)",
    content: "Complete guidance regarding setting up the school.",
  },
  {
    color: "rgba(252, 31, 31, 0.58)",
    content: "Academic calendar, functions of the school.",
  },
  {
    color: "rgba(253, 232, 46, 1)",
    content: "Free ART & MUSIC classes for the kids.",
  },
  {
    color: "rgba(46, 253, 253, 1)",
    content: "Helping in recruiting of qualified staff.",
  },
  {
    color: "rgba(137, 253, 46, 1)",
    content: "Any other support required by school.",
  },
];

const Facilities = () => {
  return (
    <Wrapper>
      <Container>
        <Heading level={2}>Our Facilities</Heading>
        <List>
          {list.map(({ color, content }) => (
            <Card key={color} data-bg={color}>
              {content}
            </Card>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Facilities;

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
    grid-template-columns: repeat(2, 350px);
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
  line-height: 35px;
  min-height: 200px;
  display: grid;
  place-items: center;
  &:nth-of-type(odd) {
    transform: rotate(-5deg);
  }
  &:nth-of-type(even) {
    transform: rotate(5deg);
  }
`;
