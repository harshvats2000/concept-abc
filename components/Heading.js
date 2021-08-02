import React from "react";
import styled from "styled-components";

const Heading = ({ level = 1, color = "black", children }) => {
  return (
    <>
      <El
        as={`h${level}`}
        data-level={level}
        data-color={color}
        data-aos="fade-up"
      >
        {children}
      </El>
    </>
  );
};

export default Heading;

const El = styled.h1`
  text-align: center;
  color: ${(props) => props["data-color"]};
  font-size: ${(props) => {
    if (props["data-level"] == 1) return "28px";
    if (props["data-level"] == 2) return "24px";
    if (props["data-level"] == 3) return "22px";
  }};

  @media (min-width: 768px) {
    font-size: ${(props) => {
      if (props["data-level"] == 1) return "54px";
      if (props["data-level"] == 2) return "50px";
      if (props["data-level"] == 3) return "46px";
    }};
  }
`;
