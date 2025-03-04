import React from "react";
import Person from "./Person";
import FunctionComponentChild from "./FunctionComponentChild";

const FunctionComponentParent: React.FC<Person> = ({
  label,
  name,
  age,
  location,
  children,
}) => {
  return (
    <li style={{ marginTop: "2rem" }}>
      <a>
        <h2>{label}</h2>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Location: {location}</div>
      </a>
      <ul>
        <FunctionComponentChild
          label={"Child 1: As Nested Component"}
          name={"John Smith"}
          age={26}
          location={"New York"}
        ></FunctionComponentChild>
        <li>
          <a>
            <h3>Child 2: As HTML Elements</h3>
            <div>Name: David Smith</div>
            <div>Age: 23</div>
            <div>Location: New York</div>
          </a>
        </li>
        {children}
      </ul>
    </li>
  );
};

export default FunctionComponentParent;
