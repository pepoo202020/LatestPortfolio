import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import Typewriter from "typewriter-effect";
import { ColorModeContext } from "../contexts/colorModeContext";
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SkillsIcon from "../Assets/skills.png";
import ProgramsIcon from "../Assets/coding.png";
import ProjectsIcon from "../Assets/projects.png";
import ExperiencesIcon from "../Assets/experiences.png";
import {
  fetchAllSkills,
  fetchExperiences,
  fetchPrograms,
  fetchProjects,
} from "../Utils/databaseConnect";
import { ColorRing } from "react-loader-spinner";

const HomePage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  const [skills, setSkills] = useState("0");
  const [programs, setPrograms] = useState("0");
  const [projects, setProjects] = useState("0");
  const [experiences, setExperiences] = useState("0");
  const [loading, setLoading] = useState(true);
  const [gettenData, setGettenData] = useState(false);

  const data = [
    { name: "Skills", no: skills, icon: SkillsIcon, bg: "border-blue-300" },
    {
      name: "Programs",
      no: programs,
      icon: ProgramsIcon,
      bg: "border-purple-300",
    },
    {
      name: "Projects",
      no: projects,
      icon: ProjectsIcon,
      bg: "border-red-300",
    },
    {
      name: "Experiences",
      no: experiences,
      icon: ExperiencesIcon,
      bg: "border-green-300",
    },
  ];

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setGettenData(false);
      const fetchedExperiences = await fetchExperiences();
      setExperiences(fetchedExperiences.length);
      const fetchedSkills = await fetchAllSkills();
      setSkills(fetchedSkills.length);
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects.length);
      const fetchedPrograms = await fetchPrograms();
      setPrograms(fetchedPrograms.length);
      setLoading(false);
      setGettenData(true);
    };

    fetch();
  }, []);
  return (
    <div className="w-full h-full  lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px] ">
      {loading ? (
        <div
          className={`rounded-3xl w-full h-full relative flex flex-col lg:items-center lg:justify-center items-start lg:p-0 pb-5  overflow-y-auto justify-start lg:gap-5 ${
            currentMode ? "bg-white" : "bg-black"
          }`}
        >
          {" "}
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div
          className={`rounded-3xl w-full h-full relative flex flex-col lg:items-center lg:justify-center items-start lg:p-0 pb-5  overflow-y-auto justify-start lg:gap-5 ${
            currentMode ? "bg-white" : "bg-black"
          }`}
        >
          <div className="flex flex-col w-full  items-center lg:mb-10 mb-5">
            <h1
              className={`${
                currentMode ? "text-zinc-800" : "text-white"
              } text-xl lg:text-4xl font-bold pt-10 leading-10 mb-5`}
            >
              Abanob Shenoda Tawfik
            </h1>
            <div
              className={`${currentColorMode.textColor} lg:p-0 px-5 lg:text-4xl text-xl font-bold lg:leading-10 mb-5`}
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
              className={`lg:p-0 px-5 text-base font-normal leading-normal  text-center w-full ${
                currentMode ? "text-neutral-500" : "text-white"
              } capitalize  mb-5`}
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
              exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive.
            </p>

            <Link
              to={"/contact"}
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
          <div className="w-full flex items-center px-5 justify-centerya">
            {/* <img src={imageHandler(currentColorMode.value)} alt="" /> */}
            <div className="flex flex-wrap  lg:gap-2 gap-5  w-full items-center justify-center ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-wrap flex-row lg:flex-col justify-center items-center w-full lg:w-1/5 p-5 ${
                    currentMode ? "bg-gray-100/80" : "bg-gray-600/80"
                  } rounded-md shadow-xl border-l-4 ${item.bg}`}
                >
                  <div className="flex justify-between w-full">
                    <div>
                      <div className="p-2">
                        <img
                          src={item.icon}
                          alt={`icon ${index}`}
                          className="w-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`font-bold text-5xl ${currentColorMode.textColor}`}
                    >
                      {item.no}
                    </div>
                    <div
                      className={`font-bold text-2xl ${
                        currentMode ? "text-black" : "text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
