import { useState, useRef, useCallback } from "react";
import ComponentUseCallbackChild from "./ComponentUseCallbackChild";
import "./list-style.css";

const ComponentUseCallback = () => {
  const messagesRef = useRef([] as string[]);
  // Declare state with the useState hook
  const [counter, setCounter] = useState(10);
  const [rerender, setRerender] = useState(true);
  const renderRef = useRef<number>(0);

  const handleCountChange = () => {
    messagesRef.current.push(`Button Click: Counter++`);
    setCounter(counter + 1);
  };
  const handleRerender = () => {
    messagesRef.current.push(`Button Click: Re-Render`);
    setRerender(!rerender);
  };
  const func1 = useCallback(
    (num: number): number => {
      messagesRef.current.push(`Calling: func1(${counter})`);
      return num + 3;
    },
    [counter],
  );
  const func2 = (num: number): number => {
    messagesRef.current.push(`Calling: func1(${num})`);
    return num + 3;
  };
  return (
    <>
      {messagesRef.current.push(`Calling render: ${renderRef.current++}`) > 0
        ? ""
        : ""}
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useCallback: Skipping re-rendering of child components</div>
        </h5>
        <div style={{ marginTop: "10px" }}>
          Counter:<span className="red-color"> {counter} </span>
        </div>

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleCountChange}>Counter++</button>
          <button
            style={{
              marginLeft: "10px",
            }}
            onClick={handleRerender}
          >
            Re-Render
          </button>
        </div>
      </div>
      <h4>Parent Log Messages:</h4>
      <ol>
        {messagesRef.current.map((message, index) => (
          <li key={index} className="list-item" style={{ margin: "1px" }}>
            <div>
              {index + 1}. {message}
            </div>
          </li>
        ))}
      </ol>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>With useCallback: Skipping re-rendering of child components</div>
        </h5>
      </div>
      <ComponentUseCallbackChild count={counter} func={func1} />
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>Without useCallback: Re-rendering of child components</div>
        </h5>
      </div>
      <ComponentUseCallbackChild count={counter} func={func2} />
    </>
  );
};

export default ComponentUseCallback;
