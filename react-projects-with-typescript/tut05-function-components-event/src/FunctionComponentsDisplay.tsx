import FunctionComponentWithEventHandlerWithNoArgs from "./FunctionComponentWithEventHandlerWithNoArgs";
import FunctionComponentWithArrowFunctionWithNoArgs from "./FunctionComponentWithArrowFunctionWithNoArgs";
import FunctionComponentWithEventHandlerWithExtraArgs from "./FunctionComponentWithEventHandlerWithExtraArgs";
import FunctionComponentWithArrowFunctionWithExtraArgs from "./FunctionComponentWithArrowFunctionWithExtraArgs";
import "./list-style.css";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>Event Handling in a React Function Component</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handler by Function Methods</h3>
            <h5
              className="blue-color"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              EventHandler: function without arguments
            </h5>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Signature: function xxxhandler(){"{...}"}
            </h5>
            <div>
              <FunctionComponentWithEventHandlerWithNoArgs />
            </div>
          </div>
        </li>

        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handler by Arrow Functions</h3>
            <h5
              className="blue-color"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              EventHandler: arrow function without arguments
            </h5>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Signature: const xxxhandler=(){" => {...}"}
            </h5>
            <div>
              <FunctionComponentWithArrowFunctionWithNoArgs />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handler by Function Methods with Extra Arguments</h3>
            <h5
              className="blue-color"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              EventHandler: function with extra arguments
            </h5>
            <h5
              className="blue-color"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              Signature: function xxxhandler{"({arg1,arg2}){...}"}
            </h5>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Signature: function xxxhandler{"({arg1,arg2}, event){...}"}
            </h5>
            <div>
              <FunctionComponentWithEventHandlerWithExtraArgs />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handler by Arrow Function with Extra Arguments</h3>
            <h5
              className="blue-color"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              EventHandler: arrow function with extra arguments
            </h5>
            <h5
              className="blue-color"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              Signature: const xxxhandler{"=({arg1,arg2}) => {...}"}
            </h5>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Signature: const xxxhandler{"=({arg1,arg2}, event) => {...}"}
            </h5>
            <div>
              <FunctionComponentWithArrowFunctionWithExtraArgs />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
