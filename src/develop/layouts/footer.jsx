import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../common/themeProvider";

export const Footer = ({ onScrollTo }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`libertinus-math-regular md:mx-24  border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      }  ${isDark ? "text-black" : "text-white"}`}
    >
      <div className="flex flex-wrap justify-center items-center gap-5 py-5">
        <button
          onClick={() => onScrollTo("home")}
          className="underline-hover-center text-[16px] font-normal"
        >
          Home
        </button>
        <button
          onClick={() => onScrollTo("about")}
          className="underline-hover-center text-[16px] font-normal"
        >
          About Me
        </button>
        <button
          onClick={() => onScrollTo("services")}
          className="underline-hover-center text-[16px] font-normal"
        >
          Services
        </button>
        <button
          onClick={() => onScrollTo("projects")}
          className="underline-hover-center text-[16px] font-normal"
        >
          Projects
        </button>
        <button
          onClick={() => onScrollTo("testimonials")}
          className="underline-hover-center text-[16px] font-normal"
        >
          Testimonials
        </button>
        <button
          onClick={() => onScrollTo("contact")}
          className="underline-hover-center text-[16px] font-normal"
        >
          Contact
        </button>
      </div>
      <div className="flex justify-center items-center gap-5 py-5 mb-5">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-2xl  cursor-pointer"
        />
        <FontAwesomeIcon icon={faGithub} className="text-2xl  cursor-pointer" />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-2xl  cursor-pointer"
        />

        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl  cursor-pointer"
        />
      </div>

      <div
        className={`w-full font-bold flex gap-2 md:text-[16px] text-[14px] justify-center items-center py-3 libertinus-math-regular ${
          isDark
            ? "bg-[#dee1e6] border-t border-gray-400"
            : "bg-black border-t border-[#333333]"
        }`}
      >
        <span>&copy; {new Date().getFullYear()}</span>
        <span className="text-orange-700">Naol Atomsa </span>

        <span>Inc. All Rights Reserved. </span>
      </div>
    </div>
  );
};
