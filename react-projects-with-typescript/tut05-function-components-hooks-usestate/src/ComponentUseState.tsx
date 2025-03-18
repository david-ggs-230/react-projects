import { useState } from "react";
import "./list-style.css";

const ComponentUseState = () => {
  // Declare state with the useState hook
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(() => {
    return 0;
  });
  // Increment function
  const handleBtnClick = () => {
    setCounter((prevState) => prevState + 1);
  };
  // Increment function
  const handleBtn2Click = () => {
    setCounter2((prevState) => prevState + 1);
  };
  return (
    <>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useState with an initial value: </div>
          <div>{"useState(0)"}</div>
        </h5>
      </div>
      <div style={{ marginTop: "0px" }}>
        Counter 1: {counter}
        <button
          onClick={handleBtnClick}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          Increment
        </button>
      </div>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useState with a function parameter: </div>
          <div>{"useState(() => { return 0; })"}</div>
        </h5>
      </div>
      <div style={{ marginTop: "0px" }}>
        Counter 2: {counter2}
        <button
          onClick={handleBtn2Click}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default ComponentUseState;
