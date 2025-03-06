
import Hero from "./component/Home/Hero";
import About from "./component/Home/About";
import Section3 from "./component/Home/Section3";
import Industrie from "./component/Home/Industrie";
import OurProject from "./component/Home/OurProject";
import Contacts from "./component/Home/Contacts";
import MoreInfo from "./component/Home/MoreInfo";
import OurTechnology from "./component/Home/OurTechnology";
import OurClients from "./component/Home/OurClient";

export default function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <About />
      <Section3 />
      <Industrie />
      <OurProject />
      <OurTechnology />
      <MoreInfo />
      <Contacts />
    </>
  );
}
