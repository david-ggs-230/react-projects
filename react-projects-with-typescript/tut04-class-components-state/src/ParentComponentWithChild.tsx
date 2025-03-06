import React from "react";
import ChildComponent from "./ChildComponent";

interface ParentComponentState {
  parentCounter: number;
}

class ParentComponentWithChild extends React.Component<
  object,
  ParentComponentState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      parentCounter: 0,
    };
  }
  handleParentBtnClick = () => {
    this.setState((prevState) => ({
      parentCounter: prevState.parentCounter + 1,
    }));
  };

  render() {
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          Parent Counter in Parent: {this.state.parentCounter}
          <button
            onClick={this.handleParentBtnClick}
            style={{
              display: "inline",
              marginLeft: "20px",
            }}
          >
            In Parent: Parent ++
          </button>
        </div>
        <ChildComponent
          parentCounter={this.state.parentCounter}
          handleClick={this.handleParentBtnClick}
        />
      </>
    );
  }
}

export default ParentComponentWithChild;
