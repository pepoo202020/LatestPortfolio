import React, { useContext } from "react";
import { ModeContext } from "../contexts/modeContext";
import { ColorModeContext } from "../contexts/colorModeContext";
import profileImage from "../Assets/photo.jpeg";
import ProfileSpan from "../Components/profilePage/ProfileSpan";

const ProfilePage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  return (
    <div className="w-full h-full  lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px] ">
      <div
        className={`rounded-3xl w-full h-full relative flex flex-wrap lg:items-center items-start lg:overflow-hidden overflow-scroll justify-center lg:gap-5 ${
          currentMode ? "bg-white" : "bg-black"
        }`}
      >
        <div
          className={`lg:relative lg:h-fit h-[50px] flex items-center sticky top-0 z-40 ${
            currentMode ? "bg-white" : "bg-black"
          } w-full`}
        >
          <h1
            className={`${
              currentMode ? "text-black bg-gray-200" : "text-white bg-gray-700"
            } px-[20px] rounded-xl lg:mt-2  w-fit mx-auto`}
          >
            About Me
          </h1>
        </div>
        <div
          className="
          flex lg:flex-nowrap flex-wrap w-full
          mx-5 gap-5
        "
        >
          <div
            className={`lg:w-1/2 lg:mt-0 mt-5 ${
              currentMode ? "text-gray-600" : "text-gray-200"
            } text-sm font-normal flex flex-col gap-1  text-justify leading-normal`}
          >
            <p>
              I am Abanob Shenoda a communications and electronics engineer. I
              graduated from Assiut University with a{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"good"}
              />{" "}
              general grade, and an{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Excellent"}
              />{" "}
              grade in the graduation project for the black box.
            </p>
            <p>
              My programming story began in college and I learned{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"C++"}
              />
              , and after that my passion for learning programming languages
              increased. I learned mobile languages through YouTube, starting
              with{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Java"}
              />{" "}
              and{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Android Studio"}
              />
              , and I only learned the primitives.
            </p>
            <p>
              After that, I started looking for other programming languages, and
              I started learning the languages of the web, and I understood that
              the world in web was divided into Front and Backend, and I started
              learning the basics along with the programming languages{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"html"}
              />
              ,
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"css"}
              />
              , and I worked on two projects on them and learned the languages{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"JS"}
              />
              ,{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Bootstrap"}
              />
              , and{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"JQuery"}
              />{" "}
              with them.
            </p>
            <p>
              After that, I joined the{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"EGFWD"}
              />{" "}
              scholarship provided by the Egyptian Ministry of Communications. I
              started the basics course in Frontand, and finished it quickly
              because I knew the basics from YouTube, and I received the
              certificate.
            </p>
            <p>
              After that, I joined the Advanced level, in which we studied
              JavaScript at the Advanced level, but before that I took an exam
              to join it and passed it. I joined and returned the scholarship
              after 3 months. Then I joined the Professional level. I took the
              exam before that and succeeded in joining it. I took a{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"fullstack"}
              />
              in it using JavaScript and learned databases like{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Postgres Sql"}
              />{" "}
              from it and also{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"AWS"}
              />
              .
            </p>
            <p>
              During this time, I learned new languages for the Flutter and Dart
              mobile phones, and in Web leared{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"React"}
              />{" "}
              and basics of{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Next"}
              />{" "}
              and{" "}
              <ProfileSpan
                textColor={currentColorMode.textColor}
                content={"Mongo DB"}
              />
            </p>
          </div>
          <div className="lg:w-1/2 flex  lg;mb-0 mb-5 items-center justify-center">
            <img
              className={` w-3/4 rounded-3xl shadow-xl  border-4 ${currentColorMode.borderColor}`}
              src={profileImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
