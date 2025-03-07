import React from "react";
interface ComponentLifeCycleState {
  count: number;
  rerender: boolean;
}

class ComponentLifeCycle extends React.Component<
  object,
  ComponentLifeCycleState
> {
  static logMessages: string[] = [];
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
      rerender: true,
    };
    if (!ComponentLifeCycle.logMessages) ComponentLifeCycle.logMessages = [];
    ComponentLifeCycle.logMessages.push(
      "constructor(), count: " + this.state.count,
    );
  }

  static getDerivedStateFromProps(
    props: object,
    state: ComponentLifeCycleState,
  ): Partial<ComponentLifeCycleState> | null {
    ComponentLifeCycle.logMessages.push(
      "getDerivedStateFromProps(), count: " + state.count,
    );
    return null;
  }

  componentDidMount() {
    ComponentLifeCycle.logMessages.push(
      "componentDidMount(), count: " + this.state.count,
    );
  }

  shouldComponentUpdate(nextProps: object, nextState: ComponentLifeCycleState) {
    ComponentLifeCycle.logMessages.push(
      "shouldComponentUpdate(), count: " + nextState.count,
    );
    return true;
  }

  getSnapshotBeforeUpdate(
    nextProps: object,
    nextState: ComponentLifeCycleState,
  ) {
    ComponentLifeCycle.logMessages.push(
      "getSnapshotBeforeUpdate(), count: " + this.state.count,
    );
    return nextState.count;
  }

  componentDidUpdate() {
    ComponentLifeCycle.logMessages.push(
      "componentDidUpdate(), count: " + this.state.count,
    );
  }

  componentWillUnmount() {
    ComponentLifeCycle.logMessages.push(
      "componentWillUnmount(), count: " + this.state.count,
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    ComponentLifeCycle.logMessages.push(
      "handleIncrement (), count: " + this.state.count,
    );
  };

  render() {
    ComponentLifeCycle.logMessages.push("render(), count: " + this.state.count);
    return (
      <>
        <div className="list-container">
          <h2>Class Component Life Cycle</h2>
          <p>
            Count: {this.state.count}{" "}
            <button onClick={this.handleIncrement}>Increment</button>
          </p>
          <h4>Log Messages:</h4>
          <ol>
            {ComponentLifeCycle.logMessages.map((message, index) => (
              <li key={index} className="list-item" style={{ margin: "1px" }}>
                <div>
                  {index + 1}. {message}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }
}

export default ComponentLifeCycle;
