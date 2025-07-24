import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faComputer,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../common/themeProvider";
import { faDev } from "@fortawesome/free-brands-svg-icons";

export const Services = ({ onScrollTo }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`mx-auto h-full border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      }  md:py-10 py-5 h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
          What I Do
        </h1>
        <h1 className="md:w-3/4 w-[90%] libertinus-math-regular text-[18px] text-center">
          I help bring digital ideas to life — whether it's a responsive
          website, a custom software solution, or a mobile app that runs
          smoothly on any device. With a strong focus on clean code, user
          experience, and performance, I build solutions that not only work, but
          make an impact.
        </h1>
        <h1 className="md:w-3/4 w-[90%] libertinus-math-regular text-[18px] text-center text-orange-700 font-bold">
          Explore my services below to see how I can help with your next
          project.
        </h1>
      </div>
      <div className="md:flex md:w-3/4 w-[90%] grid justify-center gap-10 items-center">
        <div
          className={`md:w-full bg-[#7C7C7C1F] bg-opacity-50 rounded-xl grid gap-5 p-5`}
        >
          <FontAwesomeIcon
            icon={faDev}
            size="2xl"
            className="dark:text-orange-700"
          />
          <h1 className="md:text-[22px] text-xl libertinus-math-regular  font-bold dark:text-orange-700">
            Web-Development
          </h1>
          <p className=" libertinus-math-regular text-[15px]">
            From landing pages to full-scale web apps, I craft responsive, fast,
            and visually engaging websites. Whether you're building from scratch
            or need a revamp, I can create a site that matches your goals and
            brand.
          </p>
        </div>
        <div
          className={`md:w-full bg-[#7C7C7C1F] bg-opacity-50 rounded-xl grid gap-5 p-5`}
        >
          <FontAwesomeIcon
            icon={faCode}
            size="2xl"
            className="dark:text-orange-700"
          />

          <h1 className="md:text-[22px] text-xl font-bold libertinus-math-regular  dark:text-orange-700">
            Software Development
          </h1>
          <p className=" libertinus-math-regular text-[15px]">
            I design and build custom software tailored to your specific
            workflows, goals, and challenges. From internal tools to
            customer-facing platforms, I focus on performance, scalability, and
            clean architecture.
          </p>
        </div>
        <div
          className={`md:w-full bg-[#7C7C7C1F] bg-opacity-50 rounded-xl grid gap-5  p-5`}
        >
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            size="2xl"
            className="dark:text-orange-700"
          />

          <h1 className="md:text-[22px] text-md libertinus-math-regular font-bold dark:text-orange-700">
            Mobile-App-Development
          </h1>
          <p className=" libertinus-math-regular text-[15px]">
            Need an app that works seamlessly across Android and iOS? I build
            fast, functional, and user-friendly mobile applications that deliver
            real value to users.
          </p>
        </div>
      </div>
      <div className=" grid gap-5  place-items-center">
        <h1 className="text-orange-700 font-bold md:text-2xl text-xl text-center libertinus-math-regular">
          Big idea? Small idea? Weird idea? I’m in.
        </h1>
        <button
          onClick={() => onScrollTo("contact")}
          className={`libertinus-math-regular relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700  px-6 py-2 rounded-md group text-[16px] text-white cursor-pointer font-semibold transition-transform duration-50 active:scale-[0.95] ${
            isDark ? " hover:text-black" : " hover:text-white"
          }`}
        >
          <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
            Let’s Discuss
          </span>
          <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
        </button>
      </div>
    </div>
  );
};
