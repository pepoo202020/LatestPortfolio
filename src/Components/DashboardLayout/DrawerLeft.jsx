import React from "react";
import { Box, Drawer } from "@mui/material";
import {
  Category,
  Code,
  DashboardOutlined,
  Logout,
  Person,
  Work,
  WorkHistory,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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

const SideBarDrawerLeft = ({ drawer, setDrawer }) => {
  return (
    <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
      <Box sx={250} role="presentation">
        <div
          className="
          z-50
          h-screen
          flex
          flex-col
          items-center
          pr-[20px]
          pl-[20px]
          pt-[15px]
         overflow-hidden
 "
        >
          <div
            className="
        mb-2
        p-4
    "
          >
            <h5
              className="
            block
            antialiased
            tracking-normal
            font-sans
            text-xl
            font-semibold
            leading-snug
            text-gray-900
       "
            >
              AdminDashboard
            </h5>
          </div>
          <nav
            className="
        flex
        flex-col
        gap-1
        min-w-[240px]
        font-sans
        text-base
        font-normal
        text-gray-700
    "
          >
            {links.map((link_item, index) => (
              <NavLink
                to={link_item.link}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? `bg-slate-200 ml-2 py-3 -mr-[45px] rounded-3xl`
                    : ` mx-2 py-3`
                }
              >
                <div className="flex items-center gap-5 ml-3">
                  {link_item.icon}
                  {link_item.name}
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
      </Box>
    </Drawer>
  );
};

export default SideBarDrawerLeft;
