import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const AppBarDashboard = ({ open, toggleDrawer }) => {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar sx={{ pr: "24px" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{ marginRight: "36px", ...(open && { display: "none" }) }}
        >
          <Menu />
        </IconButton>
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
    </AppBar>
  );
};

export default AppBarDashboard;
