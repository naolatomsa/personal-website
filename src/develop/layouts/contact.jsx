import React, { useRef, useState, useEffect } from "react";
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
        "6Wz8z9YsESNzyage"
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

  //off outosuggestion
  useEffect(() => {
    const input = document.getElementById("myInput");
    if (input) {
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("autocapitalize", "off");
      input.setAttribute("spellcheck", "false");
    }
  }, []);

  return (
    <div
      className={`mx-auto border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } md:py-10 p-5 justify-center md:w-1/2 w-full h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-opacity-40 ${
            isDark ? "bg-[#e5e7eb] darker" : "bg-[#121212] not_dark"
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
            placeholder="First Name"
            className={`block rounded-md w-full bg-[#7C7C7C1F] bg-opacity-50   p-2.5 text-sm  border border-orange-700 focus:border-orange-700 focus:ring-1 focus:ring-orange-700 outline-none ${
              isDark
                ? "text-black  placeholder-gray-800"
                : " text-white placeholder-gray-300"
            }`}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className={`block rounded-md w-full bg-[#7C7C7C1F] bg-opacity-50   p-2.5 text-sm  border border-orange-700 focus:border-orange-700 focus:ring-1 focus:ring-orange-700 outline-none ${
              isDark
                ? "text-black  placeholder-gray-800"
                : " text-white placeholder-gray-300"
            }`}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`block rounded-md w-full bg-[#7C7C7C1F] bg-opacity-50  p-2.5 text-sm  border border-orange-700 focus:border-orange-700 focus:ring-1 focus:ring-orange-700 outline-none ${
            isDark
              ? "text-black  placeholder-gray-800"
              : " text-white placeholder-gray-300"
          }`}
          required
        />
        <textarea
          name="message"
          rows="5"
          className={`block w-full bg-[#7C7C7C1F] bg-opacity-50  p-2.5 text-sm  border border-orange-700 rounded-md resize-y outline-none focus:border-orange-700 focus:ring-1 focus:ring-orange-700 ${
            isDark
              ? "text-black  placeholder-gray-800"
              : " text-white placeholder-gray-300"
          }`}
          placeholder="How can I help you?"
        ></textarea>
        <button
          type="submit"
          className={`libertinus-math-regular text-[16px] text-white cursor-pointer relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700 py-3 rounded-md group w-full transition-transform duration-50 active:scale-[0.95]
           `}
        >
          <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
            Submit
          </span>
          <span
            className={`absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left`}
          ></span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
