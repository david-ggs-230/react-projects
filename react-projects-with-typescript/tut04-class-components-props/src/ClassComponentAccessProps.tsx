import React from "react";
import Person from "./Person";

class ClassComponentAccessProps extends React.Component<Person> {
  // Default props
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

export default ClassComponentAccessProps;
