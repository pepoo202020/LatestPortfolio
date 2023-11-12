import React, { useContext } from "react";
import { ModeContext } from "../contexts/modeContext";
import Typewriter from "typewriter-effect";
import { ColorModeContext } from "../contexts/colorModeContext";

const HomePage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  console.log(currentColorMode);
  return (
    <div className="w-full h-full px-[30px] py-[30px]">
      <div
        className={`rounded-3xl w-full h-full flex items-center justify-between ${
          currentMode ? "bg-white" : "bg-black"
        }`}
      >
        <div className="flex flex-col items-start justify-start px-10">
          <h1
            className={`${
              currentMode ? "text-zinc-800" : "text-white"
            } text-5xl font-bold  leading-10 mb-5`}
          >
            Abanob Shenoda Tawfik
          </h1>
          <div
            className={`${currentColorMode.textColor} text-5xl font-bold leading-10`}
          >
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
