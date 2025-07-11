import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { mobileData } from "../data/menuItems";
import DarkModeToggle from "../common/darkMode";
import { useTheme } from "../common/themeProvider";
const NavBar = ({ onScrollTo }) => {
  //mobile devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
  }, [isMobile]);

  //darkmode
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark
          ? "bg-[#dee1e6] border-b border-gray-400 text-black"
          : "bg-black text-white border-b border-[#333333]"
      }  w-screen z-50 navbar libertinus-math-regular `}
    >
      <div className="flex  font-sans py-5 items-center justify-between mx-auto md:w-3/4 w-[90%]">
        <div className="flex items-center justify-center   cursor-pointer">
          <div className="react-logo">
            <div className="ellipse rotate1" />
            <div className="ellipse rotate2" />
            <div className="ellipse rotate3" />
            <div className="ellipse rotate4" />
            <div className="ellipse rotate5" />
            <div className="ellipse rotate6" />
            <div className="center-dot" />
          </div>
          <h1
            onClick={() => onScrollTo("home")}
            className="libertinus-math-regular home-underline"
          >
            Naol Atomsa
          </h1>
        </div>
        <div className=" md:flex flex-wrap hidden items-center gap-5 text-[14px] libertinus-math-regular">
          <button
            onClick={() => onScrollTo("home")}
            className="libertinus-math-regular text-[16px] underline-hover-center"
          >
            Home
          </button>
          <button
            onClick={() => onScrollTo("about")}
            className="libertinus-math-regular text-[16px] underline-hover-center"
          >
            About Me
          </button>
          <button
            onClick={() => onScrollTo("services")}
            className="libertinus-math-regular text-[16px] underline-hover-center"
          >
            Services
          </button>
          <button
            onClick={() => onScrollTo("projects")}
            className="libertinus-math-regular text-[16px] underline-hover-center"
          >
            Projects
          </button>
          <button
            onClick={() => onScrollTo("testimonials")}
            className="libertinus-math-regular text-[16px] underline-hover-center"
          >
            Testimonials
          </button>
          <button
            onClick={() => onScrollTo("contact")}
            className="libertinus-math-regular text-[16px] underline-hover-center"
          >
            Contact
          </button>
          <button
            className={`libertinus-math-regular relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700  px-6 py-2 rounded-full group text-[16px] text-white cursor-pointer font-semibold transition-transform duration-50 active:scale-[0.95] ${
              isDark ? " hover:text-black" : " hover:text-white"
            }`}
          >
            <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
              Download CV
            </span>
            <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
          </button>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`md:hidden flex items-center  libertinus-math-regular ${
            isDark ? "text-black" : "text-white"
          }`}
        >
          <Menu
            open={isMobile}
            handler={setIsMobile}
            dismiss={{
              outsidePointerDown: true, // Close menu when clicking outside
              insidePointerDown: false, // Prevent menu from closing when clicking inside
            }}
          >
            <MenuHandler>
              <button className="text-md border py-1 px-2 rounded-md border-gray-500 text-white dark:bg-orange-700">
                {isMobile ? `Close` : `Menu`}
              </button>
            </MenuHandler>

            <MenuList
              id="menu"
              className="bg-[#21212133] border p-5 border-orange-700 backdrop-blur-2xl rounded-3xl w-full navbar:hidden flex flex-col gap-7 justify-center h-3/4 z-50"
            >
              <div className="relative w-full">
                <div className="absolute right-0 -top-6">
                  <DarkModeToggle />
                </div>
              </div>

              <MenuItem className="col-span-2 hover:bg-transparent justify-self-start focus:bg-transparent active:bg-transparent">
                <div
                  className="flex gap-5 justify-center items-center"
                  style={{
                    borderBottom: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
                    width: "100%",
                  }}
                >
                  <ul className="flex items-center justify-center gap-5 py-3">
                    <li
                      className="py-3"
                      onClick={() => {
                        setIsMobile(false), onScrollTo("contact");
                      }}
                    >
                      <div
                        to={`/contact-us`}
                        className={`libertinus-math-regular  text-[16px] text-white cursor-pointer  border border-orange-700  font-semibold transition-transform duration-50 active:scale-[0.95] bg-orange-700  px-5 py-2 rounded-full ${
                          isDark ? " hover:text-black" : " hover:text-white"
                        }`}
                      >
                        Contact Me
                      </div>
                    </li>
                    <li
                      className="flex justify-center items-center gap-3 px-2 py-3"
                      style={{
                        borderLeft: "1px solid transparent",
                        borderImage:
                          "linear-gradient(to bottom, transparent, white, transparent) 1", // Gradient effect
                        height: "100%",
                      }}
                    >
                      <a
                        className={`libertinus-math-regular text-[14px] ${
                          isDark ? "text-black" : "text-white"
                        }`}
                      >
                        Addis Ababa, Ethiopia
                      </a>
                    </li>
                  </ul>
                </div>
              </MenuItem>
              {mobileData.map((parent) => (
                <div key={parent.id}>
                  <MenuItem
                    className=" focus:bg-transparent active:bg-transparent"
                    style={{
                      borderBottom: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
                      width: "100%",
                    }}
                  >
                    <div
                      to={`${`comming-soon`}`}
                      onClick={() => {
                        setIsMobile(!isMobile), onScrollTo(parent.link);
                      }}
                    >
                      <div className="flex justify-center  w-full">
                        <h1
                          className={`text-[14px] libertinus-math-regular font-bold ${
                            isDark ? "text-black" : "text-white"
                          }`}
                        >
                          {parent.title}
                        </h1>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              ))}

              <MenuItem className="hover:bg-transparent flex justify-center focus:bg-transparent active:bg-transparent ">
                <button
                  className={`libertinus-math-regular  text-[16px] text-white cursor-pointer  border border-orange-700  font-semibold transition-transform duration-50 active:scale-[0.95] bg-orange-700  px-5 py-2 rounded-full ${
                    isDark ? " hover:text-black" : " hover:text-white"
                  }`}
                >
                  Download CV
                </button>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
