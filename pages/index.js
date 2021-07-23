import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import About from "../components/About";
import Facilities from "../components/Facilities";
import HomepageBanner from "../components/HomepageBanner";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <div>
      <HomepageBanner />
      <About />
      <Facilities />
      <WhyUs />
    </div>
  );
}
