import React from "react";
import HeroRightSection from "../components/HeroRightSection";
import HeroLeftSection from "../components/HeroLeftSection";

function HeroSection() {
  return (
    <div id="home" className="flex justify-around pt-16">
      <HeroLeftSection />
      <HeroRightSection />
    </div>
  );
}

export default HeroSection;
