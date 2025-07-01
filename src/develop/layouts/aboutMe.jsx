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
      <h1 className="dark:text-orange-700 md:hidden text-3xl libertinus-math-regular text-center font-bold">
        About Me
      </h1>
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
          <h1 className="dark:text-orange-700 md:flex hidden text-3xl libertinus-math-regular text-center font-bold">
            About Me
          </h1>
        </div>
        <div>
          <p className="text-white  font-normal libertinus-math-regular text-[18px]">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
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
