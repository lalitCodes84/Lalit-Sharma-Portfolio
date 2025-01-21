import React from "react";
import Heading from "../components/Heading";
import { heroSectionData } from "../utils/data.js";
import photo from "../assets/Lalit_Official_Image.jpg";

function ContactMe() {
  const name = heroSectionData.find((item) => item.key === "name")?.value;

  return (
    <div id="contact-me" className="pt-16">
      <Heading
        text={"Contact Me"}
        level={1}
        className="m-auto font-deceptibotsHalftone text-center text-2xl my-10  underline"
      />
      <div
        id="contact-me"
        className="flex justify-center items-center gap-x-40 p-4"
      >
        <div className="w-80 h-96 mt-10 p-2 border-4 border-dashed border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[20px] hover:rounded-[50px] transition-all duration-500 shadow-lg hover:shadow-2xl bg-white">
          <img
            src={photo}
            alt="Lalit Official"
            className="w-full h-auto rounded-3xl"
          />
          <h1 className="text-2xl text-center p-5 font-semibold font-deceptibotsHalftone">
            {name}
          </h1>
        </div>
        <div>
          <form
            action=""
            className="border-2 w-fit p-4 mt-8 h-96 rounded-2xl shadow-bw-gradient-shadow"
          >
            <label htmlFor="name" className="font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out bg-white text-gray-800 placeholder-gray-400 hover:shadow-md"
            />
            <br />

            <label htmlFor="email" className="font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="Enter your e-mail"
              className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out bg-white text-gray-800 placeholder-gray-400 hover:shadow-md"
            />
            <br />
            <label htmlFor="message" className="font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <br />
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              class="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out bg-white text-gray-800 placeholder-gray-400 hover:shadow-md resize-none"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
