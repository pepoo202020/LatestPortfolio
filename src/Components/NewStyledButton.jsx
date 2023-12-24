import React from "react";
import { Link } from "react-router-dom";

const NewStyledButton = ({ onClick, newBtn, icon, title }) => {
  return (
    <Link
      onClick={onClick}
      className={`${
        newBtn ? "hidden" : ""
      } px-2 py-1 bg-green-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-green-500 transition-all`}
    >
      {icon} {title}
    </Link>
  );
};

export default NewStyledButton;
