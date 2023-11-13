import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import "./NavBarButtons.css";
import {
  Code,
  ContactMail,
  Person2,
  Work,
  WorkHistory,
} from "@mui/icons-material";

const NavBarButtons = ({ currentMode, currentColorMode }) => {
  const { value } = currentColorMode;
  const links = [
    {
      name: "Home",
      link: "/",
      icon: (
        <HomeIcon
          className={`${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : "text-black"
              : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Profile",
      link: "/profile",
      icon: (
        <Person2
          className={`${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : "disabled"
              : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Skills",
      link: "/skills",
      icon: (
        <Code
          className={`${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : "disabled"
              : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Experience",
      link: "/experience",
      icon: (
        <Work
          className={`${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : "disabled"
              : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <WorkHistory
          className={`${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : "disabled"
              : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Contact Me",
      link: "/contact",
      icon: (
        <ContactMail
          className={`${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : "disabled"
              : "text-white"
          }`}
        />
      ),
    },
  ];

  return (
    <nav>
      <div className="flex lg:flex-col items-center justify-center lg:gap-[43px] gap-2">
        {links.map((link, index) => (
          <Tooltip title={link.name} key={index}>
            <div className="iconDiv">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `active ${currentMode ? "" : "white"} ${value}`
                    : `disActive  ${currentMode ? "bg-gray-100" : "black dark"}`
                }
                to={link.link}
              >
                {link.icon}
              </NavLink>
            </div>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
};

export default NavBarButtons;
