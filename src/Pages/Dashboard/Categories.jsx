import React, { useEffect, useState } from "react";
import skillsIcon from "../../Assets/icons/skills.png";
import projectsIcon from "../../Assets/icons/clipboard.png";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@mui/icons-material";
import axios from "axios";
import { fetchProjectCate, fetchSkillsCate } from "../../Utils/databaseConnect";
const cates = [
  { name: "Skills Categories", link: "skills", image: skillsIcon },
  { name: "Projects Categories", link: "projects", image: projectsIcon },
];

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [skillsCategoryNo, setSkillsCategoryNo] = useState(0);
  const [projectsCategoryNo, setProjectsCategoryNo] = useState(0);

  useEffect(() => {
    const fetchCates = async () => {
      const fetchedSkillsCate = await fetchSkillsCate();
      setSkillsCategoryNo(fetchedSkillsCate.length);
      const fetchedProjectsCate = await fetchProjectCate();
      setProjectsCategoryNo(fetchedProjectsCate.length);
    };
    setLoading(true);
    fetchCates();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className=" w-full  px-5 ">
        <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
          <div className="w-full flex items-center justify-center mb-1">
            <h1 className="lg:text-2xl  text-lg font-bold mb-1">
              Loading Skill Categories
            </h1>
          </div>
        </div>
      </div>
    );
  }
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
              <p className="text-sm text-gray-500">
                No: {index === 0 ? skillsCategoryNo : projectsCategoryNo}
              </p>
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
