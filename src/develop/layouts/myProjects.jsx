import React, { useState } from "react";
import { useTheme } from "../common/themeProvider";
import menasGroupPhoto from "../../assets/menas.png";
import jegol from "../../assets/jegol.png";

import SeeMoreDialog from "../common/seeMoreDialog";

const MyProjects = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState();
  const [company, setCompany] = useState("");
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const close = () => {
    setIsOpen(false);
    setCompany("");
    setLink("");
    setLinkName("");
    setTopic("");
    setContent("");
    setImage();
  };

  const handleMenas = () => {
    setCompany("Menas Cyber Solutions");
    setLink("https://www.menas-secure.com/");
    setLinkName("www.menas-secure.com");
    setTopic("React + TailwindCSS + Eleventy");
    setContent(`
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by the
              client — my role was to handle the full development of the site
              based on those designs. I developed the main website using React
              and TailwindCSS, ensuring it was responsive, performant, and
              production-ready. For dynamic content like blogs, job posts, and
              news updates, I implemented Eleventy (11ty) to allow fast,
              SEO-friendly static generation and easy content management. My
              focus was on turning their visual assets into a fully functional
              website — clean code, smooth animations, and scalable structure
              across all pages.
            `);
    setImage(menasGroupPhoto);
  };

  const handleJegol = () => {
    setCompany("Jegol Technologies");
    setLink("https://www.jegoltech.com/");
    setLinkName("www.jegoltech.com");
    setTopic("React + TailwindCSS");
    setContent(`
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by the
              client — my role was to handle the full development of the site
              based on those designs. I developed the main website using React
              and TailwindCSS, ensuring it was responsive, performant, and
              production-ready. For dynamic content like blogs, job posts, and
              news updates, I implemented Eleventy (11ty) to allow fast,
              SEO-friendly static generation and easy content management. My
              focus was on turning their visual assets into a fully functional
              website — clean code, smooth animations, and scalable structure
              across all pages.
            `);
    setImage(jegol);
  };

  return (
    <div
      className={`mx-auto border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } md:h-full md:py-10 py-5  h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <div className="hidden">
        <SeeMoreDialog
          isOpen={isOpen}
          close={close}
          company={company}
          link={link}
          linkName={linkName}
          topic={topic}
          content={content}
          image={image}
        />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
          What I Did?
        </h1>
        <h1 className="md:w-3/4 w-[90%] libertinus-math-regular text-[18px] text-center font-sans">
          <span>I have two years of experience at the </span>
          <span className="text-orange-700 font-bold">
            Ethiopian Artificial Intelligence Institute,{" "}
          </span>
          <span>
            where I currently work. I have been involved in more than three
            large-scale projects as a
          </span>
          <span className="text-orange-700 font-bold">
            {" "}
            full-stack developer,{" "}
          </span>
          <span>with a strong focus on front-end development using </span>
          <span className="text-orange-700 font-bold">React and Angular. </span>
          <span>
            In addition to my full-time role, I have also worked on several
            contract projects independently, gaining valuable experience and
            successfully delivering results.
          </span>
        </h1>
      </div>

      <div
        onClick={() => {
          setIsOpen(true);
          handleJegol();
        }}
        className="md:flex w-[90%] grid  justify-center  gap-20 "
      >
        <div className=" md:w-1/4 h-full rounded-xl overflow-hidden border border-[#7C7C7C1F]/40">
          <div className="relative">
            <img
              src={menasGroupPhoto}
              alt="Threat Intelligence Team"
              className="h-1/5 w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#7C7C7C1F]"></div>
          </div>

          <div className="flex flex-col justify-center items-start p-2  bg-[#7C7C7C1F] bg-opacity-50">
            <h2
              className={`font-bold ${
                isDark ? "text-black " : "text-white "
              } text-xl mt-4`}
            >
              Menas Cyber Solutions
            </h2>
            <button
              onClick={() => {
                window.open("https://www.menas-secure.com/", "_blank");
                close();
              }}
              className="cursor-pointer underline text-blue-600 text-xs mt-1 mb-2"
            >
              www.menas-secure.com
            </button>

            <h2 className=" font-bold text-md my-2">
              React + TailwindCSS + Eleventy
            </h2>
            <p className=" paragraph mb-6 text-[12px]">
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by the
              client ...
            </p>
            <button
              onClick={() => {
                setIsOpen(true);
                handleMenas();
              }}
              className={`libertinus-math-regular relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700  px-6 py-2 rounded-md group text-[16px] text-white cursor-pointer font-semibold transition-transform duration-50 active:scale-[0.95] ${
                isDark ? " hover:text-black" : " hover:text-white"
              }`}
            >
              <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
                See More
              </span>
              <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
            </button>
          </div>
        </div>
        <div className=" md:w-1/4 h-full rounded-xl overflow-hidden border border-[#7C7C7C1F]/40">
          <div className="relative">
            <img
              src={jegol}
              alt="Threat Intelligence Team"
              className="h-1/5 w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#7C7C7C1F]"></div>
          </div>

          <div className="flex flex-col justify-center items-start p-2  bg-[#7C7C7C1F] bg-opacity-50">
            <h2
              className={`font-bold ${
                isDark ? "text-black " : "text-white "
              } text-xl mt-4`}
            >
              Jegol Technology
            </h2>
            <button
              onClick={() => {
                window.open("https://www.jegoltech.com/", "_blank");
                close();
              }}
              className="cursor-pointer underline text-blue-600 text-xs mt-1 mb-2"
            >
              www.jegoltech.com
            </button>
            <h2 className=" font-bold text-md my-2">React + TailwindCSS</h2>{" "}
            <p className=" paragraph mb-6 text-[12px]">
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by the
              ...
            </p>
            <button
              onClick={() => {
                setIsOpen(true);
                handleJegol();
              }}
              className={`libertinus-math-regular relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700  px-6 py-2 rounded-md group text-[16px] text-white cursor-pointer font-semibold transition-transform duration-50 active:scale-[0.95] ${
                isDark ? " hover:text-black" : " hover:text-white"
              }`}
            >
              <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
                See More
              </span>
              <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
