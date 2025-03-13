import React from "react";
import Person from "./Person";

class ChildComponentWithDefaultProps extends React.Component<Person> {
  static defaultProps = {
    name: "Unknown Name",
    age: NaN,
    location: "Unknown Location",
  };
  render() {
    // Accessing props
    const { name, age, location } = this.props;

    return (
      <>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Location: {location}</div>
      </>
    );
  }
}

export default ChildComponentWithDefaultProps;
