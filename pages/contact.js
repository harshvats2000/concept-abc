import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const onChange = ({ target: { name, value } }) => {
    setData({
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Head>
        <title>Contact - Concept ABC</title>
      </Head>
      <Container>
        <ImageWrapper>
          <Image
            blurDataURL="/static/aboutblur.png"
            src="/static/about.png"
            placeholder="blur"
            alt="children holding abc"
            height={250}
            width={450}
            quality={100}
          />
        </ImageWrapper>
        <Card>
          <Desc>
            <h1>Contact</h1>
            <p>We’d love to hear from you. Here’s how you can reach us...</p>
          </Desc>
          <FormCard data-aos="fade-up">
            <form
              method="POST"
              action="https://formsubmit.co/info@digivats.com"
            >
              <input
                type="text"
                placeholder="Full Name..."
                autoComplete="on"
                required
                name="name"
                onChange={onChange}
              />
              <input
                type="email"
                placeholder="E-mail id..."
                autoComplete="on"
                required
                name="email"
                onChange={onChange}
              />
              <input
                type="tel"
                placeholder="Contact number..."
                autoComplete="on"
                required
                name="number"
                onChange={onChange}
              />
              <textarea
                rows="5"
                placeholder="Write a message..."
                name="message"
                onChange={onChange}
              />
              <button type="submit">Submit</button>
            </form>
          </FormCard>
        </Card>
        <Info>
          <InfoCard data-aos="zoom-out" href="tel:8851956401">
            <Image src="/static/call.svg" alt="call" height={80} width={80} />
            <p>8851956401</p>
          </InfoCard>
          <InfoCard data-aos="zoom-out" href="mailto:conceptabc9@gmail.com">
            <Image src="/static/mail.svg" alt="mail" height={80} width={80} />
            <p>conceptabc9@gmail.com</p>
          </InfoCard>
          <InfoCard data-aos="zoom-out" href="https://facebook.com">
            <Image
              src="/static/facebook.svg"
              alt="facebook"
              height={60}
              width={60}
            />
            <p>Like us on Facebook</p>
          </InfoCard>
        </Info>
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

const ImageWrapper = styled.div`
  max-width: 500px;
  margin: 25px auto -75px auto;
  display: grid;
  @media (max-width: 600px) {
    max-width: 320px;
    margin-bottom: -50px;
  }
`;

const Card = styled.div`
  position: relative;
  padding: 40px 0px;
  margin: 0 auto;
  font-size: 22px;
  line-height: 35px;
  min-height: 600px;
  background: #ff5e5e;
  border-radius: 10px;
`;

const Desc = styled.div`
  position: absolute;
  top: 25%;
  left: 80px;
  max-width: 280px;
  h1 {
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  p {
    font-size: 22px;
    line-height: 30px;
  }

  @media (max-width: 800px) {
    position: relative;
    margin: auto;
    left: unset;
    top: unset;
  }
`;

const FormCard = styled.div`
  position: absolute;
  top: 60px;
  right: 80px;
  width: 340px;
  min-height: 380px;
  padding: 20px 0px;
  background: #ffffff;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.42);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
      font-size: 16px;
      color: #616161;
      background: #eaeaea;
      border-radius: 4px;
      border: none;
      outline: none;
      padding: 10px;
      margin: 10px auto;
      min-width: 80%;
      overflow: hidden;
    }

    button {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 10px 20px;
      color: #ffffff;
      font-size: 22px;
      background: linear-gradient(
        180deg,
        rgba(255, 0, 0, 0.28) 0%,
        #ba0000 100%
      );
      border-radius: 10px;
      margin-top: 20px;
    }
  }
  @media (max-width: 800px) {
    position: relative;
    top: unset;
    right: unset;
    margin: auto;
    width: 85%;
  }
`;

const Info = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: -80px;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 80px;
  }
`;

const InfoCard = styled.a`
  height: 250px;
  width: 280px;
  padding: 40px 0px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  transition: 0.5s !important;
  z-index: 1;
  display: grid;
  place-items: center;

  &:hover {
    box-shadow: 0px 100px 50px -30px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px) scale(1.05) !important;
  }

  p {
    font-size: 22px;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    font-size: 22px;
    margin: auto;
    margin-bottom: 40px;
  }
`;
