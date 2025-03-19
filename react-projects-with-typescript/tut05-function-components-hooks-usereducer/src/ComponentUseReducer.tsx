import "./list-style.css";
import { useReducer } from "react";

const ComponentUseReducer = () => {
  const initialState = { count: 0, color: "black" };
  const reducer = (
    state: { count: number; color: string },
    action: { type: string },
  ) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1, color: "red" };
      case "decrement":
        return { ...state, count: state.count - 1, color: "green" };
      case "reset":
        return { ...state, count: 0, color: "blue" };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (type: { type: string }) => {
    dispatch(type);
  };

  return (
    <>
      <div>
        <h5
          className="blue-color"
          style={{ marginTop: "20px", marginBottom: "0px" }}
        >
          <div>useReducer: handle more complex state updates and logic</div>
        </h5>
        <div style={{ marginTop: "0px" }}>
          Count:{" "}
          <span style={{ color: state.color, fontWeight: "bold" }}>
            {state.count}
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => handleClick({ type: "increment" })}>
            Increment
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => handleClick({ type: "decrement" })}
          >
            Decrement
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => handleClick({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default ComponentUseReducer;
