import ComponentUseContext from "./ComponentUseContext";
import "./list-style.css";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>React Hook: useContext</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useContext</h3>
            <div>
              <ComponentUseContext />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
