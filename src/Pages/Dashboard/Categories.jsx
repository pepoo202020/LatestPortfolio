import React from "react";
import skillsIcon from "../../Assets/icons/skills.png";
import projectsIcon from "../../Assets/icons/clipboard.png";
import { Link } from "react-router-dom";
import {
  ArrowCircleRight,
  ArrowRight,
  ArrowRightTwoTone,
} from "@mui/icons-material";
const cates = [
  { name: "Skills Categories", link: "skills", image: skillsIcon },
  { name: "Projects Categories", link: "projects", image: projectsIcon },
];

const Categories = () => {
  return (
    <div className=" w-full flex flex-col px-5 gap-5">
      {cates.map((cate, index) => (
        <div
          key={index}
          className="w-full bg-white p-5 flex justify-between items-center rounded-2xl shadow-md"
        >
          <div className="flex items-center gap-5">
            <img src={cate.image} alt="" className="lg:h-28 h-20" />
            <div className="flex flex-col items-start justify-center gap-5">
              <Link to={cate.link} className="lg:text-2xl ">
                {cate.name}
              </Link>
              <p className="text-sm text-gray-500">No: 20</p>
            </div>
          </div>
          <Link to={cate.link}>
            <ArrowCircleRight style={{ fontSize: "40px" }} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
