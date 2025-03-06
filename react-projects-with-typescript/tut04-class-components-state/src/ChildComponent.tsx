import React from "react";

interface ChildComponentProps {
  parentCounter: number;
  handleClick: () => void;
}
interface ChildComponentState {
  childCounter: number;
}

class ChildComponent extends React.Component<
  ChildComponentProps,
  ChildComponentState
> {
  constructor(props: ChildComponentProps) {
    super(props);
    this.state = {
      childCounter: 0,
    };
  }
  handleChildBtnClick = () => {
    this.setState((prevState) => ({
      childCounter: prevState.childCounter + 1,
    }));
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div>Parent Counter in Child: {this.props.parentCounter}</div>
        <div>Child Counter in Child: {this.state.childCounter}</div>
        <div>
          <button
            onClick={this.props.handleClick}
            style={{
              display: "inline",
              marginLeft: "20px",
            }}
          >
            In Child: Parent ++
          </button>
          <button
            onClick={this.handleChildBtnClick}
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
  }
}

export default ChildComponent;
