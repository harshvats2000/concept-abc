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
    color: "rgba(253, 232, 46, 1)",
    content: "Free ART & MUSIC classes for the kids.",
  },
  {
    color: "#F4BE2C",
    content: "Daily basis classwork and homework.",
  },
  {
    color: "#FF6263",
    content: "Special care for absentees/slow learners.",
  },
  {
    color: "#02B290",
    content: "Activity based concept building.",
  },
  {
    color: "rgba(137, 253, 46, 1)",
    content: "Value based educational concept.",
  },
];

const Facilities = () => {
  return (
    <Wrapper>
      <Container>
        <Heading level={2}>Our Facilities</Heading>
        <List>
          {list.map(({ color, content }) => (
            <Card
              key={color}
              data-bg={color}
              data-aos="flip-up"
              data-aos-delay="5000"
            >
              {content}
            </Card>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Facilities;

const Wrapper = styled.section`
  background: #92dcff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px 10px;
  margin-top: 10px;

  h2 {
    margin-top: 0;
  }
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
  border-radius: 8px;
  box-shadow: 0 10px 20px -4px rgb(0 0 0 / 30%);
  &:hover {
    transform: scale(1.1) !important;
  }
`;
