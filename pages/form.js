import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import SchoolForm from "../components/schoolForm.js";
import ParentForm from "../components/parentForm.js";

export default function Form() {
  const [school, setSchool] = useState(true);
  const handleForm = () => {
    setSchool(!school);
  };
  return (
    <Wrapper>
      <Container>
        <Tab>
          <Buttons school={school}>
            <button onClick={handleForm}>Are you from school?</button>
            <button onClick={handleForm}>Are you a parent?</button>
          </Buttons>
          <Image
            src="/form.png"
            alt="children waving"
            height={450}
            width={450}
            quality={100}
          />
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
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 850px;
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
  }
  button:nth-of-type(1) {
    background: ${(props) => (props.school ? "#ce3030" : "none")};
    color: ${(props) => (props.school ? "#ffffff" : "none")};
  }
  button:nth-of-type(2) {
    background: ${(props) => (props.school ? "none" : "#ce3030")};
    color: ${(props) => (props.school ? "none" : "#ffffff")};
  }
`;

const FormCard = styled.div`
  width: 50%;
`;
