import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, useEffect } from "react";
import menasGroupPhoto from "../../assets/jegol.png";
import { useTheme } from "./themeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faX } from "@fortawesome/free-solid-svg-icons";

export default function SeeMoreDialog({
  isOpen,
  close,
  image,
  company,
  link,
  topic,
  content,
  linkName,
}) {
  const { isDark } = useTheme();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-xs  overflow-y-auto">
          <div className="flex h-screen items-center justify-center p-4">
            <DialogPanel
              transition
              className={`w-full max-w-md md:h-[90%] border border-orange-700 h-3/4 flex flex-col justify-center items-center rounded-xl ${
                isDark ? "bg-gray-300 " : "bg-[#222222] "
              } p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0`}
            >
              <div className="mb-4 b flex justify-end  w-full">
                <Button className="p-2 cursor-pointer text-orange-700" onClick={close}>
                  <FontAwesomeIcon size="2xl" icon={faCircleXmark} />
                </Button>
              </div>
              <div className=" md:w-full h-[90%] rounded-md overflow-y-scroll bg-[#7C7C7C1F]">
                <div className="relative">
                  <img
                    src={image}
                    alt="Site image"
                    className="h-1/5 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#7C7C7C1F]"></div>
                </div>

                <div
                  className={`flex flex-col justify-center  items-start p-2  ${
                    isDark
                      ? "bg-gray-300 text-black/90"
                      : "bg-[#222222] text-white/90"
                  }`}
                >
                  <h2
                    className={`font-bold ${
                      isDark ? "text-black " : "text-white "
                    } text-xl mt-4`}
                  >
                    {company}
                  </h2>
                  <button
                    onClick={() => {
                      window.open(link, "_blank");
                      close();
                    }}
                    className="cursor-pointer underline text-blue-600 text-xs mt-1 mb-2"
                  >
                    {linkName}
                  </button>

                  <h2 className=" font-bold text-md my-2">{topic}</h2>
                  <p className=" paragraph mb-6 text-[12px] text-balance ">
                    {content}
                  </p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
