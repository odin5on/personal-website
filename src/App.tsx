import { useState } from "react";
import LandingPage from "./containers/landingpage";
import About from "./containers/about";
import Projects from "./containers/projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import noise from "./assets/images/noise-light.png";
import { ThemeContext } from "./contexts/theme-context";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />
  }
];

const router = createBrowserRouter(routes);

const App = () => {
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    const theme = localStorageTheme || browserDefault;
    if (theme == "dark") {
      document.body.style.backgroundColor = "#000000";
      document.documentElement.classList.add("dark");
    } else {
      document.body.style.backgroundColor = "#D9E3DC";
      document.documentElement.classList.remove("dark");
    }
    return theme;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  const handleThemeChange = (theme: string): void => {
    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("default-theme", "dark");
      document.body.style.backgroundColor = "#000000";
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("default-theme", "light");
      document.body.style.backgroundColor = "#D9E3DC";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <div className="relative flex h-full min-h-screen w-full flex-col border-dark bg-light text-dark dark:border-light dark:bg-dark dark:text-light overscroll-contain" style={{ backgroundImage: `url(${noise})` }}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
