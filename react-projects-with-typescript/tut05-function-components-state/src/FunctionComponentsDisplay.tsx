import ParentComponentNoChild from "./ParentComponentNoChild";
import ParentComponentWithChild from "./ParentComponentWithChild";
import "./list-style.css";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>Using State in a React Function Component</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent Counter -- No Child</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Parent: update its own counter
            </h5>
            <div>
              <ParentComponentNoChild />
            </div>
          </div>
        </li>

        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent Counter -- With Child</h3>
            <div>
              <ParentComponentWithChild />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
