import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import AppBarDashboard from "./AppBar";
import BottomBar from "./BottomBar";

const DashboardLayout = () => {
  return (
    <Fragment>
      <div className="flex w-screen h-screen overflow-hidden bg-slate-200">
        <DashboardSideBar />
        <div className="flex-1 flex flex-col overflow-y-visible items-center">
          <AppBarDashboard />
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
