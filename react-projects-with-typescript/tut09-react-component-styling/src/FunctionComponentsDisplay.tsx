import ComponentUsingCSSModules from "./ComponentUsingCSSModules";
import ComponentUsingInlineStyle from "./ComponentUsingInlineStyle";
import ComponentUsingPlainCSS from "./ComponentUsingPlainCSS";
import ComponentUsingSVG from "./ComponentUsingSVG";
import ComponentUsingTailwindCSS from "./ComponentUsingTailwindCSS";
import "./list-style.css";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>React Component Styling</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Plain CSS</h3>
            <div>
              <ComponentUsingPlainCSS />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Inline Styling</h3>
            <div>
              <ComponentUsingInlineStyle />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>CSS Modules</h3>
            <div>
              <ComponentUsingCSSModules />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Tailwind CSS in React</h3>
            <div>
              <ComponentUsingTailwindCSS />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Using SVG</h3>
            <div>
              <ComponentUsingSVG />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
