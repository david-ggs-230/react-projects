import { useState } from "react";
import { ThemeContext, ValueContext } from "./CreateContextObjects";
import ComponentUpdateContextValue from "./ComponentUpdateContextValue";
import ComponentUseContextValue from "./ComponentUseContextValue";

import "./list-style.css";

const ComponentUseContext = () => {
  const [theme, setTheme] = useState({
    color: "green",
    backgroundColor: "lightgreen",
  });

  return (
    <>
      <ValueContext.Provider value="Hello, World!">
        <ComponentUseContextValue />
      </ValueContext.Provider>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <ComponentUpdateContextValue />
      </ThemeContext.Provider>
    </>
  );
};

export default ComponentUseContext;
