import React from "react";
import NavBar from "./navBar";
import ima from "../../assets/newTransparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="md:flex font-sans grid md:gap-0  md:mt-14 mt-40 gap-10 md:justify-center md:mx-auto md:w-3/4  md:items-center place-content-center place-items-center md:h-screen">
      <div className="w-[90%] md:hidden grid">
        <img src={ima} alt="mypic" />
      </div>
      <div className="md:w-3/4 w-3/4 grid md:gap-5 gap-3">
        <div>
          <h1 className="text-white text-xl font-bold">Hello, I am</h1>
          <h1 className="text-orange-700 text-xl font-bold">Naol Atomsa</h1>
        </div>
        <div className="grid gap-1">
          <h1 className="text-white text-5xl font-bold">Software</h1>
          <h1 className="text-white text-5xl ml-10 font-bold">Developer</h1>
        </div>
        <div className="grid gap-2">
          <h1 className="text-white md:w-3/4 w-[90%] font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <button className="w-1/4 cursor-pointer hover:bg-orange-950 hover:text-gray-500 bg-orange-700 text-white px-2 py-1 rounded-md">
            Hire Me
          </button>
        </div>
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
    </div>
  );
};
export default Home;
