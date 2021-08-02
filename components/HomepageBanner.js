import Image from "next/image";
import React from "react";
import styled from "styled-components";

const HomepageBanner = () => {
  return (
    <Wrapper>
      <Container>
        <Left data-aos="fade-in">
          <Concept>CONCEPT</Concept>

          <ABC>ABC</ABC>

          <Desc>
            Nurturing Future minds <br />
            India&apos;s Fastest Growing Pre-School Concept
          </Desc>

          <Call href="tel:8851956401">Call Now</Call>

          <ChildrenImageWrapper data-aos="zoom-out">
            <Image
              blurDataURL="/childrenblur.png"
              src="/static/children.png"
              placeholder="blur"
              alt="children"
              width={300}
              height={315}
            />
          </ChildrenImageWrapper>
        </Left>

        <Right>
          <ChildImageWrapper data-aos="fade-up">
            <Image
              blurDataURL="/homepageBannerChildblur.png"
              src="/static/homepageBannerChild.png"
              placeholder="blur"
              alt="child"
              layout="fill"
              loading="eager"
            />
          </ChildImageWrapper>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default HomepageBanner;

const Wrapper = styled.section`
  background: #fff06d;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 10px 10px;
  position: relative;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    min-height: 92vh;
    padding-top: 50px;
    flex-direction: row;
  }
`;

const ChildrenImageWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -30px;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Left = styled.div`
  position: relative;

  @media (max-width: 768px) {
    text-align: center;
    background: radial-gradient(white, #ffa3a34a);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
  }
`;

const Right = styled.div`
  @media (min-width: 768px) {
    padding-top: 70px;
  }
`;

const ChildImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  margin: auto;
  @media (min-width: 768px) {
    width: 450px;
    height: 520px;
  }
`;

const Concept = styled.p`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 3px;
  margin: 0;

  @media (min-width: 768px) {
    margin-top: 60px;
    font-size: 50px;
  }
`;

const ABC = styled.h1`
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 3px;
  background: -webkit-linear-gradient(#ff7676, #b60000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 140px;
    line-height: 140px;
  }
`;

const Desc = styled.p`
  margin: 0;
  line-height: 30px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

const Call = styled.a`
  display: block;
  background: #ba0000;
  border-radius: 5px;
  padding: 15px 0;
  text-align: center;
  width: 200px;
  margin: 20px 0;
  font-size: 22px;
  color: white;
  text-decoration: none;
  font-weight: 900;
  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;
