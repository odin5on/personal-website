import { useEffect, useContext } from "react";
import Footer from "../components/footer";
import laptop from "../assets/images/laptop.png";
import Navbar from "../components/navbar";
import { ThemeContext } from "../contexts/theme-context";


const About: React.FC = () => {
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
      <div className="pb-20">
        <div>
          <img src={laptop} alt="Laptop" />
        </div>
        <div>
            I&apos;m going to write some things about myself based around the
          stickers on my laptop.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
