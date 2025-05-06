/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
  import Services3 from "../../components/Services3";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Team1 from "../../components/Team1";
import Contact from "../../components/Contact";
import Video from "../../components/Video"
const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <AboutUs1 />
      <Services3   />
      <Team1 />
      <Video/>
      <Contact />
    </LightLayout>
  );
};

export default Home1;
