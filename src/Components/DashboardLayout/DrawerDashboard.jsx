import { ChevronLeft, Code, Dashboard } from "@mui/icons-material";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const listItems = [
  { name: "Dashboard", icon: <Dashboard />, link: "/dashboard" },
  { name: "Skills", icon: <Code />, link: "/dashboard/skills" },
];

const DrawerDashboard = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
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
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
          <Divider />
          <List component="nav">
            {listItems.map((item, index) => (
              <ListItemButton key={index}>
                <Link to={item.link} className="flex items-center gap-5">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Toolbar>
      </Drawer>
    </Fragment>
  );
};

export default DrawerDashboard;
