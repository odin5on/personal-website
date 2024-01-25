import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Projects: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full pb-20 flex justify-center">
        <div className="m-4 flex flex-col gap-2 rounded-xl border-2 p-4 max-w-2xl">
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
              through the whole process of building a website from scratch. Also
              to design it (this is my second design :))
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
      <Footer />
    </div>
  );
};

export default Projects;
