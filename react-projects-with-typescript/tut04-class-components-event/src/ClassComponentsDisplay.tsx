import React from "react";
import ComponentWithClassFunctionEventHandler from "./ComponentWithClassFunctionEventHandler";
import ComponentWithArrowFunctionEventHandler from "./ComponentWithArrowFunctionEventHandler";
import "./list-style.css";

class ClassComponentsDisplay extends React.Component {
  render() {
    return (
      <div className="list-container">
        <h2>Event Handling in a React Class Component</h2>
        <ol>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Event Handler by Class Methods</h3>
              <ComponentWithClassFunctionEventHandler />
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Event Handler by Arrow Functions</h3>
              <ComponentWithArrowFunctionEventHandler />
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default ClassComponentsDisplay;
