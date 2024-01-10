import x from "../assets/images/x.svg";
import git from "../assets/images/git.svg";

const Navbar = () => {
  return (
    <div className="flex h-24 justify-between bg-secondary px-4 font-dots2 border border-black">
      <div className="flex h-full flex-auto basis-full items-center text-5xl">
        DANNY BODIN
      </div>
      <div className="flex flex-auto h-full basis-full items-center justify-center text-xl">
        IOWA CITY, IA
      </div>
      <div className="flex flex-auto basis-full h-full items-center justify-end gap-8">
        <a href="https://twitter.com/danny_bodin">
          <img src={x} alt="X logo" className="h-10" />
        </a>
        <a href="https://github.com/odin5on">
          <img src={git} alt="Github logo" className="h-10" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
