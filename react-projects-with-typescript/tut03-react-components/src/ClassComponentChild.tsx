import React from "react";
import Person from "./Person";

class ClassComponentChild extends React.Component<Person> {
  render() {
    return (
      <li>
        <a>
          <h3>{this.props.label}</h3>
          <div>Name: {this.props.name}</div>
          <div>Age: {this.props.age}</div>
          <div>Location: {this.props.location}</div>
        </a>
      </li>
    );
  }
}

export default ClassComponentChild;
