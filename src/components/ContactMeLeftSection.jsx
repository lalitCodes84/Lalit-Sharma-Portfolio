import React from "react";
import { heroSectionData } from "../utils/data.js";
import photo from "../assets/Lalit_Official_Image.jpg";

function ContactMeLeftSection() {

     const name = heroSectionData.find((item) => item.key === "name")?.value;

  return (
    <div className="w-80 h-auto p-4 border-4 border-dashed border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[20px] hover:rounded-[50px] transition-all duration-500 shadow-lg hover:shadow-2xl bg-white">
      <img
        src={photo}
        alt="Lalit Official"
        className="w-full h-72 rounded-3xl"
      />
      <h1 className="text-2xl text-center p-2 font-semibold font-deceptibotsHalftone">
        {name}
      </h1>
    </div>
  );
}

export default ContactMeLeftSection;
