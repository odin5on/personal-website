import { useState } from "react";
import LandingPage2 from "./containers/landingpage";
import About from "./containers/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const routes = [
  {
    path: "/",
    element: <LandingPage2 />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

const App = () => {
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
      <Navbar
        isDarkMode={isDarkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
