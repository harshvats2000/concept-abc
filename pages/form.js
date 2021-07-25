import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import SchoolForm from "../components/schoolForm.js";
import ParentForm from "../components/parentForm.js";

export default function Form() {
  const [school, setSchool] = useState(true);
  const handleFormSchool = () => {
    setSchool(true);
  };
  const handleFormParent = () => {
    setSchool(false);
  };
  return (
    <Wrapper>
      <Container>
        <Tab>
          <Buttons school={school}>
            <button onClick={handleFormSchool}>Are you from school?</button>
            <button onClick={handleFormParent}>Are you a parent?</button>
          </Buttons>
          <ImageWrapper>
            <Image
              src="/form.png"
              alt="children waving"
              height={450}
              width={450}
              quality={100}
            />
          </ImageWrapper>
        </Tab>
        <FormCard>{school ? <SchoolForm /> : <ParentForm />}</FormCard>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 5%;
  }
  @media (max-width: 500px) {
    padding: 0px 10px;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 850px;
  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }
`;

const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  button {
    outline: none;
    border: none;
    cursor: pointer;
    text-align: left;
    width: 300px;
    font-size: 24px;
    font-weight: 600;
    padding: 20px 10px;
    border-radius: 5px;
    transition: background 0.5s ease;
    @media (max-width: 768px) {
      width: 50%;
      text-align: center;
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
      padding: 15px 0px;
    }
  }
  button:nth-of-type(1) {
    background: ${(props) => (props.school ? "#ce3030" : "none")};
    color: ${(props) => (props.school ? "#ffffff" : "none")};
    &:hover {
      background: ${(props) =>
        props.school ? "#ce3030" : "rgba(206,48,48,0.4)"};
    }
  }
  button:nth-of-type(2) {
    background: ${(props) => (props.school ? "none" : "#ce3030")};
    color: ${(props) => (props.school ? "none" : "#ffffff")};
    &:hover {
      background: ${(props) =>
        props.school ? "rgba(206,48,48,0.4)" : "#ce3030"};
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    margin: 20px 0px;
    padding: 0;
  }
`;

const FormCard = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
