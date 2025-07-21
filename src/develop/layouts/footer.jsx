import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../common/themeProvider";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import MyModal from "../common/dialog";

export const Footer = ({ onScrollTo }) => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [socialMedia, setSocialMedia] = useState("");
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  //linkedin
  const handleLinkedInClick = () => {
    setIsOpen(true), setSocialMedia("Linkedin");
  };

  //github
  const handleGitHubClick = () => {
    setIsOpen(true), setSocialMedia("GitHub");
  };

  //facebook
  const handleFaceBooknClick = () => {
    setIsOpen(true), setSocialMedia("Facebook");
  };

  //Instagram
  const handleInstaGramClick = () => {
    setIsOpen(true), setSocialMedia("Instagram");
  };

  function handleOnConfirm(e) {
    if (!isOpen) {
      e.preventDefault();
    }

    if (socialMedia === "Linkedin") {
      window.open(
        "https://www.linkedin.com/in/naol-atomsa-808770215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "_blank"
      );
    } else if (socialMedia === "GitHub") {
      window.open("https://github.com/naolatomsa", "_blank");
    } else if (socialMedia === "Facebook") {
      window.open("https://www.facebook.com/share/199BTo6mhX/", "_blank");
    } else if (socialMedia === "Instagram") {
      window.open(
        "https://www.instagram.com/naol__atomsa?igsh=MWk5OTNnODZyd21raw==",
        "_blank"
      );
    }
  }
  return (
    <div
      className={`libertinus-math-regular  border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      }  ${isDark ? "text-black bg-[#dee1e6]" : "text-white bg-[#131313]"}`}
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
      <div className="flex justify-center items-center gap-7 py-5">
        <div className="hidden">
          <MyModal
            isOpen={isOpen}
            socialMedia={socialMedia}
            onConfirm={() => handleOnConfirm()}
            close={close}
          />
        </div>
        <button
          onClick={() => handleLinkedInClick()}
          className={`libertinus-math-regular p-2 cursor-pointer   text-white   font-semibold    transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border  dark:border-orange-700 rounded-md group ${
            isDark
              ? " hover:text-black  bg-gray-200"
              : " hover:text-white bg-black"
          }`}
        >
          <span className="relative libertinus-math-regular z-10 transition-colors  duration-500 group-hover:text-white">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`text-xl  cursor-pointer ${
                isDark ? "text-black" : "text-white"
              }`}
            />
          </span>
          <span
            className={`absolute inset-0 ${
              isDark ? "bg-gray-300 " : "bg-[#161616]"
            } w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left`}
          ></span>
        </button>
        <button
          onClick={() => handleGitHubClick()}
          className={`libertinus-math-regular p-2 cursor-pointer   text-white   font-semibold    transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border  dark:border-orange-700 rounded-md group ${
            isDark
              ? " hover:text-black  bg-gray-200"
              : " hover:text-white bg-black"
          }`}
        >
          <span className="relative libertinus-math-regular z-10 transition-colors  duration-500 group-hover:text-white">
            <FontAwesomeIcon
              icon={faGithub}
              className={`text-xl  cursor-pointer ${
                isDark ? "text-black" : "text-white"
              }`}
            />
          </span>
          <span
            className={`absolute inset-0 ${
              isDark ? "bg-gray-300 " : "bg-[#161616]"
            } w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left`}
          ></span>
        </button>
        <button
          onClick={() => handleFaceBooknClick()}
          className={`libertinus-math-regular p-2 cursor-pointer   text-white   font-semibold    transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border  dark:border-orange-700 rounded-md group ${
            isDark
              ? " hover:text-black  bg-gray-200"
              : " hover:text-white bg-black"
          }`}
        >
          <span className="relative libertinus-math-regular z-10 transition-colors  duration-500 group-hover:text-white">
            <FontAwesomeIcon
              icon={faFacebook}
              className={`text-xl  cursor-pointer ${
                isDark ? "text-black" : "text-white"
              }`}
            />
          </span>
          <span
            className={`absolute inset-0 ${
              isDark ? "bg-gray-300 " : "bg-[#161616]"
            } w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left`}
          ></span>
        </button>
        <button
          onClick={() => handleInstaGramClick()}
          className={`libertinus-math-regular p-2 cursor-pointer   text-white   font-semibold    transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border  dark:border-orange-700 rounded-md group ${
            isDark
              ? " hover:text-black  bg-gray-200"
              : " hover:text-white bg-black"
          }`}
        >
          <span className="relative libertinus-math-regular z-10 transition-colors  duration-500 group-hover:text-white">
            <FontAwesomeIcon
              icon={faInstagram}
              className={`text-xl  cursor-pointer ${
                isDark ? "text-black" : "text-white"
              }`}
            />
          </span>
          <span
            className={`absolute inset-0 ${
              isDark ? "bg-gray-300 " : "bg-[#161616]"
            } w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left`}
          ></span>
        </button>
      </div>
      <div className="grid  gap-2 py-5  w-full mx-auto">
        <div className="flex gap-2 items-center justify-center text-orange-700">
          <FontAwesomeIcon className="" icon={faPhone} />
          <h1 className=""> +251-943-134-213</h1>
        </div>
        <div className="flex gap-2 items-center justify-center text-orange-700">
          <FontAwesomeIcon icon={faEnvelope} />
          <h1>naolatomsa4@gmail.com</h1>
        </div>
      </div>

      <div
        className={`w-full font-bold flex gap-2 md:text-[16px] text-[14px] justify-center items-center py-3 libertinus-math-regular ${
          isDark
            ? "bg-gray-300 border-t border-gray-400"
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
