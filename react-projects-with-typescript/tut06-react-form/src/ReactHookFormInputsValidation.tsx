import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const ReactHookFormInputsValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

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
    reset();
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
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onFormSubmit)().catch((error) => {
              console.error("Form submission error:", error);
            });
          }}
        >
          <div style={{ marginTop: 10 }} className="form-group">
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              {...register("name", {
                required: "You must enter a name",
                minLength: {
                  value: 4,
                  message: "Name must be at least 4 characters",
                },
                maxLength: {
                  value: 128,
                  message: "Name must be at most 128 characters",
                },
              })}
              onChange={handleChange}
            />
            {/*<p><ErrorMessage errors={errors} name="name" /></div>*/}
            {errors.name && typeof errors.name.message === "string" && (
              <div className="red-color">{errors.name.message}</div>
            )}
          </div>
          <div style={{ marginTop: 10 }} className="form-group">
            <label htmlFor="age" style={labelStyle}>
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter age"
              {...register("age", {
                valueAsNumber: true,
                min: { value: 1, message: "Age must be at least 1 years old" },
                max: {
                  value: 150,
                  message: "Age must be at most 150 years old",
                },
              })}
              onChange={handleChange}
            />
            {errors.age && typeof errors.age.message === "string" && (
              <div className="red-color">{errors.age.message}</div>
            )}
          </div>
          <div style={{ marginTop: 10 }} className="form-group">
            <label htmlFor="location" style={labelStyle}>
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              {...register("location", {
                required: "You must enter a location",
                minLength: {
                  value: 2,
                  message: "Location must be at least 2 characters",
                },
                maxLength: {
                  value: 128,
                  message: "Location must be at most 128 characters",
                },
              })}
              onChange={handleChange}
            />
            {errors.location && typeof errors.location.message === "string" && (
              <div className="red-color">{errors.location.message}</div>
            )}
          </div>
          <div style={{ marginTop: 10 }} className="form-group">
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

export default ReactHookFormInputsValidation;
