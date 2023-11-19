import React from "react";
import experienceIcon from "../../Assets/icons/experience.png";
import skillsIcon from "../../Assets/icons/skills.png";
import projectsIcon from "../../Assets/icons/clipboard.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const divs = [
    {
      name: "Skills",
      number: 25,
      image: skillsIcon,
      link: "/dashboard/skills",
    },
    {
      name: "Experiences",
      number: 2,
      image: experienceIcon,
      link: "/dashboard/experiences",
    },
    {
      name: "Projects",
      number: 2,
      image: projectsIcon,
      link: "/dashboard/projects",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 p-2">
      {divs.map((div, index) => (
        <div key={index} className="bg-white/60 to-black/5 p-6 rounded-lg">
          <Link to={div.link}>
            <div class="flex flex-row space-x-4 items-center">
              <div>
                <img src={div.image} className="w-28" alt="" />
              </div>
              <div>
                <p className="text-indigo-800 text-4xl font-medium mb-5 capitalize leading-4">
                  {div.name}
                </p>
                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                  <span className="text-4xl">{div.number}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
