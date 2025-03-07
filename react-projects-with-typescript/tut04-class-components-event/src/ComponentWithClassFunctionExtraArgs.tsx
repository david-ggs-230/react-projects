import React from "react";

interface ComponentState {
  counter: number;
  messages: string[];
}

class ComponentWithClassFunctionExtraArgs extends React.Component<
  object,
  ComponentState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      counter: 0,
      messages: [],
    };
    this.handleIncrementBtnClick = this.handleIncrementBtnClick.bind(this);
    this.handleDecrementBtnClick = this.handleDecrementBtnClick.bind(this);
    this.handleMessagesUpdateClick = this.handleMessagesUpdateClick.bind(this);
    this.handleMessagesUpdateEventClick =
      this.handleMessagesUpdateEventClick.bind(this);
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
  handleMessagesUpdateClick({
    message,
    count,
  }: {
    message: string;
    count: number;
  }) {
    this.setState((prevState) => ({
      messages: [...prevState.messages, "" + message + ", count: " + count],
    }));
  }
  handleMessagesUpdateEventClick(
    {
      message,
      count,
    }: {
      message: string;
      count: number;
    },
    e: React.MouseEvent,
  ) {
    this.setState((prevState) => ({
      messages: [
        ...prevState.messages,
        "" +
          message +
          ", count: " +
          count +
          ", e: " +
          (e?.target as HTMLElement)?.innerHTML,
      ],
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
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={this.handleMessagesUpdateClick.bind(this, {
              message: "Button 1",
              count: this.state.counter,
            })}
          >
            Button 1
          </button>
          <button
            onClick={() =>
              this.handleMessagesUpdateClick({
                message: "Button 2",
                count: this.state.counter,
              })
            }
            style={{ marginLeft: "20px" }}
          >
            Button 2
          </button>

          <button
            onClick={(e) =>
              this.handleMessagesUpdateEventClick(
                {
                  message: "Button 3",
                  count: this.state.counter,
                },
                e,
              )
            }
            style={{ marginLeft: "20px" }}
          >
            Button 3
          </button>
        </div>
        {this.state.messages.length > 0 && (
          <div className="list-container">
            <h5>LogMessages</h5>
            <ol>
              {this.state.messages.map((message, index) => (
                <li key={index} className="list-item">
                  <div>
                    {index + 1}. {message}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </>
    );
  }
}

export default ComponentWithClassFunctionExtraArgs;
