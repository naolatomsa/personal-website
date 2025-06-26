import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import menas from "../../assets/menas.png";
const Contact = () => {
  return (
    <div className="mx-auto md:py-10 py-5 justify-center md:w-1/2 w-[90%] h-full flex gap-10 flex-col items-center ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl dark:text-orange-700 font-sans font-bold">
          Get In Touch
        </h1>
        <p className="text-white">You can reach me anytime!</p>
      </div>
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="flex gap-2">
          <input
            type="text"
            id="first_name"
            placeholder="First Name"
            className="rounded-2xl"
            required
          />
          <input
            type="text"
            id="first_name"
            placeholder="Last Name"
            className="rounded-2xl"
            required
          />
        </div>
        <input
          type="email"
          id="first_name"
          placeholder="Email"
          className="rounded-2xl"
          required
        />
        <textarea
          id="message"
          rows="5"
          placeholder="How can I help you?"
        ></textarea>
        <button className="w-full cursor-pointer hover:bg-orange-950 hover:text-gray-500 dark:bg-orange-700 text-white rounded-2xl py-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
