import React, { useContext } from "react";
import { ModeContext } from "../contexts/modeContext";

const ProjectsPage = () => {
  const { currentMode } = useContext(ModeContext);
  return (
    <div className="w-full h-full lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px]">
      <div
        className={`rounded-3xl w-full h-full flex flex-wrap lg:items-center items-start justify-center lg:gap-5 ${
          currentMode ? "bg-white" : "bg-black"
        }`}
      >
        projects Page
      </div>
    </div>
  );
};

export default ProjectsPage;
