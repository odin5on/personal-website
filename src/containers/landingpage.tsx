import profile from "../assets/images/profile263kb.jpg";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-wrap pb-20">
      <div className="w-full lg:w-1/2">
        <div className="m-4 flex flex-col gap-2 rounded-xl border-2 p-4">
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
    </div>
  );
};

export default LandingPage;
