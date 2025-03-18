import { useContext } from "react";
import { ValueContext } from "./CreateContextObjects";

import "./list-style.css";

const ComponentUseContextValue = () => {
  // Access context value
  const value = useContext(ValueContext);
  return (
    <>
      <h5
        className="blue-color"
        style={{ marginTop: "20px", marginBottom: "0px" }}
      >
        <div>useContext with an initial value</div>
      </h5>
      <div style={{ marginTop: "0px" }}>
        initial context value: <span className="red-color">{value}</span>
      </div>
    </>
  );
};

export default ComponentUseContextValue;
