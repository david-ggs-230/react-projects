import React from "react";

const ParentComponentNoChild = () => {
  // Declare state with the useState hook
  const [parentCounter, setParentCounter] = React.useState(0);

  // Increment function
  const handleParentBtnClick = () => {
    setParentCounter((prevState) => prevState + 1);
  };

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

export default ParentComponentNoChild;
