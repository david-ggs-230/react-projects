import { useForm } from "react-hook-form";
import "./App.css";

interface FormComponentPeopleProps {
  serverError: boolean;
  addPeople: ({
    firstName,
    lastName,
    age,
  }: {
    firstName: string;
    lastName: string;
    age: number;
  }) => Promise<void>;
}
interface FormData {
  firstName: string;
  lastName: string;
  age: number;
}

const FormComponentPeople: React.FC<FormComponentPeopleProps> = (props) => {
  const { serverError, addPeople } = { ...props };
  const { register, handleSubmit, reset } = useForm<FormData>();

  const labelStyle = {
    display: "inline-block",
    width: "6rem",
    marginRight: "1.5rem",
  };

  return (
    <div>
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(addPeople)();
            reset();
          }}
        >
          <div style={{ marginTop: 20 }}>
            <label htmlFor="firstName" style={labelStyle}>
              First Name:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              {...register("firstName")}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="lastName" style={labelStyle}>
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              {...register("lastName")}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="age" style={labelStyle}>
              Age:
            </label>
            <input type="number" placeholder="Enter age" {...register("age")} />
          </div>
          <div style={{ marginTop: 10 }}>
            <input type="submit" value="Submit" disabled={serverError} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormComponentPeople;
