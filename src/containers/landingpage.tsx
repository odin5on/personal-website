import Navbar from "../components/navbar";
import profile from "../assets/images/profile263kb.jpg";
import Footer from "../components/footer";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const LandingPage: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center pb-20">
        <div className="m-4 flex max-w-2xl flex-col gap-2 rounded-xl border-2 p-4">
          <div className="my-4 flex justify-center text-4xl">i build stuff</div>
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
              <button className="text-md w-full rounded-full border-2 p-2 text-center font-dots tracking-widest hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark ">
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
      <Footer />
    </div>
  );
};

export default LandingPage;
