import { useContext, useRef } from "react";
import { ThemeContext } from "./CreateContextObjects";
import "./list-style.css";

const ComponentUpdateContextValue = () => {
  // Access context value
  const { theme, setTheme } = useContext(ThemeContext);
  const blueBtnBorderRef = useRef("white");
  const redBtnBorderRef = useRef("white");
  const handleClick = (color: string) => {
    if (color === "red") {
      redBtnBorderRef.current = "lightcoral";
      blueBtnBorderRef.current = "white";
    } else if (color === "blue") {
      blueBtnBorderRef.current = "lightblue";
      redBtnBorderRef.current = "white";
    }
    setTheme({ color: color, backgroundColor: color });
  };
  return (
    <>
      <h5
        className="blue-color"
        style={{ marginTop: "20px", marginBottom: "0px" }}
      >
        <div>useContext with useState to update context value</div>
      </h5>
      <div style={{ marginTop: "0px" }}>
        Context Color:{" "}
        <span style={{ color: theme.color }}>{theme.color} </span>
      </div>
      <div style={{ marginTop: "0px" }}>
        <button
          style={{ backgroundColor: redBtnBorderRef.current }}
          onClick={() => handleClick("red")}
        >
          Red
        </button>
        <button
          style={{
            marginLeft: "10px",
            backgroundColor: blueBtnBorderRef.current,
          }}
          onClick={() => handleClick("blue")}
        >
          Blue
        </button>
      </div>
    </>
  );
};

export default ComponentUpdateContextValue;
