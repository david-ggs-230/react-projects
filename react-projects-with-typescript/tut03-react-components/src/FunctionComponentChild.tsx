import React from "react";
import Person from "./Person";

const FunctionComponentChild: React.FC<Person> = ({
  label,
  name,
  age,
  location,
}) => {
  return (
    <li>
      <a>
        <h3>{label}</h3>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Location: {location}</div>
      </a>
    </li>
  );
};

export default FunctionComponentChild;
