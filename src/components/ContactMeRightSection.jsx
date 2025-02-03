import React from "react";

function ContactMeRightSection() {
  return (
    <div>
      <form
        action=""
        className="border-2 w-96 p-8 h-auto rounded-2xl shadow-bw-gradient-shadow"
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
          className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out bg-white text-gray-800 placeholder-gray-400 hover:shadow-md resize-none"
        ></textarea>
      </form>
    </div>
  );
}

export default ContactMeRightSection;
