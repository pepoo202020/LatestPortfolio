import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import { ColorModeContext } from "../contexts/colorModeContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { Tooltip } from "@mui/material";

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
  const [defaukt, setDefault] = useState("");
  const [skills, setSkills] = useState([]);
  const [catID, setCatID] = useState("");

  useEffect(() => {
    const fetchSkillsCate = async () => {
      const response = await axios.get(
        "http://localhost:2000/api/cates/skills/all"
      );
      setSkillsCate(response.data.skillCategories);
    };
    const fetchAllSkills = async () => {
      const response = await axios.get("http://localhost:2000/api/skills/all");
      setSkills(response.data.skills);
    };
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:2000/api/skills/filter/${catID}`
      );
      setSkills(response.data.skills);
    };

    fetchSkillsCate();

    if (catID === "") {
      fetchAllSkills();
    } else {
      fetch();
    }
  }, [catID]);

  const SkillCategoryHandler = (cat_name, id) => {
    switch (cat_name) {
      case "Frontend":
        setAllSkills(false);
        setFrontend(true);
        setBackend(false);
        setDatabases(false);
        setServering(false);
        setOthers(false);
        setDefault(cat_name);
        setCatID(id);
        break;
      case "Backend":
        setAllSkills(false);
        setFrontend(false);
        setBackend(true);
        setDatabases(false);
        setServering(false);
        setOthers(false);
        setCatID(id);
        setDefault(cat_name);
        break;
      case "Databases":
        setAllSkills(false);
        setFrontend(false);
        setBackend(false);
        setDatabases(true);
        setServering(false);
        setOthers(false);
        setCatID(id);
        setDefault(cat_name);
        break;
      case "Servering":
        setAllSkills(false);
        setFrontend(false);
        setBackend(false);
        setDatabases(false);
        setServering(true);
        setOthers(false);
        setCatID(id);
        setDefault(cat_name);
        break;
      case "Others":
        setAllSkills(false);
        setFrontend(false);
        setBackend(false);
        setDatabases(false);
        setServering(false);
        setOthers(true);
        setCatID(id);
        setDefault(cat_name);
        break;
      default:
        setAllSkills(true);
        setFrontend(false);
        setBackend(false);
        setDatabases(false);
        setServering(false);
        setOthers(false);
        setCatID("");
        setDefault(cat_name);
        break;
    }
  };

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
            <Link
              to={"/login"}
              className={`absolute font-bold top-1  lg:text-base text-xs left-1 ${currentColorMode.value} text-white lg:px-5 p-2 rounded-xl`}
            >
              Add New Skill
            </Link>
          </div>
          <div className="w-full h-fit flex flex-wrap  items-start justify-center lg:gap-2 gap-1 lg:px-5 px-2">
            <h1
              onClick={() => SkillCategoryHandler("All Skills")}
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
                    skillCate._id
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
          {skills.map((skill, index) => (
            <Tooltip title={skill.skillName}>
              <div
                key={index}
                className={`${
                  currentMode ? "bg-gray-100/80" : "bg-gray-600/80"
                } p-10 rounded-lg shadow-lg border cursor-pointer ${
                  currentColorMode.borderColor
                }`}
              >
                <img
                  className="lg:w-32 w-16"
                  src={skill.skillImage}
                  alt={skill.skillName}
                />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
