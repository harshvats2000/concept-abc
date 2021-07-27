import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../components/Heading";

export default function Patrons() {
  const list = [
    {
      id: 1,
      imgsrc: "/patrons1.png",
      blurDataURL: "/patrons1blur.png",
      name: "Mr. Apurba Dutta",
      detail:
        "Ex. Principal<br/> ( Divisional Training School/ N.F Rly, Alipurduar)",
      background:
        "linear-gradient(145.22deg, rgba(255, 37, 37, 0.44) 0%, #910000 100%)",
    },
    {
      id: 2,
      imgsrc: "/patrons2.png",
      blurDataURL: "/patrons2blur.png",
      name: "Mr. Rajesh Madan",
      detail:
        "Chairman Asha group of schools, & Secretary National Independent Pvt School Association,  Faridabad",
      background:
        "linear-gradient(145.22deg, rgba(0, 234, 65, 0.5) 0%, #0D5B00 100%)",
    },
    {
      id: 3,
      imgsrc: "/patrons3.png",
      blurDataURL: "/patrons3blur.png",
      name: "Dr. Maitrayee Sur",
      detail: "Senior Medical Officer<br/>Govt of Assam",
      background:
        "linear-gradient(145.22deg, rgba(0, 181, 238, 0.5) 0%, rgba(0, 61, 80, 1) 100%)",
    },
    ,
    {
      id: 4,
      imgsrc: "/patrons4.png",
      blurDataURL: "/patrons4blur.png",
      name: "Mr. Kaushik Gurain",
      detail: "Asst. Professor ( Mathematics) <br/>IIM, Bombay",
      background:
        "linear-gradient(145.22deg, rgba(251, 37, 255, 0.5) 0%, rgba(68, 0, 79, 0.8) 100%)",
    },
    {
      id: 5,
      imgsrc: "/patrons5.png",
      blurDataURL: "/patrons5blur.png",
      name: "Dr.Bivash Deb",
      detail: "Director College Development Council <br/>Assam University",
      background:
        "linear-gradient(145.22deg, rgba(16, 202, 57, 0.5) 0%, rgba(43, 64, 0, 0.5) 100%)",
    },
    {
      id: 6,
      imgsrc: "/patrons6.png",
      blurDataURL: "/patrons6blur.png",
      name: "Mr. Tirthankar Bhadro ",
      detail: "Jyotish Shastri/ Numerologist",
      background: "linear-gradient(145.22deg, #2EFDFD 0%, #31D8D8 100%)",
    },
    {
      id: 7,
      imgsrc: "/patrons7.png",
      blurDataURL: "/patrons7blur.png",
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
            <ImageWrapper>
              <Image
                blurDataURL={el.blurDataURL}
                src={el.imgsrc}
                alt={el.name}
                height="200px"
                width="180px"
                quality="100"
                placeholder="blur"
              />
            </ImageWrapper>
            <h3>{el.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: el.detail }} />
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
  min-height: 380px;
  width: 320px;
  background: ${(props) => props.background};
  border-radius: 10px;
  padding: 10px 40px;
  margin: 25px auto;
  color: white;
  h3 {
    margin: 0;
    font-size: 24px;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 18px;
    line-height: 28px;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;
