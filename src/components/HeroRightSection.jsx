import React from "react";
import { heroSectionData } from "../utils/data";
import { FcAdvance } from "react-icons/fc";
import SocialLinks from "./SocialLinks";
import CTA from "./CTA";

// Created Right side of hero section
function HeroRightSection() {
  const expertise = heroSectionData.find(
    (item) => item.key === "expertise"
  )?.value;
  const title = heroSectionData.find((item) => item.key === "title")?.value;
  const shortIntro = heroSectionData.find(
    (item) => item.key === "shortIntro"
  )?.value;

  return (
    <div className="pt-16">
      <p className="font-transformers mb-4">{title}</p>
      {expertise.map((item, index) => (
        <div className="flex items-center " key={index}>
          <FcAdvance />
          &nbsp; &nbsp; &nbsp;
          <p className="font-sans" key={index}>
            {item}
          </p>
        </div>
      ))}
      <p className="font-semibold mt-4">{`Intro : ${shortIntro}`}</p>
      <SocialLinks />
      <hr className="mt-6" />
      <CTA />
    </div>
  );
}

export default HeroRightSection;
