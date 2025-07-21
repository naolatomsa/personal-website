import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useTheme } from "./themeProvider";


export default function MyModal({ isOpen, onConfirm, socialMedia, close }) {
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
        <div className="fixed inset-0  backdrop-blur-xs" aria-hidden="true" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className={`w-full max-w-md rounded-md border border-orange-700 p-10  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 ${
                isDark ? "bg-gray-300 text-black " : "bg-[#121212] text-white "
              }`}
            >
              <DialogTitle
                as="h3"
                className="text-2xl text-orange-700 font-medium t"
              >
                Open {socialMedia}?
              </DialogTitle>
              <p
                className={`mt-2 text-sm/6 ${
                  isDark ? "text-black/80" : "text-white/80"
                }`}
              >
                You’re about to open Naol Atomsa’s {socialMedia} profile. This
                may launch the LinkedIn app or open in a new browser tab.
              </p>
              <div className="mt-4 flex justify-end gap-5 items-center">
                <button
                  onClick={close}
                  className={`libertinus-math-regular px-5 text-[16px]  cursor-pointer   text-white   font-semibold   py-2  transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border dark:bg-orange-700 dark:border-orange-700 rounded-md group ${
                    isDark ? " hover:text-black" : " hover:text-white"
                  }`}
                >
                  <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
                    Cancel
                  </span>
                  <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    close();
                  }}
                  className={`libertinus-math-regular px-5 text-[16px]  cursor-pointer   text-black  font-semibold   py-2  transition-transform duration-50 active:scale-[0.95] relative overflow-hidden border dark:bg-gray-200 dark:border-gray-400 rounded-md group ${
                    isDark ? " hover:text-black" : " hover:text-white"
                  }`}
                >
                  <span className="relative libertinus-math-regular z-10 transition-colors duration-500 group-hover:text-white">
                    open
                  </span>
                  <span className="absolute inset-0 bg-[#161616] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0 origin-left"></span>
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
