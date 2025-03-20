// import React from "react";
import { projects } from "../utils/data.js";
import Heading from "../components/Heading.jsx";
import { FaLink } from "react-icons/fa";
import kfc_clone_img from "../assets/Kfc clone react.png";
import bluefly_clone_img from "../assets/bluefly clone.png";
import asos_clone_img from "../assets/asos clone first project.png";
import myGemini from "../assets/mygemini.png";


function Projects() {
  return (
    <div id="projects" className="py-16">
      <Heading
        text={"Projects"}
        level={1}
        className="m-auto font-deceptibotsHalftone text-center text-2xl my-10 underline"
      />
      <div className="grid grid-cols-3 gap-4 p-4 gap-x-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid m-auto p-2 shadow-shadowMain rounded-md"
          >
            <img
              src={
                project.name === "kfc clone"
                  ? kfc_clone_img
                  : project.name === "asos clone"
                  ? asos_clone_img
                  : project.name === "bluefly clone"
                  ? bluefly_clone_img
                  : myGemini
              }
              alt=""
              className="w-72"
              
            />
            <div className="flex justify-between items-center mt-2 p-2 shadow-shadowInner rounded-md">
              <p className="text-xl font-light font-transformers">
                {project.name.toUpperCase()}
              </p>
              <div className="flex items-start flex-col text-sm">
                <a
                  href={project.liveLink}
                  className="flex gap-x-2 hover:text-optimusOrange  text-optimusBlue font-bold"
                  target="_blank"
                >
                  Live Link
                  <FaLink />
                </a>
                <a
                  href={project.githubRepoLink}
                  className="flex gap-x-2 hover:text-optimusOrange text-optimusBlue font-bold"
                  target="_blank"
                >
                  Github Repo
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
