import { useEffect, useRef, memo } from "react";
import "./list-style.css";

const ComponentUseCallbackChild = memo(function ComponentUseCallbackChild({
  count,
  func,
}: {
  count: number;
  func: (m: number) => number;
}) {
  const messagesRef = useRef([] as string[]);
  // Declare state with the useState hook
  const renderRef = useRef<number>(0);
  useEffect(() => {
    // Effect function - equivalent to componentDidMount and componentDidUpdate
    const messages = messagesRef.current;
    messages.push("Component mounted");
    return () => {
      // Cleanup function - equivalent to componentWillUnmount
      messages.push("Component unmounted");
    };
  }, []);
  useEffect(() => {
    messagesRef.current.push(`Calling: func(${count})`);
    func(count);
  }, [count, func]);
  return (
    <>
      {messagesRef.current.push(`Calling render: ${renderRef.current++}`) > 0
        ? ""
        : ""}
      <div style={{ marginTop: "10px" }}>
        Counter:<span className="red-color"> {count} </span>
      </div>
      <h4>Child Log Messages:</h4>
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
});

export default ComponentUseCallbackChild;
