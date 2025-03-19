import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const ReactHookFormComponent = () => {
  const { register, handleSubmit } = useForm();

  const labelNameRef = useRef<HTMLSpanElement>(null);
  const labelAgeRef = useRef<HTMLSpanElement>(null);
  const labelLocationRef = useRef<HTMLSpanElement>(null);

  const labelStyle = {
    display: "inline-block",
    width: "2.5rem",
    marginRight: "1.5rem",
  };
  const onFormSubmit = () => {
    if (
      labelNameRef.current &&
      labelAgeRef.current &&
      labelLocationRef.current
    ) {
      alert(
        JSON.stringify({
          name: labelNameRef.current.innerText,
          age: labelAgeRef.current.innerText,
          location: labelLocationRef.current.innerText,
        }),
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if (name === "name") {
      if (labelNameRef.current) {
        labelNameRef.current.innerText = e.target.value;
      }
    } else if (name === "age") {
      if (labelAgeRef.current) {
        labelAgeRef.current.innerText = e.target.value;
      }
    } else if (name === "location") {
      if (labelLocationRef.current) {
        labelLocationRef.current.innerText = e.target.value;
      }
    }
  };

  return (
    <div>
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onFormSubmit)().catch((error) => {
              console.error("Form submission error:", error);
            });
          }}
        >
          <div style={{ marginTop: 10 }}>
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              {...register("name")}
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
              placeholder="Enter age"
              {...register("age")}
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
              placeholder="Enter location"
              {...register("location")}
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

export default ReactHookFormComponent;
