import React, { useContext } from "react";
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
      } lg:h-full lg:w-fit lg:px-[39px] lg:pt-[50px] px-2 py-2 lg:rounded-tl-3xl
      lg:rounded-bl-3xl w-full lg:relative absolute flex lg:flex-col lg:justify-start justify-center lg:gap-0 gap-2 bottom-0 lg:m-0 `}
    >
      <div className="flex lg:flex-col items-center justify-center lg:gap-[25px] gap-2 lg:mb-[80px]">
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
