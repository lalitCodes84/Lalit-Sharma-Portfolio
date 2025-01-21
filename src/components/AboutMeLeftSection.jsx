import React from "react";
import { aboutMeData } from "../utils/data.js";
import { FcAdvance } from "react-icons/fc";

function AboutMeLeftSection() {
  const description = aboutMeData.find((desc) => desc.title === "Description");
  const personalInfo = aboutMeData.find(
    (pers) => pers.title === "Personal Information"
  );
  // const education = aboutMeData.find((educ) => educ.title === "Education");
  const workExperience = aboutMeData.find(
    (workExp) => workExp.title === "Work Experience"
  );

  return (
    <div className="w-[40vw]">
      <p>{description.details}</p>
      {personalInfo.details.map((item, index) => (
        <div className="flex gap-4 items-center">
          <FcAdvance />
          <p key={index} className="font-semibold mt-1 underline">
            {item.label} - {item.value}
          </p>
        </div>
      ))}
      <p className="mt-2 font-transformers">
        I have worked in various non-tech roles at companies like
      </p>
      {workExperience.details.map((item, index) => (
        <div className="flex gap-4 items-center">
          <FcAdvance />
          <p key={index} className="font-normal mt-1">
            {item.company} - {item.role}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutMeLeftSection;
