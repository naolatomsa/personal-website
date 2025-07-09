import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import menas from "../../assets/menas.png";
import { useTheme } from "../common/themeProvider";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { BounceLoader } from "react-spinners";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      await emailjs.sendForm(
        "service_mwkngbl",
        "template_14s78bs",
        form.current,
        "6Wz8z9YsESNzyaged"
      );

      !isDark
        ? toast.success("Message sent successfully!")
        : toast.success("Message sent successfully!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });

      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      !isDark
        ? toast.error("Message not sent!")
        : toast.error("Message not sent!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
    } finally {
      setLoading(false);
    }
  };

  const { isDark } = useTheme();
  return (
    <div
      className={`mx-auto md:py-10 py-5 justify-center md:w-1/2 w-[90%] h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-opacity-40 ${
            isDark ? "bg-white" : "bg-black"
          }`}
        >
          <BounceLoader color="#c2410c" size={80} />
        </div>
      )}
      <Toaster />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl dark:text-orange-700 libertinus-math-regular font-bold">
          Get In Touch
        </h1>
        <p className="libertinus-math-regular text-xl">
          You can reach me anytime!
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center gap-5 items-center"
      >
        <div className="flex gap-2">
          <input
            type="text"
            name="first_name"
            // id="first_name"
            placeholder="First Name"
            className={`block rounded-md w-full  p-2.5 text-sm  border border-orange-700 focus:border-orange-700 focus:ring-1 focus:ring-orange-700 outline-none ${
              isDark
                ? "text-black bg-gray-300 placeholder-gray-800"
                : "bg-gray-800 text-white placeholder-gray-300"
            }`}
            // className="rounded-2xl"
            required
          />
          <input
            type="text"
            name="last_name"
            // id="first_name"
            placeholder="Last Name"
            className={`block rounded-md w-full  p-2.5 text-sm  border border-orange-700 focus:border-orange-700 focus:ring-1 focus:ring-orange-700 outline-none ${
              isDark
                ? "text-black bg-gray-300 placeholder-gray-800"
                : "bg-gray-800 text-white placeholder-gray-300"
            }`}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`block rounded-md w-full  p-2.5 text-sm  border border-orange-700 focus:border-orange-700 focus:ring-1 focus:ring-orange-700 outline-none ${
            isDark
              ? "text-black bg-gray-300 placeholder-gray-800"
              : "bg-gray-800 text-white placeholder-gray-300"
          }`}
          required
        />
        <textarea
          name="message"
          // id="message"
          rows="5"
          className={`block w-full  p-2.5 text-sm  border border-orange-700 rounded-md resize-y outline-none focus:border-orange-700 focus:ring-1 focus:ring-orange-700 ${
            isDark
              ? "text-black bg-gray-300 placeholder-gray-800"
              : "bg-gray-800 text-white placeholder-gray-300"
          }`}
          placeholder="How can I help you?"
        ></textarea>
        <button
          type="submit"
          className="w-full cursor-pointer hover:bg-orange-950 hover:text-gray-500 dark:bg-orange-700 text-white rounded-md py-3 libertinus-math-regular"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
