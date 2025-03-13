import React from "react";
import Person from "./Person";

const ChildComponentWithDestrucingPropsArgs: React.FC<Person> = ({
  name = "Unknown Name",
  age = NaN,
  location = "Unknown Location",
}) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Location: {location}</div>
    </>
  );
};

export default ChildComponentWithDestrucingPropsArgs;
