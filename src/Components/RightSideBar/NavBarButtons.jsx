import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";

const NavBarButtons = ({ currentMode, currentColorMode }) => {
  const { value, borderColor } = currentColorMode;
  const links = [
    {
      name: "Home",
      link: "/",
      icon: (
        <HomeIcon
          style={{ width: "30px", height: "30px" }}
          className={`flex items-center justify-center ${
            currentMode
              ? currentColorMode.value === "bg-red-500"
                ? "text-white"
                : ""
              : "text-white"
          }`}
        />
      ),
    },
  ];

  return (
    <nav>
      <div className="flex flex-col items-center justify-center gap-[43px]">
        {links.map((link, index) => (
          <Tooltip title={link.name} key={index}>
            <div className="w-fit h-fit">
              <NavLink
                className={({ isActive }) =>
                  isActive ? value : "bg-transparent"
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
