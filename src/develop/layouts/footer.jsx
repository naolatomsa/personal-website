import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="text-white mt-20">
      <div className="md:flex hidden justify-center items-center gap-5 py-5">
        <button className="cursor-pointer hover:text-gray-500  text-white px-2 py-1 rounded-md">
          Home
        </button>
        <button className="cursor-pointer hover:text-gray-500  text-white px-2 py-1 rounded-md">
          About Me
        </button>
        <button className="cursor-pointer hover:text-gray-500  text-white px-2 py-1 rounded-md">
          Services
        </button>
        <button className="cursor-pointer hover:text-gray-500  text-white px-2 py-1 rounded-md">
          Projects
        </button>
        <button className="cursor-pointer hover:text-gray-500  text-white px-2 py-1 rounded-md">
          Testimonials
        </button>
        <button className="cursor-pointer hover:text-gray-500  text-white px-2 py-1 rounded-md">
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

      <div className="w-full bg-black font-bold flex gap-2 justify-center items-center py-3">
        <span>&copy; {new Date().getFullYear()}</span>
        <span className="text-orange-700">Naol Atomsa </span>

        <span>Inc. All Rights Reserved. </span>
      </div>
    </div>
  );
};
