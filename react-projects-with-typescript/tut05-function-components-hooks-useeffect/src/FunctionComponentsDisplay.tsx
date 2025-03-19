import ComponentUseEffect from "./ComponentUseEffect";
import "./list-style.css";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>React Hook: useEffect</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect</h3>
            <div>
              <ComponentUseEffect />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
