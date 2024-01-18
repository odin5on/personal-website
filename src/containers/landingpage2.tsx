import profile from "../assets/images/profile263kb.jpg";
import laptop from "../assets/images/laptop.png";
import React, { useState } from "react";

const LandingPage2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col border-dark bg-light text-dark dark:border-light dark:bg-dark dark:text-light">
      <div
        id="navbar"
        className="flex items-center justify-between border-b-2 p-4"
      >
        <h1 className="font-dots text-6xl tracking-widest">DANNY BODIN</h1>
        <h1 className="font-dots text-4xl tracking-widest">ABOUT</h1>
        <label className="relative inline-flex flex-shrink-0 cursor-pointer items-center">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleDarkModeToggle}
            value=""
            className="peer sr-only"
          />
          <div className="peer-checked:after:border-white after:bg-white after:border-gray-300 dark:border-gray-600 peer-checked:bg-blue-600 peer h-7 w-12 rounded-full border-2 after:absolute after:start-[4px] after:top-1 after:h-5 after:w-5 after:rounded-full after:border after:bg-dark after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full dark:after:bg-light"></div>
          <span className="text-gray-900 dark:text-gray-300 ms-3 text-sm font-medium">
            Dark Mode
          </span>
        </label>
      </div>
      <div className="flex flex-wrap pb-20">
        <div className="w-full lg:w-1/2">
          <div className="m-4 flex flex-col gap-2 rounded-xl border-2 p-4">
            <div className="my-4 flex justify-center text-4xl">
              i build stuff
            </div>
            <div className="my-2 flex justify-center">
              <img
                src={profile}
                alt="Danny Bodin's profile picture"
                className="h-48 rounded-full border-2"
              />
            </div>
            <div className="my-2 border p-4">
              I am{" "}
              <a
                href="https://twitter.com/danny_bodin"
                className="font-bold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
              >
                @danny_bodin
              </a>
              , a Computer Science Engineering student at the University of Iowa
              graduating in May 2024. I want to be a great engineer who builds
              useful, practical, and well designed products.
            </div>
            <div className="my-2 rounded-3xl">
              <a
                href="https://github.com/odin5on"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" text-md w-full rounded-full border-2 p-2 text-center font-dots tracking-widest hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark">
                  View my Github
                </button>
              </a>
            </div>
            <div className="my-2 rounded-3xl">
              <a
                href="https://twitter.com/danny_bodin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" text-md w-full rounded-full border-2 p-2 text-center font-dots tracking-widest hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark">
                  View my Twitter
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="m-4 flex flex-col gap-2 rounded-xl border-2 p-4">
            <div className="my-4 flex justify-center text-4xl">projects</div>
            <div className="my-2 border">
              <div className="bg-dark bg-opacity-10 py-4 pl-4 font-dots tracking-wide underline dark:bg-light dark:bg-opacity-10">
                <a
                  href="https://github.com/joshuawootonn/time-track"
                  className="hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                >
                  time-track
                </a>
              </div>
              <div className="py-2 pl-4">
                I am employed by All American Concrete to work on this project,
                and I work with my friend{" "}
                <a
                  href="https://twitter.com/JoshWootonn"
                  className="underline hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                >
                  Josh
                </a>
                , who started it.
              </div>
            </div>
            <div className="my-2 border">
              <div className="bg-dark bg-opacity-10 py-4 pl-4 font-dots tracking-wide underline dark:bg-light dark:bg-opacity-10">
                <a
                  href="https://github.com/odin5on/personal-website"
                  className="hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                >
                  this website
                </a>
              </div>
              <div className="py-2 pl-4">
                I started this to highlight my projects and skills, and to walk
                through the whole process of building a website from scratch.
                Also to design it (this is my second design :))
              </div>
            </div>
            <div className="my-2 border">
              <div className="bg-dark bg-opacity-10 py-4 pl-4 font-dots tracking-wide underline dark:bg-light dark:bg-opacity-10">
                <a
                  href="https://github.com/odin5on"
                  className="hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                >
                  embedded projects
                </a>
              </div>
              <div className="py-2 pl-4">
                I have many other projects I have completed in different classes
                that I plan to polish up the presentation of and highlight here!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-20 w-full items-center justify-center p-4">
        <footer className="text-center font-dots tracking-widest">
          <p>&copy;2024 Danny Bodin</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage2;
