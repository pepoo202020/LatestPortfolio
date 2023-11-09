import React, { useContext, useState } from "react";
import { ModeContext } from "../../contexts/modeContext";
import ModeButton from "./ModeButton";
import ColorsButton from "./ColorsButton";
import { ColorModeContext } from "../../contexts/colorModeContext";

const RightSideBar = () => {
  const { currentMode, setCurrentMode } = useContext(ModeContext);

  const handleModeChanger = () => {
    setCurrentMode((prev) => !prev);
  };

  const { setCurrentColorMode } = useContext(ColorModeContext);

  return (
    <div
      className={`${
        currentMode ? "bg-neutral-50" : "bg-black"
      } h-full px-[39px] pt-[50px] `}
    >
      <div className="flex flex-col items-center justify-center gap-[25px]">
        <ModeButton
          currentMode={currentMode}
          handleModeChanger={handleModeChanger}
        />

        <ColorsButton
          currentMode={currentMode}
          setCurrentColorMode={setCurrentColorMode}
        />
      </div>
    </div>
  );
};

export default RightSideBar;
