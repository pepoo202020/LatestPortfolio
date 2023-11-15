import React, { useContext } from "react";
import { ModeContext } from "../contexts/modeContext";
import { ColorModeContext } from "../contexts/colorModeContext";
import { Link } from "react-router-dom";

const SkillsPage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);

  const skills = [
    {
      category: "Frontend",
      content: [
        {
          name: "HTML",

          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
        },
      ],
    },
    {
      category: "Backend",
      content: [
        {
          name: "Node Js",
          image:
            "https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png",
        },
      ],
    },
    {
      category: "Databases",
      content: [
        {
          name: "Mongo DB",
          image:
            "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        },
      ],
    },
    {
      category: "Databases",
      content: [
        {
          name: "Mongo DB",
          image:
            "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        },
      ],
    },
    {
      category: "Servering",
      content: [
        {
          name: "AWS",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/free-aws-3215369-2673787.png",
        },
      ],
    },
    {
      category: "Others",
      content: [
        {
          name: "Flutter",
          image:
            "https://w7.pngwing.com/pngs/67/315/png-transparent-flutter-hd-logo-thumbnail.png",
        },
      ],
    },
  ];

  const SkillCategoryHandler = (cat_name) => {
    switch (cat_name) {
      case "Frontend":
        return "Frontend Skills";
      case "Backend":
        return "Backend Skills";
      case "Databases":
        return "Databases Skills";
      case "Servering":
        return "Servering Skills";
      default:
        return "Other Skills";
    }
  };
  return (
    <div className="w-full h-full  lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px] ">
      <div
        className={`rounded-3xl w-full h-full relative flex flex-wrap  items-start  overflow-y-auto justify-start lg:gap-5 ${
          currentMode ? "bg-white" : "bg-black"
        }`}
      >
        <div
          className={`h-[50px] flex items-center sticky top-0 z-40 ${
            currentMode ? "bg-white" : "bg-black"
          } w-full`}
        >
          <h1
            className={`${
              currentMode ? "text-black bg-gray-200" : "text-white bg-gray-700"
            } px-[20px] rounded-xl mt-2  w-fit mx-auto `}
          >
            Skills
          </h1>
          <Link
            to={"/login"}
            className={`absolute top-1 left-1 ${currentColorMode.value} text-white lg:px-5 px-2 py-2 rounded-xl`}
          >
            Add New Skill
          </Link>
        </div>
        <div className="w-full h-fit flex flex-col items-start justify-start gap-5 px-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-3"
            >
              <h1
                className={`${currentColorMode.textColor} font-bold text-2xl`}
              >
                {SkillCategoryHandler(skill.category)}
              </h1>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
