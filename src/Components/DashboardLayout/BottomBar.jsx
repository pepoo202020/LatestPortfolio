import {
  Category,
  Code,
  DashboardOutlined,
  Logout,
  Person,
  Work,
  WorkHistory,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    icon: <DashboardOutlined />,
    link: "main",
  },
  {
    name: "Categories",
    icon: <Category />,
    link: "/dashboard/categories",
  },
  {
    name: "Skills",
    icon: <Code />,
    link: "skills",
  },

  {
    name: "Experiences",
    icon: <Work />,
    link: "/dashboard/experiences",
  },
  {
    name: "Projects",
    icon: <WorkHistory />,
    link: "/dashboard/projects",
  },
  {
    name: "Profile",
    icon: <Person />,
    link: "/dashboard/profile",
  },
  {
    name: "Logout",
    icon: <Logout />,
    link: "/",
  },
];

const BottomBar = () => {
  return (
    <div className="absolute bottom-0 w-screen bg-white lg:hidden flex items-center justify-center gap-1">
      {links.map((link_item, index) => (
        <NavLink
          to={link_item.link}
          key={index}
          className={({ isActive }) =>
            isActive ? `bg-slate-200 rounded-full p-2 m-1` : ` p-2 m-1`
          }
        >
          <Tooltip title={link_item.name}>{link_item.icon}</Tooltip>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomBar;
