import React from "react";
import { heroSectionData } from "../utils/data";

function CTA() {
  const ctaButtons = heroSectionData.find(
    (item) => item.key === "ctaButtons"
  )?.value;

  return (
    <div className="flex gap-6 mt-6">
      {ctaButtons.map((cta, index) => (
        <button
          className="font-megatronCondensed border-2 bg-optimusSkyblue p-2 hover:bg-optimusBlue text-optimusWhite"
          key={index}
        >
          <a href={cta.link}>{cta.label}</a>
        </button>
      ))}
    </div>
  );
}

export default CTA;
