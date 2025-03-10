import React from "react";
import Person from "./Person";

const FunctionComponentWithPropsArgs: React.FC<Person> = (props: Person) => {
  const {
    name = "Unknown",
    age = NaN,
    location = "Unknown",
    propAccess = "default",
  } = { ...props };

  return (
    <>
      {propAccess === "default" && (
        <>
          <div>Name: {props.name ? props.name : "Unknown"}</div>
          <div>Age: {props.age ? props.age : NaN}</div>
          <div>Location: {props.location ? props.location : "Unknown"}</div>
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
};

export default FunctionComponentWithPropsArgs;
