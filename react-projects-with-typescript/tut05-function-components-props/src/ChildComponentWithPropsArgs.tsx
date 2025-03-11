import Person from "./Person";

const ChildComponentWithPropsArgs: React.FC<Person> = (props: Person) => {
  const {
    name = "Unknown Name",
    age = NaN,
    location = "Unknown Location",
  } = { ...props };
  return (
    <>
      {/*<div>Name: {props.name ? props.name : "Unknown Name"}</div>*/}
      {/*<div>Age: {props.age ? props.age : "NaN"}</div>*/}
      {/*<div>
        Location: {props.location ? props.location : "Unknown Location"}
      </div> */}
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Location: {location}</div>
    </>
  );
};

export default ChildComponentWithPropsArgs;
