import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = ({ onScrollTo }) => {
  return (
    <div className="text-white libertinus-math-regular">
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
          className="text-2xl text-white cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="text-2xl text-white cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-2xl text-white cursor-pointer"
        />

        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl text-white cursor-pointer"
        />
      </div>

      <div className="w-full bg-black font-bold flex gap-2 md:text-[16px] text-[14px] justify-center items-center py-3 libertinus-math-regular">
        <span>&copy; {new Date().getFullYear()}</span>
        <span className="text-orange-700">Naol Atomsa </span>

        <span>Inc. All Rights Reserved. </span>
      </div>
    </div>
  );
};
