import { DarkMode, LightMode } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";

const ModeButton = ({ currentMode, handleModeChanger }) => {
  return (
    <Tooltip title={`${currentMode ? "Dark Mode" : "Light Mode"}`}>
      <button className="w-7 h-7" onClick={handleModeChanger}>
        {currentMode ? <DarkMode /> : <LightMode style={{ color: "white" }} />}
      </button>
    </Tooltip>
  );
};

export default ModeButton;
