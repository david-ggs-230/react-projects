import React from "react";
import Person from "./Person";

class ChildComponentWithPropsArgs extends React.Component<Person> {
  render() {
    // Accessing props
    const {
      name = "Unknown Name",
      age = NaN,
      location = "Unknown Location",
    } = this.props;
    return (
      <>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Location: {location}</div>
      </>
    );
  }
}

export default ChildComponentWithPropsArgs;
