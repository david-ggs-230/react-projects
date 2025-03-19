import { useEffect, useRef } from "react";
import "./list-style.css";

function ComponentReactMemoNotOnChild({ count }: { count: number }) {
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
          <div>Without React.memo: Re-rendering of child components</div>
        </h5>
        <div style={{ marginTop: "10px" }}>
          Counter:<span className="red-color"> {count} </span>
        </div>
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
}

export default ComponentReactMemoNotOnChild;
