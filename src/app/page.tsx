import Image from "next/image";
import Hero from "./component/Home/Hero";
import About from "./component/Home/About";
import Section3 from "./component/Home/Section3";
import Industrie from "./component/Home/Industrie";
import OurProject from "./component/Home/OurProject";
import OurBlogs from "./component/Home/OurBlogs";
import Contacts from "./component/Home/Contacts";
import MoreInfo from "./component/Home/MoreInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Section3 />
      <Industrie />
      <OurProject />
      <OurBlogs />
      <Contacts />
      <MoreInfo />
    </>
  );
}
