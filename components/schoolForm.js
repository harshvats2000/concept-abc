import React from "react";
import styled from "styled-components";

const form = () => {
  return (
    <Wrapper>
      <Container>
        <form>
          <input type="text" placeholder="School Name" required />
          <input type="email" placeholder="School Email id" required />
          <input type="number" placeholder="School Contact Number" required />
          <input type="text" placeholder="School Postal Address" required />
          <input type="text" placeholder="School is upto" required />
          <input type="text" placeholder="School is affiliated from" required />
          <input
            type="text"
            placeholder="School Medium of instruction"
            required
          />
          <input type="text" placeholder="Highest number of class" required />
          <input
            type="number"
            placeholder="Total number students in the present academic session "
            required
          />
          <textarea rows={5} placeholder="Any special remarks" />
          <button type="submit">Submit</button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default form;

const Wrapper = styled.section``;

const Container = styled.div`
  width: 100%;
  height: 850px;
  margin: auto;
  background: radial-gradient(50% 50% at 50% 50%, #ffb3b3 0%, #d95e5e 100%);
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
  }
  input,
  textarea {
    font-size: 18px;
    color: #616161;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 10px 25px;
    margin: 10px auto;
    min-width: 85%;
    overflow: hidden;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 22px;
    background: linear-gradient(180deg, rgba(255, 0, 0, 0.28) 0%, #ba0000 100%);
    border-radius: 10px;
    margin-top: 20px;
  }
`;
