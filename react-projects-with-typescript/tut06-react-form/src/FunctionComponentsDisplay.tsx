import "./list-style.css";
import ReactHookFormInputsValidation from "./ReactHookFormInputsValidation";
import ReactFormControlledComponent from "./ReactFormControlledComponent";
import ReactFormUncontrolledComponent from "./ReactFormUncontrolledComponent";
import ReactHookFormComponent from "./ReactHookFormComponent";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>React Form</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Controlled Component</h3>
            <div>
              <ReactFormControlledComponent />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Uncontrolled Component</h3>
            <div>
              <ReactFormUncontrolledComponent />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>The useForm Library</h3>
            <div>
              <ReactHookFormComponent />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useForm with Validation</h3>
            <div>
              <ReactHookFormInputsValidation />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
