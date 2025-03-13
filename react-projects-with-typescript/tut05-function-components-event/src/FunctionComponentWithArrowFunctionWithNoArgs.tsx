import React, { useState } from "react";

const FunctionComponentWithArrowFunctionWithNoArgs: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrementBtnClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrementBtnClick = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

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

export default FunctionComponentWithArrowFunctionWithNoArgs;
