import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

// Define an array of social media items with their corresponding icons and links
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/waahguptaji",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://www.twitter.com/waahguptaji",
    icon: <FaTwitter />,
    label: "Twitter",
  },
  {
    href: "https://www.github.com/waahguptaji",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/waahguptaji",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  { href: "https://www.youtube.com/", icon: <FaYoutube />, label: "YouTube" },
  {
    href: "mailto:sahil.work742@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-container text-xl md:text-2xl   text-gray-300 hover:text-white transition-colors duration-200"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
