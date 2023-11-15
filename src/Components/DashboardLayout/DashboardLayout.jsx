import React from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import DrawerDashboard from "./DrawerDashboard";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#E4E6EB", height: "100vh" }}>
      <CssBaseline />

      <DrawerDashboard />
      <Outlet />
    </Box>
  );
};

export default DashboardLayout;
