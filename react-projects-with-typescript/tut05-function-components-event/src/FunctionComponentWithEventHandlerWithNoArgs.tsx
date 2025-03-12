import React, { useState } from "react";

const FunctionComponentWithEventHandlerWithNoArgs: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrementBtnClick() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleDecrementBtnClick() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <div style={{ marginTop: "20px" }}>Counter: {counter}</div>
      <div>
        <button onClick={handleIncrementBtnClick}>Increment</button>
        <button
          onClick={handleDecrementBtnClick}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default FunctionComponentWithEventHandlerWithNoArgs;
