import React, { useState } from "react";

const FunctionComponentWithArrowFunctionWithExtraArgs: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [messages, setMessages] = useState([] as string[]);
  const handleIncrementBtnClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleDecrementBtnClick = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const handleMessagesUpdateClick = ({
    message,
    count,
  }: {
    message: string;
    count: number;
  }) => {
    setMessages((prevState) => [
      ...prevState,
      `${message}, Current counter: ${count}`,
    ]);
  };
  const handleMessagesUpdateClickWithEvent = (
    {
      message,
      count,
    }: {
      message: string;
      count: number;
    },
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setMessages((prevState) => [
      ...prevState,
      `${message}, Current counter: ${count}, e: ${(event?.target as HTMLElement)?.innerHTML}`,
    ]);
  };

  return (
    <>
      <div>
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
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleMessagesUpdateClick.bind(this, {
            message: "Button 1",
            count: counter,
          })}
        >
          Button 1
        </button>
        <button
          onClick={() =>
            handleMessagesUpdateClick({
              message: "Button 2",
              count: counter,
            })
          }
          style={{ marginLeft: "20px" }}
        >
          Button 2
        </button>

        <button
          onClick={(e) =>
            handleMessagesUpdateClickWithEvent(
              {
                message: "Button 3",
                count: counter,
              },
              e,
            )
          }
          style={{ marginLeft: "20px" }}
        >
          Button 3
        </button>
      </div>
      <div>
        {messages.length > 0 && (
          <div className="list-container">
            <h5>LogMessages</h5>
            <ol>
              {messages.map((message, index) => (
                <li key={index} className="list-item">
                  <div>
                    {index + 1}. {message}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  );
};

export default FunctionComponentWithArrowFunctionWithExtraArgs;
