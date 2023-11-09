import { createContext, useState } from "react";

export const ModeContext = new createContext({
  currentMode: true,
  setCurrentMode: () => false,
});

export const ModeProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(true);
  const value = { currentMode, setCurrentMode };
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};
