import React, { useContext, useState } from "react";
import { ModeContext } from "../../contexts/modeContext";
import ModeButton from "./ModeButton";
import ColorsButton from "./ColorsButton";
import { ColorModeContext } from "../../contexts/colorModeContext";
import NavBarButtons from "./NavBarButtons";

const RightSideBar = () => {
  const { currentMode, setCurrentMode } = useContext(ModeContext);

  const handleModeChanger = () => {
    setCurrentMode((prev) => !prev);
  };

  const { currentColorMode, setCurrentColorMode } =
    useContext(ColorModeContext);

  return (
    <div
      className={`${
        currentMode ? "bg-neutral-50" : "bg-black"
      } h-full px-[39px] pt-[50px] rounded-tl-3xl
      rounded-bl-3xl`}
    >
      <div className="flex flex-col items-center justify-center gap-[25px] mb-[100px]">
        <ModeButton
          currentMode={currentMode}
          handleModeChanger={handleModeChanger}
        />

        <ColorsButton
          currentMode={currentMode}
          setCurrentColorMode={setCurrentColorMode}
        />
      </div>
      <NavBarButtons
        currentMode={currentMode}
        currentColorMode={currentColorMode}
      />
    </div>
  );
};

export default RightSideBar;
