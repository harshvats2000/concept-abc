import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../components/Heading";

export default function Patrons() {
  const list = [
    {
      id: 1,
      imgsrc: "/patrons1.png",
      name: "Mr. Apurba Dutta",
      detail: "Ex. Principal ( Divisional Training School/ N.F Rly,Alipurduar)",
      background:
        "linear-gradient(145.22deg, rgba(255, 37, 37, 0.44) 0%, #910000 100%)",
    },
    {
      id: 2,
      imgsrc: "/patrons2.png",
      name: "Mr. Rajesh Madan",
      detail:
        "Chairman Asha group of schools, & Secretary National Independent Pvt School Association,  Faridabad",
      background:
        "linear-gradient(145.22deg, rgba(0, 234, 65, 0.5) 0%, #0D5B00 100%)",
    },
    {
      id: 3,
      imgsrc: "/patrons3.png",
      name: "Dr. Maitrayee Sur",
      detail: "Senior Medical Officer/ Govt of Assam",
      background:
        "linear-gradient(145.22deg, rgba(0, 181, 238, 0.5) 0%, rgba(0, 61, 80, 0.5) 100%)",
    },
    ,
    {
      id: 4,
      imgsrc: "/patrons4.png",
      name: "Mr. Kaushik Gurain",
      detail: "Asst. Professor ( Mathematics) IIM, Bombay",
      background:
        "linear-gradient(145.22deg, rgba(251, 37, 255, 0.5) 0%, rgba(68, 0, 79, 0.5) 100%)",
    },
    {
      id: 5,
      imgsrc: "/patrons5.png",
      name: "Dr.Bivash Deb",
      detail: "Director College Development Council Assam University",
      background:
        "linear-gradient(145.22deg, rgba(16, 202, 57, 0.5) 0%, rgba(43, 64, 0, 0.5) 100%)",
    },
    {
      id: 6,
      imgsrc: "/patrons6.png",
      name: "Mr. Tirthankar Bhadro ",
      detail: "Jyotish Shastri/ Numerologist",
      background: "linear-gradient(145.22deg, #2EFDFD 0%, #31D8D8 100%)",
    },
    {
      id: 7,
      imgsrc: "/patrons7.png",
      name: "Mrs. ARPITA MITRA",
      detail: "Founder ART MANIA WORLDWIDE",
      background:
        "linear-gradient(145.22deg, rgba(255, 37, 37, 0.44) 0%, #910000 100%)",
    },
  ];

  return (
    <Wrapper>
      <Heading level={2}>OUR PATRONS</Heading>
      <Container>
        {list.map((el) => (
          <Card key={el.id} background={el.background}>
            <Image
              src={el.imgsrc}
              alt={el.name}
              height="200px"
              width="180px"
              quality="100"
            />
            <h3>{el.name}</h3>
            <p>{el.detail}</p>
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
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: 380px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 10px;
  padding: 10px 40px;
  margin: 25px auto;
  color: white;
  h3 {
    margin: 0;
    padding: 1rem;
    line-height: 22px;
    text-align: center;
  }
`;
