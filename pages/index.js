import Head from "next/head";
import About from "../components/About";
import Facilities from "../components/Facilities";
import HomepageBanner from "../components/HomepageBanner";
import Vision from "../components/Vision";
import Aim from "../components/Aim";
import WhyUs from "../components/WhyUs";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Pre School Concept in India - Concept ABC</title>
      </Head>
      <HomepageBanner />
      <About />
      <Vision />
      <Aim />
      <VideoWrapper>
        <video controls>
          <source src="/static/about.mp4" />
        </video>
      </VideoWrapper>
      <Facilities />
      <WhyUs />
    </>
  );
}

const VideoWrapper = styled.div`
  background: #ffce00;
  padding: 60px 0;
  text-align: center;
  video {
    width: 800px;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 40%);
  }

  @media (max-width: 768px) {
    video {
      width: 96%;
    }
  }
`;
