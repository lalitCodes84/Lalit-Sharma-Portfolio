import React from "react";
import { heroSectionData } from "../utils/data";
import photo from "../assets/Lalit_Official_Image.jpg"

function HeroLeftSection() {
  const name = heroSectionData.find((item) => item.key === "name")?.value;  
 
  return (
    <div className="flex flex-col justify-center pt-16">
      <img
        className="w-80 rounded-full shadow-custom p-1 bg-optimusSkyblue "
        src={photo}
        alt=""
      />
      <p className="text-center text-2xl font-deceptibotsHalftone mt-4">
        {name}
      </p>
    </div>
  );
}

export default HeroLeftSection;
