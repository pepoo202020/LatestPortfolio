import React, { useContext } from "react";
import { ModeContext } from "../contexts/modeContext";
import Typewriter from "typewriter-effect";
import { ColorModeContext } from "../contexts/colorModeContext";
import { ArrowRight } from "@mui/icons-material";
import homeImageYellow from "../Assets/homeImageYellow.png";
import homeImageRed from "../Assets/homeImageRed.png";
import homeImageGreen from "../Assets/homeImageGreen.png";
import homeImageBlue from "../Assets/homeImageBlue.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  const imageHandler = (ColorMode) => {
    switch (ColorMode) {
      case "bg-yellow-500":
        return homeImageYellow;
      case "bg-red-500":
        return homeImageRed;
      case "bg-green-500":
        return homeImageGreen;
      case "bg-blue-500":
        return homeImageBlue;
      default:
        return homeImageYellow;
    }
  };
  return (
    <div className="w-full h-full lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px]">
      <div
        className={`rounded-3xl w-full h-full flex lg:px-10 lg:overflow-hidden overflow-scroll  lg:flex-nowrap flex-wrap lg:items-center items-start justify-center lg:gap-5 ${
          currentMode ? "bg-white" : "bg-black"
        }`}
      >
        <div className="flex lg:w-1/2 flex-col lg:items-start  items-center lg:justify-start  justify-center">
          <h1
            className={`${
              currentMode ? "text-zinc-800" : "text-white"
            } lg:text-4xl text-xl font-bold lg:p-0 pt-10  lg:leading-10 lg:mb-5 mb-2`}
          >
            Abanob Shenoda Tawfik
          </h1>
          <div
            className={`${currentColorMode.textColor} lg:p-0 px-5 lg:text-4xl text-xl font-bold lg:leading-10 lg:mb-5 mb-2`}
          >
            <Typewriter
              options={{
                strings: ["Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p
            className={`lg:p-0 px-5 text-base font-normal leading-normal lg:text-start text-center lg:w-96 ${
              currentMode ? "text-neutral-500" : "text-white"
            } capitalize lg:mb-[50px] mb-5`}
          >
            I'm{" "}
            <span className={`${currentColorMode.textColor} font-bold`}>
              React.js
            </span>{" "}
            &{" "}
            <span className={`${currentColorMode.textColor} font-bold`}>
              Node.js
            </span>{" "}
            Developer with a focus on creating (and occasionally designing)
            exceptional digital experiences that are fast, accessible, visually
            appealing, and responsive.
          </p>

          <Link
            to={"contact"}
            className={`${currentColorMode.value} ${
              currentColorMode.value === "bg-red-500" ? "text-white" : ""
            } px-[32px] py-[16px] rounded lg:m-0 mx-5`}
          >
            Contact Me{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="lg:w-1/2 w-10/12 flex items-center justify-centerya">
          <img src={imageHandler(currentColorMode.value)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
