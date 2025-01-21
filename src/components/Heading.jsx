import React from "react";

const Heading = ({ text, level = 1, className = "" }) => {
  const Tag = `h${level}`; // Dynamically set the heading level (h1, h2, etc.)
  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
