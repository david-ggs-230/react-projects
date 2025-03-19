import React, { useState } from "react";
import "./App.css";

const ReactFormControlledComponent: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    location: "",
  });
  const labelStyle = {
    display: "inline-block",
    width: "2.5rem",
    marginRight: "1.5rem",
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formState));
  };

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: 20 }}>
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={formState.name}
              onChange={changeHandler}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="age" style={labelStyle}>
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter age"
              value={formState.age}
              onChange={changeHandler}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="location" style={labelStyle}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter location"
              value={formState.location}
              onChange={changeHandler}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>
        <h4 style={{ marginBottom: "0px" }}>Name: {formState.name}</h4>
        <div>Age: {formState.age}</div>
        <div>Location: {formState.location}</div>
      </div>
    </div>
  );
};

export default ReactFormControlledComponent;
