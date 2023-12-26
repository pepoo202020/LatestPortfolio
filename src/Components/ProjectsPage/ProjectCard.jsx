import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  currentMode,
  project,
  openHandler,
  currentColorMode,
}) => {
  return (
    <div
      className={`relative flex  w-full  lg:flex-row flex-col rounded-xl ${
        currentMode
          ? "bg-gray-100/80 text-gray-700"
          : "bg-gray-600/80 text-gray-200"
      } bg-clip-border shadow-md`}
    >
      <div
        className={`relative m-0 lg:w-2/5 w-full shrink-0 overflow-hidden rounded-xl rounded-r-none ${
          currentMode
            ? "bg-gray-100/80 text-gray-700"
            : "bg-gray-600/80 text-gray-200"
        } bg-clip-border`}
      >
        <Tooltip title="Show More">
          <img
            src={project.projectDetails.mainImage}
            alt={project.projectDetails.title}
            className="h-full w-full object-cover cursor-pointer"
            onClick={() => openHandler(project.projectDetails._id)}
          />
        </Tooltip>
      </div>
      <div className="p-6 w-full ">
        <h6
          className={`mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal ${currentColorMode.textColor} antialiased`}
        >
          {project.projectDetails.subtitle}
        </h6>
        <h4
          className={`mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased`}
        >
          {project.projectDetails.title}
        </h4>
        <div className="mb-2 flex  items-center flex-wrap gap-2">
          {project.projectDetails.project_Categories.map((cate, index) => (
            <div
              key={index}
              className="bg-yellow-200 py-1.5 lg:px-6 px-2 rounded-full"
            >
              <p
                tabIndex="0"
                className="focus:outline-none text-xs text-yellow-700"
              >
                {cate.projectCateName}
              </p>
            </div>
          ))}
        </div>
        <p
          className={`mb-2 block font-sans text-base font-normal leading-relaxed ${
            currentMode ? "text-gray-700" : "text-gray-200"
          } antialiased lg:text-base text-xs`}
        >
          {project.projectDetails.description}
        </p>
        {project.projectDetails.skills_used.length === 0 ? (
          ""
        ) : (
          <div className="flex mb-2 items-center flex-wrap gap-3 text-sm">
            <h1 className="font-bold lg:text-base text-xs">Skills:</h1>
            <div className="flex flex-wrap items-center gap-1">
              {project.projectDetails.skills_used.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-200 py-1.5 lg:px-6 px-2 rounded-full"
                >
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-blue-700"
                  >
                    {skill.skillName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {project.projectDetails.programs.length === 0 ? (
          ""
        ) : (
          <div className="flex mb-10 items-center flex-wrap gap-3 text-sm">
            <h1 className="font-bold lg:text-base text-xs">Programs:</h1>
            <div className="flex flex-wrap items-center gap-1">
              {project.projectDetails.programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-red-200 py-1.5 lg:px-6 px-2 rounded-full"
                >
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-red-700"
                  >
                    {program}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full flex justify-center ">
          <Link
            className={`w-full  text-center  ${
              currentMode
                ? currentColorMode.value === "bg-red-500"
                  ? "text-black"
                  : "text-white"
                : "text-black"
            } ${
              currentColorMode.value
            } font-bold lg:text-lg rounded-xl shadow-lg`}
            to={project.projectDetails.link}
          >
            Show Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
