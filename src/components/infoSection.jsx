import React, { useEffect, useState } from "react";

const InfoSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getItem = localStorage.getItem("selectedTheme");
    if (getItem === "ligth") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={`image-bg ${darkMode ? "dark-mode" : ""}`}>
    </div>
  );
};

export default InfoSection;
