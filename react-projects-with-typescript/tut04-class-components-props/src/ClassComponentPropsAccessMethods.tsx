import React from "react";
import Person from "./Person";

class ClassComponentPropsAccessMethods extends React.Component<Person> {
  render() {
    // Accessing props
    const {
      name = "Unknown",
      age = NaN,
      location = "Unknown",
      propAccess = "default",
    } = this.props;

    return (
      <>
        {(propAccess === "this" || propAccess === "default") && (
          <>
            <div>Name: {this.props.name}</div>
            <div>Age: {this.props.age}</div>
            <div>Location: {this.props.location}</div>
          </>
        )}
        {propAccess === "destructuring" && (
          <>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Location: {location}</div>
          </>
        )}
      </>
    );
  }
}

export default ClassComponentPropsAccessMethods;
