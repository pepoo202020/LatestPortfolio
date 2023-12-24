import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import { ColorModeContext } from "../contexts/colorModeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import {
  fetchFilteredProjects,
  fetchPrograms,
  fetchProjectCate,
  fetchProjects,
  fetchSkillsWithoutPrograms,
  getSpecificProject,
} from "../Utils/databaseConnect";
import ImagesModal from "../Components/ProjectsPage/ImagesModal";
import ProjectCard from "../Components/ProjectsPage/ProjectCard";
import ProjectCatesSelector from "../Components/ProjectsPage/ProjectCatesSelector";
import SkillsSelector from "../Components/ProjectsPage/SkillsSelector";
import Loader from "../Components/Loader";

const ProjectsPage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  const [projectsCates, setProjectsCates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectCate, setProjectCate] = useState("");
  const [skillUsed, setSkillUsed] = useState("");
  const [program, setProgram] = useState("");
  const [projectID, setProjectID] = useState("");
  const [loadings, setLoadings] = useState(true);
  const [projectImages, setProjectImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [programs, setPrograms] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);

  const openHandler = (id) => {
    setModal((pre) => !pre);
    setProjectID(id);
    getSpecificProject(id, setProjectImages);
  };

  useEffect(() => {
    const fetch = async () => {
      setLoadings(true);
      const fetchedProjectCate = await fetchProjectCate();
      setProjectsCates(fetchedProjectCate);
      const fetchedPrograms = await fetchPrograms();
      setPrograms(fetchedPrograms);
      const fetchedSkills = await fetchSkillsWithoutPrograms();
      setSkills(fetchedSkills);
      if (projectCate === "" && skillUsed === "" && program === "") {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
      } else {
        const fetchedFilteredProjects = await fetchFilteredProjects(
          projectCate,
          skillUsed,
          program
        );
        setProjects(fetchedFilteredProjects);
      }
      setLoadings(false);
    };
    fetch();
  }, []);

  return (
    <div className="w-full h-full   lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px] ">
      <div
        className={`rounded-3xl w-full h-full relative flex flex-col  items-start  overflow-y-auto justify-start lg:gap-5 ${
          currentMode ? "bg-white" : "bg-black"
        }`}
      >
        <div
          className={`h-fit  flex flex-col gap-5 items-center sticky top-0  z-40 ${
            currentMode ? "bg-white" : "bg-black"
          } w-full`}
        >
          <div className="flex items-center">
            <h1
              className={`${
                currentMode
                  ? "text-black bg-gray-200"
                  : "text-white bg-gray-700"
              } px-[20px] rounded-xl mt-2  w-fit mx-auto `}
            >
              Projects
            </h1>
          </div>
          <div className="w-full h-fit flex  mb-5 items-start justify-center lg:gap-2 gap-1 lg:px-5 px-2">
            <ProjectCatesSelector setter={setProjectCate} arr={projectsCates} />
            <SkillsSelector setter={setSkillUsed} arr={skills} />

            <select
              onChange={(e) => setProgram(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={""}>Programs</option>
              {programs.map((program, index) => (
                <option value={program} key={index}>
                  {program}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          className={`  w-full flex flex-wrap items-center justify-center gap-10  px-2`}
        >
          {loadings ? (
            <Loader />
          ) : projects.length === 0 ? (
            "No Projects"
          ) : (
            projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex items-center px-2 justify-center"
              >
                <ProjectCard
                  currentColorMode={currentColorMode}
                  currentMode={currentMode}
                  openHandler={openHandler}
                  project={project}
                />
              </div>
            ))
          )}
        </div>
      </div>
      {modal &&
        (loadings ? (
          <Loader />
        ) : (
          <ImagesModal
            currentImage={currentImage}
            projectImages={projectImages}
            setCurrentImage={setCurrentImage}
            setModal={setModal}
          />
        ))}
    </div>
  );
};

export default ProjectsPage;
