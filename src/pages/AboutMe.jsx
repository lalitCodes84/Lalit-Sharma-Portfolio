import React from "react";
import Heading from "../components/Heading";
import AboutMeRightSection from "../components/AboutMeRightSection";
import AboutMeLeftSection from "../components/AboutMeLeftSection";

function AboutMe() {
  return (
    <div id="about-me" className="px-16">
      <Heading
        text="About Me"
        level={1}
        className="font-deceptibotsHalftone text-center text-2xl underline pt-28"
      />
      <div className="flex items-center justify-between p-10">
        <AboutMeLeftSection />
        <AboutMeRightSection />
      </div>
    </div>
  );
}

export default AboutMe;
