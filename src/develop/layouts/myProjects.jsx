import React, { useState } from "react";
import menas from "../../assets/menas.png";
import { useTheme } from "../common/themeProvider";
import menasGroupPhoto from "../../assets/menas.png";

const MyProjects = ({ content }) => {
  const { isDark } = useTheme();

  // const [isOpen, setIsOpen] = useState(false);
  // const [wordLimit] = useState(20); // limit to 20 words

  // const previewText = content.split(" ").slice(0, wordLimit).join(" ");
  // const isTruncated = content.split(" ").length > wordLimit;

  return (
    <div
      className={`mx-auto border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } md:h-full md:py-10 py-5  h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
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

      <div className="md:flex w-[90%] grid  justify-center  gap-20 ">
        {/* <div className="md:w-1/5 grid gap-2">
          <img src={menas} alt="mypic" />
          <h1 className="dark:text-orange-700 font-bold libertinus-math-regular text-[14px]">
            React + TailwindCSS + Eleventy
          </h1>
          <h1 className=" text-2xl libertinus-math-regular">
            Menas Cyber Solution
          </h1>
          <p
            className={`text-[16px] libertinus-math-regular ${
              isDark ? "text-gray-900" : "text-gray-200"
            }`}
          >
            I was hired by Menas Cyber Solutions to bring their new website to
            life through code. The design and branding were provided by the
            client — my role was to handle the full development of the site
            based on those designs. I developed the main website using React and
            TailwindCSS, ensuring it was responsive, performant, and
            production-ready. For dynamic content like blogs, job posts, and
            news updates, I implemented Eleventy (11ty) to allow fast,
            SEO-friendly static generation and easy content management. My focus
            was on turning their visual assets into a fully functional website —
            clean code, smooth animations, and scalable structure across all
            pages.
          </p>
          <a className="text-xs text-blue-700 underline libertinus-math-regular cursor-pointer">
            Go to the site
          </a>
        </div> */}
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
            <h2 className=" font-bold mb-4">React + TailwindCSS + Eleventy</h2>
            <p className=" paragraph mb-6 text-[12px]">
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by
              {/* the client — my role was to handle the full development of the
                site based on those designs. I developed the main website using
                React and TailwindCSS, ensuring it was responsive, performant,
                and production-ready. For dynamic content like blogs, job posts,
                and news updates, I implemented Eleventy (11ty) to allow fast,
                SEO-friendly static generation and easy content management. My
                focus was on turning their visual assets into a fully functional
                website — clean code, smooth animations, and scalable structure
                across all pages. */}
            </p>
            <button className="px-5 py-3 bg-orange-700 rounded-[4px] normal-case text-[14px] font-semibold md:leading-[20px] leading-[16px]">
              Learn More
            </button>
          </div>
        </div>
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
            <h2 className=" font-bold mb-4">React + TailwindCSS + Eleventy</h2>
            <p className=" paragraph mb-6 text-[12px]">
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by
              {/* the client — my role was to handle the full development of the
                site based on those designs. I developed the main website using
                React and TailwindCSS, ensuring it was responsive, performant,
                and production-ready. For dynamic content like blogs, job posts,
                and news updates, I implemented Eleventy (11ty) to allow fast,
                SEO-friendly static generation and easy content management. My
                focus was on turning their visual assets into a fully functional
                website — clean code, smooth animations, and scalable structure
                across all pages. */}
            </p>
            <button className="px-5 py-3 bg-orange-700 rounded-[4px] normal-case text-[14px] font-semibold md:leading-[20px] leading-[16px]">
              Learn More
            </button>
          </div>
        </div>
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
            <h2 className=" font-bold mb-4">React + TailwindCSS + Eleventy</h2>
            <p className=" paragraph mb-6 text-[12px]">
              I was hired by Menas Cyber Solutions to bring their new website to
              life through code. The design and branding were provided by
              {/* the client — my role was to handle the full development of the
                site based on those designs. I developed the main website using
                React and TailwindCSS, ensuring it was responsive, performant,
                and production-ready. For dynamic content like blogs, job posts,
                and news updates, I implemented Eleventy (11ty) to allow fast,
                SEO-friendly static generation and easy content management. My
                focus was on turning their visual assets into a fully functional
                website — clean code, smooth animations, and scalable structure
                across all pages. */}
            </p>
            <button className="px-5 py-3 bg-orange-700 rounded-[4px] normal-case text-[14px] font-semibold md:leading-[20px] leading-[16px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
