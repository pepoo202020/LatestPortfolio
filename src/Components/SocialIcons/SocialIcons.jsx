import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({ link, icon, title, backgroundColor }) => {
  return (
    <Tooltip title={title}>
      <div
        className={`
        w-6
        h-6
        ${backgroundColor}
        cursor-pointer
        rounded-full
        flex
        items-center
        justify-center
        `}
      >
        <Link to={link} className="hover:scale-110 transition-all">
          {icon}
        </Link>
      </div>
    </Tooltip>
  );
};

export default SocialIcons;
