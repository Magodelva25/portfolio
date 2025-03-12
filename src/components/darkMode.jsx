import React, { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DarkMode = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme") || "light"; // Defecto a "light"
    if (selectedTheme === "dark") {
      setDarkMode();
      setActive(true);
    } else {
      setLightMode();
      setActive(false);
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    if (active) {
      setLightMode();
      setActive(false);
    } else {
      setDarkMode();
      setActive(true);
    }
  };

  return (
    <>
      <div className="dark-mode-handler">
        {active ? (
          <DarkModeIcon
            className="moon"
            onClick={toggleTheme}
          />
        ) : (
          <LightModeIcon
            className="sun"
            onClick={toggleTheme}
          />
        )}
      </div>
    </>
  );
};

export default DarkMode;
