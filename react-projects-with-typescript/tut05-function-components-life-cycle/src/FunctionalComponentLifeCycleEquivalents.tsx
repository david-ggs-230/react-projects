import React, { useState, useEffect } from "react";

const FunctionalComponentLifeCycleEquivalents: React.FC = () => {
  const [count, setCount] = useState(0);
  const logMessagesRef = React.useRef([] as string[]);

  // Equivalent to Component first mount and componentWillUnmount
  useEffect(() => {
    const logMessages = logMessagesRef.current;
    logMessages.push("Component first mount");
    logMessagesRef.current = logMessages;
    return () => {
      const logMessage = `Equivalent: componentWillUnmount()`;
      logMessages.push(logMessage);
      logMessagesRef.current = logMessages;
    };
  }, []);
  // Equivalent to componentDidMount and componentDidUpdate
  useEffect(() => {
    const logMessage = `Equivalent: componentDidMount() / componentDidUpdate(), count: ${count}`;
    logMessagesRef.current.push(logMessage);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    const logMessage = `handleIncrement(), count: ${count + 1}`;
    logMessagesRef.current.push(logMessage);
  };

  return (
    <>
      <div className="list-container">
        <h2>Function Component Life Cycle</h2>
        <p>
          Count: {count} <button onClick={handleIncrement}>Increment</button>
        </p>
        <h4>Log Messages:</h4>
        <ol>
          {logMessagesRef.current.map((message, index) => (
            <li key={index} className="list-item" style={{ margin: "1px" }}>
              <div>
                {index + 1}. {message}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default FunctionalComponentLifeCycleEquivalents;
