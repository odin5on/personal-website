import x from "../assets/images/x.svg";
import profile from "../assets/images/profile263kb.jpg";
import { useState } from "react";

import Navbar from "../components/navbar";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });

  const scale = -1;
  const o = document.getElementById("bx");

  const scaleToCenter = (x, y) => {
    return {
      x: x - window.innerWidth / 2,
      y: y - window.innerHeight / 2,
    };
  };

  const scaleToPage = (x, y) => {
    return {
      x: x + window.innerWidth / 2,
      y: y + window.innerHeight / 2,
    };
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    let { x, y } = scaleToCenter(event.clientX, event.clientY);

    const distance = Math.sqrt(x * x + y * y);
    // console.log(distance);
    const angle = Math.atan2(y, x);
    // console.log(angle);

    const d = scaleToCenter(o?.offsetLeft, o?.offsetTop);

    const max_distance = Math.sqrt(d.x ** 2 + d.y ** 2);

    const newDistance = max_distance - distance;
    // const newDistance = 10000/distance;
    // console.log(newDistance);
    // const newDistance = distance;
    const newAngle = angle + Math.PI;

    // o_x = o.offsetWidth / 2

    // Calculate the new point coordinates
    const newX = newDistance * Math.cos(newAngle);
    const newY = newDistance * Math.sin(newAngle);

    setMousePosition({ x: newX, y: newY });
  };

  return (
    <div id="screen" className="flex h-screen justify-center bg-primary">
      {/* Your app content goes here */}
      <div className="flex h-full w-full flex-col justify-between">
        <Navbar />
        <div
          id="bx"
          className="flex flex-col items-center justify-center"
          // onMouseMove={handleMouseMove}
        >
          <div
            id="center"
            className="text-center text-7xl font-extrabold italic"
            style={{
              textShadow: `${mousePosition.x}px ${mousePosition.y}px 10px rgba(103, 214, 171, 0.9)`,
            }}
          >
            I BUILD STUFF
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col border-8 border-black p-4 font-mono">
            <div className="flex place-items-baseline text-3xl font-bold mb-5">
              Follow me on{" "}
              <a href="https://twitter.com/danny_bodin" className="ml-4">
                <img src={x} alt="X logo" className="h-9" />
              </a>
            </div>
            <div className="text-xl">
                <p className="mb-1">I post about what I&apos;m building,</p>
                <p>DM me to start a conversation!</p>
            </div>
            <div className="flex justify-end mt-5">
              <a href="https://twitter.com/danny_bodin" className="border-4 border-black bg-accent px-2 py-1 italic font-bold text-2xl" style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}>Follow</a>
            </div>
          </div>
        </div>
        <div className="flex bg-secondary">
          <img src={profile} alt="" className="h-24" />
          <div className="flex flex-col items-center justify-center border border-black p-2 font-mono min-w-fit">
            <div className="text-xl">PHOTOGRAPHED</div>
            <div className="text-2xl">05 23 2023</div>
          </div>
          <div className="flex w-full items-center justify-center border-y border-r border-black font-mono">
            <div className="text-2xl">Website version 1.1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
