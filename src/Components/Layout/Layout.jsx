import React from "react";
import RightSideBar from "../RightSideBar/RightSideBar";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import FloatingBottomBar from "../FloatingBottomBar/FloatingBottomBar";

const Layout = () => {
  return (
    <div className="flex justify-between items-center h-screen bg-[#E4E6EB]">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
      <FloatingBottomBar />
    </div>
  );
};

export default Layout;
