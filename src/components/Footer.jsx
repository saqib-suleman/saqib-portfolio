import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="bg-primary lg:flex lg:flex-row flex flex-col justify-evenly items-center gap-4 text-center color-white p-4">
      <div>&copy; {new Date().getFullYear()} Saqib Suleman</div>
      <div className="flex justify-evenly lg:w-1/6 w-2/3">
        <a href="https://github.com/saqib-suleman" target="_blank">
          <AiFillGithub
            className="hover:scale-125 transform transition-transform"
            size={30}
            color="white"
          />
        </a>
        <a
          className="hover:scale-125 transform transition-transform"
          href="https://www.linkedin.com/in/saqib-suleman/"
          target="_blank"
        >
          <AiFillLinkedin size={30} color="white" />
        </a>
        <a
          className="hover:scale-125 transform transition-transform"
          href="https://twitter.com/saqib_suleman1"
          target="_blank"
        >
          <RiTwitterXFill size={30} color="white" />
        </a>
      </div>
    </div>
  );
};
