import React from "react";
import Heading from "../components/Heading";
import { skillsIcons } from "../utils/data";
import * as Icons from "react-icons/fa"; // Import all icons

function Skills() {
  return (
    <div id="skills" className="px-16">
      <Heading
        text={"Skills"}
        level={1}
        className="m-auto font-deceptibotsHalftone text-center text-2xl my-10 pt-28 underline"
      />
      <div className="grid grid-cols-4 m-auto">
        {skillsIcons.map((skills, index) => {
          const IconComponent = Icons[skills.icon];
          return (
            <div
              key={index}
              className="flex flex-col py-10 m-auto justify-center text-center"
            >
              {IconComponent && (
                <IconComponent size={80} className="fill-optimusBlue" />
              )}
              <p className="font-transformers">{skills.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
