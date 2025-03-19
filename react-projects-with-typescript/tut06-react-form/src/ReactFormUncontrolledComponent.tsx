import React, { useRef } from "react";
import "./App.css";

const ReactFormUncontrolledComponent: React.FC = () => {
  const labelNameRef = useRef<HTMLSpanElement>(null);
  const labelAgeRef = useRef<HTMLSpanElement>(null);
  const labelLocationRef = useRef<HTMLSpanElement>(null);

  const labelStyle = {
    display: "inline-block",
    width: "2.5rem",
    marginRight: "1.5rem",
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      JSON.stringify({
        name: labelNameRef.current?.innerText,
        age: labelAgeRef.current?.innerText,
        location: labelLocationRef.current?.innerText,
      }),
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name" && labelNameRef.current) {
      labelNameRef.current.innerText = value;
    } else if (name === "age" && labelAgeRef.current) {
      labelAgeRef.current.innerText = value;
    } else if (name === "location" && labelLocationRef.current) {
      labelLocationRef.current.innerText = value;
    }
  };

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>
        <h4 style={{ marginBottom: "0px" }}>
          Name: <span ref={labelNameRef}></span>
        </h4>
        <div>
          Age: <span ref={labelAgeRef}></span>
        </div>
        <div>
          Location: <span ref={labelLocationRef}></span>
        </div>
      </div>
    </div>
  );
};

export default ReactFormUncontrolledComponent;
