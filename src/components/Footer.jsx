import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const links = [
  { icon: <FaFacebook/>, href: "https://www.facebook.com" },
  { icon: <FaDiscord/>, href: "https://www.discord.com" },
  { icon: <FaGithub/>, href: "https://www.github.com" },
  { icon: <FaInstagram/>, href: "https://www.instagram.com" },
  { icon: <FaTwitter/>, href: "https://www.twitter.com" },
];
const Footer = () => {
  return (
    <div className="w-screen bg-violet-300 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-normal md:text-left">
          &copy; AK 2025. All Rights Reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">{link.icon}</a>
          ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
