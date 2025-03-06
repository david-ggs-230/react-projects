import React from "react";

interface ParentComponentState {
  parentCounter: number;
}

class ParentComponentNoChild extends React.Component<
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
          Parent Counter: {this.state.parentCounter}
          <button
            onClick={this.handleParentBtnClick}
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
  }
}

export default ParentComponentNoChild;
