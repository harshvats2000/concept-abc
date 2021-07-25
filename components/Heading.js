import React from "react";
import styled from "styled-components";

const Heading = ({ level = 1, children }) => {
  return (
    <>
      <El as={`h${level}`} data-level={level}>
        {children}
      </El>
    </>
  );
};

export default Heading;

const El = styled.h1`
  text-align: center;
  font-family: "Rock Salt", cursive;
  letter-spacing: 5px;
  font-size: ${(props) => {
    if (props["data-level"] == 1) return "28px";
    if (props["data-level"] == 2) return "24px";
    if (props["data-level"] == 3) return "22px";
  }};

  @media (min-width: 768px) {
    font-size: ${(props) => {
      if (props["data-level"] == 1) return "40px";
      if (props["data-level"] == 2) return "36px";
      if (props["data-level"] == 3) return "32px";
    }};
  }
`;
