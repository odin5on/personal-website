import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/theme-context";

const Navbar: React.FC = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <div
      id="navbar"
      className="flex items-center justify-between border-b-2 p-4"
    >
      <Link to="/">
        <h1 className="font-dots text-6xl tracking-widest hover:underline">
          DANNY BODIN
        </h1>
      </Link>
      <Link to="about">
        <h1 className="font-dots text-4xl tracking-widest hover:underline">
          ABOUT
        </h1>
      </Link>
      <label className="relative inline-flex flex-shrink-0 cursor-pointer items-center">
        <input
          type="checkbox"
          checked={theme == "light"}
          onChange={() => handleThemeChange(theme)}
          value=""
          className="peer sr-only"
        />
        <div className="peer-checked:after:border-white after:bg-white after:border-gray-300 dark:border-gray-600 peer-checked:bg-blue-600 peer h-7 w-12 rounded-full border-2 after:absolute after:start-[4px] after:top-1 after:h-5 after:w-5 after:rounded-full after:border after:bg-dark after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full dark:after:bg-light"></div>
        <span className="text-gray-900 dark:text-gray-300 ms-3 text-sm font-medium">
          Dark Mode
        </span>
      </label>
    </div>
  );
};

export default Navbar;
