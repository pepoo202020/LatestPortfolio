import { createContext, useState } from "react";

export const ColorModeContext = new createContext({
  currentColorMode: null,
  setCurrentColorMode: () => null,
});

export const ColorModeProvider = ({ children }) => {
  const [currentColorMode, setCurrentColorMode] = useState({
    name: "Yellow",
    value: "bg-yellow-500",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-500",
  });
  const value = { currentColorMode, setCurrentColorMode };
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};
