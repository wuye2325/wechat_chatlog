import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow transition"
      onClick={toggleTheme}
      aria-label="切换主题"
    >
      <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-xl`}></i>
    </button>
  );
};

export default ThemeToggle;