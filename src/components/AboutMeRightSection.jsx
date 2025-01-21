import React from "react";
import { aboutMeData } from "../utils/data";

const menWithPCSvg = aboutMeData.find((item) => item.title === "Men with PC");

function AboutMeRightSection() {
  return (
    <div>
      <img src={menWithPCSvg.image} alt="" className="w-[30vw] mt-16" />
    </div>
  );
}

export default AboutMeRightSection;
