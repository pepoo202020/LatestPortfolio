import { ColorLens } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
const colors = [
  {
    name: "Yellow",
    value: "bg-yellow-500",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    name: "Blue",
    value: "bg-blue-500",
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "Red",
    value: "bg-red-500",
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
  {
    name: "Green",
    value: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-500",
  },
];

const ColorsButton = ({ currentMode, setCurrentColorMode }) => {
  const [colorShow, setColorShow] = useState(false);
  const buttonRef = useRef(null);
  const handleColorShow = () => {
    setColorShow((pre) => !pre);
  };

  useEffect(() => {
    // Function to handle clicks outside of the div
    const handleOutsideClick = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Clicked outside the div, hide it
        setColorShow(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative">
      <Tooltip title="Color Pallete" placement="left">
        <button ref={buttonRef} onClick={handleColorShow} className="w-7 h-7">
          <ColorLens className={`${currentMode ? "" : "text-white"}`} />
        </button>
      </Tooltip>
      {colorShow && (
        <div>
          <div
            className={`${
              currentMode ? "bg-black" : "bg-white"
            }  shadow rounded-3xl hidden   lg:flex items-center justify-center gap-2 p-1 absolute -bottom-8 right-2 `}
          >
            {colors.map((color, index) => (
              <Tooltip title={`${color.name}`} key={index}>
                <div
                  onClick={() => setCurrentColorMode(color)}
                  className={`w-5 h-5 cursor-pointer rounded-full ${color.value}`}
                ></div>
              </Tooltip>
            ))}
          </div>
          <div
            className={`${
              currentMode ? "bg-black" : "bg-white"
            }  shadow rounded-3xl lg:hidden flex items-center justify-center gap-2 p-1 absolute -top-10 `}
          >
            {colors.map((color, index) => (
              <Tooltip title={`${color.name}`} key={index}>
                <div
                  onClick={() => setCurrentColorMode(color)}
                  className={`w-5 h-5 cursor-pointer rounded-full ${color.value}`}
                ></div>
              </Tooltip>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorsButton;
