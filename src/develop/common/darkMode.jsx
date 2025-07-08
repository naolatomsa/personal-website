import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useTheme } from "./themeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
export default function DarkModeToggle() {
  const { isDark, setIsDark } = useTheme();
  return (
    <button onClick={() => setIsDark(!isDark)} className="p-2 cursor-pointer">
      {isDark ? (
        <FontAwesomeIcon icon={faMoon} size="xl" color="black"/>
      ) : (
        <FontAwesomeIcon icon={faLightbulb} size="xl" color="white"/>
      )}
    </button>
  );
}
