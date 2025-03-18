import { useState, useEffect, useRef } from "react";
import "./list-style.css";

const ComponentUseEffect = () => {
  // Declare state with the useState hook
  const messages = useRef([] as string[]);
  const [counter, setCounter] = useState(0);
  // Increment function
  const handleBtnClick = () => {
    setCounter((prevState) => prevState + 1);
    messages.current.push(
      "Button was Clicked! Count is " + (counter + 1) + ".",
    );
  };

  useEffect(() => {
    // Effect function - equivalent to componentDidMount and componentDidUpdate
    const currentMessages = messages.current;
    messages.current.push("Component mounted for [] <dependency>");
    return () => {
      // Cleanup function - equivalent to componentWillUnmount
      currentMessages.push("Component unmounted for [] <dependency>");
    };
  }, []); // Empty dependency array to run only once on initial render
  useEffect(() => {
    // This will run after the component mounts and every time `count` changes
    const currentMessages = messages.current;
    messages.current.push(
      "Component mounted or updated for [counter] <dependency>",
    );

    // Cleanup function - equivalent to componentWillUnmount
    return () => {
      // Cleanup function - equivalent to componentWillUnmount
      currentMessages.push("Component unmounted for [counter] <dependency>");
    };
  }, [counter]); // The effect depends on the `count` state
  return (
    <>
      {messages.current.push("Component Render") > 0 ? "" : ""}
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div style={{ textAlign: "left" }}>
            <div>Two useEffect hooks:</div>
            <div style={{ marginLeft: "20px" }}>
              <div>{"1. useEffect with empty dependency array:"}</div>{" "}
              <div style={{ marginLeft: "40px" }}>
                {"useEffect(() => {...},[]);"}
              </div>
              <div>{"2. useEffect with [counter] dependency array:"}</div>{" "}
              <div style={{ marginLeft: "40px" }}>
                {"useEffect(() => {...},[counter]);"}
              </div>
            </div>
          </div>
        </h5>
      </div>
      <div style={{ marginTop: "20px" }}>
        Counter: {counter}
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
      <h4>Log Messages:</h4>
      <ol>
        {messages.current.map((message, index) => (
          <li key={index} className="list-item" style={{ margin: "1px" }}>
            <div>
              {index + 1}. {message}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ComponentUseEffect;
