import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import { Timeline } from "@mui/lab";
import { ColorModeContext } from "../contexts/colorModeContext";
import { fetchExperiences } from "../Utils/databaseConnect";
import ExperienceCard from "../Components/ExperiencesPage/ExperienceCard";
import Loader from "../Components/Loader";

const ExpreiencePage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const fetchedExperiences = await fetchExperiences();
      setExperiences(fetchedExperiences);
      setLoading(false);
    };

    fetch();
  }, []);

  return (
    <div className="w-full h-full lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px]">
      <div
        className={`rounded-3xl w-full h-full flex flex-wrap  items-start justify-center lg:gap-5 ${
          currentMode ? "bg-white text-black" : "bg-black text-white"
        } overflow-y-auto`}
      >
        {loading ? (
          <Loader />
        ) : (
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <ExperienceCard
                currentColorMode={currentColorMode}
                currentMode={currentMode}
                experience={experience}
                key={index}
              />
            ))}
          </Timeline>
        )}
      </div>
    </div>
  );
};

export default ExpreiencePage;
