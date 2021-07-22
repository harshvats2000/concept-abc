import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Facilities from "../components/Facilities";
import HomepageBanner from "../components/HomepageBanner";

export default function Home() {
  return (
    <div>
      <HomepageBanner />
      <About />
      <Facilities />
    </div>
  );
}
