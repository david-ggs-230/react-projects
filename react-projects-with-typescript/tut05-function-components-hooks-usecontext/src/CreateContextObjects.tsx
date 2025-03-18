import React, { Dispatch, SetStateAction } from "react";

// Create a context
const ValueContext = React.createContext("default value");

type ThemeType = {
  theme: { color: string; backgroundColor: string };
  setTheme: Dispatch<
    SetStateAction<{ color: string; backgroundColor: string }>
  >;
};
// Create a Context
const ThemeContext = React.createContext<ThemeType>({
  theme: { color: "black", backgroundColor: "white" },
  setTheme: () => {},
});
export { ValueContext, ThemeContext };
