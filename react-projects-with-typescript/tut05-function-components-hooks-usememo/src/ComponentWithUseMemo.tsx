import { useState, useMemo, useRef } from "react";
import "./list-style.css";

const ComponentWithUseMemo = () => {
  const messagesRef = useRef([] as string[]);
  // Declare state with the useState hook
  const [counter, setCounter] = useState(10);
  const [rerender, setRerender] = useState(true);
  const renderRef = useRef<number>(0);
  const func = (num: number): number => {
    messagesRef.current.push(`Calculate: F(${num})`);
    return num + 3;
  };

  // Memoized function calculation
  const funcResult = useMemo(() => func(counter), [counter]);
  const handleCountChange = () => {
    messagesRef.current.push(`Button Click: Counter++`);
    setCounter(counter + 1);
  };
  const handleRerender = () => {
    messagesRef.current.push(`Button Click: Re-Render`);
    setRerender(!rerender);
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
          <div>useMemo: Calling function with useMemo</div>
        </h5>
        <div style={{ marginTop: "10px" }}>
          Counter:<span className="red-color"> {counter} </span>
        </div>
        <div
          style={{ marginTop: "0px", marginLeft: "20px", textAlign: "left" }}
        >
          <div>
            {messagesRef.current.push(`Get result: F(${counter})`) > 0
              ? ""
              : ""}
            {`Get result: F(${counter}) = `}
            <span className="red-color">{funcResult}</span>
          </div>
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
      <h4>Log Messages:</h4>
      <ol>
        {messagesRef.current.map((message, index) => (
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

export default ComponentWithUseMemo;
