import React from "react";

const ChildComponent: React.FC<{
  parentCounter: number;
  handleParentCounter: () => void;
}> = ({ parentCounter, handleParentCounter }) => {
  // Declare state with the useState hook
  const [childCounter, setChildCounter] = React.useState(0);

  // Increment function
  const handleChildBtnClick = () => {
    setChildCounter((prevState) => prevState + 1);
  };
  return (
    <div style={{ marginTop: "0px" }}>
      <div>Parent Counter in Child: {parentCounter}</div>
      <div>Child Counter in Child: {childCounter}</div>
      <div>
        <button
          onClick={handleParentCounter}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          In Child: Parent ++
        </button>
        <button
          onClick={handleChildBtnClick}
          style={{
            display: "inline",
            marginLeft: "20px",
          }}
        >
          In Child: Child ++
        </button>
      </div>
    </div>
  );
};

export default ChildComponent;
