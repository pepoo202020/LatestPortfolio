import React from "react";
import { Link } from "react-router-dom";

const StyledButton = ({ onClick, icon, title }) => {
  return (
    <Link
      onClick={onClick}
      className={`px-2 py-1 ${
        title === "Save"
          ? "bg-orange-500 hover:border-orange-500"
          : "bg-red-500 hover:border-red-500"
      } text-white rounded-xl hover:text-black hover:bg-transparent hover:border  transition-all`}
    >
      {icon} <span className="lg:inline-block hidden">{title}</span>
    </Link>
  );
};

export default StyledButton;
