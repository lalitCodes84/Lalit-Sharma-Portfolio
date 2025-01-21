import React from "react";
import { heroSectionData } from "../utils/data";
import * as Icons from "react-icons/fa"; // Import all icons

function SocialLinks() {
  const socialLinks = heroSectionData.find(
    (item) => item.key === "socialLinks"
  )?.value;

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {socialLinks.map((social, index) => {
        const IconComponent = Icons[social.icon]; // Map string to actual icon component
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mt-6"
          >
            {IconComponent && <IconComponent size={40} />}{" "}
            {/* Render the icon */}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
