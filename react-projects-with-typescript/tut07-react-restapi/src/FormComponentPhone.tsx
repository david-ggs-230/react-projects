import { useForm } from "react-hook-form";
import "./App.css";

interface FormComponentPhoneProps {
  serverError: boolean;
  addPhone: ({
    name,
    capacity,
    price,
  }: {
    name: string;
    capacity: string;
    price: string;
  }) => Promise<void>;
}
interface FormData {
  name: string;
  capacity: string;
  price: string;
}

const FormComponentPhone: React.FC<FormComponentPhoneProps> = (props) => {
  const { serverError, addPhone } = { ...props };
  const { register, handleSubmit, reset } = useForm<FormData>();

  const labelStyle = {
    display: "inline-block",
    width: "3rem",
    marginRight: "1.5rem",
  };

  return (
    <div>
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(addPhone)();
            reset();
          }}
        >
          <div style={{ marginTop: 10 }}>
            <label htmlFor="name" style={labelStyle}>
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter phone name"
              {...register("name")}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="capacity" style={labelStyle}>
              Capacity:
            </label>
            <input
              type="text"
              placeholder="Enter phone capacity"
              {...register("capacity")}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="price" style={labelStyle}>
              Price:
            </label>
            <input
              type="text"
              placeholder="Enter price"
              {...register("price")}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input type="submit" value="Submit" disabled={serverError} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormComponentPhone;
