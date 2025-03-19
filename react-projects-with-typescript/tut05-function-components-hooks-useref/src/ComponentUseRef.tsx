import "./list-style.css";
import { useState, useRef } from "react";

const ComponentUseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const handleInputChange = () => {
    if (labelRef.current && inputRef.current) {
      labelRef.current.innerText = inputRef.current.value;
    }
  };

  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number>(NaN);
  const startTimer = () => {
    if (!isNaN(timerRef.current)) return; // Don't start a new timer if one is already running

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      // Clear the timer if it exists
      clearInterval(timerRef.current);
    }
    // Reset the timerRef to NaN
    timerRef.current = NaN;
  };
  const prevCountRef = useRef(-1);
  const [count, setCount] = useState(0);

  const handleCountChange = () => {
    setCount((prev) => {
      prevCountRef.current = prev;
      return prev + 1;
    });
  };

  return (
    <>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useRef: Accessing real DOM Elements directly</div>
        </h5>
        <div style={{ marginTop: "0px" }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter input field data"
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          Input Value in HTML DOM:{" "}
          <span style={{ color: "red" }} ref={labelRef} />
        </div>
      </div>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useRef: Persisting Values Across Renders</div>
        </h5>
        <div style={{ marginTop: "0px" }}>
          Timer:<span className="red-color"> {seconds} </span> seconds
        </div>
        <div style={{ marginTop: "0px" }}>
          <button onClick={startTimer}>Start</button>
          <button
            style={{
              marginLeft: "10px",
            }}
            onClick={stopTimer}
          >
            Stop
          </button>
        </div>
      </div>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useRef: Storing Previous State</div>
        </h5>
        <div style={{ marginTop: "0px" }}>Current count: {count}</div>{" "}
        <div style={{ marginTop: "0px" }}>
          Previous count:{" "}
          {prevCountRef.current < 0 ? "N/A" : prevCountRef.current}
        </div>
        <div style={{ marginTop: "0px" }}>
          <button onClick={handleCountChange}>Increment</button>
        </div>
      </div>
    </>
  );
};

export default ComponentUseRef;
