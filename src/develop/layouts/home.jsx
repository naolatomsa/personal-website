import React from "react";
import ima from "../../assets/newTransparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../common/themeProvider";

const Home = ({ onScrollTo }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`md:flex border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } font-sans grid md:gap-0  md:py-10 p-5 md:mt-40 mt-30 gap-10 md:justify-center md:mx-auto md:w-3/4  md:items-center place-content-center place-items-center md:h-full ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <div className="w-[90%] md:hidden grid">
        <img src={ima} alt="mypic" />
      </div>
      <div className="md:w-3/4 md:text-start text-center w-full grid md:gap-5 gap-3">
        <div>
          <h1 className=" text-2xl font-bold libertinus-math-regular">
            Hello, I am
          </h1>
          <h1 className="text-orange-700  text-2xl font-bold libertinus-math-regular">
            Naol Atomsa
          </h1>
        </div>
        <div className="grid gap-1">
          <h1 className=" text-6xl font-bold libertinus-math-regular">
            Software
          </h1>
          <h1 className=" text-6xl md:ml-10 font-bold libertinus-math-regular">
            Developer
          </h1>
        </div>
        <div className="grid gap-3 md:place-items-start place-items-center">
          <h1 className="libertinus-math-regular md:text-[20px] text-[18px] leading-7 font-bold  md:w-full text-balance w-[95%]">
            Hi there!👋 I'm a Software Developer with expertise in React.js, the
            MERN stack (MongoDB, Express.js, React.js, Node.js), Spring Boot,
            flutter.
          </h1>
          <button
            onClick={() => onScrollTo("contact")}
            className={`libertinus-math-regular md:w-[30%] text-[16px] w-1/2 cursor-pointer   text-white   font-semibold   py-3  transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700 rounded-full group ${
              isDark ? " hover:text-black" : " hover:text-white"
            }`}
          >
            <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
              More...
            </span>
            <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
          </button>
        </div>
      </div>

      <div className="w-[40%] md:grid gap-5 hidden">
        <img src={ima} alt="mypic" />
        <div className="flex gap-5 justify-center ">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl  cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-2xl cursor-pointer"
          />

          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>

      <div className="flex md:hidden gap-10 justify-center ">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-2xl  cursor-pointer"
        />
        <FontAwesomeIcon icon={faGithub} className="text-2xl cursor-pointer" />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-2xl cursor-pointer"
        />

        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Home;
