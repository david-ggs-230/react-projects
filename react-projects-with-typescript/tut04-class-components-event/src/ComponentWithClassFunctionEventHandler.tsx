import React from "react";

interface ComponentState {
  counter: number;
}

class ComponentWithClassFunctionEventHandler extends React.Component<
  object,
  ComponentState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleIncrementBtnClick = this.handleIncrementBtnClick.bind(this);
    this.handleDecrementBtnClick = this.handleDecrementBtnClick.bind(this);
  }
  handleIncrementBtnClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  handleDecrementBtnClick() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }
  render() {
    return (
      <>
        <div style={{ marginTop: "20px" }}>Counter: {this.state.counter}</div>
        <div>
          <button onClick={() => this.handleIncrementBtnClick()}>
            Increment
          </button>
          <button
            onClick={() => this.handleDecrementBtnClick()}
            style={{
              display: "inline",
              marginLeft: "20px",
            }}
          >
            Decrement
          </button>
        </div>
      </>
    );
  }
}

export default ComponentWithClassFunctionEventHandler;
