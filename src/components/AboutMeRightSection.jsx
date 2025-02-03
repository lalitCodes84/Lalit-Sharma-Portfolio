import React from "react";
import { aboutMeData } from "../utils/data";
import men_with_pc_img from "../assets/men with pc.svg"

function AboutMeRightSection() {
  return (
    <div className="">
      <img src={men_with_pc_img} alt="" className="w-[30vw] mt-16" />
    </div>
  );
}

export default AboutMeRightSection;
