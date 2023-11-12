import React from "react";
import RightSideBar from "../RightSideBar/RightSideBar";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const Layout = () => {
  return (
    <div className="flex justify-between items-center h-screen bg-[#E4E6EB]">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
  );
};

export default Layout;
