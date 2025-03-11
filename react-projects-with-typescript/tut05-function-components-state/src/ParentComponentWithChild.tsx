import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponentWithChild = () => {
  // Declare state with the useState hook
  const [parentCounter, setParentCounter] = React.useState(0);

  // Increment function
  const handleParentBtnClick = () => {
    setParentCounter((prevState) => prevState + 1);
  };
  return (
    <>
      <h5 className="blue-color" style={{ marginBottom: "0px" }}>
        Parent: update its own counter
      </h5>
      <div style={{ marginTop: "0px" }}>
        Parent Counter in Parent: {parentCounter}
        <button
          onClick={handleParentBtnClick}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          In Parent: Parent ++
        </button>
      </div>
      <h5 className="blue-color" style={{ marginBottom: "0px" }}>
        Child: update its own counter & its parent counter
      </h5>
      <ChildComponent
        parentCounter={parentCounter}
        handleParentCounter={handleParentBtnClick}
      />
    </>
  );
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        Parent Counter: {parentCounter}
        <button
          onClick={handleParentBtnClick}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default ParentComponentWithChild;
