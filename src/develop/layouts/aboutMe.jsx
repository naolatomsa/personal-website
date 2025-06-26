import React from "react";
import NavBar from "./navBar";
import ima from "../../assets/aboutMe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const AboutMe = () => {
  return (
    <div className="md:flex font-sans grid md:gap-20 md:py-10 py-5 gap-10  md:mx-auto md:w-3/4  md:items-center place-content-center place-items-center  h-full">
      <div className="w-[90%] md:hidden grid">
        <img src={ima} alt="mypic" />
      </div>
      <div className="w-[40%] md:grid gap-5 hidden">
        <img src={ima} alt="mypic" />
        <div className="flex gap-5 justify-center text-white">
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
      </div>
      <div className="md:w-3/4 w-[90%] grid place-items-center md:gap-5 gap-3">
        <div className="grid gap-1">
          <h1
            className="text-white text-3xl text-center font-bold"
            style={{
              borderBottom: "1px solid transparent",
              borderImage:
                "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
             
            }}
          >
            About Me
          </h1>
        </div>
        <div>
          <p className="text-white text-[14px] font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="grid w-full gap-1">
          <h1 className="text-white">HTML5/CSS</h1>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300">
            <div
              className="bg-white h-2.5 rounded-full dark:bg-orange-700"
              style={{ width: "95%" }}
            ></div>
          </div>
          <h1 className="text-white">JavaScript</h1>

          {/* <div className="w-full h-2 rounded-full bg-gray-800 relative">
            <div
              className="h-2 rounded-full dark:bg-orange-700"
              style={{ width: "75%" }}
            ></div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 dark:border-orange-700"
              style={{ left: "74%" }}
            />
          </div> */}

          <h1 className="text-white">React Js</h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300">
            <div
              className="bg-white h-2.5 rounded-full dark:bg-orange-700"
              style={{ width: "90%" }}
            ></div>
          </div>
          <h1 className="text-white">Next Js</h1>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300">
            <div
              className="bg-white h-2.5 rounded-full dark:bg-orange-700"
              style={{ width: "75%" }}
            ></div>
          </div>
          <h1 className="text-white">Node Js</h1>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300">
            <div
              className="bg-white h-2.5 rounded-full dark:bg-orange-700"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
