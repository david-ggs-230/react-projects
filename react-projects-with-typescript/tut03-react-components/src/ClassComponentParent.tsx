import React from "react";
import Person from "./Person";
import ClassComponentChild from "./ClassComponentChild";
class ClassComponentParent extends React.Component<Person> {
  render() {
    return (
      <li style={{ marginTop: "2rem" }}>
        <a>
          <h2>{this.props.label}</h2>
          <div>Name: {this.props.name}</div>
          <div>Age: {this.props.age}</div>
          <div>Location: {this.props.location}</div>
        </a>
        <ul>
          <ClassComponentChild
            label={"Child 1: As Nested Component"}
            name={"John Smith"}
            age={26}
            location={"New York"}
          ></ClassComponentChild>
          <li>
            <a>
              <h3>Child 2: As HTML Elements</h3>
              <div>Name: David Smith</div>
              <div>Age: 23</div>
              <div>Location: New York</div>
            </a>
          </li>
          {this.props.children}
        </ul>
      </li>
    );
  }
}

export default ClassComponentParent;
