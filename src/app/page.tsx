
import Hero from "./component/Home/Hero";
import About from "./component/Home/About";
import Applications from "./component/Home/Application";
import Industrie from "./component/Home/Industrie";
import Contacts from "./component/Home/Contacts";
import MoreInfo from "./component/Home/MoreInfo";
import OurTechnology from "./component/Home/OurTechnology";
import OurClients from "./component/Home/OurClient";
import OurProject from "./component/Home/OurProject";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <OurClients />
      <Applications />
      {/* <Section3 /> */}
      
      <Industrie />
      <OurProject />
      <MoreInfo />
      <OurTechnology />
      <Contacts />
    </>
  );
}
