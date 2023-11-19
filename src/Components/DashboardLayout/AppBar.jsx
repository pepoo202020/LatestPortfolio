import { Toolbar, Typography } from "@mui/material";
import React from "react";

const AppBarDashboard = () => {
  return (
    <div className="w-full  sticky top-0">
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Admin Dashboard
        </Typography>
      </Toolbar>
    </div>
  );
};

export default AppBarDashboard;
