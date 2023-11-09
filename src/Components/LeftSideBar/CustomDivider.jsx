import React from "react";

const CustomDivider = ({ currentMode }) => {
  return (
    <div
      className={`w-full h-px border ${
        currentMode ? "border-gray-100" : "border-gray-400"
      } mb-[20px]`}
    ></div>
  );
};

export default CustomDivider;
