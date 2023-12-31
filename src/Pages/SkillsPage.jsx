import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import { ColorModeContext } from "../contexts/colorModeContext";
import { Tooltip } from "@mui/material";
import {
  fetchAllSkills,
  fetchCateSkill,
  fetchSkillsCate,
} from "../Utils/databaseConnect";
import { SkillCategoryHandler } from "../Utils/util";
import Loader from "../Components/Loader";

const SkillsPage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  const [skillsCates, setSkillsCate] = useState([]);
  const [allSkills, setAllSkills] = useState(true);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [databases, setDatabases] = useState(false);
  const [servering, setServering] = useState(false);
  const [others, setOthers] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [defaukt, setDefault] = useState("");
  const [skills, setSkills] = useState([]);
  const [catID, setCatID] = useState("");
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoadings(true);
        const fetchedSkillsCate = await fetchSkillsCate();
        setSkillsCate(fetchedSkillsCate);
        if (catID === "") {
          const fetchedSkills = await fetchAllSkills();
          setSkills(fetchedSkills);
        } else {
          const fetchedSkill = await fetchCateSkill(catID);
          setSkills(fetchedSkill);
        }
        setLoadings(false);
      } catch (error) {
        setLoadings(false);
        console.log(error);
      }
    };

    fetch();
  }, [catID]);

  return (
    <div className="w-full h-full  lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px] ">
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
              Skills
            </h1>
          </div>
          <div className="w-full h-fit flex flex-wrap  items-start justify-center lg:gap-2 gap-1 lg:px-5 px-2">
            <h1
              onClick={() =>
                SkillCategoryHandler(
                  "All Skills",
                  "",
                  setAllSkills,
                  setFrontend,
                  setBackend,
                  setDatabases,
                  setServering,
                  setOthers,
                  setDefault,
                  setCatID,
                  setPrograms
                )
              }
              className={`${
                allSkills
                  ? ` bg-transparent border ${currentColorMode.borderColor} ${currentColorMode.textColor}`
                  : `${currentColorMode.value} text-white`
              }   font-bold lg:text-base text-xs p-1 rounded-lg cursor-pointer`}
            >
              All Skills
            </h1>
            {skillsCates.map((skillCate, index) => (
              <div
                key={index}
                onClick={() =>
                  SkillCategoryHandler(
                    skillCate.skillCategoryName,
                    skillCate._id,
                    setAllSkills,
                    setFrontend,
                    setBackend,
                    setDatabases,
                    setServering,
                    setOthers,
                    setDefault,
                    setCatID,
                    setPrograms
                  )
                }
                className={`${
                  defaukt === skillCate.skillCategoryName
                    ? `bg-transparent border ${currentColorMode.borderColor} ${currentColorMode.textColor}`
                    : `${currentColorMode.value} text-white`
                }  font-bold lg:text-base text-xs p-1 rounded-lg cursor-pointer`}
              >
                <h1>{skillCate.skillCategoryName}</h1>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`  w-full flex flex-wrap items-center justify-center gap-5 mt-5 px-2`}
        >
          {loadings ? (
            <Loader />
          ) : skills.length === 0 ? (
            "not have data"
          ) : (
            skills.map((skill, index) => (
              <Tooltip key={index} title={skill.skillName}>
                <div
                  key={index}
                  className={`${
                    currentMode ? "bg-gray-100/80" : "bg-gray-600/80"
                  } p-5 rounded-lg shadow-lg border cursor-pointer ${
                    currentColorMode.borderColor
                  }`}
                >
                  <img
                    className="lg:w-40 w-20"
                    src={skill.skillImage}
                    alt={skill.skillName}
                  />
                </div>
              </Tooltip>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
